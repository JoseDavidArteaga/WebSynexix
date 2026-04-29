import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <!-- Elementos decorativos (fondo) -->
        <div class="hero-bg-element element-1"></div>
        <div class="hero-bg-element element-2"></div>

        <div class="container" data-animate="fade-in-up">
          <div class="hero-wrapper">
            <div class="hero-text">
              <h1
                class="hero-title"
                data-animate="fade-in-up"
                style="animation-delay: 100ms"
              >
                El Futuro de la
                <span class="highlight">Tecnología Inteligente</span>
              </h1>

              <p
                class="hero-subtitle"
                data-animate="fade-in-up"
                style="animation-delay: 200ms"
              >
                Definiedo el nexo de la innovación.
                Tecnología que conecta el hoy con el mañana.
              </p>

              <div
                class="hero-cta-group"
                data-animate="fade-in-up"
                style="animation-delay: 300ms"
              >
                <button class="btn btn-primary btn-lg">Comenzar Ahora</button>
                <button class="btn btn-secondary btn-lg">Saber Más</button>
              </div>

              <div
                class="hero-stats"
                data-animate="fade-in-up"
                style="animation-delay: 400ms"
              >
                <div class="stat-item">
                  <span class="stat-number">500+</span>
                  <span class="stat-label">Empresas Clientes</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">99.9%</span>
                  <span class="stat-label">Uptime</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">24/7</span>
                  <span class="stat-label">Soporte</span>
                </div>
              </div>
            </div>

            <div
              class="hero-visual"
              data-animate="fade-in-right"
              style="animation-delay: 200ms"
            >
              <div class="hero-image-container">
                <div class="gradient-orb"></div>
                <svg
                  class="hero-icon"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop
                        offset="0%"
                        style="stop-color: #ebc526; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #7171ae; stop-opacity: 1"
                      />
                    </linearGradient>
                  </defs>
                  <!-- Circuito neural -->
                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad1)"
                    stroke-width="2" opacity="0.3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad1)"
                    stroke-width="2" opacity="0.5" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad1)"
                    stroke-width="2" opacity="0.7" />

                  <!-- Nodos -->
                  <circle cx="100" cy="50" r="6" fill="#ebc526" />
                  <circle cx="50" cy="100" r="6" fill="#ebc526" />
                  <circle cx="100" cy="150" r="6" fill="#ebc526" />
                  <circle cx="150" cy="100" r="6" fill="#ebc526" />
                  <circle cx="100" cy="100" r="8" fill="#7171ae" />

                  <!-- Líneas de conexión -->
                  <line x1="100" y1="50" x2="150" y2="100" stroke="#ebc526" stroke-width="1"
                    opacity="0.6" />
                  <line x1="150" y1="100" x2="100" y2="150" stroke="#ebc526" stroke-width="1"
                    opacity="0.6" />
                  <line x1="100" y1="150" x2="50" y2="100" stroke="#ebc526" stroke-width="1"
                    opacity="0.6" />
                  <line x1="50" y1="100" x2="100" y2="50" stroke="#ebc526" stroke-width="1"
                    opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        position: relative;
        padding: 150px 0 100px;
        min-height: 100vh;
        display: flex;
        align-items: center;
        background: linear-gradient(
          135deg,
          var(--color-bg-dark) 0%,
          rgba(113, 113, 174, 0.05) 100%
        );
        overflow: hidden;
      }

      .hero-bg-element {
        position: absolute;
        border-radius: 50%;
        opacity: 0.1;
      }

      .element-1 {
        width: 500px;
        height: 500px;
        background: var(--color-primary-light);
        top: -200px;
        right: -200px;
        animation: float 8s ease-in-out infinite;
      }

      .element-2 {
        width: 400px;
        height: 400px;
        background: var(--color-accent-lavender);
        bottom: -100px;
        left: -100px;
        animation: float 10s ease-in-out infinite reverse;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(20px);
        }
      }

      .hero-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-2xl);
        align-items: center;
      }

      .hero-text {
        position: relative;
        z-index: 10;
      }

      .hero-title {
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: var(--spacing-lg);
      }

      .hero-title .highlight {
        background: linear-gradient(
          135deg,
          var(--color-primary-light),
          var(--color-primary-muted)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-xl);
        max-width: 500px;
        line-height: 1.8;
      }

      .hero-cta-group {
        display: flex;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-2xl);
      }

      .btn-lg {
        padding: var(--spacing-md) var(--spacing-xl);
        font-size: 1.1rem;
      }

      .hero-stats {
        display: flex;
        gap: var(--spacing-2xl);
      }

      .stat-item {
        display: flex;
        flex-direction: column;
      }

      .stat-number {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--color-primary-light);
      }

      .stat-label {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        margin-top: var(--spacing-xs);
      }

      .hero-visual {
        position: relative;
        z-index: 10;
      }

      .hero-image-container {
        position: relative;
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .gradient-orb {
        position: absolute;
        width: 350px;
        height: 350px;
        background: radial-gradient(
          circle,
          rgba(235, 197, 38, 0.2),
          rgba(113, 113, 174, 0.1)
        );
        border-radius: 50%;
        filter: blur(80px);
        animation: pulse-glow 3s ease-in-out infinite;
      }

      @keyframes pulse-glow {
        0%,
        100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }

      .hero-icon {
        position: relative;
        z-index: 2;
        width: 300px;
        height: 300px;
        animation: rotate-slow 20s linear infinite;
      }

      @keyframes rotate-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @media (max-width: 1024px) {
        .hero-wrapper {
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
        }

        .hero-icon {
          width: 250px;
          height: 250px;
        }

        .gradient-orb {
          width: 280px;
          height: 280px;
        }
      }

      @media (max-width: 768px) {
        .hero-section {
          padding: 120px 0 80px;
          min-height: auto;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
        }

        .hero-cta-group {
          flex-direction: column;
        }

        .hero-stats {
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .hero-image-container {
          height: 300px;
        }

        .hero-icon {
          width: 200px;
          height: 200px;
        }

        .element-1,
        .element-2 {
          opacity: 0.05;
        }
      }
    `,
  ],
})
export class HeroComponent {}
