// Navbar background on scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
  // Typing effect
  const phrases = ['Soluciones Web Innovadoras', 'Automatización con Python', 'Desarrollo de Sistemas Escalables'];
  let tv=0, ci=0;
  function type(){
    const el = document.querySelector('.typing-effect');
    if(tv < phrases.length){
      let full = phrases[tv];
      el.textContent = full.slice(0, ci++);
      if(ci === full.length) { setTimeout(()=>{ci=0; tv=(tv+1)%phrases.length;},2000); }
    }
    setTimeout(type, 100);
  }
  // Init
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration:800, once:true });
    type();
  });
  