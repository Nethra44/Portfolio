class SkillsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="section bg-alt reveal">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Technical Proficiency</span>
            <h2 class="section-title">Skills &amp; Technologies</h2>
            <div class="section-line"></div>
          </div>

          <div class="skills-wrapper">
            <!-- Category 1: Currently Learning -->
            <div class="skills-category">
              <div class="category-header">
                <div class="category-icon-svg">
                  <!-- Terminal / Code Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>
                <h3>Core Development &amp; Learning</h3>
              </div>
              <p class="category-desc">Core languages and algorithms I am actively studying and practicing every day.</p>

              <div class="badges-grid">
                <div class="tech-badge learning-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-name">Java</span>
                </div>
                <div class="tech-badge learning-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-name">Data Structures &amp; Algorithms</span>
                </div>
                <div class="tech-badge learning-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-name">JavaScript (ES6+)</span>
                </div>
                <div class="tech-badge learning-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-name">HTML5</span>
                </div>
                <div class="tech-badge learning-badge">
                  <span class="badge-dot"></span>
                  <span class="badge-name">CSS3</span>
                </div>
              </div>
            </div>

            <!-- Category 2: Used in My Projects -->
            <div class="skills-category">
              <div class="category-header">
                <div class="category-icon-svg">
                  <!-- Layers / Stack Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3>Applied in My Projects</h3>
              </div>
              <p class="category-desc">Frameworks, databases, and AI models utilized across my completed software projects.</p>

              <div class="badges-grid">
                <div class="tech-badge project-badge">
                  <span class="badge-name">React</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">Vite</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">Tailwind CSS</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">Node.js</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">Express.js</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">FastAPI</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">Python</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">MongoDB</span>
                </div>
                <div class="tech-badge project-badge">
                  <span class="badge-name">MySQL</span>
                </div>
                <div class="tech-badge ai-badge">
                  <!-- AI Chip Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2"></path>
                  </svg>
                  <span class="badge-name">Groq AI</span>
                </div>
                <div class="tech-badge ai-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2"></path>
                  </svg>
                  <span class="badge-name">Llama 3.3 70B</span>
                </div>
                <div class="tech-badge ai-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="badge-name">Gemini API</span>
                </div>
                <div class="tech-badge ai-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <span class="badge-name">RAG Architectures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("skills-component", SkillsComponent);
