# Portafolio – Ricardo Gutierrez Juarez

## Estructura
- `index.html`: home, sobre mí, habilidades, proyectos.
- `about.html`: bio ampliada e hitos.
- `resume.html`: CV.
- `contact.html`: formulario con EmailJS.
- `blog/`: notas técnicas y posts.
- `css/styles.css`: estilos.
- `js/main.js`: interacciones.
- `js/config.js`: coloca tus claves de EmailJS.

## Activar EmailJS
1. Crea cuenta en https://dashboard.emailjs.com/ y consigue **Public Key**, **Service ID** y **Template ID**.
2. Edita `js/config.js` con tus valores.
3. En el template define: `from_name`, `reply_to`, `message`.
4. Prueba local: abre `contact.html` y envía un mensaje.

## Despliegue
- GitHub Pages / Netlify / Vercel (sitio estático). Basta con subir la carpeta `ricardogutierrez`.
- Comprueba que las rutas relativas (`assets/`, `css/`, `js/`) funcionan.

## Personalización rápida
- Colores en `css/styles.css` (variables CSS).
- Proyectos en `index.html` (sección #projects).
- Bio en `about.html` y CV en `resume.html`.
