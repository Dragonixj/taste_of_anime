const logrepBox = document.querySelector('.logrep-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logrepBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logrepBox.classList.remove('active');
});