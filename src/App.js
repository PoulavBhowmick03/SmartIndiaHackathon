import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import About from "./pages/About";
import Search from "./pages/Search";
import Generate from "./pages/Generate.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/certificate" element={<Certificate/>}/>
        <Route path = "/search" element={<Search/>}/>
        <Route path = "/generate" element={<Generate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
