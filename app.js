/**
 * ====================================================================
 * 🍪 COOKies - Application Logic (Exclusively Nad Al Sheba 3, Dubai)
 * ====================================================================
 */

// Application State
const state = {
  cart: [],
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initBrandData();
  renderCraftPillars();
  renderFAQ();
  initCart();
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

/**
 * 1. Initialize Brand Data from site-config.js
 */
function initBrandData() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  const announcementText = document.getElementById('announcement-text');
  if (announcementText && config.announcement) {
    announcementText.innerHTML = config.announcement.text;
  }

  const phone = (config.brand.whatsappNumber || "+971547488993").replace(/[^0-9]/g, '');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent("Salam / Hello COOKies! 🍪 I would like to order fresh cookies in Nad Al Sheba 3.")}`;
  
  const navWaBtn = document.getElementById('nav-whatsapp-btn');
  if (navWaBtn) {
    navWaBtn.href = whatsappUrl;
    navWaBtn.target = "_blank";
    navWaBtn.rel = "noopener noreferrer";
  }

  const mobileWaBtn = document.getElementById('mobile-whatsapp-btn');
  if (mobileWaBtn) {
    mobileWaBtn.href = whatsappUrl;
    mobileWaBtn.target = "_blank";
    mobileWaBtn.rel = "noopener noreferrer";
  }

  const footerWa = document.getElementById('footer-whatsapp');
  if (footerWa) {
    footerWa.href = whatsappUrl;
    footerWa.target = "_blank";
    footerWa.rel = "noopener noreferrer";
  }

  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) footerEmail.href = `mailto:${config.brand.email}`;
}

/**
 * 2. Add To Cart Functions (1 for 5 AED, Box of 5 for 20 AED)
 */
function addSingleCookie(qty = 1) {
  const existing = state.cart.find(item => item.id === 'single-cookie');
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: 'single-cookie',
      type: 'single',
      title: '1 Single Cookie',
      subtitle: 'Classic Chocolate Chip',
      price: 5,
      qty: qty,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
    });
  }

  updateCartUI();
  showToast(`Added ${qty}x Single Cookie (5 AED) to cart! 🍪`);
}

function addBoxOfFive() {
  const existing = state.cart.find(item => item.id === 'box-of-5');
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: 'box-of-5',
      type: 'bundle',
      title: 'Box of 5 Cookies',
      subtitle: '5x Warm Classic Cookies (1 Free!)',
      price: 20,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80',
    });
  }

  updateCartUI();
  showToast('Added Box of 5 (20 AED) to cart! 🎁');

  if (window.confetti) {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

/**
 * 3. Craft Pillars Rendering
 */
function renderCraftPillars() {
  const container = document.getElementById('craft-pillars-grid');
  if (!container || !SITE_CONFIG.craftPillars) return;

  const iconsMap = {
    flame: 'flame',
    droplet: 'droplet',
    'map-pin': 'map-pin',
    clock: 'clock'
  };

  container.innerHTML = SITE_CONFIG.craftPillars.map(pillar => `
    <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
      <div class="w-12 h-12 rounded-2xl bg-brand-blueLight text-brand-blueDark flex items-center justify-center font-bold">
        <i data-lucide="${iconsMap[pillar.icon] || 'star'}" class="w-6 h-6"></i>
      </div>
      <h3 class="font-display text-lg font-bold text-slate-900">${pillar.title}</h3>
      <p class="text-xs text-slate-600 leading-relaxed">${pillar.description}</p>
    </div>
  `).join('');
}

/**
 * 4. FAQ Accordion
 */
function renderFAQ() {
  const container = document.getElementById('faq-accordion');
  if (!container || !SITE_CONFIG.faq) return;

  container.innerHTML = SITE_CONFIG.faq.map((item, idx) => `
    <div class="bg-white rounded-2xl border border-sky-100 overflow-hidden">
      <button 
        onclick="toggleFAQ(${idx})" 
        class="w-full p-4 text-left font-display font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between hover:bg-sky-50 transition-colors"
      >
        <span>${item.q}</span>
        <i id="faq-icon-${idx}" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform"></i>
      </button>
      <div id="faq-ans-${idx}" class="hidden p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-sky-50 leading-relaxed bg-[#fbfdff]">
        ${item.a}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(idx) {
  const ans = document.getElementById(`faq-ans-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!ans) return;

  const isHidden = ans.classList.contains('hidden');
  ans.classList.toggle('hidden', !isHidden);
  if (icon) {
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

/**
 * 5. Cart Drawer & Calculations
 */
function initCart() {
  updateCartUI();
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  
  const pillCount = document.getElementById('cart-pill-count');
  if (pillCount) pillCount.innerText = totalCount;

  const drawerCount = document.getElementById('cart-drawer-item-count');
  if (drawerCount) drawerCount.innerText = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  renderCartItems();
  calculateTotals();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center space-y-3">
        <div class="w-16 h-16 rounded-full bg-sky-50 text-slate-400 mx-auto flex items-center justify-center text-3xl">
          🍪
        </div>
        <div class="font-display font-bold text-slate-800 text-base">Your cart is empty</div>
        <p class="text-xs text-slate-500 max-w-xs mx-auto">Get 1 cookie for 5 AED, or 1 box of 5 for 20 AED!</p>
        <button onclick="closeCart(); location.href='#order'" class="bg-brand-blue text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-md mt-2">
          Order Cookies
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map((item, idx) => `
    <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-sm flex items-start gap-3">
      <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-xl object-cover shrink-0 border border-sky-100">
      
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-1">
          <h4 class="font-display font-bold text-slate-900 text-sm truncate">${item.title}</h4>
          <button onclick="removeCartItem(${idx})" class="text-slate-400 hover:text-rose-500 text-xs p-1">
            &times;
          </button>
        </div>

        <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5">${item.subtitle}</p>

        <div class="mt-2.5 flex items-center justify-between">
          <span class="font-display font-extrabold text-sm text-brand-blueDark">
            ${item.price * item.qty} AED
          </span>

          <div class="flex items-center border border-sky-200 rounded-lg overflow-hidden bg-slate-50">
            <button onclick="updateItemQty(${idx}, -1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-sky-100 font-bold">-</button>
            <span class="px-2 py-0.5 text-xs font-bold text-slate-900">${item.qty}</span>
            <button onclick="updateItemQty(${idx}, 1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-sky-100 font-bold">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateItemQty(idx, change) {
  state.cart[idx].qty += change;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  updateCartUI();
}

function removeCartItem(idx) {
  state.cart.splice(idx, 1);
  updateCartUI();
  showToast('Removed item.');
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = subtotal === 0 ? 0 : 10; // Standard 10 AED for Nad Al Sheba 3
  const total = subtotal + deliveryFee;

  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.innerText = `${subtotal} AED`;
  if (deliveryEl) deliveryEl.innerText = subtotal === 0 ? '0 AED' : `${deliveryFee} AED`;
  if (totalEl) totalEl.innerText = `${total} AED`;
}

// WhatsApp Direct Order Generator (Exclusively Nad Al Sheba 3)
document.getElementById('checkout-whatsapp-btn')?.addEventListener('click', () => {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add cookies first.');
    return;
  }

  const config = window.SITE_CONFIG;
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = 10;
  const total = subtotal + deliveryFee;

  let message = `Salam / Hello COOKies Team! 🍪\nI would like to order fresh cookies in Nad Al Sheba 3:\n\n`;

  state.cart.forEach((item) => {
    message += `• ${item.qty}x *${item.title}* (${item.price * item.qty} AED)\n`;
  });

  message += `\n------------------------\n`;
  message += `Subtotal: ${subtotal} AED\n`;
  message += `Delivery (Nad Al Sheba 3): ${deliveryFee} AED\n`;
  message += `*Total Amount:* *${total} AED*\n\n`;
  message += `📍 *Delivery Area:* Nad Al Sheba 3, Dubai\n`;
  message += `🏠 *Villa / Street in NAS 3:* [Write your villa number or street here]\n\n`;
  message += `Please confirm my order. Thank you!`;

  const phone = (config.brand.whatsappNumber || "+971547488993").replace(/[^0-9]/g, '');
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  
  // Safe link trigger that works across all desktop/mobile browsers without popup blocker issues
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => link.remove(), 250);
});

// Standard Checkout simulation
document.getElementById('checkout-standard-btn')?.addEventListener('click', () => {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add cookies first.');
    return;
  }

  if (window.confetti) {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  alert("🎉 Thank you! Your order has been placed for Nad Al Sheba 3, Dubai. We bake fresh everyday and will deliver your cookies warm!");
  state.cart = [];
  updateCartUI();
  closeCart();
});

/**
 * 6. Drawer Controls
 */
function openCart() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (!backdrop || !drawer) return;

  backdrop.classList.remove('hidden');
  setTimeout(() => {
    drawer.classList.remove('translate-x-full');
  }, 10);
}

function closeCart() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (!backdrop || !drawer) return;

  drawer.classList.add('translate-x-full');
  setTimeout(() => {
    backdrop.classList.add('hidden');
  }, 300);
}

document.getElementById('open-cart-btn')?.addEventListener('click', openCart);
document.getElementById('close-cart-btn')?.addEventListener('click', closeCart);
document.getElementById('cart-drawer-backdrop')?.addEventListener('click', (e) => {
  if (e.target.id === 'cart-drawer-backdrop') closeCart();
});

// Mobile Nav
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

mobileToggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

function closeMobileNav() {
  mobileNav?.classList.add('hidden');
}

/**
 * 7. Toast Notification Helper
 */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900/90 text-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-lg backdrop-blur-sm border border-slate-700/50 flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0';
  toast.innerHTML = `<span>🍪</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
