const getItems = async () => {
  const data = await getDocs(collection(db, "items"));
  const itemList = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  dispatch({ type: "get-items", payload: { items: [...itemList] } });
  setLoading(false);
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

    dispatch({
      type: "add-item",
      payload: newItem,
    });
  } catch (error) {
    console.log(error);
  }
};

// TOGGLE item

// DELETE item

const deleteItem = async (id) => {
  try {
    const docRef = doc(db, "items", id);
    deleteDoc(docRef);

    dispatch({
      type: "delete-item",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getItems();
}, []);

if (loading) {
  return <h3>Loading...</h3>;
}

import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config/firebase.config";
