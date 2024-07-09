export function initializeWaterRippleEffect() {
  document.body.addEventListener('pointerup', (event) => {
    const water = document.createElement('div');
    water.classList.add('water-ripple');

    water.style.left = event.pageX - 25 + 'px';
    water.style.top = event.pageY - 25 + 'px';

    document.body.appendChild(water);

    setTimeout(() => {
      water.remove();
    }, 4000);
  });
}