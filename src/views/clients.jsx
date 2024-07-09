// clients.jsx
import React, { useEffect, useRef, useState } from 'react';

// Função para importar todos os arquivos (SVGs e PNGs) da pasta clients
function importAll(r) {
  let logos = {};
  r.keys().map((item, index) => {
    logos[item.replace('./', '')] = r(item).default;
  });
  return logos;
}

const logos = importAll(require.context('../assets/images/clients', false, /\.(svg|png)$/));

const Clients = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="logo-list">
            {Object.keys(logos).map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logos[logo]} alt={logo.replace(/\.(svg|png)$/, '').replace(/_/g, ' ')} className="logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;