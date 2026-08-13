class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="contact" class="section bg-alt reveal">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">GET IN TOUCH</span>
            <h2 class="section-title">Contact Me</h2>
            <div class="section-line"></div>
          </div>

          <div class="contact-grid">
            <div class="contact-info-card">
              <h3>Let's Connect</h3>
              <p class="contact-intro">
                Whether you have an opportunity, project idea, or just want to connect, feel free to reach out via email or form!
              </p>

              <div class="contact-methods">
                <!-- Email -->
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </span>
                  <div>
                    <span class="contact-label">EMAIL</span>
                    <a href="mailto:nethrapandi23@gmail.com" class="contact-value">nethrapandi23@gmail.com</a>
                  </div>
                </div>

                <!-- LinkedIn -->
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </span>
                  <div>
                    <span class="contact-label">LINKEDIN</span>
                    <a href="https://linkedin.com/in/nethra-c237" target="_blank" rel="noopener noreferrer" class="contact-value">linkedin.com/in/nethra-c237</a>
                  </div>
                </div>

                <!-- GitHub -->
                <div class="contact-item">
                  <span class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </span>
                  <div>
                    <span class="contact-label">GITHUB</span>
                    <a href="https://github.com/Nethra44" target="_blank" rel="noopener noreferrer" class="contact-value">github.com/Nethra44</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-card">
              <form id="contactForm" novalidate>
                <div class="form-group">
                  <label for="name" class="form-label">Your Name</label>
                  <input type="text" id="name" class="form-control" placeholder="Name" required>
                  <span class="error-msg" id="nameError">Please enter your name</span>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Your Email</label>
                  <input type="email" id="email" class="form-control" placeholder="example@mail.com" required>
                  <span class="error-msg" id="emailError">Please enter a valid email address</span>
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea id="message" class="form-control" rows="5" placeholder="Hi Nethra, I'd like to connect..." required></textarea>
                  <span class="error-msg" id="messageError">Please enter a message</span>
                </div>

                <button type="submit" class="btn btn-primary btn-block">Send Message</button>
                <div class="form-status" id="formStatus"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
    this.initFormValidation();
  }

  initFormValidation() {
    const contactForm = this.querySelector("#contactForm");
    const formStatus = this.querySelector("#formStatus");

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = this.querySelector("#name").value.trim();
        const email = this.querySelector("#email").value.trim();
        const message = this.querySelector("#message").value.trim();

        let isValid = true;

        if (!name) {
          this.querySelector("#nameError").style.display = "block";
          isValid = false;
        } else {
          this.querySelector("#nameError").style.display = "none";
        }

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          this.querySelector("#emailError").style.display = "block";
          isValid = false;
        } else {
          this.querySelector("#emailError").style.display = "none";
        }

        if (!message) {
          this.querySelector("#messageError").style.display = "block";
          isValid = false;
        } else {
          this.querySelector("#messageError").style.display = "none";
        }

        if (isValid && formStatus) {
          formStatus.style.color = "#10b981";
          formStatus.textContent = "Thank you! Your message has been sent.";
          contactForm.reset();
          setTimeout(() => {
            formStatus.textContent = "";
          }, 4000);
        }
      });
    }
  }
}

customElements.define("contact-component", ContactComponent);
