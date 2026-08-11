/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPT
   Pure Vanilla JavaScript (ES6+)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. DYNAMIC FOOTER YEAR
    // ----------------------------------------------------------------------
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 2. HERO TYPING ANIMATION
    // ----------------------------------------------------------------------
    const typingTextEl = document.getElementById('typingText');
    const typingPhrases = [
        "Java & DSA Learner",
        "Web Developer",
        "AI Project Builder"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1800;

    function typeEffect() {
        if (!typingTextEl) return;

        const currentPhrase = typingPhrases[phraseIndex];

        if (isDeleting) {
            typingTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at complete word
            setTimeout(() => { isDeleting = true; typeEffect(); }, pauseTime);
            return;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            setTimeout(typeEffect, 300);
            return;
        }

        const nextSpeed = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(typeEffect, nextSpeed);
    }

    // Initialize typing
    typeEffect();

    // ----------------------------------------------------------------------
    // 3. MOBILE HAMBURGER MENU TOGGLE
    // ----------------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMobileMenu() {
        const isOpen = navMenu.classList.toggle('open');
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    }

    function closeMobileMenu() {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ----------------------------------------------------------------------
    // 4. ACTIVE NAVIGATION LINK ON SCROLL (IntersectionObserver)
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');

    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    // ----------------------------------------------------------------------
    // 5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserverOptions = {
        root: null,
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------------------------
    // 6. PROJECT DETAILS MODAL INTERACTION
    // ----------------------------------------------------------------------
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const detailButtons = document.querySelectorAll('.btn-details');

    const projectData = {
        taskflow: {
            title: "TaskFlow",
            subtitle: "Task Management Web Application",
            description: "TaskFlow is a modern task management web application designed to help users organize, prioritize, and track their work and daily projects cleanly.",
            highlights: [
                "Full-stack architecture featuring React frontend with Node.js and Express.js REST API backend.",
                "Styled using Tailwind CSS for clean, responsive UI layouts.",
                "MongoDB database storage for managing user task lists, states, and deadlines.",
                "Vite setup for optimized module bundling and quick local development."
            ],
            tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            github: "https://github.com/[YOUR-GITHUB]/taskflow",
            demo: "https://[YOUR-TASKFLOW-DEMO].example.com"
        },
        hiresense: {
            title: "HireSense AI",
            subtitle: "AI Resume Analyzer",
            description: "An AI-powered resume analysis web application that evaluates candidate resumes against target job descriptions using high-speed LLM inference.",
            highlights: [
                "Integrated Groq AI API with Llama 3.3 70B model for accurate text processing and structured feedback generation.",
                "React frontend connected with a FastAPI Python backend service.",
                "MongoDB integration for storing analysis histories and candidate feedback reports.",
                "Demonstrates practical AI integration and API orchestration without claiming model training."
            ],
            tech: ["React", "FastAPI", "MongoDB", "Groq AI", "Llama 3.3 70B"],
            github: "https://github.com/[YOUR-GITHUB]/hiresense-ai",
            demo: "https://[YOUR-HIRESENSE-DEMO].example.com"
        },
        docintel: {
            title: "Document Intelligence System",
            subtitle: "RAG-Powered Document Interaction",
            description: "A document intelligence system leveraging Retrieval-Augmented Generation (RAG) to process documents, extract structured text, and provide AI-driven context retrieval.",
            highlights: [
                "Retrieval-Augmented Generation (RAG) pipeline for document chunking, indexing, and context-aware retrieval.",
                "Node.js and Python hybrid architecture with Express.js API layer.",
                "Integrated Gemini AI API for natural language document questioning and text extraction.",
                "MySQL relational database storage for user metadata, document indexes, and audit logs."
            ],
            tech: ["Node.js", "Python", "Express.js", "MySQL", "Gemini AI", "RAG"],
            github: "https://github.com/[YOUR-GITHUB]/document-intelligence",
            demo: "https://[YOUR-DOCINTEL-DEMO].example.com"
        }
    };

    function openProjectModal(projectId) {
        const data = projectData[projectId];
        if (!data || !projectModal || !modalBody) return;

        const highlightsHTML = data.highlights.map(item => `<li>${item}</li>`).join('');
        const techHTML = data.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');

        modalBody.innerHTML = `
            <h3 class="modal-detail-title">${data.title}</h3>
            <span class="modal-detail-sub">${data.subtitle}</span>
            <p class="modal-detail-desc">${data.description}</p>
            
            <h4 class="modal-section-title">Key Implementation Highlights</h4>
            <ul class="modal-highlights-list">
                ${highlightsHTML}
            </ul>

            <h4 class="modal-section-title">Technologies Used</h4>
            <div class="project-tech-stack" style="margin-bottom: 1.5rem;">
                ${techHTML}
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">View GitHub Code</a>
                <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">Live Demo</a>
            </div>
        `;

        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // ----------------------------------------------------------------------
    // 7. CONTACT FORM VALIDATION & FEEDBACK
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function clearErrors() {
        [nameInput, emailInput, messageInput].forEach(input => {
            if (input) input.classList.remove('invalid');
        });
        if (formStatus) {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameInput.classList.add('invalid');
                isValid = false;
            }

            // Validate Email
            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                emailInput.classList.add('invalid');
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageInput.classList.add('invalid');
                isValid = false;
            }

            if (isValid) {
                // Show success feedback
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            }
        });
    }

});
