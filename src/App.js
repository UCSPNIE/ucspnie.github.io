import "./App.css";

import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eventpage from "./pages/event/Eventpage";
import Home from "./components/home/Home";
import Mentors from "./components/mentors/mentors";
import Team from "./components/team/team";

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
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/mentors" element={<Mentors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
