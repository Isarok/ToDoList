// En tu archivo main.js
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const pauseButton = document.getElementById('pauseButton');
    let particlesEnabled = true; // Controlar si las partículas están habilitadas

    // Cargar partículas
    particlesJS.load('particles-js', '../javascript/particles-config.json', function () {
        console.log('particles.js loaded - callback');
        console.log(pJSDom); // Verificar si se carga correctamente
    });

    // Manejador de clic para el botón de pausa
    pauseButton.addEventListener('click', function () {
        particlesEnabled = !particlesEnabled; // Alternar estado de las partículas
        console.log('Particles enabled:', particlesEnabled); // Para ver el estado en la consola

        if (pJSDom && pJSDom.length) {
            // Activar o desactivar partículas
            pJSDom[1].pJS.particles.move.enable = particlesEnabled; // Activar/desactivar el movimiento
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh(); // Refrescar partículas al reanudar
                console.log('Partículas reanudadas'); // Mensaje en consola
            } else {
                console.log('Partículas pausadas'); // Mensaje en consola
            }
        }
    });

    // Navegación de botones
    loginButton.addEventListener('click', function () {
        window.location.href = './html/login.html';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = './html/login.html';
    });
});








/* window.location.href = 'https://to-do-list-github-io-woad.vercel.app/html/login.html#'; */
