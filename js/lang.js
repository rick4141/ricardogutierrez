
// Minimal i18n with data-i18n attributes and localStorage
(function(){
  const STORAGE_KEY = 'site_lang';
  const defaultLang = localStorage.getItem(STORAGE_KEY) || 'es';
  
  const dictionaries = {
    es: {
      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.cv': 'CV',
      'nav.blog': 'Blog',
      'nav.contact': 'Contacto',
      'hero.subtitle': 'Ingeniería en Robótica y Sistemas Digitales • 7º semestre',
      'hero.seeProjects': 'Ver proyectos',
      'hero.cv': 'Descargar CV',
      'hero.contact': 'Contacto',
      'about.title': 'Sobre mí',
      'about.lead': 'Desarrollo soluciones de IA, robótica y software: visión por computadora, control embebido, orquestación de LLMs y Linux/Yocto.',
      'skills.title': 'Habilidades',
      'projects.title': 'Proyectos',
      'cta.title': '¿Trabajamos juntos?',
      'cta.lead': 'Prototipos rápidos, investigación aplicada y soluciones listas para producción.',
      'cta.button': 'Hablemos',
      'contact.title': 'Contacto',
      'contact.lead': 'Envíame un mensaje y te respondo a la brevedad.',
      'contact.name': 'Nombre',
      'contact.email': 'Email',
      'contact.message': 'Mensaje',
      'contact.send': 'Enviar mensaje',
      'blog.title': 'Notas técnicas',
      'post.title.llmcom': 'LLM-COM: orquestación distribuida de LLMs',
      'resume.profile': 'Perfil',
      'resume.experience': 'Experiencia y proyectos',
      'resume.education': 'Educación',
      'resume.print': 'Imprimir / Guardar PDF',
      'resume.download': 'Descargar CV (PDF)',
      'skills.emb': 'Embebidos',
      'skills.emb.desc': 'STM32, Raspberry Pi, Jetson, FPGA (Kria)',
      'skills.rob': 'Robótica/Visión',
      'skills.rob.desc': 'ROS 2, OpenCV, SLAM, ArUco, YOLO',
      'skills.devops': 'Back/DevOps',
      'skills.devops.desc': 'Python, Bash, Docker, Yocto, CI',
      'skills.sec': 'Ciberseguridad',
      'skills.sec.desc': 'Wazuh, pfSense, hardening Linux',
      'proj.llmcom.title': 'LLM-COM: coordinación distribuida de LLMs',
      'proj.llmcom.desc': 'Agentes coordinadores, delegación, capacidades y grafo de razonamiento.',
      'proj.devsecai.title': 'DevSecAI Linux',
      'proj.devsecai.desc': 'Distro modular para dev, ciberseguridad e IA con toolchains, ROS 2 y ML.',
      'proj.sage.title': 'Agriculture SAGE Robot',
      'proj.sage.desc': 'Arquitectura distribuida con IA para detectar anomalías en cultivos.',
      'proj.kria.title': 'Detección en FPGA (Kria KV260)',
      'proj.kria.desc': 'Pipeline modular para detección en cámara inteligente con modelos optimizados en FPGA.',
      'proj.warehouse.title': 'Robot autónomo de almacén (ROS 2)',
      'proj.warehouse.desc': 'Localización de objetos, SLAM y reporte de coordenadas en mapa.',
      'proj.rtassistant.title': 'Asistente en tiempo real',
      'proj.rtassistant.desc': 'Detección de rostros, STT/TTS y respuestas con LLM.',
      'about.timeline.2025.llmcom.title': 'LLM-COM • Sistema distribuido de LLMs',
      'about.timeline.2025.llmcom.desc': 'Delegación entre modelos, TTL y trazabilidad.',
      'about.timeline.2025.devsecai.title': 'DevSecAI Linux',
      'about.timeline.2025.devsecai.desc': 'Distro Linux para desarrollo, ciberseguridad e IA.',
      'about.timeline.2024.sage.title': 'Agriculture SAGE Robot',
      'about.timeline.2024.sage.desc': 'Arquitectura distribuida y visión para cultivos.',
      'blog.post.lead': 'Protocolo para coordinar múltiples modelos de lenguaje mediante agentes, con TTL y grafo de razonamiento.',
      'blog.post.obj': 'Objetivos',
      'blog.post.obj1': 'Especialización por dominios (economía, política, etc.).',
      'blog.post.obj2': 'Delegación controlada con trazabilidad end-to-end.',
      'blog.post.obj3': 'Interoperabilidad con sistemas existentes.',
      'resume.profile.text': 'Enfocado en sistemas integrales de IA y robótica: firmware/control, visión y despliegue en dispositivos embebidos. Me gusta documentar y automatizar.',
      'resume.exp.llmcom': 'LLM-COM: coordinación distribuida de LLMs con agentes y trazabilidad.',
      'resume.exp.devsecai': 'DevSecAI Linux: distro para dev, ciberseguridad e IA basada en Yocto.',
      'resume.exp.sage': 'Agriculture SAGE Robot: arquitectura distribuida con IA para cultivos.',
      'resume.exp.assistant': 'Asistente en tiempo real: visión, STT/TTS y LLM para atención a clientes.',
      'resume.exp.warehouse': 'Robot autónomo de almacén (ROS 2): SLAM y localización de objetos.',
    },
    en: {
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.cv': 'Resume',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'hero.subtitle': 'B.Sc. in Robotics & Digital Systems • 7th semester',
      'hero.seeProjects': 'See projects',
      'hero.cv': 'Download CV',
      'hero.contact': 'Contact',
      'about.title': 'About me',
      'about.lead': 'I build AI, robotics and software solutions: computer vision, embedded control, LLM orchestration and Linux/Yocto.',
      'skills.title': 'Skills',
      'projects.title': 'Projects',
      'cta.title': 'Shall we work together?',
      'cta.lead': 'Rapid prototyping, applied research and production-ready solutions.',
      'cta.button': 'Let’s talk',
      'contact.title': 'Contact',
      'contact.lead': 'Send me a message and I will get back to you shortly.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send message',
      'blog.title': 'Tech notes',
      'post.title.llmcom': 'LLM-COM: distributed orchestration of LLMs',
      'resume.profile': 'Profile',
      'resume.experience': 'Experience & projects',
      'resume.education': 'Education',
      'resume.print': 'Print / Save PDF',
      'resume.download': 'Download CV (PDF)',
      'skills.emb': 'Embedded',
      'skills.emb.desc': 'STM32, Raspberry Pi, Jetson, FPGA (Kria)',
      'skills.rob': 'Robotics/Vision',
      'skills.rob.desc': 'ROS 2, OpenCV, SLAM, ArUco, YOLO',
      'skills.devops': 'Backend/DevOps',
      'skills.devops.desc': 'Python, Bash, Docker, Yocto, CI',
      'skills.sec': 'Cybersecurity',
      'skills.sec.desc': 'Wazuh, pfSense, Linux hardening',
      'proj.llmcom.title': 'LLM-COM: distributed coordination of LLMs',
      'proj.llmcom.desc': 'Coordinator agents, delegation, capability discovery and reasoning graph.',
      'proj.devsecai.title': 'DevSecAI Linux',
      'proj.devsecai.desc': 'Modular distro for dev, cybersecurity and AI with toolchains, ROS 2 and ML.',
      'proj.sage.title': 'Agriculture SAGE Robot',
      'proj.sage.desc': 'Distributed architecture with AI for anomaly detection in crops.',
      'proj.kria.title': 'Detection on FPGA (Kria KV260)',
      'proj.kria.desc': 'Modular pipeline for smart-camera detection with FPGA-optimized models.',
      'proj.warehouse.title': 'Autonomous warehouse robot (ROS 2)',
      'proj.warehouse.desc': 'Object localization, SLAM and map reporting.',
      'proj.rtassistant.title': 'Real-time assistant',
      'proj.rtassistant.desc': 'Face detection, STT/TTS and LLM responses.',
      'about.timeline.2025.llmcom.title': 'LLM-COM • Distributed LLM system',
      'about.timeline.2025.llmcom.desc': 'Delegation between models, TTL and traceability.',
      'about.timeline.2025.devsecai.title': 'DevSecAI Linux',
      'about.timeline.2025.devsecai.desc': 'Linux distro for development, cybersecurity and AI.',
      'about.timeline.2024.sage.title': 'Agriculture SAGE Robot',
      'about.timeline.2024.sage.desc': 'Distributed architecture and vision for crop monitoring.',
      'blog.post.lead': 'Protocol to coordinate multiple language models via agents, with TTL and a reasoning graph.',
      'blog.post.obj': 'Goals',
      'blog.post.obj1': 'Domain specialization (economics, politics, etc.).',
      'blog.post.obj2': 'Controlled delegation with end-to-end traceability.',
      'blog.post.obj3': 'Interoperability with existing systems.',
      'resume.profile.text': 'Focused on end-to-end AI and robotics systems: firmware/control, vision and embedded deployment. I like to document and automate.',
      'resume.exp.llmcom': 'LLM-COM: distributed coordination of LLMs with agents and traceability.',
      'resume.exp.devsecai': 'DevSecAI Linux: distro for dev, cybersecurity and AI based on Yocto.',
      'resume.exp.sage': 'Agriculture SAGE Robot: distributed architecture with AI for crops.',
      'resume.exp.assistant': 'Real-time assistant: vision, STT/TTS and LLM for customer service.',
      'resume.exp.warehouse': 'Autonomous warehouse robot (ROS 2): SLAM and object localization.',
    }
  };


  
  // Adjust placeholders for the contact form
  function applyPlaceholders(lang){
    const map = {
      es: {name:'Tu nombre', email:'Tu email', message:'Tu mensaje'},
      en: {name:'Your name', email:'Your email', message:'Your message'}
    };
    const m = map[lang] || map.es;
    const f = document.getElementById('contactForm');
    if (f){
      const name = f.querySelector('[name="name"]');
      const email = f.querySelector('[name="email"]');
      const msg = f.querySelector('[name="message"]');
      if (name) name.setAttribute('placeholder', m.name);
      if (email) email.setAttribute('placeholder', m.email);
      if (msg) msg.setAttribute('placeholder', m.message);
    }
  }

  function applyLang(lang){
    const dict = dictionaries[lang] || dictionaries.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Update lang toggle label
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = (lang === 'es') ? 'EN' : 'ES'; applyPlaceholders(lang);
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  window.i18n = { setLang, applyLang, get lang(){return localStorage.getItem(STORAGE_KEY) || 'es';} };

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(defaultLang);
    const toggle = document.getElementById('langToggle');
    if (toggle){
      toggle.addEventListener('click', () => {
        const current = localStorage.getItem(STORAGE_KEY) || 'es';
        setLang(current === 'es' ? 'en' : 'es');
      });
    }
  });
})();
