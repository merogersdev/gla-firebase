import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./Item.scss";

// Toast
import { toast } from "react-toastify";

import ItemContext from "../../context/item/ItemContext";

import { FaMinus } from "react-icons/fa";

const Item = ({ item }) => {
  const { deleteItem } = useContext(ItemContext);

  const handleDelete = (id) => {
    deleteItem(id);
    toast.success("Item deleted successfully");
  };

  return (
    <li className="item">
      <span className="item__name">{item.name}</span>

      <button
        className="button button--minus"
        onClick={() => handleDelete(item.id)}
      >
        <FaMinus className="button__icon" />
      </button>
    </li>
  );
};

Item.PropTypes = {
  item: PropTypes.object,
};

Item.defaultProps = {
  item: {
    name: "Default Item",
    inCart: false,
    id: Date.now(),
  },
};

export default Item;
