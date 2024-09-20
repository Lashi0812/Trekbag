import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../store/itemsStore";

export default function AddItemForm() {
  const handleAddItem = useItemsStore((state) => state.onAddItem);
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!itemText) {
          alert("Item can't be empty");
          inputRef.current.focus();
          return;
        }
        handleAddItem(itemText);
        setItemText("");
      }}
    >
      <h2>Add an Item</h2>
      <input
        type="text"
        value={itemText}
        ref={inputRef}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        placeholder="Toothbrush..."
        autoFocus
      />
      <Button text="Add to list" />
    </form>
  );
}
