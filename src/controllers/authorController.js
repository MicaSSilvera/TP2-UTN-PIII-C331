const Author = require('../models/author'); // Importo el modelo Author

// Crear un nuevo autor
exports.createAuthor = async (req, res) => {
  try {
    const { name, surname, sexo } = req.body; // Obtiene los datos del cuerpo de la solicitud
    if (!name || !surname || !sexo) {
      return res.status(400).json({ message: 'El nombre, apellido y sexo son obligatorios.' });
    }
    const newAuthor = await Author.create({ name, surname, sexo });
    res.status(201).json(newAuthor);
  } catch (error) {
    console.error('Error al crear el autor:', error.message);
    res.status(500).json({ message: 'Error al crear el autor', error: error.message });
  }
};

// Obtener todos los autores
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    console.error('Error al obtener los autores:', error.message);
    res.status(500).json({ message: 'Error al obtener los autores', error: error.message });
  }
};

// Obtener un autor por ID
exports.getAuthorById = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de los parámetros de la URL
    const author = await Author.findByPk(id); // Busca al autor por clave primaria
    if (!author) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }
    res.status(200).json(author);
  } catch (error) {
    console.error('Error al obtener el autor:', error.message);
    res.status(500).json({ message: 'Error al obtener el autor', error: error.message });
  }
};

// Actualizar un autor por ID
exports.updateAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, sexo } = req.body
    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }

    // Actualizo los campos permitidos
    author.name = name || author.name;
    author.surname = surname || author.surname;
    author.sexo = sexo || author.sexo;

    await author.save(); // Guardo los cambios en la base de datos
    res.status(200).json(author);
  } catch (error) {
    console.error('Error al actualizar el autor:', error.message);
    res.status(500).json({ message: 'Error al actualizar el autor', error: error.message });
  }
};

// Eliminar un autor por ID
exports.deleteAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }

    await author.destroy(); // Elimino el autor de la base de datos
    res.status(200).json({ message: 'Autor eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar el autor:', error.message);
    res.status(500).json({ message: 'Error al eliminar el autor', error: error.message });
  }
};

