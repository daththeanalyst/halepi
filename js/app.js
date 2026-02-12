/* ============================================================
   HALEPI RESTAURANT — APP.JS
   Navigation, Menu Renderer, Wine Renderer,
   Reviews Carousel, Scroll Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMenuSection();
    initWineSection();
    initReviewsCarousel();
    initScrollAnimations();
});

/* ---- NAVIGATION ---- */
function initNavigation() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.nav__mobile-link');
    const navLinks = document.querySelectorAll('.nav__link');

    // Sticky nav on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 80) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = currentScroll;
    });

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('is-open');
            mobileMenu.classList.toggle('is-open');
            hamburger.classList.toggle('is-active');
            hamburger.setAttribute('aria-expanded', !isOpen);
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });
    }

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
            hamburger.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    });
}

/* ---- MENU SECTION ---- */
function initMenuSection() {
    const tabsContainer = document.getElementById('menu-tabs');
    const itemsContainer = document.getElementById('menu-items');
    const descContainer = document.getElementById('menu-category-desc');

    if (!tabsContainer || !itemsContainer || !MENU_DATA) return;

    // Create tabs
    MENU_DATA.categories.forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = 'menu__tab' + (index === 0 ? ' menu__tab--active' : '');
        tab.textContent = category.name;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tab.setAttribute('data-category', category.id);

        tab.addEventListener('click', () => {
            // Update active tab
            tabsContainer.querySelectorAll('.menu__tab').forEach(t => {
                t.classList.remove('menu__tab--active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('menu__tab--active');
            tab.setAttribute('aria-selected', 'true');

            // Render category
            renderMenuCategory(category, itemsContainer, descContainer);
        });

        tabsContainer.appendChild(tab);
    });

    // Render first category
    renderMenuCategory(MENU_DATA.categories[0], itemsContainer, descContainer);
}

function renderMenuCategory(category, container, descContainer) {
    // Fade out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
        // Update description
        if (descContainer) {
            descContainer.textContent = category.description;
        }

        // Clear and render items
        container.innerHTML = '';
        category.items.forEach(item => {
            container.appendChild(createMenuItem(item));
        });

        // Fade in
        container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 150);
}

function createMenuItem(item) {
    const el = document.createElement('div');
    el.className = 'menu-item';

    const priceDisplay = item.price !== null
        ? MENU_DATA.currency + item.price.toFixed(2)
        : 'Ask';

    let badges = '';
    if (item.dietary && item.dietary.length > 0) {
        badges = item.dietary.map(d =>
            `<span class="badge badge--dietary">${d}</span>`
        ).join('');
    }
    if (item.isPopular) {
        badges += '<span class="badge badge--popular">Popular</span>';
    }

    let noteHtml = '';
    if (item.note) {
        noteHtml = `<span class="menu-item__note">${item.note}</span>`;
    }

    el.innerHTML = `
        <div class="menu-item__header">
            <span class="menu-item__name">${item.name}</span>
            <span class="menu-item__dots"></span>
            <span class="menu-item__price">${priceDisplay}</span>
        </div>
        <p class="menu-item__description">${item.description}</p>
        <div class="menu-item__badges">
            ${badges}
            ${noteHtml}
        </div>
    `;

    return el;
}

/* ---- WINE SECTION ---- */
function initWineSection() {
    const grid = document.getElementById('wines-grid');
    if (!grid || !WINE_DATA) return;

    WINE_DATA.categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'wines__category reveal';

        let itemsHtml = '';
        category.items.forEach(wine => {
            let pricesHtml = '';
            if (wine.glass && wine.bottle) {
                pricesHtml = `
                    <div class="wines__item-prices">
                        <div><span class="wines__item-price">\u00A3${wine.glass.toFixed(2)}</span> <span class="wines__item-price-label">glass</span></div>
                        <div><span class="wines__item-price">\u00A3${wine.bottle.toFixed(2)}</span> <span class="wines__item-price-label">bottle</span></div>
                    </div>`;
            } else if (wine.bottle) {
                pricesHtml = `
                    <div class="wines__item-prices">
                        <span class="wines__item-price">\u00A3${wine.bottle.toFixed(2)}</span> <span class="wines__item-price-label">bottle</span>
                    </div>`;
            } else if (wine.glass) {
                pricesHtml = `
                    <div class="wines__item-prices">
                        <span class="wines__item-price">\u00A3${wine.glass.toFixed(2)}</span> <span class="wines__item-price-label">glass</span>
                    </div>`;
            }

            itemsHtml += `
                <div class="wines__item">
                    <div class="wines__item-info">
                        <div class="wines__item-name">${wine.name}</div>
                        <div class="wines__item-detail">${wine.detail}</div>
                    </div>
                    ${pricesHtml}
                </div>`;
        });

        card.innerHTML = `
            <h3 class="wines__category-name">${category.name}</h3>
            ${itemsHtml}
        `;

        grid.appendChild(card);
    });
}

/* ---- REVIEWS CAROUSEL ---- */
function initReviewsCarousel() {
    const track = document.getElementById('reviews-track');
    const dotsContainer = document.getElementById('reviews-dots');
    const prevBtn = document.querySelector('.reviews__btn--prev');
    const nextBtn = document.querySelector('.reviews__btn--next');

    if (!track || !REVIEWS_DATA || REVIEWS_DATA.length === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    // Star SVG template
    const starSvg = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#C5A55A"/></svg>';

    // Render review cards
    REVIEWS_DATA.forEach(review => {
        const card = document.createElement('div');
        card.className = 'reviews__card';

        const stars = Array(review.rating).fill(starSvg).join('');

        card.innerHTML = `
            <div class="reviews__card-stars">${stars}</div>
            <p class="reviews__card-quote">${review.text}</p>
            <p class="reviews__card-author">${review.author}</p>
            <p class="reviews__card-source">${review.source}</p>
        `;

        track.appendChild(card);
    });

    // Render dots
    REVIEWS_DATA.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'reviews__dot' + (i === 0 ? ' reviews__dot--active' : '');
        dot.setAttribute('aria-label', `Go to review ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update dots
        dotsContainer.querySelectorAll('.reviews__dot').forEach((dot, i) => {
            dot.classList.toggle('reviews__dot--active', i === index);
        });
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % REVIEWS_DATA.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
    }

    // Button handlers
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });

    // Auto-play
    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 7000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // Pause on hover
    const carousel = document.getElementById('reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
            resetAutoPlay();
        }
    }, { passive: true });

    startAutoPlay();
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        reveals.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}
