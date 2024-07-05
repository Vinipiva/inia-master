import './less/style.less'; // Imports the LESS file


document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('pointerup', function(event) {
        const water = document.createElement('div');
        water.classList.add('water-ripple');

        // Usa pageX/pageY para as coordenadas
        water.style.left = event.pageX - 25 + 'px';
        water.style.top = event.pageY - 25 + 'px';

        document.body.appendChild(water);

        setTimeout(() => {
            water.remove();
        }, 4000);
    });
});