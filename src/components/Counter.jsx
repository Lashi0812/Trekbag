export default function Counter({ totalItems, totalPackedItems }) {
  return (
    <span>
      <b>{totalPackedItems}</b> / {totalItems} items packed
    </span>
  );
}
