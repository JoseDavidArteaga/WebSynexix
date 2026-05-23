import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Policy {
  title: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
}

@Component({
  selector: 'app-policies-values',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="policies-values" class="policies-values-section section">
      <div class="pv-mesh-bg"></div>

      <div class="container">
        <!-- Políticas -->
        <div class="subsection" data-animate="fade-in-up">
          <div class="section-header">
            <span class="section-eyebrow">Normativa interna</span>
            <h2>Políticas</h2>
            <div class="deco-line deco-line-left"></div>
          </div>
          <div class="policies-grid">
            <div *ngFor="let policy of policies; let i = index" class="policy-item" [style.animation-delay.ms]="i * 80">
              <div class="policy-number">{{ i + 1 | number: '2.0' }}</div>
              <div class="policy-content">
                <h3>{{ policy.title }}</h3>
                <p>{{ policy.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Valores -->
        <div class="subsection" data-animate="fade-in-up">
          <div class="section-header">
            <span class="section-eyebrow">Lo que nos define</span>
            <h2>Valores</h2>
            <div class="deco-line deco-line-left"></div>
          </div>
          <div class="values-grid">
            <div *ngFor="let value of values; let i = index" class="value-item card" [style.animation-delay.ms]="i * 80">
              <div class="value-content">
                <h3>{{ value.title }}</h3>
                <p>{{ value.description }}</p>
              </div>
              <div class="value-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .policies-values-section {
        position: relative;
        padding: var(--spacing-4xl) 0;
        overflow: hidden;
      }

      .pv-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 80% 10%, rgba(235, 197, 38, 0.04) 0px, transparent 45%),
          radial-gradient(at 10% 90%, rgba(113, 113, 174, 0.05) 0px, transparent 45%),
          var(--color-bg-dark);
        z-index: 0;
      }

      .subsection {
        position: relative;
        z-index: 2;
        margin-bottom: var(--spacing-3xl);
      }

      .subsection:last-child {
        margin-bottom: 0;
      }

      .section-header {
        margin-bottom: var(--spacing-2xl);
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

      .section-header h2 {
        font-family: var(--font-display);
        font-size: clamp(2rem, 4vw, 2.8rem);
        color: var(--color-text-light);
        letter-spacing: -0.02em;
        margin-bottom: var(--spacing-md);
      }

      .policies-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-md);
      }

      .policy-item {
        position: relative;
        display: flex;
        gap: var(--spacing-md);
        background: rgba(255, 255, 255, 0.02);
        border-left: 3px solid var(--color-primary-light);
        padding: var(--spacing-lg) var(--spacing-xl);
        border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
        transition: all var(--transition-slow);
        overflow: hidden;
      }

      .policy-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(90deg, rgba(235, 197, 38, 0.06), transparent);
        transition: width var(--transition-slow);
        z-index: 0;
      }

      .policy-item:hover {
        transform: translateX(8px);
        border-left-color: var(--color-accent-purple);
      }

      .policy-item:hover::before {
        width: 100%;
      }

      .policy-number {
        font-family: var(--font-display);
        font-size: var(--font-size-2xl);
        font-weight: 700;
        color: var(--color-primary-light);
        opacity: 0.15;
        line-height: 1;
        flex-shrink: 0;
        min-width: 40px;
        position: relative;
        z-index: 1;
      }

      .policy-content {
        position: relative;
        z-index: 1;
      }

      .policy-content h3 {
        font-family: var(--font-display);
        font-size: var(--font-size-base);
        color: var(--color-text-light);
        margin-bottom: var(--spacing-sm);
        letter-spacing: 0.02em;
      }

      .policy-content p {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 0;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: var(--spacing-md);
      }

      .value-item {
        position: relative;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius-lg);
        padding: 0;
        overflow: hidden;
        transition: all var(--transition-slow);
      }

      .value-item::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1.5px;
        background: linear-gradient(
          160deg,
          rgba(113, 113, 174, 0.4),
          rgba(235, 197, 38, 0.2),
          transparent 60%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--transition-slow);
      }

      .value-item:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-purple-glow), 0 20px 40px rgba(0, 0, 0, 0.2);
        border-color: rgba(113, 113, 174, 0.15);
      }

      .value-item:hover::before {
        opacity: 0.7;
      }

      .value-content {
        padding: var(--spacing-xl);
        position: relative;
        z-index: 1;
      }

      .value-content h3 {
        font-family: var(--font-display);
        font-size: var(--font-size-lg);
        color: rgba(113, 113, 174, 0.9);
        margin-bottom: var(--spacing-md);
        letter-spacing: -0.01em;
      }

      .value-content p {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 0;
      }

      .value-accent {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          var(--color-accent-purple),
          var(--color-primary-light),
          transparent
        );
        opacity: 0.3;
        transition: opacity var(--transition-slow);
      }

      .value-item:hover .value-accent {
        opacity: 0.8;
      }

      @media (max-width: 768px) {
        .policies-grid,
        .values-grid {
          grid-template-columns: 1fr;
        }

        .policy-item {
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .policy-number {
          font-size: var(--font-size-2xl);
        }
      }
    `,
  ],
})
export class PoliciesValuesComponent {
  policies: Policy[] = [
    {
      title: 'Imagen corporativa',
      description: 'Synexis mantendrá una imagen profesional, coherente y responsable en todas sus actividades internas y externas.',
    },
    {
      title: 'Cumplimiento de requisitos',
      description: 'La empresa se compromete a cumplir con todos los requisitos y acuerdos establecidos con el cliente, garantizando calidad y responsabilidad en cada proyecto.',
    },
    {
      title: 'Ética y trato justo',
      description: 'Se promoverá un trato justo, respetuoso y ético entre los integrantes del equipo y hacia los clientes, fomentando un ambiente de confianza y profesionalismo.',
    },
    {
      title: 'Asignación de roles',
      description: 'Cada integrante podrá desempeñar un cargo específico según las necesidades del proyecto y la actividad a desarrollar, promoviendo flexibilidad y eficiencia organizacional.',
    },
    {
      title: 'Responsabilidad en las tareas',
      description: 'Cada miembro deberá cumplir de manera oportuna y eficiente con las tareas que le sean asignadas.',
    },
    {
      title: 'Comunicación con el cliente',
      description: 'Synexis se compromete a mantener una interacción constante, clara y efectiva con el cliente durante todas las fases del proyecto, aportando su máximo esfuerzo y disposición para lograr los mejores resultados.',
    },
  ];

  values: Value[] = [
    {
      title: 'Integridad',
      description: 'Actuamos con ética, honestidad y transparencia en todas nuestras decisiones y relaciones, tanto internas como externas.',
    },
    {
      title: 'Responsabilidad',
      description: 'Asumimos con compromiso cada tarea y proyecto, garantizando el cumplimiento de nuestras obligaciones y la entrega de resultados de calidad.',
    },
    {
      title: 'Calidad y excelencia',
      description: 'Nos esforzamos por desarrollar productos y servicios tecnológicos que cumplan altos estándares, buscando siempre la mejora continua.',
    },
    {
      title: 'Trabajo en equipo',
      description: 'Creemos en la colaboración y en la sincronización de habilidades, trabajando como un solo sistema para alcanzar objetivos comunes.',
    },
    {
      title: 'Comunicación efectiva',
      description: 'Fomentamos una comunicación clara, respetuosa y constante entre los integrantes del equipo y con nuestros clientes.',
    },
    {
      title: 'Puntualidad y disciplina',
      description: 'Valoramos el respeto por el tiempo y el cumplimiento de los compromisos establecidos.',
    },
    {
      title: 'Compromiso con la innovación',
      description: 'Promovemos la creatividad y la búsqueda constante de soluciones tecnológicas orientadas al futuro.',
    },
  ];
}
