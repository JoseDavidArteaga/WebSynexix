import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Objective {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="objectives" class="objectives-section section">
      <div class="obj-mesh-bg"></div>

      <div class="container">
        <div class="section-title" data-animate="fade-in-up">
          <span class="section-eyebrow">Hacia dónde vamos</span>
          <h2>Nuestros Objetivos</h2>
          <p>Comprometidos con la excelencia y la innovación tecnológica</p>
        </div>

        <div class="objectives-timeline">
          <div class="timeline-connector"></div>
          <div
            *ngFor="let objective of objectives; let i = index"
            class="objective-item"
            [class.objective-left]="i % 2 === 0"
            [class.objective-right]="i % 2 !== 0"
            [attr.data-animate]="'fade-in-up'"
            [style.animation-delay.ms]="(i + 1) * 120"
          >
            <div class="objective-dot">
              <div class="dot-pulse"></div>
            </div>
            <div class="objective-content">
              <div class="objective-header">
                <div class="objective-icon">
                  <span [innerHTML]="objective.icon"></span>
                </div>
                <div class="objective-number">{{ i + 1 | number: '2.0' }}</div>
              </div>
              <h3>{{ objective.title }}</h3>
              <p>{{ objective.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .objectives-section {
        position: relative;
        padding: var(--spacing-6xl) 0;
        overflow: hidden;
      }

      .obj-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 50% 20%, rgba(235, 197, 38, 0.04) 0px, transparent 45%),
          radial-gradient(at 20% 80%, rgba(113, 113, 174, 0.05) 0px, transparent 45%),
          radial-gradient(at 80% 60%, rgba(87, 79, 30, 0.04) 0px, transparent 45%),
          var(--color-bg-dark);
        z-index: 0;
      }

      .section-title {
        position: relative;
        z-index: 2;
      }

      .section-eyebrow {
        display: inline-block;
        font-family: var(--font-display);
        font-size: var(--font-size-xs);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-primary-light);
        margin-bottom: var(--spacing-sm);
      }

      .objectives-timeline {
        position: relative;
        z-index: 2;
        max-width: 900px;
        margin: 0 auto;
        padding: var(--spacing-2xl) 0;
      }

      .timeline-connector {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(
          180deg,
          transparent,
          rgba(235, 197, 38, 0.3) 10%,
          rgba(235, 197, 38, 0.3) 90%,
          transparent
        );
        transform: translateX(-50%);
      }

      .objective-item {
        position: relative;
        display: flex;
        align-items: flex-start;
        margin-bottom: var(--spacing-3xl);
        width: 50%;
      }

      .objective-left {
        margin-left: 0;
        margin-right: auto;
        padding-right: var(--spacing-4xl);
        text-align: right;
        justify-content: flex-end;
      }

      .objective-right {
        margin-left: auto;
        margin-right: 0;
        padding-left: var(--spacing-4xl);
        text-align: left;
        justify-content: flex-start;
      }

      .objective-dot {
        position: absolute;
        top: var(--spacing-xl);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--color-primary-light);
        border: 3px solid var(--color-bg-dark);
        box-shadow: 0 0 0 4px rgba(235, 197, 38, 0.2);
        z-index: 3;
        flex-shrink: 0;
      }

      .objective-left .objective-dot {
        right: calc(-1 * var(--spacing-4xl) + 7px);
      }

      .objective-right .objective-dot {
        left: calc(-1 * var(--spacing-4xl) + 7px);
      }

      .dot-pulse {
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 1px solid rgba(235, 197, 38, 0.4);
        animation: dotPulse 2s ease-out infinite;
      }

      @keyframes dotPulse {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(2.5); opacity: 0; }
      }

      .objective-content {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-2xl);
        transition: all var(--transition-slow);
        max-width: 380px;
      }

      .objective-content:hover {
        transform: translateY(-4px);
        border-color: rgba(235, 197, 38, 0.15);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
      }

      .objective-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--spacing-md);
      }

      .objective-left .objective-header {
        flex-direction: row-reverse;
      }

      .objective-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(235, 197, 38, 0.12), rgba(235, 197, 38, 0.04));
        border: 1px solid rgba(235, 197, 38, 0.2);
        border-radius: var(--border-radius-md);
        flex-shrink: 0;
      }

      .objective-icon span {
        font-size: 22px;
        line-height: 1;
      }

      .objective-number {
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-text-light);
        opacity: 0.06;
        line-height: 1;
      }

      .objective-content h3 {
        font-family: var(--font-display);
        font-size: var(--font-size-lg);
        color: var(--color-primary-light);
        margin-bottom: var(--spacing-sm);
        letter-spacing: -0.01em;
      }

      .objective-content p {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .objectives-timeline {
          padding-left: var(--spacing-xl);
        }

        .timeline-connector {
          left: 20px;
          transform: none;
        }

        .objective-item {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
          padding-left: var(--spacing-3xl);
          padding-right: 0;
          text-align: left;
          justify-content: flex-start;
        }

        .objective-left .objective-header,
        .objective-right .objective-header {
          flex-direction: row;
        }

        .objective-dot {
          left: calc(-1 * var(--spacing-3xl) + 12px) !important;
          right: auto !important;
        }

        .objective-content {
          max-width: 100%;
        }
      }
    `,
  ],
})
export class ObjectivesComponent {
  objectives: Objective[] = [
    {
      title: 'Aplicación del conocimiento tecnológico',
      description: 'Aplicar los conocimientos en desarrollo de software orientados al Internet de las Cosas (IoT), integrando nuevas tendencias tecnológicas que aporten valor a la sociedad.',
      icon: '💡',
    },
    {
      title: 'Cumplimiento y satisfacción del cliente',
      description: 'Entregar cada producto conforme a los acuerdos establecidos con los clientes, fortaleciendo la imagen y reputación de la empresa.',
      icon: '✓',
    },
    {
      title: 'Impulso al desarrollo tecnológico y emprendedor',
      description: 'Fomentar la innovación y el espíritu emprendedor, permitiendo que los clientes participen activamente en el proceso de desarrollo para garantizar soluciones centradas en el usuario.',
      icon: '🚀',
    },
    {
      title: 'Crecimiento en la industria del software',
      description: 'Aprovechar los recursos disponibles para posicionarnos progresivamente en la industria del software y de aplicaciones móviles.',
      icon: '📈',
    },
    {
      title: 'Liderazgo en innovación',
      description: 'Trabajar de manera constante para convertirnos en referentes globales en innovación informática y desarrollo de aplicaciones que conecten al mundo sin importar las barreras geográficas.',
      icon: '🌍',
    },
    {
      title: 'Cumplimiento legal',
      description: 'Operar bajo el marco normativo vigente, cumpliendo con todas las disposiciones legales necesarias para la creación y funcionamiento de la empresa.',
      icon: '⚖',
    },
  ];
}
