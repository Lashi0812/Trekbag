import Button from "./Button";
import { useItemsStore } from "../store/itemsStore";

export default function ButtonGroup() {
  const onMarkAllComplete = useItemsStore((state) => state.onMarkAllComplete);
  const onMarkAllInComplete = useItemsStore(
    (state) => state.onMarkAllInComplete
  );
  const onResetToInitial = useItemsStore((state) => state.onResetToInitial);
  const onRemoveAllitem = useItemsStore((state) => state.onRemoveAllitem);
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: onMarkAllComplete },
    { text: "Mark all as incomplete", onClick: onMarkAllInComplete },
    { text: "Reset to initial", onClick: onResetToInitial },
    { text: "Remove all items", onClick: onRemoveAllitem },
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
