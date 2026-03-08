// 1. Importar los módulos necesarios
const express = require('express');
const path = require('path');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// 4. Configurar el middleware para servir archivos estáticos
//    Express buscará en la carpeta 'public' cualquier archivo solicitado.
app.use(express.static(path.join(__dirname, 'public')));

// 5. Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
