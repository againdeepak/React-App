import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
<<<<<<< HEAD
import About from "./components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======

>>>>>>> 948d74597b5ae71df7f72664ccb566297d1819ba
import { useState } from "react";
import Contact from "./components/Contact";
function App() {
  const [mode, setmode] = useState('light')
  const [modetext, setmodetext] = useState('Dark')
  const [btnclr, setbtnclr] = useState('primary')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const darkFun = () => {
    if (mode === 'light') {
      setmode('dark');
      setbtnclr('light');
      setmodetext('Light')
      document.body.style.backgroundColor = '#4848a8'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmodetext('Dark')
      setmode('light');
      setbtnclr('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // setInterval(() => {
      //   document.title="Changing in title"
      // }, 1000);
    }
  }
  return (
    <>
<<<<<<< HEAD
=======
      <Navbar title="Melloite" mode={mode} enableDark={darkFun} modetext={modetext} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter text here" mode={mode} btnclr={btnclr} showAlert={showAlert} />
      </div>
>>>>>>> 948d74597b5ae71df7f72664ccb566297d1819ba

      {/* <Navbar title="Melloite" mode={mode} enableDark={darkFun} modetext={modetext} />
      <About/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter text here" mode={mode} btnclr={btnclr} showAlert={showAlert} />
      </div> */}
      <BrowserRouter>
        <Navbar title="Melloite" mode={mode} enableDark={darkFun} modetext={modetext} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textform heading="Enter text here" mode={mode} btnclr={btnclr} showAlert={showAlert} />} />
          <Route path="/home" element={<Textform heading="Enter text here" mode={mode} btnclr={btnclr} showAlert={showAlert} />} />
          <Route path="/about" element={< About mode={mode} btnclr={btnclr} showAlert={showAlert} />} />
          <Route path="/contacts" element={< Contact mode={mode} btnclr={btnclr} showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
