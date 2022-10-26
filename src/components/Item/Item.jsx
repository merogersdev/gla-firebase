import React from "react";

import "./Item.scss";

import { FaMinus } from "react-icons/fa";

const Item = () => {
  return (
    <li className="item">
      <span className="item__name">Faff</span>
      <button className="button button--minus">
        <FaMinus className="button__icon" />
      </button>
    </li>
  );
};

export default Item;
