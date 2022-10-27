import React, { useContext } from 'react';

import './Item.scss';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ItemContext from '../../context/ItemContext';

import { FaMinus } from 'react-icons/fa';

const Item = ({ item }) => {
  const { deleteItem } = useContext(ItemContext);

  const handleDelete = (id) => {
    deleteItem(id);
    toast('Item deleted successfully');
  };

  return (
    <li className='item'>
      <span className='item__name'>{item.name}</span>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <button
        className='button button--minus'
        onClick={() => handleDelete(item.id)}
      >
        <FaMinus className='button__icon' />
      </button>
    </li>
  );
};

export default Item;
