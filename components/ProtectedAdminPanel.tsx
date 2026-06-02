import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import AdminPanel from './AdminPanel';

const ProtectedAdminPanel: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // التحقق من الجلسة الحالية
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    // الاستماع لتغييرات حالة تسجيل الدخول
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError('خطأ في البريد الإلكتروني أو كلمة المرور');
        console.error('Login error:', error);
      }
    } catch (err) {
      setError('حدث خطأ في عملية تسجيل الدخول');
      console.error('Unexpected login error:', err);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      onBack();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
          <p className="mt-4 text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] to-[#1e3a6f] flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0A1F44]">تسجيل الدخول</h2>
            <p className="text-gray-600 mt-2">لوحة تحكم المشاريع</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors"
                placeholder="admin@smartmedia.com"
                required
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F59E0B] transition-colors"
                placeholder="••••••••"
                required
                dir="ltr"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-right">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#F59E0B] hover:bg-[#EF8C00] text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              دخول
            </button>
          </form>

          <button
            onClick={onBack}
            className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#F59E0B] text-white py-3 px-6 flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
        >
          تسجيل الخروج
        </button>
      </div>
      <AdminPanel onBack={onBack} />
    </div>
  );
};

export default ProtectedAdminPanel;
