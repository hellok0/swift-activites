import React from "react";
import "./App.css";
import logo from "./SWIFT_2021_logo.png";
import avatar from "./avatar.png";
import Calendar from "./BasicDateCalendar"
import AddButton from "./AddButton"
import ActivitiesList from "./ActivitiesList"

const activities = [
  {
    "ActivityName": "Basketball",
    "Location": "VTC",
    "Date": "2023-07-14",
    "Time": "11:00 AM",
    "Description": "Join us for a friendly basketball game at the VTC court! Let's shoot some hoops and have a great time together.",
    "Link": "https://dummylink.com",
    "ContactInfo": "dummyemail@example.com"
  },
  {
    "ActivityName": "Yoga",
    "Location": "OPC",
    "Date": "2023-07-15",
    "Time": "9:30 AM",
    "Description": "Unwind and rejuvenate with a morning yoga session at the OPC park. Stretch, breathe, and find your inner peace!",
    "Link": "https://dummylink.com",
    "ContactInfo": "dummyemail@example.com"
  },
  {
    "ActivityName": "Tennis",
    "Location": "TYSONS",
    "Date": "2023-07-18",
    "Time": "2:00 PM",
    "Description": "Calling all tennis enthusiasts! Come and play some friendly matches at the Tysons tennis courts. It's game, set, match!",
    "Link": "https://dummylink.com",
    "ContactInfo": "dummyemail@example.com"
  }
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>SwiftActivities</span>
        </div>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
      </header>
      <div className="container">
        <div className="panel panel-left">
          {<ActivitiesList activities={activities}/>}
          </div>
        <div className="panel panel-middle">
          {<AddButton buttonColor="#333333" textColor="#acf9e9"/>}
          {<Calendar />}
        </div>
        <div className="panel panel-right">Right Panel</div>
      </div>
    </div>
  );
};

export default App;
