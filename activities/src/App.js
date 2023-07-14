import React, { useState, useEffect } from 'react';
import "./App.css";
import logo from "./SWIFT_2021_logo.png";
import avatar from "./avatar.png";
import Calendar from "./BasicDateCalendar"
import AddButton from "./AddButton"
import ActivitiesList from "./ActivitiesList"
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from './firebase';

const App = () => {
  const [activities, setActivites] = useState([]);

  async function addActivities(activity) {
    try {
      const docRef = await addDoc(collection(db, "activities"), activity);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  async function fetchActivities(){
    await getDocs(collection(db, "activities")).then((querySnapshot)=>{               
          const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
          setActivites(newData);                
    });
  }

  useEffect(()=>{fetchActivities();}, [])

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
          {<AddButton buttonColor="#333333" textColor="#acf9e9" addFunction={addActivities}/>}
          {<Calendar />}
        </div>
        <div className="panel panel-right">Right Panel</div>
      </div>
    </div>
  );
};

export default App;
