import React, { useEffect, useContext } from 'react';

// Framer Motion for Animations
import { motion, AnimatePresence } from 'framer-motion';

import './ItemList.scss';

import Item from '../Item/Item';
import Message from '../Message/Message';

import ItemContext from '../../context/ItemContext';

const ItemList = () => {
  const { items, getItems, loading, error } = useContext(ItemContext);

  // Get items on initial load
  useEffect(() => {
    getItems();
  }, []);

  // Create copy of state, and sort by name alphabetically
  const sortedItems =
    items && items.sort((a, b) => a.name.localeCompare(b.name));

  // Display loading message
  if (loading) {
    return <Message />;
  }

  // If error fetching, display error
  if (error) {
    return <Message type='error' message='Error fetching items' />;
  }

  return (
    <div className='item-list'>
      <ul className='item-list__items'>
        <AnimatePresence>
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Item item={item} key={item.id} />
              </motion.div>
            ))
          ) : (
            <Message message='No items to display' />
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ItemList;
