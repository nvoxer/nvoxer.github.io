let pagina = 1;

async function obtenerTopAnimes() {
  try {
    const contenedorAnime = document.getElementById("animecontainer");
    contenedorAnime.innerHTML = "";

    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8&page=${pagina}`);
    const json = await response.json();

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    json.data.forEach(anime => {
      const box = document.createElement("div");
      box.className = "box";

      const estaFavorito = favoritos.some(fav => fav.id === anime.mal_id);

      box.innerHTML = `
        <p style="text-align: center; font-weight: bold;">${anime.title}</p>
        <a href="${anime.url}" target="_blank">
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" class="anime-img">
        </a>
        <p>🏆 <strong>Ranking:</strong> ${anime.rank}</p>
        <p>⭐ <strong>Puntuación:</strong> ${anime.score}</p>
        <p>🎬 <strong>Episodios:</strong> ${anime.episodes ?? "-"}</p>
        <button onclick="agregarAFavoritos(${anime.mal_id}, '${anime.title}', '${anime.images.jpg.image_url}', '${anime.url}')" 
          id="fav${anime.mal_id}"
          ${estaFavorito ? "disabled" : ""}>
          ${estaFavorito ? "✅ Guardado" : "⭐ Agregar a favoritos"}
        </button>
      `;

      contenedorAnime.append(box);
    });

    document.getElementById("paginaActual").textContent = pagina;
    actualizarNumeroPagina(pagina);

  } catch (error) {
    console.error("Error al obtener los top animes:", error);
  }
}


function cambiarPagina(contador) {
  pagina += contador;
  if (pagina < 1) pagina = 1;
  obtenerTopAnimes(pagina);
}
let favoritosVisibles = false;

function agregarAFavoritos(id, titulo, imagen, url) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  //ver si ya esta existe en fav
  const yaExiste = favoritos.some(fav => fav.id === id);
  if (yaExiste) return; //no hace nada si ya esta

  favoritos.push({ id, titulo, imagen, url });
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  const botonAgregar = document.getElementById(`fav${id}`);
  if (botonAgregar) {
    botonAgregar.textContent = "✅ Guardado";
    botonAgregar.disabled = true;
  }
  if (favoritosVisibles) {
    verFavoritos(); 
  }
}


function verFavoritos() {
  const contenedor = document.getElementById("verFavoritosContainer");
  //visibilidad de contenedor
  if (contenedor.classList.contains("verFavoritosContaineroculto")) {
    contenedor.classList.remove("verFavoritosContaineroculto");
    contenedor.classList.add("verFavoritosContainer");
  } else {
    contenedor.classList.remove("verFavoritosContainer");
    contenedor.classList.add("verFavoritosContaineroculto");
  }

  if (favoritosVisibles) {
    contenedor.innerHTML = "";  // limpiar todo
    favoritosVisibles = false;
  } else {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    contenedor.innerHTML = ""; // limpiar

    if (favoritos.length === 0) {
      contenedor.textContent = "No hay favoritos.";
    } else {
      favoritos.forEach(fav => {
        const box = document.createElement("div");
        box.className = "boxfav";
        box.innerHTML = `
          <p style="text-align: center; font-weight: bold;">${fav.titulo}</p>
          <a href="${fav.url}" target="_blank">
            <img src="${fav.imagen}" alt="${fav.titulo}">
          </a>
          <button onclick="eliminarFavorito(${fav.id})">Eliminar</button>
        `;
        contenedor.append(box);
      });
    }

    favoritosVisibles = true;
  }
}

function eliminarFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const nuevosFavoritos = favoritos.filter(fav => fav.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));

  const box = document.querySelector(`.boxfav button[onclick="eliminarFavorito(${id})"]`)?.parentElement;
  if (box) box.remove();
}



document.addEventListener("DOMContentLoaded", () => {
  obtenerTopAnimes();

  document.getElementById("prevPage").addEventListener("click", () => cambiarPagina(-1));
  document.getElementById("nextPage").addEventListener("click", () => cambiarPagina(1));
  document.getElementById("prevPage2").addEventListener("click", () => cambiarPagina(-1));
  document.getElementById("nextPage2").addEventListener("click", () => cambiarPagina(1));
});
function actualizarNumeroPagina(pagina) {
  document.getElementById("paginaActual").textContent = pagina;
  document.getElementById("paginaActual2").textContent = pagina;
}
