 Portafolio Personal - Bryan Pineda

Sitio web personal de una sola página que incluye mi currículum vitae y un portafolio con los proyectos que he desarrollado durante la carrera de Ingeniería en Sistemas de Información en la Universidad Nacional (UNA), Sede Liberia.

 Demo en vivo

[Ver sitio desplegado](#) <!-- completar con el link una vez hecho el deploy -->

Descripción

Landing page de una sola página, navegable con anclas internas, que presenta mi perfil, formación académica, habilidades técnicas, idiomas y un portafolio con tres proyectos. Incluye un formulario de contacto con validación y envío real de correo.

Tecnologías utilizadas

- HTML5 (estructura semántica: header, nav, main, section, aside, article, footer)
- CSS3 (Flexbox, Grid, variables CSS, diseño responsivo con media queries)
- JavaScript (sin frameworks)
- Google Fonts (Space Grotesk)
- EmailJS (para el envío de correos desde el formulario, sin backend)

Funcionalidades

- Botón de modo claro / oscuro, que cambia las variables de color con JavaScript
- Validación del formulario de contacto (nombre, formato de email, mensaje no vacío) con mensajes de error
- Envío real del formulario a mi correo usando EmailJS
- Modal con el detalle de cada proyecto al hacer clic en "Ver detalle", sin salir de la página
- Efectos hover en las tarjetas de proyecto y en los botones

Estructura del proyecto

```
mi-portafolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── proyecto1.png
│   ├── proyecto2.png
│   └── proyecto3.png
└── README.md
```

Secciones del sitio

- Inicio: presentación breve
- Educación: formación académica y técnica
- Idiomas: español (nativo), inglés (intermedio)
- Habilidades: herramientas y tecnologías que manejo
- Proyectos: portafolio con 3 proyectos, tarjetas y modal de detalle
- Contacto: formulario con validación y envío de correo

## Cómo verlo localmente

1. Cloná el repositorio:
```
git clone https://github.com/tu-usuario/mi-portafolio.git
```
2. Abrí la carpeta en Visual Studio Code (o el editor que prefieras).
3. Usá la extensión Live Server (clic derecho sobre index.html → "Open with Live Server"). No lo abras con doble clic directo, porque el envío de correo necesita que el sitio corra con http:// y no con file://.

## Autor

Bryan Alexander Pineda Aguilar
Estudiante de Ingeniería en Sistemas de Información — UNA, Sede Liberia 