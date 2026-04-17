/* home.js */

document.getElementById('header-root').innerHTML = buildHeader('home');
document.getElementById('footer-root').innerHTML = buildFooter();

// ── HERO SLIDER ───────────────────────────────
let heroIdx = 0;
let heroTimer;

function buildHero() {
  const slidesEl = document.getElementById('hero-slides');
  const dotsEl   = document.getElementById('hero-dots');
  
  slidesEl.innerHTML = RAPPOD.slider.map((s, i) => `
    <div class="hero-slide${i===0?' active':''}">
      <div class="hero-deco-circle"></div>
      <div class="hero-deco-dash"></div>
      <div class="hero-text-col">
        <span class="hero-tag">${s.tag}</span>
        <h1 class="hero-title">${s.title}</h1>
        <p class="hero-sub">${s.sub}</p>
        <a href="shop.html" class="btn-primary">${s.btn}</a>
      </div>
      <div class="hero-img-col">
        <img src="${s.img1}" alt="slide" class="hero-img-main" onerror="this.style.display='none'"/>
        <img src="${s.img2}" alt="slide" class="hero-img-sm1" onerror="this.style.display='none'"/>
        <img src="${s.img3}" alt="slide" class="hero-img-sm2" onerror="this.style.display='none'"/>
        <img src="${s.img4}" alt="slide" class="hero-img-sm3" onerror="this.style.display='none'"/>
      </div>
    </div>`).join('');

  dotsEl.innerHTML = RAPPOD.slider.map((_,i) =>
    `<button class="hero-dot${i===0?' active':''}" onclick="goHero(${i})"></button>`
  ).join('');

  startHeroAuto();
}

function goHero(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides[heroIdx].classList.remove('active');
  dots[heroIdx].classList.remove('active');
  heroIdx = (idx + RAPPOD.slider.length) % RAPPOD.slider.length;
  slides[heroIdx].classList.add('active');
  dots[heroIdx].classList.add('active');
  clearInterval(heroTimer);
  startHeroAuto();
}

function startHeroAuto() {
  heroTimer = setInterval(() => goHero(heroIdx + 1), 5000);
}

// ── FEATURES ─────────────────────────────────
function buildFeatures() {
  const icons = {
    'Free Shipping': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M2 17h2m10 0h4m2 0h2"/><path d="m5 14-.6-3H3m11 3-.6-3H8.5m10 3 .6-3H21"/><path d="M13 5H1m0 9h12V5ZM23 14h-5V8h3l2 3v3Z"/><path d="M11 7h-2"/><path d="M7 7H5"/><path d="M3 7H1"/></svg>`,
    'Refund Policy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    'Secure Payment': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    'Discount Coupons': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L14.7 21a2.4 2.4 0 0 1-3.4 0L5 14.7V5h10Z"/><path d="M9 9h.01"/><path d="m15 15-5-5"/></svg>`,
    'Privacy Protection': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  };

  document.getElementById('features-grid').innerHTML = RAPPOD.features.map(f => `
    <div class="feature-item">
      <div class="feature-icon-wrapper">
        ${icons[f.title] || f.icon}
      </div>
      <div class="feature-text">
        <strong>${f.title}</strong>
        <span>${f.sub}</span>
      </div>
    </div>`).join('');
}

// ── CATEGORIES MOSAIC ─────────────────────────
function buildCategories() {
  const cats = RAPPOD.categories;
  // Map to mosaic layout: 1 big + 4 small
  const catImages = [
    { name:'Sticker',       img:'assets/uploads/2023/08/index-1-1.jpg', cls:'cat-card-big' },
    { name:'Washi Tape',    img:'assets/uploads/2023/08/index-2-1.jpg', cls:'cat-card-sm1' },
    { name:'2B Pencil',     img:'assets/uploads/2023/08/index-3-1.jpg', cls:'cat-card-sm2' },
    { name:'Memorandum',    img:'assets/uploads/2023/08/index-4-1.jpg', cls:'cat-card-sm3' },
    { name:'Accessories',   img:'assets/uploads/2023/08/index-5-1.jpg', cls:'cat-card-sm4' },
  ];
  document.getElementById('categories-mosaic').innerHTML = catImages.map(c => `
    <div class="cat-card ${c.cls}">
      <img src="${c.img}" alt="${c.name}" onerror="this.src='assets/uploads/2023/11/Sticker.png.jpg'"/>
      <div class="cat-card-label">${c.name}</div>
    </div>`).join('');
}

// ── COUNTDOWN ─────────────────────────────────
function buildCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  target.setHours(11, 52, 21, 0);

  function update() {
    const now  = new Date();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    document.getElementById('countdown').innerHTML = `
      <div class="countdown-unit"><span class="countdown-num">${String(d).padStart(3,'0')}</span><span class="countdown-label">days</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(h).padStart(2,'0')}</span><span class="countdown-label">hrs</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(m).padStart(2,'0')}</span><span class="countdown-label">min</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(s).padStart(2,'0')}</span><span class="countdown-label">sec</span></div>`;
  }
  update();
  setInterval(update, 1000);
}

// ── DEALS ─────────────────────────────────────
function buildDeals() {
  const deals = RAPPOD.products.filter(p => p.sale).slice(0, 5);
  document.getElementById('deals-grid').innerHTML = deals.map(p => RAPPOD.productCard(p)).join('');
}

// ── PROMO GRID ────────────────────────────────
function buildPromoGrid() {
  document.getElementById('promo-grid').innerHTML = RAPPOD.promoSections.map(s => `
    <div class="promo-grid-card">
      <img src="${s.img}" alt="${s.title}" onerror="this.src='assets/uploads/2023/08/index-1-1.jpg'"/>
      <div class="promo-grid-info">
        <h4>${s.title}</h4>
        <p>${s.sub}</p>
        <a href="shop.html" class="btn-primary" style="padding:9px 22px;font-size:13px;">${s.btn}</a>
      </div>
    </div>`).join('');
}

// ── BEST SELLERS ──────────────────────────────
function buildBestSellers(filter='all') {
  let products = [...RAPPOD.products];
  if (filter === 'top-rating')  products = products.sort((a,b) => b.rating - a.rating);
  if (filter === 'best-sellers') products = products.filter(p => p.reviews > 15);
  if (filter === 'featured')    products = products.filter(p => p.badge === 'Hot');
  document.getElementById('bestsellers-grid').innerHTML = products.slice(0, 5).map(p => RAPPOD.productCard(p)).join('');
}

function switchBestSeller(btn, tab) {
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildBestSellers(tab);
}

// ── FEATURED PRODUCT ──────────────────────────
function buildFeatured() {
  const fp = RAPPOD.featuredProduct;
  document.getElementById('featured-product').innerHTML = `
    <img src="${fp.img1}" alt="Featured" class="fp-img" style="height:340px;" onerror="this.src='assets/uploads/2023/08/index-4-1.jpg'"/>
    <div class="fp-text">
      <h2>${fp.title}</h2>
      <p>${fp.sub}</p>
      <a href="shop.html" class="btn-primary">${fp.btn}</a>
    </div>
    <img src="${fp.img2}" alt="Featured" class="fp-img" style="height:340px;" onerror="this.src='assets/uploads/2023/08/index-5-1.jpg'"/>`;
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildHero();
  buildFeatures();
  buildCategories();
  buildCountdown();
  buildDeals();
  buildPromoGrid();
  buildBestSellers();
  buildFeatured();
});
