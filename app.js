// ===== Inicialización del mapa =====
const map = L.map('map').setView([-12.0850, -77.0300], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// ===== Iconos personalizados por categoría =====
const colores = {
  parque: '#27ae60',
  museo: '#8e44ad',
  actividad: '#e67e22'
};

const emojis = {
  parque: '🌳',
  museo: '🏛️',
  actividad: '🎡'
};

function crearIcono(categoria) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${colores[categoria]};
      width: 36px;
      height: 36px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    "><span style="transform: rotate(45deg); font-size: 16px;">${emojis[categoria]}</span></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
}

// ===== Crear marcadores =====
const marcadores = [];

lugares.forEach(lugar => {
  const marker = L.marker([lugar.lat, lugar.lng], {
    icon: crearIcono(lugar.categoria)
  });

  const popupHTML = `
    <div class="popup-content">
      <span class="popup-badge ${lugar.categoria}">${lugar.categoria}</span>
      <h3>${lugar.nombre}</h3>
      <p>${lugar.descripcion}</p>
      <div class="popup-info"><strong>📍</strong> ${lugar.direccion}</div>
      <div class="popup-info"><strong>🕐</strong> ${lugar.horario}</div>
      <div class="popup-info"><strong>💵</strong> ${lugar.precio}</div>
      <div class="popup-info"><strong>⭐</strong> ${lugar.rating} / 5</div>
      <a class="popup-link"
         href="https://www.google.com/maps/dir/?api=1&destination=${lugar.lat},${lugar.lng}"
         target="_blank" rel="noopener">
        📍 Cómo llegar →
      </a>
    </div>
  `;

  marker.bindPopup(popupHTML);
  marker.lugar = lugar;
  marcadores.push(marker);
  marker.addTo(map);
});

// ===== Renderizar lista =====
function renderLista(filtrados) {
  const lista = document.getElementById('lugares-list');
  const count = document.getElementById('list-count');
  count.textContent = `${filtrados.length} ${filtrados.length === 1 ? 'lugar' : 'lugares'}`;

  lista.innerHTML = '';
  filtrados.forEach(lugar => {
    const li = document.createElement('li');
    li.className = `lugar-item ${lugar.categoria}`;
    li.innerHTML = `
      <div class="lugar-nombre">${emojis[lugar.categoria]} ${lugar.nombre}</div>
      <div class="lugar-direccion">${lugar.direccion}</div>
      <div class="lugar-meta">
        <span class="lugar-rating">⭐ ${lugar.rating}</span>
        <span>· ${lugar.precio}</span>
      </div>
    `;

    li.addEventListener('click', () => {
      map.setView([lugar.lat, lugar.lng], 16, { animate: true });
      const marker = marcadores.find(m => m.lugar === lugar);
      if (marker) marker.openPopup();
      // En mobile, cerrar sidebar tras seleccionar
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
      }
    });

    lista.appendChild(li);
  });
}

// ===== Filtros y búsqueda =====
let filtroActual = 'todos';
let textoBusqueda = '';

function aplicarFiltros() {
  let filtrados = lugares;

  if (filtroActual !== 'todos') {
    filtrados = filtrados.filter(l => l.categoria === filtroActual);
  }

  if (textoBusqueda) {
    const q = textoBusqueda.toLowerCase();
    filtrados = filtrados.filter(l =>
      l.nombre.toLowerCase().includes(q) ||
      l.direccion.toLowerCase().includes(q) ||
      l.descripcion.toLowerCase().includes(q)
    );
  }

  // Mostrar/ocultar marcadores en el mapa
  marcadores.forEach(m => {
    if (filtrados.includes(m.lugar)) {
      if (!map.hasLayer(m)) m.addTo(map);
    } else {
      if (map.hasLayer(m)) map.removeLayer(m);
    }
  });

  renderLista(filtrados);
}

// Botones de filtro
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroActual = btn.dataset.filter;
    aplicarFiltros();
  });
});

// Buscador
document.getElementById('search').addEventListener('input', (e) => {
  textoBusqueda = e.target.value;
  aplicarFiltros();
});

// Toggle mobile
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Inicial
aplicarFiltros();
