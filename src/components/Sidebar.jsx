import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllComplete,
  handleMarkAllInComplete,
  handleRemoveAllitem,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllInComplete={handleMarkAllInComplete}
        handleRemoveAllitem={handleRemoveAllitem}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}
