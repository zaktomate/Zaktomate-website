document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('menu-open');
            if (navLinks.classList.contains('menu-open')) {
                navLinks.style.maxHeight = navLinks.scrollHeight + "px";
            } else {
                navLinks.style.maxHeight = "0";
            }
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('menu-open')) {
                    navLinks.classList.remove('menu-open');
                    navLinks.style.maxHeight = "0";
                }
            });
        });
    }
});