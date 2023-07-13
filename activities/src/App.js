import React from 'react';
import Calendar from './Calendar';

import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

function App() {
  Test()
  return (
    <div className="App">
      <h1>Event Planning Website</h1>
      <Calendar />
    </div>
  );
}

function Test()
    const addTodo = async (e) => {
        e.preventDefault();  
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}

export default App;