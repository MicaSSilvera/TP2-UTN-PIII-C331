const sequelize = require('./database');
const Book = require('../models/book');
const Author = require('../models/author');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
})();
