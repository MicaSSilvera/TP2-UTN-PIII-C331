const apiBaseUrl = 'http://localhost:3000/api/authors';

document.addEventListener('DOMContentLoaded', async () => {
    const authorId = new URLSearchParams(window.location.search).get('id');
  
    if (authorId) {
      try {
        const response = await fetch(`${apiBaseUrl}/${authorId}`);
        const author = await response.json();
  
        if (response.ok) {
            console.log("AUTOOR: ", author);

            // Actualizo los datos visibles en la tarjeta
            const authorIMG = author.sexo === "masculino" ? "./img/author-hombre.png" : "./img/author-mujer.png";
            document.getElementById('imgAuthor').src = authorIMG;
            document.getElementById('authorTitle').textContent = `${author.name} ${author.surname}`;

            // Relleno el formulario
            document.getElementById('authorId').value = author.id;
            document.getElementById('authorName').value = author.name;
            document.getElementById('authorSurname').value = author.surname;
            document.getElementById('authorSexo').value = author.sexo;
            
        } else {
            showAlert('No se pudo cargar el autor.', 'danger');
        }
      } catch (error) {
        console.error('Error al cargar el autor:', error);
        showAlert('No se pudo cargar el autor.', 'danger');
      }
    }
});

document.getElementById('authorForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const authorId = document.getElementById('authorId').value;

    const updatedAuthor = {
      name: document.getElementById('authorName').value,
      surname: document.getElementById('authorSurname').value,
      sexo: document.getElementById('authorSexo').value,
    };
  
    try {
      const response = await fetch(`${apiBaseUrl}/${authorId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAuthor),
      });
  
      if (response.ok) {
        showAlert('¡Autor actualizado correctamente!', 'success');
        //window.location.href = 'index.html'; // Redirecciono al listado principal
      } else {
        showAlert('No se pudo actualizar el autor.', 'danger');
      }
    } catch (error) {
      console.error('Error al actualizar el autor:', error);
      showAlert('No se pudo actualizar el autor.', 'danger');
    }
});

document.getElementById('deleteAuthor').addEventListener('click', async () => {
    const bookId = document.getElementById('bookId').value;
  
    if (confirm('¿Estás seguro de que deseas eliminar este Autor?')) {
      try {
        const response = await fetch(`${apiBaseUrl}/${bookId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          showAlert('Autor eliminado correctamente', 'success');
        } else {
          showAlert('No se pudo eliminar el autor.', 'danger');
        }
      } catch (error) {
        console.error('Error al eliminar el libro:', error);
        showAlert('No se pudo eliminar el autor.', 'danger');
      }
    }
});