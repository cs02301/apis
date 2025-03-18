# Conversor de Divisas

Este proyecto es una aplicación web que permite convertir montos entre diferentes monedas utilizando la **ExchangeRate-API**.

## Índice
- [Descripción](#descripción)
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Configuración](#configuración)
- [Uso](#uso)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Créditos](#créditos)
- [Licencia](#licencia)

## Descripción

La aplicación permite ingresar una cantidad, seleccionar la moneda de origen y la moneda de destino, y obtener el monto convertido utilizando la [ExchangeRate-API](https://www.exchangerate-api.com/).

## Características

- Conversión entre múltiples monedas (USD, EUR, COP, etc.).
- Diseño moderno y atractivo con CSS y la fuente **Poppins**.
- Manejo de errores y mensajes de retroalimentación para el usuario.
- Código limpio y fácil de personalizar.

## Requisitos Previos

- Navegador web moderno.
- Clave de API de [ExchangeRate-API](https://www.exchangerate-api.com/).

## Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/conversor-divisas.git
   ```
2. Obtén tu API Key de [ExchangeRate-API](https://www.exchangerate-api.com/).
3. En el archivo `app.js`, reemplaza `TU_API_KEY` con tu clave real:
   ```js
   const API_KEY = 'TU_API_KEY';
   ```
4. Guarda los cambios.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa la cantidad a convertir.
3. Selecciona la moneda de origen y la moneda de destino.
4. Haz clic en el botón **"Convertir"** para ver el resultado.

## Capturas de Pantalla

![Captura de pantalla 2025-03-18 182457](https://github.com/user-attachments/assets/3e8275b8-3d7d-4370-8bc0-553169b11f1e)

![Captura de pantalla 2025-03-18 182512](https://github.com/user-attachments/assets/f975c221-f577-464a-90a5-6ff5db70b54e)

## Estructura de Carpetas

```
conversor-divisas/
├── index.html       # Página principal
├── app.js           # Lógica de la aplicación
├── styles.css       # Estilos de la aplicación
└── README.md        # Documentación del proyecto
```

## Créditos

- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Google Fonts](https://fonts.google.com/) – Fuente **Poppins**

