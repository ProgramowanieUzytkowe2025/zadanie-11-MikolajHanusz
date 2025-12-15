export function AppActionButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
