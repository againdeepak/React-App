import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="TextModi"/>
      <div className="container my-3">
      <Textform   heading="Enter text here"/>
      </div>
      
    </>
  );
}

export default App;
