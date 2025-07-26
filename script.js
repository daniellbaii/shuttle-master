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
// SHOPPING CART MODULE
// =====================================
const ShoppingCart = {
    cart: [],
    products: {
        'beginner-course': {
            id: 'beginner-course',
            title: 'Complete Beginner\'s Badminton Course',
            category: 'Training Program',
            price: 99,
            originalPrice: 149
        },
        'smash-program': {
            id: 'smash-program',
            title: 'Power Smash Development Program',
            category: 'Training Program',
            price: 129
        },
        'tournament-masterclass': {
            id: 'tournament-masterclass',
            title: 'Tournament Champion Training Program',
            category: 'Training Program',
            price: 199,
            originalPrice: 299
        }
    },

    init() {
        this.loadCart();
        this.attachEventListeners();
        this.updateCartDisplay();
    },

    attachEventListeners() {
        // Add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = e.target.dataset.productId;
                this.addToCart(productId);
            }
        });

        // Cart button in header
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.showCart());
        }

        // Close cart modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-modal-close')) {
                this.hideCart();
            }
        });

        // Close cart when clicking on backdrop
        const cartModal = document.getElementById('cart-modal');
        if (cartModal) {
            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    this.hideCart();
                }
            });
        }

        // Remove item from cart
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-item-remove')) {
                const productId = e.target.dataset.productId;
                this.removeFromCart(productId);
            }
        });

        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }

        // Close cart with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideCart();
            }
        });
    },

    addToCart(productId) {
        const product = this.products[productId];
        if (!product) return;

        // Check if product already in cart
        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            this.showNotification('Item already in cart!', 'info');
            return;
        }

        this.cart.push({ ...product });
        this.saveCart();
        this.updateCartDisplay();
        this.showNotification('Added to cart!', 'success');
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
        this.showNotification('Removed from cart', 'info');
    },

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = this.cart.length;
        }

        const cartTotal = document.getElementById('cart-total');
        if (cartTotal) {
            const total = this.cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = total;
        }
    },

    showCart() {
        const cartModal = document.getElementById('cart-modal');
        if (cartModal) {
            cartModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            this.renderCartItems();
        }
    },

    hideCart() {
        const cartModal = document.getElementById('cart-modal');
        if (cartModal) {
            cartModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    },

    renderCartItems() {
        const cartEmpty = document.getElementById('cart-empty');
        const cartItems = document.getElementById('cart-items');
        const cartModalFooter = document.querySelector('.cart-modal-footer');

        if (this.cart.length === 0) {
            cartEmpty.style.display = 'block';
            cartItems.style.display = 'none';
            cartModalFooter.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartItems.style.display = 'block';
            cartModalFooter.style.display = 'block';

            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-category">${item.category}</div>
                    </div>
                    <div class="cart-item-price">$${item.price}</div>
                    <button class="cart-item-remove" data-product-id="${item.id}" title="Remove item">×</button>
                </div>
            `).join('');
        }
    },

    checkout() {
        if (this.cart.length === 0) return;

        // Simulate checkout process
        this.showNotification('Redirecting to checkout...', 'info');
        
        setTimeout(() => {
            alert(`Checkout complete! Total: $${this.cart.reduce((sum, item) => sum + item.price, 0)}\n\nThis is a demo - no actual payment was processed.`);
            this.cart = [];
            this.saveCart();
            this.updateCartDisplay();
            this.renderCartItems();
            this.hideCart();
        }, 1500);
    },

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: '9999',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2500);
    },

    saveCart() {
        localStorage.setItem('shuttlemaster_cart', JSON.stringify(this.cart));
    },

    loadCart() {
        const savedCart = localStorage.getItem('shuttlemaster_cart');
        if (savedCart) {
            try {
                this.cart = JSON.parse(savedCart);
            } catch (e) {
                this.cart = [];
            }
        }
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
            ShoppingCart.init();
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());