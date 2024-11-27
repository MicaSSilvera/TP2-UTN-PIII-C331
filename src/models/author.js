// src/models/author.js

const { DataTypes } = require('sequelize');
const sequelize = require('../data/database');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'Authors', // Nombre de la tabla en la base de datos
});

module.exports = Author;

