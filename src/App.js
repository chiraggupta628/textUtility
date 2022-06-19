import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import React from "react";
import TextForm from "./component/TextForm";
import { useState } from "react";
import Alert from "./component/Alert";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./component/AboutUs";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      console.log("dark");
      setMode("dark");
      document.body.style.backgroundColor = "#031432";
      showAlert("success", "Dark Mode enabled");
    } else {
      setMode("light");
      console.log("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode disabled");
    }
  };
  return (
    <>
      

        <NavBar title="utility" about="About Us" dropDown="List" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
        <Routes>
        <Route path="/" element={<TextForm heading="Enter Text to analyze" mode={mode} />} />
        <Route path="/about" element={<AboutUs mode={mode} />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
