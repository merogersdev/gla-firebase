import React, { useEffect, useContext } from "react";

import "./ItemList.scss";

import Item from "../Item/Item";

import ItemContext from "../../context/ItemContext";
import LoadingContext from "../../context/LoadingContext";

const ItemList = () => {
  const { items, getItems } = useContext(ItemContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    getItems();
    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="item-list">
      <ul className="item-list__items">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
