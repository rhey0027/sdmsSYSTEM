import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="header_contact text-center">
        <span>
          <h1 className="student fw-lighter fs-3 mx-3">Student</h1>
        </span>
        <span>
          <h1 className="dms fw-lighter fs-3  text-light">
            {" "}
            Database Management System
          </h1>
        </span>
      </div>
      <div className="container contact_us text-center mt-4">
        <h3>Contact Us</h3>
      </div>
      <div className="container contact_info text-center">
        <p>
          Please fill up this form to contact us and we will get back to you
          within 24 hours or you can reach us at our landline number (063)
          991-0992 / Mobile Number: 0955-456-1233 - 09354178659
        </p>
      </div>
      <div className="container card_contact mt-5">
        <div className="row gx-5">
          <div className="col-md">
            <form>
              <div>
              <div className="contact_form w-100">
                <input
                  className="contactfirstname"
                  type="text"
                  placeholder="First Name"
                />
              <div>
                <input
                  className="contactlastname"
                  type="text"
                  placeholder="Last Name"
                  />
              </div>
              <div>
                <input
                  className="contactemail"
                  type="email"
                  placeholder="Email"
                  />
              </div>
              <div>
                <textarea
                  className="contactmessage"
                  type="textarea"
                  placeholder="Message"
                  />
              </div>
            </div>
                <button className="btn_Submit mt-3">Submit</button>
              </div>
            </form>
          </div>
          <div className="col">
            <div className="follow text-primary">
              <h3>Follow Us!</h3> 
            </div>
              <div className="icon-container mt-5 mb-5 pb-5"> <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebookMessenger} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// <div className="contactform">
//   <h1 className="contactheader">CONTACT US</h1>
//   <p className="contactcont">
//     Please use this form to contact us and we will get back to you within
//     24 hours. Or you can reach us at 0199-9910-199 | 0299-9920-299 during
//     business hours.
//   </p>
//   <div>
//     <input
//       className="contactfirstname"
//       type="text"
//       placeholder="First Name"
//     />
//     <input
//       className="contactlastname"
//       type="text"
//       placeholder="Last Name"
//     />
//     <input className="contactemail" type="email" placeholder="Email" />
//     <textarea
//       className="contactmessage"
//       type="textarea"
//       placeholder="Message"
//     />
//     <button className="btnsubmit">Submit</button>
//   </div>
//   <p className="follow">FOLLOW US</p>
//   <div className="icon-container">
//     <FontAwesomeIcon icon={faFacebook} />
//     <FontAwesomeIcon icon={faFacebookMessenger} />
//     <FontAwesomeIcon icon={faInstagram} />
//     <FontAwesomeIcon icon={faLinkedin} />
//     <FontAwesomeIcon icon={faTwitter} />
//   </div>
// </div>
