import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import profileImage from "./assets/rupa.jpeg";
import eventImage from "./assets/event.png";
import lumiereImage from "./assets/lumiere.png";
import machineImage from "./assets/machine.png";
import slimImage from "./assets/slim.png";
import resumePDF from "./assets/Rupa_resume.pdf";

function App() {
  const sectionRefs = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" className="logo-link" onClick={() => setIsMenuOpen(false)}>
              <span className="logo-text">Banavathi Rupa Bai</span>
            </a>
          </div>
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li className="nav-menu-button">
              <a href="#contacts" className="nav-button" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>
            </li>
          </ul>
          <div className="nav-cta">
            <a href="#contacts" className="nav-button">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-text">
                <span className="hand-wave">👋</span> Available for work
              </span>
            </div>
            <h1 className="hero-greeting">
              Hello, I'm
            </h1>
            <h2 className="hero-name">
              <span className="name-letter" style={{ animationDelay: '0.7s' }}>R</span>
              <span className="name-letter" style={{ animationDelay: '0.8s' }}>u</span>
              <span className="name-letter" style={{ animationDelay: '0.9s' }}>p</span>
              <span className="name-letter" style={{ animationDelay: '1.0s' }}>a</span>&nbsp;
              <span className="name-letter" style={{ animationDelay: '0.7s' }}>B</span>
              <span className="name-letter" style={{ animationDelay: '0.8s' }}>h</span>
              <span className="name-letter" style={{ animationDelay: '0.9s' }}>a</span>
              <span className="name-letter" style={{ animationDelay: '1.0s' }}>n</span>
              <span className="name-letter" style={{ animationDelay: '1.0s' }}>u</span>

            </h2>
            <div className="hero-title-wrapper">
              <h3 className="hero-title">
                <span className="title-line"></span>
                <span className="title-text">Full Stack Developer</span>
              </h3>
            </div>
            <p className="hero-description">
              I build thoughtfully designed, user-centered digital experiences and develop scalable, maintainable web applications using modern web technologies.
            </p>
            <div className="hero-buttons">
              <a href="#contacts" className="btn btn-primary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span>View My Work</span>
              </a>
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-resume">
                <span>View My Resume</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15V17.5H15V15M10 3.75V13.75M7.5 10.625L10 13.125L12.5 10.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <div className="hero-decorations">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="gradient-ring"></div>
              </div>
              <div className="hero-image-container">
                <div className="image-glow"></div>
                <img src={profileImage} alt="Rupa - Full Stack Developer" className="hero-image" />
                <div className="image-border"></div>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">Artist</div>
                <div className="stat-label">Creative Passion</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Travel</div>
                <div className="stat-label">Explorer</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Music</div>
                <div className="stat-label">Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bar */}
      <section className="skills-bar scroll-animate" ref={addToRefs}>
        <div className="skills-container">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Postman</span>
          <span>GitHub</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section scroll-animate" ref={addToRefs}>
        <div className="about-background-decoration"></div>
        <div className="about-container">
          <div className="about-header">
            <span className="about-label">About Me</span>
            <h2 className="about-title">Crafting Digital Experiences</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content">
            <div className="about-main">
              <div className="about-text-content">
                <p className="about-intro">
                  I'm a passionate <span className="highlight-text">Full Stack Developer</span> who transforms ideas into
                  beautiful, functional digital experiences. My journey in software development started from a love of
                  Art, where I discovered my passion for creating from scratch.
                </p>
                <p className="about-description">
                  With expertise in modern web technologies, I specialize in building scalable applications that
                  combine elegant design with robust functionality. I believe in writing clean, efficient code that
                  not only works flawlessly but also provides exceptional user experiences.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-content">
                      <h4>Creative Problem Solving</h4>
                      <p>Finding innovative solutions to complex challenges</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-content">
                      <h4>Modern Technologies</h4>
                      <p>Working with the latest tools and frameworks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-content">
                      <h4>User-Centered Design</h4>
                      <p>Creating experiences that users love</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="about-stat-card">
                <div className="stat-value">4+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="skills-tools-section scroll-animate" ref={addToRefs}>
        <div className="skills-tools-container">
          <div className="section-header-center">
            <span className="section-label">My Expertise</span>
            <h2 className="section-title">Skills & Tools</h2>
            <div className="title-underline-center"></div>
          </div>
          <div className="skills-tools-grid">
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">Frontend Development</h3>
                <div className="category-line"></div>
              </div>
              <div className="skills-list">
                <div className="skill-badge">
                  <span className="skill-name">React.js</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">Backend Development</h3>
                <div className="category-line"></div>
              </div>
              <div className="skills-list">
                <div className="skill-badge">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">Express.js</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">REST APIs</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <div className="category-header">
                <h3 className="category-title">Database & Tools</h3>
                <div className="category-line"></div>
              </div>
              <div className="skills-list">
                <div className="skill-badge">
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">Postman</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-badge">
                  <span className="skill-name">GitHub</span>
                  <div className="skill-level">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '93%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section scroll-animate" ref={addToRefs}>
        <div className="projects-container">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-marquee-wrapper">
            <div className="projects-marquee">
              <div className="projects-marquee-content">
                <div className="project-card">
                  <a href="https://event-booking-frontend-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={eventImage} alt="Event Management Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Event Management</h3>
                    <p>Comprehensive event booking system with real-time updates</p>
                    <a href="https://event-booking-frontend-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={lumiereImage} alt="Lumiere Luxe Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Lumiere Luxe</h3>
                    <p>Elegant e-commerce platform for luxury products</p>
                    <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://andhramachinesagencies.com/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={machineImage} alt="Andhra Sewing Machines Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Andhra Sewing Machines</h3>
                    <p>Professional business website with product catalog</p>
                    <a href="https://andhramachinesagencies.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://sashaslimming.com/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={slimImage} alt="Sasha Slimming Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Sasha Slimming</h3>
                    <p>Modern wellness website with service booking</p>
                    <a href="https://sashaslimming.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="project-card">
                  <a href="https://event-booking-frontend-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={eventImage} alt="Event Management Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Event Management</h3>
                    <p>Comprehensive event booking system with real-time updates</p>
                    <a href="https://event-booking-frontend-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={lumiereImage} alt="Lumiere Luxe Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Lumiere Luxe</h3>
                    <p>Elegant e-commerce platform for luxury products</p>
                    <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://andhramachinesagencies.com/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={machineImage} alt="Andhra Sewing Machines Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Andhra Sewing Machines</h3>
                    <p>Professional business website with product catalog</p>
                    <a href="https://andhramachinesagencies.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <a href="https://sashaslimming.com/" target="_blank" rel="noopener noreferrer" className="project-image-link">
                    <div className="project-image-wrapper">
                      <img src={slimImage} alt="Sasha Slimming Project" className="project-image" />
                    </div>
                  </a>
                  <div className="project-content">
                    <h3>Sasha Slimming</h3>
                    <p>Modern wellness website with service booking</p>
                    <a href="https://sashaslimming.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                      View →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="contact-section scroll-animate" ref={addToRefs}>
        <div className="contact-background"></div>
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-label">Get In Touch</span>
            <h2 className="contact-title">Let's Build Something Amazing Together</h2>
            <div className="title-underline-center"></div>
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-card">
              <h3 className="contact-card-title">Email Me</h3>
              <p className="contact-card-description">Drop me a line anytime</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhanu.rupa2003@gmail.com&su=Hello%20from%20Portfolio&body=Hi%20Rupa,%0D%0A%0D%0A"
                className="contact-email-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                bhanu.rupa2003@gmail.com
                <svg className="link-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="contact-cta">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhanu.rupa2003@gmail.com&su=Hello%20from%20Portfolio&body=Hi%20Rupa,%0D%0A%0D%0A"
                className="contact-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="social-links-section">
              <h3 className="social-links-title">Connect With Me</h3>
              <div className="social-links-container">
                <a
                  href="https://github.com/bhanu2923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/banavathi-rupa-bai-14a312273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/bhanu_rupa03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

