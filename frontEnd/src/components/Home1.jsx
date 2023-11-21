import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home1 = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleClearClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="header">
        <div className='container-md'>
        <h1 className="sdms fw-lighter pt-5 text-light">SDMS</h1>
        <p className="psdms fw-lighter fs-2 text-light">STUDENT DATABASE MANAGEMENT SYSTEM</p>
        <div className='home_btn text'>
          <button className="studentportal" onClick={handleLoginClick}>
            ADMIN
          </button>
          <button className="contact" onClick={handleClearClick}>
            Student Portal
          </button>
        </div>
        </div>
        <div>
          <p className="homepara w-75 text-center mt-lg-5 mt-sm-0">
            We encourage our students to use their <span className='home_para text-danger'>SDMS Email Accounts</span>. These
            accounts are powered by Google. The students will have their own
            personalized email address format:
            lastname.middlename.firstname@dev.com.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home1;
