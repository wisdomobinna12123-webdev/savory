/* ============================================
   SAVORY — RESTAURANT SITE JAVASCRIPT
   Using real images (Unsplash CDN)
   ============================================ */

'use strict';

/* ---------- Data ---------- */
const DISHES = [
    {
        id: 1,
        name: 'Grilled Herb Chicken',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
        category: 'mains',
        price: 24,
        rating: 4.9,
        reviews: 312,
        badge: 'Bestseller',
        badgeGold: false,
        desc: 'Tender grilled chicken seasoned with fresh herbs and served with roasted vegetables.'
    },
    {
        id: 2,
        name: 'Creamy Seafood Pasta',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
        category: 'pasta',
        price: 28,
        rating: 4.8,
        reviews: 287,
        badge: "Chef's Pick",
        badgeGold: true,
        desc: 'A rich, flavorful pasta loaded with fresh seafood and a creamy signature sauce.'
    },
    {
        id: 3,
        name: 'Classic Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
        category: 'pizza',
        price: 18,
        rating: 4.7,
        reviews: 421,
        badge: null,
        badgeGold: false,
        desc: 'Fresh mozzarella, vine-ripened tomatoes, and basil on a perfectly baked crust.'
    },
    {
        id: 4,
        name: 'Truffle Mushroom Risotto',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
        category: 'mains',
        price: 26,
        rating: 4.9,
        reviews: 198,
        badge: 'New',
        badgeGold: true,
        desc: 'Creamy Arborio rice with wild mushrooms, truffle oil, and aged parmesan.'
    },
    {
        id: 5,
        name: 'Spicy Arrabbiata Penne',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
        category: 'pasta',
        price: 20,
        rating: 4.6,
        reviews: 245,
        badge: null,
        badgeGold: false,
        desc: 'Penne tossed in a fiery tomato sauce with garlic, chili flakes, and fresh basil.'
    },
    {
        id: 6,
        name: 'Pepperoni Supreme Pizza',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
        category: 'pizza',
        price: 22,
        rating: 4.8,
        reviews: 367,
        badge: 'Popular',
        badgeGold: false,
        desc: 'Loaded with double pepperoni, mozzarella, and our house-made tomato sauce.'
    },
    {
        id: 7,
        name: 'Molten Chocolate Lava Cake',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
        category: 'desserts',
        price: 12,
        rating: 5.0,
        reviews: 512,
        badge: 'Must Try',
        badgeGold: true,
        desc: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.'
    },
    {
        id: 8,
        name: 'Classic Tiramisu',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
        category: 'desserts',
        price: 11,
        rating: 4.9,
        reviews: 289,
        badge: null,
        badgeGold: false,
        desc: 'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa dust.'
    },
    {
        id: 9,
        name: 'Ribeye Steak & Herb Butter',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
        category: 'mains',
        price: 42,
        rating: 4.9,
        reviews: 178,
        badge: 'Premium',
        badgeGold: true,
        desc: 'Prime ribeye grilled to perfection, finished with herb butter and sea salt.'
    },
    {
        id: 10,
        name: 'Lobster Linguine',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
        category: 'pasta',
        price: 38,
        rating: 4.9,
        reviews: 156,
        badge: 'Luxury',
        badgeGold: true,
        desc: 'Fresh lobster tail over linguine in a light white wine and garlic butter sauce.'
    },
    {
        id: 11,
        name: 'Four Cheese Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        category: 'pizza',
        price: 21,
        rating: 4.7,
        reviews: 223,
        badge: null,
        badgeGold: false,
        desc: 'Mozzarella, gorgonzola, parmesan, and goat cheese on a thin artisan crust.'
    },
    {
        id: 12,
        name: 'Crème Brûlée',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80',
        category: 'desserts',
        price: 10,
        rating: 4.8,
        reviews: 267,
        badge: null,
        badgeGold: false,
        desc: 'Silky vanilla custard topped with a perfectly caramelized sugar crust.'
    }
];

const TESTIMONIALS = [
    {
        text: 'The food was absolutely amazing, and the service exceeded all expectations. Every dish felt like a work of art — we will definitely be coming back.',
        name: 'Amara Okafor',
        role: 'Food Blogger',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    {
        text: 'A beautiful atmosphere, friendly staff, and dishes packed with flavor. The seafood pasta is hands down the best I have ever had. Highly recommended.',
        name: 'Daniel Mensah',
        role: 'Regular Guest',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
        text: 'One of the best dining experiences we have had in a long time. Every detail was perfect — from the warm welcome to the exquisite dessert.',
        name: 'Sophia Laurent',
        role: 'Culinary Critic',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
    },
    {
        text: 'We celebrated our anniversary here and it was unforgettable. The staff went above and beyond, and the ribeye was cooked to absolute perfection.',
        name: 'James & Clara Bennett',
        role: 'Anniversary Guests',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    }
];

const GALLERY = [
    {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Elegant restaurant interior'
    },
    {
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
        alt: 'Chef plating a dish'
    },
    {
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
        alt: 'Gourmet seafood dish'
    },
    {
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        alt: 'Fresh ingredients on counter'
    },
    {
        image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Warm restaurant ambience'
    },
    {
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        alt: 'Signature plated salad'
    },
    {
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        alt: 'Grilled steak close-up'
    },
    {
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
        alt: 'Fine dining table setup'
    }
];

/* ---------- State ---------- */
const state = {
    activeFilter: 'all',
    visibleCount: 6,
    currentTestimonial: 0,
    testimonialTimer: null
};

/* ---------- DOM Ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initYear();
    initNavbar();
    initSmoothScroll();
    initReveal();
    initHeroCounters();
    initDishes();
    initTestimonials();
    initGallery();
    initReservationForm();
    initBackToTop();
    initLightbox();
});

/* ============================================
   PRELOADER
   ============================================ */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.addEventListener('load', () => {
        setTimeout(() => preloader.classList.add('hidden'), 400);
    });
    // Safety fallback
    setTimeout(() => preloader.classList.add('hidden'), 3000);
}

/* ============================================
   FOOTER YEAR
   ============================================ */
function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('navMenu');
    const links = document.querySelectorAll('.navbar__link');

    // Scroll style
    const onScroll = () => {
        if (window.scrollY > 40) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();


// Close button inside sidebar
const closeBtn = document.getElementById('navClose');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    });
}



  // Close when clicking outside the sidebar
document.addEventListener('click', (e) => {
    if (
        nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
    ) {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }
});

  
    // Mobile toggle
    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('no-scroll', isOpen);
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    });

    // Active link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            const link = document.querySelector(`.navbar__link[href="#${id}"]`);
            if (!link) return;
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* ============================================
   SMOOTH SCROLL (with offset for fixed nav)
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const navHeight = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(i => i.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    items.forEach(item => observer.observe(item));
}

/* ============================================
   HERO COUNTERS
   ============================================ */
function initHeroCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animate = (el) => {
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target + '+';
        };
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/* ============================================
   DISHES — RENDER, FILTER, LOAD MORE
   ============================================ */
function initDishes() {
    const grid = document.getElementById('dishesGrid');
    const filters = document.getElementById('dishFilters');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!grid) return;

    renderDishes();

    filters.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFilter = btn.dataset.filter;
        state.visibleCount = 6;
        renderDishes();
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            state.visibleCount += 6;
            renderDishes();
        });
    }
}

function renderDishes() {
    const grid = document.getElementById('dishesGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!grid) return;

    const filtered = state.activeFilter === 'all'
        ? DISHES
        : DISHES.filter(d => d.category === state.activeFilter);

    const visible = filtered.slice(0, state.visibleCount);

    grid.innerHTML = visible.map(dish => `
        <article class="dish-card" data-id="${dish.id}">
            <div class="dish-card__image">
                <img
                    src="${dish.image}"
                    alt="${dish.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';"
                >
                ${dish.badge ? `<span class="dish-card__badge ${dish.badgeGold ? 'dish-card__badge--gold' : ''}">${dish.badge}</span>` : ''}
                <span class="dish-card__price">$${dish.price}</span>
            </div>
            <div class="dish-card__body">
                <h3 class="dish-card__title">${dish.name}</h3>
                <p class="dish-card__desc">${dish.desc}</p>
                <div class="dish-card__footer">
                    <div class="dish-card__rating">
                        <span class="stars">${getStars(dish.rating)}</span>
                        <span>${dish.rating} (${dish.reviews})</span>
                    </div>
                    <button class="dish-card__order" data-order="${dish.name}">
                        Order →
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    // Stagger animation
    grid.querySelectorAll('.dish-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 60}ms`;
    });

    // Order buttons
    grid.querySelectorAll('.dish-card__order').forEach(btn => {
        btn.addEventListener('click', () => {
            showToast(`Added "${btn.dataset.order}" to your order!`);
        });
    });

    // Show/hide Load More
    if (loadMoreBtn) {
        if (state.visibleCount >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '⯨';
    return stars;
}

/* ============================================
   TESTIMONIALS SLIDER
   ============================================ */
function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dotsWrap = document.getElementById('testimonialDots');
    if (!track || !dotsWrap) return;

    track.innerHTML = TESTIMONIALS.map(t => `
        <div class="testimonial">
            <div class="testimonial__quote">“</div>
            <p class="testimonial__text">${t.text}</p>
            <div class="testimonial__stars">★★★★★</div>
            <div class="testimonial__author">
                <img
                    class="testimonial__avatar"
                    src="${t.avatar}"
                    alt="${t.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80';"
                >
                <div class="testimonial__meta">
                    <span class="testimonial__name">${t.name}</span>
                    <span class="testimonial__role">${t.role}</span>
                </div>
            </div>
        </div>
    `).join('');

    dotsWrap.innerHTML = TESTIMONIALS.map((_, i) =>
        `<button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
    ).join('');

    const dots = dotsWrap.querySelectorAll('.dot');

    const goTo = (index) => {
        state.currentTestimonial = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
        track.style.transform = `translateX(-${state.currentTestimonial * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === state.currentTestimonial));
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goTo(parseInt(dot.dataset.index, 10));
            restartAuto();
        });
    });

    // Auto-advance
    const auto = () => {
        state.testimonialTimer = setInterval(() => {
            goTo(state.currentTestimonial + 1);
        }, 6000);
    };
    const restartAuto = () => {
        clearInterval(state.testimonialTimer);
        auto();
    };
    auto();

    // Pause on hover
    const slider = track.parentElement;
    slider.addEventListener('mouseenter', () => clearInterval(state.testimonialTimer));
    slider.addEventListener('mouseleave', auto);
}

/* ============================================
   GALLERY + LIGHTBOX
   ============================================ */
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = GALLERY.map((item, i) => `
        <div class="gallery-item" data-index="${i}" tabindex="0" role="button" aria-label="View ${item.alt}">
            <img
                src="${item.image}"
                alt="${item.alt}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';"
            >
        </div>
    `).join('');

    grid.querySelectorAll('.gallery-item').forEach(el => {
        const open = () => openLightbox(parseInt(el.dataset.index, 10));
        el.addEventListener('click', open);
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    if (!lightbox) return;

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    const item = GALLERY[index];
    if (!item) return;

    content.innerHTML = `
        <img
            src="${item.image.replace('w=800', 'w=1400')}"
            alt="${item.alt}"
            style="max-width:min(90vw,1100px);max-height:85vh;border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,0.6);"
        >
    `;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

/* ============================================
   RESERVATION FORM
   ============================================ */
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    // Set min date to today
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Live validation clear
    form.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('invalid');
            const err = field.parentElement.querySelector('.error-msg');
            if (err) { err.textContent = ''; err.classList.remove('show'); }
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!validateForm(form)) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Booking…';

        // Simulate network request
        setTimeout(() => {
            const data = Object.fromEntries(new FormData(form));
            showToast(`Reservation confirmed for ${data.name} on ${data.date} at ${data.time}!`);
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1200);
    });
}

function validateForm(form) {
    let valid = true;
    const fields = form.querySelectorAll('[required]');

    fields.forEach(field => {
        const err = field.parentElement.querySelector('.error-msg');
        let message = '';

        if (!field.value.trim()) {
            message = 'This field is required.';
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            message = 'Please enter a valid email.';
        } else if (field.type === 'tel' && field.value.replace(/\D/g, '').length < 7) {
            message = 'Please enter a valid phone number.';
        } else if (field.type === 'date') {
            const picked = new Date(field.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (picked < today) message = 'Please choose a future date.';
        }

        if (message) {
            valid = false;
            field.classList.add('invalid');
            if (err) { err.textContent = message; err.classList.add('show'); }
        } else {
            field.classList.remove('invalid');
            if (err) { err.textContent = ''; err.classList.remove('show'); }
        }
    });

    if (!valid) {
        const firstInvalid = form.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
    }
    return valid;
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const msgEl = toast.querySelector('.toast__message');
    msgEl.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}