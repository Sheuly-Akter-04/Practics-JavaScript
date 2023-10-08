const num = document.getElementById('num');
const gbtn = document.getElementById('gbtn');

const rng =() => {
    const randomn = Math.floor(Math.random()* 100 + 1);
    num.textContent = randomn;
};
gbtn.addEventListener('click', rng);
rng();
