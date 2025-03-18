// Reemplaza 'TU_API_KEY' con tu clave real de ExchangeRate-API
const API_KEY = '2760c966001ef76a77afef8c';

const amountInput = document.getElementById('amountInput');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function convertirDivisas() {
  const amount = parseFloat(amountInput.value) || 0;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  // URL base de ExchangeRate-API (versión v6)
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

  // Mostrar un mensaje de carga
  resultDiv.innerHTML = '<p class="loading">Convirtiendo...</p>';

  // Hacer la petición a la API
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud a la API de ExchangeRate.');
      }
      return response.json();
    })
    .then(data => {
      const rates = data.conversion_rates;
      if (!rates[to]) {
        throw new Error(`No se encontró la tasa de cambio para la moneda ${to}.`);
      }
      const tasa = rates[to];
      const resultado = amount * tasa;

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

convertBtn.addEventListener('click', convertirDivisas);

// (Opcional) Realizar una conversión inicial al cargar la página
window.addEventListener('load', convertirDivisas);
