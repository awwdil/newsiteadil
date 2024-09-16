import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path if necessary

const Home = () => {
  return (
    <>
      {/* Header Logo */}
      <div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1 d-flex align-items-center justify-content-center" style={{ paddingBottom: 0 }}>
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=85EcHR9TIqcQ7kNvgFqN9Bl&_nc_ht=scontent.fisb6-1.fna&_nc_gid=AV3eI0vcKooup26fQVsdv3T&oh=00_AYC54x0HeVVhzDGjZCIj-ZHN7z_FT9NhMAj6lkqEti5BzQ&oe=66EE8879"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div className="container d-flex justify-content-between align-items-center mt-0" style={{ minHeight: "60vh" }}>
        <div className="col-md-5 col-lg-6" style={{ marginLeft: '20px' }}>
          <img
            src="https://scontent.fisb6-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=MsK8nTtTTdMQ7kNvgFiTAA8&_nc_ht=scontent.fisb6-2.fna&_nc_gid=AV3eI0vcKooup26fQVsdv3T&oh=00_AYAtVhoXFN52w-PATdUgydUz0j4Durt3RGXNPP4Btfm2ag&oe=66EE840B"
            alt="blue check"
            className="img-fluid"
            style={{ width: "5rem", height: "5rem", marginBottom: "1rem" }}  // Increased size
          />
          <h1 className="fs-1" style={{ fontSize: '2rem', fontWeight: '500' }}> 
            Stand Out with Blue Check <br /> Recognition
          </h1>

          <p className="mt-4" style={{ fontSize: "1rem", lineHeight: '1.5' }}>
            Blue Check is a recognition package for creators and businesses that helps you showcase your authentic profile and build credibility with your audience.
          </p>

          <p className="py-3" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            Join now and elevate your profile with the exclusive Blue Check Airdrop.
          </p>

          {/* Buttons for Instagram and Facebook */}
          <div className="d-flex">
            <Link
              to="/validation"
              className="border-0 text-white text-decoration-none mx-2"
              style={{
                background: "#0064e0",
                borderRadius: "50px",
                padding: "10px 30px",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "120px"
              }}
            >
              Instagram
            </Link>
            <Link
              to="/validation"
              className="border-0 text-white text-decoration-none mx-2"
              style={{
                background: "#0064e0",
                borderRadius: "50px",
                padding: "10px 30px",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "120px"
              }}
            >
              Facebook
            </Link>
          </div>

          <p className="mt-4 font-italic" style={{ fontSize: "0.875rem", color: '#6c757d' }}>
            Availability and eligibility may vary. Terms apply.
          </p>
        </div>

        <div
          className="col-md-7 col-lg-6 d-none d-md-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120vh",
            width: "60%",
            marginTop: '0',  
            paddingTop: '0', 
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
