import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./less/style.less";
import Clients from "./views/clients.jsx";
import { initializeWaterRippleEffect } from "./effects.jsx";


function App() {
  useEffect(() => {
      initializeWaterRippleEffect();
    }, []);
  return (
    <div>
      <section className="with-leafs">
        <img
          src="images/leaf-1.svg"
          className="leaf-1"
          alt="folha-decorativa"
          aria-hidden="true"
        />
        <img
          src="images/leaf-2.svg"
          className="leaf-2"
          alt="folha-decorativa"
          aria-hidden="true"
        />
        <img
          src="images/leaf-3.svg"
          className="leaf-3"
          alt="folha-decorativa"
          aria-hidden="true"
        />
        <img
          src="images/leaf-4.svg"
          className="leaf-4"
          alt="folha-decorativa"
          aria-hidden="true"
        />
        <header className="container p-4">
          <div className="row">
            <div className="col-12">
              <img src="images/logo-inia.svg" alt="Logo Inia" />
            </div>
          </div>
        </header>
        <div className="hero d-flex align-items-center">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-5 mb-3">
                  INIA Intelligence Consulting
                  <span className="d-block text-muted lead">
                    Empowering Businesses through Strategic Consulting
                  </span>
                </h1>
                <button type="button" className="btn btn-primary">
                  Learn More
                </button>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        <Clients /> {/* Include the Clients component */}
      </section>
      {/* The entire component should be within this div tag */}
      <section className="about container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-6">About INIA Intelligence Consulting</h2>
            <p>
              We are a team of experienced consultants dedicated to helping
              businesses achieve their goals through data-driven insights and
              strategic solutions.
            </p>
            {/* Add more details about your company's history, mission, etc. */}
          </div>
          <div className="col-md-6">
            {/* Consider adding an image or video to make this section more engaging */}
          </div>
        </div>
      </section>
      <section className="services container py-5">
        <h2 className="display-6 text-center">Our Services</h2>
        <div className="row">
          {/* Create service cards using Bootstrap's card components */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Strategic Planning</h5>
                <p className="card-text">
                  We help you develop a roadmap for success.
                </p>
              </div>
            </div>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </section>
      <section className="cases container py-5">
        <h2 className="display-6 text-center">Success Stories</h2>
        <div className="row">
          {/* Create case study summaries using Bootstrap's card or grid components */}
        </div>
      </section>
      <section className="contact container py-5">
        <h2 className="display-6 text-center">Get in Touch</h2>
        {/* Add a contact form or contact details here */}
      </section>
      <footer className="container py-4 text-center">
        <p>&copy; {new Date().getFullYear()} INIA Intelligence Consulting</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
