class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="navbar-header" id="navbar">
        <div class="container nav-container">
          <a href="#home" class="nav-logo">
            <span class="logo-accent"></span>Nethra Chella Pandi<span class="logo-accent"></span>
          </a>
          
          <nav class="nav-menu" id="navMenu" aria-label="Main Navigation">
            <ul class="nav-list">
              <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
              <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
              <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
              <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
              <li class="nav-item"><a href="#learning" class="nav-link">Learning</a></li>
              <li class="nav-item"><a href="#education" class="nav-link">Education</a></li>
              <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
          </nav>

          <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle menu" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </header>
    `;

    this.initEvents();
    this.initActiveLinkObserver();
  }

  initEvents() {
    const hamburgerBtn = this.querySelector("#hamburgerBtn");
    const navMenu = this.querySelector("#navMenu");
    const navLinks = this.querySelectorAll(".nav-link");

    if (hamburgerBtn && navMenu) {
      // Toggle menu state on hamburger click
      hamburgerBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        hamburgerBtn.classList.toggle("open", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
      });

      // Close menu when clicking any link
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          hamburgerBtn.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  // Highlights links based on section currently scrolled into view
  initActiveLinkObserver() {
    const navLinks = this.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section enters upper-middle screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const href = link.getAttribute("href").replace("#", "");
            if (href === currentId) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
}

customElements.define("nav-component", NavComponent);
