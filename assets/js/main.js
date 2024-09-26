// Mostrar/Ocultar Contraseña
const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      input.type = 'password';
      iconEye.classList.add('ri-eye-off-line');
      iconEye.classList.remove('ri-eye-line');
    }
  });
};

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validación básica
  if (email && password) {
    // Redirigir al menú (corrige la ruta al archivo menu.html)
    window.location.assign("Menu.html");
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Inicializa el mostrar/ocultar contraseña
showHiddenPassword('password', 'input-icon');
