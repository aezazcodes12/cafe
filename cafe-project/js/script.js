/**
 * ==============================================================================
 * BREW & BEAN CAFÉ - MASTER JAVASCRIPT
 * Pure Vanilla JavaScript (ES6+) - No Frameworks or External Libraries
 *
 * Features:
 * 1. Global State & LocalStorage Shopping Cart System
 * 2. Cart Drawer & Dynamic Badge UI Controllers
 * 3. Checkout Modal & Order Confirmation Generator
 * 4. Menu Category Filtering & Instant Search System
 * 5. Homepage Media Carousel (Images & Ambient Video)
 * 6. Testimonials Carousel
 * 7. Mobile Navigation Hamburger Controller
 * 8. Contact Form Client-Side Validation
 * 9. Toast Notification System
 * 10. FAQ Accordion & Back-to-Top Button
 * 11. Intersection Observer Scroll Reveal Animations
 * ==============================================================================
 */

// ==============================================================================
// 1. MENU PRODUCTS DATABASE
// ==============================================================================
const MENU_PRODUCTS = [
  // COFFEE
  {
    id: 'coffee-espresso',
    name: 'Artisan Espresso',
    category: 'coffee',
    price: 3.50,
    calories: '10 kcal',
    badge: 'Classic',
    image: 'images/coffee-espresso.jpg',
    description: 'Rich, full-bodied double shot with notes of dark cocoa and a golden, velvety crema.'
  },
  {
    id: 'coffee-cappuccino',
    name: 'Velvet Cappuccino',
    category: 'coffee',
    price: 4.75,
    calories: '130 kcal',
    badge: 'Bestseller',
    image: 'images/coffee-cappuccino.jpg',
    description: 'Equal parts single-origin espresso, steamed whole milk, and micro-foam dusted with organic cinnamon.'
  },
  {
    id: 'coffee-latte',
    name: 'Vanilla Bean Latte',
    category: 'coffee',
    price: 5.25,
    calories: '180 kcal',
    badge: 'House Special',
    image: 'images/coffee-latte.jpg',
    description: 'Smooth espresso folded with silky steamed oat milk and house-made Madagascar vanilla syrup.'
  },
  {
    id: 'coffee-coldbrew',
    name: 'Signature Nitro Cold Brew',
    category: 'coffee',
    price: 5.00,
    calories: '5 kcal',
    badge: 'Popular',
    image: 'images/coffee-coldbrew.jpg',
    description: 'Steeped for 20 hours in cold filtered water, infused with food-grade nitrogen for a creamy stout head.'
  },
  {
    id: 'coffee-macchiato',
    name: 'Caramel Cloud Macchiato',
    category: 'coffee',
    price: 5.50,
    calories: '210 kcal',
    badge: 'Favorites',
    image: 'images/coffee-macchiato.jpg',
    description: 'Espresso poured gently over whipped milk foam and drizzled with slow-cooked salted caramel.'
  },
  {
    id: 'coffee-mocha',
    name: 'Belgian Dark Mocha',
    category: 'coffee',
    price: 5.65,
    calories: '290 kcal',
    badge: 'Indulgent',
    image: 'images/coffee-mocha.jpg',
    description: 'Double espresso blended with melted 72% Belgian dark chocolate and topped with fresh vanilla cream.'
  },

  // TEA
  {
    id: 'tea-matcha',
    name: 'Ceremonial Matcha Latte',
    category: 'tea',
    price: 5.50,
    calories: '140 kcal',
    badge: 'Organic',
    image: 'images/tea-matcha.jpg',
    description: 'First-harvest Uji matcha hand-whisked to order with almond milk and a drop of wildflower honey.'
  },
  {
    id: 'tea-chai',
    name: 'Spiced Cardamom Chai',
    category: 'tea',
    price: 4.95,
    calories: '160 kcal',
    badge: 'House Blend',
    image: 'images/tea-chai.jpg',
    description: 'Assam black tea slow-simmered with crushed ginger, whole green cardamom, star anise, and steamed milk.'
  },
  {
    id: 'tea-earlgrey',
    name: 'Artisan Earl Grey Reserve',
    category: 'tea',
    price: 4.25,
    calories: '0 kcal',
    badge: 'Single Origin',
    image: 'images/tea-earlgrey.jpg',
    description: 'High-mountain Ceylon tea naturally scented with pure Italian bergamot oil and blue cornflowers.'
  },
  {
    id: 'tea-chamomile',
    name: 'Golden Chamomile Citrus',
    category: 'tea',
    price: 4.25,
    calories: '0 kcal',
    badge: 'Caffeine-Free',
    image: 'images/tea-chamomile.jpg',
    description: 'Whole Egyptian chamomile flowers infused with dried orange peel, lemongrass, and lavender blossoms.'
  },

  // COLD DRINKS
  {
    id: 'drink-cooler',
    name: 'Wild Berry Hibiscus Spritz',
    category: 'drinks',
    price: 5.25,
    calories: '90 kcal',
    badge: 'Refreshing',
    image: 'images/drink-cooler.jpg',
    description: 'Sparkling ruby hibiscus brew steeped with fresh muddled blackberries, fresh mint, and sparkling soda.'
  },
  {
    id: 'drink-tonic',
    name: 'Cold Brew Citrus Tonic',
    category: 'drinks',
    price: 5.50,
    calories: '60 kcal',
    badge: 'Signature',
    image: 'images/drink-tonic.jpg',
    description: 'Concentrated Ethiopian cold brew poured over artisanal botanical tonic water and charred rosemary.'
  },
  {
    id: 'drink-icedtea',
    name: 'Mango Passionfruit Iced Tea',
    category: 'drinks',
    price: 4.85,
    calories: '110 kcal',
    badge: 'Cooler',
    image: 'images/drink-icedtea.jpg',
    description: 'Crisp brewed jasmine green tea shaken vigorously with ripe Alfonso mango purée and passionfruit seed.'
  },

  // FOOD & BREAKFAST
  {
    id: 'food-avocado-toast',
    name: 'Truffle Avocado Sourdough',
    category: 'food',
    price: 11.50,
    calories: '380 kcal',
    badge: 'Chef Choice',
    image: 'images/food-avocado-toast.jpg',
    description: 'Crushed Hass avocado on toasted artisanal sourdough with pickled shallots, pumpkin seeds, and white truffle oil.'
  },
  {
    id: 'food-eggs-benedict',
    name: 'Classic Eggs Benedict',
    category: 'food',
    price: 13.75,
    calories: '520 kcal',
    badge: 'Brunch Special',
    image: 'images/food-eggs-benedict.jpg',
    description: 'Two organic poached eggs atop toasted brioche and smoked prosciutto, finished with house-whipped Hollandaise.'
  },
  {
    id: 'food-croissant',
    name: 'Golden Butter Almond Croissant',
    category: 'food',
    price: 4.85,
    calories: '340 kcal',
    badge: 'Baked Today',
    image: 'images/food-croissant.jpg',
    description: 'Flaky 72-layer Normandy butter pastry stuffed with rich almond frangipane and toasted sliced almonds.'
  },
  {
    id: 'food-panini',
    name: 'Smoked Turkey & Brie Panini',
    category: 'food',
    price: 12.00,
    calories: '490 kcal',
    badge: 'Warm & Crispy',
    image: 'images/food-panini.jpg',
    description: 'Hand-sliced smoked turkey breast, melted French brie, fig chutney, and baby arugula pressed on ciabatta.'
  },
  {
    id: 'food-fries',
    name: 'Truffle Parmesan Herb Fries',
    category: 'food',
    price: 6.95,
    calories: '360 kcal',
    badge: 'Snack',
    image: 'images/food-fries.jpg',
    description: 'Crisp hand-cut Idaho potatoes tossed in aromatic truffle oil, aged Parmigiano Reggiano, and fresh rosemary.'
  },
  {
    id: 'food-acai',
    name: 'Amazonian Acai Super Bowl',
    category: 'food',
    price: 10.50,
    calories: '310 kcal',
    badge: 'Vegan',
    image: 'images/food-acai.jpg',
    description: 'Organic acai puree topped with house granola, fresh strawberries, wild blueberries, banana, and chia seeds.'
  },

  // DESSERTS
  {
    id: 'dessert-cheesecake',
    name: 'Basque Burnt Cheesecake',
    category: 'desserts',
    price: 7.50,
    calories: '420 kcal',
    badge: 'Bestseller',
    image: 'images/dessert-cheesecake.jpg',
    description: 'Caramelized rustic crust with an ultra-creamy, molten center baked fresh daily in our café oven.'
  },
  {
    id: 'dessert-tiramisu',
    name: 'Artisan Espresso Tiramisu',
    category: 'desserts',
    price: 7.25,
    calories: '390 kcal',
    badge: 'House Favorite',
    image: 'images/dessert-tiramisu.jpg',
    description: 'Savoiardi ladyfingers soaked in dark roast espresso and Marsala, layered with sweet mascarpone and Valrhona cocoa.'
  },
  {
    id: 'dessert-lava-cake',
    name: 'Warm Valrhona Molten Cake',
    category: 'desserts',
    price: 8.00,
    calories: '480 kcal',
    badge: 'Warm Dessert',
    image: 'images/dessert-lava-cake.jpg',
    description: 'Dark chocolate lava cake with an oozing liquid ganache core, paired with hand-churned vanilla gelato.'
  },
  {
    id: 'dessert-tart',
    name: 'Raspberry Pistachio Tart',
    category: 'desserts',
    price: 6.95,
    calories: '330 kcal',
    badge: 'Seasonal',
    image: 'images/dessert-tart.jpg',
    description: 'Crisp shortbread crust layered with roasted Sicilian pistachio cream and crowned with fresh tart raspberries.'
  }
];

// ==============================================================================
// 2. SHOPPING CART ENGINE (LocalStorage State Management)
// ==============================================================================
const CartEngine = {
  storageKey: 'brew_bean_cart_v1',
  cart: [],

  init() {
    this.loadCart();
    this.renderUI();
  },

  loadCart() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      this.cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage not available, falling back to in-memory state', e);
      this.cart = [];
    }
  },

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save to LocalStorage', e);
    }
    this.renderUI();
  },

  addItem(productId, qty = 1) {
    const product = MENU_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty
      });
    }

    this.saveCart();
    UIController.bumpBadge();
    Toast.show(`Added "${product.name}" to cart!`, 'success');
  },

  updateQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    this.cart[itemIndex].quantity += delta;
    if (this.cart[itemIndex].quantity <= 0) {
      this.cart.splice(itemIndex, 1);
      Toast.show('Item removed from cart', 'info');
    }
    this.saveCart();
  },

  removeItem(productId) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      const removed = this.cart.splice(itemIndex, 1)[0];
      this.saveCart();
      Toast.show(`Removed "${removed.name}" from cart`, 'info');
    }
  },

  clearCart(suppressToast = false) {
    this.cart = [];
    this.saveCart();
    if (!suppressToast) {
      Toast.show('Shopping cart has been cleared', 'info');
    }
  },

  getItemCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  },

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getTax() {
    return this.getSubtotal() * 0.08; // 8% sales tax
  },

  getTotal() {
    return this.getSubtotal() + this.getTax();
  },

  renderUI() {
    const badgeElements = document.querySelectorAll('.cart-count-badge');
    const count = this.getItemCount();
    badgeElements.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    const itemsContainer = document.getElementById('cartDrawerItems');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartDrawerFooter');
    const subtotalEl = document.getElementById('cartSubtotal');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';

    itemsContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="CartEngine.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">&minus;</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="CartEngine.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">&plus;</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="CartEngine.removeItem('${item.id}')" aria-label="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `).join('');

    const subtotal = this.getSubtotal();
    const tax = this.getTax();
    const total = this.getTotal();

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }
};

// ==============================================================================
// 3. UI CONTROLLER (Cart Drawer, Modals, Hamburger, Header)
// ==============================================================================
const UIController = {
  init() {
    this.setupCartDrawer();
    this.setupMobileMenu();
    this.setupStickyHeader();
    this.setupBackToTop();
    this.setupCheckoutModal();
    this.setupFaqAccordion();
    this.setupActiveNavLink();
  },

  bumpBadge() {
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    });
  },

  setupCartDrawer() {
    const openBtns = document.querySelectorAll('.js-open-cart');
    const closeBtn = document.getElementById('closeCartDrawer');
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('drawerBackdrop');

    const openDrawer = (e) => {
      if (e) e.preventDefault();
      if (drawer) drawer.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      if (drawer) drawer.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        this.closeCheckoutModal();
      }
    });

    window.openCartDrawer = openDrawer;
    window.closeCartDrawer = closeDrawer;
  },

  setupMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', isActive);
      hamburger.setAttribute('aria-expanded', isActive);
    });

    // Close on navigation link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  },

  setupStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  },

  setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  setupCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');
    const closeBtn = document.getElementById('closeCheckoutModal');
    const checkoutBackdrop = document.getElementById('checkoutModalBackdrop');
    const checkoutForm = document.getElementById('checkoutForm');

    if (!checkoutModal) return;

    const openCheckout = () => {
      if (CartEngine.cart.length === 0) {
        Toast.show('Your cart is empty! Please add items first.', 'error');
        return;
      }
      window.closeCartDrawer();
      this.populateCheckoutSummary();
      checkoutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeCheckout = () => {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
      // Reset view to form if it was in confirmation view
      const formView = document.getElementById('checkoutFormView');
      const successView = document.getElementById('checkoutSuccessView');
      if (formView && successView) {
        formView.style.display = 'block';
        successView.style.display = 'none';
      }
    };

    this.closeCheckoutModal = closeCheckout;

    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
    if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckout);

    // Order Type change handler (toggle table number vs delivery address)
    const orderTypeSelect = document.getElementById('checkoutOrderType');
    const locationGroup = document.getElementById('checkoutLocationGroup');
    const locationLabel = document.getElementById('checkoutLocationLabel');
    const locationInput = document.getElementById('checkoutLocation');

    if (orderTypeSelect && locationGroup) {
      orderTypeSelect.addEventListener('change', () => {
        const type = orderTypeSelect.value;
        if (type === 'dine-in') {
          locationGroup.style.display = 'flex';
          locationLabel.innerHTML = 'Table Number <span class="required">*</span>';
          locationInput.placeholder = 'e.g., Table 4';
          locationInput.required = true;
        } else if (type === 'delivery') {
          locationGroup.style.display = 'flex';
          locationLabel.innerHTML = 'Delivery Address <span class="required">*</span>';
          locationInput.placeholder = 'e.g., 742 Evergreen Terrace, Apt 4B';
          locationInput.required = true;
        } else {
          // Takeout
          locationGroup.style.display = 'none';
          locationInput.required = false;
        }
      });
    }

    // Checkout form submission
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validateCheckoutForm()) {
          this.processOrder();
        }
      });
    }
  },

  populateCheckoutSummary() {
    const summaryContainer = document.getElementById('checkoutOrderSummary');
    const totalEl = document.getElementById('checkoutModalTotal');
    if (!summaryContainer) return;

    summaryContainer.innerHTML = CartEngine.cart.map(item => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9rem;">
        <span>${item.quantity}x ${item.name}</span>
        <span style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');

    if (totalEl) totalEl.textContent = `$${CartEngine.getTotal().toFixed(2)}`;
  },

  validateCheckoutForm() {
    let isValid = true;
    const name = document.getElementById('checkoutName');
    const phone = document.getElementById('checkoutPhone');
    const email = document.getElementById('checkoutEmail');
    const orderType = document.getElementById('checkoutOrderType');
    const locationInput = document.getElementById('checkoutLocation');

    const checkField = (input, condition) => {
      if (!input) return;
      if (!condition) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    };

    checkField(name, name.value.trim().length >= 2);
    checkField(phone, phone.value.trim().length >= 7);
    checkField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));

    if (orderType.value !== 'takeout' && locationInput) {
      checkField(locationInput, locationInput.value.trim().length > 0);
    }

    return isValid;
  },

  processOrder() {
    const name = document.getElementById('checkoutName').value.trim();
    const orderType = document.getElementById('checkoutOrderType').value;
    const randomId = 'BB-' + Math.floor(10000 + Math.random() * 90000);

    const formView = document.getElementById('checkoutFormView');
    const successView = document.getElementById('checkoutSuccessView');
    const orderIdEl = document.getElementById('confirmedOrderId');
    const orderMessageEl = document.getElementById('confirmedOrderMessage');

    if (orderIdEl) orderIdEl.textContent = randomId;
    if (orderMessageEl) {
      let prepTime = orderType === 'delivery' ? '30–40 minutes' : '12–18 minutes';
      orderMessageEl.textContent = `Thank you, ${name}! Your order has been dispatched to our baristas. Estimated preparation time: ${prepTime}.`;
    }

    // Reset cart
    CartEngine.clearCart(true);

    if (formView && successView) {
      formView.style.display = 'none';
      successView.style.display = 'block';
    }

    Toast.show(`Order ${randomId} confirmed!`, 'success');
  },

  setupFaqAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const body = item.querySelector('.accordion-body');
        const isActive = item.classList.contains('active');

        // Close others
        document.querySelectorAll('.accordion-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBody = other.querySelector('.accordion-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  },

  setupActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};

// ==============================================================================
// 4. HOMEPAGE MEDIA CAROUSEL (IMAGES & AMBIENT VIDEO)
// ==============================================================================
const HeroCarousel = {
  slides: [],
  dots: [],
  currentIndex: 0,
  intervalId: null,
  autoplayDuration: 6000,
  isPlaying: true,

  init() {
    const track = document.querySelector('.hero-carousel .carousel-track');
    if (!track) return;

    this.slides = Array.from(track.querySelectorAll('.carousel-slide'));
    const dotsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const videoToggle = document.getElementById('ambientVideoToggle');

    if (this.slides.length === 0) return;

    // Create indicator dots dynamically if empty
    if (dotsContainer && dotsContainer.children.length === 0) {
      dotsContainer.innerHTML = this.slides.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" aria-label="Go to slide ${i + 1}" data-index="${i}"></button>
      `).join('');
    }

    this.dots = Array.from(document.querySelectorAll('.carousel-dot'));
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.resetAutoplay();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prevSlide();
        this.resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSlide();
        this.resetAutoplay();
      });
    }

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', () => this.stopAutoplay());
      heroSection.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Video play/pause toggle
    if (videoToggle) {
      videoToggle.addEventListener('click', () => {
        const video = document.getElementById('heroAmbientVideo');
        if (!video) return;
        if (video.paused) {
          video.play();
          videoToggle.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            <span>Pause Video</span>
          `;
        } else {
          video.pause();
          videoToggle.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Play Video</span>
          `;
        }
      });
    }

    this.startAutoplay();
  },

  goToSlide(index) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    this.currentIndex = index;
  },

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  },

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  },

  startAutoplay() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this.nextSlide(), this.autoplayDuration);
  },

  stopAutoplay() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
};

// ==============================================================================
// 5. TESTIMONIALS CAROUSEL
// ==============================================================================
const TestimonialsCarousel = {
  slides: [],
  currentIndex: 0,
  intervalId: null,

  init() {
    const track = document.querySelector('.testimonials-track');
    if (!track) return;

    this.slides = Array.from(track.querySelectorAll('.testimonial-slide'));
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (this.slides.length <= 1) return;

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Auto rotate every 7 seconds
    this.intervalId = setInterval(() => this.next(), 7000);
  },

  goTo(index) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    this.currentIndex = index;
  },

  next() {
    this.goTo(this.currentIndex + 1);
  },

  prev() {
    this.goTo(this.currentIndex - 1);
  }
};

// ==============================================================================
// 6. MENU CATEGORY FILTERING & SEARCH
// ==============================================================================
const MenuController = {
  activeCategory: 'all',
  searchQuery: '',

  init() {
    const container = document.getElementById('menuGridContainer');
    if (!container) return;

    this.setupFilters();
    this.setupSearch();
    this.renderProducts();
  },

  setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.getAttribute('data-category');
        this.renderProducts();
      });
    });
  },

  setupSearch() {
    const searchInput = document.getElementById('menuSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderProducts();
    });
  },

  renderProducts() {
    const container = document.getElementById('menuGridContainer');
    if (!container) return;

    let filtered = MENU_PRODUCTS.filter(p => {
      const matchesCategory = this.activeCategory === 'all' || p.category === this.activeCategory;
      const matchesSearch = !this.searchQuery ||
        p.name.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery) ||
        p.category.toLowerCase().includes(this.searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No matching café delicacies found</h3>
          <p style="color: var(--clr-text-muted);">Try searching for a different keyword or reset the category filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <article class="product-card reveal-on-scroll">
        <div class="product-media">
          <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy" />
          <div class="product-badge-group">
            <span class="badge badge-gold">${item.badge}</span>
          </div>
          <div class="product-price-tag">$${item.price.toFixed(2)}</div>
        </div>
        <div class="product-body">
          <span class="product-category">${item.category}</span>
          <h3 class="product-title">${item.name}</h3>
          <p class="product-desc">${item.description}</p>
          <div class="product-footer">
            <span class="product-calories">${item.calories}</span>
            <button class="btn-add-cart" onclick="CartEngine.addItem('${item.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Trigger reveal observer for newly rendered items
    ScrollReveal.observe();
  }
};

// ==============================================================================
// 7. CONTACT & NEWSLETTER FORM CONTROLLER
// ==============================================================================
const FormController = {
  init() {
    this.setupContactForm();
    this.setupNewsletterForms();
  },

  setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
      name: document.getElementById('contactName'),
      email: document.getElementById('contactEmail'),
      phone: document.getElementById('contactPhone'),
      subject: document.getElementById('contactSubject'),
      message: document.getElementById('contactMessage')
    };

    // Remove error class on input
    Object.values(fields).forEach(input => {
      if (input) {
        input.addEventListener('input', () => input.classList.remove('error'));
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!fields.name.value.trim() || fields.name.value.trim().length < 2) {
        fields.name.classList.add('error');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fields.email.value.trim() || !emailRegex.test(fields.email.value.trim())) {
        fields.email.classList.add('error');
        isValid = false;
      }

      if (!fields.message.value.trim() || fields.message.value.trim().length < 5) {
        fields.message.classList.add('error');
        isValid = false;
      }

      if (isValid) {
        form.reset();
        Toast.show('Thank you! Your message has been received. We will get back to you shortly.', 'success');
      } else {
        Toast.show('Please complete all required fields correctly.', 'error');
      }
    });
  },

  setupNewsletterForms() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.newsletter-input');
        if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          input.value = '';
          Toast.show('Welcome to the Brew & Bean Coffee Club! Check your inbox for your 10% welcome perk.', 'success');
        } else {
          Toast.show('Please enter a valid email address.', 'error');
        }
      });
    });
  }
};

// ==============================================================================
// 8. TOAST NOTIFICATION SYSTEM
// ==============================================================================
const Toast = {
  container: null,

  ensureContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 3500) {
    this.ensureContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E74C3C" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    } else {
      iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        ${iconSvg}
        <span>${message}</span>
      </div>
    `;

    this.container.appendChild(toast);

    // Trigger animation in next frame
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

// ==============================================================================
// 9. SCROLL REVEAL (INTERSECTION OBSERVER)
// ==============================================================================
const ScrollReveal = {
  observer: null,

  init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    this.observe();
  },

  observe() {
    if (!this.observer) return;
    document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
      this.observer.observe(el);
    });
  }
};

// ==============================================================================
// 10. INITIALIZATION
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  CartEngine.init();
  UIController.init();
  HeroCarousel.init();
  TestimonialsCarousel.init();
  MenuController.init();
  FormController.init();
  ScrollReveal.init();
});
