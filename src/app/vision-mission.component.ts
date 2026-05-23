import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vision-mission" class="vision-mission-section section">
      <!-- Fondo con profundidad -->
      <div class="vm-mesh-bg"></div>

      <div class="container">
        <div class="grid grid-2 vm-grid">
          <!-- Visión -->
          <div class="vision-card card" data-animate="fade-in-up">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-icon vision-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <div class="card-number">01</div>
              <h3>Visión</h3>
              <p>
                Ser una empresa líder en el desarrollo de soluciones tecnológicas 
                innovadoras, reconocida por su capacidad de trabajar en perfecta sincronía, 
                creando sistemas inteligentes y conectados que impulsen la transformación 
                digital y el futuro tecnológico.
              </p>
            </div>
          </div>

          <!-- Misión -->
          <div class="mission-card card" data-animate="fade-in-up" style="animation-delay: 0.15s">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="card-icon mission-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="card-number">02</div>
              <h3>Misión</h3>
              <p>
                Desarrollar aplicaciones innovadoras orientadas a las tecnologías del 
                futuro, integrando soluciones basadas en Internet de las Cosas (IoT), 
                mediante un trabajo colaborativo, organizado y sincronizado que garantice 
                eficiencia, calidad y cumplimiento de los objetivos empresariales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .vision-mission-section {
        position: relative;
        padding: var(--spacing-4xl) 0;
        overflow: hidden;
      }

      .vm-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 10% 30%, rgba(235, 197, 38, 0.06) 0px, transparent 50%),
          radial-gradient(at 90% 70%, rgba(113, 113, 174, 0.06) 0px, transparent 50%),
          var(--color-bg-dark);
        z-index: 0;
      }

      .vm-grid {
        position: relative;
        z-index: 2;
        gap: var(--spacing-3xl);
      }

      .vision-card,
      .mission-card {
        position: relative;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: var(--border-radius-xl);
        padding: 0;
        overflow: hidden;
        transition: all var(--transition-slow);
      }

      .vision-card::before,
      .mission-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1.5px;
        background: linear-gradient(
          160deg,
          rgba(235, 197, 38, 0.5),
          rgba(113, 113, 174, 0.3),
          transparent 70%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--transition-slow);
      }

      .vision-card:hover::before,
      .mission-card:hover::before {
        opacity: 0.8;
      }

      .card-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
          circle,
          rgba(235, 197, 38, 0.03) 0%,
          transparent 60%
        );
        opacity: 0;
        transition: opacity var(--transition-slow);
        pointer-events: none;
      }

      .vision-card:hover .card-glow,
      .mission-card:hover .card-glow {
        opacity: 1;
      }

      .card-content {
        position: relative;
        z-index: 2;
        padding: var(--spacing-3xl);
      }

      .card-icon {
        width: 60px;
        height: 60px;
        margin-bottom: var(--spacing-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-lg);
        font-size: 32px;
        position: relative;
      }

      .vision-icon {
        background: linear-gradient(135deg, rgba(235, 197, 38, 0.12), rgba(235, 197, 38, 0.04));
        color: var(--color-primary-light);
        border: 1px solid rgba(235, 197, 38, 0.2);
      }

      .mission-icon {
        background: linear-gradient(135deg, rgba(113, 113, 174, 0.12), rgba(113, 113, 174, 0.04));
        color: rgba(113, 113, 174, 0.9);
        border: 1px solid rgba(113, 113, 174, 0.2);
      }

      .card-icon svg {
        width: 30px;
        height: 30px;
      }

      .card-number {
        position: absolute;
        top: var(--spacing-2xl);
        right: var(--spacing-2xl);
        font-family: var(--font-display);
        font-size: 4rem;
        font-weight: 700;
        line-height: 1;
        opacity: 0.04;
        color: var(--color-text-light);
        pointer-events: none;
      }

      .vision-card h3,
      .mission-card h3 {
        font-family: var(--font-display);
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-md);
        color: var(--color-text-light);
        letter-spacing: -0.02em;
      }

      .vision-card p,
      .mission-card p {
        font-size: var(--font-size-sm);
        line-height: 1.7;
        color: var(--color-text-secondary);
      }

      @media (max-width: 992px) {
        .vm-grid {
          gap: var(--spacing-2xl);
        }

        .card-content {
          padding: var(--spacing-2xl);
        }

        .card-icon {
          width: 50px;
          height: 50px;
        }

        .card-icon svg {
          width: 26px;
          height: 26px;
        }
      }

      @media (max-width: 768px) {
        .vm-grid {
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
        }

        .card-content {
          padding: var(--spacing-2xl);
        }

        .card-number {
          font-size: 2.5rem;
          top: var(--spacing-lg);
          right: var(--spacing-lg);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          margin-bottom: var(--spacing-md);
        }

        .vision-card h3,
        .mission-card h3 {
          font-size: var(--font-size-lg);
        }
      }

      @media (max-width: 480px) {
        .vision-mission-section {
          padding: var(--spacing-3xl) 0;
        }

        .card-content {
          padding: var(--spacing-xl);
        }

        .card-number {
          font-size: 2rem;
          top: var(--spacing-md);
          right: var(--spacing-md);
        }

        .vision-card h3,
        .mission-card h3 {
          font-size: var(--font-size-base);
        }

        .vision-card p,
        .mission-card p {
          font-size: var(--font-size-sm);
        }
      }
    `,
  ],
})
export class VisionMissionComponent {}
