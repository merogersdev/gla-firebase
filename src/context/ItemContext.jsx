import React, { createContext, useState } from "react";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const data = await getDocs(collection(db, "items"));
    const itemList = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(itemList);
  };

  return (
    <ItemContext.Provider value={{ items, getItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
