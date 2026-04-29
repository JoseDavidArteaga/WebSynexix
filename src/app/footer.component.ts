import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" id="contact">
      <div class="footer-content">
        <div class="container">
          <div class="grid grid-4">
            <!-- Footer Column 1: Company Info -->
            <div class="footer-column" data-animate="fade-in-up">
              <h4>Synexix</h4>
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
                  [innerHTML]="getLinkedInIcon()"
                ></a>
                <a
                  href="https://twitter.com"
                  title="Twitter"
                  target="_blank"
                  rel="noopener"
                  [innerHTML]="getTwitterIcon()"
                ></a>
                <a
                  href="https://github.com"
                  title="GitHub"
                  target="_blank"
                  rel="noopener"
                  [innerHTML]="getGitHubIcon()"
                ></a>
                <a
                  href="https://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener"
                  [innerHTML]="getFacebookIcon()"
                ></a>
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
                  <strong>Email:</strong><br />
                  <a href="mailto:hello&#64;synexix.com">hello&#64;synexix.com</a>
                </p>
                <p>
                  <strong>Teléfono:</strong><br />
                  <a href="tel:+34123456789">+57 3216711298</a>
                </p>
                <p>
                  <strong>Ubicación:</strong><br />
                  Popayán, Colombia
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
              &copy; 2024 Synexix. Todos los derechos reservados.
            </p>
            <ul class="footer-links">
              <li><a href="#privacy">Política de Privacidad</a></li>
              <li><a href="#terms">Términos de Servicio</a></li>
              <li><a href="#cookies">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-glow"></div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--color-bg-dark);
        color: var(--color-text-light);
        position: relative;
        overflow: hidden;
      }

      .footer-glow {
        position: absolute;
        bottom: -100px;
        right: -100px;
        width: 500px;
        height: 500px;
        background: radial-gradient(
          circle,
          rgba(113, 113, 174, 0.1) 0%,
          transparent 70%
        );
        pointer-events: none;
      }

      .footer-content {
        position: relative;
        z-index: 2;
        padding: var(--spacing-6xl) 0 var(--spacing-3xl);
      }

      .grid-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-4xl);
        margin-bottom: var(--spacing-4xl);
      }

      .footer-column {
        opacity: 0;
      }

      .footer-column.fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .footer-column h4 {
        font-size: var(--font-size-lg);
        font-weight: 700;
        margin-bottom: var(--spacing-lg);
        color: var(--color-text-light);
      }

      .footer-column p {
        font-size: var(--font-size-sm);
        line-height: 1.6;
        color: var(--color-text-secondary);
      }

      .footer-description {
        margin-bottom: var(--spacing-lg);
      }

      .social-links {
        display: flex;
        gap: var(--spacing-md);
        margin-top: var(--spacing-lg);
      }

      .social-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(235, 197, 38, 0.05);
        border: 1px solid rgba(235, 197, 38, 0.2);
        border-radius: 50%;
        color: var(--color-primary-light);
        transition: all 0.3s ease;
      }

      .social-links a:hover {
        background: var(--color-primary-light);
        color: var(--color-bg-dark);
        transform: translateY(-2px);
      }

      .social-links svg {
        width: 20px;
        height: 20px;
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
        transition: color 0.3s ease;
      }

      .footer-column ul a:hover {
        color: var(--color-primary-light);
      }

      .contact-info p {
        margin-bottom: var(--spacing-lg);
        font-size: var(--font-size-sm);
      }

      .contact-info strong {
        color: var(--color-primary-light);
        display: block;
        margin-bottom: var(--spacing-xs);
      }

      .contact-info a {
        color: var(--color-text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .contact-info a:hover {
        color: var(--color-primary-light);
      }

      .footer-divider {
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(235, 197, 38, 0.2),
          transparent
        );
        margin: var(--spacing-3xl) 0;
      }

      .footer-bottom {
        position: relative;
        z-index: 2;
        padding-bottom: var(--spacing-3xl);
      }

      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--spacing-2xl);
      }

      .copyright {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
      }

      .footer-links {
        list-style: none;
        display: flex;
        gap: var(--spacing-xl);
      }

      .footer-links a {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: var(--font-size-sm);
        transition: color 0.3s ease;
      }

      .footer-links a:hover {
        color: var(--color-primary-light);
      }

      @media (max-width: 1200px) {
        .grid-4 {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .grid-4 {
          grid-template-columns: 1fr;
          gap: var(--spacing-3xl);
        }

        .footer-bottom-content {
          flex-direction: column;
          text-align: center;
        }

        .footer-links {
          justify-content: center;
        }
      }
    `,
  ],
})
export class FooterComponent {
  getLinkedInIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.43-.103.25-.129.599-.129.948v5.427h-3.553s.047-8.789 0-9.701h3.553v1.374c.42-.653 1.173-1.583 2.851-1.583 2.084 0 3.644 1.362 3.644 4.292l-.001 5.618zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.956.77-1.715 1.958-1.715 1.187 0 1.914.759 1.938 1.715 0 .954-.751 1.715-1.981 1.715zm1.946 11.597H3.392v-9.701h3.891v9.701zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    `;
  }

  getTwitterIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    `;
  }

  getGitHubIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `;
  }

  getFacebookIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    `;
  }
}
