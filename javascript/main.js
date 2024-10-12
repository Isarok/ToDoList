document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const pauseButton = document.getElementById('pauseButton');
    let particlesEnabled = true;


    particlesJS.load('particles-js', './javascript/particles-config.json', function () {
        console.log('particles.js loaded - callback');
        console.log(pJSDom);
    });


    pauseButton.addEventListener('click', function () {
        particlesEnabled = !particlesEnabled;


        if (pJSDom && pJSDom.length) {

            pJSDom[1].pJS.particles.move.enable = particlesEnabled;
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh();

            } else {

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









