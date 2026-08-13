document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. Intersection Observer for Scroll Animations (.reveal)
     ========================================================================== */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Animates once per element
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ==========================================================================
     2. Project Modal Data & Event Handlers
     ========================================================================== */
  const projectDetailsData = {
    taskflow: {
      title: "TaskFlow",
      subtitle: "Web Application • Full Stack",
      description:
        "A task management web application designed for organizing daily workflows efficiently.",
      highlights: [
        "Built full-stack operations using React and Express.js REST API.",
        "Styled modern UI components using Vite and Tailwind CSS.",
        "Implemented persistent document storage with MongoDB.",
      ],
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/Nethra44/taskflow",
      demo: "https://task-flow-weld-tau.vercel.app/",
    },
    hiresense: {
      title: "HireSense AI",
      subtitle: "AI Resume Analyzer",
      description:
        "An AI-powered application evaluating candidate resumes against core job requirements.",
      highlights: [
        "Fast inference processing using Groq AI and Llama 3.3 70B.",
        "High-performance async API backend built with Python FastAPI.",
        "Full application management state with React and MongoDB.",
      ],
      tech: ["React", "FastAPI", "MongoDB", "Groq AI", "Llama 3.3 70B"],
      github: "https://github.com/Nethra44/hiresense-ai",
      demo: "#",
    },
    docintel: {
      title: "Document Intelligence System",
      subtitle: "Internship Project • Team Collaborator",
      description:
        "Retrieval-Augmented Generation (RAG) system for extracting, indexing, and querying complex documents.",
      highlights: [
        "Collaborated on backend RAG pipeline architecture using Node.js and Python.",
        "Integrated Gemini AI API for natural language extraction and Q&A.",
        "Managed database indexing using MySQL.",
      ],
      tech: ["Node.js", "Python", "Express.js", "MySQL", "Gemini AI", "RAG"],
      github:
        "https://github.com/netraalakshmi-hub/rag-document-intelligence-system",
      demo: "#",
    },
  };

  /* Modal Click Events (Open & Close) */
  document.addEventListener("click", (e) => {
    // Open Modal
    const btn = e.target.closest(".btn-details");
    if (btn) {
      const projectKey = btn.getAttribute("data-project");
      const data = projectDetailsData[projectKey];
      const modal = document.getElementById("projectModal");
      const modalBody = document.getElementById("modalBody");

      if (data && modal && modalBody) {
        modalBody.innerHTML = `
          <h2>${data.title}</h2>
          <p class="modal-subtitle"><strong>${data.subtitle}</strong></p>
          <p>${data.description}</p>
          <h4 style="margin-top: 1rem;">Key Highlights:</h4>
          <ul>${data.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="project-tech-stack" style="margin-top: 1rem;">
            ${data.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">GitHub Repo</a>
            ${data.demo !== "#" ? `<a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">Live Demo</a>` : ""}
          </div>
        `;
        modal.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevents background page scrolling while modal is open
      }
    }

    // Close Modal when clicking close button or dark backdrop
    if (e.target.id === "modalClose" || e.target.id === "projectModal") {
      closeProjectModal();
    }
  });

  // Close modal when pressing the Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });

  function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = ""; // Restores background scrolling
    }
  }
});
