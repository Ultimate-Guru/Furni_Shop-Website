// Initialize ScrollReveal
ScrollReveal().reveal('.nav__header', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.nav__links li', { delay: 200, origin: 'top', distance: '50px', interval: 100 });
ScrollReveal().reveal('.header__image', { delay: 200, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.header__content', { delay: 400, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.deals__card', { delay: 200, origin: 'bottom', distance: '50px', interval: 100 });
ScrollReveal().reveal('.about__header', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.about__image', { delay: 400, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.about__grid .about__card', { delay: 400, origin: 'right', distance: '50px', interval: 100 });
ScrollReveal().reveal('.product__card', { delay: 200, origin: 'bottom', distance: '50px', interval: 100 });
ScrollReveal().reveal('.client__content h2', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.client__content p', { delay: 400, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.client__card', { delay: 200, origin: 'bottom', distance: '50px', interval: 100 });
ScrollReveal().reveal('.footer__col', { delay: 200, origin: 'bottom', distance: '50px', interval: 100 });
ScrollReveal().reveal('.footer__bar', { delay: 200, origin: 'bottom', distance: '50px' });

// Select the menu button, navigation links, and menu button icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the navigation menu and update the menu button icon on click
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close the navigation menu and reset the menu button icon when a link is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
});

// Select the search bar and search input
const navSearch = document.getElementById("nav-search");
const searchInput = navSearch.querySelector("input");

// Toggle the search bar visibility on click
navSearch.addEventListener("click", () => {
    navSearch.classList.toggle("open");
});

// Prevent the click event from propagating to the parent when clicking inside the search input
searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
        }
        localStorage.setItem('theme', theme);
    });
});
