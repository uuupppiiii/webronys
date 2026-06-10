/* ================================================
   RONY'S FRIED CHICKEN – app.js
   ================================================ */

'use strict';

// ===================== DATA =====================

const DEFAULT_MENU = [
  { id: 1, name: "Paket Ayam Crispy + Nasi", category: "paket", price: 18000, description: "1 potong ayam crispy renyah disajikan dengan nasi putih hangat. Pilih bagian: paha, dada, atau sayap.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", badge: "Terlaris", available: true },
  { id: 2, name: "Paket Ayam Crispy + Es Teh", category: "paket", price: 15000, description: "1 potong ayam crispy renyah dipadu es teh manis segar. Combo hemat untuk makan siang!", image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=400&h=300&fit=crop", badge: "Hemat", available: true },
  { id: 3, name: "Ayam Crispy Satuan", category: "ayam", price: 12000, description: "Ayam goreng crispy dengan bumbu rempah khas Rony's. Renyah di luar, juicy di dalam.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", badge: "", available: true },
  { id: 4, name: "Paket Keluarga", category: "paket", price: 85000, description: "6 potong ayam crispy + 4 nasi + 2 kentang goreng + 4 es teh. Pas untuk makan bersama keluarga!", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", badge: "Favorit", available: true },
  { id: 5, name: "Kentang Goreng", category: "snack", price: 8000, description: "Kentang goreng renyah dengan taburan bumbu spesial. Cocok jadi pelengkap atau camilan.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", badge: "", available: true },
  { id: 6, name: "Burger Ayam", category: "burger", price: 16000, description: "Burger dengan patty ayam crispy, selada segar, tomat, dan saus spesial dalam roti sesame bun.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", badge: "Baru", available: true },
  { id: 7, name: "Es Teh Manis", category: "minuman", price: 5000, description: "Teh manis segar dengan es batu yang bikin dahaga hilang seketika.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop", badge: "", available: true },
  { id: 8, name: "Es Jeruk", category: "minuman", price: 7000, description: "Jeruk peras segar dengan es batu, manis dan menyegarkan. Vitamin C alami!", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop", badge: "", available: true },
  { id: 9, name: "Paket Duo Crispy", category: "paket", price: 32000, description: "2 potong ayam crispy + 2 nasi putih + 2 es teh. Cocok untuk makan berdua!", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", badge: "Promo", available: true },
  { id: 10, name: "Nasi Putih", category: "snack", price: 4000, description: "Nasi putih pulen hangat, pelengkap sempurna untuk ayam crispy Rony's.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop", badge: "", available: true }
];

const DEFAULT_TESTIMONI = [
  { id: 1, name: "Siti Rahayu", avatar: "SR", rating: 5, comment: "Ayamnya beneran crispy banget! Bumbunya meresap sampai ke dalam. Harganya juga ramah di kantong, cocok banget buat makan keluarga. Pasti balik lagi!", date: "2025-05-15", location: "Bandung" },
  { id: 2, name: "Budi Santoso", avatar: "BS", rating: 5, comment: "Paket keluarga recommended banget! Porsinya besar, harga terjangkau, dan yang pasti ayamnya selalu fresh. Sudah jadi langganan tetap keluarga saya.", date: "2025-05-20", location: "Bandung" },
  { id: 3, name: "Dewi Anggraini", avatar: "DA", rating: 5, comment: "Burger ayamnya juara! Renyah, sausnya enak, dan harganya murah meriah. Pelayanan juga ramah dan cepat. 5 bintang layak banget!", date: "2025-05-22", location: "Cimahi" },
  { id: 4, name: "Ahmad Fauzi", avatar: "AF", rating: 4, comment: "Rasanya konsisten setiap kali ke sini. Ayam crispy-nya memang beda dari yang lain, ada cita rasa khasnya. Kentang gorengnya juga enak!", date: "2025-06-01", location: "Bandung" },
  { id: 5, name: "Rina Wulandari", avatar: "RW", rating: 5, comment: "Favorit anak-anak saya! Setiap weekend pasti request Rony's. Ayamnya tidak terlalu berminyak, renyahnya awet lama. Recommended untuk keluarga!", date: "2025-06-05", location: "Padalarang" },
  { id: 6, name: "Hendro Pratama", avatar: "HP", rating: 5, comment: "Harga bersahabat tapi kualitas tidak murahan. Paket duo crispy jadi pilihan saya dan istri. Selalu puas setiap makan di sini!", date: "2025-06-08", location: "Bandung" }
];

const DEFAULT_GALLERY = [
  { id: 1, src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=450&fit=crop", caption: "Ayam Crispy Rony's" },
  { id: 2, src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=450&fit=crop", caption: "Paket Lengkap" },
  { id: 3, src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=450&fit=crop", caption: "Kentang Goreng" },
  { id: 4, src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=450&fit=crop", caption: "Burger Ayam Crispy" },
  { id: 5, src: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=600&h=450&fit=crop", caption: "Paket Combo" },
  { id: 6, src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=450&fit=crop", caption: "Es Teh Segar" },
  { id: 7, src: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=450&fit=crop", caption: "Minuman Segar" },
  { id: 8, src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=450&fit=crop", caption: "Nasi Putih Hangat" }
];

// ===================== STATE =====================

let menuData = [];
let testimoniData = [];
let galleryData = [];
let currentCategory = 'all';
let currentSearch = '';
let sliderIndex = 0;
let sliderTimer = null;
let lightboxIndex = 0;
let editingMenuId = null;
let editingTestimoniId = null;

// ===================== UTILS =====================

function rupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function stars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => { t.className = 'toast'; }, 3000);
}

function getLS(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}

function setLS(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function nextId(arr) {
  return arr.length ? Math.max(...arr.map(i => i.id)) + 1 : 1;
}

// ===================== LOADING =====================

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 2000);
});

// ===================== DARK MODE =====================

(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  updateToggleIcon(saved);
})();

function updateToggleIcon(theme) {
  const btn = document.getElementById('dark-mode-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleIcon(next);
});

// ===================== NAVBAR =====================

const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const btt = document.getElementById('back-to-top');
  if (window.scrollY > 400) btt.classList.add('visible');
  else btt.classList.remove('visible');
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================== FOOTER YEAR =====================

document.getElementById('footer-year').textContent = new Date().getFullYear();

// ===================== SCROLL ANIMATIONS =====================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('animated'), 80);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// ===================== MENU =====================

function loadMenu() {
  menuData = getLS('rfc_menu', DEFAULT_MENU);
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const empty = document.getElementById('menu-empty');

  let filtered = menuData.filter(m => {
    const catOk = currentCategory === 'all' || m.category === currentCategory;
    const searchOk = !currentSearch || m.name.toLowerCase().includes(currentSearch.toLowerCase()) || m.description.toLowerCase().includes(currentSearch.toLowerCase());
    return catOk && searchOk && m.available;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = filtered.map(m => {
    const badgeClass = m.badge ? `badge-${m.badge.toLowerCase().replace(/[^a-z]/g,'')}` : '';
    return `
      <div class="menu-card" data-animate="fade-up">
        <div class="menu-card-img">
          <img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop'">
          ${m.badge ? `<span class="menu-badge ${badgeClass}">${m.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${m.name}</div>
          <p class="menu-card-desc">${m.description}</p>
          <div class="menu-card-footer">
            <span class="menu-price">${rupiah(m.price)}</span>
            <a href="https://wa.me/628522244425?text=Halo%20Rony's%2C%20saya%20mau%20pesan%20${encodeURIComponent(m.name)}%20seharga%20${encodeURIComponent(rupiah(m.price))}"
               target="_blank" class="menu-order-btn" title="Pesan ${m.name}">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('[data-animate]').forEach((el, i) => {
    el.style.transitionDelay = (i * 60) + 'ms';
    observer.observe(el);
  });
}

// Filter buttons
document.getElementById('menu-filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCategory = btn.dataset.cat;
  renderMenu();
});

// Search
const searchInput = document.getElementById('menu-search');
const searchClear = document.getElementById('menu-search-clear');

searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value.trim();
  searchClear.classList.toggle('visible', currentSearch.length > 0);
  renderMenu();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  searchClear.classList.remove('visible');
  renderMenu();
  searchInput.focus();
});

// ===================== GALLERY =====================

function loadGallery() {
  galleryData = getLS('rfc_gallery', DEFAULT_GALLERY);
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = galleryData.map((g, i) => `
    <div class="gallery-item" data-animate="fade-up" style="transition-delay:${i * 60}ms" onclick="openLightbox(${i})">
      <img src="${g.src}" alt="${g.caption}" loading="lazy">
      <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
      <div class="gallery-caption">${g.caption}</div>
    </div>`).join('');
  grid.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ===================== LIGHTBOX =====================

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

function updateLightbox() {
  const g = galleryData[lightboxIndex];
  document.getElementById('lightbox-img').src = g.src;
  document.getElementById('lightbox-img').alt = g.caption;
  document.getElementById('lightbox-caption').textContent = g.caption;
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
});
document.querySelector('.lightbox-next').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % galleryData.length;
  updateLightbox();
});

document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').style.display !== 'flex') return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + galleryData.length) % galleryData.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % galleryData.length; updateLightbox(); }
});

// ===================== TESTIMONIAL SLIDER =====================

function loadTestimoni() {
  testimoniData = getLS('rfc_testimoni', DEFAULT_TESTIMONI);
  renderTestimoni();
}

function renderTestimoni() {
  const slider = document.getElementById('testimonial-slider');
  const dots = document.getElementById('slider-dots');

  slider.innerHTML = testimoniData.map(t => `
    <div class="testi-card">
      <div class="testi-quote">"</div>
      <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testi-comment">"${t.comment}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.avatar}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-location"><i class="fas fa-map-marker-alt" style="color:var(--red);font-size:11px"></i> ${t.location}</div>
        </div>
      </div>
    </div>`).join('');

  dots.innerHTML = testimoniData.map((_, i) => `
    <div class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`).join('');

  sliderIndex = 0;
  updateSlider();
  startAutoSlide();
}

function getSlideWidth() {
  const card = document.querySelector('.testi-card');
  if (!card) return 364;
  return card.offsetWidth + 24; // card + margin
}

function updateSlider() {
  const slider = document.getElementById('testimonial-slider');
  slider.style.transform = `translateX(-${sliderIndex * getSlideWidth()}px)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === sliderIndex);
  });
}

function goToSlide(i) {
  sliderIndex = Math.max(0, Math.min(i, testimoniData.length - 1));
  updateSlider();
  resetAutoSlide();
}

function startAutoSlide() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => {
    sliderIndex = (sliderIndex + 1) % testimoniData.length;
    updateSlider();
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(sliderTimer);
  startAutoSlide();
}

document.getElementById('slider-prev').addEventListener('click', () => {
  sliderIndex = (sliderIndex - 1 + testimoniData.length) % testimoniData.length;
  updateSlider(); resetAutoSlide();
});
document.getElementById('slider-next').addEventListener('click', () => {
  sliderIndex = (sliderIndex + 1) % testimoniData.length;
  updateSlider(); resetAutoSlide();
});

// ===================== CONTACT FORM =====================

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('c-name').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  const subject = document.getElementById('c-subject').value;
  const message = document.getElementById('c-message').value.trim();

  if (!name || !phone || !message) {
    showToast('Mohon isi semua field yang wajib!', 'error');
    return;
  }

  const waMsg = `Halo Rony's Fried Chicken!%0A%0ANama: ${encodeURIComponent(name)}%0ATelepon: ${encodeURIComponent(phone)}%0ASubjek: ${encodeURIComponent(subject || 'Pertanyaan Umum')}%0APesan: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/628522244425?text=${waMsg}`, '_blank');
  this.reset();
  showToast('Mengarahkan ke WhatsApp...', 'success');
});

// ===================== ADMIN =====================

const ADMIN_PASS = 'admin123';

function adminLogin() {
  const pw = document.getElementById('admin-password').value;
  if (pw === ADMIN_PASS) {
    document.getElementById('admin-login-wrap').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    renderAdminMenu();
    renderAdminGallery();
    renderAdminTestimoni();
    showToast('Login berhasil!', 'success');
  } else {
    showToast('Password salah!', 'error');
  }
}

function adminLogout() {
  document.getElementById('admin-login-wrap').style.display = 'block';
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('admin-password').value = '';
  showToast('Berhasil logout');
}

// Admin Tabs
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// --- ADMIN MENU ---
function renderAdminMenu() {
  const tbody = document.getElementById('admin-menu-tbody');
  tbody.innerHTML = menuData.map(m => `
    <tr>
      <td><img src="${m.image}" alt="${m.name}"></td>
      <td>${m.name}</td>
      <td>${m.category}</td>
      <td>${rupiah(m.price)}</td>
      <td>
        <div class="admin-action-btns">
          <button class="admin-edit-btn" onclick="editMenu(${m.id})"><i class="fas fa-edit"></i></button>
          <button class="admin-del-btn" onclick="deleteMenu(${m.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

function openMenuModal(id = null) {
  editingMenuId = id;
  const item = id ? menuData.find(m => m.id === id) : null;
  document.getElementById('modal-title').textContent = id ? 'Edit Menu' : 'Tambah Menu';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>Nama Menu *</label>
      <input type="text" id="m-name" value="${item ? item.name : ''}" placeholder="Nama menu" required>
    </div>
    <div class="form-group">
      <label>Kategori *</label>
      <select id="m-cat">
        ${['paket','ayam','burger','snack','minuman'].map(c => `<option value="${c}" ${item && item.category === c ? 'selected' : ''}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Harga (Rp) *</label>
      <input type="number" id="m-price" value="${item ? item.price : ''}" placeholder="15000" min="0" required>
    </div>
    <div class="form-group">
      <label>Deskripsi</label>
      <textarea id="m-desc" rows="3">${item ? item.description : ''}</textarea>
    </div>
    <div class="form-group">
      <label>URL Foto</label>
      <input type="url" id="m-img" value="${item ? item.image : ''}" placeholder="https://...">
    </div>
    <div class="form-group">
      <label>Badge (opsional)</label>
      <input type="text" id="m-badge" value="${item ? item.badge : ''}" placeholder="Terlaris, Baru, Promo...">
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="m-avail" ${!item || item.available ? 'checked' : ''}> Tampilkan di menu
      </label>
    </div>
    <button class="btn btn-primary btn-full" onclick="saveMenu()">
      <i class="fas fa-save"></i> ${id ? 'Simpan Perubahan' : 'Tambah Menu'}
    </button>`;
  document.getElementById('modal').style.display = 'flex';
}

function editMenu(id) { openMenuModal(id); }

function saveMenu() {
  const name = document.getElementById('m-name').value.trim();
  const cat = document.getElementById('m-cat').value;
  const price = parseInt(document.getElementById('m-price').value);
  const desc = document.getElementById('m-desc').value.trim();
  const img = document.getElementById('m-img').value.trim();
  const badge = document.getElementById('m-badge').value.trim();
  const available = document.getElementById('m-avail').checked;

  if (!name || !price) { showToast('Nama dan harga wajib diisi!', 'error'); return; }

  if (editingMenuId) {
    const idx = menuData.findIndex(m => m.id === editingMenuId);
    if (idx !== -1) menuData[idx] = { ...menuData[idx], name, category: cat, price, description: desc, image: img || menuData[idx].image, badge, available };
    showToast('Menu berhasil diperbarui!', 'success');
  } else {
    menuData.push({ id: nextId(menuData), name, category: cat, price, description: desc, image: img || 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop', badge, available });
    showToast('Menu berhasil ditambahkan!', 'success');
  }

  setLS('rfc_menu', menuData);
  renderMenu();
  renderAdminMenu();
  closeModal();
}

function deleteMenu(id) {
  if (!confirm('Hapus menu ini?')) return;
  menuData = menuData.filter(m => m.id !== id);
  setLS('rfc_menu', menuData);
  renderMenu();
  renderAdminMenu();
  showToast('Menu berhasil dihapus!');
}

// --- ADMIN GALLERY ---
function renderAdminGallery() {
  const grid = document.getElementById('admin-gallery-grid');
  grid.innerHTML = galleryData.map(g => `
    <div class="admin-gal-item">
      <img src="${g.src}" alt="${g.caption}">
      <button class="admin-gal-del" onclick="deleteGallery(${g.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');
}

function openGalleryModal() {
  document.getElementById('modal-title').textContent = 'Tambah Foto Galeri';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>URL Foto *</label>
      <input type="url" id="g-src" placeholder="https://..." required>
    </div>
    <div class="form-group">
      <label>Keterangan Foto</label>
      <input type="text" id="g-caption" placeholder="Deskripsi foto">
    </div>
    <div id="g-preview" style="margin-bottom:16px;border-radius:8px;overflow:hidden;display:none;">
      <img id="g-preview-img" style="width:100%;max-height:200px;object-fit:cover;">
    </div>
    <button class="btn btn-outline-red" type="button" onclick="previewGallery()" style="margin-bottom:12px;width:100%">
      <i class="fas fa-eye"></i> Preview Foto
    </button>
    <button class="btn btn-primary btn-full" onclick="saveGallery()">
      <i class="fas fa-plus"></i> Tambah ke Galeri
    </button>`;
  document.getElementById('modal').style.display = 'flex';
}

function previewGallery() {
  const src = document.getElementById('g-src').value.trim();
  if (!src) { showToast('Masukkan URL foto terlebih dahulu!', 'error'); return; }
  const preview = document.getElementById('g-preview');
  document.getElementById('g-preview-img').src = src;
  preview.style.display = 'block';
}

function saveGallery() {
  const src = document.getElementById('g-src').value.trim();
  const caption = document.getElementById('g-caption').value.trim();
  if (!src) { showToast('URL foto wajib diisi!', 'error'); return; }
  galleryData.push({ id: nextId(galleryData), src, caption: caption || 'Foto Produk' });
  setLS('rfc_gallery', galleryData);
  renderGallery();
  renderAdminGallery();
  closeModal();
  showToast('Foto berhasil ditambahkan!', 'success');
}

function deleteGallery(id) {
  if (!confirm('Hapus foto ini?')) return;
  galleryData = galleryData.filter(g => g.id !== id);
  setLS('rfc_gallery', galleryData);
  renderGallery();
  renderAdminGallery();
  showToast('Foto berhasil dihapus!');
}

// --- ADMIN TESTIMONI ---
function renderAdminTestimoni() {
  const tbody = document.getElementById('admin-testimoni-tbody');
  tbody.innerHTML = testimoniData.map(t => `
    <tr>
      <td>${t.name}<br><small style="color:var(--text-light)">${t.location}</small></td>
      <td><span style="color:#E6B800">${'★'.repeat(t.rating)}</span></td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.comment}</td>
      <td>
        <div class="admin-action-btns">
          <button class="admin-edit-btn" onclick="editTestimoni(${t.id})"><i class="fas fa-edit"></i></button>
          <button class="admin-del-btn" onclick="deleteTestimoni(${t.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

function openTestimoniModal(id = null) {
  editingTestimoniId = id;
  const item = id ? testimoniData.find(t => t.id === id) : null;
  document.getElementById('modal-title').textContent = id ? 'Edit Testimoni' : 'Tambah Testimoni';
  document.getElementById('modal-body').innerHTML = `
    <div class="form-group">
      <label>Nama Pelanggan *</label>
      <input type="text" id="t-name" value="${item ? item.name : ''}" placeholder="Nama pelanggan">
    </div>
    <div class="form-group">
      <label>Kota</label>
      <input type="text" id="t-loc" value="${item ? item.location : ''}" placeholder="Bandung">
    </div>
    <div class="form-group">
      <label>Rating</label>
      <select id="t-rating">
        ${[5,4,3,2,1].map(r => `<option value="${r}" ${item && item.rating === r ? 'selected' : ''}>${'★'.repeat(r)} (${r} bintang)</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Komentar *</label>
      <textarea id="t-comment" rows="4" placeholder="Tulis komentar pelanggan...">${item ? item.comment : ''}</textarea>
    </div>
    <button class="btn btn-primary btn-full" onclick="saveTestimoni()">
      <i class="fas fa-save"></i> ${id ? 'Simpan Perubahan' : 'Tambah Testimoni'}
    </button>`;
  document.getElementById('modal').style.display = 'flex';
}

function editTestimoni(id) { openTestimoniModal(id); }

function saveTestimoni() {
  const name = document.getElementById('t-name').value.trim();
  const loc = document.getElementById('t-loc').value.trim();
  const rating = parseInt(document.getElementById('t-rating').value);
  const comment = document.getElementById('t-comment').value.trim();

  if (!name || !comment) { showToast('Nama dan komentar wajib diisi!', 'error'); return; }

  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  if (editingTestimoniId) {
    const idx = testimoniData.findIndex(t => t.id === editingTestimoniId);
    if (idx !== -1) testimoniData[idx] = { ...testimoniData[idx], name, location: loc, rating, comment, avatar: initials };
    showToast('Testimoni berhasil diperbarui!', 'success');
  } else {
    testimoniData.push({ id: nextId(testimoniData), name, location: loc || 'Indonesia', rating, comment, avatar: initials, date: new Date().toISOString().slice(0, 10) });
    showToast('Testimoni berhasil ditambahkan!', 'success');
  }

  setLS('rfc_testimoni', testimoniData);
  renderTestimoni();
  renderAdminTestimoni();
  closeModal();
}

function deleteTestimoni(id) {
  if (!confirm('Hapus testimoni ini?')) return;
  testimoniData = testimoniData.filter(t => t.id !== id);
  setLS('rfc_testimoni', testimoniData);
  renderTestimoni();
  renderAdminTestimoni();
  showToast('Testimoni berhasil dihapus!');
}

// ===================== MODAL =====================

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  editingMenuId = null;
  editingTestimoniId = null;
}

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  loadGallery();
  loadTestimoni();

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');

  const secObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => secObserver.observe(s));
});

// Make functions global
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.openMenuModal = openMenuModal;
window.editMenu = editMenu;
window.saveMenu = saveMenu;
window.deleteMenu = deleteMenu;
window.openGalleryModal = openGalleryModal;
window.saveGallery = saveGallery;
window.previewGallery = previewGallery;
window.deleteGallery = deleteGallery;
window.openTestimoniModal = openTestimoniModal;
window.editTestimoni = editTestimoni;
window.saveTestimoni = saveTestimoni;
window.deleteTestimoni = deleteTestimoni;
window.closeModal = closeModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.goToSlide = goToSlide;
