const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_libros', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desactivar logs para evitar saturar la consola
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa con la base de datos.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

// Probar la conexión a la base de datos
const testConnection = async () => {
  try {
    await sequelize.authenticate(); // Verifica la conexión
    console.log('Conexión a la base de datos exitosa!');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

// Llamo a la función para probar la conexión
testConnection();

module.exports = sequelize;
