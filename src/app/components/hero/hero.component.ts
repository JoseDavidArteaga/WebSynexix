import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero-section">
      <!-- Fondo premium: gradient mesh + decoraciones -->
      <div class="hero-mesh-bg"></div>
      <div class="hero-noise"></div>
      <div class="hero-bg-element element-1"></div>
      <div class="hero-bg-element element-2"></div>
      <div class="hero-bg-element element-3"></div>

      <div class="container" data-animate="fade-in-up">
        <div class="hero-wrapper">
          <div class="hero-text">
            <div class="hero-eyebrow" data-animate="fade-in-up" style="animation-delay: 0.05s">
              <span class="eyebrow-line"></span>
              <span class="eyebrow-text">Sinergia · Nexo · Éxito</span>
            </div>

            <h1
              class="hero-title"
              data-animate="fade-in-up"
              style="animation-delay: 0.15s"
            >
              El Futuro de la
              <span class="highlight">Tecnología Inteligente</span>
            </h1>

            <p
              class="hero-subtitle"
              data-animate="fade-in-up"
              style="animation-delay: 0.25s"
            >
              Definiendo el nexo de la innovación.
              Tecnología que conecta el hoy con el mañana.
            </p>

            <div
              class="hero-cta-group"
              data-animate="fade-in-up"
              style="animation-delay: 0.35s"
            >
              <button class="btn btn-primary btn-lg">Comenzar Ahora</button>
              <button class="btn btn-secondary btn-lg">Saber Más</button>
            </div>

            <div
              class="hero-stats"
              data-animate="fade-in-up"
              style="animation-delay: 0.45s"
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
            style="animation-delay: 0.3s"
          >
            <div class="hero-image-container">
              <div class="gradient-orb orb-1"></div>
              <div class="gradient-orb orb-2"></div>
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
                  <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style="stop-color: #dcc75d; stop-opacity: 0.6"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #ebc526; stop-opacity: 0.3"
                    />
                  </linearGradient>
                </defs>
                <!-- Circuito neural mejorado -->
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad2)"
                  stroke-width="1" opacity="0.4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad1)"
                  stroke-width="1.5" opacity="0.6" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad1)"
                  stroke-width="2" opacity="0.8" />

                <!-- Nodos -->
                <circle cx="100" cy="50" r="5" fill="#ebc526" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="100" r="5" fill="#ebc526" opacity="0.9">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="150" r="5" fill="#ebc526" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="100" r="5" fill="#ebc526" opacity="0.9">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="100" r="7" fill="#7171ae">
                  <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                </circle>

                <!-- Líneas de conexión -->
                <line x1="100" y1="50" x2="150" y2="100" stroke="#ebc526" stroke-width="1"
                  opacity="0.5" />
                <line x1="150" y1="100" x2="100" y2="150" stroke="#ebc526" stroke-width="1"
                  opacity="0.5" />
                <line x1="100" y1="150" x2="50" y2="100" stroke="#ebc526" stroke-width="1"
                  opacity="0.5" />
                <line x1="50" y1="100" x2="100" y2="50" stroke="#ebc526" stroke-width="1"
                  opacity="0.5" />

                <!-- Anillos decorativos -->
                <circle cx="100" cy="100" r="95" fill="none" stroke="url(#grad1)"
                  stroke-width="0.5" opacity="0.2" stroke-dasharray="10 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator sutil -->
      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        position: relative;
        padding: 90px 0 40px;
        min-height: 100vh;
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--color-bg-dark);
      }

      .hero-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 20% 20%, rgba(235, 197, 38, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(113, 113, 174, 0.08) 0px, transparent 50%),
          radial-gradient(at 50% 50%, rgba(87, 79, 30, 0.06) 0px, transparent 60%),
          radial-gradient(at 0% 100%, rgba(113, 113, 174, 0.05) 0px, transparent 50%);
        z-index: 0;
      }

      .hero-noise {
        position: absolute;
        inset: 0;
        background-image: var(--noise-texture);
        background-repeat: repeat;
        background-size: 200px 200px;
        opacity: 0.15;
        z-index: 1;
        pointer-events: none;
      }

      .hero-bg-element {
        position: absolute;
        border-radius: 50%;
        z-index: 1;
        pointer-events: none;
      }

      .element-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(235, 197, 38, 0.06) 0%, transparent 70%);
        top: -200px;
        right: -200px;
        animation: float 10s ease-in-out infinite;
      }

      .element-2 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(113, 113, 174, 0.08) 0%, transparent 70%);
        bottom: -150px;
        left: -150px;
        animation: float 12s ease-in-out infinite reverse;
      }

      .element-3 {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(235, 197, 38, 0.04) 0%, transparent 70%);
        top: 40%;
        left: 30%;
        animation: float 8s ease-in-out infinite 2s;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(25px) rotate(3deg); }
      }

      .hero-wrapper {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: var(--spacing-3xl);
        align-items: center;
        position: relative;
        z-index: 2;
        width: 100%;
      }

      .hero-text {
        position: relative;
        z-index: 10;
      }

      .hero-eyebrow {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
      }

      .eyebrow-line {
        display: block;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, var(--color-primary-light), transparent);
        border-radius: 1px;
      }

      .eyebrow-text {
        font-family: var(--font-display);
        font-size: var(--font-size-xs);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-primary-light);
        opacity: 0.9;
      }

      .hero-title {
        font-family: var(--font-display);
        font-size: clamp(2.5rem, 4.5vw, 3.8rem);
        line-height: 1.1;
        margin-bottom: var(--spacing-md);
        color: var(--color-text-light);
        letter-spacing: -0.02em;
      }

      .hero-title .highlight {
        background: linear-gradient(
          135deg,
          var(--color-primary-light) 0%,
          var(--color-primary-muted) 50%,
          var(--color-accent-purple) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-family: var(--font-body);
        font-size: clamp(1.05rem, 1.4vw, 1.25rem);
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-xl);
        max-width: 520px;
        line-height: 1.7;
      }

      .hero-cta-group {
        display: flex;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
        flex-wrap: wrap;
      }

      .hero-stats {
        display: flex;
        gap: var(--spacing-2xl);
        margin-bottom: 0;
      }

      .stat-item {
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .stat-item:not(:last-child)::after {
        content: '';
        position: absolute;
        right: calc(-1 * var(--spacing-3xl) / 2);
        top: 10%;
        height: 80%;
        width: 1px;
        background: linear-gradient(
          180deg,
          transparent,
          rgba(235, 197, 38, 0.3),
          transparent
        );
      }

      .stat-number {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--color-primary-light);
        letter-spacing: -0.02em;
      }

      .stat-label {
        font-family: var(--font-body);
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        margin-top: var(--spacing-xs);
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .hero-visual {
        position: relative;
        z-index: 10;
      }

      .hero-image-container {
        position: relative;
        width: 100%;
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        pointer-events: none;
      }

      .orb-1 {
        width: 280px;
        height: 280px;
        background: radial-gradient(
          circle,
          rgba(235, 197, 38, 0.2),
          rgba(113, 113, 174, 0.05)
        );
        animation: pulse-glow 4s ease-in-out infinite;
      }

      .orb-2 {
        width: 200px;
        height: 200px;
        background: radial-gradient(
          circle,
          rgba(113, 113, 174, 0.15),
          transparent
        );
        top: 10%;
        right: 5%;
        animation: pulse-glow 5s ease-in-out infinite 1s;
      }

      @keyframes pulse-glow {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.15);
          opacity: 0.7;
        }
      }

      .hero-icon {
        position: relative;
        z-index: 2;
        width: 260px;
        height: 260px;
        animation: rotate-slow 30s linear infinite;
      }

      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .scroll-indicator {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
        opacity: 0.4;
      }

      .scroll-mouse {
        width: 20px;
        height: 32px;
        border: 1.5px solid rgba(235, 197, 38, 0.3);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding-top: 6px;
      }

      .scroll-wheel {
        width: 3px;
        height: 6px;
        background: var(--color-primary-light);
        border-radius: 1.5px;
        animation: scrollWheel 1.8s ease-in-out infinite;
      }

      @keyframes scrollWheel {
        0%, 100% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(6px); opacity: 0.4; }
      }

      @media (max-width: 1024px) {
        .hero-wrapper {
          grid-template-columns: 1fr;
          gap: var(--spacing-2xl);
          text-align: center;
        }

        .hero-eyebrow {
          justify-content: center;
        }

        .hero-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta-group {
          justify-content: center;
        }

        .hero-stats {
          justify-content: center;
        }

        .hero-icon {
          width: 240px;
          height: 240px;
        }

        .gradient-orb {
          width: 280px;
          height: 280px;
        }
      }

      @media (max-width: 768px) {
        .hero-section {
          padding: 90px 0 60px;
          min-height: 100vh;
          min-height: 100dvh;
        }

        .hero-title {
          font-size: 2.4rem;
        }

        .hero-subtitle {
          font-size: 1.05rem;
        }

        .hero-cta-group {
          flex-direction: column;
          align-items: center;
        }

        .hero-stats {
          flex-direction: column;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .stat-item:not(:last-child)::after {
          display: none;
        }

        .hero-image-container {
          height: 260px;
        }

        .hero-icon {
          width: 200px;
          height: 200px;
        }

        .element-1,
        .element-2,
        .element-3 {
          opacity: 0.4;
        }

        .scroll-indicator {
          display: none;
        }
      }
    `,
  ],
})
export class HeroComponent {}
