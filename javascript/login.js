const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

const deep = document.querySelector(".deep");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const ntb = document.querySelector(".login");
const closeicon = document.querySelector(".close-icon");
const pauseButton = document.getElementById('pauseButton');


let particlesEnabled = true;


particlesJS.load('particles-js', '../javascript/particles-config.json', function () {


    pauseButton.addEventListener('click', function () {
        particlesEnabled = !particlesEnabled;

        localStorage.setItem('particlesEnabled', particlesEnabled);

        const icon = pauseButton.querySelector('i');

        if (pJSDom && pJSDom.length) {

            pJSDom[1].pJS.particles.move.enable = particlesEnabled;
            if (particlesEnabled) {
                pJSDom[1].pJS.fn.particlesRefresh();
                icon.className = "fa-solid fa-pause";

            } else {
                icon.className = "fa-solid fa-play";
            }
        }
    });
});


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



