import "./App.css";

import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eventpage from "./pages/event/Eventpage";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">

      <Router>
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Eventpage />} />
        </Routes>
      </Router>

     

    </div>
  );
}

export default App;
