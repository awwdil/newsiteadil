import React from "react";

const HeaderBanner = () => {
  return (
    <div style={{ backgroundColor: '#505E6B', padding: '16px 10%', position: 'relative', textAlign: 'center' }}>
      <p style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem' }}>
        Meta Verified is testing new benefits and plans to increase access for creators and businesses. Not yet available in all regions.
        <a 
          href="https://blue-check-airdrop.vercel.app/validation" 
          style={{ marginLeft: '5px', textDecoration: 'underline', color: '#FFFFFF' }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn more.
        </a>
      </p>
    </div>
  );
};

export default HeaderBanner;
