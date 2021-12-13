import "./App.css";

import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eventpage from "./pages/event/Eventpage";
import Home from "./components/home/Home";
import Mentors from "./pages/mentors/Mentors";

import TeamPage from "./pages/team/TeamPage";
import Footer from "./pages/footer/Footer";
import Register from "./pages/Register/register";

function App() {
    return (      
    <div className="App">
      <Router>
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Eventpage />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/mentors" element={<Mentors />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
