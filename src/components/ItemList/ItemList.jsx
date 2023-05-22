import React from 'react';

// Components
import Item from '../Item/Item';
import Message from '../Message/Message';

// Framer Motion for Animations
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import './ItemList.scss';

const ItemList = ({ items }) => {
  return (
    <div className='item-list'>
      <ul className='item-list__items'>
        <AnimatePresence>
          {items.length === 0 || items !== null ? (
            items.map((item) => (
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
