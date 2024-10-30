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
    
    // Recuperar la contraseña guardada
    const storedPassword = localStorage.getItem('password'); 

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

    // Mostrar la contraseña actual en la consola
    console.log('Contraseña almacenada:', storedPassword); // Para verificar
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

    // Guardar la información en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('id', id);
    localStorage.setItem('numero', numero);
    localStorage.setItem('direccion', direccion);
    localStorage.setItem('ciudad', ciudad);

    // Almacenar la contraseña actual en localStorage
    const passwordInput = document.getElementById("password").value;
    localStorage.setItem('password', passwordInput); // Guardar la nueva contraseña

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

// Maneja el evento de envío del formulario de cambio de contraseña
document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtenemos las contraseñas ingresadas
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;

    // Verificamos si la contraseña actual es correcta
    if (currentPassword === localStorage.getItem('password')) {
        localStorage.setItem('password', newPassword); // Actualiza la contraseña en localStorage
        alert("¡Contraseña cambiada exitosamente!");

        // Limpia los campos después de cambiar la contraseña
        document.getElementById("current-password").value = "";
        document.getElementById("new-password").value = "";
    } else {
        alert("La contraseña actual no es correcta. Intenta de nuevo.");
    }
}); 