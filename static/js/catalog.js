/* ─────────────────────────────────────────────
   MARGO — Catálogo
   Lee PRODUCTS desde data/products.js y construye
   la grilla. Cada card linkea a product.html?id=<id>
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');

  PRODUCTS.forEach(product => {
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = `product.html?id=${product.id}`;

    card.innerHTML = `
      <div class="product-card-img">
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.parentElement.style.background='var(--color-img-placeholder)';this.remove();"
        >
      </div>
      <div class="product-card-body">
        <span class="product-card-name">${product.name}</span>
        <span class="product-card-price">${product.price}</span>
      </div>
    `;

    grid.appendChild(card);
  });
});
