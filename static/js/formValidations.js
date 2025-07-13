function showError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function hideError(id) {
  document.getElementById(id).textContent = '';
}

function validateForm() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  let isValid = true;

  if (nombre === '') {
    showError('error-nombre', 'El nombre es obligatorio');
    isValid = false;
  } else {
    hideError('error-nombre');
  }

  if (email === '') {
    showError('error-email', 'El email es obligatorio');
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    showError('error-email', 'El email no es válido');
    isValid = false;
  } else {
    hideError('error-email');
  }

  if (mensaje === '') {
    showError('error-mensaje', 'El mensaje es obligatorio');
    isValid = false;
  } else {
    hideError('error-mensaje');
  }

  return isValid;
}
