// src/models/book.js

const { DataTypes } = require('sequelize');
const sequelize = require('../data/database'); // Importa la instancia de Sequelize conectada a la base de datos

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // El título no puede ser nulo
    validate: {
      notEmpty: { msg: 'El título no puede estar vacío' }, // Validación personalizada
    },
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El autor no puede estar vacío' },
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'), // Solo permite 'active' o 'inactive'
    defaultValue: 'active', // Valor por defecto
  },
  publishedAt: {
    type: DataTypes.DATE, // Fecha de publicación
    allowNull: true,
  },
}, {
  timestamps: true, // Agrega automáticamente createdAt y updatedAt
  tableName: 'Books', // Nombre de la tabla en la base de datos
});

module.exports = Book;