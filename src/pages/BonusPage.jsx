import React from "react";
import { Link } from "react-router-dom";
import FbLogo from "../../src/assets/fb_logo.png";

const BonusPage = () => {
  const navLinks = [
    "Create",
    "Grow",
    "Earn money",
    "Programs",
    "Stay Safe",
    "Blog",
  ];
  return (
    <>
      <div className="container d-flex align-items-center">
        <div className="logo px-0 py-3">
          '
          <img
            src={FbLogo}
            alt="logo"
            style={{ width: "3rem", height: "2rem" }}
          />
        </div>

        <ul
          className="d-md-flex d-none px-0 py-3 m-0"
          style={{ fontFamily: "Poppins", fontSize: "13px" }}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              style={{ listStyle: "none", cursor: "pointer" }}
              className={` ${index === 0 ? "ms-3" : "ms-5"} py-2`}
              onClick={() => (window.location.href = "/")}
            >
              {" "}
              {link}{" "}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-fluid" style={{ background: "#fbf9f6" }}>
        <div
          className="container d-md-flex justify-content-center align-items-center"
          style={{ height: "500px" }}
        >
          <div className="col-5 ">
            <h1 style={{ color: "#1877f2" }}>Bonuses</h1>
            <p
              className="pb-4 pt-2"
              style={{ fontFamily: "Poppins", maxWidth: "310px" }}
            >
              Amplify your earnings as a creator with Bonuses.
            </p>

            <Link
            to="/validation"
              className="px-4 p-2"
              style={{
                fontFamily: "Poppins",
                background: "#1877f2",
                color: "white",
                textDecoration: "none",
              }}
            >
              Get Started
            </Link>
          </div>
          <div className="col-7 mt-md-0 mt-5">
            <img
              src="https://z-p3-scontent.fisb3-2.fna.fbcdn.net/v/t39.2365-6/315847476_683506213277980_4528614302839679994_n.png?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=585ed4&_nc_eui2=AeFX6IP8E63dAl2YSRcQPboEoC4AvO9fMOSgLgC8718w5GVi5CqQtstEMVxAtedMRJ4qD5X1QJIo_pMFU-N-NGz_&_nc_ohc=rFa30FS7YQcAX-psLP7&_nc_pt=1&_nc_ht=z-p3-scontent.fisb3-2.fna&oh=00_AfCKirGt_QE46kZcdaQKZyVYuLtf0Fp43dA-1oz7r4Pruw&oe=6587FB6C"
              alt="bonuses"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusPage;
