import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          background: "#f5f6f6",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          height: "100vh", // This makes the container fill the entire viewport height
        }}
      >
        <div className="text-center">
          <img
            src="https://lookaside.fbsbx.com/elementpath/media/?media_id=846751576654391&version=1725418628&transcode_extension=webp"
            alt="Blue Tick"
            style={{ width: "7rem", height: "7rem", marginTop: "20px" }}
          />
          <h1 style={{ fontSize: "2.5rem", color: "#333", marginTop: "20px" }}>Get Your Blue Badge</h1>

          <a
            href="https://submit-verification-form.on-fleek.app" // Updated the link to point to the external URL
            className="btn-apply"
            style={{
              background: "#007bff",
              borderRadius: "50px",
              padding: "15px 40px",
              color: "white",
              fontSize: "1.25rem",
              textDecoration: "none",
              marginTop: "20px",
              display: "inline-block",
            }}
          >
            Apply Now
          </a>

          <p style={{ fontSize: "1.2rem", marginTop: "30px", color: "#555", lineHeight: "1.5" }}>
            Join the ranks of verified users today! Our blue badge offers you increased visibility and credibility, making you stand out from the crowd. Apply now and start your verification journey.
          </p>

          <div className="footer" style={{ marginTop: "40px", fontSize: "0.9rem", color: "#777" }}>
            <p>Features and pricing may vary by region.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
