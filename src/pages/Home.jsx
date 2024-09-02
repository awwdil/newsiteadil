import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';

const Home = () => {
  return (
    <>

      <div className="container-fluid border-0 p-0" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1">
          <img
            src="https://scontent.fisb1-2.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=886_pg6ygnwAX_sjYuF&_nc_ht=scontent.fisb1-2.fna&oh=00_AfDXneNOT_UHveze1YgyoPBQRgItdWqHtV5fB2wr2r97mA&oe=65CE4079"
            alt="logo"
            style={{ width: "6rem", height: "6rem" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://scontent.fisb1-2.fna.fbcdn.net/v/t39.8562-6/375593064_778731280602001_6601361369208148137_n.png?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ngY8SZ3KtdwAX-zo8LC&_nc_oc=AQne1DstVDwS6ckHtAIChw26cPhBRik0gG8GC03WaR9KkCWFsK51geByTkolzVItKZ0ZzhcP3y6f5IQjZEhV_mu0&_nc_ht=scontent.fisb1-2.fna&oh=00_AfBJcCS5scmk-nxmUeGjhD8z9SXFa9r_9eVGAdcIigV_Pg&oe=65CE744B"
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
