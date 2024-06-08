import React, { useState } from "react";
import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useRef } from "react";

function App() {
  const [mode, setDarkMode] = useState("light"); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // setTimeout(()=>{
    //   setAlert(null);
    // },1500)
  };
  const togglemode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "install textutils now";
      }, 1000);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          togglemode={togglemode}
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />

          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"  mode={mode}  alert = {alert}/>} />
        </Routes>
       

        {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze below"  mode={mode}  alert = {alert}/> */}
        {/* <About /> */}
        {/* <TextForm showAlert = {showAlert} heading="Enter the text to analyze below"  mode={mode}  alert = {alert}/> */}
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
