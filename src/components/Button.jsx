export default function Button({ buttonType, text }) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}
