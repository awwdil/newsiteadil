import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path as necessary

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

      <div className="d-flex justify-content-center mt-3">
        <div className="col-sm-6">  {/* Centering the entire content */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/secondtick.png?alt=media&token=72a304b3-4767-4306-917d-4181f6b576af"
            alt="meta"
            className="img-fluid"
            style={{ width: "4rem", height: "4rem", marginBottom: 0 }}
          />
          <h1 className="my-3 fs-1" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Stand out with Meta <br /> Verified
          </h1>

          <p style={{ fontSize: "1rem", lineHeight: '1.5' }} className="mt-4">
            Meta Verified is a subscription bundle for creators and <br />
            businesses that helps you show the world your profile is <br />
            authentic and build credibility with your audience.
          </p>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "50px",
              padding: "10px 35px",
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          >
            Apply
          </Link>

          <p className="py-3" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            Sign up now
          </p>

          <p className="mt-4 mb-0" style={{ fontSize: '1rem' }}>
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link to="/business-info" style={{ fontSize: '1rem', textDecoration: 'underline' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "0.875rem", color: '#6c757d' }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-sm-5 d-none d-sm-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
