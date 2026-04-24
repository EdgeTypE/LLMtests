/**
 * SHERLOCK HOLMES — 221B BAKER STREET
 * Interactive Elements
 */

document.addEventListener('DOMContentLoaded', () => {
    initFogCanvas();
    initMagnifier();
    initSmokeTrail();
    initNavScroll();
    initMobileNav();
    initScrollReveal();
    initQuotesCarousel();
    initDeduceScene();
    initSmoothScroll();
});

// ========== FOG CANVAS ==========
function initFogCanvas() {
    const canvas = document.getElementById('fogCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 40;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class FogParticle {
        constructor() {
            this.reset(true);
        }
        reset(initial = false) {
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : canvas.height + 50;
            this.radius = Math.random() * 80 + 30;
            this.speed = Math.random() * 0.3 + 0.1;
            this.opacity = Math.random() * 0.06 + 0.02;
            this.wobbleSpeed = Math.random() * 0.002 + 0.0005;
            this.wobbleAmount = Math.random() * 40 + 10;
            this.timeOffset = Math.random() * Math.PI * 2;
        }
        update(time) {
            this.y -= this.speed;
            this.x += Math.sin(time * this.wobbleSpeed + this.timeOffset) * this.wobbleAmount * 0.02;
            if (this.y < -this.radius * 2) {
                this.reset();
            }
        }
        draw(ctx) {
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, `rgba(180, 170, 150, ${this.opacity * 2})`);
            gradient.addColorStop(0.5, `rgba(160, 150, 130, ${this.opacity})`);
            gradient.addColorStop(1, 'rgba(140, 130, 110, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new FogParticle());
    }

    function animate(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update(time);
            p.draw(ctx);
        });
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// ========== MAGNIFIER CURSOR ==========
function initMagnifier() {
    const magnifier = document.getElementById('magnifier');
    if (!magnifier) return;
    let visible = false;

    document.addEventListener('mousemove', (e) => {
        magnifier.style.left = e.clientX + 'px';
        magnifier.style.top = e.clientY + 'px';
        if (!visible) {
            visible = true;
            magnifier.classList.add('visible');
        }
    });

    document.addEventListener('mouseleave', () => {
        visible = false;
        magnifier.classList.remove('visible');
    });

    // Hide magnifier on touch devices
    document.addEventListener('touchstart', () => {
        magnifier.classList.remove('visible');
        visible = false;
    });
}

// ========== SMOKE TRAIL ==========
function initSmokeTrail() {
    const particle = document.getElementById('smokeParticle');
    if (!particle) return;
    let mouseX = -100;
    let mouseY = -100;
    let prevX = -100;
    let prevY = -100;

    document.addEventListener('mousemove', (e) => {
        prevX = mouseX;
        prevY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        const dist = Math.hypot(mouseX - prevX, mouseY - prevY);
        if (dist > 30) {
            spawnSmoke(prevX, prevY);
        }
    });

    function spawnSmoke(x, y) {
        const clone = particle.cloneNode();
        clone.style.left = x + 'px';
        clone.style.top = y + 'px';
        clone.style.opacity = '0.5';
        clone.style.width = (Math.random() * 6 + 4) + 'px';
        clone.style.height = clone.style.width;
        document.body.appendChild(clone);

        const duration = 1200;
        const startTime = performance.now();
        const startX = x;
        const startY = y;

        function animateSmoke(time) {
            const elapsed = time - startTime;
            const progress = elapsed / duration;
            if (progress >= 1) {
                clone.remove();
                return;
            }
            const easeOut = 1 - Math.pow(1 - progress, 3);
            clone.style.opacity = 0.5 * (1 - progress);
            clone.style.left = (startX + (Math.random() - 0.5) * 20 * progress) + 'px';
            clone.style.top = (startY - 30 * easeOut) + 'px';
            clone.style.transform = `scale(${1 + progress * 1.5})`;
            requestAnimationFrame(animateSmoke);
        }
        requestAnimationFrame(animateSmoke);
    }
}

// ========== NAV SCROLL ==========
function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ========== MOBILE NAV ==========
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.reveal-stagger, .reveal-left, .reveal-right, .reveal-card'
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger delay for same-type elements
                    const siblings = Array.from(entry.target.parentElement?.children || [])
                        .filter(el => el.classList.contains(entry.target.classList[0]));
                    const siblingIndex = siblings.indexOf(entry.target);
                    const delay = siblingIndex >= 0 ? siblingIndex * 100 : 0;

                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    revealElements.forEach(el => observer.observe(el));
}

// ========== QUOTES CAROUSEL ==========
function initQuotesCarousel() {
    const slides = document.querySelectorAll('.quote-slide');
    const dotsContainer = document.getElementById('quoteDots');
    const prevBtn = document.getElementById('quotePrev');
    const nextBtn = document.getElementById('quoteNext');
    if (!slides.length || !dotsContainer) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('quote-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.quote-dot');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Auto-advance every 8 seconds
    let autoInterval = setInterval(() => goToSlide(currentIndex + 1), 8000);

    // Pause on hover
    const carousel = document.getElementById('quotesCarousel');
    carousel?.addEventListener('mouseenter', () => clearInterval(autoInterval));
    carousel?.addEventListener('mouseleave', () => {
        autoInterval = setInterval(() => goToSlide(currentIndex + 1), 8000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });
}

// ========== DEDUCE SCENE ==========
function initDeduceScene() {
    const markers = document.querySelectorAll('.clue-marker');
    const output = document.getElementById('deduceOutput');
    if (!markers.length || !output) return;

    const clues = {
        papers: {
            label: 'The Papers on the Desk',
            text: 'The papers are scattered at odd angles — not the work of a tidy mind. The ink is fresh, the handwriting hurried. Someone left in a rush, mid-thought. A letter, perhaps? Or a confession? The pen still rests where it was dropped. Observe the ink smudge on the corner: a left-handed writer, agitated.'
        },
        clock: {
            label: 'The Mantle Clock',
            text: 'The clock reads 2:47, yet the light through the window suggests late afternoon. The clock has stopped — recently, too, for no dust has settled on the winding key. Someone stopped it deliberately. Why? To obscure the time of an event? Or as a signal? The hands form a near-straight line. A meeting at quarter-to-three?'
        },
        books: {
            label: 'The Bookshelf',
            text: 'One shelf is conspicuously disordered. A volume on toxicology is missing — its gap remains, the dust outline clear. The neighboring books are on poisons, venoms, and chemical reagents. A focused study. Someone in this room was researching methods of undetectable murder. The missing book was taken recently; the dust around it is disturbed.'
        },
        newspaper: {
            label: 'The Newspaper on the Floor',
            text: 'It\'s not today\'s paper — the date is three days old. Yet it lies crumpled, not discarded. Someone read it intensely; see the crease marks around a particular article. The agony column. A coded message, no doubt. "M." seeks information about a "scarlet thread." A rendezvous, hidden in plain sight among the personal advertisements.'
        },
        window: {
            label: 'The Window',
            text: 'A single pane is cracked — from the inside, not out. The glass fragments fell inward. Someone broke in? No. The lock is intact. Someone broke out. In haste. The sill bears a partial footprint: a woman\'s boot, size small. She escaped through this window. But what — or whom — was she fleeing?'
        },
        fireplace: {
            label: 'The Fireplace',
            text: 'The fire burns low, but the ashes tell a story. Among the cinders: a partially burned photograph, its edges curled. A face is still visible — a man with a distinctive scar. Also: the remnants of a letter, the words "...must not know..." legible. Someone tried to destroy evidence. But fire, my dear fellow, is an imperfect eraser.'
        }
    };

    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const clueKey = marker.getAttribute('data-clue');
            const clue = clues[clueKey];
            if (clue && output) {
                output.innerHTML = `
                    <span class="deduce-clue-label">${clue.label}</span>
                    <p class="deduce-clue-text">"${clue.text}"</p>
                `;
                // Brief highlight effect
                output.style.borderColor = '#c4a35a';
                setTimeout(() => {
                    output.style.borderColor = '';
                }, 600);
            }
        });
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('nav')?.offsetHeight || 60;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}