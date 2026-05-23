import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" id="contact">
      <div class="footer-mesh-bg"></div>
      <div class="footer-glow"></div>

      <div class="footer-content">
        <div class="container">
          <div class="footer-grid">
            <!-- Footer Column 1: Company Info -->
            <div class="footer-brand" data-animate="fade-in-up">
              <div class="footer-logo">
                <span class="logo-icon">◈</span>
                <span class="logo-text">Synexix</span>
              </div>
              <p class="footer-description">
                Transformando empresas a través de soluciones tecnológicas
                innovadoras y sostenibles.
              </p>
              <div class="social-links">
                <a
                  href="https://linkedin.com"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  title="X (Twitter)"
                  target="_blank"
                  rel="noopener"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  title="Instagram"
                  target="_blank"
                  rel="noopener"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Footer Column 2: Services -->
            <div class="footer-column" data-animate="fade-in-up">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#services">Inteligencia Artificial</a></li>
                <li><a href="#services">Automatización</a></li>
                <li><a href="#services">Análisis de Datos</a></li>
                <li><a href="#services">Cloud Computing</a></li>
                <li><a href="#services">Ciberseguridad</a></li>
                <li><a href="#services">Consultoría</a></li>
              </ul>
            </div>

            <!-- Footer Column 3: Company -->
            <div class="footer-column" data-animate="fade-in-up">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#hero">Nosotros</a></li>
                <li><a href="#team">Equipo</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Carreras</a></li>
                <li><a href="#press">Prensa</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>

            <!-- Footer Column 4: Contact -->
            <div class="footer-column" data-animate="fade-in-up">
              <h4>Contacto</h4>
              <div class="contact-info">
                <p>
                  <span class="contact-label">Email</span>
                  <a href="mailto:hello&#64;synexix.com">hello&#64;synexix.com</a>
                </p>
                <p>
                  <span class="contact-label">Teléfono</span>
                  <a href="tel:+34123456789">+57 3216711298</a>
                </p>
                <p>
                  <span class="contact-label">Ubicación</span>
                  <span>Popayán, Colombia</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <p class="copyright">
              © 2026 Synexix. Todos los derechos reservados.
            </p>
            <ul class="footer-links">
              <li><a href="#privacy">Privacidad</a></li>
              <li><a href="#terms">Términos</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        position: relative;
        color: var(--color-text-light);
        overflow: hidden;
        background: var(--color-bg-dark);
      }

      .footer-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 80% 20%, rgba(235, 197, 38, 0.04) 0px, transparent 50%),
          radial-gradient(at 10% 80%, rgba(113, 113, 174, 0.05) 0px, transparent 50%),
          var(--color-bg-dark);
        z-index: 0;
      }

      .footer-glow {
        position: absolute;
        bottom: -200px;
        right: -100px;
        width: 600px;
        height: 600px;
        background: radial-gradient(
          circle,
          rgba(113, 113, 174, 0.08) 0%,
          transparent 70%
        );
        pointer-events: none;
        z-index: 1;
      }

      .footer-content {
        position: relative;
        z-index: 2;
        padding: var(--spacing-6xl) 0 var(--spacing-3xl);
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        gap: var(--spacing-4xl);
      }

      .footer-brand {
        opacity: 0;
      }

      .footer-brand.fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .footer-logo {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-lg);
      }

      .footer-logo .logo-icon {
        font-size: 1.5rem;
        color: var(--color-primary-light);
        line-height: 1;
      }

      .footer-logo .logo-text {
        font-family: var(--font-display);
        font-size: var(--font-size-2xl);
        font-weight: 700;
        background: linear-gradient(
          135deg,
          var(--color-primary-light),
          var(--color-primary-muted),
          var(--color-accent-purple)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .footer-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: var(--spacing-xl);
        max-width: 280px;
      }

      .social-links {
        display: flex;
        gap: var(--spacing-md);
        align-items: center;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: rgba(235, 197, 38, 0.08);
        border: 1.5px solid var(--color-primary-light);
        border-radius: 50%;
        color: var(--color-primary-light);
        transition: all var(--transition-base);
        position: relative;
        overflow: hidden;
        flex-shrink: 0;
      }

      .social-link::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--color-primary-light);
        transform: scale(0);
        border-radius: 50%;
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .social-link:hover {
        border-color: var(--color-primary-light);
        transform: translateY(-3px);
        box-shadow: 0 4px 15px rgba(235, 197, 38, 0.3);
      }

      .social-link:hover::before {
        transform: scale(1);
      }

      .social-link svg {
        width: 20px;
        height: 20px;
        position: relative;
        z-index: 1;
        transition: color var(--transition-base);
        flex-shrink: 0;
      }

      .social-link:hover svg {
        color: var(--color-bg-dark);
      }

      .footer-column {
        opacity: 0;
      }

      .footer-column.fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .footer-column h4 {
        font-family: var(--font-display);
        font-size: var(--font-size-sm);
        font-weight: 600;
        margin-bottom: var(--spacing-xl);
        color: var(--color-text-light);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        position: relative;
        padding-bottom: var(--spacing-md);
      }

      .footer-column h4::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, var(--color-primary-light), var(--color-accent-purple));
        border-radius: 1px;
      }

      .footer-column ul {
        list-style: none;
      }

      .footer-column ul li {
        margin-bottom: var(--spacing-md);
      }

      .footer-column ul a {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: var(--font-size-sm);
        transition: all var(--transition-base);
        position: relative;
        display: inline-block;
      }

      .footer-column ul a::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--color-primary-light);
        transition: width var(--transition-base);
      }

      .footer-column ul a:hover {
        color: var(--color-primary-light);
      }

      .footer-column ul a:hover::after {
        width: 100%;
      }

      .contact-info p {
        margin-bottom: var(--spacing-lg);
        font-size: var(--font-size-sm);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .contact-label {
        font-family: var(--font-display);
        font-size: var(--font-size-xs);
        color: var(--color-primary-light);
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .contact-info a,
      .contact-info span {
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color var(--transition-base);
      }

      .contact-info a:hover {
        color: var(--color-primary-light);
      }

      .footer-divider {
        position: relative;
        z-index: 2;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(235, 197, 38, 0.15),
          transparent
        );
        margin: 0;
      }

      .footer-bottom {
        position: relative;
        z-index: 2;
        padding: var(--spacing-xl) 0;
      }

      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--spacing-xl);
      }

      .copyright {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        letter-spacing: 0.05em;
      }

      .footer-links {
        list-style: none;
        display: flex;
        gap: var(--spacing-xl);
      }

      .footer-links a {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: var(--font-size-xs);
        transition: color var(--transition-base);
        letter-spacing: 0.05em;
      }

      .footer-links a:hover {
        color: var(--color-primary-light);
      }

      @media (max-width: 1024px) {
        .footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-3xl);
        }

        .footer-content {
          padding: var(--spacing-4xl) 0 var(--spacing-2xl);
        }
      }

      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: var(--spacing-2xl);
        }

        .footer-content {
          padding: var(--spacing-3xl) 0 var(--spacing-xl);
        }

        .footer-brand {
          text-align: center;
        }

        .footer-logo {
          justify-content: center;
        }

        .footer-description {
          margin-left: auto;
          margin-right: auto;
        }

        .social-links {
          justify-content: center;
        }

        .footer-column h4 {
          text-align: center;
        }

        .footer-column h4::after {
          left: 50%;
          transform: translateX(-50%);
        }

        .footer-column ul {
          text-align: center;
        }

        .contact-info p {
          align-items: center;
          text-align: center;
        }

        .footer-bottom-content {
          flex-direction: column;
          text-align: center;
          gap: var(--spacing-md);
        }

        .footer-links {
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }
      }

      @media (max-width: 480px) {
        .footer-content {
          padding: var(--spacing-2xl) 0 var(--spacing-lg);
        }

        .footer-grid {
          gap: var(--spacing-xl);
        }

        .footer-logo .logo-text {
          font-size: var(--font-size-xl);
        }

        .footer-description {
          font-size: var(--font-size-xs);
        }

        .footer-column h4 {
          font-size: var(--font-size-xs);
          margin-bottom: var(--spacing-lg);
        }

        .footer-column ul a {
          font-size: var(--font-size-xs);
        }

        .contact-info p {
          font-size: var(--font-size-xs);
        }

        .footer-bottom {
          padding: var(--spacing-md) 0;
        }

        .copyright {
          font-size: 0.7rem;
        }

        .footer-links a {
          font-size: 0.7rem;
        }
      }
    `,
  ],
})
export class FooterComponent {}
