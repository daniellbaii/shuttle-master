document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    // Create hamburger button
    const menuButton = document.createElement('button');
    menuButton.className = 'nav-toggle';
    menuButton.innerHTML = '&#9776;'; // Unicode for ☰
    nav.insertBefore(menuButton, navLinks);

    // Create mobile nav container
    const mobileNav = document.createElement('ul');
    mobileNav.className = 'mobile-nav';
    
    // Copy nav links to mobile nav
    const navItems = navLinks.querySelectorAll('li');
    navItems.forEach(item => {
        const clonedItem = item.cloneNode(true);
        mobileNav.appendChild(clonedItem);
    });
    
    nav.appendChild(mobileNav);

    // Toggle visibility with animation
    menuButton.addEventListener('click', () => {
        const isVisible = mobileNav.classList.contains('show');
        
        if (isVisible) {
            // Hide menu
            mobileNav.classList.remove('show');
            menuButton.classList.remove('active');
            setTimeout(() => {
                mobileNav.style.display = 'none';
            }, 300);
        } else {
            // Show menu
            mobileNav.style.display = 'flex';
            setTimeout(() => {
                mobileNav.classList.add('show');
                menuButton.classList.add('active');
            }, 10);
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && mobileNav.classList.contains('show')) {
            mobileNav.classList.remove('show');
            menuButton.classList.remove('active');
            setTimeout(() => {
                mobileNav.style.display = 'none';
            }, 300);
        }
    });

    // Close menu when clicking on a link
    mobileNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileNav.classList.remove('show');
            menuButton.classList.remove('active');
            setTimeout(() => {
                mobileNav.style.display = 'none';
            }, 300);
        }
    });

    // Close menu when screen size returns to normal
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('show');
            menuButton.classList.remove('active');
            mobileNav.style.display = 'none';
        }
    });
});