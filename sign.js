// sign.js

const registroForm = document.getElementById('registro-form');

registroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (!usuario || !email || !password) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Comprobar si el usuario ya existe
    if (localStorage.getItem('usuario') === usuario) {
        alert('El usuario ya está registrado.');
        return;
    }

    // Guardar la información del usuario en el almacenamiento local
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registro exitoso!');
    window.location.href = 'Login.html'; // Redirigir a la página de inicio de sesión
});
