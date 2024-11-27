const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rutas para libros
router.post('/', bookController.createBook); // Crear un libro
router.get('/', bookController.getAllBooks); // Obtener todos los libros
router.get('/:id', bookController.getBookById); // Obtener un libro por ID
router.put('/:id', bookController.updateBookById); // Actualizar un libro por ID
router.delete('/:id', bookController.deleteBookById); // Eliminar un libro por ID

module.exports = router;

