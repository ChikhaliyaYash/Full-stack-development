import "./App.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./Navbar/Navbar";

function App() {
  return (
    <div className="wrapper">
      <Navbar1 />
      <h1 className="h1">Marine Mammals</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/About" exact element={<About />} />
        </Routes>
      </BrowserRouter>
      <h2 className="h2">Yash Chikhaliya (D21DCS149)</h2>
    </div>
  );
}

export default App;
