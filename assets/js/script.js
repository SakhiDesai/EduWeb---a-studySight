'use strict';



/**
 * add Event on Element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
        } else {
            elem.addEventListener(type, callback);
    }
}



/**
 * Navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overly = document.querySelector("[data-overly]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overly.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    overly.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 *  Header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");


const activeElem = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
     } else{
                header.classList.remove("active");
                backTopBtn.classList.remove("active");
        }
    }
        
addEventOnElem(window, "scroll", activeElem);

