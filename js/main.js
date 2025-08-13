// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if(!nb) return;
  nb.classList.toggle('scrolled', window.scrollY > 50);
});

// Typing effect
const phrases = [
  'IA aplicada: visión, STT/TTS, LLMs',
  'Robótica con ROS 2 y SLAM',
  'Sistemas embebidos con Linux/Yocto',
  'Pipelines reproducibles y CI'
];
let tv=0, ci=0;
function type(){
  const el = document.querySelector('.typing-effect');
  if(!el) return;
  const full = phrases[tv];
  el.textContent = full.slice(0, ci++);
  if(ci > full.length){
    setTimeout(()=>{ ci=0; tv=(tv+1)%phrases.length; }, 1400);
  }
  setTimeout(type, 100);
}
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration:800, once:true });
  type();
});

// EmailJS contact form handler
function handleContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const alertBox = document.getElementById('formAlert');
  try{
    // init if available
    if (window.emailjs && window.EMAILJS_CONFIG) {
      emailjs.init(window.EMAILJS_CONFIG.publicKey);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const payload = {
          from_name: fd.get('name'),
          reply_to: fd.get('email'),
          message: fd.get('message')
        };
        alertBox.className = 'alert alert-info mt-3';
        alertBox.textContent = 'Enviando...';
        try {
          await emailjs.send(window.EMAILJS_CONFIG.serviceId, window.EMAILJS_CONFIG.templateId, payload);
          alertBox.className = 'alert alert-success mt-3';
          alertBox.textContent = 'Gracias. Tu mensaje fue enviado correctamente.';
          form.reset();
        } catch (err) {
          alertBox.className = 'alert alert-danger mt-3';
          alertBox.textContent = 'No se pudo enviar el mensaje. Revisa la configuración de EmailJS.';
          console.error(err);
        }
      });
    } else {
      // Fallback: show note
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Configura js/config.js con tus claves de EmailJS para habilitar el envío.');
      });
    }
  }catch(e){ console.error(e); }
}
document.addEventListener('DOMContentLoaded', handleContactForm);

// WhatsApp: construye el enlace según idioma
(function(){
  function updateWhatsAppLink(){
    const el = document.getElementById('whatsapp-float');
    if(!el || !window.SITE_CONFIG || !SITE_CONFIG.whatsapp) return;
    const phone = (SITE_CONFIG.whatsapp.phone || '').replace(/\D/g,'');
    const lang = (window.i18n && i18n.lang) || 'es';
    const msg = lang === 'en' ? SITE_CONFIG.whatsapp.text_en : SITE_CONFIG.whatsapp.text_es;
    el.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
  document.addEventListener('DOMContentLoaded', updateWhatsAppLink);
  // Si usas el toggle ES/EN, actualiza después del click
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id === 'langToggle'){
      setTimeout(updateWhatsAppLink, 0);
    }
  });
  // Exponer por si quieres llamarlo manualmente
  window.updateWhatsAppLink = updateWhatsAppLink;
})();
