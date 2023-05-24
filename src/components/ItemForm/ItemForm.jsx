import React, { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

// Toast
import { toast } from 'react-toastify';

// Icons
import { FaPlus } from 'react-icons/fa';

// Context and Auth
import { useFirebaseAuthContext } from '../../context/AuthContext';
import { addItem } from '../../api/itemApi';

// Styles
import './ItemForm.scss';

const ItemForm = ({ items }) => {
  const [name, setName] = useState('');

  const { user } = useFirebaseAuthContext();

  const queryClient = useQueryClient();

  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      toast.success('Item added successfully');
      setName('');
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: async (error) => {
      toast.error('Error adding item');
      console.log(error);
    },
  });

  const handleItemSubmit = (e) => {
    e.preventDefault();

    const alreadyExists = items.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      toast.error('Item already exists');
      return;
    }

    addItemMutation.mutate({ name, userID: user.uid });
  };

  return (
    <form className='item-form' onSubmit={handleItemSubmit}>
      <label htmlFor='name' className='item-form__label'>
        <input
          type='text'
          className='item-form__input'
          placeholder='Add Item...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={15}
        />
        <button className='item-form__add-btn' type='submit'>
          <FaPlus className='button__icon' />
        </button>
      </label>
    </form>
  );
};

export default ItemForm;
