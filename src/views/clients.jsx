// clients.jsx
import React, { useEffect } from 'react';

// Função para importar todos os arquivos (SVGs e PNGs) da pasta clients
function importAll(r) {
  let logos = {};
  r.keys().map((item, index) => {
    logos[item.replace('./', '')] = r(item).default;
  });
  return logos;
}

const logos = importAll(require.context('../assets/images/clients', false, /\.(svg|png)$/)); // Importa tanto SVGs quanto PNGs

const Clients = () => {
  useEffect(() => {
    const logoContainer = document.querySelector('.logo-list');
    const logoItems = document.querySelectorAll('.logo-item');

    let offset = 0;
    const logoWidth = logoItems[0].offsetWidth + 10; // A largura do logo mais margem

    function animateLogos() {
      setInterval(() => {
        offset -= logoWidth;
        logoContainer.style.transform = `translateX(${offset}px)`;

        // Reset quando todos os logos passam
        if (offset < -((logoItems.length - 6) * logoWidth)) {
          offset = 0;
          logoContainer.style.transition = 'none';
          logoContainer.style.transform = `translateX(${offset}px)`;
          setTimeout(() => {
            logoContainer.style.transition = 'transform 1s ease-out';
          }, 50);
        }
      }, 3000); // Intervalo de 3 segundos entre cada passagem
    }

    animateLogos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa somente uma vez na montagem do componente

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
