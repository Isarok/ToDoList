const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

const deep = document.querySelector(".deep");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const ntb = document.querySelector(".ntb");
const closeicon = document.querySelector(".close-icon");
const pauseButton = document.getElementById('pauseButton'); // Botón de pausa

// Control del estado de las partículas
let particlesEnabled = true; // Inicialmente habilitado

// Cargar partículas
particlesJS.load('particles-js', './javascript/particles-config.json', function () {

    // Escuchar clics en el botón de pausa
    pauseButton.addEventListener('click', function () {
        particlesEnabled = !particlesEnabled; // Alternar el estado de las partículas

        if (pJSDom && pJSDom.length) {
            // Activar o desactivar el movimiento de las partículas
            pJSDom[1].pJS.particles.move.enable = particlesEnabled;
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh(); // Refrescar las partículas al reanudar

            } else {

            }
        }
    });
});

// Manejo de enlaces y botones
registerlink.addEventListener("click", () => {
    deep.classList.add('active');
});

loginlink.addEventListener("click", () => {
    deep.classList.remove('active');
});

ntb.addEventListener("click", () => {
    deep.classList.add('active-ntb');
});

closeicon.addEventListener("click", () => {
    deep.classList.remove("active-ntb");
});



