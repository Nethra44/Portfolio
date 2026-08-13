class LearningComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="learning" class="section bg-alt reveal">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Roadmap &amp; Growth</span>
            <h2 class="section-title">Learning Journey</h2>
            <div class="section-line"></div>
          </div>

          <div class="journey-container">
            <!-- Left Column: Current Progress Path -->
            <div class="journey-block">
              <h3 class="journey-block-title">
                <span class="journey-icon-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </span>
                Current Progress Path
              </h3>

              <div class="roadmap-timeline">
                <!-- Step 01 -->
                <div class="timeline-step">
                  <div class="step-number">01</div>
                  <div class="step-content">
                    <h4>Java Basics</h4>
                    <p>Variables, control flows, methods, and OOP principles.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 02 -->
                <div class="timeline-step">
                  <div class="step-number">02</div>
                  <div class="step-content">
                    <h4>Data Structures &amp; Algorithms</h4>
                    <p>Arrays, Strings, Linked Lists, Stacks, Queues, and basic Searching/Sorting.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 03 -->
                <div class="timeline-step">
                  <div class="step-number">03</div>
                  <div class="step-content">
                    <h4>HTML &amp; CSS</h4>
                    <p>Semantic markup, CSS Flexbox, CSS Grid, and responsive web design.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 04 -->
                <div class="timeline-step">
                  <div class="step-number">04</div>
                  <div class="step-content">
                    <h4>JavaScript</h4>
                    <p>DOM manipulation, event handling, ES6+ syntax, and async operations.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 05 -->
                <div class="timeline-step">
                  <div class="step-number">05</div>
                  <div class="step-content">
                    <h4>SQL</h4>
                    <p>Relational databases, queries, joins, and schema organization.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 06 -->
                <div class="timeline-step">
                  <div class="step-number">06</div>
                  <div class="step-content">
                    <h4>Backend Development</h4>
                    <p>RESTful APIs, routing, server setup with Node.js/Express and FastAPI.</p>
                  </div>
                </div>
                <div class="timeline-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>

                <!-- Step 07 (Active Highlight Step) -->
                <div class="timeline-step step-highlight">
                  <div class="step-number">07</div>
                  <div class="step-content">
                    <h4>Real-World Projects</h4>
                    <p>Combining frontend, backend, databases, and AI API integrations.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Future Learning Goals -->
            <div class="journey-block">
              <div class="future-badge">Upcoming Milestones</div>
              <h3 class="journey-block-title">
                <span class="journey-icon-svg target-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </span>
                Future Learning Goals
              </h3>
              <p class="future-intro">Targeted skills and technologies I plan to master next in my development roadmap:</p>

              <div class="future-grid">
                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  </span>
                  <h4>Advanced Java</h4>
                  <p>Generics, Collections framework, Multithreading &amp; Streams API.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                  </span>
                  <h4>JDBC</h4>
                  <p>Java Database Connectivity for enterprise SQL integration.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                  </span>
                  <h4>Spring Boot</h4>
                  <p>Enterprise Java microservice architecture and dependency injection.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </span>
                  <h4>REST APIs</h4>
                  <p>Building scalable, standardized backend Web APIs.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                  </span>
                  <h4>Spring Data JPA</h4>
                  <p>Object-relational mapping (ORM) and data abstraction layer.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                  <h4>Spring Security</h4>
                  <p>Authentication, authorization, and securing web applications.</p>
                </div>

                <div class="future-card">
                  <span class="future-icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19 9 10.5 5 14.5"></path><path d="m19 11-4-4"></path><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"></path></svg>
                  </span>
                  <h4>Deployment</h4>
                  <p>Containerization, cloud hosting, and CI/CD pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("learning-component", LearningComponent);
