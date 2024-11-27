const apiBaseUrl = 'http://localhost:3000/api';

    //obtener todos los libros
    document.addEventListener('DOMContentLoaded', async () => {
        fetchBooks();
        fetchAuthors();
    });

    // Crear libro
    document.getElementById('bookForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        // obtengo los datos del formulario
        const bookData = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            category: document.getElementById('category').value,
            publishedAt: document.getElementById('publishedAt').value || null
        };

        try {
            // Envío de datos a la API
            const response = await fetch(`${apiBaseUrl}/books`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });

            // Manejo de la respuesta
            const result = await response.json();
            const responseDiv = document.getElementById('responseMessageBook');

            if (response.ok) {
                showAlert('Libro creado correctamente', 'success');
                // Reseteo el formulario
                document.getElementById('bookForm').reset();
            } else {
                showAlert(`Error al crear el libro: ${result.message || 'Intenta nuevamente'}.`, 'danger');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert("Error de conexión: No se pudo contactar con la API.", 'danger');
        }
    });

    // Crear autor
    document.getElementById('authorForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        // obtengo los datos del formulario
        const authorData = {
            name: document.getElementById('authorName').value,
            surname: document.getElementById('authorSurname').value,
            sexo: document.getElementById('authorSexo').value,
        };

        try {
            // Envío de datos a la API
            const response = await fetch(`${apiBaseUrl}/authors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authorData)
            });

            // Manejo de la respuesta
            const result = await response.json();

            if (response.ok) {
                showAlert('Autor creado correctamente', 'success');
                // Reseteo el formulario
                document.getElementById('authorForm').reset();
            } else {
                showAlert(`Error al crear el autor: ${result.message || 'Intenta nuevamente'}.`, 'danger');
            }
           
        } catch (error) {
            console.error('Error:', error);
            showAlert("Error de conexión: No se pudo contactar con la API.", 'danger');
        }
    });

    // Ver libros
    async function fetchBooks() {
        const booksContainer = document.getElementById('booksContainer');
        booksContainer.innerHTML = "";

        try {
            // Realizo la petición a la API para obtener los libros
            const response = await fetch(`${apiBaseUrl}/books`);
            const books = await response.json();

            if (response.ok) {
                books.forEach(book => {
                // Creo la tarjeta para cada libro
                const bookCard = document.createElement('div');
                bookCard.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');

                bookCard.innerHTML = `
                    <div class="card book-card shadow-sm h-100">
                        <img src="./img/book.png" class="card-img-top" alt="Imagen del libro">
                        <div class="card-body">
                            <h5 class="card-title text-center">${book.title}</h5>
                            <p class="card-text text-center"><strong>Autor:</strong> ${book.author}</p>
                            <p class="card-text text-center"><strong>Categoría:</strong> ${book.category}</p>
                        </div>
                        <a href="bookDetail.html?id=${book.id}" class="btn btn-primary m-2">Ver Detalle</a>
                    </div>
                `;

                // Agrego la tarjeta al contenedor
                booksContainer.appendChild(bookCard);
                });
            } else {
                booksContainer.innerHTML = `
                <div class="alert alert-danger text-center">
                    No se pudieron cargar los libros. ${books.message || 'Intenta nuevamente más tarde.'}
                </div>
                `;
            }
        } catch (error) {
            console.error('Error al obtener los libros:', error);
            booksContainer.innerHTML = `
                <div class="alert alert-danger text-center">
                Error de conexión: No se pudo contactar con la API.
                </div>
            `;
        }
    }

    // Ver autores
    async function fetchAuthors() {
        const authorsContainer = document.getElementById('authorsContainer');
        authorsContainer.innerHTML = "";
        
        try {
            // Realizo la petición a la API para obtener los libros
            const response = await fetch(`${apiBaseUrl}/authors`);
            const authors = await response.json();

            if (response.ok) {
                authors.forEach(author => {
                // Creo la tarjeta para cada autor
                const authorCard = document.createElement('div');
                authorCard.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');

                const authorIMG = author.sexo === "masculino" ? "./img/author-hombre.png" : "./img/author-mujer.png";

                authorCard.innerHTML = `
                    <div class="card book-card shadow-sm h-100">
                        <img src=${authorIMG} class="card-img-top" alt="Imagen del libro">
                        <div class="card-body">
                            <h5 class="card-title text-center">${author.name} ${author.surname}</h5>
                        </div>
                        <a href="authorDetail.html?id=${author.id}" class="btn btn-primary m-2">Ver Detalle</a>
                    </div>
                `;

                // Agrego la tarjeta al contenedor
                authorsContainer.appendChild(authorCard);
                });
            } else {
                authorsContainer.innerHTML = `
                <div class="alert alert-danger text-center">
                    No se pudieron cargar los autores. ${authors.message || 'Intenta nuevamente más tarde.'}
                </div>
                `;
            }
        } catch (error) {
            console.error('Error al obtener los autores:', error);
            authorsContainer.innerHTML = `
                <div class="alert alert-danger text-center">
                Error de conexión: No se pudo contactar con la API.
                </div>
            `;
        }
    }