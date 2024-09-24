import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'; // Updated relative path to style.css

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="content-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png"
          alt="Meta Logo"
          className="meta-logo"
        />
        <h1 className="main-title">Get Verified with Meta Blue Badge</h1>
        <p className="main-subtitle">
          Show the world you're authentic and build credibility on Meta platforms.
        </p>
        <button onClick={() => navigate('/validation')} className="cta-btn">
          Apply Now
        </button>
        <p className="footer-text">Meta © 2024 | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Home;
