const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
console.log(itemsArray);

const deep = document.querySelector(".deep");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const ntb = document.querySelector(".ntb");
const closeicon = document.querySelector(".close-icon");
const pauseButton = document.getElementById('pauseButton'); // Botón de pausa

// Control del estado de las partículas
let particlesEnabled = true; // Inicialmente habilitado

// Cargar partículas
particlesJS.load('particles-js', '../javascript/particles-config.json', function () {
    console.log('particles.js loaded - callback');

    // Escuchar clics en el botón de pausa
    pauseButton.addEventListener('click', function () {
        console.log('Pausar botón clickeado');
        particlesEnabled = !particlesEnabled; // Alternar el estado de las partículas
        console.log('Particles enabled:', particlesEnabled); // Mostrar estado en consola

        if (pJSDom && pJSDom.length) {
            // Activar o desactivar el movimiento de las partículas
            pJSDom[1].pJS.particles.move.enable = particlesEnabled; // Cambia a 0 si es el primer objeto
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh(); // Refrescar las partículas al reanudar
                console.log('Partículas reanudadas'); // Mensaje en consola
            } else {
                console.log('Partículas pausadas'); // Mensaje en consola
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



