import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

// Toast
import { toast } from "react-toastify";

// Icons
import { FaMinus } from "react-icons/fa";

// Query
import { deleteItem } from "../../api/itemApi";

// Styles
import "./Item.scss";

const Item = ({ item, loading, setLoading }) => {
  const queryClient = useQueryClient();

  const deleteItemMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: async () => {
      toast.success("Item deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["items"] });
      setLoading(false);
    },
    onError: async (error) => {
      toast.error("Error deleting item");
      console.error(error);
      setLoading(false);
    },
  });

  const handleDelete = (item) => {
    setLoading(true);
    deleteItemMutation.mutate(item.id);
  };

  return (
    <li className="item">
      <span className="item__name">{item.name}</span>

      <button
        className={`item__delete-btn${
          loading ? " item__delete-btn--disabled" : ""
        }`}
        onClick={() => handleDelete(item)}
        disabled={loading}
      >
        <FaMinus className="button__icon" />
      </button>
    </li>
  );
};

export default Item;
