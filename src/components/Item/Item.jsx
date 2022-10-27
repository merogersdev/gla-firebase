import React, { useContext } from "react";

import "./Item.scss";

import ItemContext from "../../context/ItemContext";

import { FaMinus } from "react-icons/fa";

const Item = ({ item }) => {
  const { deleteItem } = useContext(ItemContext);
  return (
    <li className="item">
      <span className="item__name">{item.name}</span>
      <button
        className="button button--minus"
        onClick={() => deleteItem(item.id)}
      >
        <FaMinus className="button__icon" />
      </button>
    </li>
  );
};

export default Item;
