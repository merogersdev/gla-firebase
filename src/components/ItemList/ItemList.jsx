import React from "react";

import "./ItemList.scss";

import Item from "../Item/Item";

const ItemList = () => {
  return (
    <div className="item-list">
      <ul className="item-list__items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
};

export default ItemList;
