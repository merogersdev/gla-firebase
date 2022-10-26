import React from "react";

import "./Item.scss";

import { FaMinus } from "react-icons/fa";

const Item = ({ item }) => {
  return (
    <li className="item">
      <span className="item__name">{item.name}</span>
      <button className="button button--minus">
        <FaMinus className="button__icon" />
      </button>
    </li>
  );
};

export default Item;
