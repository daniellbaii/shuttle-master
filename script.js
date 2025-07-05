// template-loader.js
async function loadTemplate(elementId, templatePath) {
    try {
        const response = await fetch(templatePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading template ${templatePath}:`, error);
    }
}

// Load templates when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load header and footer
    await loadTemplate('header-temp', 'templates/header.html');
    await loadTemplate('footer-temp', 'templates/footer.html');
    
    // Initialize the mobile menu after header is loaded
    initializeMobileMenu();
});

// Your existing mobile menu code
function initializeMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !navLinks) return; // Exit if elements don't exist

    // Create hamburger button
    const menuButton = document.createElement('button');
    menuButton.className = 'nav-toggle';
    menuButton.innerHTML = '&#9776;';
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
            mobileNav.classList.remove('show');
            menuButton.classList.remove('active');
            setTimeout(() => {
                mobileNav.style.display = 'none';
            }, 300);
        } else {
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
}