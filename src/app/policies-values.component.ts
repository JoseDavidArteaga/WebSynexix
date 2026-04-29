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
      <div class="container">
        <!-- Políticas -->
        <div class="subsection" data-animate="fade-in-up">
          <h2>Políticas</h2>
          <div class="policies-grid">
            <div *ngFor="let policy of policies" class="policy-item">
              <div class="policy-header">
                <h3>{{ policy.title }}</h3>
              </div>
              <p>{{ policy.description }}</p>
            </div>
          </div>
        </div>

        <!-- Valores -->
        <div class="subsection" data-animate="fade-in-up">
          <h2>Valores</h2>
          <div class="values-grid">
            <div *ngFor="let value of values" class="value-item card">
              <div class="value-header">
                <h3>{{ value.title }}</h3>
              </div>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .policies-values-section {
        background: var(--color-bg-dark);
        padding: var(--spacing-6xl) 0;
      }

      .subsection {
        margin-bottom: var(--spacing-6xl);
      }

      .subsection h2 {
        font-size: var(--font-size-3xl);
        margin-bottom: var(--spacing-3xl);
        text-align: center;
        color: var(--color-text-light);
        position: relative;
        padding-bottom: var(--spacing-2xl);
      }

      .subsection h2::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
        border-radius: 2px;
      }

      .policies-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-2xl);
      }

      .policy-item {
        background: rgba(235, 197, 38, 0.05);
        border-left: 4px solid var(--color-primary);
        padding: var(--spacing-2xl);
        border-radius: var(--border-radius-md);
        transition: all 0.3s ease;
      }

      .policy-item:hover {
        background: rgba(235, 197, 38, 0.1);
        transform: translateX(10px);
      }

      .policy-header h3 {
        font-size: var(--font-size-lg);
        color: var(--color-primary);
        margin-bottom: var(--spacing-xl);
      }

      .policy-item p {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.8;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-2xl);
      }

      .value-item {
        background: rgba(113, 113, 174, 0.05);
        border: 1px solid rgba(113, 113, 174, 0.2);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-2xl);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .value-item:hover {
        border-color: rgba(113, 113, 174, 0.5);
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(113, 113, 174, 0.1);
      }

      .value-header h3 {
        font-size: var(--font-size-lg);
        color: rgba(113, 113, 174, 0.8);
        margin-bottom: var(--spacing-xl);
      }

      .value-item p {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.8;
      }

      @media (max-width: 768px) {
        .policies-grid,
        .values-grid {
          grid-template-columns: 1fr;
        }

        .subsection h2 {
          font-size: var(--font-size-2xl);
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
      title: 'Asistencia y puntualidad',
      description: 'Todos los integrantes deberán asistir puntualmente a las reuniones programadas, salvo casos excepcionales debidamente justificados.',
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
