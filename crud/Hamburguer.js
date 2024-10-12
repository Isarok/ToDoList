const menuLinks = document.querySelectorAll('.navigation a');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {

        const menu = document.querySelector('.navigation');


        menu.classList.remove('show');


        const menuBtn = document.querySelector('.menu-btn');


        menuBtn.classList.remove('open');
    });
}