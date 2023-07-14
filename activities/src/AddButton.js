import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dropdown from "./Dropdown";

// {
//   "ActivityName": "Yoga",
//   "Location": "OPC",
//   "Date": "2023-07-12",
//   "Time": "9:30 AM",
//   "Description": "Unwind and rejuvenate with a morning yoga session at the OPC park. Stretch, breathe, and find your inner peace!",
//   "Link": "https://dummylink.com",
//   "ContactInfo": "dummyemail@example.com"
// },

function AddButton({ textColor, buttonColor, addFunction}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [location, setLocation] = useState("");

  const handleDropdownChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {ActivityName: name, Location: location, Date: date, Time: time, Description: description, Link: link, ContactInfo: contactInfo};
    
    console.log(value);
    addFunction(value);
    
    setName("");
    setDate("");
    setTime("");
    setDescription("");
    setLink("");
    setContactInfo("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  const handleContactChange = (e) => {
    setContactInfo(e.target.value);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: textColor,
    marginBottom: "70px",
  };

  return (
    <div>
      <Button variant="contained" style={buttonStyle} onClick={handleClickOpen}>
        Add Event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add an Event!</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit}>
          {<p>Activity Name:</p>}
          <input type="text" value={name} onChange={handleNameChange} />
          <div>
            {<p>Located:</p>}
            <Dropdown
              options={["OPC", "VTC", "TYS"]}
              onChange={handleDropdownChange}
            />
          </div>

            {<p>Date:</p>}
            <input type="text" value={date} onChange={handleDateChange} />

            {<p>Time:</p>}
            <input type="text" value={time} onChange={handleTimeChange} />

            {<p>Description:</p>}
            <input type="text" value={description} onChange={handleDescriptionChange} />

            {<p>Link</p>}
              <input type="text" value={link} onChange={handleLinkChange} />

            {<p>Contact Information</p>}
            <input type="text" value={contactInfo} onChange={handleContactChange} />
          </form>
        </DialogContent>
  
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddButton;
