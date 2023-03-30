import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../css/Login.css";
import Student from "./Student";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleClear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (
      username === "Taylor Sweet" &&
      email === "taylorsweet@msn.com" &&
      password === "taylor"
    ) {
      setIsLoggedIn(true);
    } else {
      setError(
        <span className="error_login text-danger fw-bold pt-2">"ACCESS DENIED!"</span>
      );
    }
  };
  if (isLoggedIn) {
    return <Student username={username} />;
  }
  return (
    <>
      <div className="header_login text-center text-light">
        <span>
          <h1 className="student fw-lighter fs-3 mx-3">Student</h1>
        </span>
        <span>
          <h1 className="dms fw-lighter fs-3"> Database Management System</h1>
        </span>
      </div>
      {/* form container here */}
      <div className="container">
        <div className="row mx-3">
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleLogin}>
                <h4 className="fw-lighter">User Authentication</h4>
                <p className="text-center">
                  Please sign-in to access your Student Portal{" "}
                </p>
                <div className="input_box">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="log_btn d-flex justify-content-end mx-4">
                  <div className="d-flex m-0">
                    {error && <p className="error">{error}</p>}
                  </div>
                  <button className="btn_login" id="btn_login" type="submit">
                    Login
                  </button>
                  <button
                    className="btn_clear mx-2"
                    type="button"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </form>
              <div className="container col reset_key">
                <p className="reset" id="reset">
                  Forgot your password? Request a reset key from{" "}
                  <a href="/">mis@rayland@dev.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-md-5 pt-sm-2 mt-md-5 mt-sm-0">
            <div className="functions_para px-5">
              <h3 className="fs-5">
                This module is exclusively for students only. Functions included
                are:
              </h3>
            </div>
            <div className="functions_info px-5">
              <ul>
                <li>Update of Profile</li>
                <li>Change Password</li>
                <li>Payment History</li>
                <li>Students Registration</li>
              </ul>
            </div>
            <div className="instruc_para mx-5 mb-sm-5 mb-md-0">
              <h3 className="fs-5">Instructions:</h3>
              <ul className="pb-3">
                <li>
                  To sign-in, specify your username, email and password then
                  click login.
                </li>
                <li>To clear entries, click on the clear button.</li>
                <li>
                  If you forgot your password, click on the Forgot Password link
                  for assistance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
