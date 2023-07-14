import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    ActivityName: "",
    Date: "",
    Time: "",
    Description: "",
    Link: "",
    ContactInfo: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e);
    setInputValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({
      ActivityName: "",
      Date: "",
      Time: "",
      Description: "",
      Link: "",
      ContactInfo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {<p>Activity Name:</p>}
      <input
        type="text"
        name="ActivityName"
        value={inputValue.ActivityName}
        onChange={handleChange}
      />
      <div>
        {<p>Location:</p>}
        <Dropdown
          options={["OPC", "VTC", "TYS"]}
          selectedOption={selectedOption}
          name="selectedOption"
          onChange={handleDropdownChange}
        />
      </div>

      {<p>Date:</p>}
      <input
        type="text"
        value={inputValue.Date}
        onChange={handleChange}
        name="Date"
      />

      {<p>Time:</p>}
      <input
        type="text"
        value={inputValue.Time}
        onChange={handleChange}
        name="Time"
      />

      {<p>Description:</p>}
      <input
        type="text"
        value={inputValue.Description}
        onChange={handleChange}
        name="Description"
      />

      {<p>Link</p>}
      <input
        type="text"
        value={inputValue.Link}
        onChange={handleChange}
        name="Link"
      />

      {<p>Contact Information</p>}
      <input
        type="text"
        value={inputValue.ContactInfo}
        onChange={handleChange}
        name="ContactInfo"
      />

      <button className="add-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
