import "./App.css";
import Home from "./components/home/Home"

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
