// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
let mobileMenuOpen = false;

menuBtn.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobileMenu';
        mobileMenu.className = 'fixed inset-0 bg-[#4a1f1f] z-40 flex items-center justify-center mobile-menu-overlay';
        mobileMenu.innerHTML = `
            <nav class="text-center space-y-8">
                <a href="#" class="block text-white text-3xl font-serif hover:text-gray-300 transition">Projects</a>
                <a href="#" class="block text-white text-3xl font-serif hover:text-gray-300 transition">About</a>
                <a href="#" class="block text-white text-3xl font-serif hover:text-gray-300 transition">Contact</a>
                <div class="pt-8 space-y-4">
                    <a href="#" class="block text-white/60 text-sm hover:text-white transition">Instagram</a>
                    <a href="#" class="block text-white/60 text-sm hover:text-white transition">Behance</a>
                    <a href="#" class="block text-white/60 text-sm hover:text-white transition">LinkedIn</a>
                </div>
            </nav>
        `;
        document.body.appendChild(mobileMenu);
        
        // Animate in
        setTimeout(() => {
            mobileMenu.style.opacity = '1';
        }, 10);
    } else {
        // Remove mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.remove();
            }, 300);
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-overlay');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic year in footer
const yearElement = document.querySelector('footer p');
if (yearElement) {
    yearElement.textContent = yearElement.textContent.replace('2024', new Date().getFullYear());
}

// Image lazy loading fallback
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[src$=".jpg"]');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder if image fails to load
            this.src = `https://via.placeholder.com/${this.width}x${this.height}/4a1f1f/ffffff?text=Image`;
        });
    });
});

// Add polaroid class to images with parent styling
document.addEventListener('DOMContentLoaded', () => {
    const polaroidContainers = document.querySelectorAll('.bg-white.shadow-lg.p-3');
    polaroidContainers.forEach(container => {
        container.classList.add('polaroid');
    });
});

// Process section hover effect
document.addEventListener('DOMContentLoaded', () => {
    const processItems = document.querySelectorAll('.flex.items-start.space-x-8.group');
    processItems.forEach(item => {
        item.classList.add('process-item');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

console.log('Eugene Gyasi Portfolio - Built with ❤️');
