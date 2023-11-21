import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import StudentUpdate from "./components/StudentUpdate";
import Home1 from './components/Home1';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard/>}>
           <Route path="" element={<Home/>}></Route>
           <Route path="profile" element={<Profile/>}></Route>
           <Route path="student" element={<Student/>}></Route>
           <Route path="create" element={<AddStudent/>}></Route>
           <Route path="/studentUpdate/:id" element={<StudentUpdate/>}></Route>
         </Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/home1" element={<Home1 />}></Route>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
