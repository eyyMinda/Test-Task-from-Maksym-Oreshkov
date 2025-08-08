// ===== GLOBAL CONFIGURATION =====
const CONFIG = {
  ANIMATION_DURATION: 250,
  LOAD_DELAY: 500,
  CART_FEEDBACK_DURATION: 1500,
};

// ===== PRODUCT DATA =====
class ProductDatabase {
  constructor() {
    this.products = [];
    this.currentFilter = "all";
  }

  // object with arrays of all products, including their ID, properties, types
  initializeProducts() {
    this.products = [
      {
        id: 1,
        name: "The Complete Set",
        description: "6 different flavours, 6 diffusers - one pack",
        label: "For Every Mood, All in One Pack",
        type: "bundle",
        originalPrice: 113.7,
        currentPrice: 70.0,
        discount: 40,
        badge: "LIMITED STOCK",
        badgeType: "limited",
        tastes: [
          {
            name: "1x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
          { name: "1x Peach Cream", icon: "./assets/icons/peach-cream.svg" },
          { name: "1x Mullein", icon: "./assets/icons/mullein.svg" },
          {
            name: "1x Lavender Berry",
            icon: "./assets/icons/lavender-berry.svg",
          },
          {
            name: "1x Cool Mint Frost",
            icon: "./assets/icons/cool-mint-frost.svg",
          },
          { name: "1x Watermelon", icon: "./assets/icons/watermelon.svg" },
        ],
        image: "./assets/The-Complete-Set.png",
      },
      {
        id: 2,
        name: "Mullein Diffuser",
        description: "Detox Flavour",
        label: "For Lung Reset, Immune and Natural Detox",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        badgeType: "promo",
        image: "./assets/Mullein-Diffuser.png",
      },
      {
        id: 3,
        name: "Calm Diffuser",
        description: "Peach Cream Flavour",
        label: "For Emotional Welness & Mental Clarity",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        badgeType: "promo",
        image: "./assets/Calm-Diffuser.png",
      },
      {
        id: 4,
        name: "Vitamin B-12 Diffuser",
        description: "Strawberry Kiwi Flavour",
        label: "For Brain Power, Better Mood & Focus",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        badgeType: "feature",
        image: "./assets/Vitamin-B-12-Diffuser.png",
      },
      {
        id: 5,
        name: "Caffeine Diffuser",
        description: "Cherry Ice Flavour",
        label: "For Fast Energy Without The Crash",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        discount: null,
        discountText: "BUY 2 GET 1 FREE",
        badge: "energy",
        badgeType: "option",
        badgeIcon: "./assets/icons/energy.svg",
        specialTastes: true,
        tastes: [
          {
            name: "Cherry <br /> Ice",
            icon: "./assets/icons/cherry-ice-spec.svg",
          },
          {
            name: "Cool Mint <br /> Frost",
            icon: "./assets/icons/cool-mint-frost-spec.svg",
          },
          {
            name: "Iced <br /> Latte",
            icon: "./assets/icons/iced-latte-spec.svg",
          },
        ],
        image: "./assets/Caffeine-Diffuser.png",
      },
      {
        id: 6,
        name: "Gaming Diffuser",
        description: "Blueberry Flavour",
        label: "For Mental Sharpness & Hyper Focus",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        discount: null,
        discountText: "BUY 2 GET 1 FREE",
        badge: "BUY 2 GET 1 FREE",
        badge: "enhance",
        badgeType: "option",
        badgeIcon: "./assets/icons/enhance.svg",
        image: "./assets/Gaming-Diffuser.png",
      },
      {
        id: 7,
        name: "Melatonin Diffuser",
        description: "Lavender Berry Flavour",
        label: "For Balanced Sleep Cycle & Deep Sleep",
        type: "single",
        originalPrice: 18.95,
        currentPrice: 16.11,
        discount: null,
        discountText: "BUY 2 GET 1 FREE",
        badge: "sleep",
        badgeType: "option",
        badgeIcon: "./assets/icons/sleep.svg",
        image: "./assets/Melatonin-Diffuser.png",
      },
      {
        id: 8,
        name: "Best Of Pure",
        description: "4 different flavours, 4 diffusers",
        label: "For Every Mood, All in One Bundle",
        type: "bundle",
        originalPrice: 71.32,
        currentPrice: 42.79,
        discount: 40,
        badge: "multi-formula",
        badgeType: "option",
        badgeIcon: "./assets/icons/multi-formula.svg",
        tastes: [
          {
            name: "1x GlowBerry",
            icon: "./assets/icons/glow-berry.svg",
          },
          { name: "1x Peach Cream", icon: "./assets/icons/peach-cream.svg" },

          {
            name: "1x Cool Mint Frost",
            icon: "./assets/icons/cool-mint-frost.svg",
          },
          {
            name: "1x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
        ],
        image: "./assets/Best-Of-Pure.png",
      },
      {
        id: 9,
        name: "Lung Reset Pack",
        description: "3 different flavours, 6 diffusers",
        label: "For Lung Reset, All in One Bundle",
        type: "bundle",
        originalPrice: 106.97,
        currentPrice: 64.18,
        discount: 40,
        badge: "detox",
        badgeType: "option",
        badgeIcon: "./assets/icons/detox.svg",
        tastes: [
          { name: "2x Peach Cream", icon: "./assets/icons/peach-cream.svg" },
          {
            name: "2x Lavender Berry",
            icon: "./assets/icons/lavender-berry.svg",
          },
          { name: "2x Mullein", icon: "./assets/icons/mullein.svg" },
        ],
        image: "./assets/Lung-Reset-Pack.png",
      },
      {
        id: 10,
        name: "Sweet Dreams",
        description: "4 different flavours, 8 diffusers",
        label: "For Sweet Dreams & Calm Nights",
        type: "bundle",
        originalPrice: 106.97,
        currentPrice: 64.18,
        discount: 40,
        badge: "sleep",
        badgeType: "option",
        badgeIcon: "./assets/icons/sleep.svg",
        tastes: [
          { name: "2x Peach Cream", icon: "./assets/icons/peach-cream.svg" },
          { name: "1x Mullein", icon: "./assets/icons/mullein.svg" },
          {
            name: "2x Lavender Berry",
            icon: "./assets/icons/lavender-berry.svg",
          },
          {
            name: "1x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
        ],
        image: "./assets/Sweet-Dreams.png",
      },
      {
        id: 11,
        name: "The Night + Day Kit",
        description: "3 different flavours, 6 diffusers",
        label: "For Night & Day, All in One Bundle",
        type: "bundle",
        originalPrice: 142.63,
        currentPrice: 85.58,
        discount: 40,
        badge: "multi-formula",
        badgeType: "option",
        badgeIcon: "./assets/icons/multi-formula.svg",
        tastes: [
          { name: "2x Peach Cream", icon: "./assets/icons/peach-cream.svg" },
          {
            name: "1x Cool Mint Frost",
            icon: "./assets/icons/cool-mint-frost.svg",
          },
          { name: "1x Cherry Ice", icon: "./assets/icons/cherry-ice.svg" },
          {
            name: "2x Lavender Berry",
            icon: "./assets/icons/lavender-berry.svg",
          },
          {
            name: "2x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
        ],
        image: "./assets/The-Night+Day-Kit.png",
      },
      {
        id: 12,
        name: "Game Mode",
        description: "6 different flavours, 6 diffusers",
        label: "For Game Mode, All in One Bundle",
        type: "bundle",
        originalPrice: 142.63,
        currentPrice: 85.58,
        discount: 40,
        badge: "enhance",
        badgeType: "option",
        badgeIcon: "./assets/icons/enhance.svg",
        tastes: [
          { name: "3x GlowBerry", icon: "./assets/icons/glow-berry.svg" },
          { name: "1x Watermelon", icon: "./assets/icons/watermelon.svg" },
          {
            name: "2x Cool Mint Frost",
            icon: "./assets/icons/cool-mint-frost.svg",
          },
          {
            name: "2x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
        ],
        image: "./assets/Game-Mode.png",
      },
      {
        id: 13,
        name: "The Sampler",
        description: "Ten different flavours, 10 diffusers",
        label: "For Every Mood, All in One Bundle",
        type: "bundle",
        originalPrice: 142.63,
        currentPrice: 85.58,
        discount: 40,
        badge: "multi-formula",
        badgeType: "option",
        badgeIcon: "./assets/icons/multi-formula.svg",
        tastes: [
          { name: "1x Mullein", icon: "./assets/icons/mullein.svg" },
          { name: "1x Cherry Ice", icon: "./assets/icons/cherry-ice.svg" },
          { name: "1x GlowBerry", icon: "./assets/icons/glow-berry.svg" },
          { name: "1x Watermelon", icon: "./assets/icons/watermelon.svg" },
          {
            name: "1x StrawBerry Kiwi",
            icon: "./assets/icons/strawberry-kiwi.svg",
          },
          {
            name: "1x Lavender Berry",
            icon: "./assets/icons/lavender-berry.svg",
          },
          {
            name: "1x Cool Mint Frost",
            icon: "./assets/icons/cool-mint-frost.svg",
          },
          { name: "1x Peach Cream", icon: "./assets/icons/peach-cream.svg" },
          {
            name: "1x Blue Raspberry",
            icon: "./assets/icons/blue-raspberry.svg",
          },
          { name: "1x Iced Latte", icon: "./assets/icons/iced-latte.svg" },
        ],
        image: "./assets/The-Sampler.png",
      },
    ];
    /*     console.log(this.products); */
    return this.products;
  }

  filterProducts(type) {
    this.currentFilter = type;
    if (type === "all") {
      return this.products;
    }
    return this.products.filter((product) => product.type === type);
  }
}

// ===== CART MANAGER =====
class CartManager {
  constructor() {
    this.items = [];
    this.initializeElements();
    this.setupCartListeners();
  }

  initializeElements() {
    this.modal = document.getElementById("cartModal");
    this.cartItemsContainer = document.getElementById("cartItems");
    this.cartEmpty = document.getElementById("cartEmpty");
    this.cartTotal = document.getElementById("cartTotal");
    this.checkoutBtn = document.getElementById("checkoutBtn");
    this.cartClose = document.getElementById("cartClose");
  }

  setupCartListeners() {
    if (this.cartClose) {
      this.cartClose.addEventListener("click", () => this.closeCart());
    }
    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) this.closeCart();
      });
    }
    if (this.checkoutBtn) {
      this.checkoutBtn.addEventListener("click", () => this.handleCheckout());
    }
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({
        ...product,
        quantity: 1,
      });
    }

    this.updateCartDisplay();
    return this.getTotalItems();
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.updateCartDisplay();
    return this.getTotalItems();
  }

  updateQuantity(productId, change) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        return this.removeItem(productId);
      }
    }
    this.updateCartDisplay();
    return this.getTotalItems();
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.currentPrice * item.quantity,
      0
    );
  }

  openCart() {
    this.modal.classList.add("active");
    this.updateCartDisplay();
  }

  closeCart() {
    this.modal.classList.remove("active");
  }

  updateCartDisplay() {
    if (this.items.length === 0) {
      this.cartEmpty.style.display = "block";
      this.cartItemsContainer.style.display = "none";
    } else {
      this.cartEmpty.style.display = "none";
      this.cartItemsContainer.style.display = "flex";
      this.renderCartItems();
    }

    this.cartTotal.textContent = `$${this.getTotalPrice().toFixed(2)}`;
  }

  // simple shop navigate. Added ready-made cart functionality, the ability to increase or decrease the quantity of a product previously added to the cart, delete it, and also see the total payment amount
  renderCartItems() {
    this.cartItemsContainer.innerHTML = "";

    this.items.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
                      <img src="${item.image}" alt="${item.name
        }" class="cart-item-image">
                      <div class="cart-item-details">
                          <div class="cart-item-name">${item.name}</div>
                          <div class="cart-item-price">$${item.currentPrice.toFixed(
          2
        )}</div>
                          <div class="cart-item-quantity">
                              <button class="quantity-btn" data-id="${item.id
        }" data-action="decrease">−</button>
                              <span class="quantity-value">${item.quantity
        }</span>
                              <button class="quantity-btn" data-id="${item.id
        }" data-action="increase">+</button>
                          </div>
                      </div>
                      <button class="cart-item-remove" data-id="${item.id}">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                      </button>
                  `;

      const quantityBtns = cartItem.querySelectorAll(".quantity-btn");
      quantityBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(e.currentTarget.dataset.id);
          const action = e.currentTarget.dataset.action;
          const change = action === "increase" ? 1 : -1;
          const newCount = this.updateQuantity(id, change);
          this.updateCartCount(newCount);
        });
      });

      const removeBtn = cartItem.querySelector(".cart-item-remove");
      removeBtn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.dataset.id);
        const newCount = this.removeItem(id);
        this.updateCartCount(newCount);
      });

      this.cartItemsContainer.appendChild(cartItem);
    });
  }

  updateCartCount(count) {
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = count;

    if (count > 0) {
      cartCount.classList.remove("hidden");
      cartCount.style.animation = "none";
      setTimeout(() => {
        cartCount.style.animation = "pulse 0.3s ease";
      }, 10);
    } else {
      cartCount.classList.add("hidden");
    }
  }

  handleCheckout() {
    if (this.items.length > 0) {
      alert(
        `Proceeding to checkout with ${this.getTotalItems()} items. Total: ${this.getTotalPrice().toFixed(
          2
        )}`
      );
    }
  }
}

// ===== UI CONTROLLER =====
class UIManager {
  constructor(productDatabase, cartManager) {
    this.productDatabase = productDatabase;
    this.cartManager = cartManager;
    this.productsGrid = document.getElementById("productsGrid");
    this.loadingContainer = document.getElementById("loadingContainer");
    this.emptyState = document.getElementById("emptyState");
    this.tabButtons = document.querySelectorAll(".tab-btn");
    this.cartButton = document.getElementById("cartButton");
    this.cartCount = document.getElementById("cartCount");

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.tabButtons.forEach((button) => {
      button.addEventListener("click", (e) => this.handleTabClick(e));
    });

    this.cartButton.addEventListener("click", () => {
      this.cartManager.openCart();
    });
  }

  updateCartCount(count) {
    this.cartCount.textContent = count;

    if (count > 0) {
      this.cartCount.classList.remove("hidden");
      this.cartCount.style.animation = "none";
      setTimeout(() => {
        this.cartCount.style.animation = "pulse 0.3s ease";
      }, 10);
    } else {
      this.cartCount.classList.add("hidden");
    }
  }

  handleTabClick(event) {
    const button = event.currentTarget;
    const filterType = button.dataset.filter;

    this.tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    this.showLoading();

    setTimeout(() => {
      const filteredProducts = this.productDatabase.filterProducts(filterType);
      this.renderProducts(filteredProducts);
      this.hideLoading();
    }, CONFIG.ANIMATION_DURATION);
  }

  renderProducts(products) {
    this.productsGrid.innerHTML = "";

    if (products.length === 0) {
      this.showEmptyState();
      return;
    }

    this.hideEmptyState();

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
      fragment.appendChild(this.createProductCard(product));
    });

    this.productsGrid.appendChild(fragment);
  }

  // Product badges
  createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("role", "listitem");
    const savings = product.originalPrice - product.currentPrice;
    const savingsPercent = Math.round((savings / product.originalPrice) * 100);

    let badgeHTML = "";
    if (product.discountText) {
      badgeHTML += `
      <span class="discount-badge">
      <img src="./assets/icons/discount.svg" alt="Discount icon" class="badge-icon" />
      ${product.discountText}
    </span>`;
    } else if (product.discount) {
      badgeHTML += `
        <span class="discount-badge">
          <img src="./assets/icons/discount.svg" alt="Discount icon" class="badge-icon" />
          ${product.discount}% OFF
        </span>`;
    }
    if (product.badge) {
      const defaultIcon = "./assets/icons/attention.svg";
      const iconSrc =
        product.badgeType === "option" && product.badgeIcon
          ? product.badgeIcon
          : defaultIcon;

      const badgeClass =
        product.badgeType === "limited"
          ? "limited"
          : product.badgeType === "option"
            ? "option"
            : "";

      badgeHTML += `
        <span class="bundle-badge ${badgeClass}">
          <img 
            src="${iconSrc}" 
            alt="${product.badge} icon" 
            class="badge-icon" 
          />
          ${product.badge}
        </span>`;
    }

    // Perhaps the most complex section of the code, but in fact everything is simple, since the cards have different properties I did not just upload ready-made images or write them in the usual html structure, but set all the parameters that were found in the layout in order to slightly emulate the rendering process, let's say we receive an array of data from the server and we need to somehow manipulate it//

    let tastesHTML = "";
    if (Array.isArray(product.tastes) && product.tastes.length > 0) {
      const wrapperClass = product.specialTastes
        ? "bundle-tastes bundle-tastes--special"
        : "bundle-tastes";
      tastesHTML += `<div class="${wrapperClass}">`;

      product.tastes.forEach((t) => {
        const tasteClass = product.specialTastes
          ? "bundle-taste bundle-taste--special"
          : "bundle-taste";
        tastesHTML += `
          <span class="${tasteClass}">
            <img src="${t.icon}" alt="${t.name}" class="badge-icon" />
            ${t.name}
          </span>`;
      });

      tastesHTML += `</div>`;
    }

    card.innerHTML = `
      <div class="product-image-container" style="position: relative;">
        <img src="${product.image}" alt="${product.name
      }" class="product-image" loading="lazy">
        ${badgeHTML}
        ${tastesHTML}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-label">${product.label}</p>
        <div class="price-section">
          <span class="price-original">$${product.originalPrice.toFixed(
        2
      )}</span>
          <span class="price-current">$${product.currentPrice.toFixed(2)}</span>
          <span class="price-save">${savingsPercent}% Off</span>
        </div>
        <button class="add-to-cart-btn" data-product-id="${product.id
      }" aria-label="Add ${product.name} to cart">
          Add To Cart
        </button>
      </div>
    `;

    const cartBtn = card.querySelector(".add-to-cart-btn");
    cartBtn.addEventListener("click", () =>
      this.handleAddToCart(product, cartBtn)
    );

    return card;
  }

  // Add product to cart
  handleAddToCart(product, button) {
    const newCount = this.cartManager.addItem(product);
    this.updateCartCount(newCount);

    button.classList.add("added");
    button.textContent = "Added!";

    setTimeout(() => {
      button.classList.remove("added");
      button.textContent = "Add To Cart";
    }, CONFIG.CART_FEEDBACK_DURATION);
  }

  showLoading() {
    this.loadingContainer.classList.add("active");
    this.productsGrid.style.display = "none";
  }

  hideLoading() {
    this.loadingContainer.classList.remove("active");
    this.productsGrid.style.display = "grid";
  }

  showEmptyState() {
    this.emptyState.classList.add("active");
  }

  hideEmptyState() {
    this.emptyState.classList.remove("active");
  }
}

class MobileNavigation {
  constructor() {
    this.hamburgerBtn = document.getElementById("hamburgerBtn");
    this.mobileNavOverlay = document.getElementById("mobileNavOverlay");
    this.mobileNavSidebar = document.getElementById("mobileNavSidebar");
    this.mobileNavClose = document.getElementById("mobileNavClose");
    this.mobileNavLinks = document.querySelectorAll(".mobile-nav-list a");

    this.isOpen = false;
    this.init();
  }

  init() {
    this.hamburgerBtn?.addEventListener("click", () => this.openMenu());
    this.mobileNavClose?.addEventListener("click", () => this.closeMenu());
    this.mobileNavOverlay?.addEventListener("click", () => this.closeMenu());

    this.mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    this.isOpen = true;
    this.mobileNavSidebar.classList.add("active");
    this.mobileNavOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeMenu() {
    this.isOpen = false;
    this.mobileNavSidebar.classList.remove("active");
    this.mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  new MobileNavigation();
});

// ===== APPLICATION INITIALIZATION =====
class Application {
  constructor() {
    this.productDatabase = new ProductDatabase();
    this.cartManager = new CartManager();
    this.uiManager = new UIManager(this.productDatabase, this.cartManager);
  }

  init() {
    this.uiManager.showLoading();

    setTimeout(() => {
      this.productDatabase.initializeProducts();
      const allProducts = this.productDatabase.filterProducts("all");
      this.uiManager.renderProducts(allProducts);
      this.uiManager.hideLoading();
    }, CONFIG.LOAD_DELAY);
  }
}

// ===== START APPLICATION =====
document.addEventListener("DOMContentLoaded", () => {
  const app = new Application();
  app.init();
});
