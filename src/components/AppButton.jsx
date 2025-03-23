function AppButton({ label, onClick }) {
  return (
    <button className="border p-2 rounded" onClick={onClick}>
      {label}
    </button>
  );
}

export default AppButton;
