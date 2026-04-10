/* ============================================================
   DAPPLED LIGHT ESTATE — main.js
   Stack: Lenis 1 · GSAP 3 + ScrollTrigger · Swiper 11
============================================================ */

'use strict';

/* ----------------------------------------------------------
   HELPERS
---------------------------------------------------------- */
const isMobile = () => window.innerWidth < 768;
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animationsEnabled = () => !isMobile() && !prefersReducedMotion();

/* ----------------------------------------------------------
   1. LENIS SMOOTH SCROLL
      duration 1.2, easing = easeInOutSine
---------------------------------------------------------- */
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    smoothTouch: false,
    touchMultiplier: 1.5,
  });

  // Wire Lenis into GSAP's ticker so ScrollTrigger stays in sync
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  window._lenis = lenis;
  return lenis;
}

/* ----------------------------------------------------------
   2. HAMBURGER COLOUR — dark lines when scrolled off hero
---------------------------------------------------------- */
function initHamburgerColour() {
  const burger = document.querySelector('.hamburger');
  const dotNav = document.querySelector('.dot-nav');
  if (!burger) return;

  function tick() {
    const past = window.scrollY > window.innerHeight * 0.85;
    burger.classList.toggle('burger-dark', past);
    dotNav?.classList.toggle('dots-dark', past);
  }
  window.addEventListener('scroll', tick, { passive: true });
  tick();
}

/* ----------------------------------------------------------
   3. HAMBURGER + MOBILE NAV
---------------------------------------------------------- */
function initMobileNav() {
  const burger  = document.querySelector('.hamburger');
  const drawer  = document.getElementById('mobile-nav');
  const overlay = document.querySelector('.mobile-nav__overlay');
  const close   = document.querySelector('.mobile-nav__close');
  const links   = document.querySelectorAll('.mobile-nav__link');

  if (!burger || !drawer) return;

  const open = () => {
    burger.classList.add('is-open');
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const shut = () => {
    burger.classList.remove('is-open');
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () =>
    burger.classList.contains('is-open') ? shut() : open()
  );

  close?.addEventListener('click', shut);
  overlay?.addEventListener('click', shut);
  document.addEventListener('keydown', e => e.key === 'Escape' && shut());

  // Click: smooth scroll then close drawer
  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.replace('#', ''));
        if (target) {
          shut();
          // Small delay so drawer closes before scroll starts
          setTimeout(() => {
            if (window._lenis) {
              window._lenis.scrollTo(target, { offset: -80, duration: 1.4 });
            } else {
              const top = target.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 300);
        }
      }
    });
  });

  // Active state — highlight the current section's link
  function updateActive() {
    const threshold = window.innerHeight * 0.4;
    let currentId = null;

    links.forEach(link => {
      const id = link.getAttribute('href')?.replace('#', '');
      const section = document.getElementById(id);
      if (!section) return;
      if (section.getBoundingClientRect().top <= threshold) currentId = id;
    });

    links.forEach(link => {
      const id = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('is-active', id === currentId);
    });
  }

  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
}

/* ----------------------------------------------------------
   4. VERTICAL DOT NAVIGATION
      Uses native scroll events + getBoundingClientRect so it
      works on empty/short placeholder sections too.
      Rule: activate the LAST section whose top edge is at or
      above 40% of the viewport height.
---------------------------------------------------------- */
function initDotNav() {
  const dots = document.querySelectorAll('.dot-nav__dot');

  // Collect ALL sections that have an id — including divs used as anchors
  const sections = [
    ...document.querySelectorAll('[id]'),
  ].filter(el => {
    const tag = el.tagName.toLowerCase();
    return ['section', 'div', 'footer'].includes(tag) && el.id;
  });

  if (!dots.length) return;

  // Build id → dot lookup
  const dotMap = {};
  dots.forEach(d => {
    const href = d.getAttribute('href');
    if (href) dotMap[href.replace('#', '')] = d;
  });

  // Scroll helper — Lenis if available, native fallback always works
  function scrollTo(target) {
    if (window._lenis) {
      window._lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // Active dot tracking
  function setActive(id) {
    dots.forEach(d => d.classList.remove('is-active'));
    const dot = dotMap[id];
    if (dot) dot.classList.add('is-active');
  }

  function onScroll() {
    const threshold = window.innerHeight * 0.4;
    let current = null;

    dots.forEach(dot => {
      const id = dot.getAttribute('href')?.replace('#', '');
      const section = document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= threshold) current = id;
    });

    if (current) setActive(current);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Dot clicks — always scroll, no silent failure
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      const id = dot.getAttribute('href')?.replace('#', '');
      const target = document.getElementById(id);
      if (!target) return;
      scrollTo(target);
    });
  });
}

/* ----------------------------------------------------------
   5. HERO ANIMATION
      Staggered word reveal on page load
      eyebrow → title words → rule → subtitle → brand
      All translateY(20px) → 0, duration 0.7, stagger 0.15
---------------------------------------------------------- */
function initHeroAnimation() {
  const words    = document.querySelectorAll('.hero__word');
  const rule     = document.querySelector('.hero__rule');
  const subtitle = document.querySelector('.hero__sub');
  const brand    = document.querySelector('.hero__brand');

  if (!words.length) return;

  if (!animationsEnabled()) {
    // Show everything instantly — no animation
    gsap.set([words, rule, subtitle, brand], { opacity: 1, y: 0 });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  tl
    // Title words stagger in from below
    .to(words, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
    }, 0.3)
    // Thin rule fades in
    .to(rule, {
      opacity: 1,
      duration: 0.5,
    }, '-=0.2')
    // Subtitle rises in
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.2')
    // Vianaar brand block
    .to(brand, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    }, '-=0.25');
}

/* ----------------------------------------------------------
   6. HERO VIDEO PARALLAX — video drifts up as user scrolls
---------------------------------------------------------- */
function initHeroParallax() {
  if (!animationsEnabled()) return;

  const video = document.querySelector('.hero__video');
  if (!video) return;

  gsap.to(video, {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start:   'top top',
      end:     'bottom top',
      scrub:   true,
    },
  });
}

/* ----------------------------------------------------------
   7. GENERIC SCROLL REVEALS (.reveal)
      opacity 0→1, translateY 40→0, duration 0.8, power2.out
      data-delay="0.2" for optional stagger offset
---------------------------------------------------------- */
function initScrollReveal() {
  if (!animationsEnabled()) {
    document.querySelectorAll('.reveal').forEach(el =>
      gsap.set(el, { opacity: 1, y: 0 })
    );
    return;
  }

  document.querySelectorAll('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: parseFloat(el.dataset.delay) || 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once:  true,
      },
    });
  });
}

/* ----------------------------------------------------------
   8. STAGGERED GRID REVEALS
      Parent has .reveal-group, children have .reveal-item
---------------------------------------------------------- */
function initGridReveals() {
  if (!animationsEnabled()) {
    document.querySelectorAll('.reveal-item').forEach(el =>
      gsap.set(el, { opacity: 1, y: 0 })
    );
    return;
  }

  document.querySelectorAll('.reveal-group').forEach(group => {
    const items = group.querySelectorAll('.reveal-item');
    if (!items.length) return;

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: group,
        start:   'top 82%',
        once:    true,
      },
    });
  });
}

/* ----------------------------------------------------------
   9. DATA-SPEED PARALLAX ELEMENTS
      <div data-speed="0.6"> moves at 60% scroll speed
---------------------------------------------------------- */
function initParallax() {
  if (!animationsEnabled()) return;

  document.querySelectorAll('[data-speed]').forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.5;

    gsap.to(el, {
      y: () => (1 - speed) * ScrollTrigger.maxScroll(window) * 0.12,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start:   'top bottom',
        end:     'bottom top',
        scrub:   true,
      },
    });
  });
}

/* ----------------------------------------------------------
   10. NUMBER COUNTERS
       <span data-count="42" data-suffix="+" data-decimals="0">
---------------------------------------------------------- */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix   || '';
    const decimals = parseInt(el.dataset.decimals ?? 0);

    ScrollTrigger.create({
      trigger: el,
      start:   'top 85%',
      once:    true,
      onEnter() {
        if (!animationsEnabled()) {
          el.textContent = target.toFixed(decimals) + suffix;
          return;
        }
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = this.targets()[0].val.toFixed(decimals) + suffix;
          },
        });
      },
    });
  });
}

/* ----------------------------------------------------------
   11. ANCHOR SMOOTH SCROLL — all in-page links via Lenis
---------------------------------------------------------- */
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window._lenis?.scrollTo(target, { offset: -80, duration: 1.4 });
    });
  });
}

/* ----------------------------------------------------------
   12. SWIPER INSTANCES
       Registered here; instantiated once sections exist in DOM
---------------------------------------------------------- */
const swipers = {};

function initSwipers() {
  if (document.querySelector('.gallery-swiper')) {
    swipers.gallery = new Swiper('.gallery-swiper', {
      slidesPerView: 1.1,
      spaceBetween: 16,
      grabCursor: true,
      loop: false,
      breakpoints: {
        768:  { slidesPerView: 2.1, spaceBetween: 24 },
        1200: { slidesPerView: 3,   spaceBetween: 32 },
      },
      pagination: { el: '.gallery-swiper .swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.gallery-swiper .swiper-button-next',
        prevEl: '.gallery-swiper .swiper-button-prev',
      },
    });
  }

  if (document.querySelector('.sitemap-swiper')) {
    swipers.sitemap = new Swiper('.sitemap-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: false,
      pagination: {
        el: '.sitemap-swiper__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.sitemap-swiper__next',
        prevEl: '.sitemap-swiper__prev',
      },
    });
  }

  if (document.querySelector('.lifestyle-swiper')) {
    swipers.lifestyle = new Swiper('.lifestyle-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      pagination: {
        el: '.lifestyle-swiper__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.lifestyle-swiper__next',
        prevEl: '.lifestyle-swiper__prev',
      },
    });
  }

  if (document.querySelector('.residences-swiper')) {
    swipers.residences = new Swiper('.residences-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      breakpoints: {
        768:  { slidesPerView: 2, spaceBetween: 32 },
        1200: { slidesPerView: 3, spaceBetween: 40 },
      },
      pagination: { el: '.residences-swiper .swiper-pagination', clickable: true },
    });
  }
}

/* ----------------------------------------------------------
   13. GALLERY FADE-IN — IntersectionObserver on each .g-item
       Adds .g-item--visible when item enters viewport (≥40%)
       CSS handles the opacity + scale transition
---------------------------------------------------------- */
function initGalleryFade() {
  const items = document.querySelectorAll('.gallery-section .g-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('g-item--visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  items.forEach(item => observer.observe(item));
}

/* ----------------------------------------------------------
   14. CONTACT FORM — basic UX
---------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1200));

    btn.textContent = 'Sent — Thank You';
    btn.style.setProperty('background-color', 'var(--gold)');
    btn.style.setProperty('color', 'var(--white)');

    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.removeProperty('background-color');
      btn.style.removeProperty('color');
      form.reset();
    }, 4000);
  });
}

/* ----------------------------------------------------------
   INIT
   Each call is independent — one library failing (e.g. Lenis
   not loaded) will NOT break the others.
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  // ---- UI-critical: run first, no dependencies ----
  initMobileNav();
  initDotNav();
  initHamburgerColour();
  initAnchorScroll();

  // ---- GSAP-dependent ----
  if (typeof gsap !== 'undefined') {
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    try { initHeroAnimation(); }  catch (e) {}
    try { initHeroParallax(); }   catch (e) {}
    try { initScrollReveal(); }   catch (e) {}
    try { initGridReveals(); }    catch (e) {}
    try { initParallax(); }       catch (e) {}
    try { initCounters(); }       catch (e) {}
  }

  // ---- Lenis smooth scroll ----
  try {
    if (typeof Lenis !== 'undefined') initLenis();
  } catch (e) {
    console.warn('[Lenis] failed to init — using native scroll', e);
  }

  // ---- Swiper ----
  try {
    if (typeof Swiper !== 'undefined') initSwipers();
  } catch (e) {}

  // ---- Gallery fade ----
  try { initGalleryFade(); } catch (e) {}

  // ---- Amenities Read More (mobile only) ----
  const amenitiesToggle = document.getElementById('amenitiesToggle');
  const amenitiesExpand = document.getElementById('amenitiesExpand');
  if (amenitiesToggle && amenitiesExpand) {
    amenitiesToggle.addEventListener('click', () => {
      const isOpen = amenitiesExpand.classList.toggle('is-open');
      amenitiesToggle.setAttribute('aria-expanded', isOpen);
      amenitiesToggle.childNodes[0].textContent = isOpen ? 'Read Less ' : 'Read More ';
    });
  }

  // ---- Form ----
  try { initContactForm(); } catch (e) {}

  // Refresh ScrollTrigger after fonts/images settle
  window.addEventListener('load', () => {
    try { ScrollTrigger.refresh(); } catch (e) {}
  });
});
