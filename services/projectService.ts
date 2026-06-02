import { supabase } from '../supabaseClient';

export interface Project {
  id?: string;
  serviceTitle: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'youtube';
  category?: string;
  createdAt?: string;
  updatedAt?: string;
}

const TABLE_NAME = 'projects';

// إضافة مشروع جديد
export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{
        serviceTitle: projectData.serviceTitle,
        title: projectData.title,
        description: projectData.description,
        mediaUrl: projectData.mediaUrl,
        mediaType: projectData.mediaType,
        category: projectData.category
      }])
      .select();

    if (error) throw error;
    if (!data || data.length === 0) throw new Error('No data returned from insert');
    return data[0].id;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

// تحديث مشروع
export const updateProject = async (projectId: string, projectData: Partial<Project>): Promise<void> => {
  try {
    const { id, createdAt, updatedAt, ...editableData } = projectData;

    const { error } = await supabase
      .from(TABLE_NAME)
      .update({
        ...editableData,
        updatedAt: new Date().toISOString()
      })
      .eq('id', projectId);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

// حذف مشروع
export const deleteProject = async (projectId: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', projectId);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// الحصول على جميع المشاريع لخدمة معينة
export const getProjectsByService = async (serviceTitle: string): Promise<Project[]> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('serviceTitle', serviceTitle);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error getting projects:', error);
    throw error;
  }
};

// الحصول على جميع المشاريع
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error getting all projects:', error);
    throw error;
  }
};
