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
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=8UNAKTXRBNEQ7kNvgHuntHV&_nc_ht=scontent.fisb6-1.fna&_nc_gid=AZTtM4EwcMoWNnmz7hyFdwn&oh=00_AYBh7a93rrQKO944lgsN-9HPgpp1yYNDZix_1fp-Zmo0aA&oe=67016DF9"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div className="container d-flex justify-content-between align-items-center mt-5" style={{ minHeight: "60vh" }}>
        <div className="col-md-5 col-lg-6"> {/* Reduced width to make the content smaller */}
          <img
            src="https://lookaside.fbsbx.com/elementpath/media/?media_id=846751576654391&version=1725418628&transcode_extension=webp"
            alt="meta"
            className="img-fluid"
            style={{ width: "4rem", height: "4rem", marginBottom: "1rem" }} // Slightly reduced the icon size
          />
          <h1 className="fs-1" style={{ fontSize: '2rem', fontWeight: 'bold' }}> {/* Reduced font size */}
            Try the Beta Version of Meta <br /> Verified
          </h1>

          <p className="mt-4" style={{ fontSize: "1rem", lineHeight: '1.5' }}> {/* Reduced font size */}
            For a limited time, selected users can try the beta version of Meta Verified. <br />
            This exclusive offer allows you to test the blue tick feature before the official release. <br />
            Help us improve our service and show the world that your profile is <br />
            authentic and build credibility with your audience.
          </p>

          <p className="fw-bold" style={{ color: 'red', fontSize: "0.875rem", marginBottom: '1rem' }}> {/* Limited Time Offer in Red */}
            Limited Time Offer
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
            Apply for Beta
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
