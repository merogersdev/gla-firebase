// Firebase Functions
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// Firebase Config
import { db } from '../../config/firebase';

// GET Items
export const getItems = async () => {
  try {
    const data = await getDocs(collection(db, 'items'));
    const itemList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return itemList;
  } catch (error) {
    console.error(error.message);
  }
};
