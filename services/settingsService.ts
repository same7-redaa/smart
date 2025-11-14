import { db } from '../firebase.config';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

export interface SiteSettings {
  partnerImageUrl?: string; // صورة قسم "نحن شركاؤك في النجاح"
}

const SETTINGS_DOC_ID = 'site_settings';

export const getSettings = async (): Promise<SiteSettings> => {
  try {
    const docRef = doc(db, 'settings', SETTINGS_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as SiteSettings;
    }
    return {};
  } catch (error) {
    console.error('Error getting settings:', error);
    return {};
  }
};

export const updateSettings = async (settings: SiteSettings): Promise<void> => {
  try {
    const docRef = doc(db, 'settings', SETTINGS_DOC_ID);
    await setDoc(docRef, settings, { merge: true });
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};
