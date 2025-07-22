import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
