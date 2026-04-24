document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const interactiveElements = document.querySelectorAll('a, button, .exhibit-item');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Intersection Observer for scroll reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to basic reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Handle staggered animations
    const staggeredElements = document.querySelectorAll('.reveal-stagger');
    staggeredElements.forEach((el, index) => {
        // Add artificial delay based on element's DOM position relative to peers
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });

    // Interaction for the telegraph button
    const summonBtn = document.getElementById('summonBtn');
    if (summonBtn) {
        summonBtn.addEventListener('click', () => {
            const originalText = summonBtn.innerText;
            summonBtn.innerText = "TRANSMITTING TO SCOTLAND YARD...";
            summonBtn.style.borderColor = "var(--accent-red)";
            summonBtn.style.color = "var(--accent-red)";
            
            setTimeout(() => {
                summonBtn.innerText = "COME AT ONCE IF CONVENIENT. IF INCONVENIENT, COME ALL THE SAME. — S.H.";
            }, 2000);
            
            setTimeout(() => {
                summonBtn.innerText = originalText;
                summonBtn.style.borderColor = "";
                summonBtn.style.color = "";
            }, 6000);
        });
    }

    // Trigger title animation delays
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, i) => {
        line.style.animationDelay = `${0.2 + (i * 0.2)}s`;
    });
});