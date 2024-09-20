import Select from "react-select";
import { useMemo } from "react";
import EmptyView from "./EmptyView";
import { useState } from "react";
import { useItemsContext } from "../hooks/hooks";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const { items, onToggleItem, handleDeleteItem } = useItemsContext();
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {sortedItems.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.length === 0 ? <EmptyView /> : null}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleItem={onToggleItem}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onToggleItem, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
