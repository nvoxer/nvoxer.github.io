/*
  ─────────────────────────────────────────────
  MARGO — Productos
  ─────────────────────────────────────────────

  Para agregar un producto nuevo, copiar un bloque
  del array y completar los campos:

  {
    id:       'slug-unico',           // URL: /product.html?id=slug-unico
    category: 'Luminaria',           // Aparece como eyebrow en el detalle
    name:     'Nombre del producto',
    price:    '$ 00.000',

    // Imágenes: rutas relativas desde la raíz del proyecto.
    // Agregar los archivos en static/images/products/<id>/
    // La primera imagen es la portada del catálogo.
    images: [
      'static/images/products/lampara-01/main.jpg',
      'static/images/products/lampara-01/alt-1.jpg',
      'static/images/products/lampara-01/alt-2.jpg',
    ],

    description: 'Texto largo de descripción del producto.',

    // Acabados disponibles — usar los tokens del design system o hex custom
    // images DE FINISHES es opcional: si se omite, se usa el array images del producto MAIN
    finishes: [
      { name: 'Blanco mate', hex: '#F0EDE8', images: [
        'static/images/products/lampara-01/blanco-main.jpg',
        'static/images/products/lampara-01/blanco-alt.jpg',
      ]},
      { name: 'Negro mate',  hex: '#2A2724', images: [
        'static/images/products/lampara-01/negro-main.jpg',
      ]},
    ],

    // Especificaciones técnicas — pares clave/valor en orden de aparición
    specs: {
      'Material':  'Acero + vidrio soplado',
      'Altura':    '16 cm',
      'Ancho':     '12 cm',
      'Cable':     '120 cm',
      'Potencia':  'E27 / máx. 60W',
    },
  },

  ─────────────────────────────────────────────
*/

const PRODUCTS = [
  {
    id: 'lampara-ponja',
    category: 'Luminaria',
    name: 'Lámpara Ponja',
    price: '$ 58.000',
    images: [
      'static/images/products/lampara-ponja/main.jpg',
      'static/images/products/lampara-ponja/alt-1.jpg',
    ],
    description: 'Lámpara Ponja buenarda, sencilla y elegante. Para ambientes contemporáneos con un toque minimalista.',
    finishes: [
      { name: 'Negro mate',   hex: '#2A2724' },
      { name: 'Latón',        hex: '#B89A5A' },
      { name: 'Terracota',    hex: '#C1694F' },
    ],
    specs: {
      'Material':  'PLA',
      'Altura':    '18 cm',
      'Ancho':     '15 cm',
      'Cable':     '120 cm',
      'Potencia':  'E27 / máx. 10W',
    },
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: 'lampara-ponja-alt',
    category: 'Luminaria',
    name: 'Lámpara Ponja Alt',
    price: '$ 50.000',
    images: [
      'static/images/products/lampara-ponja-alt/main.jpg',
    ],
    description: 'Lámpara Ponja buenarda, sencilla y elegante. Para ambientes contemporáneos con un toque minimalista.',
    finishes: [
      { name: 'Negro mate',   hex: '#2A2724' },
      { name: 'Latón',        hex: '#B89A5A' },
      { name: 'Terracota',    hex: '#C1694F' },
    ],
    specs: {
      'Material':  'PLA',
      'Altura':    '18 cm',
      'Ancho':     '15 cm',
      'Cable':     '120 cm',
      'Potencia':  'E27 / máx. 10W',
    },
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

];
