import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1 style={{ color: props.mode === "light" ? "black" : "white", }}>{props.heading}{" "} </h1>
      <div className="mb-4">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"
          style={{ backgroundColor: props.mode === "dark" ? "#031432" : "white", color: props.mode === "light" ? "black" : "white", }}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleLowerCase}>Convert to LowerCase</button>

      <div className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white", }}>
        <h1> Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters.</p>
      </div>
    </>
  );
}
