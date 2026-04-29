import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vision-mission" class="vision-mission-section section">
      <div class="container">
        <div class="grid grid-2">
          <!-- Visión -->
          <div class="vision-card card" data-animate="fade-in-up">
            <div class="card-icon vision-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h3>Visión</h3>
            <p>
              Ser una empresa líder en el desarrollo de soluciones tecnológicas 
              innovadoras, reconocida por su capacidad de trabajar en perfecta sincronía, 
              creando sistemas inteligentes y conectados que impulsen la transformación 
              digital y el futuro tecnológico.
            </p>
          </div>

          <!-- Misión -->
          <div class="mission-card card" data-animate="fade-in-up">
            <div class="card-icon mission-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
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
    </section>
  `,
  styles: [
    `
      .vision-mission-section {
        background: linear-gradient(135deg, var(--color-bg-dark) 0%, rgba(113, 113, 174, 0.1) 100%);
        padding: var(--spacing-6xl) 0;
      }

      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-4xl);
      }

      .vision-card,
      .mission-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(235, 197, 38, 0.2);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-4xl);
        text-align: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .vision-card:hover,
      .mission-card:hover {
        border-color: rgba(235, 197, 38, 0.5);
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(235, 197, 38, 0.1);
      }

      .card-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto var(--spacing-2xl);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 40px;
      }

      .vision-icon {
        background: rgba(235, 197, 38, 0.1);
        color: var(--color-primary);
      }

      .mission-icon {
        background: rgba(113, 113, 174, 0.1);
        color: rgba(113, 113, 174, 0.8);
      }

      .card-icon svg {
        width: 50px;
        height: 50px;
      }

      .vision-card h3,
      .mission-card h3 {
        font-size: var(--font-size-2xl);
        margin-bottom: var(--spacing-xl);
        color: var(--color-text-light);
      }

      .vision-card p,
      .mission-card p {
        font-size: var(--font-size-base);
        line-height: 1.8;
        color: var(--color-text-secondary);
      }

      @media (max-width: 768px) {
        .grid-2 {
          grid-template-columns: 1fr;
          gap: var(--spacing-3xl);
        }

        .vision-card,
        .mission-card {
          padding: var(--spacing-3xl);
        }
      }

      /* Animaciones */
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
      }
    `,
  ],
})
export class VisionMissionComponent {}
