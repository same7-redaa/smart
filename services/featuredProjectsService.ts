import { supabase } from '../supabaseClient';

export interface FeaturedProject {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  serviceLink?: string; // رابط توجيه لمعرض أعمال محدد
  order?: number;
}

const TABLE_NAME = 'featured_projects';

export const getAllFeaturedProjects = async (): Promise<FeaturedProject[]> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .order('order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
};

export const addFeaturedProject = async (project: Omit<FeaturedProject, 'id'>): Promise<string> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        serviceLink: project.serviceLink,
        order: project.order || 0
      }])
      .select();

    if (error) throw error;
    if (!data || data.length === 0) throw new Error('No data returned from insert');
    return data[0].id;
  } catch (error) {
    console.error('Error adding featured project:', error);
    throw error;
  }
};

export const updateFeaturedProject = async (id: string, project: Partial<FeaturedProject>): Promise<void> => {
  try {
    const { id: _, ...editableData } = project;
    const { error } = await supabase
      .from(TABLE_NAME)
      .update(editableData)
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating featured project:', error);
    throw error;
  }
};

export const deleteFeaturedProject = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting featured project:', error);
    throw error;
  }
};
