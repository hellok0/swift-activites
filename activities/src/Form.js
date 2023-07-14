import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {<p>Activity Name:</p>}
      <input type="text" value={inputValue} onChange={handleChange} />
      <div>
        {<p>Located:</p>}
        <Dropdown
          options={["OPC", "VTC", "TYS"]}
          selectedOption={selectedOption}
          onChange={handleDropdownChange}
        />
      </div>
      {<p>Description:</p>}
      <input type="text" value={inputValue} onChange={handleChange} />

      {<p>Link</p>}
      <input type="text" value={inputValue} onChange={handleChange} />

      {<p>Contact Information</p>}
      <input type="text" value={inputValue} onChange={handleChange} />

      <button className="add-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
