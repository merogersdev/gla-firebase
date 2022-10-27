import React, { createContext, useState } from 'react';

// Firebase Functions
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// Firebase Config
import { db } from '../config/firebase.config';

// Main Item Context
const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Item Collection Reference
  const itemsColRef = collection(db, 'items');

  // GET items
  const getItems = async () => {
    try {
      const data = await getDocs(collection(db, 'items'));
      const itemList = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemList);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error.message);
    }
  };

  // ADD item
  const addItem = async (name) => {
    try {
      const item = await addDoc(itemsColRef, {
        name,
        inCart: false,
      });
      const newItem = {
        id: item.id,
        name,
        inCart: false,
      };
      setItems([newItem, ...items]);
    } catch (error) {
      console.error(error.message);
    }
  };

  // DELETE item
  const deleteItem = async (id) => {
    try {
      const docRef = doc(db, 'items', id);
      deleteDoc(docRef);
      const newItems = items.filter((item) => item.id !== id);
      setItems([...newItems]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        loading,
        error,
        getItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
