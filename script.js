document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    // Create hamburger button
    const menuButton = document.createElement('button');
    menuButton.className = 'nav-toggle';
    menuButton.innerHTML = '&#9776;'; // Unicode for ☰
    nav.insertBefore(menuButton, navLinks);

    // Create mobile nav container
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = navLinks.innerHTML;
    nav.appendChild(mobileNav);

    // Toggle visibility
    menuButton.addEventListener('click', () => {
        const isVisible = mobileNav.style.display === 'flex';
        mobileNav.style.display = isVisible ? 'none' : 'flex';
    });
});