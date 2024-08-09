import React from "react";
import { Link } from "react-router-dom";
import test from '../assets/mainlogo.png';
import HeaderBanner from '../components/HeaderBanner'; // Adjust the import path if necessary

const Home = () => {
  return (
    <>
      <div className="container-fluid border-0 p-0 header-logo-container" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1 d-flex align-items-center justify-content-center" style={{ paddingBottom: 0 }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/svg-image-1.svg?alt=media&token=fd376762-b836-495d-abdf-71b58a2cecae"
            alt="logo"
            className="meta-logo"
          />
        </div>
      </div>

      <HeaderBanner />

      <div className="container d-flex justify-content-between align-items-center mt-5" style={{ minHeight: "60vh" }}>
        <div className="col-md-6 col-lg-7"> {/* Expand this content for larger screens */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/secondtick.png?alt=media&token=72a304b3-4767-4306-917d-4181f6b576af"
            alt="meta"
            className="img-fluid"
            style={{ width: "5rem", height: "5rem", marginBottom: "1rem" }}
          />
          <h1 className="fs-1" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Destácate con Meta <br /> Verificado
          </h1>

          <p className="mt-4" style={{ fontSize: "1.25rem", lineHeight: '1.7' }}>
            Meta Verificado es un paquete de suscripción para creadores y <br />
            empresas que te ayuda a mostrarle al mundo que tu perfil es <br />
            auténtico y a construir credibilidad con tu audiencia.
          </p>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "50px",
              padding: "12px 40px",
              fontSize: "1.25rem",
              fontWeight: "bold"
            }}
          >
            Aplicar
          </Link>

          <p className="py-3" style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
            Regístrate ahora
          </p>

          <p className="mt-4 mb-0" style={{ fontSize: '1.25rem' }}>
            <span className="fw-semibold">¿Eres una empresa?</span> Obtén más
            información sobre
          </p>
          <Link to="/business-info" style={{ fontSize: '1.25rem', textDecoration: 'underline' }}>
            Meta verificado para empresas
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "1rem", color: '#6c757d' }}>
            Las características, disponibilidad y precios pueden variar según la región.
          </p>
        </div>

        <div
          className="col-md-6 col-lg-5 d-none d-md-block img-smal order-2 img-fluid"
          style={{
            backgroundImage: url(${test}),
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh"
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;