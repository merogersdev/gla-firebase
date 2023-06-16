import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

// Toast
import { toast } from 'react-toastify';

// Icons
import { FaMinus } from 'react-icons/fa';

// Query
import { deleteItem } from '../../api/itemApi';

// Styles
import './Item.scss';

const Item = ({ item }) => {
  const queryClient = useQueryClient();

  const deleteItemMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: async () => {
      toast.success('Item deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
    onError: async (error) => {
      toast.error('Error deleting item');
      console.error(error);
    },
  });

  const handleDelete = (item) => {
    deleteItemMutation.mutate(item.id);
  };

  return (
    <li className='item'>
      <span className='item__name'>{item.name}</span>

      <button className='item__delete-btn' onClick={() => handleDelete(item)}>
        <FaMinus className='button__icon' />
      </button>
    </li>
  );
};

export default Item;
