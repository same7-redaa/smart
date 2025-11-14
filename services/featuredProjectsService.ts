import { db } from '../firebase.config';
import { collection, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc, getDocs, query, orderBy } from 'firebase/firestore';

export interface FeaturedProject {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  serviceLink?: string; // رابط توجيه لمعرض أعمال محدد
  order?: number;
}

const COLLECTION_NAME = 'featuredProjects';

export const getAllFeaturedProjects = async (): Promise<FeaturedProject[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as FeaturedProject));
  } catch (error) {
    console.error('Error getting featured projects:', error);
    return [];
  }
};

export const addFeaturedProject = async (project: Omit<FeaturedProject, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...project,
      order: project.order || 0
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding featured project:', error);
    throw error;
  }
};

export const updateFeaturedProject = async (id: string, project: Partial<FeaturedProject>): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, project);
  } catch (error) {
    console.error('Error updating featured project:', error);
    throw error;
  }
};

export const deleteFeaturedProject = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error('Error deleting featured project:', error);
    throw error;
  }
};
