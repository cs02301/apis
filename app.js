// Reemplaza 'TU_API_KEY' con tu clave real de ExchangeRate-API
const API_KEY = '2760c966001ef76a77afef8c';

// Elementos del DOM
const amountInput = document.getElementById('amountInput');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Función principal para convertir divisas
function convertirDivisas() {
  const amount = parseFloat(amountInput.value) || 0;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  // URL base de ExchangeRate-API (versión v6)
  // "latest" significa que tomamos las últimas tasas de la moneda 'from'
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

  // Mostrar un mensaje de carga
  resultDiv.innerHTML = '<p>Cargando...</p>';

  // Hacer la petición a la API
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud a la API de ExchangeRate.');
      }
      return response.json();
    })
    .then(data => {
      // 'conversion_rates' es un objeto que contiene las tasas de cambio
      const rates = data.conversion_rates;

      // Verificamos si la moneda de destino está en 'conversion_rates'
      if (!rates[to]) {
        throw new Error(`No se encontró la tasa de cambio para la moneda ${to}.`);
      }

      // Calculamos el valor convertido
      const tasa = rates[to];
      const resultado = amount * tasa;

      // Mostramos el resultado en pantalla
      resultDiv.innerHTML = `
        <p><strong>${amount} ${from}</strong> equivalen a 
        <strong>${resultado.toFixed(2)} ${to}</strong></p>
        <p><small>Tasa de cambio: 1 ${from} = ${tasa} ${to}</small></p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}

// Asociar la función al botón
convertBtn.addEventListener('click', convertirDivisas);

// (Opcional) Convertir al cargar la página con valores por defecto
window.addEventListener('load', convertirDivisas);
