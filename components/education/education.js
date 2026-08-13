class EducationComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="education" class="section reveal">
                <div class="container">
                    <div class="section-header">
                        <span class="section-subtitle">Academic Background</span>
                        <h2 class="section-title">Education</h2>
                        <div class="section-line"></div>
                    </div>

                    <div class="education-card">
                        <div class="edu-icon">🎓</div>
                        <div class="edu-details">
                            <span class="edu-year-badge">Current — 3rd Year</span>
                            <h3 class="edu-degree">Bachelor of Engineering(B.E)</h3>
                            <h4 class="edu-field">Computer Science Engineering</h4>
                            
                            <div class="edu-meta">
                                <div class="edu-meta-item">
                                    <span class="meta-label">College:</span>
                                    <span class="meta-value">K.S.R. College of Engineering</span>
                                </div>
                                <div class="edu-meta-item">
                                    <span class="meta-label">University:</span>
                                    <span class="meta-value">Anna University</span>
                                </div>
                                <div class="edu-meta-item">
                                    <span class="meta-label">Expected Graduation:</span>
                                    <span class="meta-value">2028</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }
}

customElements.define("education-component", EducationComponent);
