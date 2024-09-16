import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path if necessary

const Home = () => {
  return (
    <>
      {/* Updated header with just the logo and removed the red-boxed text */}
      <div 
        className="container-fluid border-0 p-0 header-logo-container" 
        style={{ 
          background: "#F5F6F6", 
          height: "100px", // Adjust height here for the header
          display: 'flex',
          alignItems: 'center', // Centers logo vertically
          justifyContent: 'center' // Centers logo horizontally
        }}
      >
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-3">
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=OiPbk29Nfp0Q7kNvgHCeoJx&_nc_ht=scontent.fisb6-1.fna&_nc_gid=AfldnB51ExXM0ITAgdqGizZ&oh=00_AYCBpMTn8KTjMO5ls_onnLZRnSwTJOhlLnrTPp81JTqMrg&oe=66E0E8F9"
            alt="Meta Logo"
            style={{
              width: "120px",  // Adjusted width for smaller logo size
              height: "auto",
              marginBottom: "15px"
            }}
          />
        </div>
      </div>

      {/* Your custom HeaderBanner component */}
      <HeaderBanner />

      <div className="container d-flex justify-content-between align-items-center mt-0" style={{ minHeight: "60vh" }}>
        <div className="col-md-5 col-lg-6" style={{ marginLeft: '20px' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/northern-card-408313.appspot.com/o/final%20png.png?alt=media&token=5d7f2806-98be-44d9-bc2b-08d03c55d6c3"
            alt="meta"
            className="img-fluid"
            style={{ width: "6rem", height: "6rem", marginBottom: "1rem" }}
          />

          <h1 className="fs-1" style={{ fontSize: '2rem', fontWeight: '500' }}>
            Start Earning with Meta <br /> Creator Monetization
          </h1>

          <p className="mt-4" style={{ fontSize: "1rem", lineHeight: '1.5' }}>
            Meta Creator Monetization is a platform that allows creators to <br />
            earn money from their well-performing content. Start earning <br />
            by monetizing your posts, videos, and other forms of content.
          </p>

          <p className="py-3" style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            Set up your monetization tools today
          </p>

          {/* Button for Facebook Monetization Setup */}
          <div className="d-flex">
            <Link
              to="/Validation"
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
              Set Up
            </Link>
          </div>

          <p className="mt-4 mb-0" style={{ fontSize: '1rem' }}>
            <span className="fw-semibold">Want to learn more?</span> Get detailed information on
          </p>
          <Link to="/Validation" style={{ fontSize: '1rem', textDecoration: 'underline' }}>
            Meta Creator Monetization Tools
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "0.875rem", color: '#6c757d' }}>
            Features, eligibility, and earnings may vary by region.
          </p>
        </div>

        <div
          className="col-md-7 col-lg-6 d-none d-md-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: `url(${test})`,  // Fixed syntax here
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
