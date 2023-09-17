import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certificate from "./pages/Certificate";
import About from "./pages/About";
import Search from "./pages/Search";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/certificate" element={<Certificate/>}/>
        <Route path = "/wallet" element={<Wallet/>}/>
        <Route path = "/search" element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
