import { db } from '../firebase.config';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where,
  Timestamp 
} from 'firebase/firestore';

export interface Project {
  id?: string;
  serviceTitle: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'youtube';
  category?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const COLLECTION_NAME = 'projects';

// إضافة مشروع جديد
export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...projectData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

// تحديث مشروع
export const updateProject = async (projectId: string, projectData: Partial<Project>): Promise<void> => {
  try {
    const projectRef = doc(db, COLLECTION_NAME, projectId);
    await updateDoc(projectRef, {
      ...projectData,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

// حذف مشروع
export const deleteProject = async (projectId: string): Promise<void> => {
  try {
    const projectRef = doc(db, COLLECTION_NAME, projectId);
    await deleteDoc(projectRef);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// الحصول على جميع المشاريع لخدمة معينة
export const getProjectsByService = async (serviceTitle: string): Promise<Project[]> => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('serviceTitle', '==', serviceTitle)
    );
    const querySnapshot = await getDocs(q);
    const projects: Project[] = [];
    
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data()
      } as Project);
    });
    
    return projects;
  } catch (error) {
    console.error('Error getting projects:', error);
    throw error;
  }
};

// الحصول على جميع المشاريع
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const projects: Project[] = [];
    
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data()
      } as Project);
    });
    
    return projects;
  } catch (error) {
    console.error('Error getting all projects:', error);
    throw error;
  }
};
