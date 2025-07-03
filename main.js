document.addEventListener('DOMContentLoaded', () => {
    console.log('main.js loaded and executing!'); // Debugging line

    // --- Sticky Header Functionality ---
    const header = document.querySelector('.main-header');
    const heroSection = document.querySelector('.hero-section'); // Get the hero section

    const stickyHeader = () => {
        // Check if heroSection exists before trying to get its height
        if (heroSection) {
            // Make header sticky after scrolling past the hero section
            if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        } else {
            // Fallback for pages without a hero section (e.g., contact, about)
            // Make header sticky after a certain scroll threshold (e.g., 50px)
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    };

    window.addEventListener('scroll', stickyHeader);
    // Call once on load to set initial state
    stickyHeader();


    // --- Scroll-to-Top Button Functionality ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    const toggleScrollToTopButton = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });

    window.addEventListener('scroll', toggleScrollToTopButton);
    // Call once on load to set initial state
    toggleScrollToTopButton();


    // --- Mobile Menu Toggle Functionality ---
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked (for single-page navigation)
    document.querySelectorAll('.main-nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });

    // --- Dynamic Year for Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- AOS Initialization (Temporarily Commented Out for Debugging) ---
    // If you uncomment this, ensure that AOS.js library is properly loaded in your HTML
    // and that its version is compatible.
    /*
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });
    console.log('AOS.init() skipped for debugging.');
    */
    console.log('AOS.init() is commented out in main.js.');
});
