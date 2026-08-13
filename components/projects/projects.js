class ProjectsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="projects" class="section reveal">
                <div class="container">
                    <div class="section-header">
                        <span class="section-subtitle">Featured Work</span>
                        <h2 class="section-title">Completed Projects</h2>
                        <div class="section-line"></div>
                    </div>

                    <div class="projects-grid">
                        <article class="project-card">
                            <div class="project-card-header">
                                <div class="project-tag">Web Application</div>
                                <h3 class="project-title">TaskFlow</h3>
                            </div>
                            <div class="project-card-body">
                                <p class="project-description">
                                    A task management web application built using React, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB. Designed for managing daily tasks and workflows efficiently.
                                </p>
                                <div class="project-tech-stack">
                                    <span class="tech-pill">React</span>
                                    <span class="tech-pill">Vite</span>
                                    <span class="tech-pill">Tailwind CSS</span>
                                    <span class="tech-pill">Node.js</span>
                                    <span class="tech-pill">Express.js</span>
                                    <span class="tech-pill">MongoDB</span>
                                </div>
                            </div>
                            <div class="project-card-footer">
                                <button class="btn btn-sm btn-outline btn-details" data-project="taskflow">
                                    View Details
                                </button>
                                <div class="project-links">
                                    <a href="https://github.com/Nethra44/taskflow" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="TaskFlow GitHub Repository">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
                                    </a>
                                    <a href="https://task-flow-weld-tau.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="TaskFlow Live Demo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article class="project-card highlight-card">
                            <div class="project-card-header">
                                <div class="project-tag ai-tag">AI Project</div>
                                <h3 class="project-title">HireSense AI</h3>
                                <span class="project-subtitle">AI Resume Analyzer</span>
                            </div>
                            <div class="project-card-body">
                                <p class="project-description">
                                    An AI-powered resume analysis application using React, FastAPI, MongoDB, Groq AI, and Llama 3.3 70B. Integrates high-speed Groq AI inference to evaluate resumes against candidate requirements.
                                </p>
                                <div class="project-tech-stack">
                                    <span class="tech-pill">React</span>
                                    <span class="tech-pill">FastAPI</span>
                                    <span class="tech-pill">MongoDB</span>
                                    <span class="tech-pill ai-pill">Groq AI</span>
                                    <span class="tech-pill ai-pill">Llama 3.3 70B</span>
                                </div>
                            </div>
                            <div class="project-card-footer">
                                <button class="btn btn-sm btn-outline btn-details" data-project="hiresense">
                                    View Details
                                </button>
                                <div class="project-links">
                                    <a href="https://github.com/Nethra44/hiresense-ai" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="HireSense AI GitHub Repository">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="HireSense AI Live Demo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article class="project-card">
                            <div class="project-card-header">
                                <div class="project-tag ai-tag">Internship Project • RAG / AI</div>
                                <h3 class="project-title">Document Intelligence System</h3>
                                <span class="project-subtitle">Internship Project | Collaborator</span>
                            </div>
                            <div class="project-card-body">
                                <p class="project-description">
                                    A document intelligence application developed during an internship project using Retrieval-Augmented Generation with Node.js, Python, Express.js, MySQL, and Gemini AI for automated text extraction, indexing, and context retrieval.
                                </p>
                                <div class="project-tech-stack">
                                    <span class="tech-pill">Node.js</span>
                                    <span class="tech-pill">Python</span>
                                    <span class="tech-pill">Express.js</span>
                                    <span class="tech-pill">MySQL</span>
                                    <span class="tech-pill ai-pill">Gemini AI</span>
                                    <span class="tech-pill ai-pill">RAG</span>
                                </div>
                            </div>
                            <div class="project-card-footer">
                                <button class="btn btn-sm btn-outline btn-details" data-project="docintel">
                                    View Details
                                </button>
                                <div class="project-links">
                                    <a href="https://github.com/Nethra44/DIS-Rag" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="Document Intelligence System GitHub Repository">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" class="link-icon" aria-label="Document Intelligence System Live Demo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        `;
  }
}

customElements.define("projects-component", ProjectsComponent);
