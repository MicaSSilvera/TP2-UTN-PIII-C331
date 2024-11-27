const apiBaseUrl = 'http://localhost:3000/api/books';

document.addEventListener('DOMContentLoaded', async () => {
    const bookId = new URLSearchParams(window.location.search).get('id');
  
    if (bookId) {
      try {
        const response = await fetch(`${apiBaseUrl}/${bookId}`);
        const book = await response.json();
  
        if (response.ok) {
            console.log("LIBROO: ", book);

            // Actualizo los datos visibles en la tarjeta
            document.getElementById('bookTitle').textContent = book.title;
            document.getElementById('bookCategory').textContent = `Categoría: ${book.category}`;
            document.getElementById('bookAuthor').textContent = `Autor: ${book.author}`;

            // Relleno el formulario
            document.getElementById('bookId').value = book.id;
            document.getElementById('title').value = book.title;
            document.getElementById('category').value = book.category;
            document.getElementById('author').value = book.author;
            document.getElementById('publishedAt').value = book.publishedAt; // Formato: "YYYY-MM-DD"
        } else {
          showAlert('No se pudo cargar el libro.', 'danger');
        }
      } catch (error) {
        console.error('Error al cargar el libro:', error);
        showAlert('No se pudo cargar el libro.', 'danger');
      }
    }
});

document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const bookId = document.getElementById('bookId').value;

    const updatedBook = {
      title: document.getElementById('title').value,
      category: document.getElementById('category').value,
      author: document.getElementById('author').value,
      publishedAt: document.getElementById('publishedAt').value,
    };
  
    try {
      const response = await fetch(`${apiBaseUrl}/${bookId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      });
  
      if (response.ok) {
        showAlert('¡Libro actualizado correctamente!', 'success');
        //window.location.href = 'index.html'; // Redirecciono al listado principal
      } else {
        showAlert('No se pudo actualizar el libro.', 'danger');
      }
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
    }
});

document.getElementById('deleteBook').addEventListener('click', async () => {
    const bookId = document.getElementById('bookId').value;
  
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      try {
        const response = await fetch(`${apiBaseUrl}/${bookId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          showAlert('Libro eliminado correctamente', 'success');
          //window.location.href = 'index.html'; // Redirecciono al listado principal
        } else {
          showAlert('No se pudo eliminar el libro.', 'danger');
        }
      } catch (error) {
        console.error('Error al eliminar el libro:', error);
      }
    }
});