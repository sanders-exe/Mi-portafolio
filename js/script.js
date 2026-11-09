const themeButton = document.querySelector('#toggle-modo');
const root = document.documentElement;

function setLightTheme(enabled) {
    root.dataset.theme = enabled ? 'light' : 'dark';
    themeButton.setAttribute('aria-pressed', String(enabled));
}

try {
    setLightTheme(localStorage.getItem('portafolio-tema') === 'light');
} catch {
    setLightTheme(false);
}
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
    const enabled = root.dataset.theme !== 'light';
    setLightTheme(enabled);
    try {
        localStorage.setItem('portafolio-tema', root.dataset.theme);
    } catch {
        // El tema sigue activo durante esta visita.
    }
});

const contactForm = document.querySelector('#form-contacto');
const contactStatus = document.querySelector('#estado-contacto');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    const fields = new FormData(contactForm);
    const name = fields.get('name').trim();
    const email = fields.get('email').trim();
    const message = fields.get('message').trim();

    if (name.length < 2 || !message) {
        contactStatus.textContent = 'Revisá el nombre y escribí un mensaje antes de enviarlo.';
        contactForm.elements[name.length < 2 ? 'name' : 'message'].focus();
        return;
    }
    if (!window.emailjs) {
        contactStatus.textContent = 'El servicio de correo no está disponible. Intentá de nuevo más tarde.';
        return;
    }

    submitButton.disabled = true;
    contactStatus.textContent = 'Enviando mensaje…';
    try {
        await window.emailjs.send('service_sc02g98', 'template_lb6g9ud', {
            name, email, message
        }, { publicKey: 'BmjrA-we02jGJpeCp' });
        contactForm.reset();
        contactStatus.textContent = 'Tu mensaje se envió correctamente.';
    } catch {
        contactStatus.textContent = 'No se pudo enviar el mensaje. Intentá de nuevo.';
    } finally {
        submitButton.disabled = false;
    }
});
