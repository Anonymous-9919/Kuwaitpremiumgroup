const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

const text = lang === 'ar' ? {
  home:'الرئيسية', services:'خدماتنا', product:'القدرات', projects:'مشاريعنا', about:'عن KPG', gallery:'المعرض', blog:'المجلة', contact:'تواصل معنا', quote:'اطلب عرضاً', phone:'+965 5122 6096',
  statement:'نصنع مساحات متقنة، خالدة وملهمة.', menu:'القائمة الرئيسية', close:'إغلاق', search:'بحث', searchTitle:'ابحث في KPG', searchPlaceholder:'ابحث عن خدمة أو صفحة', noResults:'لا توجد نتائج مطابقة.', info:'معلومات KPG', language:'EN', privacy:'الخصوصية', terms:'الشروط', rights:'جميع الحقوق محفوظة.', hero:[
    ['شريك موثوق في التنفيذ','التصميم الداخلي والتشطيبات والإنشاءات تحت سقف واحد','تقدّم KPG حلولاً متكاملة للمشاريع السكنية والتجارية والضيافة في الكويت.'],
    ['مجموعة الكويت بريميوم','فن المساحات المدروسة','نحوّل الرؤية إلى مساحات عملية ومميزة، من الفكرة حتى التسليم.'],
    ['تفاصيل تصنع الفرق','نبني مساحات أفضل','حلول دقيقة تجمع الحرفية والتنسيق الفني والتنفيذ المنضبط.']
  ]
} : {
  home:'Home', services:'Services', product:'Capabilities', projects:'Projects', about:'About', gallery:'Gallery', blog:'Journal', contact:'Contact Us', quote:'Get a Quote!', phone:'+965 5122 6096',
  statement:'We shape interiors, crafting timeless and inspiring spaces.', menu:'Main menu', close:'Close menu', search:'Search', searchTitle:'Search KPG', searchPlaceholder:'Search services or pages', noResults:'No matching results.', info:'KPG information', language:'ع', privacy:'Privacy', terms:'Terms', rights:'All rights reserved.', hero:[
    ['Trusted delivery partner','Interior fitout, joinery & construction under one roof','KPG delivers coordinated interiors, fitout and construction for residential, commercial and hospitality projects in Kuwait.'],
    ['Kuwait Premium Group','The art of considered interiors','We turn a clear vision into spaces that work beautifully, from the first concept to final handover.'],
    ['Details make the difference','Built for better spaces','Precise solutions that bring together craft, technical coordination and disciplined execution.']
  ]
};

const base = lang === 'ar' ? '/ar' : '';
const links = { home:`${base}/`, services:`${base}/services/`, projects:`${base}/projects/`, about:`${base}/about/`, gallery:`${base}/gallery/`, contact:`${base}/contact/`, blog:`${base}/blog/` };
const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
const alternatePath = lang === 'ar' ? currentPath.replace(/^\/ar(?=\/|$)/, '') || '/' : `/ar${currentPath}`;
const serviceItems = lang === 'ar'
  ? [
      { label:'التصميم الداخلي', slug:'interior-design' },
      { label:'أعمال التشطيبات', slug:'fitout' },
      { label:'استشارات التصميم', slug:'consultation' },
      { label:'الأعمال الإنشائية', slug:'construction' },
      { label:'الصيانة والتجديد', slug:'renovation' },
      { label:'التصور ثنائي وثلاثي الأبعاد', slug:'visualization' }
    ]
  : [
      { label:'Interior design', slug:'interior-design' },
      { label:'Fitout works', slug:'fitout' },
      { label:'Design consultation', slug:'consultation' },
      { label:'Construction works', slug:'construction' },
      { label:'Maintenance & refurbishment', slug:'renovation' },
      { label:'2D & 3D visualization', slug:'visualization' }
    ];

function headerMarkup() {
  const logo = `<a class="reference-logo" href="${links.home}" aria-label="Kuwait Premium Group"><img src="/Logo.jpg" alt="KPG"><span>Kuwait Premium<br>Group</span></a>`;
  const services = `<span class="reference-menu-parent"><a href="${links.services}">${text.services}</a><button aria-label="${text.services}">+</button><span class="reference-dropdown">${serviceItems.map(item => `<a href="${base}/services/${item.slug}/">${item.label}</a>`).join('')}</span></span>`;
  const language = `<a class="reference-lang" href="${alternatePath}" lang="${lang === 'ar' ? 'en' : 'ar'}" hreflang="${lang === 'ar' ? 'en' : 'ar'}">${text.language}</a>`;
  if (document.body.classList.contains('inner-exact')) return `<div class="reference-header reference-header--inner">${logo}<nav class="reference-nav" aria-label="Primary"><a href="${links.home}">${text.home}</a>${services}<a href="${links.gallery}">${text.product}</a><a href="${links.about}">${text.about}</a><a href="${links.blog}">${text.blog}</a><a href="${links.contact}">${text.contact}</a></nav><div class="reference-header__inner-actions"><a class="reference-phone" href="tel:+96551226096"><small>${lang === 'ar' ? 'اتصل بنا' : 'Call Us Phone'}</small>${text.phone}</a>${language}<a class="reference-quote" href="${links.contact}">${text.quote}</a><button class="reference-round reference-search" data-search-open aria-label="${text.search}">⌕</button><button class="reference-round" data-info-open aria-label="${text.info}">+</button></div><button class="reference-mobile-toggle" data-menu-toggle aria-label="${text.menu}" aria-expanded="false"><i></i><i></i><i></i></button></div>`;
  return `<div class="reference-header"><div class="reference-header__utility"><button class="reference-round" data-info-open aria-label="${text.info}">i</button><a class="reference-phone" href="tel:+96551226096">${text.phone}</a>${language}</div><nav class="reference-nav reference-nav--left" aria-label="Primary"><a href="${links.home}">${text.home}</a>${services}<a href="${links.gallery}">${text.product}</a></nav>${logo}<nav class="reference-nav reference-nav--right" aria-label="Primary"><a href="${links.projects}">${text.projects}</a><a href="${links.about}">${text.about}</a><a href="${links.blog}">${text.blog}</a><a href="${links.contact}">${text.contact}</a></nav><div class="reference-header__actions"><a class="reference-quote" href="${links.contact}">${text.quote}</a><button class="reference-round reference-search" data-search-open aria-label="${text.search}">⌕</button><button class="reference-round" data-info-open aria-label="${text.info}">+</button></div><button class="reference-mobile-toggle" data-menu-toggle aria-label="${text.menu}" aria-expanded="false"><i></i><i></i><i></i></button></div>`;
}

function drawerMarkup() {
  const items = `<a href="${links.home}">${text.home}</a><div class="reference-drawer__expand"><button aria-expanded="false">${text.services}<span>+</span></button><div>${serviceItems.map(item => `<a href="${base}/services/${item.slug}/">${item.label}</a>`).join('')}</div></div><div class="reference-drawer__expand"><button aria-expanded="false">${text.product}<span>+</span></button><div><a href="${links.gallery}">${text.gallery}</a><a href="${links.projects}">${text.projects}</a></div></div><a href="${links.about}">${text.about}</a><a href="${links.blog}">${text.blog}</a><a href="${links.contact}">${text.contact}</a><button class="reference-drawer__search" data-search-open>${text.search}<span>⌕</span></button><a class="reference-drawer__language" href="${alternatePath}" lang="${lang === 'ar' ? 'en' : 'ar'}">${text.language}</a>`;
  return `<div class="reference-overlay" data-menu-close></div><aside class="reference-drawer" data-mobile-nav aria-hidden="true"><button class="reference-drawer__close" data-menu-close aria-label="${text.close}">×</button><div class="reference-drawer__tab">${text.menu}</div><nav>${items}</nav></aside>`;
}

function infoMarkup() {
  const gallery = ['gallery-8','gallery-9','gallery-5','gallery-6','gallery-1','gallery-11'];
  return `<div class="reference-info-overlay" data-info-close></div><aside class="reference-info" aria-hidden="true"><button class="reference-info__close" data-info-close aria-label="${text.close}">×</button><img src="/Logo.jpg" alt="KPG"><h2>${text.statement}</h2><div class="reference-info__gallery">${gallery.map(name => `<img src="/assets/images/reference/${name}.jpg" alt="KPG interior gallery">`).join('')}</div><p>Kuwait</p><a dir="ltr" href="tel:+96551226096">+965 5122 6096</a><a href="https://www.instagram.com/kpg.fitout/">@kpg.fitout</a></aside>`;
}

function searchMarkup() {
  const pages = [
    { label:text.home, url:links.home },
    { label:text.services, url:links.services },
    { label:text.projects, url:links.projects },
    { label:text.gallery, url:links.gallery },
    { label:text.about, url:links.about },
    { label:text.blog, url:links.blog },
    { label:text.contact, url:links.contact },
    ...serviceItems.map(item => ({ label:item.label, url:`${base}/services/${item.slug}/` }))
  ];
  return `<div class="reference-search-overlay" data-search-close></div><section class="reference-search-panel" id="site-search" aria-hidden="true" aria-label="${text.searchTitle}"><button class="reference-search-panel__close" data-search-close aria-label="${text.close}">×</button><div class="hx-kicker">${text.search}</div><h2>${text.searchTitle}</h2><form data-site-search><input type="search" autocomplete="off" placeholder="${text.searchPlaceholder}" aria-label="${text.searchPlaceholder}"><button aria-label="${text.search}">→</button></form><nav>${pages.map(page => `<a href="${page.url}" data-search-item>${page.label}<span>↗</span></a>`).join('')}</nav><p data-search-empty role="status" hidden>${text.noResults}</p></section>`;
}

let header = document.querySelector('.site-header');
if (!header) { header = document.createElement('header'); header.className = 'site-header'; document.body.prepend(header); }
header.innerHTML = headerMarkup();
document.querySelectorAll('.mobile-nav').forEach(node => node.remove());
document.body.insertAdjacentHTML('afterbegin', `${drawerMarkup()}${infoMarkup()}${searchMarkup()}`);

const drawer = document.querySelector('[data-mobile-nav]');
const menuToggle = document.querySelector('[data-menu-toggle]');
function setMenu(open) { document.body.classList.toggle('reference-menu-open', open); drawer?.setAttribute('aria-hidden', String(!open)); menuToggle?.setAttribute('aria-expanded', String(open)); }
menuToggle?.addEventListener('click', () => setMenu(true));
document.querySelectorAll('[data-menu-close]').forEach(button => button.addEventListener('click', () => setMenu(false)));
document.querySelectorAll('.reference-drawer__expand button').forEach(button => button.addEventListener('click', () => {
  const open = button.parentElement.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(open));
}));

function setInfo(open) { document.body.classList.toggle('reference-info-open', open); document.querySelector('.reference-info')?.setAttribute('aria-hidden', String(!open)); }
document.querySelectorAll('[data-info-open]').forEach(button => button.addEventListener('click', () => setInfo(true)));
document.querySelectorAll('[data-info-close]').forEach(button => button.addEventListener('click', () => setInfo(false)));
function setSearch(open) {
  if (open) setMenu(false);
  document.body.classList.toggle('reference-search-open', open);
  document.querySelector('.reference-search-panel')?.setAttribute('aria-hidden', String(!open));
  if (open) setTimeout(() => document.querySelector('[data-site-search] input')?.focus(), 50);
}
document.querySelectorAll('[data-search-open]').forEach(button => button.addEventListener('click', () => setSearch(true)));
document.querySelectorAll('[data-search-close]').forEach(button => button.addEventListener('click', () => setSearch(false)));
const siteSearch = document.querySelector('[data-site-search]');
const searchInput = siteSearch?.querySelector('input');
const searchItems = [...document.querySelectorAll('[data-search-item]')];
searchInput?.addEventListener('input', () => {
  const query = searchInput.value.trim().toLocaleLowerCase(lang);
  let matches = 0;
  searchItems.forEach(item => { item.hidden = Boolean(query) && !item.textContent.toLocaleLowerCase(lang).includes(query); if (!item.hidden) matches += 1; });
  document.querySelector('[data-search-empty]').hidden = matches !== 0;
});
siteSearch?.addEventListener('submit', event => { event.preventDefault(); const match = searchItems.find(item => !item.hidden); if (match) location.href = match.href; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { setMenu(false); setInfo(false); setSearch(false); } });

const hero = document.querySelector('.hero');
if (hero) {
  const images = ['h4-banner-1.jpg','h4-banner-2.jpg','pro-banner-1.jpg'];
  hero.classList.add('reference-hero');
  hero.innerHTML = `<div class="reference-hero__slides">${text.hero.map((slide, index) => `<article class="reference-hero__slide${index === 0 ? ' is-active' : ''}" style="--hero-image:url('/assets/images/reference/${images[index]}')"><div class="reference-hero__content"><span>${slide[0]}</span><h1>${slide[1]}</h1><p>${slide[2]}</p><a href="${links.contact}" class="reference-hero__cta">${lang === 'ar' ? 'ابدأ مشروعك' : 'Start Project'} <b>↗</b></a></div></article>`).join('')}</div><div class="reference-hero__dots" aria-label="Hero slides">${text.hero.map((_, index) => `<button class="${index === 0 ? 'is-active' : ''}" data-hero-dot="${index}" aria-label="Slide ${index + 1}"></button>`).join('')}</div>`;
  const slides = [...hero.querySelectorAll('.reference-hero__slide')]; const dots = [...hero.querySelectorAll('[data-hero-dot]')]; let active = 0; let timer;
  const go = index => { active = (index + slides.length) % slides.length; slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active)); dots.forEach((dot, i) => dot.classList.toggle('is-active', i === active)); };
  const play = () => { clearInterval(timer); timer = setInterval(() => go(active + 1), 9000); };
  dots.forEach((dot, index) => dot.addEventListener('click', () => { go(index); play(); })); play();
}

const serviceRail = document.querySelector('.service-grid');
if (serviceRail) {
  serviceRail.classList.add('reference-service-rail');
  const cards = [...serviceRail.children];
  const cardRoutes = ['fitout','fitout','fitout','interior-design','construction','fitout','fitout'];
  cards.forEach((card, index) => { if (cardRoutes[index]) card.href = `${base}/services/${cardRoutes[index]}/`; });
  const section = serviceRail.closest('.hx-services, .section');
  section?.classList.add('reference-services-section');
  const controls = document.createElement('div');
  controls.className = 'reference-service-controls';
  controls.innerHTML = `<button aria-label="Previous services">←</button><button aria-label="Next services">→</button><div>${cards.map((_, index) => `<i data-service-dot="${index}"></i>`).join('')}</div>`;
  section?.append(controls);
  let active = 0; let timer;
  const visible = () => innerWidth >= 1024 ? 2 : 1;
  const render = () => { const width = cards[0]?.getBoundingClientRect().width || 360; const gap = 30; serviceRail.style.transform = `translateX(${-active * (width + gap)}px)`; controls.querySelectorAll('[data-service-dot]').forEach((dot, index) => dot.classList.toggle('is-active', index === active)); };
  const go = next => { active = (next + cards.length) % cards.length; render(); };
  controls.querySelector('button:first-child')?.addEventListener('click', () => { go(active - 1); reset(); });
  controls.querySelector('button:nth-child(2)')?.addEventListener('click', () => { go(active + 1); reset(); });
  controls.querySelectorAll('[data-service-dot]').forEach((dot, index) => dot.addEventListener('click', () => { go(index); reset(); }));
  const reset = () => { clearInterval(timer); timer = setInterval(() => go(active + 1), 4000); };
  let startX = 0;
  serviceRail.addEventListener('pointerdown', event => { startX = event.clientX; serviceRail.setPointerCapture?.(event.pointerId); clearInterval(timer); });
  serviceRail.addEventListener('pointerup', event => { const delta = event.clientX - startX; if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1)); reset(); });
  window.addEventListener('resize', render); render(); reset();
}

function createRail(track, options = {}) {
  if (!track) return;
  const original = [...track.children];
  let active = 0;
  let timer;
  const perView = () => options.perView?.() || 1;
  const max = () => Math.max(1, original.length - perView() + 1);
  const render = () => {
    const item = original[0];
    if (!item) return;
    const gap = Number(options.gap ?? 0);
    const step = item.getBoundingClientRect().width + gap;
    const direction = document.documentElement.dir === 'rtl' ? 1 : -1;
    track.style.transform = `translate3d(${direction * active * step}px,0,0)`;
  };
  const go = value => { active = (value + max()) % max(); render(); };
  const play = () => { clearInterval(timer); if (options.autoplay) timer = setInterval(() => go(active + 1), options.autoplay); };
  let startX = 0;
  track.addEventListener('pointerdown', event => { startX = event.clientX; clearInterval(timer); track.setPointerCapture?.(event.pointerId); });
  track.addEventListener('pointerup', event => { const delta = event.clientX - startX; if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1)); play(); });
  options.prev?.addEventListener('click', () => { go(active - 1); play(); });
  options.next?.addEventListener('click', () => { go(active + 1); play(); });
  window.addEventListener('resize', render);
  render(); play();
}

createRail(document.querySelector('[data-process-track]'), { autoplay:5000, perView:() => innerWidth >= 1366 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 768 ? 2 : 1 });
createRail(document.querySelector('[data-gallery-track]'), { autoplay:5000, gap:30, perView:() => innerWidth >= 1200 ? 3 : innerWidth >= 768 ? 2 : 1, prev:document.querySelector('[data-gallery-prev]'), next:document.querySelector('[data-gallery-next]') });
createRail(document.querySelector('[data-why-track]'), { autoplay:5000, gap:30, perView:() => innerWidth >= 1024 ? 2 : 1 });

document.querySelectorAll('[data-exclusive-details]').forEach(group => group.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => {
  if (!item.open) return;
  group.querySelectorAll('details').forEach(other => { if (other !== item) other.open = false; });
})));

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold:.13 });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
} else document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));

const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
if (!reducedMotion && parallaxItems.length) {
  let ticking = false;
  const updateParallax = () => {
    parallaxItems.forEach(element => { const rect=element.getBoundingClientRect(); const progress=(rect.top + rect.height / 2 - innerHeight / 2) / innerHeight; element.style.setProperty('--parallax-y', `${Math.max(-1,Math.min(1,progress)) * Number(element.dataset.parallax)}px`); });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateParallax); ticking=true; } }, { passive:true });
  updateParallax();
}

document.querySelector('[data-demo-form]')?.addEventListener('submit', event => { event.preventDefault(); const note = document.querySelector('[data-form-note]'); note.setAttribute('role', 'status'); note.textContent = lang === 'ar' ? 'شكراً لك. نموذج العرض التجريبي غير متصل حالياً، يرجى التواصل مع KPG عبر واتساب.' : 'Thank you. This demo form is not connected yet; please contact KPG on WhatsApp.'; note.hidden = false; });
document.querySelector('.ix-load')?.addEventListener('click', event => { event.currentTarget.textContent = '✓'; event.currentTarget.disabled = true; event.currentTarget.setAttribute('aria-label', lang === 'ar' ? 'تم عرض جميع المشاريع' : 'All projects shown'); });
document.querySelectorAll('main img').forEach(image => { image.loading = 'lazy'; image.decoding = 'async'; });

const footer = document.querySelector('.site-footer');
if (footer) {
  const newsletter = document.body.classList.contains('no-newsletter') ? '' : `<section class="reference-newsletter"><div><span>${lang === 'ar' ? 'ابقَ على اطلاع' : 'Stay up to date'}</span><h2>${lang === 'ar' ? 'انضم إلى نشرتنا وابقَ على اطلاع' : 'Join our newsletter stay up to date'}</h2><p>${lang === 'ar' ? 'تابع آخر الأفكار والمشاريع والمحتوى المتعلق بالتصميم الداخلي والتشطيبات.' : 'Join our newsletter. Learn something new, gain access to exclusive content, and stay informed with the latest updates in the industry.'}</p><form data-newsletter-form><input type="email" required aria-label="Email address" placeholder="${lang === 'ar' ? 'البريد الإلكتروني' : 'Email address..'}"><button aria-label="Submit">→</button></form><p class="reference-newsletter__note" data-newsletter-note role="status" hidden></p></div></section>`;
  footer.innerHTML = `${newsletter}<section class="reference-footer"><div class="reference-footer__grid"><div><img src="/Logo.jpg" alt="KPG"><h2>${text.statement}</h2></div><div><b>${lang === 'ar' ? 'التنقل' : 'Navigation'}</b><a href="${links.home}">${text.home}</a><a href="${links.services}">${text.services}</a><a href="${links.projects}">${text.projects}</a><a href="${links.about}">${text.about}</a></div><div><b>${lang === 'ar' ? 'الخدمات' : 'Services'}</b>${serviceItems.slice(0,5).map(item => `<a href="${base}/services/${item.slug}/">${item.label}</a>`).join('')}</div><div><b>${lang === 'ar' ? 'تواصل معنا' : 'Contact'}</b><p>${lang === 'ar' ? 'الكويت' : 'Kuwait'}</p><a dir="ltr" href="tel:+96551226096">+965 5122 6096</a><a href="https://www.instagram.com/kpg.fitout/">@kpg.fitout</a></div></div><div class="reference-footer__bottom"><span>© 2026 Kuwait Premium Group. ${text.rights}</span><span><a href="${base}/privacy/">${text.privacy}</a><a href="${base}/terms/">${text.terms}</a></span></div></section>`;
  footer.querySelector('[data-newsletter-form]')?.addEventListener('submit', event => {
    event.preventDefault();
    const note = footer.querySelector('[data-newsletter-note]');
    note.textContent = lang === 'ar' ? 'شكراً لك. تمت إضافة بريدك إلى قائمة العرض التجريبي.' : 'Thank you. Your email was added to the demo list.';
    note.hidden = false;
    event.currentTarget.reset();
  });
}
