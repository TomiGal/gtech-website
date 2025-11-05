// ============================================
// GTECH - Main JavaScript
// ============================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors or those that just have #
        if (href === '#' || href === '') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Nav Link on Scroll
// ============================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});


// Form Validation (Contact Form)

const forms = document.querySelectorAll('.needs-validation');

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    }, false);
});


// Loading Animation

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


// Parallax Effect on Hero

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


// Counter Animation (Stats)

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50; // Divide into 50 steps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Trigger counter animation cuando stats section esta visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseFloat(text);
                
                if (!isNaN(number)) {
                    const suffix = text.replace(number.toString(), '');
                    animateCounter(stat, number, suffix);
                }
            });
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}



// Testimonials Auto-Play (Opcional)

const testimonialsCarousel = document.getElementById('testimonialsCarousel');
if (testimonialsCarousel) {
    const carousel = new bootstrap.Carousel(testimonialsCarousel, {
        interval: 5000,
        wrap: true
    });
}



// Mobile Menu Auto-Close con Link Click

const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});



// Create scroll para top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// CSS para scroll top button
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        border-radius: 50%;
        font-size: 1.25rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 212, 255, 0.4);
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 212, 255, 0.6);
    }
`;
document.head.appendChild(style);

// Show/hide scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Console Welcome Message
// ============================================

console.log('%c GTECH ', 'background: #00d4ff; color: #1a1a2e; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Soluciones Tecnológicas de Vanguardia ', 'background: #1a1a2e; color: #00d4ff; font-size: 14px; padding: 5px;');
console.log('%c ¿Interesado en trabajar con nosotros? contacto@gtech.com ', 'color: #6c757d; font-size: 12px;');