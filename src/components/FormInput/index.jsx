import React from "react";
import './FormInput.css';
 
export default function FormInput({ label, type, placeholder, onChange, validationRegex }) {

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
      <label className="formLabel">{label}</label>
      <input
        className="formInput"
        type={type}
        placeholder={placeholder}
        required
        onChange={(e) => onInputChange(e.target.value)}
      />
      {error && <p className="invalidForm">Campo inválido.</p>}
    </div>
  );
}

