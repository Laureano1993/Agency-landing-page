"use strict";
const hamburger = document.querySelector('.nav__hamburger');
const menuNav = document.querySelector('.nav__links');
let menuSwitch = false;
hamburger.addEventListener('click', () => {
    (!menuSwitch) ? showMenu() : hideMenu();
});
const showMenu = () => {
    menuNav.style.top = '20%';
    menuNav.style.opacity = '1';
    menuSwitch = true;
};
const hideMenu = () => {
    menuNav.style.top = '-100%';
    menuNav.style.opacity = '0';
    menuSwitch = false;
};
