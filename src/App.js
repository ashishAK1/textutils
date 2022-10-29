// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [Mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

    const showAlert = (message, type) =>{
        setAlert({
                msg: message,
                type: type
            })
        setTimeout(() => {
            setAlert(null);
        },1000)
    }

  const toggleMode = () =>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#101922';
      showAlert("Dark Mode Enabled","success");
      // to change website's title
      document.title = "Text Utils - Dark";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success");
      // to change website's title
      document.title = "Text Utils - Light";
    }
  }


  return (
    // <Router>
    //   <Navbar title = 'TextUtils' Mode = {Mode} toggleMode={toggleMode}/>
    //   <Alert alert = {alert}/>
    //   <div className='container my-3'>
    //   <Routes>
    //       <Route path="/about" element={<About/>}/>
    //       <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text" Mode = {Mode}/>}/>
    //     </Routes>
    //   </div>
    // </Router>
    <>
    <Navbar title = 'TextUtils' Mode = {Mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter your text" Mode = {Mode}/>
    </div>
    </>
  );
}

export default App;
