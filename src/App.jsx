import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Student from "./components/Student";

function App() {
  return (
    <Router>
    
        <Footer />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
