import { supabase } from '../supabaseClient';

export interface SiteSettings {
  partnerImageUrl?: string; // صورة قسم "لماذا سمارت ميديا ؟"
}

const SETTINGS_ROW_ID = 'site_settings';
const TABLE_NAME = 'settings';

export const getSettings = async (): Promise<SiteSettings> => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', SETTINGS_ROW_ID)
      .maybeSingle();

    if (error) throw error;
    return data ? { partnerImageUrl: data.partnerImageUrl } : {};
  } catch (error) {
    console.error('Error getting settings:', error);
    return {};
  }
};

export const updateSettings = async (settings: SiteSettings): Promise<void> => {
  try {
    const { error } = await supabase
      .from(TABLE_NAME)
      .upsert({ 
        id: SETTINGS_ROW_ID, 
        partnerImageUrl: settings.partnerImageUrl 
      });

    if (error) throw error;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};
