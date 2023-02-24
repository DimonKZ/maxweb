'use strict'

const burgerMenu = function() {
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    
    if(headerBurger) {
        headerBurger.addEventListener('click', function() {
            headerBurger.classList.toggle('cross');
            headerMenu.classList.toggle('active');
        })
    }
};

burgerMenu();
