// Cargar la información del usuario desde localStorage al cargar la página
window.onload = function() {
    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');
    const email = localStorage.getItem('email');
    const telefono = localStorage.getItem('telefono');
    const id = localStorage.getItem('id');
    const numero = localStorage.getItem('numero');
    const direccion = localStorage.getItem('direccion');
    const ciudad = localStorage.getItem('ciudad');

    // Cargar la información en los campos correspondientes
    if (nombre) {
        document.getElementById('name').value = nombre;
        document.getElementById('perfil-nombre').innerText = nombre;
    }
    if (apellido) {
        document.getElementById('apellido').value = apellido;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (telefono) {
        document.getElementById('telefono').value = telefono;
    }
    if (id) {
        document.getElementById('id').value = id;
    }
    if (numero) {
        document.getElementById('numero').value = numero;
    }
    if (direccion) {
        document.getElementById('direccion').value = direccion;
    }
    if (ciudad) {
        document.getElementById('ciudad').value = ciudad;
    }

    // Actualiza el número de compras y la profesión de ejemplo
    const compras = Math.floor(Math.random() * 100);
    const profesion = "Diseño de Modas"; // Cambia esto a tu elección
    document.getElementById('perfil-compras').innerText = `${compras} Compras`;
    document.getElementById('perfil-profesion').innerText = profesion;
};

// Guardar la información del usuario en localStorage al enviar el formulario
const infoForm = document.getElementById('info-form');

infoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const id = document.getElementById('id').value;
    const numero = document.getElementById('numero').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;

    // Guardar la información en localStorage (sin la contraseña)
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('id', id);
    localStorage.setItem('numero', numero);
    localStorage.setItem('direccion', direccion);
    localStorage.setItem('ciudad', ciudad);

    // Actualiza el nombre en el perfil
    document.getElementById('perfil-nombre').innerText = nombre;

    // Genera un número aleatorio de compras y actualiza la profesión
    const compras = Math.floor(Math.random() * 100);
    const profesion = "Diseño de Modas"; // Cambia esto a tu elección
    document.getElementById('perfil-compras').innerText = `${compras} Compras`;
    document.getElementById('perfil-profesion').innerText = profesion;

    // Alerta de éxito
    alert('Información guardada exitosamente!');
});

// Función para verificar la contraseña
function cambiarContrasena() {
    const contrasenaIngresada = document.getElementById('password').value; // Obtener la contraseña ingresada
    const contrasenaGuardada = localStorage.getItem('password'); // Obtener la contraseña guardada

    if (contrasenaIngresada === contrasenaGuardada) {
        // Si la contraseña es correcta, redirigir a contrasena.html
        window.location.href = 'contrasena.html';
    } else {
        // Si la contraseña es incorrecta, mostrar un mensaje de error
        alert('La contraseña ingresada es incorrecta. Inténtalo de nuevo.');
    }
}

// Asignar la función al evento de clic en el enlace "CAMBIAR"
document.querySelector('.contraseña a').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del enlace
    cambiarContrasena(); // Llamar a la función para verificar la contraseña
});
