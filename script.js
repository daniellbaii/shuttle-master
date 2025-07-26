// =====================================
// TEMPLATE LOADER MODULE
// =====================================
const TemplateLoader = {
    async loadTemplate(elementId, templatePath) {
        try {
            const response = await fetch(templatePath);
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading template ${templatePath}:`, error);
        }
    },

    async loadAll() {
        await Promise.all([
            this.loadTemplate('header-temp', 'templates/header.html'),
            this.loadTemplate('footer-temp', 'templates/footer.html')
        ]);
    }
};

// =====================================
// MOBILE NAVIGATION MODULE
// =====================================
const MobileNav = {
    nav: null,
    navLinks: null,
    menuButton: null,
    mobileNav: null,

    init() {
        this.nav = document.querySelector('nav');
        this.navLinks = document.querySelector('.nav-links');
        
        if (!this.nav || !this.navLinks) return;

        this.createMenuButton();
        this.createMobileNav();
        this.attachEventListeners();
    },

    createMenuButton() {
        this.menuButton = document.createElement('button');
        this.menuButton.className = 'nav-toggle';
        this.menuButton.innerHTML = '&#9776;';
        this.nav.insertBefore(this.menuButton, this.navLinks);
    },

    createMobileNav() {
        this.mobileNav = document.createElement('ul');
        this.mobileNav.className = 'mobile-nav';
        
        const navItems = this.navLinks.querySelectorAll('li');
        navItems.forEach(item => {
            const clonedItem = item.cloneNode(true);
            this.mobileNav.appendChild(clonedItem);
        });
        
        this.nav.appendChild(this.mobileNav);
    },

    toggleMenu() {
        const isVisible = this.mobileNav.classList.contains('show');
        
        if (isVisible) {
            this.hideMenu();
        } else {
            this.showMenu();
        }
    },

    showMenu() {
        this.mobileNav.style.display = 'flex';
        setTimeout(() => {
            this.mobileNav.classList.add('show');
            this.menuButton.classList.add('active');
        }, 10);
    },

    hideMenu() {
        this.mobileNav.classList.remove('show');
        this.menuButton.classList.remove('active');
        setTimeout(() => {
            this.mobileNav.style.display = 'none';
        }, 300);
    },

    attachEventListeners() {
        // Toggle menu on button click
        this.menuButton.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && this.mobileNav.classList.contains('show')) {
                this.hideMenu();
            }
        });

        // Close menu when clicking on a link
        this.mobileNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                this.hideMenu();
            }
        });

        // Close menu when screen size returns to normal
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.hideMenu();
            }
        });
    }
};

// =====================================
// APPLICATION INITIALIZATION
// =====================================
const App = {
    async init() {
        try {
            await TemplateLoader.loadAll();
            MobileNav.init();
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());