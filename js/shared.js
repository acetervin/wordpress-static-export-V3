/* shared.js — Header, Footer, ScrollTop injection */

function buildHeader(activePage='') {
  const nav = [
    { label:'Home',     href:'../index.html',   key:'home' },
    { label:'Shop',     href:'../shop.html',     key:'shop',    children:['All Products','New Arrivals','Best Sellers','Featured'] },
    { label:'Products', href:'../product.html',  key:'product', children:['Notebooks','Pencils','Stickers','Tape','Accessories'] },
    { label:'Blog',     href:'../blog.html',     key:'blog',    children:['All Posts','Tips & Guides','Product Reviews'] },
    { label:'Page',     href:'#',               key:'page',    children:['Wishlist','Cart','FAQ','About Us','Contact'] },
  ];

  const navHTML = nav.map(n => `
    <li class="nav-item">
      <a href="${n.href}" class="nav-link${activePage===n.key?' active':''}">
        ${n.label}
        ${n.children ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>` : ''}
      </a>
      ${n.children ? `<ul class="nav-dropdown">${n.children.map(c=>`<li><a href="#">${c}</a></li>`).join('')}</ul>` : ''}
    </li>`).join('');

  return `
  <div class="topbar">
    <div class="topbar-container container">
      <span class="topbar-sale">Summer Sale Discount 50% Off.</span>
      <div class="topbar-right">
        <a href="tel:+18003544321">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +1800 354 4321
        </a>
        <span class="topbar-sep">|</span>
        <a href="mailto:support@rappod.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          support@rappod.com
        </a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="header-container container">
      <a href="../index.html" class="logo">
        <img src="assets/uploads/2023/10/logo.png" alt="Rappod" onerror="this.style.display='none'"/>
      </a>
      <nav>
        <ul class="main-nav">${navHTML}</ul>
      </nav>
      <div class="header-icons">
        <button class="icon-btn" onclick="toggleSearch()" title="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="icon-btn" title="Account">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <a href="../wishlist.html" class="icon-btn" title="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span class="icon-badge wishlist-badge" style="display:none">0</span>
        </a>
        <a href="../cart.html" class="icon-btn" title="Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="icon-badge cart-badge" style="display:none">0</span>
        </a>
      </div>
    </div>
  </header>
  <div id="search-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2000;align-items:flex-start;padding-top:80px;" onclick="if(event.target===this)toggleSearch()">
    <div style="max-width:600px;margin:0 auto;width:92%;display:flex;gap:0;border-radius:30px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.2);">
      <input type="text" placeholder="Search products..." style="flex:1;padding:16px 24px;border:none;font-size:16px;outline:none;" onkeydown="if(event.key==='Escape')toggleSearch()"/>
      <button style="background:var(--accent);color:#fff;border:none;padding:16px 24px;font-size:15px;font-weight:600;" onclick="toggleSearch()">Search</button>
    </div>
  </div>`;
}

function buildFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">Visit Us</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Events &amp; Workshops</a></li>
          <li><a href="#">Corporate &amp; Bespoke</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Customer Services</h4>
        <ul>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Shipping Info</a></li>
          <li><a href="#">Recalls &amp; Advisories</a></li>
          <li><a href="#">Pet Store Locator</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Student Discount</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Sign Up To Our Newsletter</h4>
        <p style="font-size:13px;color:#888;margin-bottom:12px;">Subscribe to receive updates, access to exclusive deals.</p>
        <div class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Enter your email..."/>
          <button class="newsletter-btn" onclick="alert('Thank you for subscribing!')">Subscribe</button>
        </div>
        <p style="font-size:13px;font-weight:600;margin-top:20px;margin-bottom:10px;">We Accepted:</p>
        <div class="payment-icons">
          <div class="payment-icon" style="background:#1a1f71;color:#fff;font-size:8px;font-weight:800;">AMEX</div>
          <div class="payment-icon" style="background:#EB001B;color:#fff;font-size:9px;">●</div>
          <div class="payment-icon" style="background:#1a1f71;color:#fff;font-size:9px;font-weight:800;">VISA</div>
          <div class="payment-icon" style="background:#003087;color:#fff;font-size:8px;font-weight:800;">PP</div>
          <div class="payment-icon" style="background:#5bc4a4;color:#fff;font-size:7px;font-weight:800;">OPAY</div>
          <div class="payment-icon" style="background:#ffb3c7;color:#c0392b;font-size:8px;font-weight:800;">Klarna</div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid #eee;">
      <div class="footer-bottom container">
        <span class="footer-copyright">© 2023 - Rappod All Rights Reserved.</span>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.19a8.16 8.16 0 0 0 4.77 1.52V6.23a4.85 4.85 0 0 1-1-.54z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="#" aria-label="Behance"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.945L12 13.505c3.318 1.428 3.277 8.483-5.534 8.483zm-4.791-7.613h3.455c4.208.086 4.208-6.042 0-6.042H1.675v6.042zm0 4.68h3.584c4.209.085 4.209-6.97 0-6.97H1.675v6.97z"/></svg></a>
        </div>
        <div class="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-logo" style="padding:20px;text-align:center;color:#ccc;font-size:1.6rem;">rappod</div>`;
}

function toggleSearch() {
  const o = document.getElementById('search-overlay');
  if (o) { o.style.display = o.style.display === 'none' ? 'flex' : 'none'; if(o.style.display==='flex') o.querySelector('input').focus(); }
}

// Scroll to top
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('scroll-top-btn');
  if (btn) {
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 300));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
