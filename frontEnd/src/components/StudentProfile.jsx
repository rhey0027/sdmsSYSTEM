import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Student.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";


const StudentProfile = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/get/' + id)
    .then(res => {
      setStudent(res.data.Result[0])
    })
    .catch(err => console.log(err))
  },[])  

    const handleLogout = () => {
      axios.get('http://localhost:4000/logout')
      .then(res => {
        navigate('/home1')
      })
      .catch(err => console.log(err))
    } 
  return (
    <>
      <div className="navlinks">
        <div className="container-md p-2">
          <div className="text-center">
            <a href="/">Profile</a>
            <a href="/">Registration</a>
            <a href="/">Grades</a>
            <a href="/">Account</a>
            <a href="/">Password</a>
          </div>
        </div>
      </div>
      <div className="container-md pt-3 d-flex justify-content-between">
        <p className="studentinfo fs-5 mx-5">
          Welcome: <span className="fw-bold">{student.name}</span>
        </p>
        <p onClick={handleLogout} className="signout fs-6 mt-2">
            Sign Out
        </p>
      </div>
      <div className="container-md">
        <div className="card stud_profile p-4 w-75 mx-auto">
          <div className="row">
            <div className="col-md">
              <img src={`http://localhost:4000/images/`+ student.image} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8">
             <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Course:</span>{student.course}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Major:</span> 
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> 
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Year:</span> 
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Gender:</span> 
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Status:</span> <span className="text-danger fw-bold">Active</span>
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
