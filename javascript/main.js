document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5500/html/login.html';
    });

    signupButton.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5500/html/login.html';
    });
});



/* window.location.href = 'https://to-do-list-github-io-woad.vercel.app/html/login.html#'; */
