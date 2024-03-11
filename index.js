// Importa el módulo 'express' para crear una instancia de la aplicación Express.
const express = require("express");

// Crea una nueva instancia de la aplicación Express.
const app = express();

// Importa el módulo 'path' de Node.js para manejar y transformar rutas de archivo
const path = require("path");

// Configura el directorio de archivos estáticos para que Express sirva archivos estáticos, como archivos HTML, CSS, imágenes, etc., desde el directorio 'public'.
app.use(express.static(path.join(__dirname, "public")));

// Configura una ruta raíz usando app.get(), que responde con el archivo "index.html".
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define el puerto en el que se ejecutará el servidor.
const PORT = process.env.PORT || 3000;

// Inicia el servidor y se escucha en el puerto especificado.
app.listen(PORT, () => {
  console.log(`El Servidor esta corriendo en el Puerto ${PORT}`);
});
