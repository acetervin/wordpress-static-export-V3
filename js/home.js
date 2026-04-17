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
  document.getElementById('features-grid').innerHTML = RAPPOD.features.map(f => `
    <div class="feature-item">
      <div class="feature-icon">${f.icon}</div>
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
