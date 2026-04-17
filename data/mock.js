const RAPPOD = {

  products: [
    { id:3989,  name:"Angoo Mesh Pencil",    price:"100.00$", sale:"",         img:"assets/uploads/2018/05/angoo-mesh-pencil-3-600x743.jpg",     img2:"assets/uploads/2018/05/angoo-mesh-pencil-4-600x743.jpg",         cat:"Sticker",       badge:"Hot",  badge2:"-33%", rating:5, reviews:24, sku:"VN00189",  tags:"Hot, Life Style, Trend", brand:"Book Shop",  priceRange:"100.00$ – 120.00$" },
    { id:16313, name:"BT21 Dream Pencil",     price:"150.00$", sale:"",         img:"assets/uploads/2020/12/bt21-dream-pencil-3-600x743.jpg",      img2:"assets/uploads/2020/12/bt21-dream-pencil-4-600x743.jpg",         cat:"Tape",          badge:"",     badge2:"",     rating:4, reviews:8,  sku:"BT21-DP", tags:"Trend", brand:"Education Here", priceRange:"150.00$" },
    { id:16541, name:"Bucket List Journal",   price:"200.00$", sale:"150.00$",  img:"assets/uploads/2020/12/bucket-list-journal-3-600x743.jpg",    img2:"assets/uploads/2020/12/bucket-list-journal-4-600x743.jpg",      cat:"Sticker",       badge:"Hot",  badge2:"-25%", rating:5, reviews:12, sku:"BLJ-001", tags:"Hot, Trend", brand:"Stationery Shop", priceRange:"150.00$" },
    { id:10448, name:"Cable Bite Charger",    price:"200.00$", sale:"",         img:"assets/uploads/2020/04/cable-bite-charger-3-600x743.jpg",     img2:"assets/uploads/2020/04/cable-bite-charger-4-600x743.jpg",        cat:"Book Pin",      badge:"",     badge2:"",     rating:5, reviews:6,  sku:"CBC-200", tags:"Life Style", brand:"Kid Education", priceRange:"200.00$" },
    { id:10460, name:"Campus Key Ring",       price:"200.00$", sale:"",         img:"assets/uploads/2020/04/campus-key-ring-4-600x743.jpg",        img2:"assets/uploads/2020/04/campus-key-ring-600x743.jpg",             cat:"Pencil Pocket", badge:"",     badge2:"",     rating:4, reviews:3,  sku:"CKR-001", tags:"Life Style, Trend", brand:"Book Shop", priceRange:"200.00$" },
    { id:16546, name:"Candy Color",           price:"19.90$",  sale:"14.90$",   img:"assets/uploads/2020/12/candy-color-4-600x743.jpg",            img2:"assets/uploads/2020/12/candy-color-3.jpg",                      cat:"Pencil Pocket", badge:"-25%", badge2:"",     rating:5, reviews:35, sku:"D2300-3-2-4", tags:"Hot, Life Style, Trend", brand:"Book Shop", priceRange:"14.90$",
      gallery:["assets/uploads/2020/12/candy-color-3.jpg","assets/uploads/2020/12/candy-color-2.jpg","assets/uploads/2020/12/candy-color.jpg","assets/uploads/2020/12/candy-color-5.jpg","assets/uploads/2020/12/candy-color-4.jpg"] },
    { id:7840,  name:"Cat Paw",               price:"200.00$", sale:"150.00$",  img:"assets/uploads/2019/04/cat-paw-3-600x743.jpg",               img2:"assets/uploads/2019/04/cat-paw-4-600x743.jpg",                  cat:"Sticker",       badge:"Hot",  badge2:"-25%", rating:5, reviews:19, sku:"CP-007", tags:"Hot, Trend", brand:"Stationery Store", priceRange:"150.00$" },
    { id:16526, name:"Cat Paw Correction",    price:"250.00$", sale:"200.00$",  img:"assets/uploads/2020/12/cat-paw-correction-4-600x743.jpg",     img2:"assets/uploads/2020/12/cat-paw-correction-3-600x743.jpg",        cat:"Pencil Pocket", badge:"Hot",  badge2:"-20%", rating:5, reviews:7,  sku:"CPC-200", tags:"Hot, Life Style", brand:"Education Here", priceRange:"200.00$" },
    { id:16588, name:"Glue Tape Roller",      price:"29.00$",  sale:"",         img:"assets/uploads/2020/12/glue-tape-roller-4-600x743.jpg",       img2:"assets/uploads/2020/12/glue-tape-roller-3-600x743.jpg",          cat:"Book Pin",      badge:"",     badge2:"",     rating:4, reviews:11, sku:"GTR-290", tags:"Trend", brand:"Stationery Shop", priceRange:"29.00$" },
    { id:38859, name:"Holidays Gel Pens",     price:"19.90$",  sale:"",         img:"assets/uploads/2022/08/holidays-gel-pens-3-600x743.jpg",      img2:"assets/uploads/2022/08/holidays-gel-pens-4-600x743.jpg",         cat:"Tape",          badge:"",     badge2:"",     rating:5, reviews:22, sku:"HGP-199", tags:"Hot, Trend", brand:"Book Shop", priceRange:"19.90$" },
    { id:45184, name:"Iconic Masking Tape",   price:"99.00$",  sale:"89.00$",   img:"assets/uploads/2023/05/iconic-masking-tape-3-600x743.jpg",    img2:"assets/uploads/2023/05/iconic-masking-tape-2-600x743.jpg",       cat:"Sticker",       badge:"-10%", badge2:"",     rating:5, reviews:41, sku:"IMT-890", tags:"Trend, Life Style", brand:"Stationery Store", priceRange:"89.00$" },
    { id:39116, name:"Index Sticky Notes",    price:"200.00$", sale:"150.00$",  img:"assets/uploads/2022/08/index-sticky-notes-3-600x743.jpg",     img2:"assets/uploads/2022/08/index-sticky-notes-4-600x743.jpg",        cat:"Notebook",      badge:"-25%", badge2:"",     rating:3, reviews:5,  sku:"ISN-150", tags:"Trend", brand:"Kid Education", priceRange:"150.00$" },
    { id:101,   name:"Official Slim Diary",   price:"150.00$", sale:"",         img:"assets/uploads/2020/12/official-slim-diary-4-600x743.jpg",    img2:"assets/uploads/2020/12/official-slim-diary-3-600x743.jpg",       cat:"Notebook",      badge:"",     badge2:"",     rating:5, reviews:18, sku:"OSD-150", tags:"Life Style", brand:"Stationery Shop", priceRange:"150.00$" },
    { id:102,   name:"Origin Weekly Planner", price:"120.00$", sale:"100.00$",  img:"assets/uploads/2020/12/origin-weekly-planner-3-600x743.jpg",  img2:"assets/uploads/2020/12/origin-weekly-planner-4-600x743.jpg",     cat:"Notebook",      badge:"Hot",  badge2:"",     rating:5, reviews:29, sku:"OWP-100", tags:"Hot, Trend", brand:"Book Shop", priceRange:"100.00$" },
    { id:103,   name:"Watercolor Paper",      price:"100.00$", sale:"",         img:"assets/uploads/2020/12/watercolor-paper-4-600x743.jpg",       img2:"assets/uploads/2020/12/watercolor-paper-3-600x743.jpg",          cat:"Notebook",      badge:"",     badge2:"",     rating:4, reviews:14, sku:"WCP-100", tags:"Trend", brand:"Education Here", priceRange:"100.00$" },
    { id:104,   name:"Watercolor Brush",      price:"250.00$", sale:"",         img:"assets/uploads/2018/10/watercolor-brush-720x484.jpg",          img2:"assets/uploads/2018/10/watercolor-brush-720x484.jpg",            cat:"Pencil",        badge:"",     badge2:"",     rating:4, reviews:9,  sku:"WCB-250", tags:"Life Style", brand:"Book Shop", priceRange:"250.00$" },
    { id:105,   name:"Rilakkuma",             price:"200.00$", sale:"180.00$",  img:"assets/uploads/2020/12/rilakkuma-3-600x743.jpg",              img2:"assets/uploads/2020/12/rilakkuma-4-600x743.jpg",                 cat:"Sticker",       badge:"",     badge2:"",     rating:5, reviews:33, sku:"RLK-180", tags:"Hot, Trend", brand:"Stationery Store", priceRange:"180.00$" },
    { id:106,   name:"Sticker Sheet",         price:"50.00$",  sale:"",         img:"assets/uploads/2020/12/sticker-sheet-3-600x743.jpg",          img2:"assets/uploads/2020/12/sticker-sheet-2-600x743.jpg",             cat:"Sticker",       badge:"New",  badge2:"",     rating:4, reviews:7,  sku:"SS-050", tags:"Trend", brand:"Kid Education", priceRange:"50.00$" },
  ],

  categories: [
    { name:"Notebook",      slug:"notebook",      img:"assets/uploads/2023/11/Notebook.png.jpg",      count:8 },
    { name:"Pencil",        slug:"pencil",        img:"assets/uploads/2023/11/Pencil.png.jpg",        count:4 },
    { name:"Pencil Pocket", slug:"pencil-pocket", img:"assets/uploads/2023/11/Pencil-Pocket.png.jpg", count:7 },
    { name:"Sticker",       slug:"sticker",       img:"assets/uploads/2023/11/Sticker.png.jpg",       count:9 },
    { name:"Tape",          slug:"tape",          img:"assets/uploads/2023/11/Tape.png.jpg",          count:6 },
  ],

  blogPosts: [
    { id:1, title:"The Write Tool: Exploring the World of Pencils",   excerpt:"Discover the best writing tools for everyday use. From graphite to mechanical, learn how the right pencil can transform your creative process and note-taking habits.",         image:"assets/uploads/2023/01/blog-1-720x484.jpg", thumb:"assets/uploads/2023/01/blog-1-500x500.jpg", date:"November 5, 2023", tags:["Book Pin","Font Styles"], cat:"Book Pin" },
    { id:2, title:"Neat desk, with Upside Down Mushroom Tray",        excerpt:"Transform your workspace with creative desk accessories. The mushroom tray brings a touch of whimsy while keeping your stationery organized and within reach.",                   image:"assets/uploads/2023/01/blog-2-720x484.jpg", thumb:"assets/uploads/2023/01/blog-2-500x500.jpg", date:"November 18, 2023", tags:["Tips","Art & Flair"], cat:"Tape" },
    { id:3, title:"Crafting with Precision: Rulers as Essential Tools",excerpt:"A good ruler is more than a measuring tool — it's an essential partner for creating clean layouts, perfect margins, and precise artwork in your daily stationery practice.",     image:"assets/uploads/2023/01/blog-3-720x484.jpg", thumb:"assets/uploads/2023/01/blog-3-500x500.jpg", date:"November 18, 2023", tags:["Mindsets","Art & Flair"], cat:"Pencil" },
    { id:4, title:"Books Are The Most Necessary Thing In Life",        excerpt:"Books shape who we are. From fiction to non-fiction, journaling to academic texts — discover how the right stationery enhances your reading and writing experience.",             image:"assets/uploads/2023/01/blog-4.jpg",          thumb:"assets/uploads/2023/01/blog-4.jpg",          date:"August 1, 2023",   tags:["Book Pin","Font Styles"], cat:"Book Pin" },
    { id:5, title:"Post format video blogs",                           excerpt:"Video content meets stationery culture. Explore how creators are blending digital and analog workflows to produce inspiring content around planning, journaling and creativity.",   image:"assets/uploads/2023/01/blog-8.jpg",          thumb:"assets/uploads/2023/01/blog-8.jpg",          date:"November 5, 2023", tags:["Book Pin","Font Styles"], cat:"Tape" },
    { id:6, title:"Post format audio blogs",                           excerpt:"Audio journeys through the world of stationery. Tune in to discover expert tips on bullet journaling, product reviews, and creative techniques you can implement immediately.",    image:"assets/uploads/2023/01/blog-9.jpg",          thumb:"assets/uploads/2023/01/blog-9.jpg",          date:"November 5, 2023", tags:["Tips","Mindsets"], cat:"Pencil" },
  ],

  wishlist: [
    { id:45184, name:"Iconic Masking Tape",   price:"99.00$",  sale:"89.00$",  img:"assets/uploads/2023/05/iconic-masking-tape-3-600x743.jpg",  date:"April 15, 2026" },
    { id:102,   name:"Origin Weekly Planner", price:"120.00$", sale:"110.00$", img:"assets/uploads/2020/12/origin-weekly-planner-3-600x743.jpg",date:"July 12, 2024" },
  ],

  cart: [
    { id:45184, name:"Iconic Masking Tape", price:89, qty:1, img:"assets/uploads/2023/05/iconic-masking-tape-3-600x743.jpg" },
  ],

  slider: [
    { tag:"ARTISTIC IMAGES", title:"Stickers to decorate notebooks", sub:"ARTWORK FORMAT", btn:"Shop Now",
      img1:"assets/uploads/2023/10/slider-5.png", img2:"assets/uploads/2023/10/slider-4.png",
      img3:"assets/uploads/2023/10/slider-3.png", img4:"assets/uploads/2023/10/slider-1.png" },
    { tag:"NEW COLLECTION",  title:"Premium Notebooks for Creatives", sub:"HANDCRAFTED QUALITY", btn:"Shop Now",
      img1:"assets/uploads/2023/10/slider-9.png", img2:"assets/uploads/2023/10/slider-10.png",
      img3:"assets/uploads/2023/10/slider-11.png", img4:"assets/uploads/2023/10/slider-12.png" },
    { tag:"BEST SELLERS",    title:"Discover Unique Stationery Gifts", sub:"CURATED COLLECTION", btn:"Shop Now",
      img1:"assets/uploads/2023/10/slider-6.png",  img2:"assets/uploads/2023/10/slider-7.png",
      img3:"assets/uploads/2023/10/slider-8.png",  img4:"assets/uploads/2023/10/slider-13.png" },
  ],

  features: [
    { icon:"🚚", title:"Free Shipping",     sub:"Free shipping over $100" },
    { icon:"↩️", title:"Refund Policy",    sub:"Refund within 14 days" },
    { icon:"🔒", title:"Secure Payment",   sub:"100% Secure Payment" },
    { icon:"🏷", title:"Discount Coupons", sub:"Voucher up to 10%" },
    { icon:"🛡", title:"Privacy Protection",sub:"Ensure privacy for customers" },
  ],

  promoSections: [
    { title:"Creative Notebook Ideas", sub:"Artistic adventures in notebooks", img:"assets/uploads/2023/08/index-1-1.jpg", btn:"Shop Now" },
    { title:"Creative Notebook Ideas", sub:"Artistic adventures in notebooks", img:"assets/uploads/2023/08/index-2-1.jpg", btn:"Shop Now" },
    { title:"Creative Notebook Ideas", sub:"Artistic adventures in notebooks", img:"assets/uploads/2023/08/index-3-1.jpg", btn:"Shop Now" },
  ],

  featuredProduct: {
    title:"Gel Pen Roller Pen Stationery",
    sub:"Anime Accessories Ballpoint Pens School & Office Writing Supplies Stationery",
    img1:"assets/uploads/2023/08/index-4-1.jpg",
    img2:"assets/uploads/2023/08/index-5-1.jpg",
    btn:"Shop Now"
  }
};

// Cart state
if (!localStorage.getItem('rappod_cart_v2')) {
  localStorage.setItem('rappod_cart_v2', JSON.stringify(RAPPOD.cart));
}
if (!localStorage.getItem('rappod_wishlist_v2')) {
  localStorage.setItem('rappod_wishlist_v2', JSON.stringify(RAPPOD.wishlist));
}

RAPPOD.getCart = () => JSON.parse(localStorage.getItem('rappod_cart_v2') || '[]');
RAPPOD.saveCart = (c) => { localStorage.setItem('rappod_cart_v2', JSON.stringify(c)); RAPPOD.updateCartBadge(); };
RAPPOD.getWishlist = () => JSON.parse(localStorage.getItem('rappod_wishlist_v2') || '[]');
RAPPOD.saveWishlist = (w) => { localStorage.setItem('rappod_wishlist_v2', JSON.stringify(w)); RAPPOD.updateWishlistBadge(); };

RAPPOD.addToCart = (product, qty=1) => {
  const cart = RAPPOD.getCart();
  const idx = cart.findIndex(i => i.id === product.id);
  const price = parseFloat((product.sale || product.price).replace(/[^0-9.]/g,''));
  if (idx >= 0) cart[idx].qty += qty;
  else cart.push({ id:product.id, name:product.name, price, qty, img:product.img });
  RAPPOD.saveCart(cart);
  RAPPOD.showToast(`"${product.name}" added to cart`);
};

RAPPOD.addToWishlist = (product) => {
  const wl = RAPPOD.getWishlist();
  if (!wl.find(i => i.id === product.id)) {
    wl.push({ id:product.id, name:product.name, price:product.price, sale:product.sale, img:product.img, date: new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) });
    RAPPOD.saveWishlist(wl);
    RAPPOD.showToast(`"${product.name}" added to wishlist`);
  }
};

RAPPOD.updateCartBadge = () => {
  const count = RAPPOD.getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-badge').forEach(el => { el.textContent = count; el.style.display = count ? '' : 'none'; });
};
RAPPOD.updateWishlistBadge = () => {
  const count = RAPPOD.getWishlist().length;
  document.querySelectorAll('.wishlist-badge').forEach(el => { el.textContent = count; el.style.display = count ? '' : 'none'; });
};

RAPPOD.showToast = (msg) => {
  let t = document.getElementById('rappod-toast');
  if (!t) { t = document.createElement('div'); t.id='rappod-toast'; document.body.appendChild(t); }
  t.textContent = '✓ ' + msg;
  t.className = 'rappod-toast show';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
};

RAPPOD.stars = (n) => {
  let h = '';
  for (let i=1;i<=5;i++) h += `<i class="star ${i<=n?'filled':''}">★</i>`;
  return `<div class="stars">${h}</div>`;
};

RAPPOD.productCard = (p, opts={}) => `
<div class="product-card" data-id="${p.id}">
  <div class="product-thumb">
    ${p.badge ? `<span class="badge badge-sale">${p.badge}</span>`:''}
    ${p.badge2 ? `<span class="badge badge-hot">${p.badge2}</span>`:''}
    <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='assets/uploads/2020/12/candy-color-4-600x743.jpg'"/></a>
    ${p.img2 ? `<a href="product.html?id=${p.id}"><img src="${p.img2}" alt="${p.name}" class="img-hover" loading="lazy"/></a>` : ''}
    <div class="product-actions">
      <button class="action-btn" onclick='RAPPOD.addToCart(${JSON.stringify(p).replace(/'/g,"&#39;")})' title="Add to Cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></button>
      <button class="action-btn" onclick='RAPPOD.addToWishlist(${JSON.stringify(p).replace(/'/g,"&#39;")})' title="Wishlist"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
      <button class="action-btn" title="Compare"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" y1="12" x2="22" y2="12"/></svg></button>
      <button class="action-btn" title="Quick View" onclick="RAPPOD.quickView(${p.id})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
    </div>
  </div>
  <div class="product-info">
    ${RAPPOD.stars(p.rating)}
    <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
    <div class="price">${p.sale ? `<del>${p.price}</del> <span class="sale-price">${p.sale}</span>` : `<span>${p.price}</span>`}</div>
  </div>
</div>`;

RAPPOD.quickView = (id) => {
  const p = RAPPOD.products.find(x=>x.id===id);
  if (!p) return;
  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div'); modal.id='quick-view-modal'; document.body.appendChild(modal);
  }
  modal.innerHTML = `<div class="qv-overlay" onclick="document.getElementById('quick-view-modal').innerHTML=''"></div>
  <div class="qv-box">
    <button class="qv-close" onclick="document.getElementById('quick-view-modal').innerHTML=''">×</button>
    <div class="qv-img"><img src="${p.img}" alt="${p.name}"/></div>
    <div class="qv-info">
      <h2>${p.name}</h2>
      <div class="price qv-price">${p.sale ? `<del>${p.price}</del> <span class="sale-price">${p.sale}</span>` : p.price}</div>
      <div class="qty-row"><button class="qty-btn" onclick="this.nextElementSibling.value=Math.max(1,+this.nextElementSibling.value-1)">−</button><input type="number" value="1" min="1" class="qty-input"/><button class="qty-btn" onclick="this.previousElementSibling.value=+this.previousElementSibling.value+1">+</button></div>
      <button class="btn-primary full-width" onclick='RAPPOD.addToCart(${JSON.stringify(p)});document.getElementById("quick-view-modal").innerHTML=""'>Add To Cart</button>
      <a href="product.html?id=${p.id}" class="btn-outline full-width" style="margin-top:10px;display:block;text-align:center">View Full Details</a>
    </div>
  </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  RAPPOD.updateCartBadge();
  RAPPOD.updateWishlistBadge();
});
