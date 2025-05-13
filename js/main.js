
  document.getElementById('year').textContent = new Date().getFullYear();
  const ctaOpen=document.getElementById('ctaOpen');
  const modal=document.getElementById('offerModal');
  const modalClose=document.getElementById('modalClose');
  ctaOpen.addEventListener('click',e=>{e.preventDefault();modal.style.display='block';});
  modalClose.addEventListener('click',()=>modal.style.display='none');
  window.addEventListener('click',e=>{if(e.target===modal)modal.style.display='none';});
  document.getElementById('about-link').addEventListener('click',e=>e.preventDefault());


  // === Footer year ===
  document.getElementById('year').textContent = new Date().getFullYear();

  // === Modal logic ===
  const ctaOpen = document.getElementById('ctaOpen');
  const modal = document.getElementById('offerModal');
  const modalClose = document.getElementById('modalClose');
  ctaOpen.addEventListener('click', e => { e.preventDefault(); modal.style.display = 'block'; });
  modalClose.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  // === Basic form handling (placeholder) ===
  document.getElementById('offerForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Děkujeme za zájem! Ozveme se co nejdříve.');
    modal.style.display = 'none';
    this.reset();
  });


  // === Footer year ===
  document.getElementById('year').textContent = new Date().getFullYear();

  // === Simple form handler ===
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Děkujeme za zprávu! Odpovíme co nejdříve.');
    e.target.reset();
  });
