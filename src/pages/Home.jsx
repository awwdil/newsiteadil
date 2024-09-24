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
          height: "100vh", // Full viewport height
        }}
      >
        <div className="text-center">
          {/* Meta's official blue tick logo */}
          <img
            src="https://lookaside.fbsbx.com/elementpath/media/?media_id=846751576654391&version=1725418628&transcode_extension=webp"
            alt="Blue Tick"
            style={{ width: "5rem", height: "5rem", marginTop: "10px" }}
          />
          
          {/* Title */}
          <h1 style={{ fontSize: "2rem", color: "#333", marginTop: "20px", fontWeight: "bold" }}>
            Invitation to Apply for Meta's Blue Badge
          </h1>

          {/* Description */}
          <p style={{ fontSize: "1.1rem", marginTop: "20px", color: "#555", lineHeight: "1.5" }}>
            We're inviting you to join an exclusive group of verified Meta users. By getting your blue badge, 
            you'll gain increased visibility and credibility across the platform. Apply today to begin your verification process.
          </p>

          {/* Call to Action Button */}
          <a
            href="/validation.html"
            className="btn-apply"
            style={{
              background: "#1877f2", // Meta blue
              borderRadius: "50px",
              padding: "12px 35px",
              color: "white",
              fontSize: "1.1rem",
              textDecoration: "none",
              marginTop: "20px",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            Apply Now
          </a>

          {/* Footer */}
          <div className="footer" style={{ marginTop: "40px", fontSize: "0.9rem", color: "#777" }}>
            <p>Eligibility requirements and pricing may vary by region.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
