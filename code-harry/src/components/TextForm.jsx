import React, { useState } from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import PropTypes from 'prop-types'
 

export default function TextForm(props) {
  const[text,setText] = useState(""); 
  const handelUpClick = () => {
    setText(text.toUpperCase()) 
    props.showAlert("converted to uppercase","success")
   }

   const handelLoClick = () => {
    setText(text.toLowerCase()) 
     props.showAlert("converted to lower case","success")
   }
const handelclearClick = () => {
  let newtext = "";
    setText(newtext)
     props.showAlert("text cleared","success")
    }
    function countNonEmptyWords(text) {  
  // Split by whitespace and remove empty strings
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  
  return words.length;
}
    const onchange = (event) => {
      let newText = event.target.value
    setText(newText)
    }
    const handelCopyClick = () => {
      navigator.clipboard.writeText(text);
       props.showAlert("text has been copied","success")
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
 <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor : props.mode === 'dark' ? 'white' : 'lightgrey',color:props.mode === 'dark' ? 'white':'black'}} value={text} onChange={onchange}></textarea>
    </div>
 <button className="btn btn-primary mt-3 mx-1" onClick={handelUpClick}>convert to Uppercase</button>
 <button className="btn btn-primary mt-3 mx-1 " onClick={handelLoClick}>convert to Lowercase</button>
 <button className="btn btn-primary mt-3 mx-1 " onClick={handelclearClick}>clear</button>
 <button className="btn btn-primary mt-3 mx-1 " onClick={handelCopyClick}><i className="fa fa-arrow"></i>Copy</button>
 <button className="btn btn-primary mt-3 mx-1 " onClick={handelclearClick}>space Remove</button>

    
    <div className="container my-4">
      <h1>Your text summery</h1>
      <p>{countNonEmptyWords(text)}words and {text.length} Characters </p>
      <p> {0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter any text in above box to Preview"} </p>
    </div>
    </div>
    </>
  );
}
