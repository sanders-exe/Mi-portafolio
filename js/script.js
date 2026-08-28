emailjs.init('BmjrA-we02jGJpeCp');

const botonModo = document.getElementById('toggle-modo');

botonModo.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
});

const formulario = document.getElementById('form-contacto');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let esValido = true;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    if (nombre.value.trim().length < 2) {
        document.getElementById('error-nombre').textContent = 'El nombre debe tener al menos 2 caracteres.';
        esValido = false;
    } else {
        document.getElementById('error-nombre').textContent = '';
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        document.getElementById('error-email').textContent = 'Ingresá un correo electrónico válido.';
        esValido = false;
    } else {
        document.getElementById('error-email').textContent = '';
    }

    if (mensaje.value.trim().length === 0) {
        document.getElementById('error-mensaje').textContent = 'El mensaje no puede estar vacío.';
        esValido = false;
    } else {
        document.getElementById('error-mensaje').textContent = '';
    }

   if (esValido) {
    emailjs.send('service_sc02g98', 'template_lb6g9ud', {
        name: nombre.value.trim(),
        email: email.value.trim(),
        message: mensaje.value.trim()
    })
    .then(function() {
        alert('¡Mensaje enviado correctamente!');
        formulario.reset();
    })
    .catch(function(error) {
        alert('Hubo un error al enviar el mensaje. Intentá de nuevo.');
        console.error(error);
    });
}
});
const proyectos = [
    {
        titulo: 'Red LAN',
        descripcion: 'Proyecto de red LAN que incluye la configuración de dispositivos y la gestión de la red.',
        imagen: 'img/proyecto1.png',
        
    },
    {
        titulo: 'Gestión de empleados con interfaz web',
        descripcion: 'Aplicación web para la gestión de empleados, incluyendo registro, actualización y eliminación de información.',
        imagen: 'img/proyecto2.png',
       
    },
    {
        titulo: 'Sistema sobre la gestion de un aeropuerto',
        descripcion: 'Sistema para la gestión de operaciones en un aeropuerto, incluyendo control de vuelos y coordinación de servicios.',
        imagen: 'img/proyecto3.png',
       
    }
];
const modalOverlay = document.getElementById('modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const botonesDetalle = document.querySelectorAll('.btn-detalle');

botonesDetalle.forEach(function(boton){ 
    boton.addEventListener('click', function(evento){
        evento.preventDefault();

        const indice = boton.getAttribute('data-proyecto');
        const proyecto = proyectos[indice];
        modalImg.src = proyecto.imagen;
        modalImg.alt = proyecto.titulo;
        modalTitulo.textContent = proyecto.titulo;
        modalDescripcion.textContent = proyecto.descripcion;

        modalOverlay.classList.add ('activo');
    });
});
document.getElementById('modal-cerrar').addEventListener('click', function(){
    modalOverlay.classList.remove('activo');

});
modalOverlay.addEventListener('click', function (evento){
    if(evento.target === modalOverlay) {
        modalOverlay.classList.remove('activo');
    }
});