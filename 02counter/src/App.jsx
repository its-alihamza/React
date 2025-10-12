import './App.css'

import {useState } from 'react';
function App() {
  //usestate
  let [counter, setcounter] = useState(0);
  //adding value
 const addvalue = () => {
  if(counter <100){
  setcounter(counter+1)
  }
  
 }
 const removevalue = () => {
 if(counter>0){
  setcounter(counter-1)
 }
 }
 
  return (
    <>
   <h1>Assignment</h1>
    <h2> counter: {counter}</h2>
    <button style={{backgroundColor:'blue'}} onClick={addvalue}>Add Value</button>
    <br /><br/>
    <button style={{backgroundColor: "lightblue"}} onClick={removevalue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
