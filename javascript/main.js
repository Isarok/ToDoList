document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const pauseButton = document.getElementById('pauseButton');

    // Recupera el estado de las partículas del almacenamiento local, o establece el estado por defecto a true
    let particlesEnabled = localStorage.getItem('particlesEnabled') !== 'false';

    particlesJS.load('particles-js', './javascript/particles-config.json', function () {
        console.log('particles.js loaded - callback');
        console.log(pJSDom);

        // Establece el estado inicial de las partículas después de que se cargan
        if (pJSDom && pJSDom.length) {
            pJSDom[1].pJS.particles.move.enable = particlesEnabled;
            if (!particlesEnabled) {
                pauseButton.querySelector('i').className = "fa fa-play";
            }
        }
    });

    pauseButton.addEventListener('click', function () {
        particlesEnabled = !particlesEnabled;

        // Almacena el estado de las partículas en el almacenamiento local
        localStorage.setItem('particlesEnabled', particlesEnabled);

        const icon = pauseButton.querySelector('i');

        if (pJSDom && pJSDom.length) {
            pJSDom[1].pJS.particles.move.enable = particlesEnabled;
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh();
                icon.className = "fa fa-pause"; // Cambia la clase del icono a "fa fa-pause"
            } else {
                icon.className = "fa fa-play"; // Cambia la clase del icono a "fa fa-play"
            }
        }
    });

    loginButton.addEventListener('click', function () {
        window.location.href = './html/login.html';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = './html/login.html';
    });
});