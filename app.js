document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.getElementById('main-header');
    const openMenuBtn = document.getElementById('mobile-menu-button');
    const closeMenuBtn = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // --- Sticky Header ---
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled-header');
            } else {
                header.classList.remove('scrolled-header');
            }
        });
    }

    // --- Fullscreen Mobile Menu Logic ---
    const openMenu = () => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        body.classList.add('body-no-scroll');
    };

    const closeMenu = () => {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        body.classList.remove('body-no-scroll');
    };

    if (openMenuBtn && closeMenuBtn && mobileMenu) {
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);

        // Close menu when a link is clicked
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

