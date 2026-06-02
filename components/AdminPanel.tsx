import React, { useState, useEffect } from 'react';
import { Project, addProject, updateProject, deleteProject, getAllProjects } from '../services/projectService';
import { convertGoogleDriveLink, convertYouTubeLink, getMediaType } from '../utils/mediaUtils';
import { SiteSettings, getSettings, updateSettings } from '../services/settingsService';

const AdminPanel: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceTitle: '',
    title: '',
    description: '',
    mediaUrl: '',
    category: ''
  });

  const [settings, setSettings] = useState<SiteSettings>({});
  const [settingsLoading, setSettingsLoading] = useState(false);

  const serviceOptions = [
    'التسويق الإلكتروني',
    'تصميمات سوشيال ميديا',
    'تصوير ومونتاج',
    'تعليق صوتي'
  ];

  useEffect(() => {
    loadProjects();
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const handleSaveSettings = async () => {
    try {
      setSettingsLoading(true);
      await updateSettings(settings);
      alert('تم حفظ الإعدادات بنجاح');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('حدث خطأ في حفظ الإعدادات');
    } finally {
      setSettingsLoading(false);
    }
  };



  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
      alert('حدث خطأ في تحميل المشاريع');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.serviceTitle || !formData.title || !formData.mediaUrl) {
      alert('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    try {
      let processedUrl = formData.mediaUrl;
      const mediaType = getMediaType(formData.mediaUrl);
      
      if (mediaType === 'image') {
        processedUrl = convertGoogleDriveLink(formData.mediaUrl);
      } else if (mediaType === 'youtube') {
        const youtubeEmbed = convertYouTubeLink(formData.mediaUrl);
        if (youtubeEmbed) {
          processedUrl = youtubeEmbed;
        }
      }

      const projectData = {
        ...formData,
        mediaUrl: processedUrl,
        mediaType: mediaType === 'youtube' ? 'youtube' as const : 'image' as const
      };

      if (editingProject?.id) {
        await updateProject(editingProject.id, projectData);
        alert('تم تحديث المشروع بنجاح');
      } else {
        await addProject(projectData);
        alert('تم إضافة المشروع بنجاح');
      }

      resetForm();
      loadProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('حدث خطأ في حفظ المشروع');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      serviceTitle: project.serviceTitle,
      title: project.title,
      description: project.description,
      mediaUrl: project.mediaUrl,
      category: project.category || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (projectId: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) return;

    try {
      await deleteProject(projectId);
      alert('تم حذف المشروع بنجاح');
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('حدث خطأ في حذف المشروع');
    }
  };

  const resetForm = () => {
    setFormData({
      serviceTitle: '',
      title: '',
      description: '',
      mediaUrl: '',
      category: ''
    });
    setEditingProject(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#0A1F44]">لوحة التحكم</h1>
            <button
              onClick={onBack}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-4 mt-6 border-b">
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-3 px-4 font-semibold transition-colors ${
                activeTab === 'projects'
                  ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              مشاريع معرض الأعمال
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-3 px-4 font-semibold transition-colors ${
                activeTab === 'settings'
                  ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              الإعدادات
            </button>
          </div>
        </div>

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">إعدادات صور الموقع</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">صورة قسم "لماذا سمارت ميديا ؟"</h3>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">رابط الصورة الجانبية لقسم "لماذا سمارت ميديا ؟"</label>
                  <input
                    type="url"
                    value={settings.partnerImageUrl || ''}
                    onChange={(e) => setSettings({ ...settings, partnerImageUrl: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                    placeholder="https://example.com/image.jpg أو رابط Google Drive"
                  />
                  <p className="text-sm text-gray-500 mt-1">💡 الصورة التي تظهر على الجانب في قسم "لماذا سمارت ميديا ؟"</p>
                </div>
              </div>

              <button
                onClick={handleSaveSettings}
                disabled={settingsLoading}
                className="bg-[#F59E0B] hover:bg-[#EF8C00] text-white font-bold px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {settingsLoading ? 'جاري الحفظ...' : 'حفظ الإعدادات'}
              </button>
            </div>
          </div>
        )}


        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <>
            {/* Add New Button */}
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#F59E0B] hover:bg-[#EF8C00] text-white font-bold px-8 py-3 rounded-lg shadow-lg mb-6 transition-colors"
              >
                + إضافة مشروع جديد
              </button>
            )}

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">
              {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الخدمة *</label>
                <select
                  value={formData.serviceTitle}
                  onChange={(e) => setFormData({ ...formData, serviceTitle: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                  required
                >
                  <option value="">اختر الخدمة</option>
                  {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">عنوان المشروع *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                  placeholder="مثال: حملة إعلانية لمطعم"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">الوصف</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                  placeholder="وصف المشروع..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">رابط الصورة أو الفيديو *</label>
                <input
                  type="url"
                  value={formData.mediaUrl}
                  onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                  placeholder="رابط Google Drive أو YouTube"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  💡 Google Drive: يتم التحويل تلقائياً | YouTube: الصق رابط الفيديو
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">التصنيف (اختياري)</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#F59E0B]"
                  placeholder="مثال: مطاعم، عقارات، تجارة..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-[#F59E0B] hover:bg-[#EF8C00] text-white font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  {editingProject ? 'تحديث المشروع' : 'حفظ المشروع'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">قائمة المشاريع</h2>
          
          {loading ? (
            <p className="text-center text-gray-600 py-8">جاري التحميل...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-600 py-8">لا توجد مشاريع حالياً</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-right">الخدمة</th>
                    <th className="px-4 py-3 text-right">العنوان</th>
                    <th className="px-4 py-3 text-right">النوع</th>
                    <th className="px-4 py-3 text-right">التصنيف</th>
                    <th className="px-4 py-3 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{project.serviceTitle}</td>
                      <td className="px-4 py-3">{project.title}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          project.mediaType === 'youtube' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.mediaType === 'youtube' ? '🎥 فيديو' : '🖼️ صورة'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{project.category || '-'}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleEdit(project)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition-colors text-sm"
                          >
                            تعديل
                          </button>
                          <button
                            onClick={() => handleDelete(project.id!)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition-colors text-sm"
                          >
                            حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
