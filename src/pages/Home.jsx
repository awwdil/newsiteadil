import React from 'react';
import './style.css'; // Assuming you move styles into an external CSS file

const MetaVerified = () => {
  return (
    <>
      {/* Fullscreen Header Section */}
      <header className="header">
        <div>
          <h1>Elevate Your Presence with Meta Verified</h1>
          <p>Join the elite group of creators and businesses by getting Meta Verified. Build trust, boost your influence, and unlock premium features.</p>
          <a href="/apply" className="cta-btn">Get Meta Verified Now</a>
        </div>
      </header>

      {/* Why Meta Verified Section */}
      <section className="section">
        <div>
          <h2>Why Meta Verified?</h2>
          <p>Meta Verified provides a fast track to building credibility. With a verified badge, you’ll stand out, gain trust instantly, and unlock tools that accelerate your growth in a crowded digital world.</p>
          <img src="https://example.com/meta-features.jpg" alt="Meta Verified Benefits" />
        </div>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="section">
        <div>
          <h2>How It Works</h2>
          <div className="steps">
            <div>
              <h3>Step 1: Apply</h3>
              <p>Fill out the simple form to begin your Meta Verified journey.</p>
            </div>
            <div>
              <h3>Step 2: Get Verified</h3>
              <p>We review your details and verify your profile, granting you the verified badge.</p>
            </div>
            <div>
              <h3>Step 3: Grow</h3>
              <p>With your verified status, leverage exclusive tools to build trust and expand your reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Meta Verified is available in select regions. Features, pricing, and availability may vary. Contact us for more details.</p>
      </footer>
    </>
  );
};

export default MetaVerified;
