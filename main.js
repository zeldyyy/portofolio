// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
    // We can implement a full screen overlay or a simple dropdown
    alert('Mobile menu feature is being polished!');
});

// Meteor Effect Spawning
function createMeteor() {
    const container = document.getElementById('meteor-container');
    if (!container) return;

    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    // Randomize position and animation properties
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 3; // 3-5 seconds
    const delay = Math.random() * 5; // 0-5s delay

    meteor.style.left = `${startX}px`;
    meteor.style.animationDuration = `${duration}s`;
    meteor.style.animationDelay = `${delay}s`;

    container.appendChild(meteor);

    // Remove meteor after animation finishes to prevent DOM bloat
    setTimeout(() => {
        meteor.remove();
    }, (duration + delay) * 1000);
}

// Spawn 3 meteors initially and keep them cycling
for (let i = 0; i < 3; i++) {
    createMeteor();
}

// Spawning occasionally to keep the activity
setInterval(createMeteor, 4000);
