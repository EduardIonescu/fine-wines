const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards 
                ${index / 7 + 0.5}s`;
            }
        });

        //Burger Animation
        document.querySelector('.nav-bar').classList.toggle('nav-bar-background-toggle');
        burger.classList.toggle('toggle');

    });


}

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    const nav = document.querySelector('.nav-bar');

    if (currentScrollPos != 0) {
        nav.classList.add('nav-bar-background');
    } else {
        nav.classList.remove('nav-bar-background');
    }

    if (prevScrollpos > currentScrollPos) {
        nav.style.top = '0';
    } else {
        nav.style.top = '-8vh';
    }
    prevScrollpos = currentScrollPos;
}



navSlide();