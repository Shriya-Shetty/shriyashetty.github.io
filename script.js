// ========== Smooth Scrolling & Navigation =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// ========== Mobile Navigation Hamburger =========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== Active Navigation Link =========
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// ========== Scroll Animation for Elements =========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all project cards, stat cards, and other elements
document.querySelectorAll('.project-card, .stat-card, .skill-category, .timeline-content, .publication-item, .achievement-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========== Add Animation Keyframes =========
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ========== Navbar Background on Scroll =========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ========== Contact Form Handler =========
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data using name attributes
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const subject = contactForm.querySelector('input[name="subject"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Create mailto link with proper encoding
        const mailtoLink = `mailto:shriyashetty9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Opening email client...';
        submitBtn.style.background = '#10b981';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// ========== Parallax Effect for Hero Section =========
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ========== Counter Animation =========
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');

    statCards.forEach(card => {
        const finalValue = parseFloat(card.textContent);
        const isNumber = !isNaN(finalValue);

        if (isNumber) {
            let currentValue = 0;
            const increment = finalValue / 50;

            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    card.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    card.textContent = currentValue.toFixed(1);
                }
            }, 30);
        }
    });
}

// Trigger counter animation when section is in view
const aboutSection = document.querySelector('.about');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
            animateCounters();
            entry.target.setAttribute('data-animated', 'true');
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    counterObserver.observe(aboutSection);
}

// ========== Keyboard Navigation Support =========
document.addEventListener('keydown', (e) => {
    // Esc key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }

    // Keyboard shortcuts for navigation
    if (e.ctrlKey || e.metaKey) {
        // Ctrl/Cmd + G to go to GitHub
        if (e.key === 'g') {
            e.preventDefault();
            window.open('https://github.com/Shriya-Shetty', '_blank');
        }

        // Ctrl/Cmd + L to go to LinkedIn
        if (e.key === 'l') {
            e.preventDefault();
            window.open('https://linkedin.com/in/shriya-shetty-5034bb30a', '_blank');
        }
    }
});

// ========== Hover Effect for Project Cards =========
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========== Lazy Loading Images (if images are added) ========== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ========== Copy to Clipboard Functionality =========
document.querySelectorAll('.contact-item a[href^="mailto:"], .contact-item a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const text = this.textContent;
        // Navigator clipboard API is more reliable
        if (navigator.clipboard && text.includes('@') || text.includes('+91')) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        }
    });
});

// ========== Smooth Page Load Animation =========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ========== Responsive Hamburger Animation =========
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
});

// Style for active hamburger state
const hamburgerStyle = document.createElement('style');
hamburgerStyle.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .nav-link.active {
        color: #6366f1;
    }

    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(hamburgerStyle);

// ========== Print Styles =========
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .hero-buttons, .contact-form {
            display: none;
        }

        section {
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyle);

// ========== Accessibility Improvements =========
// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('.project-card, .stat-card, .skill-category').forEach(card => {
    card.setAttribute('role', 'article');
});

// Add focus visible styles for better keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    *:focus-visible {
        outline: 2px solid #6366f1;
        outline-offset: 4px;
    }
`;
document.head.appendChild(focusStyle);

console.log('Portfolio loaded successfully!');

