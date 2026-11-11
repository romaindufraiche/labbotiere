/* ==========================================================================
   La ferme de la Bottière — interactions & motion design
   Vanilla JS, aucune dépendance.
   ========================================================================== */
(() => {
  'use strict';

  const D = window.BOTTIERE;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const img = (g, n, sm) => `assets/img/${g}/${String(n).padStart(2, '0')}${sm ? '-sm' : ''}.jpg`;
  const euro = (n) => n.toLocaleString('fr-FR') + ' €';

  /* ---------- Icônes (traits 1.6px, style homogène) ---------- */
  const P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    left: '<path d="M15 6l-6 6 6 6"/>',
    right: '<path d="M9 6l6 6-6 6"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-9.3-9.2C1.5 8.2 3.4 4.5 7 4.5c2.1 0 3.6 1.2 5 3 1.4-1.8 2.9-3 5-3 3.6 0 5.5 3.7 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/>',
    share: '<path d="M12 3v13M7 8l5-5 5 5M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.8c2 .7 3.2 2.5 3.5 5.2"/>',
    bed: '<path d="M3 18V6M3 14h18v4M21 14v-3a3 3 0 00-3-3h-7v6"/><circle cx="7" cy="10.5" r="2"/>',
    bath: '<path d="M4 12h16v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3zM6 12V5.5A2.5 2.5 0 018.5 3c1.2 0 2.2.8 2.4 2M7 20l-1 1.5M17 20l1 1.5"/>',
    area: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/>',
    table: '<path d="M3 9h18M5 9v11M19 9v11M3 9l2-4h14l2 4M9 13h6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    mountain: '<path d="M2.5 19.5l6.5-11 4 6.5 2.5-3.5 6 8z"/><path d="M7.4 11.3l1.6 1.2 1.5-1.4"/>',
    sofa: '<path d="M5 11V8a3 3 0 013-3h8a3 3 0 013 3v3"/><path d="M3 13a2 2 0 014 0v2h10v-2a2 2 0 014 0v5H3z"/><path d="M5 18v2M19 18v2"/>',
    coffee: '<path d="M4 9h13v5a6 6 0 01-6 6h-1a6 6 0 01-6-6zM17 10h1.5a2.5 2.5 0 010 5H17"/><path d="M8 2.5c-.6 1 .6 1.8 0 3M12 2.5c-.6 1 .6 1.8 0 3"/>',
    snow: '<path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6"/><path d="M9.5 4l2.5 2.5L14.5 4M9.5 20l2.5-2.5 2.5 2.5"/>',
    tree: '<path d="M12 21v-5M12 3l6 8h-3l4 5H5l4-5H6z"/>',
    check: '<path d="M4.5 12.5l4.5 4.5 10.5-11"/>',
    phone: '<path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 006.6 6.6l1.4-2.3 4.5 1.8V19a2 2 0 01-2 2A17.5 17.5 0 013 5.5a2 2 0 012-2z"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    home: '<path d="M3 11l9-7.5 9 7.5M5.5 9v11.5h13V9"/><path d="M10 20.5v-6h4v6"/>',
    key: '<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8L20 3M16.5 6.5l2.5 2.5"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    yoga: '<circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v6M5 10.5l7 1 7-1M7.5 20.5l4.5-7 4.5 7M5 20.5h14"/>',
    fire: '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-4 3.5-5.5 4-10 3 2 4 4.5 4 6.5 1-1 1.5-2 1.5-3.5 2 1.5 3.5 4.2 3.5 7 0 3.4-2.5 6-6.5 6z"/>',
    insta: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/>',
    fb: '<path d="M14 21v-7.5h2.6l.4-3H14V8.7c0-.9.3-1.5 1.6-1.5H17V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.2H8.5v3H11V21"/>',
    car: '<path d="M4 16.5V12l2-5.5h12l2 5.5v4.5M4 12h16M3.5 16.5h17v2.5h-3v-2.5M6.5 19v-2.5"/><circle cx="7.5" cy="14" r=".8" fill="currentColor"/><circle cx="16.5" cy="14" r=".8" fill="currentColor"/>',
    wash: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><circle cx="12" cy="13" r="4.5"/><path d="M7.5 6.5h2"/>',
    flame: '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-4 3.5-5.5 4-10 3 2 4 4.5 4 6.5 1-1 1.5-2 1.5-3.5 2 1.5 3.5 4.2 3.5 7 0 3.4-2.5 6-6.5 6z"/>',
    baby: '<circle cx="12" cy="9" r="5.5"/><path d="M10 8.5h.01M14 8.5h.01M10.5 11c.8.6 2.2.6 3 0M8 20.5c.8-3 2.2-4.5 4-4.5s3.2 1.5 4 4.5"/>',
    plate: '<circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><path d="M2.5 4v6.5M2.5 7.5h0M21.5 4v16"/>',
    wifi: '<path d="M2.5 9a14 14 0 0119 0M5.5 12.5a9.5 9.5 0 0113 0M8.7 16a5 5 0 016.6 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/>'
  };
  const ic = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.check}</svg>`;
  window.BOTTIERE.ic = ic;

  const amenityIcon = (a) => {
    const t = a.toLowerCase();
    if (/cuisine|induction|four|réfrig|vaisselle/.test(t)) return 'plate';
    if (/salle d’eau|douche|wc/.test(t)) return 'bath';
    if (/lave-linge|linge/.test(t)) return 'wash';
    if (/bébé/.test(t)) return 'baby';
    if (/barbecue|chauffage/.test(t)) return 'flame';
    if (/jardin|herbes|balançoire/.test(t)) return 'tree';
    if (/terrasse|extérieur/.test(t)) return 'sun';
    if (/vue/.test(t)) return 'mountain';
    if (/salon/.test(t)) return 'sofa';
    if (/salle à manger|table/.test(t)) return 'table';
    if (/petit-déj/.test(t)) return 'coffee';
    if (/parking/.test(t)) return 'car';
    return 'check';
  };

  /* ---------- Header / menu / footer partagés ---------- */
  const isHome = document.body.dataset.page === 'home';
  const navLinks = [
    ['index.html#logements', 'Nos logements'],
    ['index.html#experiences', 'Expériences'],
    ['index.html#ferme', 'La ferme'],
    ['index.html#tarifs', 'Tarifs'],
    ['index.html#infos', 'Infos pratiques']
  ];
  const href = (h) => (isHome ? h.replace('index.html', '') : h);

  const header = document.createElement('header');
  header.className = 'header' + (isHome ? '' : ' header--solid');
  header.innerHTML = `
    <div class="container header__inner">
      <a class="header__logo" href="index.html" aria-label="La ferme de la Bottière — accueil">
        <img class="logo-light" src="assets/logo-light.png" alt="La ferme de la Bottière" width="640" height="317">
        <img class="logo-dark" src="assets/logo.png" alt="" width="640" height="317">
      </a>
      <nav class="header__nav" aria-label="Navigation principale">
        ${navLinks.map(([h, l]) => `<a href="${href(h)}">${l}</a>`).join('')}
      </nav>
      <div class="header__actions">
        <a class="btn btn--light btn--sm" href="tel:${D.phone}">${ic('phone')} ${D.phoneLabel}</a>
        <a class="btn btn--amber btn--sm" href="#reserver">Réserver</a>
        <button class="header__burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  const mnav = document.createElement('nav');
  mnav.className = 'mnav';
  mnav.setAttribute('aria-label', 'Menu mobile');
  mnav.innerHTML = navLinks.map(([h, l]) => `<a href="${href(h)}">${l}</a>`).join('') +
    `<a href="#reserver" style="color:var(--amber)">Réserver</a>
     <div class="mnav__foot">${D.address}<br><a href="tel:${D.phone}" style="font-family:var(--sans);font-size:15px;opacity:1;transform:none;display:inline">${D.phoneLabel}</a></div>`;
  header.after(mnav);

  const burger = $('.header__burger');
  const toggleNav = (open) => {
    document.body.classList.toggle('nav-open', open);
    document.body.classList.toggle('is-locked', open);
    mnav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
  };
  burger.addEventListener('click', () => toggleNav(!mnav.classList.contains('is-open')));
  $$('a', mnav).forEach((a) => a.addEventListener('click', () => toggleNav(false)));

  // Header : solide après le hero, se cache en descendant
  let lastY = 0;
  const onScrollHeader = () => {
    const y = window.scrollY;
    if (isHome) header.classList.toggle('is-solid', y > window.innerHeight * 0.75);
    header.classList.toggle('is-hidden', y > 400 && y > lastY && !mnav.classList.contains('is-open'));
    lastY = y;
  };
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer__top">
        <div>
          <img class="footer__logo" src="assets/logo-light.png" alt="La ferme de la Bottière" loading="lazy">
          <p>Gîtes, chambres d’hôtes et accueil de séjours au cœur du Parc naturel régional du massif des Bauges.</p>
          <div class="footer__social">
            <a href="${D.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ic('insta')}</a>
            <a href="${D.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ic('fb')}</a>
          </div>
        </div>
        <div>
          <h4>Logements</h4>
          <ul>${D.logements.map((l) => `<li><a href="${l.url}">${l.name}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Découvrir</h4>
          <ul>
            <li><a href="${href('index.html#experiences')}">Salle de yoga & activités</a></li>
            <li><a href="${href('index.html#experiences')}">Bain nordique</a></li>
            <li><a href="${href('index.html#tarifs')}">Tarifs & disponibilités</a></li>
            <li><a href="${href('index.html#infos')}">Infos pratiques</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="${D.maps}" target="_blank" rel="noopener">La Bottière, En Brovant<br>73340 Aillon-le-Vieux</a></li>
            <li><a href="tel:${D.phone}">${D.phoneLabel}</a></li>
            <li><a href="#reserver">Réserver en direct</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__big" aria-hidden="true">La Bottière</div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} La ferme de la Bottière · Tous droits réservés</span>
        <span>Meilleur tarif garanti en réservation directe</span>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- Loader & rideau de transition ---------- */
  const loader = $('.loader');
  const curtain = document.createElement('div');
  curtain.className = 'page-curtain';
  document.body.append(curtain);

  const finishLoading = () => {
    document.body.classList.remove('is-loading');
    if (loader) loader.classList.add('is-done');
    startReveals();
  };
  if (loader && !reduced && !sessionStorage.getItem('bottiere-visited')) {
    sessionStorage.setItem('bottiere-visited', '1');
    window.addEventListener('load', () => setTimeout(finishLoading, 900));
    setTimeout(finishLoading, 3200); // garde-fou
  } else {
    if (loader) loader.remove();
    requestAnimationFrame(finishLoading);
  }

  // Transition entre pages internes
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || reduced || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname || !/\.html$|\/$/.test(url.pathname)) return;
    e.preventDefault();
    curtain.classList.add('is-active');
    setTimeout(() => (location.href = a.href), 520);
  });
  window.addEventListener('pageshow', (e) => { if (e.persisted) curtain.classList.remove('is-active'); });

  /* ---------- Texte découpé mot par mot ---------- */
  const splitText = () => $$('[data-split]:not(.split)').forEach((el) => {
    let i = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'w';
            w.innerHTML = `<span style="--i:${i++}">${part}</span>`;
            frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    };
    walk(el);
    el.classList.add('split');
  });

  /* ---------- Révélations au scroll ---------- */
  let revealsStarted = false;
  function startReveals() {
    if (revealsStarted) return;
    revealsStarted = true;
    splitText();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    const observe = () => $$('[data-reveal]:not(.is-in), .split:not(.is-in)').forEach((el) => io.observe(el));
    observe();
    window.BOTTIERE.observe = observe;

    // Compteurs
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const el = en.target, end = +el.dataset.count, t0 = performance.now(), dur = 1800;
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(end * e);
          if (p < 1) requestAnimationFrame(tick);
        };
        reduced ? (el.textContent = end) : requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    $$('[data-count]').forEach((el) => cio.observe(el));
  }

  /* ---------- Parallaxe douce ---------- */
  const parallax = () => {
    const els = $$('[data-parallax]');
    if (!els.length || reduced) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${p * -(+el.dataset.parallax || 60)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  };

  /* ---------- Boutons magnétiques ---------- */
  const magnetic = () => {
    if (reduced || !window.matchMedia('(hover: hover)').matches) return;
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => (el.style.transform = ''));
    });
  };

  /* ---------- Curseur « Découvrir » sur les visuels ---------- */
  const cursor = () => {
    if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const c = document.createElement('div');
    c.className = 'cursor';
    document.body.append(c);
    let x = 0, y = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; });
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      c.style.left = cx + 'px'; c.style.top = cy + 'px';
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest('[data-cursor]');
      const onCtrl = e.target.closest('button, .card__fav');
      if (t && !onCtrl) { c.textContent = t.dataset.cursor; c.classList.add('is-visible'); }
      else c.classList.remove('is-visible');
    });
  };

  /* ---------- Toast ---------- */
  let toastT;
  const toast = (msg) => {
    let t = $('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
    t.textContent = msg;
    t.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('is-on'), 2600);
  };

  /* ---------- Favoris ---------- */
  const favs = new Set(JSON.parse(localStorage.getItem('bottiere-favs') || '[]'));
  const toggleFav = (id, btn) => {
    favs.has(id) ? favs.delete(id) : favs.add(id);
    localStorage.setItem('bottiere-favs', JSON.stringify([...favs]));
    const on = favs.has(id);
    $$(`[data-fav="${id}"]`).forEach((b) => { b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    toast(on ? 'Ajouté à vos coups de cœur' : 'Retiré de vos coups de cœur');
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-fav]');
    if (b) { e.preventDefault(); e.stopPropagation(); toggleFav(b.dataset.fav, b); }
  });

  /* ---------- Carte logement (liste) ---------- */
  const cardHTML = (l, i = 0) => {
    const n = Math.min(l.count, 6);
    const imgs = Array.from({ length: n }, (_, k) => `<img src="${img(l.img, k + 1, true)}" alt="${l.name} — ${l.captions[k] || ''}" loading="lazy" draggable="false">`).join('');
    return `
      <article class="card" data-reveal style="--d:${i * 0.09}s" data-guests="${l.guests}" data-cat="${l.id === 'marmotte' ? 'chambre' : l.id === 'atelier' ? 'studio' : 'gite'}" data-cursor="Découvrir">
        <div class="card__media">
          <div class="card__track">${imgs}</div>
          <span class="card__badge">${l.label}</span>
          <button class="card__fav ${favs.has(l.id) ? 'is-on' : ''}" data-fav="${l.id}" aria-label="Ajouter ${l.name} aux coups de cœur" aria-pressed="${favs.has(l.id)}">${ic('heart')}</button>
          <button class="card__nav card__nav--prev" aria-label="Photo précédente">${ic('left')}</button>
          <button class="card__nav card__nav--next" aria-label="Photo suivante">${ic('right')}</button>
          <div class="card__dots">${Array.from({ length: n }, (_, k) => `<i class="${k ? '' : 'is-active'}"></i>`).join('')}</div>
        </div>
        <a class="card__link" href="${l.url}" aria-label="Voir ${l.name}"></a>
        <div class="card__body">
          <div class="card__row"><h3 class="card__title">${l.name}</h3><span class="card__label">${ic('area')} ${l.surface} m²</span></div>
          <p class="card__meta">${l.type} · ${l.guests} voyageurs · ${l.bedrooms} ch.</p>
          <p class="card__meta">${l.tagline}</p>
          <p class="card__price">${l.priceNote} <strong>${l.price} €</strong> / nuit</p>
        </div>
      </article>`;
  };

  const bindCards = (root) => {
    $$('.card', root).forEach((card) => {
      const track = $('.card__track', card), dots = $$('.card__dots i', card), n = dots.length;
      let i = 0;
      const go = (k) => {
        i = (k + n) % n;
        track.style.transform = `translateX(${-i * 100}%)`;
        dots.forEach((d, j) => d.classList.toggle('is-active', j === i));
      };
      $('.card__nav--prev', card).addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); go(i - 1); });
      $('.card__nav--next', card).addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); go(i + 1); });
      // swipe tactile
      let sx = null;
      const media = $('.card__media', card);
      media.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
      media.addEventListener('touchend', (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        sx = null;
      });
      // clic sur l'image → page logement
      media.addEventListener('click', (e) => { if (!e.target.closest('button')) $('.card__link', card).click(); });
      media.style.cursor = 'pointer';
    });
  };

  /* ==========================================================================
     RÉSERVATION — état partagé, sélecteurs maison (sans les contrôles natifs
     du système), section « Réserver » en bas de chaque page
     ========================================================================== */
  const pad = (n) => String(n).padStart(2, '0');
  const isoD = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseD = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const todayISO = isoD(new Date());
  const isIso = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || '');
  const nightsOf = (a, b) => Math.round((parseD(b) - parseD(a)) / 864e5);
  const fmtD = (s, o = { weekday: 'short', day: 'numeric', month: 'short' }) => parseD(s).toLocaleDateString('fr-FR', o);
  const byId = (id) => D.logements.find((l) => l.id === id);
  const maxGuests = (id) => (byId(id) ? byId(id).guests : 15);

  // État de la réservation, partagé par la recherche, la carte et la section « Réserver »
  const q0 = new URLSearchParams(location.search);
  const pageLid = ($('#logement') && $('#logement').dataset.id) || '';
  const st = { lid: pageLid || (byId(q0.get('logement')) ? q0.get('logement') : ''), a: '', b: '', g: 2 };
  if (isIso(q0.get('arrivee')) && q0.get('arrivee') >= todayISO) st.a = q0.get('arrivee');
  if (st.a && isIso(q0.get('depart')) && q0.get('depart') > st.a) st.b = q0.get('depart');
  if (+q0.get('voyageurs') > 0) st.g = +q0.get('voyageurs');
  st.g = Math.min(st.g, maxGuests(st.lid));
  const subs = [];
  const setSt = (patch) => {
    Object.assign(st, patch);
    st.g = Math.min(Math.max(1, st.g), maxGuests(st.lid));
    subs.forEach((f) => f(st));
  };
  const onSt = (f) => { subs.push(f); f(st); };

  // Estimation à partir de la grille « hors vacances » du site
  const stayEstimate = (lid, a, b, g) => {
    const L = byId(lid);
    if (!L || !a || !b) return null;
    const n = nightsOf(a, b);
    if (!(n > 0)) return null;
    let base;
    if (lid === 'marmotte') base = L.price * n;
    else if (lid === 'atelier') base = Math.floor(n / 7) * 420 + Math.min(n % 7, 6) * 70;
    else {
      const grid = { 1: 280, 2: 280, 3: 300, 4: 400, 5: 500, 6: 600 };
      base = Math.floor(n / 7) * 600 + (n % 7 ? grid[n % 7] : 0);
    }
    const extra = { 7: 15, 8: 20, 9: 25, 10: 30 };
    const sup = (lid === 'margeriaz' || lid === 'colombier') && g > 6 ? (extra[g] || 30) * n : 0;
    const tooShort = (lid === 'margeriaz' || lid === 'colombier') && n < 2;
    return { n, base, sup, total: base + sup, tooShort };
  };
  const estHTML = (lid, a, b, g) => {
    const e = stayEstimate(lid, a, b, g);
    if (!e) return '';
    return `
      <div><u>${e.n} nuit${e.n > 1 ? 's' : ''}${e.n >= 7 ? ' (7e nuit offerte)' : ''}</u><span>${euro(e.base)}</span></div>
      ${e.sup ? `<div><u>Supplément ${g} voyageurs</u><span>${euro(e.sup)}</span></div>` : ''}
      <div><u>Taxe de séjour</u><span style="color:var(--muted)">en sus</span></div>
      <div class="book__total"><span>Estimation hors vacances</span><span>${euro(e.total)}</span></div>
      ${e.tooShort ? '<p class="est-warn">2 nuits minimum pour ce gîte.</p>' : ''}
      ${lid === 'marmotte' ? '<p class="est-warn">Uniquement en complément d’un gîte.</p>' : ''}
      <p style="margin:0;font-size:12.5px;color:var(--muted)">Tarif indicatif, confirmé avec vous. Vacances scolaires : séjours à la semaine.</p>`;
  };

  // Champ « bouton » (remplace input/select)
  function pfield(k, label, cls = '') {
    return `<button type="button" class="pf ${cls}" data-f="${k}" aria-haspopup="dialog" aria-expanded="false"><span class="pf-lbl">${label}</span><span class="pf-val"></span></button>`;
  }

  /* ----- Fenêtres (popovers / feuilles sur mobile) ----- */
  const backdrop = document.createElement('div');
  backdrop.className = 'pop-backdrop';
  document.body.append(backdrop);
  const isSheet = () => window.innerWidth < 640;
  let cur = null; // { el, trigger, root }

  function closePop() {
    if (!cur) return;
    cur.el.classList.remove('is-open');
    $$('.pf.is-active', cur.root).forEach((x) => { x.classList.remove('is-active'); x.setAttribute('aria-expanded', 'false'); });
    backdrop.classList.remove('is-on');
    if (isSheet()) document.body.classList.remove('is-locked');
    cur = null;
  }
  function placePop(el, anchor) {
    if (isSheet()) { el.style.left = el.style.top = ''; return; }
    const r = anchor.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight;
    const center = el.classList.contains('pop--cal');
    let left = center ? r.left + r.width / 2 - w / 2 : r.left;
    left = Math.min(Math.max(12, left), window.innerWidth - w - 12);
    let top = r.bottom + 10;
    if (top + h > window.innerHeight - 12 && r.top - h - 10 > 12) top = r.top - h - 10;
    el.style.left = left + window.scrollX + 'px';
    el.style.top = top + window.scrollY + 'px';
  }
  function openPop(el, trigger, root, anchor) {
    if (cur && cur.el === el) { // même fenêtre, autre champ (Arrivée → Départ)
      cur.trigger = trigger;
      trigger.setAttribute('aria-expanded', 'true');
      return;
    }
    closePop();
    if (!el.isConnected) document.body.append(el);
    cur = { el, trigger, root, anchor: anchor || trigger };
    trigger.classList.add('is-active');
    trigger.setAttribute('aria-expanded', 'true');
    placePop(el, cur.anchor);
    requestAnimationFrame(() => el.classList.add('is-open'));
    if (isSheet()) { backdrop.classList.add('is-on'); document.body.classList.add('is-locked'); }
  }
  document.addEventListener('mousedown', (e) => {
    if (!cur) return;
    if (cur.el.contains(e.target) || cur.trigger.contains(e.target)) return;
    if (e.target.closest('.pf') && cur.root.contains(e.target)) return; // passage d’un champ à l’autre
    closePop();
  });
  backdrop.addEventListener('click', closePop);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePop(); });
  window.addEventListener('resize', () => cur && placePop(cur.el, cur.anchor));

  /* ----- Liste des logements ----- */
  const listEl = document.createElement('div');
  listEl.className = 'pop pop--list';
  listEl.setAttribute('role', 'dialog');
  function openList(trigger, root) {
    const all = root.dataset.all === '1';
    const opts = (all ? [{ id: '', name: 'Tous les logements', sub: 'De 3 à 15 voyageurs' }] : []).concat(
      D.logements.map((l) => ({ id: l.id, name: l.name, sub: `${l.guests} voyageurs · ${l.surface} m² · dès ${l.price} €`, img: img(l.img, 1, true) })));
    listEl.innerHTML = `<p class="pop__title">Choisissez votre logement</p>` + opts.map((o) => `
      <button type="button" class="pop-opt ${o.id === st.lid ? 'is-sel' : ''}" data-v="${o.id}">
        ${o.img ? `<img src="${o.img}" alt="">` : `<span class="ico-all">${ic('home')}</span>`}
        <span><strong>${o.name}</strong><small>${o.sub}</small></span>${ic('check', 'chk')}
      </button>`).join('');
    $$('.pop-opt', listEl).forEach((b) => b.addEventListener('click', () => {
      setSt({ lid: b.dataset.v });
      closePop();
      const next = $('[data-f="a"]', root);
      if (next && !st.a) setTimeout(() => next.click(), 180);
    }));
    openPop(listEl, trigger, root);
  }

  /* ----- Voyageurs ----- */
  const guestEl = document.createElement('div');
  guestEl.className = 'pop pop--guests';
  guestEl.setAttribute('role', 'dialog');
  function openGuests(trigger, root) {
    const lid = root.dataset.for || st.lid;
    const render = () => {
      const max = maxGuests(lid);
      guestEl.innerHTML = `
        <div class="gst">
          <div><strong>Voyageurs</strong><small>Adultes et enfants</small></div>
          <div class="step">
            <button type="button" data-d="-1" aria-label="Retirer un voyageur" ${st.g <= 1 ? 'disabled' : ''}>−</button>
            <output aria-live="polite">${st.g}</output>
            <button type="button" data-d="1" aria-label="Ajouter un voyageur" ${st.g >= max ? 'disabled' : ''}>+</button>
          </div>
        </div>
        <p class="gst-note">${byId(lid) ? `Jusqu’à ${max} voyageurs dans ce logement.` : 'Jusqu’à 15 voyageurs en réunissant deux gîtes.'} Lit et matériel bébé sur demande.</p>`;
      $$('[data-d]', guestEl).forEach((b) => b.addEventListener('click', () => { setSt({ g: st.g + +b.dataset.d }); render(); }));
    };
    render();
    openPop(guestEl, trigger, root);
  }

  /* ----- Calendrier (plage de dates) ----- */
  const calEl = document.createElement('div');
  calEl.className = 'pop pop--cal';
  calEl.setAttribute('role', 'dialog');
  calEl.setAttribute('aria-label', 'Choisir les dates');
  let calFocus = 'a', calView = null, calRoot = null;
  const monthStart = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
  const nowMonth = monthStart(new Date());
  const WD = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  function monthHTML(m) {
    const title = m.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    let h = `<div class="cal2__m"><p class="cal2__title">${title}</p><div class="cal2__grid">${WD.map((w) => `<span class="cal2__wd">${w}</span>`).join('')}`;
    const lead = (m.getDay() + 6) % 7;
    for (let i = 0; i < lead; i++) h += '<span></span>';
    const days = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      const iso = isoD(new Date(m.getFullYear(), m.getMonth(), d));
      const c = ['cal2__d'];
      if (iso === todayISO) c.push('is-today');
      if (iso === st.a) c.push('is-start');
      if (iso === st.b) c.push('is-end');
      if (st.a && st.b) { if (iso > st.a && iso < st.b) c.push('is-in'); if (iso === st.a) c.push('has-end'); }
      h += `<button type="button" class="${c.join(' ')}" data-d="${iso}" ${iso < todayISO ? 'disabled' : ''} aria-label="${fmtD(iso, { weekday: 'long', day: 'numeric', month: 'long' })}"><span>${d}</span></button>`;
    }
    return h + '</div></div>';
  }
  function renderCal() {
    const n = st.a && st.b ? nightsOf(st.a, st.b) : 0;
    const L = byId(calRoot && (calRoot.dataset.for || st.lid));
    const hint = calFocus === 'a' || !st.a ? 'Choisissez votre date d’arrivée' : 'Choisissez votre date de départ';
    calEl.innerHTML = `
      <div class="cal2__head">
        <button type="button" class="cal2__nav" data-nav="-1" aria-label="Mois précédent" ${calView <= nowMonth ? 'disabled' : ''}>${ic('left')}</button>
        <p class="cal2__hint">${hint}<small>${L ? L.minNights : 'Grands gîtes : 2 nuits min. · Atelier : 1 nuit'}</small></p>
        <button type="button" class="cal2__nav" data-nav="1" aria-label="Mois suivant">${ic('right')}</button>
      </div>
      <div class="cal2__months">${monthHTML(calView)}${monthHTML(new Date(calView.getFullYear(), calView.getMonth() + 1, 1))}</div>
      <div class="cal2__foot">
        <button type="button" class="cal2__clear">Effacer les dates</button>
        <span class="cal2__n">${n ? `${n} nuit${n > 1 ? 's' : ''} · ${fmtD(st.a)} → ${fmtD(st.b)}` : ''}</span>
        <button type="button" class="btn btn--sm cal2__ok">Valider</button>
      </div>`;
    if (calRoot) $$('.pf', calRoot).forEach((x) => x.classList.toggle('is-active', x.dataset.f === (calFocus === 'b' && st.a ? 'b' : 'a')));
  }
  calEl.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-nav]');
    if (nav) { calView = new Date(calView.getFullYear(), calView.getMonth() + +nav.dataset.nav, 1); renderCal(); return; }
    if (e.target.closest('.cal2__clear')) { setSt({ a: '', b: '' }); calFocus = 'a'; renderCal(); return; }
    if (e.target.closest('.cal2__ok')) { closePop(); return; }
    const day = e.target.closest('[data-d]');
    if (!day || day.disabled) return;
    const d = day.dataset.d;
    if (calFocus === 'a' || !st.a) {
      setSt({ a: d, b: st.b && st.b > d ? st.b : '' });
      calFocus = 'b';
    } else if (d <= st.a) {
      setSt({ a: d, b: '' });
    } else {
      setSt({ b: d });
      renderCal();
      setTimeout(closePop, 280);
      return;
    }
    renderCal();
  });
  // Aperçu de la plage au survol
  calEl.addEventListener('mouseover', (e) => {
    const day = e.target.closest('[data-d]');
    if (!day || calFocus !== 'b' || !st.a) return;
    const h = day.dataset.d;
    $$('.cal2__d', calEl).forEach((x) => x.classList.toggle('is-preview', x.dataset.d > st.a && x.dataset.d <= h));
  });
  calEl.addEventListener('mouseleave', () => $$('.is-preview', calEl).forEach((x) => x.classList.remove('is-preview')));

  function openCal(trigger, root, focus) {
    calRoot = root;
    calFocus = focus;
    calView = monthStart(st.a ? parseD(st.a) : new Date());
    if (calView < nowMonth) calView = nowMonth;
    renderCal();
    openPop(calEl, trigger, root, root.dataset.anchor === 'root' ? root : trigger.closest('.pfields') || trigger);
    if (cur) placePop(calEl, cur.anchor);
  }

  /* ----- Liaison d’un groupe de champs ----- */
  function bindFields(root) {
    const f = (k) => $(`[data-f="${k}"]`, root);
    const setVal = (el, txt, empty) => { if (!el) return; $('.pf-val', el).textContent = txt; el.classList.toggle('is-empty', !!empty); };
    onSt((s) => {
      setVal(f('lid'), s.lid ? byId(s.lid).name : root.dataset.all === '1' ? 'Tous les logements' : 'Choisir un logement', !s.lid && root.dataset.all !== '1');
      setVal(f('a'), s.a ? fmtD(s.a) : 'Ajouter une date', !s.a);
      setVal(f('b'), s.b ? fmtD(s.b) : 'Ajouter une date', !s.b);
      setVal(f('g'), `${s.g} voyageur${s.g > 1 ? 's' : ''}`);
      if (cur && cur.el === calEl && calRoot === root) renderCal();
    });
    if (f('lid')) f('lid').addEventListener('click', () => openList(f('lid'), root));
    if (f('a')) f('a').addEventListener('click', () => openCal(f('a'), root, 'a'));
    if (f('b')) f('b').addEventListener('click', () => openCal(f('b'), root, st.a ? 'b' : 'a'));
    if (f('g')) f('g').addEventListener('click', () => openGuests(f('g'), root));
  }

  /* ----- Section « Réserver » (avant le pied de page) ----- */
  const reserve = document.createElement('section');
  reserve.className = 'section reserve';
  reserve.id = 'reserver';
  reserve.innerHTML = `
    <div class="container reserve__grid">
      <div class="reserve__intro">
        <span class="eyebrow" data-reveal>Réserver en direct</span>
        <h2 data-split>Votre demande de <em>réservation</em></h2>
        <p class="lead" data-reveal>Choisissez votre logement et vos dates : nous vous confirmons la disponibilité rapidement, par téléphone ou par SMS.</p>
        <ul class="story__list">
          <li data-reveal><span class="ico">${ic('shield')}</span><div><strong>Meilleur tarif garanti</strong><span>Sans commission de plateforme, avec les mêmes conditions.</span></div></li>
          <li data-reveal style="--d:.08s"><span class="ico">${ic('phone')}</span><div><strong>Une réponse rapide</strong><span>Directement avec nous, par téléphone ou SMS.</span></div></li>
          <li data-reveal style="--d:.16s"><span class="ico">${ic('key')}</span><div><strong>Tout est prêt à votre arrivée</strong><span>Lits faits, chauffage inclus, conseils pour vos balades.</span></div></li>
        </ul>
        <p data-reveal>Vous préférez appeler ? <a class="link-arrow" href="tel:${D.phone}">${D.phoneLabel}</a></p>
      </div>

      <form class="rform" id="rform" novalidate data-reveal="scale">
        <div class="pfields" id="rfields">
          ${pfield('lid', 'Logement', 'pf--full')}${pfield('a', 'Arrivée')}${pfield('b', 'Départ')}${pfield('g', 'Voyageurs', 'pf--full')}
        </div>
        <div class="book__lines rform__est" id="r-est" hidden></div>
        <div class="rform__row">
          <label class="tf"><span>Votre nom</span><input name="name" autocomplete="name" placeholder="Prénom et nom" maxlength="80"></label>
          <label class="tf"><span>Téléphone</span><input name="tel" type="tel" autocomplete="tel" inputmode="tel" placeholder="06 12 34 56 78" maxlength="30"></label>
        </div>
        <label class="tf"><span>Un message ? <i>(facultatif)</i></span><textarea name="msg" rows="2" maxlength="600" placeholder="Heure d’arrivée, bain nordique, petit-déjeuner…"></textarea></label>
        <button class="btn btn--amber btn--block" type="submit">Envoyer ma demande ${ic('arrow')}</button>
        <p class="rform__hint">Votre demande s’ouvre dans votre messagerie, prête à envoyer. Aucun paiement à cette étape.</p>

        <div class="rform__done" hidden>
          <span class="rform__check">${ic('check')}</span>
          <h3>Votre demande est prête !</h3>
          <p class="rform__recap"></p>
          <p class="rform__help">Si votre messagerie ne s’est pas ouverte, appelez-nous ou copiez le message pour nous l’envoyer.</p>
          <div class="rform__acts">
            <a class="btn btn--sm" href="tel:${D.phone}">${ic('phone')} ${D.phoneLabel}</a>
            <button type="button" class="btn btn--ghost btn--sm" data-copy>Copier le message</button>
          </div>
          <button type="button" class="tool" data-edit>Modifier ma demande</button>
        </div>
      </form>
    </div>`;
  footer.before(reserve);

  const rform = $('#rform');
  bindFields($('#rfields'));
  onSt((s) => {
    const html = estHTML(s.lid, s.a, s.b, s.g);
    $('#r-est').innerHTML = html;
    $('#r-est').hidden = !html;
  });
  // Coordonnées retenues pour la fois suivante
  const saved = JSON.parse(localStorage.getItem('bottiere-contact') || '{}');
  rform.name.value = saved.name || '';
  rform.tel.value = saved.tel || '';

  let lastMsg = '';
  const flag = (el) => { el.classList.remove('is-error'); void el.offsetWidth; el.classList.add('is-error'); setTimeout(() => el.classList.remove('is-error'), 1600); };
  rform.addEventListener('submit', (e) => {
    e.preventDefault();
    closePop();
    const name = rform.name.value.trim(), tel = rform.tel.value.trim(), msg = rform.msg.value.trim();
    if (!st.lid) { flag($('[data-f="lid"]', rform)); toast('Choisissez votre logement'); return; }
    if (!st.a || !st.b) { flag($(`[data-f="${st.a ? 'b' : 'a'}"]`, rform)); toast('Choisissez vos dates d’arrivée et de départ'); return; }
    if (!name) { flag(rform.name); rform.name.focus(); toast('Indiquez votre nom'); return; }
    localStorage.setItem('bottiere-contact', JSON.stringify({ name, tel }));
    const L = byId(st.lid), e2 = stayEstimate(st.lid, st.a, st.b, st.g);
    const long = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    lastMsg = `Bonjour, je souhaite réserver ${L.name} du ${fmtD(st.a, long)} au ${fmtD(st.b, long)} (${e2.n} nuit${e2.n > 1 ? 's' : ''}) pour ${st.g} voyageur${st.g > 1 ? 's' : ''}.`
      + ` Estimation du site : ${euro(e2.total)}.`
      + (msg ? `\n${msg}` : '')
      + `\n${name}${tel ? ' — ' + tel : ''}`;
    $('.rform__recap', rform).innerHTML = `<strong>${L.name}</strong><br>${fmtD(st.a, { weekday: 'long', day: 'numeric', month: 'long' })} → ${fmtD(st.b, { weekday: 'long', day: 'numeric', month: 'long' })}<br>${e2.n} nuit${e2.n > 1 ? 's' : ''} · ${st.g} voyageur${st.g > 1 ? 's' : ''} · estimation ${euro(e2.total)}`;
    rform.classList.add('is-done');
    $('.rform__done', rform).hidden = false;
    const a = document.createElement('a');
    a.href = `sms:${D.phone}?&body=${encodeURIComponent(lastMsg)}`;
    document.body.append(a);
    a.click();
    a.remove();
  });
  $('[data-copy]', rform).addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(lastMsg); toast('Message copié'); } catch (_) { toast('Copie impossible sur cet appareil'); }
  });
  $('[data-edit]', rform).addEventListener('click', () => { rform.classList.remove('is-done'); $('.rform__done', rform).hidden = true; });

  /* ==========================================================================
     ACCUEIL
     ========================================================================== */
  if (isHome) {
    // Hero slideshow
    const slides = $$('.hero__slide'), dots = $$('.hero__dot');
    let cur = 0;
    const show = (k) => {
      slides[cur].classList.remove('is-active'); dots[cur]?.classList.remove('is-active');
      cur = (k + slides.length) % slides.length;
      slides[cur].classList.add('is-active');
      const d = dots[cur];
      if (d) { d.classList.remove('is-active'); void d.offsetWidth; d.classList.add('is-active'); }
    };
    if (slides.length) {
      slides[0].classList.add('is-active'); dots[0]?.classList.add('is-active');
      if (!reduced) setInterval(() => show(cur + 1), 6000);
      dots.forEach((d, k) => d.addEventListener('click', () => show(k)));
    }

    // Liste des logements
    const grid = $('#grid');
    grid.innerHTML = D.logements.map(cardHTML).join('');
    bindCards(grid);

    // Filtres
    const applyFilter = (cat, minGuests = 0) => {
      $$('.card', grid).forEach((c) => {
        const okCat = cat === 'all' || c.dataset.cat === cat || (cat === 'groupe' && +c.dataset.guests >= 9);
        c.classList.toggle('is-filtered', !(okCat && +c.dataset.guests >= minGuests));
      });
    };
    $$('.chip').forEach((chip) => chip.addEventListener('click', () => {
      $$('.chip').forEach((c) => c.classList.toggle('is-active', c === chip));
      applyFilter(chip.dataset.filter);
    }));

    // Recherche
    bindFields($('#search'));
    $('#search').addEventListener('submit', (e) => {
      e.preventDefault();
      closePop();
      const where = st.lid || 'all', g = st.g;
      const qs = new URLSearchParams();
      if (st.a) qs.set('arrivee', st.a);
      if (st.b) qs.set('depart', st.b);
      qs.set('voyageurs', g);
      if (where !== 'all') {
        const l = D.logements.find((x) => x.id === where);
        curtain.classList.add('is-active');
        setTimeout(() => (location.href = `${l.url}?${qs}`), reduced ? 0 : 520);
        return;
      }
      $$('.chip').forEach((c) => c.classList.toggle('is-active', c.dataset.filter === 'all'));
      applyFilter('all', g);
      const matches = $$('.card:not(.is-filtered)', grid).length;
      $('#logements').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      setTimeout(() => toast(matches ? `${matches} logement${matches > 1 ? 's' : ''} pour ${g} voyageur${g > 1 ? 's' : ''}` : `Pour ${g} personnes, combinez deux gîtes : contactez-nous !`), 700);
    });

    // Tarifs
    const T = D.tarifs;
    $('#t-nuits').innerHTML = T.nuits.map((r) => `<tr><td>${r[0]}<small>${r[1]}</small></td>${r.slice(2).map((c, k) => `<td class="${k === 6 ? 'hl' : ''}">${c}</td>`).join('')}</tr>`).join('');
    $('#t-vac').innerHTML = T.vacances.map((r) => `<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td class="hl">${r[2]}</td></tr>`).join('');
    $('#t-serv').innerHTML = T.services.map((r) => `<tr><td>${r[0]}</td><td class="hl">${r[1]}</td></tr>`).join('');
  }

  /* ---------- Onglets ---------- */
  $$('[data-tabs]').forEach((wrap) => {
    const tabs = $$('.tab', wrap), panels = $$('.tab-panel', wrap);
    tabs.forEach((t, k) => t.addEventListener('click', () => {
      tabs.forEach((x, j) => { x.classList.toggle('is-active', j === k); x.setAttribute('aria-selected', j === k); });
      panels.forEach((p, j) => p.classList.toggle('is-active', j === k));
    }));
  });

  /* ---------- Accordéon ---------- */
  $$('.acc__btn').forEach((b) => b.addEventListener('click', () => {
    const item = b.closest('.acc__item'), open = !item.classList.contains('is-open');
    $$('.acc__item', item.parentElement).forEach((x) => { x.classList.remove('is-open'); $('.acc__btn', x).setAttribute('aria-expanded', 'false'); });
    item.classList.toggle('is-open', open);
    b.setAttribute('aria-expanded', open);
  }));

  /* ==========================================================================
     PAGE LOGEMENT
     ========================================================================== */
  const lpRoot = $('#logement');
  if (lpRoot) {
    const L = D.logements.find((x) => x.id === lpRoot.dataset.id);
    const photos = Array.from({ length: L.count }, (_, k) => ({ src: img(L.img, k + 1), sm: img(L.img, k + 1, true), cap: L.captions[k] || L.name }));
    const params = new URLSearchParams(location.search);

    lpRoot.innerHTML = `
      <div class="container">
        <nav class="crumbs fade-in-up" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a> / <a href="index.html#logements">Logements</a> / <span>${L.name}</span></nav>
        <div class="lp__head">
          <div>
            <h1 data-split>${L.name}</h1>
            <div class="lp__sub fade-in-up" style="--d:.3s">
              <span>${ic('star')} ${L.label}</span>
              <span>${ic('pin')} Aillon-le-Vieux, Savoie</span>
              <span>${ic('mountain')} Parc naturel des Bauges</span>
            </div>
          </div>
          <div class="lp__tools fade-in-up" style="--d:.4s">
            <button class="tool" id="share">${ic('share')} Partager</button>
            <button class="tool ${favs.has(L.id) ? 'is-on' : ''}" data-fav="${L.id}" aria-pressed="${favs.has(L.id)}">${ic('heart')} Enregistrer</button>
          </div>
        </div>

        <div class="mosaic" data-reveal="clip" data-cursor="Voir">
          ${photos.slice(0, 5).map((p, k) => `<button data-lb="${k}" aria-label="Agrandir : ${p.cap}"><img src="${k ? p.sm : p.src}" alt="${p.cap}" ${k ? 'loading="lazy"' : 'fetchpriority="high"'}></button>`).join('')}
          <span class="mosaic__all" role="button" tabindex="0" id="open-gallery">${ic('grid')} Afficher les ${photos.length} photos</span>
        </div>

        <div class="lp__body">
          <div>
            <section class="lp__block lp__summary" data-reveal>
              <div>
                <h2>${L.type} · ${L.name.replace(/^(Gîte|Chambre) (du |de l’|l’)?/, '')}</h2>
                <p>${L.guests} voyageurs · ${L.bedrooms} chambre${L.bedrooms > 1 ? 's' : ''} · ${L.beds} lits · ${L.baths} salle${L.baths > 1 ? 's' : ''} d’eau · ${L.surface} m²</p>
              </div>
              <div class="host"><div class="host__avatar"><img src="assets/favicon.png" alt=""></div><div><strong>Vos hôtes à la ferme</strong><br><span style="color:var(--muted);font-size:14px">Accueil familial & conseils locaux</span></div></div>
            </section>

            <section class="lp__block feat">
              ${L.highlights.map(([i, t, s], k) => `<div class="feat__item" data-reveal style="--d:${k * 0.08}s">${ic(i)}<div><strong>${t}</strong><span>${s}</span></div></div>`).join('')}
            </section>

            <section class="lp__block lp__desc" data-reveal>
              ${L.description.map((p) => `<p>${p}</p>`).join('')}
            </section>

            <section class="lp__block">
              <h2 data-split>Où vous dormirez</h2>
              <div class="rooms">
                ${L.rooms.map(([t, s, n], k) => `<button class="room" data-lb="${n - 1}" data-reveal style="--d:${k * 0.08}s;text-align:left"><img src="${img(L.img, n, true)}" alt="${t}" loading="lazy"><div><strong>${t}</strong><span>${s}</span></div></button>`).join('')}
              </div>
            </section>

            <section class="lp__block">
              <h2 data-split>Ce que propose ce logement</h2>
              <ul class="amen">
                ${L.amenities.map((a, k) => `<li data-reveal style="--d:${(k % 2) * 0.06}s">${ic(amenityIcon(a))} ${a}</li>`).join('')}
              </ul>
            </section>

            <section class="lp__block" data-reveal>
              <h2>Bon à savoir</h2>
              <div class="feat">
                <div class="feat__item">${ic('calendar')}<div><strong>Durée de séjour</strong><span>${L.minNights}</span></div></div>
                <div class="feat__item">${ic('shield')}<div><strong>Meilleur tarif garanti</strong><span>En réservant en direct, vous évitez les commissions des plateformes — mêmes conditions, même contrat.</span></div></div>
                <div class="feat__item">${ic('wash')}<div><strong>Linge & ménage</strong><span>Électricité, eau, chauffage, nappes, torchons et tapis de bain inclus. Draps et serviettes offerts dès 7 nuits, en option pour les courts séjours.</span></div></div>
              </div>
            </section>

            <section class="lp__block" style="border-bottom:0">
              <h2 data-split>Où se situe le logement</h2>
              <div class="map" data-reveal style="aspect-ratio:16/9"><iframe title="Carte — La ferme de la Bottière" loading="lazy" src="https://maps.google.com/maps?q=45.6388106,6.0902128&z=12&output=embed"></iframe></div>
              <p style="margin-top:18px;color:var(--ink-2)">Station-village d’Aillon-Margériaz, à 30 min de Chambéry et 45 min d’Annecy. Lac du Bourget et thermes d’Aix-les-Bains entre 30 et 45 min de route.</p>
            </section>
          </div>

          <aside class="book">
            <div class="book__card" data-reveal="scale">
              <div class="book__price"><small>${L.priceNote}</small><strong>${L.price} €</strong><span>/ nuit</span></div>
              <div class="pfields" id="book" data-for="${L.id}">
                ${pfield('a', 'Arrivée')}${pfield('b', 'Départ')}${pfield('g', 'Voyageurs', 'pf--full')}
              </div>
              <a class="btn btn--amber btn--block" id="b-go" href="#reserver" data-magnetic>Réserver ${ic('arrow')}</a>
              <p class="book__hint">Demande sans engagement · réponse rapide par téléphone ou SMS</p>
              <div class="book__lines" id="b-lines" hidden></div>
              <div class="book__rules">${L.minNights}</div>
            </div>
            <div class="book__alt">${ic('phone')}<div>Une question, un groupe ? <a href="tel:${D.phone}">${D.phoneLabel}</a></div></div>
          </aside>
        </div>
      </div>

      <section class="others">
        <div class="container">
          <div class="section__head"><div><span class="eyebrow" data-reveal>À la ferme</span><h2 data-split>Nos autres logements</h2></div><a class="link-arrow" href="index.html#logements" data-reveal>Tout voir ${ic('arrow')}</a></div>
          <div class="grid-listings grid-listings--3" id="others"></div>
        </div>
      </section>

      <div class="mbar" id="mbar">
        <div><strong>${L.price} € <span style="font-weight:500;font-size:14px">/ nuit</span></strong><small>${L.priceNote} · ${L.guests} voyageurs max.</small></div>
        <a class="btn btn--amber btn--sm" href="#reserver">Réserver</a>
      </div>

      <div class="gallery" id="gallery" role="dialog" aria-modal="true" aria-label="Toutes les photos">
        <div class="gallery__bar"><button class="icon-btn" data-close-gallery aria-label="Fermer">${ic('left')}</button><strong>${L.name}</strong><span style="width:44px"></span></div>
        <div class="gallery__grid">${photos.map((p, k) => `<button data-lb="${k}"><img src="${p.sm}" alt="${p.cap}" loading="lazy"><figcaption>${p.cap}</figcaption></button>`).join('')}</div>
      </div>

      <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visionneuse">
        <div class="lightbox__top"><span id="lb-count"></span><button class="icon-btn" data-close-lb aria-label="Fermer">${ic('close')}</button></div>
        <div class="lightbox__stage">
          <button class="lightbox__nav lightbox__nav--prev" aria-label="Précédente">${ic('left')}</button>
          <img id="lb-img" alt="">
          <button class="lightbox__nav lightbox__nav--next" aria-label="Suivante">${ic('right')}</button>
        </div>
        <div class="lightbox__cap" id="lb-cap"></div>
      </div>`;

    document.title = `${L.name} — La ferme de la Bottière · Gîtes dans les Bauges`;

    // Autres logements
    const others = $('#others');
    others.innerHTML = D.logements.filter((x) => x.id !== L.id).map(cardHTML).join('');
    bindCards(others);

    // Galerie & visionneuse
    const gallery = $('#gallery'), lb = $('#lightbox'), lbImg = $('#lb-img');
    let li = 0;
    const lock = () => document.body.classList.add('is-locked');
    const unlock = () => { if (!gallery.classList.contains('is-open') && !lb.classList.contains('is-open')) document.body.classList.remove('is-locked'); };
    const lbShow = (k) => {
      li = (k + photos.length) % photos.length;
      lbImg.classList.add('is-swapping');
      const pre = new Image();
      pre.onload = () => { lbImg.src = pre.src; lbImg.alt = photos[li].cap; lbImg.classList.remove('is-swapping'); };
      pre.src = photos[li].src;
      $('#lb-count').textContent = `${li + 1} / ${photos.length}`;
      $('#lb-cap').textContent = photos[li].cap;
    };
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-lb]');
      if (t) { lbShow(+t.dataset.lb); lb.classList.add('is-open'); lock(); }
      if (e.target.closest('[data-close-lb]')) { lb.classList.remove('is-open'); unlock(); }
      if (e.target.closest('#open-gallery')) { gallery.classList.add('is-open'); lock(); }
      if (e.target.closest('[data-close-gallery]')) { gallery.classList.remove('is-open'); unlock(); }
    });
    $('#open-gallery').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); gallery.classList.add('is-open'); lock(); } });
    $('.lightbox__nav--prev').addEventListener('click', () => lbShow(li - 1));
    $('.lightbox__nav--next').addEventListener('click', () => lbShow(li + 1));
    document.addEventListener('keydown', (e) => {
      if (lb.classList.contains('is-open')) {
        if (e.key === 'ArrowLeft') lbShow(li - 1);
        if (e.key === 'ArrowRight') lbShow(li + 1);
        if (e.key === 'Escape') { lb.classList.remove('is-open'); unlock(); }
      } else if (e.key === 'Escape' && gallery.classList.contains('is-open')) { gallery.classList.remove('is-open'); unlock(); }
    });
    let lsx = null;
    lb.addEventListener('touchstart', (e) => (lsx = e.touches[0].clientX), { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (lsx === null) return;
      const dx = e.changedTouches[0].clientX - lsx;
      if (Math.abs(dx) > 50) lbShow(li + (dx < 0 ? 1 : -1));
      lsx = null;
    });

    // Partage
    $('#share').addEventListener('click', async () => {
      try {
        if (navigator.share) await navigator.share({ title: L.name, url: location.href.split('?')[0] });
        else { await navigator.clipboard.writeText(location.href.split('?')[0]); toast('Lien copié !'); }
      } catch (_) { /* annulé */ }
    });

    // Carte de réservation : champs maison + estimation (grille « hors vacances »)
    const lines = $('#b-lines');
    bindFields($('#book'));
    onSt((s) => {
      const html = estHTML(L.id, s.a, s.b, s.g);
      lines.innerHTML = html;
      lines.hidden = !html;
    });
    // Le bouton reprend le logement de la page dans la demande
    $('#b-go').addEventListener('click', () => setSt({ lid: L.id }));
    $('#mbar a').addEventListener('click', () => setSt({ lid: L.id }));

    // Barre mobile
    const mbar = $('#mbar');
    window.addEventListener('scroll', () => mbar.classList.toggle('is-on', window.scrollY > 400), { passive: true });
  }

  /* ---------- Initialisations communes ---------- */
  parallax();
  magnetic();
  cursor();
})();
