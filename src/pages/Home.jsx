import React from 'react';
import './style.css'; // Make sure the path to your CSS file is correct

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Meta</h1>
          <p>Bringing the world closer together. Empowering people to build communities and grow businesses.</p>
          <a href="/apply" className="cta-btn">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Meta?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Connect</h3>
            <p>Join millions of people in creating meaningful connections and discovering new opportunities.</p>
          </div>
          <div className="feature">
            <h3>Engage</h3>
            <p>Build trust and relationships by engaging with communities that matter to you.</p>
          </div>
          <div className="feature">
            <h3>Grow</h3>
            <p>Expand your network, grow your business, and reach new audiences with the power of Meta.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join Us Today</h2>
        <p>Empower your personal or business profile with Meta Verified. Build trust and unlock new opportunities.</p>
        <a href="/apply" className="cta-btn-large">Apply Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Meta © 2024 | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default Home;
