import React from 'react';
import './style.css'; // Ensure this points to your CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Notification Banner Section */}
      <section className="notification-banner">
        <div className="notification-content">
          <h1>Meta Verified</h1>
          <p>Get your profile verified and build trust across platforms.</p>
          <a href="/apply" className="cta-btn">Apply Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Meta © 2024 | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default Home;
