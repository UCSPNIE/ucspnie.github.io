import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Navbar, Footer } from "./components";

import Home from "./pages/home/Home";
import Eventpage from "./pages/event/Eventpage";
import Mentors from "./pages/mentors/Mentors";
import Projects from "./pages/projects/projects";
import Register from "./pages/Register/register";
import TeamPage from "./pages/team/TeamPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Eventpage />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/team" element={<TeamPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
