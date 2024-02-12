import React, { useState } from "react";

// Components
import Item from "../Item/Item";

// Framer Motion for Animations
import { motion, AnimatePresence } from "framer-motion";

// Styles
import "./ItemList.scss";

const ItemList = ({ items }) => {
  // Use loading state for all list items, not just one
  const [loading, setLoading] = useState(false);
  return (
    <div className="item-list">
      <ul className="item-list__items">
        <AnimatePresence>
          {items && items.length !== 0 ? (
            items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Item
                  item={item}
                  key={item.id}
                  loading={loading}
                  setLoading={setLoading}
                />
              </motion.div>
            ))
          ) : (
            <div className="item-list__message">No groceries. Yay! </div>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ItemList;
