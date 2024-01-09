document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', function () {
        window.location.href = '/src/login.html';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = '/src/login.html';
    });
});