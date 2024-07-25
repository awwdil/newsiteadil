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
            src="https://scontent.fisb5-2.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=nQAUqxj3c4sQ7kNvgEhQL9u&_nc_ht=scontent.fisb5-2.fna&oh=00_AYB_W-s90xhRwAM-X6lPO52ywIZEuDo58azJAC5URlWnDA&oe=66A870B9"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div className="d-flex justify-content-center mt-3">
        <div className="col-sm-6">  {/* Centering the entire content */}
          <img
            src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=vGXfreoAmG8Q7kNvgHbyd9J&_nc_ht=scontent.fisb5-1.fna&oh=00_AYAk803-bCH6NOwo2WH51r1hn3_-xNrBMH0CeORjLDs-iQ&oe=66A86C4B"
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
