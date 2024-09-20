import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';

const Home = () => {
  return (
    <>
      <div className="container-fluid border-0 p-0" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1">
          <img
            src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=2CnsD2N6jlMQ7kNvgFVhm9S&_nc_ht=scontent.fisb17-1.fna&_nc_gid=A8_TebTCrC10RN9ceDQMdrh&oh=00_AYDivsfUxhTJ85BfdC7N0THX2E9ZEDUByWf_UeWSshQN0Q&oe=66F3CE79"
            alt="logo"
            style={{ width: "6rem", height: "6rem" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/northern-card-408313.appspot.com/o/twitter-verified-badge9633.jpg?alt=media&token=2f63c57c-dac0-40b3-a9a2-5ce44e602c19"
            alt="meta"
            style={{ width: "4rem", height: "4rem" }}
          />
          <h1 className="my-3 fs-1">
            Become <br /> Meta Verified
          </h1>

          {/* Add 3 more spaces (adjust the marginBottom value as needed) */}
          <div style={{ marginBottom: "30px" }}></div>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
            }}
          >
            Apply
          </Link>

          <p style={{ fontSize: "18px" }} className="mt-4">
            Grow your social presence with Meta Verified – a new subscription <br />
            bundle available for creators and businesses on Instagram and <br />
            Facebook.
          </p>

          <p className="py-3" style={{ fontSize: '17px' }}>
            Sign up now for creators
          </p>

          <p className="mt-4 mb-0">
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link style={{ fontSize: '14px' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "13px" }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-sm-5 d-none d-sm-block img-smal order-2 img-fluid"
          /* Show on larger screens */
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
