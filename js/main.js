// === Modal, CTA & Poptat buttons – unified logic ===
// This script now:
// 1. Opens the modal from both the navbar CTA and each .btn-price button
// 2. Works on every page (checks element existence before use)
// 3. Keeps the existing year & form‑handling functionality

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
})();
