// src/app.js

const express = require('express');
const sequelize = require('./data/database'); // Importo la instancia de Sequelize

// Rutas
const bookRoutes = require('./routes/bookRoutes');  // Ruta para el modelo 'Book'
const authorRoutes = require('./routes/authorRoutes');  // Ruta para el modelo 'Author'

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.json());

// Ruta para probar la conexión a la base de datos
app.get('/test-connection', async (req, res) => {
  try {
    await sequelize.authenticate();  // Intenta autenticar la conexión
    res.json({ success: true, message: 'Conexión a la base de datos exitosa!' });
  } catch (error) {
    res.json({ success: false, message: 'No se pudo conectar a la base de datos: ' + error.message });
  }
});

// Sincroniza los modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error.message);
  });
  
// Rutas de la API
app.use('/api/books', bookRoutes);   // Defino la ruta de los libros
app.use('/api/authors', authorRoutes); // Defino la ruta de los autores

// Manejo de errores
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Puerto en el que el servidor escuchará
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
