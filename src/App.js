import "./App.css";
import About from "./components/about/about"
import Events from "./components/events/events";
import Mentors from "./components/mentors/mentors";

import Navbar from "./components/navbar/Navbar";
import Team from "./components/team/team";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <About />
      <Events/>
      <Mentors />
      <Team />
      <div className="footer">
       
      </div>
    </div>
  );
}

export default App;
