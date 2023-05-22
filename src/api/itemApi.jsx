// Firebase Functions
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';

// Firebase Config
import { db } from '../config/firebase';

// Item Collection Reference
const itemsColRef = collection(db, 'items');

// GET Items
const getItems = async () => {
  try {
    // Get all items, order alphabetically
    const data = await getDocs(query(itemsColRef, orderBy('name', 'desc')));
    const itemList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return itemList;
  } catch (error) {
    console.error(error.message);
  }
};

// Add Item
export const addItem = async ({ name, userID }) => {
  try {
    const item = await addDoc(itemsColRef, {
      name,
      userID,
    });
    const newItem = {
      id: item.id,
      userID,
      name,
    };
    return newItem;
  } catch (error) {
    console.error(error.message);
  }
};

// Delete Item
export const deleteItem = async (itemID) => {
  try {
    const result = await deleteDoc(doc(db, 'items', itemID));
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export default getItems;
