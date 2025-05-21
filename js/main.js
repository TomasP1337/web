// === Modal, CTA & Poptat buttons – unified logic ===
// This script now:
// 1. Opens the modal from both the navbar CTA and each .btn-price button
// 2. Works on every page (checks element existence before use)
// 3. Keeps the existing year & form‑handling functionality
// 4. Handles mobile burger menu toggling

(function(){
  'use strict';

  // === Helpers ===
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // === Auto‑year in footer ===
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Modal references (may be missing on some pages) ===
  const modal = $('#offerModal');
  const closeBtn = $('#modalClose');

  const openModal = e => {
    if (e) e.preventDefault();
    if (modal) modal.style.display = 'block';
  };

  // === CTA in navbar ===
  const ctaLink = $('#ctaOpen');
  if (ctaLink) ctaLink.addEventListener('click', openModal);

  // === „Poptat“ buttons inside pricing cards ===
  $$('.btn-price').forEach(btn => btn.addEventListener('click', openModal));

  // === Closing the modal ===
  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  // === Offer form submit ===
  const offerForm = $('#offerForm');
  if (offerForm) {
    offerForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Děkujeme za zájem! Ozveme se co nejdříve.');
      if (modal) modal.style.display = 'none';
      offerForm.reset();
    });
  }

  // === Contact form submit ===
  const contactForm = $('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Děkujeme za zprávu! Odpovíme co nejdříve.');
      contactForm.reset();
    });
  }

  // === Burger menu toggle ===
  const burger = $('.burger');
  const nav = $('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    // Zajistíme, že kliknutí na položku menu zavře menu na mobilním zařízení
    $$('nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          burger.classList.remove('open');
          nav.classList.remove('open');
          document.body.classList.remove('menu-open');
        }
      });
    });

    // Zajistíme, že kliknutí mimo menu zavře menu
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 &&
          nav.classList.contains('open') &&
          !nav.contains(e.target) &&
          !burger.contains(e.target)) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

        // Animace při scrollování
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const checkScroll = function() {
          animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.9) {
        element.classList.add('show');
      }
          });
        };

        // Zkontroluj prvky při načtení stránky
        checkScroll();

        // Zkontroluj prvky při scrollování
        window.addEventListener('scroll', checkScroll);

        // Vylepšení interaktivity
        const addHoverEffects = () => {
          const buttons = document.querySelectorAll('button, .cta, .cta-link');

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

        addHoverEffects();

        // Scroll-to-top tlačítko
        const createScrollTopButton = () => {
          // Vytvoř tlačítko
          const scrollTopBtn = document.createElement('button');
          scrollTopBtn.classList.add('scroll-top-btn');
          scrollTopBtn.innerHTML = '&uarr;';
          scrollTopBtn.setAttribute('aria-label', 'Zpět nahoru');
          document.body.appendChild(scrollTopBtn);

          // Zobrazuj tlačítko jen když uživatel scrolluje dolů
          window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
              scrollTopBtn.classList.add('visible');
            } else {
              scrollTopBtn.classList.remove('visible');
            }
          });

          // Scroll nahoru při kliknutí
          scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        };

        createScrollTopButton();
})();
