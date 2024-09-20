import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllComplete,
  handleMarkAllInComplete,
  handleRemoveAllitem,
  handleResetToInitial,
}) {
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
