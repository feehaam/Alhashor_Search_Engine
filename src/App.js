import "./App.css";
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar";
import { useState } from "react";
import Home from "./Home";
import Books from "./Books";
import Topics from "./Topics/Topics";

function App() {
  const [display, setDisplay] = useState(0);
  window.history.pushState(this, null, null)
    window.history.pushState(this, null, null)
    window.history.pushState(this, null, null)
    window.history.pushState(this, null, null)
    window.history.pushState(this, null, null)
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