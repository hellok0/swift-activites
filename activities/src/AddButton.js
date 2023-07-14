import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Form from "./Form";

// {
//   "ActivityName": "Yoga",
//   "Location": "OPC",
//   "Date": "2023-07-12",
//   "Time": "9:30 AM",
//   "Description": "Unwind and rejuvenate with a morning yoga session at the OPC park. Stretch, breathe, and find your inner peace!",
//   "Link": "https://dummylink.com",
//   "ContactInfo": "dummyemail@example.com"
// },

function AddButton({ textColor, buttonColor }) {
  const [open, setOpen] = useState(false);

  const handleFormSubmit = (value) => {
    console.log("Submitted value:", value);
    // Do something with the submitted value
  };

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
          <Form onSubmit={handleFormSubmit} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddButton;
