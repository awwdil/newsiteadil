import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path if necessary

const Home = () => {
  return (
    <>
      {/* Header Logo */}
      <div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1 d-flex align-items-center justify-content-center" style={{ paddingBottom: 0 }}>
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=L3P8U8HbrQQQ7kNvgHz7WC0&_nc_ht=scontent.fisb6-1.fna&_nc_gid=Aj-t3IUy4UWSObPuFJ5tCoh&oh=00_AYCq6Dr35OTXqEuJ_x8gUtnhFm_0ux0odJy83J7SnWrUfw&oe=66F244B9"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      {/* Header Banner */}
      <HeaderBanner />

      {/* Main Content Section */}
      <div className="container d-flex justify-content-between align-items-center mt-0" style={{ minHeight: "60vh" }}>
        <div className="col-md-5 col-lg-6" style={{ marginLeft: '20px' }}>
          <img
            src="https://scontent.fisb6-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=lrvl310cH2QQ7kNvgExDqXv&_nc_ht=scontent.fisb6-2.fna&_nc_gid=Aj-t3IUy4UWSObPuFJ5tCoh&oh=00_AYCUriSm9Iqh8Pab_ISGqqG3TqTr9rVu_AUl7wH6&oe=66F3445B"
            alt="Main Image"
            className="main-image"
          />
        </div>
        <div className="col-md-6 col-lg-5">
          <h1 className="display-4">Get Your Badge Now!</h1>
          <p className="lead">Secure your verification badge with our fast and reliable service. Click the link below to learn more.</p>
          <Link to="/learn-more" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
