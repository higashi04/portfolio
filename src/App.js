import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import TemporaryDrawer from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemporaryDrawer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
