La API de Libros es un servicio RESTful que permite gestionar un catálogo de libros y sus autores. Proporciona funcionalidades para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto en libros como en autores, utilizando Node.js, Express.js y MySQL. Está diseñada para facilitar la integración con interfaces de usuario u otros sistemas que requieran manejar datos de libros y autores.
 
//*******************************************************************************************

Instrucciones
1. Clonar el Repositorio
   Descarga el proyecto desde el repositorio remoto o descomprime el archivo del proyecto. Luego, accede a la carpeta del proyecto

2.Instalar Dependencias
  Instalar Node.js y npm . 

3.Configurar el Archivo .env
  Crear un archivo .env en la raíz del proyecto y configura las variables de entorno.

4.Configurar la Base de Datos
  Tener MySQL instalado y ejecutándose.
  Usa el script SQL proporcionado en la carpeta data/ para crear la base de datos y las tablas que se necesitan.

5.Ejecutar el Proyecto
 Inicia el servidor local con el siguiente comando:
 npm start

6.La API estará disponible en http://localhost:3000

//*******************************************************************************************

Ejemplos de Endpoints y Cómo Probarlos

Entidad Libros
1. Obtener todos los libros
   Método: GET
   URL: /books
   Descripción: Devuelve una lista de todos los libros.
   Prueba con curl:
                  curl -X GET http://localhost:3000/books
2.Crear un libro
   Método: POST
   URL: /books
   Descripción: Agrega un nuevo libro a la base de datos.
   Cuerpo de la solicitud:
        {
        "title": "Cien años de soledad",
        "category": "Novela",
        "authorId": 2,
        "publishedDate": "1967-06-05",
        "status": "active"
        }
    Prueba con curl:

     curl -X POST http://localhost:3000/books \
    -H "Content-Type: application/json" \
    -d '{"title":"Cien años de soledad","category":"Novela","authorId":2,"publishedDate":"1967-06-05","status":"active"}'

3.Eliminar un libro
   Método: DELETE
   URL: /books/:id
   Descripción: Elimina un libro existente por ID.
   Ejemplo: http://localhost:3000/books/1
   Prueba con curl:
         curl -X DELETE http://localhost:3000/books/1


Entidad Autores

1.Obtener todos los autores
   Método: GET
   URL: /authors
   Descripción: Devuelve todos los autores registrados.
   Prueba con curl:
               curl -X GET http://localhost:3000/authors

2.Crear un autor
   Método: POST
   URL: /authors
   Descripción: Crea un nuevo autor en la base de datos.
   Cuerpo de la solicitud:
        {
        "name": "Gabriel",
        "surname": "García Márquez",
        "sexo": "masculino"
        }

   Prueba con curl:
              curl -X POST http://localhost:3000/authors \
              -H "Content-Type: application/json" \
              -d '{"name":"Gabriel","surname":"García Márquez","sexo":"masculino"}'

3.Eliminar un autor
   Método: DELETE
   URL: /authors/:id
   Descripción: Elimina un autor existente por ID.
   Ejemplo: http://localhost:3000/authors/1
   Prueba con curl:
            curl -X DELETE http://localhost:3000/authors/1

//*******************************************************************************************

        Archivo authors.json
        Este archivo contiene datos de ejemplo para la tabla authors.
    [
    {
        "name": "Gabriel",
        "surname": "García Márquez",
        "sexo": "masculino",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    },
    {
        "name": "Jane",
        "surname": "Austen",
        "sexo": "femenino",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    },
    {
        "name": "Antoine",
        "surname": "de Saint-Exupéry",
        "sexo": "masculino",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    }
    ]


        Archivo books.json
        Este archivo contiene datos de ejemplo para la tabla books
    [
    {
        "title": "Cien años de soledad",
        "category": "Novela",
        "authorId": 1,
        "publishedDate": "1967-06-05",
        "status": "active",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    },
    {
        "title": "Orgullo y prejuicio",
        "category": "Romance",
        "authorId": 2,
        "publishedDate": "1813-01-28",
        "status": "active",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    },
    {
        "title": "El principito",
        "category": "Ficción",
        "authorId": 3,
        "publishedDate": "1943-04-06",
        "status": "active",
        "createdAt": "2024-11-22T00:00:00Z",
        "updatedAt": "2024-11-22T00:00:00Z"
    }
    ]


Instrucciones para cargar datos
1.Ubica los archivos JSON
  Coloca los archivos authors.json y books.json en una carpeta específica dentro del proyecto, por ejemplo: src/data/.

2.Cargar datos usando Sequelize
  Crea un script en tu proyecto para cargar los datos en la base de datos. Por ejemplo, un archivo seed.js:
const { Author, Book } = require('./models');
const authors = require('./data/authors.json');
const books = require('./data/books.json');

const seedDatabase = async () => {
  try {
    // Cargar autores
    await Author.bulkCreate(authors);
    console.log('Autores cargados exitosamente.');

    // Cargar libros
    await Book.bulkCreate(books);
    console.log('Libros cargados exitosamente.');

    process.exit(0);
  } catch (error) {
    console.error('Error cargando datos:', error);
    process.exit(1);
  }
};

seedDatabase();

3.Ejecutar el script
  Ejecuta el script de carga de datos desde la terminal:
  node src/seed.js

4.Verifica los datos en la base de datos
  Confirma que los datos han sido correctamente insertados en las tablas.



