import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase is clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("Coverted to UpperCase!", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase is clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Coverted to LowerCase!", "success");
  };
  const handle = () => {
    // console.log("Uppercase is clicked : " + text);
    let newText = "";
    setText(newText);
    
  };

  const handleRemoveExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
     props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text); 
    props.showAlert("Copy to ClipBoard", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text="new text here "   //wrong way to change the text
  //   setText('Set new text here')

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h3> {props.heading} </h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handle}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview : </h3>
        <p>{text.length > 0 ? text : "Enter Somthing For Preview"}</p>
      </div>
    </>
  );
}
