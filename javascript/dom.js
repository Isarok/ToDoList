window.onload = function () {
    displayDate()
    displayItems()
    
}

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function () {
        navigation.classList.toggle('show');
        menuBtn.classList.toggle('open');
    });
});