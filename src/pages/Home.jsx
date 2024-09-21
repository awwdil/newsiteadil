import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid border-0 p-0" style={{ background: "#f5f6f6", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <div className="container border-0 py-3">
          <img
            src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=lrvl310cH2QQ7kNvgF9N-8R&_nc_ht=scontent.fisb17-1.fna&_nc_gid=A8_TebTCrC10RN9ceDQMdrh&oh=00_AYBZyykYjrX-dCJc3GZm6bAclpAlkoOm9r074HZaC2j8jg&oe=66F3CA0B"
            alt="Blue Tick"
            style={{ width: "7rem", height: "7rem", marginTop: "20px" }}
          />
        </div>
        <h1 style={{ fontSize: "2.5rem", color: "#333", marginTop: "20px" }}>Get Your Blue Badge</h1>

        <a
          href="/apply"
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
    </>
  );
};

export default Home;
