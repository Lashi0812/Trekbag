import Button from "./Button";
import { useItemsContext } from "../hooks/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllComplete,
    handleMarkAllInComplete,
    handleResetToInitial,
    handleRemoveAllitem,
  } = useItemsContext();
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllInComplete },
    { text: "Reset to initial", onClick: handleResetToInitial },
    { text: "Remove all items", onClick: handleRemoveAllitem },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button
            key={button.text + button.onClick.toString()}
            text={button.text}
            onClick={button.onClick}
            buttonType="secondary"
          />
        );
      })}
    </section>
  );
}
