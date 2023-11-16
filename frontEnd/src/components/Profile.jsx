import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Student.css";
import React from "react";

const Student = (props) => {
  return (
    <>
      <div className="header_profile text-center">
        <span>
          <h1 className="student fw-lighter fs-3 mx-3">Student</h1>
        </span>
        <span>
          <h1 className="dms fw-lighter fs-3 text-light"> Database Management System</h1>
        </span>
      </div>
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
          Welcome: <span className="fw-bold">{props.username}</span>
        </p>
        <p className="signout fs-6 mt-2">
          <a href="/">
            Sign Out
          </a>
        </p>
      </div>
      <div className="container-md">
        <div className="card stud_profile p-4 w-75 mx-auto">
          <div className="row">
            <div className="col-md">
              <img src="./taylor sweet.jpg" className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
             <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Course:</span> Bachelor of Science in Medical Technology
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Major:</span> Accounting
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> 0955-759-4552
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Year:</span> Second Year
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Gender:</span> Female
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

export default Student;
