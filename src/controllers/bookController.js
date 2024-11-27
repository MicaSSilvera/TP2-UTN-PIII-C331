const Book = require('../models/book'); // Importo el modelo Book

// Crear un nuevo libro
exports.createBook = async (req, res) => {
  try {
    const { title, author, category, status, publishedAt } = req.body;

    // Validaciones básicas
    if (!title || !author || !category) {
      return res.status(400).json({ message: 'Título, autor y categoría son obligatorios.' });
    }

    // Crea un nuevo libro
    const newBook = await Book.create({
      title,
      author,
      category,
      status: status || 'active', // Valor por defecto
      publishedAt,
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al crear el libro:', error.message);
    res.status(500).json({ message: 'Error al crear el libro', error: error.message });
  }
};

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(); // Obtiene todos los libros
    res.status(200).json(books);
  } catch (error) {
    console.error('Error al obtener los libros:', error.message);
    res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de los parámetros de la URL
    const book = await Book.findByPk(id); // Busca el libro por clave primaria

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado.' });
    }

    // Convierto la fecha al formato YYYY-MM-DD
    const bookData = {
      ...book.toJSON(),
      publishedAt: book.publishedAt ? book.publishedAt.toISOString().split('T')[0] : null,
    };

    res.status(200).json(bookData);
  } catch (error) {
    console.error('Error al obtener el libro:', error.message);
    res.status(500).json({ message: 'Error al obtener el libro', error: error.message });
  }
};

// Actualizar un libro por ID
exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, category, status, publishedAt } = req.body;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado.' });
    }

    // Actualiza los campos permitidos
    book.title = title || book.title;
    book.author = author || book.author;
    book.category = category || book.category;
    book.status = status || book.status;
    book.publishedAt = publishedAt || book.publishedAt;

    await book.save(); // Guarda los cambios en la base de datos
    res.status(200).json(book);
  } catch (error) {
    console.error('Error al actualizar el libro:', error.message);
    res.status(500).json({ message: 'Error al actualizar el libro', error: error.message });
  }
};

// Eliminar un libro por ID
exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado.' });
    }

    await book.destroy(); // Elimina el libro de la base de datos
    res.status(200).json({ message: 'Libro eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar el libro:', error.message);
    res.status(500).json({ message: 'Error al eliminar el libro', error: error.message });
  }
};
