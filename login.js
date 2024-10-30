// login.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores ingresados en el formulario
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Obtener la información almacenada en el almacenamiento local
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validar que los campos no estén vacíos
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar si el email y contraseña coinciden con los guardados en el almacenamiento local
    if (storedEmail === email && storedPassword === password) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'cuenta.html'; // Redirigir a la página de cuenta
    } else {
        alert('Email o contraseña incorrectos.');
    }
});
