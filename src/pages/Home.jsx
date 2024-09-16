import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png'; // your local image asset
import '../App.css'; // Assuming you are using a CSS file to style the page

const Home = () => {
  return (
    <>
      {/* Header Logo */}
      <div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#f1f1f1" }}>
        <div className="container border-0 py-2 d-flex align-items-center justify-content-center">
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=85EcHR9TIqcQ7kNvgFqN9Bl&_nc_ht=scontent.fisb6-1.fna&_nc_gid=AwPPubJtvA5eRC5DY5FyN7P&oh=00_AYCNXVH1RqN_9bByKTA5K_9N2H9Y72kdF6H2GUfrG1sayA&oe=66EB74F9"
            alt="logo"
            className="meta-logo"
            style={{ width: "120px", marginBottom: "0.75rem" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container d-flex justify-content-center align-items-center text-center mt-0" style={{ minHeight: "60vh", flexDirection: "column" }}>
        <div className="col-lg-8">
          <img
            src="https://scontent.fisb6-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=JWefHSeXjsIQ7kNvgFVIjgL&_nc_ht=scontent.fisb6-2.fna&_nc_gid=AwPPubJtvA5eRC5DY5FyN7P&oh=00_AYC_32qhZN1o7zRS8E6YLa0D2KYDbRQcXod11QJIdeyVbg&oe=66EB708B"
            alt="meta"
            className="img-fluid"
            style={{ width: "60px", height: "60px", marginBottom: "0.75rem" }}
          />
          <h1 className="fs-1" style={{ fontSize: '2rem', fontWeight: '600', color: '#333' }}>
            Meta Blue Tick Airdrop
          </h1>

          <p className="mt-3" style={{ fontSize: "1rem", lineHeight: '1.5', color: '#555' }}>
            We are excited to announce the Meta Blue Tick Airdrop, awarded to selected pages to recognize their presence and engagement within the community. This exclusive badge helps you stand out and build trust with your audience.
          </p>

          <p className="py-3" style={{ fontSize: '1rem', color: '#555' }}>
            Congratulations on being selected!
          </p>

          {/* Get Started Button */}
          <div className="d-flex justify-content-center">
            <Link
              to="/validation"
              className="btn btn-primary mx-2"
              style={{
                background: "#007bff",
                borderRadius: "50px",
                padding: "8px 24px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-3" style={{ background: "#f1f1f1", color: '#777' }}>
        <p>© 2024 Meta Blue Tick Airdrop. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
