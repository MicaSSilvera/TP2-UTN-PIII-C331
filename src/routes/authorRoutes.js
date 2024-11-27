const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Rutas para los autores
router.post('/', authorController.createAuthor); // Crear un autor
router.get('/', authorController.getAllAuthors); // Obtener todos los autores
router.get('/:id', authorController.getAuthorById); // Obtener un autor por ID
router.put('/:id', authorController.updateAuthorById); // Actualizar un autor por ID
router.delete('/:id', authorController.deleteAuthorById); // Eliminar un autor por ID

module.exports = router;

