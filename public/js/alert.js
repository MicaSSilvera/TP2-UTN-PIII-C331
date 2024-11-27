function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    
    const alertHTML = `
        <div class="custom-alert border border-${type} text-${type}">
          <div class="custom-alert-header">Mensaje</div>
          <div class="custom-alert-body">${message}</div>
          <div class="custom-alert-footer">
            <button class="btn btn-${type}" onclick="closeCustomAlert()">Aceptar</button>
          </div>
        </div>
      `;
  
    alertPlaceholder.innerHTML = alertHTML;
  
    // Mostrar la alerta
    const alertElement = document.querySelector('.custom-alert');
    alertElement.style.display = 'block';
}
  
function closeCustomAlert() {
    // Ocultar la alerta
    const alertElement = document.querySelector('.custom-alert');
    alertElement.style.display = 'none';
    window.location.href = 'index.html'; // Redirecciono al listado principal
}