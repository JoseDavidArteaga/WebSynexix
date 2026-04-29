import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section section">
      <div class="container">
        <div class="section-title" data-animate="fade-in-up">
          <h2>Nuestros Servicios</h2>
          <p>
            Soluciones inteligentes diseñadas para llevar tu negocio al siguiente
            nivel
          </p>
        </div>

        <div class="grid grid-3">
          <div
            *ngFor="let service of services; let i = index"
            class="service-card card"
            [attr.data-animate]="'fade-in-up'"
            [style.animation-delay.ms]="(i + 1) * 100"
          >
            <div class="service-icon" [innerHTML]="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>

            <ul class="service-features">
              <li *ngFor="let feature of service.features">
                <span class="feature-checkmark">✓</span>
                {{ feature }}
              </li>
            </ul>

            <button class="btn btn-secondary btn-sm">Explorar</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .services-section {
        background: linear-gradient(
          180deg,
          var(--color-bg-dark) 0%,
          rgba(113, 113, 174, 0.03) 100%
        );
      }

      .service-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          var(--color-primary-light),
          var(--color-primary-muted),
          transparent
        );
        opacity: 0;
        transition: opacity var(--transition-base);
      }

      .service-card:hover::before {
        opacity: 1;
      }

      .service-icon {
        width: 60px;
        height: 60px;
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary-light);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .service-icon svg {
        width: 100%;
        height: 100%;
      }

      .service-card h3 {
        margin-bottom: var(--spacing-md);
      }

      .service-card p {
        flex-grow: 1;
        margin-bottom: var(--spacing-lg);
      }

      .service-features {
        list-style: none;
        margin-bottom: var(--spacing-lg);
      }

      .service-features li {
        font-size: var(--font-size-sm);
        margin-bottom: var(--spacing-sm);
        color: var(--color-text-secondary);
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
      }

      .feature-checkmark {
        color: var(--color-primary-light);
        font-weight: 700;
        flex-shrink: 0;
      }

      .btn-sm {
        padding: var(--spacing-xs) var(--spacing-md);
        font-size: var(--font-size-sm);
        align-self: flex-start;
      }

      @media (max-width: 768px) {
        .grid-3 {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Inteligencia Artificial',
      description:
        'Algoritmos de IA personalizados para automatizar procesos y tomar decisiones más inteligentes.',
      icon: this.getAIIcon(),
      features: [
        'Machine Learning avanzado',
        'Procesamiento de datos en tiempo real',
        'Modelos predictivos',
        'API REST integrada',
      ],
    },
    {
      id: 2,
      title: 'Automatización Inteligente',
      description:
        'Automatiza tareas repetitivas y mejora la eficiencia operacional de tu organización.',
      icon: this.getAutomationIcon(),
      features: [
        'Flujos de trabajo personalizados',
        'Integración con sistemas legados',
        'Monitoreo continuo',
        'Reportes automáticos',
      ],
    },
    {
      id: 3,
      title: 'Análisis de Datos',
      description:
        'Transforma datos sin procesar en información valiosa para tomar decisiones estratégicas.',
      icon: this.getAnalyticsIcon(),
      features: [
        'Dashboards interactivos',
        'Análisis predictivo',
        'Visualización avanzada',
        'Exportación de reportes',
      ],
    },
    {
      id: 4,
      title: 'Computación en Nube',
      description:
        'Infraestructura escalable y segura en la nube para tu applications.',
      icon: this.getCloudIcon(),
      features: [
        'Escalabilidad automática',
        'Almacenamiento seguro',
        'Backup redundante',
        'Disponibilidad 99.9%',
      ],
    },
    {
      id: 5,
      title: 'Ciberseguridad',
      description:
        'Protege tus datos y sistemas con las soluciones de seguridad más avanzadas.',
      icon: this.getSecurityIcon(),
      features: [
        'Encriptación end-to-end',
        'Monitoreo de amenazas',
        'Compliance regulations',
        'Auditorías de seguridad',
      ],
    },
    {
      id: 6,
      title: 'Consultoría Tecnológica',
      description:
        'Asesoramiento experto para transformar tu estrategia tecnológica y alcanzar tus objetivos.',
      icon: this.getConsultingIcon(),
      features: [
        'Evaluación de tecnología',
        'Planificación estratégica',
        'Implementación guiada',
        'Capacitación del equipo',
      ],
    },
  ];

  private getAIIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <rect x="8" y="2" width="8" height="3" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <rect x="8" y="19" width="8" height="3" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
      </svg>
    `;
  }

  private getAutomationIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
        <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
      </svg>
    `;
  }

  private getAnalyticsIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 20L3 5C3 3.5 4 3 5 3L19 3" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <rect x="5" y="13" width="3" height="7" rx="0.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <rect x="10" y="9" width="3" height="11" rx="0.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <rect x="15" y="6" width="3" height="14" rx="0.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
      </svg>
    `;
  }

  private getCloudIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13C20.66 13 22 11.66 22 10C22 8.9 21.37 7.96 20.5 7.5C20.16 4.37 17.69 2 14.75 2C12.5 2 10.51 3.25 9.5 5C9 5 8.5 4.99 8 5C5.24 5 3 7.24 3 10C3 12.36 4.64 14.32 6.75 14.82" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M12 18V14M12 18L10 16M12 18L14 16" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  private getSecurityIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 5V10C4 16 12 22 12 22S20 16 20 10V5L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <path d="M12 12L10 14L14 18" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  private getConsultingIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <path d="M4 20C4 16.13 7.58 13 12 13C16.42 13 20 16.13 20 20" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M2 12L4 10M22 12L20 10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <path d="M7 4L8 6M17 4L16 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </svg>
    `;
  }
}
