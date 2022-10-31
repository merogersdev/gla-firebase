import React, { createContext, useReducer } from 'react';

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

// Item Reducer
import ItemReducer, { INITIAL_STATE, ACTIONS } from './ItemReducer';

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, INITIAL_STATE);

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
      dispatch({ type: ACTIONS.GET_ITEMS, payload: itemList });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_FAIL,
      });
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
      dispatch({ type: ACTIONS.ADD_ITEM, payload: newItem });
    } catch (error) {
      console.error(error.message);
    }
  };

  // DELETE item
  const deleteItem = async (id) => {
    try {
      const docRef = doc(db, 'items', id);
      deleteDoc(docRef);
      const newItems = state.items.filter((item) => item.id !== id);
      dispatch({ type: ACTIONS.DELETE_ITEM, payload: newItems });
    } catch (error) {
      console.log(error);
    }
  };

  // Return State items individually, with functions
  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        error: state.error,
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
