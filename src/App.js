import "./App.css";
import About from "./components/about/about"

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <About />
    </div>
  );
}

export default App;
