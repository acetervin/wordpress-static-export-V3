/* product.js */
document.getElementById('header-root').innerHTML = buildHeader('product');
document.getElementById('footer-root').innerHTML = buildFooter();

let currentProduct = null;
let galleryImages  = [];
let galleryIdx     = 0;

function getProductId() {
  const p = new URLSearchParams(window.location.search).get('id');
  return p ? parseInt(p) : null;
}

function loadProduct() {
  const id = getProductId();
  currentProduct = id ? RAPPOD.products.find(p => p.id === id) : null;
  if (!currentProduct) currentProduct = RAPPOD.products.find(p => p.id === 16546) || RAPPOD.products[0];

  // Breadcrumb
  document.getElementById('bc-cat').textContent  = (currentProduct.categories||[currentProduct.cat])[0] || 'Shop';
  document.getElementById('bc-name').textContent = currentProduct.name;
  document.title = currentProduct.name + ' – Rappod';

  // Gallery
  galleryImages = currentProduct.gallery || [currentProduct.img, currentProduct.img2].filter(Boolean);
  if (!galleryImages.length) galleryImages = [currentProduct.img];
  galleryIdx = 0;
  renderGallery();

  // Info column
  renderProductInfo();

  // Recently viewed
  let viewed = JSON.parse(localStorage.getItem('rappod_viewed') || '[]');
  if (!viewed.includes(currentProduct.id)) viewed.unshift(currentProduct.id);
  viewed = viewed.slice(0, 8);
  localStorage.setItem('rappod_viewed', JSON.stringify(viewed));

  // Tabs
  renderBundle();
  renderRelated();
  renderRecent(viewed);
}

function renderGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.src = galleryImages[galleryIdx];
  mainImg.alt = currentProduct.name;

  document.getElementById('gallery-thumbs').innerHTML = galleryImages.map((src, i) => `
    <img src="${src}" alt="${currentProduct.name}" class="gallery-thumb${i===galleryIdx?' active':''}"
      onclick="setGallery(${i})" onerror="this.style.display='none'"/>`).join('');
}

function setGallery(idx) {
  galleryIdx = idx;
  renderGallery();
}

function galleryNav(dir) {
  galleryIdx = (galleryIdx + dir + galleryImages.length) % galleryImages.length;
  renderGallery();
}

function renderProductInfo() {
  const p = currentProduct;
  const priceHTML = p.sale
    ? `<del>${p.price}</del> <span class="sale-price">${p.sale}</span>`
    : p.price;

  document.getElementById('product-info-col').innerHTML = `
    <h1>${p.name}</h1>
    <div class="product-brand">By <a href="shop.html">${p.brand || 'Book Shop'}</a></div>
    <div class="product-price-row">
      <div class="product-price-main">${priceHTML}</div>
    </div>
    ${RAPPOD.stars(p.rating)}
    <div class="product-viewers">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      35 people are viewing this right now
    </div>
    <p class="product-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    <!-- ATC -->
    <div class="atc-row">
      <div class="qty-row">
        <button class="qty-btn" onclick="document.getElementById('prod-qty').value=Math.max(1,+document.getElementById('prod-qty').value-1)">−</button>
        <input type="number" id="prod-qty" value="1" min="1" class="qty-input"/>
        <button class="qty-btn" onclick="document.getElementById('prod-qty').value=+document.getElementById('prod-qty').value+1">+</button>
      </div>
      <button class="btn-atc" onclick="addProdToCart()">Add To Cart</button>
      <button class="btn-wishlist-icon" onclick="RAPPOD.addToWishlist(currentProduct)" title="Add to wishlist">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <button class="btn-buynow" onclick="addProdToCart();window.location='cart.html'">Buy Now</button>

    <!-- Payment -->
    <div class="payment-box">
      <div class="payment-icons-row">
        <div class="pay-icon" style="background:#EB001B;color:#fff">MC</div>
        <div class="pay-icon" style="background:#007dc3;color:#fff">APAY</div>
        <div class="pay-icon" style="background:#1a1f71;color:#fff">VISA</div>
        <div class="pay-icon" style="background:#c0c0c0;color:#fff">AMEX</div>
        <div class="pay-icon" style="background:#003087;color:#fff">PP</div>
        <div class="pay-icon" style="background:#00d64f;color:#fff">STRP</div>
        <div class="pay-icon" style="background:#ffb3c7;color:#c0392b;font-size:7px">Klarna</div>
      </div>
      <div class="payment-label">Guaranteed Checkout</div>
    </div>

    <!-- Shipping -->
    <div class="shipping-info">
      <div class="shipping-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <span>Free worldwide shipping on all orders over $100</span>
      </div>
      <div class="shipping-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Delivers in 3–7 Working Days <a href="#">Shipping &amp; Return</a></span>
      </div>
    </div>

    <!-- Meta -->
    <div class="product-meta">
      <p><strong>SKU:</strong> ${p.sku || 'N/A'}</p>
      <p><strong>Category:</strong> <a href="shop.html">${(p.categories||[p.cat||''])[0]}</a></p>
      <p><strong>Tags:</strong> ${p.tags || 'Trend'}</p>
      <p><strong>Brand:</strong> <a href="shop.html">${p.brand || 'Book Shop'}</a></p>
    </div>

    <!-- Social Share -->
    <div class="share-row">
      <span class="share-label">Share:</span>
      ${['f','𝕏','i','in','⟳','🔗'].map((icon,i) => `<button class="share-btn" title="Share">${['<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>','<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>','<svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'][i]}</button>`).join('')}
    </div>`;
}

function addProdToCart() {
  const qty = parseInt(document.getElementById('prod-qty').value) || 1;
  RAPPOD.addToCart(currentProduct, qty);
}

function renderBundle() {
  const bundleProds = RAPPOD.products.filter(p => p.id !== currentProduct.id && p.sale).slice(0, 3);
  const allProds    = [currentProduct, ...bundleProds];
  const total       = allProds.reduce((s,p) => s + parseFloat((p.sale||p.price).replace(/[^0-9.]/g,'')), 0);

  document.getElementById('bundle-section').innerHTML = `
    <div class="bundle-products">
      ${allProds.map((p,i) => `
        ${i > 0 ? '<span class="bundle-plus">+</span>' : ''}
        <div class="bundle-product">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='assets/uploads/2020/12/candy-color-4-600x743.jpg'"/>
          <p>${p.name}</p>
          <div class="price">${p.sale || p.price}</div>
        </div>`).join('')}
    </div>
    <div class="bundle-summary">
      <div class="bundle-total">${total.toFixed(2)}$</div>
      <div class="bundle-total-sub">For ${allProds.length} items</div>
      <div class="bundle-checklist">
        ${allProds.map(p=>`
          <div class="bundle-check-item">
            <input type="checkbox" checked/>
            <span>This product: <strong>${p.name}</strong> <span style="color:var(--accent)">${p.sale||p.price}</span></span>
          </div>`).join('')}
      </div>
      <button class="btn-primary full-width" onclick="bundleAddAll()">Add All To Cart</button>
    </div>`;
}

function bundleAddAll() {
  const bundleProds = RAPPOD.products.filter(p => p.id !== currentProduct.id && p.sale).slice(0, 3);
  [currentProduct, ...bundleProds].forEach(p => RAPPOD.addToCart(p, 1));
}

function renderRelated() {
  const related = RAPPOD.products.filter(p => p.id !== currentProduct.id).slice(0, 4);
  document.getElementById('related-grid').innerHTML = related.map(p => RAPPOD.productCard(p)).join('');
}

function renderRecent(viewed) {
  const recent = viewed
    .filter(id => id !== currentProduct.id)
    .map(id => RAPPOD.products.find(p => p.id === id))
    .filter(Boolean).slice(0, 4);
  const el = document.getElementById('recent-grid');
  el.innerHTML = recent.length
    ? recent.map(p => RAPPOD.productCard(p)).join('')
    : RAPPOD.products.slice(0, 4).map(p => RAPPOD.productCard(p)).join('');
}

function switchTab(tab, btn) {
  document.querySelectorAll('.product-tab-btns .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

document.addEventListener('DOMContentLoaded', loadProduct);
