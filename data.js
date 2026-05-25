// Lugares para niños en Lima
// Categorías: parque, museo, actividad
const lugares = [
  // ===== PARQUES =====
  {
    nombre: "Parque El Principito",
    categoria: "parque",
    lat: -12.1214536,
    lng: -77.0428269,
    direccion: "Mal. Cisneros 1094, Miraflores",
    rating: 4.5,
    descripcion: "Parque amplio con juegos infantiles y vista al mar. Tiene áreas separadas para niños pequeños y grandes.",
    horario: "Abierto 24h",
    precio: "Gratis"
  },
  {
    nombre: "Parque de la Felicidad",
    categoria: "parque",
    lat: -12.1019108,
    lng: -76.9893276,
    direccion: "Av. Blvd. de Surco, San Borja",
    rating: 4.5,
    descripcion: "Hermoso parque con fuentes, jardines bien cuidados y juegos para escalar.",
    horario: "Abierto 24h",
    precio: "Gratis"
  },
  {
    nombre: "Niños Park",
    categoria: "parque",
    lat: -12.0855057,
    lng: -76.9572128,
    direccion: "Alameda del Corregidor 560, La Molina",
    rating: 4.2,
    descripcion: "Parque cerrado y seguro para niños de 18 meses a 12 años. Con tobogán gigante.",
    horario: "Mar-Sáb 10am-8pm, Dom 9:30am-8pm",
    precio: "Entrada con costo"
  },
    {
    nombre: "Parque Bicentenario",
    categoria: "parque",
    lat: -12.1081866,
    lng: -77.0552971,
    direccion: "C. Godofredo García 495, San Isidro 15076",
    rating: 4.6,
    descripcion: "Paths, shelters & a playground, plus busts of historic figures, in a hilltop park with sea views.",
    horario: "Lun-Dom 7am-9pm",
    precio: "Gratis"
  },
  {
    nombre: "Anillos Park",
    categoria: "parque",
    lat: -12.0683946,
    lng: -76.9731775,
    direccion: "Av. Separadora Industrial 1513, Ate",
    rating: 4.2,
    descripcion: "Parque grande tipo familiar, ideal para niños hasta 6 años.",
    horario: "Lun-Vie 6:45am-6pm, Sáb-Dom 10:30am-7pm",
    precio: "Gratis"
  },
  {
    nombre: "Kids' Playground (Costa Verde)",
    categoria: "parque",
    lat: -12.1236865,
    lng: -77.0392505,
    direccion: "Malecón, Miraflores",
    rating: 3.8,
    descripcion: "Parque pequeño con dos niveles, ideal para niños de 3 a 8 años.",
    horario: "Abierto 24h",
    precio: "Gratis"
  },

  // ===== MUSEOS =====
  {
    nombre: "Museo de Historia Natural",
    categoria: "museo",
    lat: -12.0774102,
    lng: -77.0370451,
    direccion: "Av. Arenales 1256, Jesús María",
    rating: 4.5,
    descripcion: "Museo con dinosaurios, fósiles, esqueletos de ballenas e insectos. Encantador para niños curiosos.",
    horario: "Mar-Vie 9am-5pm, Sáb 10am-5pm",
    precio: "S/ 10 aprox"
  },
  {
    nombre: "Museo Metropolitano de Lima",
    categoria: "museo",
    lat: -12.0636196,
    lng: -77.0369824,
    direccion: "Parque de la Exposición, Av. 28 de Julio",
    rating: 4.6,
    descripcion: "Museo interactivo sobre historia de Lima, con exposiciones bien curadas.",
    horario: "Mar-Dom 10am-6pm",
    precio: "Entrada económica"
  },
  {
    nombre: "Museo de Arte de Lima (MALI)",
    categoria: "museo",
    lat: -12.0606647,
    lng: -77.0372521,
    direccion: "Parque de la Exposición, Av. 9 de Diciembre 125",
    rating: 4.6,
    descripcion: "El principal museo de arte del Perú. Tiene talleres y programas para niños los fines de semana.",
    horario: "Mar-Dom 10am-6pm",
    precio: "S/ 40 (descuentos para niños)"
  },
  {
    nombre: "MAC Lima (Arte Contemporáneo)",
    categoria: "museo",
    lat: -12.1367603,
    lng: -77.0231651,
    direccion: "Av. Miguel Grau 1511, Barranco",
    rating: 4.3,
    descripcion: "Museo moderno rodeado de árboles, con área verde y café. Buen plan tranquilo en familia.",
    horario: "Mar-Dom 10am-6:30pm",
    precio: "S/ 20"
  },
  {
    nombre: "Museo de Historia Natural Vera Alleman",
    categoria: "museo",
    lat: -12.132444,
    lng: -76.980911,
    direccion: "Av. Benavides 5440, Surco",
    rating: 4.5,
    descripcion: "Museo pequeño pero muy didáctico con exhibición de dinosaurios. Los niños lo aman.",
    horario: "Mar-Dom 10am-1pm y 2pm-5pm",
    precio: "Entrada económica"
  },
  {
    nombre: "Museo de la Electricidad",
    categoria: "museo",
    lat: -12.1503391,
    lng: -77.0217309,
    direccion: "Av. Pedro de Osma 105, Barranco",
    rating: 4.3,
    descripcion: "Museo gratuito con experiencias interactivas. Los niños pueden encender bombillas pedaleando.",
    horario: "Mar-Sáb 9:30am-5pm",
    precio: "Gratis"
  },
  {
    nombre: "Lugar de la Memoria (LUM)",
    categoria: "museo",
    lat: -12.1100565,
    lng: -77.0539453,
    direccion: "Bajada San Martín 151, Miraflores",
    rating: 4.7,
    descripcion: "Museo con vista al mar. Recomendado para niños mayores (preadolescentes) por su contenido histórico.",
    horario: "Mar-Dom 10am-6pm",
    precio: "Gratis"
  },

  // ===== ACTIVIDADES =====
  {
    nombre: "Parque de las Leyendas",
    categoria: "actividad",
    lat: -12.0679632,
    lng: -77.0870217,
    direccion: "Av. Parque de las Leyendas 580, San Miguel",
    rating: 4.4,
    descripcion: "El zoológico más popular de Lima. Animales de costa, sierra y selva, además de ruinas incas y jardín botánico.",
    horario: "Todos los días 9am-5pm",
    precio: "Entrada con costo"
  },
  {
    nombre: "Parque de la Imaginación",
    categoria: "actividad",
    lat: -12.0686121,
    lng: -77.0822262,
    direccion: "Av. Riva Agüero S/N, San Miguel (detrás de PUCP)",
    rating: 4.2,
    descripcion: "Parque temático con acuario, dinosaurios animatrónicos, tren temático de África y simulador de terremoto.",
    horario: "Todos los días 9am-6pm",
    precio: "S/ 15"
  },
  {
    nombre: "Circuito Mágico del Agua",
    categoria: "actividad",
    lat: -12.0704432,
    lng: -77.0329681,
    direccion: "Parque de la Reserva, Cercado de Lima",
    rating: 4.5,
    descripcion: "Espectáculo de fuentes con luces, música y proyecciones láser. Mágico para niños de noche.",
    horario: "Mar-Dom 3pm-10pm",
    precio: "S/ 5"
  },
  {
    nombre: "La Granja Villa",
    categoria: "actividad",
    lat: -12.2054249,
    lng: -77.0005882,
    direccion: "Alameda del Premio Real 397, Chorrillos",
    rating: 4.1,
    descripcion: "Parque de diversiones con piscinas, toboganes, animales de granja y juegos mecánicos. Pasen un día completo.",
    horario: "Todos los días 10am-6pm",
    precio: "Entrada con costo"
  },
  {
    nombre: "Go Enjoy Perú (Surco)",
    categoria: "actividad",
    lat: -12.1532045,
    lng: -77.0106109,
    direccion: "Jr. Belisario Suarez 198, Surco",
    rating: 4.7,
    descripcion: "Espacio para fiestas infantiles y juegos. Limpio, ordenado y muy bien valorado.",
    horario: "Mar-Dom (cerrado lunes)",
    precio: "Entrada con costo"
  },
  {
    nombre: "Star Park Perú",
    categoria: "actividad",
    lat: -12.0489501,
    lng: -77.0330829,
    direccion: "Jr. Cusco 127, Cercado de Lima",
    rating: 4.9,
    descripcion: "Sala de juegos con tecnología innovadora y juegos sensoriales para todas las edades.",
    horario: "Lun-Vie 12pm-10pm, Sáb-Dom 10:15am-10:30pm",
    precio: "Por juego"
  },
  {
    nombre: "Fantasy Park (Lince)",
    categoria: "actividad",
    lat: -12.086485,
    lng: -77.0345339,
    direccion: "Av. Arequipa 2250, Lince",
    rating: 4.4,
    descripcion: "Juegos mecánicos, hockey de mesa, baile y básquet. Sistema de puntos para canjear premios.",
    horario: "Lun-Vie 7am-10pm, Sáb 8am-2pm",
    precio: "Por juego"
  }
];
