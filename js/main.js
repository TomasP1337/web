(function(){
  'use strict';

  // Pomocná funkce pro výběr jediného elementu z DOMu podle CSS selektoru
  const $ = (sel, ctx=document) => ctx.querySelector(sel);

  // Pomocná funkce pro výběr všech elementů z DOMu podle CSS selektoru
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Najde element s id 'year' a nastaví jeho text na aktuální rok
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Najde modální okno a tlačítko pro zavření
  const modal = $('#offerModal');
  const closeBtn = $('#modalClose');

  // Funkce pro otevření modálního okna
  const openModal = e => {
    if (e) e.preventDefault(); // Zabrání výchozímu chování odkazu
    if (modal) modal.style.display = 'block'; // Zobrazí modal
  };

  // Přiřazení události kliknutí na odkaz s id 'ctaOpen' pro otevření modalu
  const ctaLink = $('#ctaOpen');
  if (ctaLink) ctaLink.addEventListener('click', openModal);

  // Přiřazení události kliknutí na všechna tlačítka s třídou 'btn-price' pro otevření modalu
  $$('.btn-price').forEach(btn => btn.addEventListener('click', openModal));

  // Přiřazení události kliknutí na tlačítko zavření modalu
  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');

  // Zavření modalu kliknutím mimo jeho obsah
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  // Zpracování odeslání formuláře v modalu 'offerForm'
  const offerForm = $('#offerForm');
  if (offerForm) {
    offerForm.addEventListener('submit', e => {
      e.preventDefault(); // Zabrání odeslání formuláře a obnově stránky
      alert('Děkujeme za zájem! Ozveme se co nejdříve.');
      if (modal) modal.style.display = 'none'; // Skryje modal
      offerForm.reset(); // Vymaže pole formuláře
    });
  }

  // Zpracování odeslání kontaktního formuláře 'contactForm'
  const contactForm = $('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault(); // Zabrání výchozímu odeslání
      alert('Děkujeme za zprávu! Odpovíme co nejdříve.');
      contactForm.reset(); // Resetuje formulář
    });
  }

  // Burger menu: najde tlačítko a navigaci
  const burger = $('.burger');
  const nav = $('nav');

  if (burger && nav) {
    // Při kliknutí na burger přepne třídu 'open' pro zobrazení/skrytí menu
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.classList.toggle('menu-open'); // Může posunout obsah
    });

    // Při kliknutí na jakýkoliv odkaz v navigaci na mobilu zavře menu a přesměruje
    $$('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) { // Pokud je šířka okna ≤768px
          const href = link.getAttribute('href');
          if (!href || href.startsWith('#')) return; // Pokud je to kotva v rámci stránky, nic se neděje

          e.preventDefault(); // Zabrání výchozímu chování
          burger.classList.remove('open');
          nav.classList.remove('open');
          document.body.classList.remove('menu-open');

          // Po malé prodlevě provede přesměrování
          setTimeout(() => {
            window.location.href = href;
          }, 200);
        }
      });
    });

    // Kliknutí mimo navigaci na mobilu menu zavře
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Animace prvků při scrollování: najde všechny elementy s třídou 'animate-on-scroll'
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Funkce, která přidá třídu 'show' elementům, když se objeví na obrazovce
  const checkScroll = function() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (window.innerWidth <= 768 || elementTop < windowHeight * 0.9) {
        element.classList.add('show'); // Přidá třídu pro zobrazení animace
      }
    });
  };

  checkScroll(); // Zkontroluje hned po načtení
  window.addEventListener('scroll', checkScroll); // Při scrollování stránky
  window.addEventListener('resize', checkScroll); // Při změně velikosti okna
  window.addEventListener('load', checkScroll); // Při úplném načtení stránky

  // Funkce pro jemné stíny a posun tlačítek při najetí myší
  const addHoverEffects = () => {
    const buttons = document.querySelectorAll('button, .cta');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
        button.style.boxShadow = '';
      });
    });
  };

  addHoverEffects(); // Inicializuje hover efekty
})();
