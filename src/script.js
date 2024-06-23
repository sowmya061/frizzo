document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const burgerIcon = document.querySelector('.nav_burger');
    const closeIcon = document.querySelector('.nav_close');
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        burgerIcon.classList.toggle('hide');
        closeIcon.classList.toggle('show');
    });
});
