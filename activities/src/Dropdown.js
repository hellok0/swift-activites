import React from "react";

const Dropdown = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
