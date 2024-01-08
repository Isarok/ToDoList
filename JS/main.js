document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5501/html/login.html#';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5501/html/login.html#';
    });
});