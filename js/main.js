// ================================
// NAVIGATION & SCROLLING
// ================================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        
        if (scrollY > sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ================================
// SCROLL ANIMATIONS
// ================================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .timeline-item, .about-content, .contact-content'
    );
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// ================================
// NAVBAR SCROLL EFFECTS
// ================================

let lastScrollY = window.pageYOffset;

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const currentScrollY = window.pageYOffset;
    
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
}

// ================================
// INTERACTIVE ELEMENTS
// ================================

// Add particle effect to buttons
function createParticleEffect(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#fff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'particle 0.6s ease-out forwards';
    
    button.style.position = 'relative';
    button.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 600);
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle {
        0% {
            transform: scale(0) translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: scale(1) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// ================================
// TYPING ANIMATION
// ================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ================================
// SKILL TAGS ANIMATION
// ================================

function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// ================================
// CONTACT FORM HANDLING
// ================================

function handleContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #39FF7A 0%, #00D4FF 100%)';
                
                // Reset form
                form.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 2000);
        });
    }
}

// ================================
// DYNAMIC BACKGROUND ELEMENTS
// ================================

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() > 0.5 ? '0, 212, 255' : '255, 107, 157'}, 0.3)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = `floatUp ${Math.random() * 10 + 10}s linear forwards`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 20000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 3000);
}

// Add floating particle animation
const floatingParticleStyle = document.createElement('style');
floatingParticleStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingParticleStyle);

// ================================
// COUNTER ANIMATIONS
// ================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.ceil(current) + suffix;
            }
        }, 30);
    });
}

// ================================
// TECH ICONS INTERACTION
// ================================

function initTechIconsInteraction() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animationPlayState = 'paused';
            icon.style.transform = 'scale(1.2)';
            icon.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animationPlayState = 'running';
            icon.style.transform = 'scale(1)';
            icon.style.boxShadow = 'none';
        });
    });
}

// ================================
// SCROLL PROGRESS INDICATOR
// ================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #00D4FF, #39FF7A, #FF6B9D)';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);
    
    function updateProgress() {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrolled / maxHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
}

// ================================
// CURSOR TRAIL EFFECT
// ================================

function createCursorTrail() {
    const trail = [];
    const trailLength = 20;
    
    function createTrailDot() {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.background = 'rgba(0, 212, 255, 0.6)';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.transition = 'all 0.3s ease';
        document.body.appendChild(dot);
        return dot;
    }
    
    // Initialize trail dots
    for (let i = 0; i < trailLength; i++) {
        trail.push(createTrailDot());
    }
    
    document.addEventListener('mousemove', (e) => {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = e.clientX - 3 + 'px';
                dot.style.top = e.clientY - 3 + 'px';
                dot.style.opacity = (trailLength - index) / trailLength;
                dot.style.transform = `scale(${(trailLength - index) / trailLength})`;
            }, index * 30);
        });
    });
}

// ================================
// PARALLAX EFFECT
// ================================

function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelector('.floating-elements');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (floatingElements && scrolled < hero.offsetHeight) {
            floatingElements.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ================================
// DYNAMIC TEXT EFFECTS
// ================================

function initDynamicText() {
    const heroTitle = document.querySelector('.hero-title');
    const gradientText = heroTitle.querySelector('.gradient-text');
    
    // Add glitch effect on hover
    gradientText.addEventListener('mouseenter', () => {
        gradientText.style.animation = 'glitch 0.5s ease-in-out';
    });
    
    gradientText.addEventListener('animationend', () => {
        gradientText.style.animation = 'shimmer 3s ease-in-out infinite';
    });
}

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% { 
            transform: translate(0);
            filter: hue-rotate(0deg);
        }
        20% { 
            transform: translate(-2px, 2px);
            filter: hue-rotate(90deg);
        }
        40% { 
            transform: translate(-2px, -2px);
            filter: hue-rotate(180deg);
        }
        60% { 
            transform: translate(2px, 2px);
            filter: hue-rotate(270deg);
        }
        80% { 
            transform: translate(2px, -2px);
            filter: hue-rotate(360deg);
        }
    }
`;
document.head.appendChild(glitchStyle);

// ================================
// PROJECT CARDS HOVER EFFECTS
// ================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.top = '0';
            ripple.style.left = '0';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.background = 'radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%)';
            ripple.style.borderRadius = 'inherit';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            card.style.position = 'relative';
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ================================
// SKILL TAGS INTERACTION
// ================================

function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Create a burst effect
            const burst = document.createElement('div');
            burst.innerHTML = '✨';
            burst.style.position = 'absolute';
            burst.style.fontSize = '1.5rem';
            burst.style.pointerEvents = 'none';
            burst.style.animation = 'burst 1s ease-out forwards';
            burst.style.left = '50%';
            burst.style.top = '50%';
            burst.style.transform = 'translate(-50%, -50%)';
            
            tag.style.position = 'relative';
            tag.appendChild(burst);
            
            setTimeout(() => {
                burst.remove();
            }, 1000);
        });
    });
}

// Add burst animation
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burst {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

// ================================
// LOADING SCREEN
// ================================

function createLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">TJ</div>
            <div class="loader-text">Loading Experience...</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0A0E27 0%, #1B1B2F 50%, #162447 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .loader-logo {
            font-size: 4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00D4FF 0%, #39FF7A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            animation: pulse 2s ease-in-out infinite;
        }
        
        .loader-text {
            color: #A8A8B3;
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }
        
        .loader-bar {
            width: 300px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .loader-progress {
            height: 100%;
            background: linear-gradient(90deg, #00D4FF, #39FF7A, #FF6B9D);
            border-radius: 2px;
            animation: loading 2s ease-out forwards;
        }
        
        @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    // Remove loader after animation
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2500);
}

// ================================
// THEME SWITCHER (OPTIONAL)
// ================================

function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '2rem';
    themeToggle.style.right = '2rem';
    themeToggle.style.width = '50px';
    themeToggle.style.height = '50px';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.border = '2px solid var(--primary)';
    themeToggle.style.background = 'rgba(0, 212, 255, 0.1)';
    themeToggle.style.color = 'var(--primary)';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.transition = 'all 0.3s ease';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.backdropFilter = 'blur(10px)';
    
    const themes = [
        {
            name: 'cyber',
            colors: {
                '--primary': '#00D4FF',
                '--secondary': '#FF6B9D',
                '--accent': '#C77DFF',
                '--success': '#39FF7A'
            }
        },
        {
            name: 'neon',
            colors: {
                '--primary': '#39FF7A',
                '--secondary': '#FFD700',
                '--accent': '#FF6B9D',
                '--success': '#00D4FF'
            }
        },
        {
            name: 'sunset',
            colors: {
                '--primary': '#FF6B9D',
                '--secondary': '#FFD700',
                '--accent': '#FF8C42',
                '--success': '#C77DFF'
            }
        }
    ];
    
    let currentTheme = 0;
    
    themeToggle.addEventListener('click', () => {
        currentTheme = (currentTheme + 1) % themes.length;
        const theme = themes[currentTheme];
        
        Object.entries(theme.colors).forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });
        
        // Add celebration effect
        createParticleEffect({ 
            clientX: themeToggle.offsetLeft + 25, 
            clientY: themeToggle.offsetTop + 25,
            currentTarget: themeToggle 
        });
    });
    
    document.body.appendChild(themeToggle);
}

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Create loading screen
    createLoadingScreen();
    
    // Initialize after loading
    setTimeout(() => {
        initScrollAnimations();
        handleContactForm();
        createFloatingParticles();
        initTechIconsInteraction();
        initProjectCards();
        initSkillTags();
        initDynamicText();
        initParallaxEffect();
        createScrollProgress();
        createCursorTrail();
        createThemeToggle();
        
        // Initialize new collaborative features
        const aiChat = new AIChat();
        const codePlayground = new CodePlayground();
        const skillsRadar = new SkillsRadar();
        initCollaborativeFeatures();
        
        // Add particle effects to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', createParticleEffect);
        });
        
        // Animate counters when about section is visible
        const aboutSection = document.querySelector('.about');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(aboutSection);
        
        // Animate skill tags when skills section is visible
        const skillsSection = document.querySelector('.skills');
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillTags();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillsObserver.observe(skillsSection);
        
        // Initialize radar chart when playground section is visible
        const playgroundSection = document.querySelector('.playground');
        if (playgroundSection) {
            const playgroundObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            skillsRadar.init();
                            skillsRadar.animateRadar();
                        }, 500);
                        playgroundObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            playgroundObserver.observe(playgroundSection);
        }
        
    }, 2600);
});

// ================================
// SCROLL EVENT LISTENERS
// ================================

window.addEventListener('scroll', () => {
    updateActiveNavLink();
    handleNavbarScroll();
});

// ================================
// RESIZE HANDLERS
// ================================

window.addEventListener('resize', () => {
    // Close mobile menu on resize
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    updateActiveNavLink();
    handleNavbarScroll();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus management for better accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid var(--primary)';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = 'none';
        });
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', manageFocus);

// ================================
// AI CHAT WIDGET
// ================================

class AIChat {
    constructor() {
        this.responses = {
            greetings: [
                "Hello! I'm here to tell you about Travis's amazing work! 👋",
                "Hi there! Ready to learn about Travis's projects and skills? 🚀",
                "Hey! I'm excited to share Travis's journey with you! ✨"
            ],
            skills: [
                "Travis is proficient in React, Vue.js, Node.js, Python, and many more! He loves learning new technologies and staying current with industry trends. 💻",
                "His strongest skills include full-stack development, cloud architecture, and team leadership. He's always expanding his toolkit! 🛠️",
                "Travis excels at both frontend and backend development, with expertise in modern frameworks and cloud technologies. 🌟"
            ],
            projects: [
                "Travis has built amazing projects like e-commerce platforms, analytics dashboards, and mobile apps! Each one showcases his attention to detail and user experience focus. 🎨",
                "His projects demonstrate full-stack capabilities, from database design to beautiful UIs. Check out the Projects section for more details! 📱",
                "Every project Travis builds focuses on performance, scalability, and user delight. He's passionate about creating meaningful digital experiences! 🚀"
            ],
            collaboration: [
                "Travis thrives in team environments! He's experienced in pair programming, code reviews, and mentoring junior developers. 👥",
                "He's led multiple cross-functional teams and believes great software is built through collaboration and shared knowledge. 🤝",
                "Travis uses tools like Slack, GitHub, Figma, and Jira to keep teams connected and productive. Communication is key! 💬"
            ],
            experience: [
                "Travis has 5+ years of professional experience, from frontend roles to senior full-stack positions. He's worked at both startups and established companies! 📈",
                "He's built systems serving millions of users and has experience with microservices, CI/CD, and cloud infrastructure. 🏗️",
                "Travis has mentored 10+ developers and led 3 different teams to successful project deliveries. Leadership comes naturally! 👑"
            ],
            default: [
                "That's a great question! Travis is always excited to discuss new opportunities and challenges. Feel free to reach out directly! 😊",
                "I'd love to help with that! You can contact Travis through the form below or connect on LinkedIn for more detailed conversations. 📞",
                "Travis would be the best person to answer that! He's very approachable and loves talking about technology and collaboration. 💭"
            ]
        };
        this.isOpen = false;
        this.init();
    }

    init() {
        const chatFab = document.getElementById('chatFab');
        const chatWidget = document.getElementById('chatWidget');
        const chatToggle = document.getElementById('chatToggle');
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');

        chatFab.addEventListener('click', () => this.toggleChat());
        chatToggle.addEventListener('click', () => this.toggleChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        const chatWidget = document.getElementById('chatWidget');
        const chatFab = document.getElementById('chatFab');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            chatWidget.classList.add('active');
            chatFab.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.getElementById('chatInput').focus();
            }, 300);
        } else {
            chatWidget.classList.remove('active');
            chatFab.style.transform = 'scale(1)';
        }
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        chatInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, Math.random() * 1000 + 1000);
    }

    addMessage(text, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
            </div>
            <div class="message-content">${text}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-msg';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator-msg');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return this.getRandomResponse('greetings');
        } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
            return this.getRandomResponse('skills');
        } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
            return this.getRandomResponse('projects');
        } else if (lowerMessage.includes('team') || lowerMessage.includes('collaboration') || lowerMessage.includes('work together')) {
            return this.getRandomResponse('collaboration');
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career')) {
            return this.getRandomResponse('experience');
        } else {
            return this.getRandomResponse('default');
        }
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// ================================
// CODE PLAYGROUND
// ================================

class CodePlayground {
    constructor() {
        this.examples = {
            fibonacci: {
                output: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
                description: '✨ Generated the first 10 Fibonacci numbers using a generator function!'
            },
            api: {
                output: `{
  "message": "Welcome Travis!",
  "profile": {
    "name": "Travis",
    "role": "Senior Developer",
    "skills": ["React", "Python", "AWS"]
  }
}`,
                description: '🚀 API endpoint successfully created user profile!'
            }
        };
        this.init();
    }

    init() {
        document.querySelectorAll('.run-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.runExample(e.target.dataset.example));
        });
    }

    runExample(exampleName) {
        const outputElement = document.getElementById(`output-${exampleName}`);
        const outputContent = outputElement.querySelector('.output-content');
        const runBtn = document.querySelector(`[data-example="${exampleName}"]`);
        
        // Show loading state
        runBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running';
        outputContent.textContent = 'Executing code...';
        
        setTimeout(() => {
            const example = this.examples[exampleName];
            outputContent.innerHTML = `
                <div style="margin-bottom: 0.5rem; color: var(--success);">${example.description}</div>
                <pre style="margin: 0; white-space: pre-wrap;">${example.output}</pre>
            `;
            runBtn.innerHTML = '<i class="fas fa-check"></i> Ran';
            
            // Add success animation
            outputElement.style.animation = 'codeSuccess 0.5s ease-out';
            
            setTimeout(() => {
                runBtn.innerHTML = '<i class="fas fa-play"></i> Run';
            }, 2000);
        }, 1500);
    }
}

// Add code success animation
const codeSuccessStyle = document.createElement('style');
codeSuccessStyle.textContent = `
    @keyframes codeSuccess {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); box-shadow: 0 10px 30px rgba(57, 255, 122, 0.3); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(codeSuccessStyle);

// ================================
// SKILLS RADAR CHART
// ================================

class SkillsRadar {
    constructor() {
        this.skills = [
            { name: 'Frontend', current: 90, target: 95 },
            { name: 'Backend', current: 85, target: 90 },
            { name: 'DevOps', current: 75, target: 85 },
            { name: 'Mobile', current: 70, target: 80 },
            { name: 'AI/ML', current: 60, target: 75 },
            { name: 'Leadership', current: 80, target: 90 }
        ];
        this.canvas = null;
        this.ctx = null;
    }

    init() {
        this.canvas = document.getElementById('skillsRadar');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    }

    draw() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = 150;
        const angles = this.skills.map((_, i) => (i * 2 * Math.PI) / this.skills.length);

        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw grid
        this.drawGrid(centerX, centerY, radius);
        
        // Draw skill areas
        this.drawSkillArea(centerX, centerY, radius, angles, 'current', '#00D4FF');
        this.drawSkillArea(centerX, centerY, radius, angles, 'target', '#FF6B9D');
        
        // Draw labels
        this.drawLabels(centerX, centerY, radius, angles);
    }

    drawGrid(centerX, centerY, radius) {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.lineWidth = 1;
        
        // Draw concentric circles
        for (let i = 1; i <= 5; i++) {
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
        
        // Draw radial lines
        const angles = this.skills.map((_, i) => (i * 2 * Math.PI) / this.skills.length);
        angles.forEach(angle => {
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(
                centerX + radius * Math.cos(angle - Math.PI / 2),
                centerY + radius * Math.sin(angle - Math.PI / 2)
            );
            this.ctx.stroke();
        });
    }

    drawSkillArea(centerX, centerY, radius, angles, type, color) {
        this.ctx.fillStyle = color.replace('#', 'rgba(').replace('FF', '255,').replace('D4', '212,').replace('6B', '107,').replace('9D', '157,') + ', 0.2)';
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.skills.forEach((skill, i) => {
            const value = skill[type] / 100;
            const x = centerX + radius * value * Math.cos(angles[i] - Math.PI / 2);
            const y = centerY + radius * value * Math.sin(angles[i] - Math.PI / 2);
            
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        });
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    drawLabels(centerX, centerY, radius, angles) {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = '14px Inter';
        this.ctx.textAlign = 'center';
        
        this.skills.forEach((skill, i) => {
            const labelRadius = radius + 30;
            const x = centerX + labelRadius * Math.cos(angles[i] - Math.PI / 2);
            const y = centerY + labelRadius * Math.sin(angles[i] - Math.PI / 2);
            
            this.ctx.fillText(skill.name, x, y);
            this.ctx.fillText(`${skill.current}%`, x, y + 15);
        });
    }

    animateRadar() {
        // Add animation to make the radar more dynamic
        let frame = 0;
        const animate = () => {
            this.draw();
            
            // Add rotating highlight
            const centerX = this.canvas.width / 2;
            const centerY = this.canvas.height / 2;
            const highlightAngle = (frame * 2) % 360;
            const x = centerX + 150 * Math.cos(highlightAngle * Math.PI / 180);
            const y = centerY + 150 * Math.sin(highlightAngle * Math.PI / 180);
            
            this.ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
            this.ctx.beginPath();
            this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
            
            frame++;
            if (frame < 200) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    }
}

// ================================
// COLLABORATIVE FEATURES
// ================================

function initCollaborativeFeatures() {
    // Add real-time collaboration simulation
    const collabCards = document.querySelectorAll('.collab-card');
    
    collabCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Simulate collaborative action
            const actionMessages = [
                '🤝 Initiating pair programming session...',
                '📝 Starting code review process...',
                '🚀 Beginning team leadership sync...'
            ];
            
            showNotification(actionMessages[index]);
        });
    });
    
    // Add tool interaction
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolName = tool.textContent.trim();
            showNotification(`🛠️ Connecting to ${toolName}...`);
            
            // Add connecting animation
            tool.style.background = 'var(--gradient-primary)';
            tool.style.color = 'var(--bg-primary)';
            
            setTimeout(() => {
                tool.style.background = '';
                tool.style.color = '';
            }, 2000);
        });
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '2rem';
    notification.style.background = 'var(--gradient-primary)';
    notification.style.color = 'var(--bg-primary)';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
    notification.style.zIndex = '10000';
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.style.maxWidth = '300px';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ================================
// ERROR HANDLING
// ================================

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// ================================
// EXPORT FUNCTIONS (for potential module use)
// ================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        updateActiveNavLink,
        animateCounters,
        createParticleEffect
    };
}
