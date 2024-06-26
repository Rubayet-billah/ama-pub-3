// InputText.js
import React from "react";

const InputText = ({
  classNames,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
  required,
}) => {
  return (
    <input
      className={`w-full px-4 py-3 bg-white focus:outline-none placeholder-neutral text-sm ${classNames}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputText;
