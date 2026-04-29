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
      <div class="container">
        <div class="section-title" data-animate="fade-in-up">
          <h2>Nuestros Objetivos</h2>
          <p>
            Comprometidos con la excelencia y la innovación tecnológica
          </p>
        </div>

        <div class="objectives-timeline">
          <div
            *ngFor="let objective of objectives; let i = index"
            class="objective-item"
            [attr.data-animate]="'fade-in-up'"
            [style.animation-delay.ms]="(i + 1) * 100"
          >
            <div class="objective-icon">
              <span [innerHTML]="objective.icon"></span>
            </div>
            <div class="objective-content">
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
        background: linear-gradient(135deg, rgba(113, 113, 174, 0.1) 0%, var(--color-bg-dark) 100%);
        padding: var(--spacing-6xl) 0;
      }

      .section-title {
        text-align: center;
        margin-bottom: var(--spacing-5xl);
      }

      .section-title h2 {
        font-size: var(--font-size-3xl);
        color: var(--color-text-light);
        margin-bottom: var(--spacing-xl);
      }

      .section-title p {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
      }

      .objectives-timeline {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
      }

      .objective-item {
        display: flex;
        gap: var(--spacing-2xl);
        padding: var(--spacing-2xl);
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(235, 197, 38, 0.1);
        border-radius: var(--border-radius-lg);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .objective-item:hover {
        border-color: rgba(235, 197, 38, 0.3);
        background: rgba(235, 197, 38, 0.05);
        transform: translateX(10px);
      }

      .objective-icon {
        flex-shrink: 0;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(235, 197, 38, 0.2) 0%, rgba(113, 113, 174, 0.2) 100%);
        border-radius: 50%;
        border: 2px solid rgba(235, 197, 38, 0.3);
      }

      .objective-icon span {
        font-size: 28px;
      }

      .objective-content {
        flex: 1;
      }

      .objective-content h3 {
        font-size: var(--font-size-lg);
        color: var(--color-primary-light);
        margin-bottom: var(--spacing-sm);
      }

      .objective-content p {
        font-size: var(--font-size-base);
        color: var(--color-text-secondary);
        line-height: 1.8;
      }

      @media (max-width: 768px) {
        .section-title h2 {
          font-size: var(--font-size-2xl);
        }

        .objective-item {
          padding: var(--spacing-xl);
        }

        .objective-icon {
          width: 50px;
          height: 50px;
        }

        .objective-icon span {
          font-size: 24px;
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
