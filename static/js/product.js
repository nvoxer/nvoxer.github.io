/* ─────────────────────────────────────────────
   MARGO — Detalle de producto
   Lee ?id=<slug> de la URL, busca en PRODUCTS
   y renderiza la página completa.
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    window.location.href = 'index.html';
    return;
  }

  document.title = `margo — ${product.name}`;
  renderProduct(product);
});

function renderProduct(product) {
  document.getElementById('p-category').textContent = product.category;
  document.getElementById('p-name').textContent     = product.name;
  document.getElementById('p-price').textContent    = product.price;
  document.getElementById('p-desc').textContent     = product.description;

  loadGallery(product.images);
  renderFinishes(product);
  renderSpecs(product);
  initCopyBtn(product);
}

/* ── Galería ── */
let galleryState = { current: 0, images: [] };

function loadGallery(images) {
  const mainImg  = document.getElementById('gallery-main-img');
  const thumbsEl = document.getElementById('gallery-thumbs');

  galleryState.images  = images;
  galleryState.current = 0;

  mainImg.src = images[0];
  mainImg.alt = '';

  thumbsEl.innerHTML = '';
  images.forEach((src, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
    thumb.innerHTML = `<img src="${src}" alt="Vista ${i + 1}" loading="lazy" onerror="this.closest('.gallery-thumb').style.display='none';">`;
    thumb.addEventListener('click', () => setSlide(i));
    thumbsEl.appendChild(thumb);
  });
}

function setSlide(idx) {
  const { images } = galleryState;
  galleryState.current = (idx + images.length) % images.length;
  document.getElementById('gallery-main-img').src = images[galleryState.current];
  document.getElementById('gallery-thumbs').querySelectorAll('.gallery-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === galleryState.current);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('arrow-prev').addEventListener('click', () => setSlide(galleryState.current - 1));
  document.getElementById('arrow-next').addEventListener('click', () => setSlide(galleryState.current + 1));
});

/* ── Acabados ── */
function renderFinishes(product) {
  const grid  = document.getElementById('finishes-grid');
  const label = document.getElementById('finish-selected');

  if (!product.finishes || product.finishes.length === 0) {
    document.getElementById('finishes-section').style.display = 'none';
    return;
  }

  label.textContent = product.finishes[0].name;
  grid.innerHTML = '';

  product.finishes.forEach((finish, i) => {
    const sw = document.createElement('div');
    sw.className = 'swatch' + (i === 0 ? ' active' : '');
    sw.style.background = finish.hex;
    sw.title = finish.name;

    sw.addEventListener('click', () => {
      grid.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      label.textContent = finish.name;

      const images = finish.images && finish.images.length > 0
        ? finish.images
        : product.images;
      loadGallery(images);
    });

    grid.appendChild(sw);
  });

  // Cargar imágenes del primer finish si tiene las propias
  if (product.finishes[0].images && product.finishes[0].images.length > 0) {
    loadGallery(product.finishes[0].images);
  }
}

/* ── Especificaciones ── */
function renderSpecs(product) {
  const list = document.getElementById('specs-list');

  if (!product.specs || Object.keys(product.specs).length === 0) {
    document.getElementById('specs-section').style.display = 'none';
    return;
  }

  list.innerHTML = Object.entries(product.specs).map(([key, val]) => `
    <div class="spec-row">
      <span class="spec-key">${key}</span>
      <span class="spec-val">${val}</span>
    </div>
  `).join('');
}

/* ── Botón copiar consulta ── */
function initCopyBtn(product) {
  const btn     = document.getElementById('copy-btn');
  const confirm = document.getElementById('copy-confirm');

  btn.addEventListener('click', () => {
    const finish = document.getElementById('finish-selected')?.textContent || '—';
    const msg = [
      'Hola, me interesa consultar disponibilidad:',
      '',
      `Producto: ${product.name}`,
      `Acabado: ${finish}`,
      `Precio de referencia: ${product.price}`,
    ].join('\n');

    navigator.clipboard.writeText(msg).then(() => {
      confirm.style.opacity = '1';
      setTimeout(() => { confirm.style.opacity = '0'; }, 2500);
    });
  });
}
