import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Ensure this path is correct for your styles

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="content-box">
        <img
          src="https://lookaside.fbsbx.com/elementpath/media/?media_id=846751576654391&version=1725418628&transcode_extension=webp"
          alt="Meta Logo"
          className="meta-logo"
        />
        <h1 className="main-title">Get Verified with Meta Blue Badge</h1>
        <p className="main-subtitle">Show the world you're authentic and build credibility on Meta platforms.</p>
        {/* Update the button to navigate to the ValidationPage */}
        <button onClick={() => navigate('/validation')} className="cta-btn">
          Apply Now
        </button>
        <p className="footer-text">Meta © 2024 | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Home;
