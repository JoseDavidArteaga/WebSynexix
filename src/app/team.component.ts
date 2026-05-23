import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="team-section section">
      <div class="team-mesh-bg"></div>

      <div class="container">
        <div class="section-title" data-animate="fade-in-up">
          <span class="section-eyebrow">Quiénes somos</span>
          <h2>Nuestro Equipo</h2>
          <p>
            Las personas detrás de la innovación. Profesionales comprometidos
            con el futuro tecnológico.
          </p>
        </div>

        <div class="team-grid">
          <div
            *ngFor="let member of teamMembers; let i = index"
            class="team-card"
            [attr.data-animate]="'fade-in-up'"
            [style.animation-delay.ms]="(i + 1) * 120"
          >
            <div class="team-card-inner">
              <div class="team-image-wrapper">
                <img
                  class="team-image"
                  [src]="member.image"
                  [alt]="'Foto de ' + member.name"
                  loading="lazy"
                />
                <div class="team-image-overlay"></div>
                <div class="team-glow"></div>
              </div>

              <div class="team-info">
                <h3 class="team-name">{{ member.name }}</h3>
                <span class="team-role">{{ member.role }}</span>
              </div>

              <div class="team-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .team-section {
        position: relative;
        min-height: 100vh;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        padding: 40px 0 40px;
        overflow: hidden;
        background: var(--color-bg-dark);
        clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 100%);
      }

      .team-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(235, 197, 38, 0.25),
          transparent
        );
        z-index: 5;
      }

      .team-mesh-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(at 30% 20%, rgba(235, 197, 38, 0.05) 0px, transparent 50%),
          radial-gradient(at 70% 80%, rgba(113, 113, 174, 0.06) 0px, transparent 50%),
          var(--color-bg-dark);
        z-index: 0;
      }

      .team-section .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        //margin-top: auto;
        //margin-bottom: auto;
      }

      .section-title {
        position: relative;
        z-index: 2;
        margin-bottom: var(--spacing-xl);
        text-align: center;
      }

      .section-title h2 {
        color: var(--color-text-light);
        margin-bottom: var(--spacing-sm);
      }

      .section-title p {
        font-size: var(--font-size-base);
        color: var(--color-text-secondary);
        max-width: 500px;
        margin: 0 auto;
      }

      .section-eyebrow {
        display: inline-block;
        font-family: var(--font-display);
        font-size: var(--font-size-xs);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-primary-light);
        margin-bottom: var(--spacing-xs);
      }

      .team-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: var(--spacing-lg);
        align-items: start;
      }

      .team-card {
        position: relative;
        perspective: 1000px;
        opacity: 0;
        height: 100%;
        display: flex;
      }

      .team-card.fade-in-up {
        animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .team-card-inner {
        position: relative;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius-xl);
        padding: var(--spacing-lg);
        transition: all var(--transition-slow);
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .team-card-inner::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1.5px;
        background: linear-gradient(
          160deg,
          rgba(235, 197, 38, 0.4),
          rgba(113, 113, 174, 0.2),
          transparent 70%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        opacity: 0;
        transition: opacity var(--transition-slow);
      }

      .team-card:hover .team-card-inner {
        transform: translateY(-8px);
        box-shadow: var(--shadow-glow-lg), 0 20px 40px rgba(0, 0, 0, 0.25);
        border-color: rgba(235, 197, 38, 0.1);
      }

      .team-card:hover .team-card-inner::before {
        opacity: 0.8;
      }

      .team-image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        margin-bottom: var(--spacing-md);
        flex-shrink: 0;
      }

      .team-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        transition: transform var(--transition-slow);
        display: block;
      }

      .team-card:hover .team-image {
        transform: scale(1.08);
      }

      .team-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          transparent 50%,
          rgba(19, 28, 56, 0.7) 100%
        );
        pointer-events: none;
        z-index: 1;
      }

      .team-glow {
        position: absolute;
        inset: -20px;
        background: radial-gradient(
          circle at 50% 50%,
          rgba(235, 197, 38, 0.1),
          transparent 70%
        );
        opacity: 0;
        transition: opacity var(--transition-slow);
        pointer-events: none;
        z-index: 0;
      }

      .team-card:hover .team-glow {
        opacity: 1;
      }

      .team-info {
        position: relative;
        z-index: 2;
        text-align: center;
      }

      .team-name {
        font-family: var(--font-display);
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-xs);
        line-height: 1.3;
        letter-spacing: -0.01em;
      }

      .team-role {
        font-family: var(--font-display);
        font-size: var(--font-size-xs);
        font-weight: 400;
        color: var(--color-primary-light);
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .team-border {
        position: absolute;
        bottom: 0;
        left: 20%;
        right: 20%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--color-primary-light),
          transparent
        );
        opacity: 0.2;
        transition: opacity var(--transition-slow), left var(--transition-slow), right var(--transition-slow);
      }

      .team-card:hover .team-border {
        opacity: 0.6;
        left: 10%;
        right: 10%;
      }

      /* Responsive */
      @media (max-width: 1200px) {
        .team-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 1024px) {
        .team-section {
          min-height: auto;
          padding: 100px 0 60px;
        }
      }

      @media (max-width: 768px) {
        .team-section {
          min-height: auto;
          padding: 100px 0 60px;
        }

        .team-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }

        .team-card-inner {
          padding: var(--spacing-md);
        }

        .team-number {
          font-size: 2rem;
        }

        .section-title {
          margin-bottom: var(--spacing-lg);
        }
      }

      @media (max-width: 480px) {
        .team-grid {
          grid-template-columns: 1fr;
          max-width: 280px;
          margin: 0 auto;
        }
      }
    `,
  ],
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'David Fernandez',
      role: 'Web Master',
      image: 'assets/foto DAVID FERNANDEZ.png',
    },
    {
      id: 2,
      name: 'Jhonny Richard Fuertes Patiño',
      role: 'Líder del Proyecto',
      image: 'assets/foto FUERTES PATIÑO JHONNY RICHARD.png',
    },
    {
      id: 3,
      name: 'Anderson Vinasco Giraldo',
      role: 'Interventor',
      image: 'assets/foto VINASCO GIRALDO ANDERSON.png',
    },
    {
      id: 4,
      name: 'Braian Rey Castillo',
      role: 'Secretario',
      image: 'assets/foto REY CASTILLO BRAIAN.png',
    },
    {
      id: 5,
      name: 'Brayan Hernan Meneses Macias',
      role: 'Moderador',
      image: 'assets/foto MENESES MACIAS BRAYAN HERNAN.png',
    },
  ];
}
