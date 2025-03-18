// Reemplaza 'TU_API_KEY' con tu API key obtenida de OpenWeatherMap
const API_KEY = 'TU_API_KEY';

// Selección de elementos del DOM
const fetchBtn = document.getElementById('fetchBtn');
const cityInput = document.getElementById('cityInput');
const resultDiv = document.getElementById('result');

// Función para obtener y mostrar la información del clima
function obtenerClima() {
  // Si el usuario ingresa una ciudad, se usa esa; de lo contrario, se utiliza una ciudad por defecto
  const ciudad = cityInput.value || 'Bogotá';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

  // Realiza la petición GET a la API utilizando fetch()
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      return response.json();
    })
    .then(data
