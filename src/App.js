import "./App.css";
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar";
import { useState } from "react";
import Home from "./Home";
import Topics from "./HadisByTopics";
import Books from "./Books";

function App() {
  const [display, setDisplay] = useState(0);
  return (
    <div>
      <NavBar setDisplay={setDisplay}/>
      {display == 0 ? <Home setDisplay={setDisplay} /> : ""}
      {display == 1 ? <Search /> : ""}
      {display == 2 ? <Topics /> : ""}
      {display == 3 ? <Books /> : ""}
    </div>
  );
}

export default App;