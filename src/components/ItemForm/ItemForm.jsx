import React, { useState, useRef, useEffect } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { capitalizeFirst } from "../../util/string";
import { testName } from "../../util/regex";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { useFirebaseAuthContext } from "../../context/AuthContext";
import { addItem } from "../../api/itemApi";

import "./ItemForm.scss";

const ItemForm = ({ items }) => {
  const [name, setName] = useState("");

  const { user } = useFirebaseAuthContext();

  const itemFormRef = useRef(null);

  const queryClient = useQueryClient();

  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      toast.success("Item added successfully");
      setName("");
      queryClient.invalidateQueries({ queryKey: ["items"] });
      itemFormRef.current.focus();
    },
    onError: async (error) => {
      toast.error("Error adding item");
      console.error(error);
    },
  });

  const handleItemSubmit = (e) => {
    e.preventDefault();

    if (testName(name) === false) {
      toast.error("Not a valid item name");
      return;
    }

    const alreadyExists = items.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      toast.error("Item already exists");
      return;
    }

    addItemMutation.mutate({ name: capitalizeFirst(name), userID: user.uid });
  };

  useEffect(() => {
    if (itemFormRef) {
      itemFormRef.current.focus();
    }
  }, [itemFormRef]);

  return (
    <form className="item-form" onSubmit={handleItemSubmit}>
      <label htmlFor="name" className="item-form__label">
        <input
          type="text"
          className="item-form__input"
          placeholder="Add Item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          ref={itemFormRef}
        />
        <button
          className={`item-form__add-btn${
            addItemMutation.isLoading ? " item-form__add-btn--disabled" : ""
          }`}
          type="submit"
          disabled={addItemMutation.isLoading}
        >
          <FaPlus className="button__icon" />
        </button>
      </label>
    </form>
  );
};

export default ItemForm;
