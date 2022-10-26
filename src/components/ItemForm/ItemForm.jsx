import React from "react";

import "./ItemForm.scss";

import { FaPlus } from "react-icons/fa";

const ItemForm = () => {
  return (
    <form className="item-form">
      <label htmlFor="name" className="item-form__label">
        <input
          type="text"
          className="item-form__input"
          placeholder="Add Item..."
        />
        <button className="button button--add">
          <FaPlus className="button__icon" />
        </button>
      </label>
    </form>
  );
};

export default ItemForm;
