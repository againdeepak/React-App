import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
function App() {
  const [mode, setmode] = useState('light')
  const [modetext, setmodetext] = useState('Dark')
  const [btnclr, setbtnclr] = useState('primary')
  const darkFun = () => {
    if (mode === 'light') {
      setmode('dark');
      setbtnclr('light');
      setmodetext('Light')
      document.body.style.backgroundColor = '#4848a8'
    }
    else {
      setmodetext('Dark')
      setmode('light');
      setbtnclr('primary')
      document.body.style.backgroundColor = 'white'

    }

  }
  return (

    <>
      <Navbar title="Melloite" mode={mode} enableDark={darkFun} modetext={modetext} />
      <div className="container my-3">
        <Textform heading="Enter text here" mode={mode} btnclr={btnclr} />
      </div>

    </>
  );
}

export default App;
