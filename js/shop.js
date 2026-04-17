/* shop.js */
document.getElementById('header-root').innerHTML = buildHeader('shop');
document.getElementById('footer-root').innerHTML = buildFooter();

// State
let shopState = {
  cat: '', search: '', sort: '', priceMax: 250,
  colors: [], sizes: [], brands: [],
  page: 1, perPage: 9, view: 'grid3',
};
const PER_PAGE = 9;

// ── CATEGORY MINI SLIDER ──────────────────────
function buildCatMiniSlider() {
  const track = document.getElementById('cat-mini-track');
  const items = [{ name:'All', img:'assets/uploads/2023/08/index-1-1.jpg', slug:'' }, ...RAPPOD.categories];
  track.innerHTML = items.map(c => `
    <div class="cat-mini-item${c.slug===''?' active':''}" onclick="setCat('${c.slug}',this)">
      <img src="${c.img || 'assets/uploads/2023/11/Notebook.png.jpg'}" class="cat-mini-img" alt="${c.name}" onerror="this.src='assets/uploads/2023/11/Notebook.png.jpg'"/>
      <span class="cat-mini-label">${c.name}</span>
    </div>`).join('');
}

function scrollCatSlider(dir) {
  const track = document.getElementById('cat-mini-track');
  track.scrollLeft += dir * 200;
}

function setCat(slug, el) {
  shopState.cat = slug;
  shopState.page = 1;
  document.querySelectorAll('.cat-mini-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.sidebar-cats li').forEach(li => {
    li.classList.toggle('active', li.dataset.slug === slug);
  });
  renderShop();
}

// ── SIDEBAR ───────────────────────────────────
function buildSidebar() {
  const colors = ['#f5e6c8','#222','#2c5282','#718096','#38a169','#e53e3e','#fff','#c6a227'];
  const sizes  = ['L','M','S','XL'];
  const brands = ['Book Shop','Education Here','Kid Education','Stationery Shop','Stationery Store'];
  const featured = RAPPOD.products.filter(p=>p.sale).slice(0,3);

  document.getElementById('shop-sidebar').innerHTML = `
    <!-- Categories -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Categories</div>
      <ul class="sidebar-cats">
        <li data-slug="" class="active"><a href="#" onclick="setCatFromSidebar('',event)">All Products</a><span>${RAPPOD.products.length}</span></li>
        ${RAPPOD.categories.map(c=>`
          <li data-slug="${c.slug}"><a href="#" onclick="setCatFromSidebar('${c.name}',event)">${c.name}</a><span>${c.count}</span></li>`).join('')}
      </ul>
    </div>
    <!-- Price -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Price</div>
      <div class="price-slider">
        <input type="range" min="0" max="250" value="250" id="price-range" oninput="updatePriceLabel(this.value);applyFilters()"/>
      </div>
      <div class="price-range-labels">Range: 14.00$ – <span id="price-label">250.00</span>$</div>
    </div>
    <!-- Color -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Color</div>
      <div class="color-swatches">
        ${colors.map(c=>`<div class="color-swatch" style="background:${c}" onclick="toggleColor('${c}',this)"></div>`).join('')}
      </div>
    </div>
    <!-- Size -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Size</div>
      <div class="size-chips">
        ${sizes.map(s=>`<button class="size-chip" onclick="toggleSize('${s}',this)">${s}</button>`).join('')}
      </div>
    </div>
    <!-- Brands -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Brands</div>
      <div class="brand-chips">
        ${brands.map(b=>`<button class="brand-chip" onclick="toggleBrand('${b}',this)">${b} (${Math.floor(Math.random()*6)+1})</button>`).join('')}
      </div>
    </div>
    <!-- Feature Products -->
    <div class="sidebar-widget">
      <div class="sidebar-title">Feature Product</div>
      ${featured.map(p=>`
        <div class="sidebar-featured-item">
          <img src="${p.img}" alt="${p.name}" class="sidebar-featured-img" onerror="this.src='assets/uploads/2020/12/candy-color-4-600x743.jpg'"/>
          <div class="sidebar-featured-info">
            ${RAPPOD.stars(p.rating)}
            <h5><a href="product.html?id=${p.id}">${p.name}</a></h5>
            <div class="price">${p.sale ? `<del>${p.price}</del> <span class="sale-price">${p.sale}</span>` : p.price}</div>
          </div>
        </div>`).join('')}
    </div>`;
}

function setCatFromSidebar(cat, e) {
  e.preventDefault();
  shopState.cat = cat; shopState.page = 1;
  document.querySelectorAll('.sidebar-cats li').forEach(li => li.classList.remove('active'));
  e.target.closest('li').classList.add('active');
  renderShop();
}
function updatePriceLabel(v) { document.getElementById('price-label').textContent = parseFloat(v).toFixed(2); shopState.priceMax = +v; }
function toggleColor(c,el) { el.classList.toggle('active'); applyFilters(); }
function toggleSize(s,el)  { el.classList.toggle('active'); applyFilters(); }
function toggleBrand(b,el) { el.classList.toggle('active'); applyFilters(); }

// ── FILTER & RENDER ───────────────────────────
function applyFilters() {
  shopState.sort = document.getElementById('sort-select').value;
  shopState.page = 1;
  renderShop();
}

function setView(view, btn) {
  shopState.view = view;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('shop-grid');
  grid.className = 'product-grid';
  if (view === 'grid5') grid.classList.add('grid-5');
  if (view === 'grid3') grid.classList.add('grid-3');
  if (view === 'grid2') grid.classList.add('grid-2', 'list-view');
  if (view === 'list')  { grid.classList.add('list-view'); grid.style.gridTemplateColumns = '1fr'; }
}

function renderShop() {
  let products = [...RAPPOD.products];

  // Filters
  if (shopState.cat)      products = products.filter(p => p.cat === shopState.cat || (p.categories||[]).includes(shopState.cat));
  if (shopState.priceMax < 250) products = products.filter(p => parseFloat((p.sale||p.price)) <= shopState.priceMax);
  if (shopState.sort === 'price-asc')  products.sort((a,b) => parseFloat(a.sale||a.price) - parseFloat(b.sale||b.price));
  if (shopState.sort === 'price-desc') products.sort((a,b) => parseFloat(b.sale||b.price) - parseFloat(a.sale||a.price));
  if (shopState.sort === 'name')       products.sort((a,b) => a.name.localeCompare(b.name));
  if (shopState.sort === 'rating')     products.sort((a,b) => b.rating - a.rating);

  const total = products.length;
  const start = (shopState.page - 1) * PER_PAGE;
  const paged = products.slice(start, start + PER_PAGE);

  document.getElementById('shop-grid').innerHTML = paged.length
    ? paged.map(p => RAPPOD.productCard(p)).join('')
    : '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#999;">No products found.</div>';

  // Pagination
  const pages = Math.ceil(total / PER_PAGE);
  document.getElementById('shop-pagination').innerHTML = [
    pages > 1 ? `<button class="page-btn arrow" onclick="goPage(${shopState.page-1})">‹</button>` : '',
    ...Array.from({length:pages},(_,i)=>`<button class="page-btn${i+1===shopState.page?' active':''}" onclick="goPage(${i+1})">${i+1}</button>`),
    pages > 1 ? `<button class="page-btn arrow" onclick="goPage(${shopState.page+1})">›</button>` : '',
  ].join('');
}

function goPage(p) {
  const pages = Math.ceil(RAPPOD.products.length / PER_PAGE);
  shopState.page = Math.max(1, Math.min(p, pages));
  renderShop();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  buildCatMiniSlider();
  buildSidebar();
  renderShop();
});
