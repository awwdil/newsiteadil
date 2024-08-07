import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path if necessary

const Home = () => {
  return (
    <>
      <div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1 d-flex align-items-center justify-content-center" style={{ paddingBottom: 0 }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/svg-image-1.svg?alt=media&token=fd376762-b836-495d-abdf-71b58a2cecae"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div className="container d-flex justify-content-between align-items-center mt-5" style={{ minHeight: "60vh" }}>
        <div className="col-md-5 col-lg-6"> {/* Reduced width to make the content smaller */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/secondtick.png?alt=media&token=72a304b3-4767-4306-917d-4181f6b576af"
            alt="meta"
            className="img-fluid"
            style={{ width: "4rem", height: "4rem", marginBottom: "1rem" }} // Slightly reduced the icon size
          />
          <h1 className="fs-1" style={{ fontSize: '2rem', fontWeight: 'bold' }}> {/* Reduced font size */}
            Stand Out with Meta <br /> Verified
          </h1>

          <p className="mt-4" style={{ fontSize: "1rem", lineHeight: '1.5' }}> {/* Reduced font size */}
            Meta Verified is a subscription package for creators and <br />
            businesses that helps you show the world that your profile is <br />
            authentic and build credibility with your audience.
          </p>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "50px",
              padding: "10px 30px", // Slightly reduced padding
              fontSize: "1rem", // Reduced font size
              fontWeight: "bold"
            }}
          >
            Apply
          </Link>

          <p className="py-3" style={{ fontSize: '1rem', marginTop: '1.5rem' }}> {/* Reduced font size */}
            Register Now
          </p>

          <p className="mt-4 mb-0" style={{ fontSize: '1rem' }}> {/* Reduced font size */}
            <span className="fw-semibold">Are you a business?</span> Get more
            information about
          </p>
          <Link to="/business-info" style={{ fontSize: '1rem', textDecoration: 'underline' }}> {/* Reduced font size */}
            Meta Verified for Businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "0.875rem", color: '#6c757d' }}> {/* Reduced font size */}
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-md-7 col-lg-6 d-none d-md-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh", // Increased height
            width: "80%", // Ensured full width
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
