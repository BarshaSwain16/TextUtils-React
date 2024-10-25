import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
// import {BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert=(message , type)=>{
     setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  //DarkMode
  const toggleMode = () => {
    if (mode === "light") {
      setMode( "dark");
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","success")
      // document.title='TextUtil-Dark Mode'

      //  setInterval(() => {
      //   document.title = "Install TextUtil";
      //  }, 2000);

      //  setInterval(() => {
      //    document.title = "Hurry Now";
      //  }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" mode={mode}/> */}
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={ */}
              <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode}/>
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
         
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
