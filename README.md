# 🎈 Mapa para Niños · Lima

Mapa interactivo con **parques infantiles, museos y actividades** para niños en Lima, Perú.

🌐 **Demo en vivo**: una vez publicado en GitHub Pages → `https://TU-USUARIO.github.io/mapa-ninos-lima/`

![Categorías](https://img.shields.io/badge/Parques-5-27ae60) ![Museos](https://img.shields.io/badge/Museos-7-8e44ad) ![Actividades](https://img.shields.io/badge/Actividades-7-e67e22)

## ✨ Características

- 🗺️ Mapa interactivo con **Leaflet + OpenStreetMap** (sin API keys ni costos)
- 🏷️ Filtros por categoría: parques 🌳, museos 🏛️, actividades 🎡
- 🔍 Buscador por nombre, distrito o palabra clave
- 📍 Popups con dirección, horario, precio, rating y botón "cómo llegar" (abre Google Maps)
- 📱 Diseño responsive (funciona en móviles)
- ⚡ 100% estático — sin backend, sin build, sin dependencias que instalar

## 📦 Estructura

```
mapa-ninos-lima/
├── index.html      # Estructura principal
├── styles.css      # Estilos
├── app.js          # Lógica del mapa y filtros
├── data.js         # Lugares con coordenadas (¡edítalo para agregar más!)
└── README.md
```

## 🚀 Cómo publicarlo en GitHub Pages

1. **Crea un repo nuevo** en GitHub (por ejemplo, `mapa-ninos-lima`).

2. **Sube los archivos** desde tu terminal:
   ```bash
   git init
   git add .
   git commit -m "Mapa para niños en Lima"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/mapa-ninos-lima.git
   git push -u origin main
   ```

3. **Activa GitHub Pages**:
   - Ve a *Settings* → *Pages*
   - En "Source", elige **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → Save
   - Espera ~1 minuto y abre `https://TU-USUARIO.github.io/mapa-ninos-lima/`

¡Listo! 🎉

## 🛠️ Cómo agregar más lugares

Abre `data.js` y agrega un nuevo objeto al array `lugares`:

```js
{
  nombre: "Nombre del lugar",
  categoria: "parque",        // "parque" | "museo" | "actividad"
  lat: -12.1234,              // latitud
  lng: -77.0456,              // longitud
  direccion: "Av. Ejemplo 123, Distrito",
  rating: 4.5,
  descripcion: "Breve descripción del lugar.",
  horario: "Lun-Dom 9am-6pm",
  precio: "Gratis"            // o "S/ 10", etc.
}
```

💡 **Cómo obtener coordenadas**: busca el lugar en [Google Maps](https://maps.google.com), haz click derecho y copia los números.

## 🖥️ Probar localmente

Solo abre `index.html` en tu navegador. O sirve la carpeta con:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## 📋 Lugares incluidos

**Parques (5):** El Principito · Felicidad · Niños Park · Anillos · Costa Verde

**Museos (7):** Historia Natural · Metropolitano · MALI · MAC · Vera Alleman · Electricidad · LUM

**Actividades (7):** Parque de las Leyendas · Imaginación · Circuito Mágico del Agua · La Granja Villa · Go Enjoy Perú · Star Park · Fantasy Park

## 📄 Licencia

MIT — siéntete libre de usar, modificar y compartir.

---

Hecho con ❤️ usando [Leaflet](https://leafletjs.com) y [OpenStreetMap](https://www.openstreetmap.org).
