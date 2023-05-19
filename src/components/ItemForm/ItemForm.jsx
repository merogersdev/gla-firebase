import React, { useState, useContext } from 'react';

// Toast
import { toast } from 'react-toastify';

import './ItemForm.scss';

import { FaPlus } from 'react-icons/fa';

import ItemContext from '../../context/item/ItemContext';

const ItemForm = () => {
  const [name, setName] = useState('');

  const { items, addItem } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if exists
    const alreadyExists = items.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    // If already in list, message and return
    if (name.length === 0) {
      toast.error('Please enter an item');
      return;
    }

    // If item too long, reject
    if (name.length > 15) {
      toast.error('Item name too long');
      return;
    }

    // If already in list, message and return
    if (alreadyExists) {
      toast.error('Item already exists');
      return;
    }

    // Capitalize first letter of string
    const capitalizedName = name[0].toUpperCase() + name.substring(1);

    // Add to Context, display message, and reset form
    addItem(capitalizedName);
    toast.success('Item added successfully');
    setName('');
  };

  const handleChange = (e) => setName(e.target.value);

  return (
    <form className='item-form' onSubmit={handleSubmit}>
      <label htmlFor='name' className='item-form__label'>
        <input
          type='text'
          className='item-form__input'
          placeholder='Add Item...'
          value={name}
          onChange={handleChange}
          maxLength={15}
        />
        <button className='button button--add'>
          <FaPlus className='button__icon' />
        </button>
      </label>
    </form>
  );
};

export default ItemForm;
