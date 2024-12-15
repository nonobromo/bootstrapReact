interface InputProps {
  label: string;
}

function Input({ label }: InputProps) {
  return (
    <div className="mb-2">
      <label htmlFor="">{label}</label>
      <input type="text" className="form-control" />
    </div>
  );
}

export default Input;
