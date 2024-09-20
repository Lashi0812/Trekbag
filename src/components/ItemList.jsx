import EmptyView from "./EmptyView";

export default function ItemList({ items, onToggleItem, handleDeleteItem }) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.map((item) => (
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
