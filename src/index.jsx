import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './less/style.less';
import Clients from './views/clients.jsx';
import { initializeWaterRippleEffect } from './effects.jsx';

function App() {
  return (
    <div className="with-leafs">
      <img src="images/leaf-1.svg" className="leaf-1" alt="folha-decorativa" aria-hidden="true" />
      <img src="images/leaf-2.svg" className="leaf-2" alt="folha-decorativa" aria-hidden="true" />
      <img src="images/leaf-3.svg" className="leaf-3" alt="folha-decorativa" aria-hidden="true" />
      <img src="images/leaf-4.svg" className="leaf-4" alt="folha-decorativa" aria-hidden="true" />
      <header className="container p-4">
        <div className="row">
          <div className="col-12">
            <img src="images/logo-inia.svg" alt="Logo Inia" />
          </div>
        </div>
      </header>

      <section className="hero d-flex align-items-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-5 mb-3">
                INIA Intelligence Consulting
                <span className="d-block text-muted lead">Empowering Businesses through Strategic Consulting</span>
              </h1>
              <button type="button" className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      <Clients /> {/* Include the Clients component */}

      <section className="about container">
        {/* ... (Rest of your content) ... */}
      </section>

      {/* ... (Other sections: services, cases, contact, footer) ... */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);