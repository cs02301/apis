Conversor de Divisas
Este proyecto es una aplicación web que permite convertir montos entre diferentes monedas utilizando la ExchangeRate-API.

Índice
Descripción
Características
Requisitos Previos
Configuración
Uso
Capturas de Pantalla
Estructura de Carpetas
Créditos
Licencia
Descripción
La aplicación permite ingresar una cantidad, seleccionar la moneda de origen y la moneda de destino, y obtener el monto convertido utilizando la ExchangeRate-API.

Características
Conversión entre múltiples monedas (USD, EUR, COP, etc.).
Diseño moderno y atractivo con CSS y la fuente Poppins.
Manejo de errores y mensajes de retroalimentación para el usuario.
Código limpio y fácil de personalizar.
Requisitos Previos
Navegador web moderno.
Clave de API de ExchangeRate-API.
Configuración
Clona este repositorio:
bash
Copiar
git clone https://github.com/tu-usuario/conversor-divisas.git
Obtén tu API Key de ExchangeRate-API.
En el archivo app.js, reemplaza TU_API_KEY con tu clave real:
js
Copiar
const API_KEY = 'TU_API_KEY';
Guarda los cambios.
Uso
Abre el archivo index.html en tu navegador.
Ingresa la cantidad a convertir.
Selecciona la moneda de origen y la moneda de destino.
Haz clic en el botón "Convertir" para ver el resultado.
Capturas de Pantalla
![image](https://github.com/user-attachments/assets/2154d94e-f9fb-4ac9-ada4-1a9ae158a88e)
![image](https://github.com/user-attachments/assets/77c1326f-713e-4ee8-a15b-4998e64eecda)


Estructura de Carpetas
bash
Copiar
conversor-divisas/
├── index.html       # Página principal
├── app.js           # Lógica de la aplicación
├── styles.css       # Estilos de la aplicación
└── README.md        # Documentación del proyecto
Créditos
ExchangeRate-API
Google Fonts – Fuente Poppins
Licencia
Este proyecto se distribuye bajo la Licencia MIT.
