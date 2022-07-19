import React from "react";
 
export default function FormInput({
  label,
  type,
  placeholder,
  onChange,
  validationRegex,
}) {
  const [error, setError] = React.useState(false);
 
  const onInputChange = (value) => {
    if (value !== "" && validationRegex.test(value)) {
      onChange(value);
      setError(false);
    } else {
      setError(true);
    }
  };
 
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        onChange={(e) => onInputChange(e.target.value)}
      />
      {error && <p>Por favor, complete el campo correctamente.</p>}
    </div>
  );
}