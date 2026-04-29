import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    icon: string;
    url: string;
    label: string;
  }[];
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="team-section section">
      <div class="container">
        <div class="section-title" data-animate="fade-in-up">
          <h2>Nuestro Equipo</h2>
          <p>
            Profesionales apasionados e innovadores trabajando juntos para
            transformar la tecnología
          </p>
        </div>

        <div class="grid grid-4">
          <div
            *ngFor="let member of teamMembers; let i = index"
            class="team-card"
            [attr.data-animate]="'fade-in-up'"
            [style.animation-delay.ms]="(i + 1) * 100"
          >
            <div class="team-image-wrapper">
              <div
                class="team-image"
                [style.background-image]="'url(' + member.image + ')'"
              ></div>
              <div class="team-overlay">
                <p class="team-bio">{{ member.bio }}</p>
                <div class="team-socials">
                  <a
                    *ngFor="let social of member.socials"
                    [href]="social.url"
                    [title]="social.label"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                    [innerHTML]="social.icon"
                  ></a>
                </div>
              </div>
            </div>

            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <p class="team-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .team-section {
        background: var(--color-bg-light);
      }

      .grid-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-lg);
      }

      .team-card {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }

      .team-image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: var(--border-radius-lg);
        margin-bottom: var(--spacing-md);
        box-shadow: var(--shadow-md);
      }

      .team-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease-out;
      }

      .team-card:hover .team-image {
        transform: scale(1.1);
      }

      .team-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(12, 15, 38, 0.95) 0%,
          rgba(113, 113, 174, 0.9) 100%
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-lg);
        opacity: 0;
        transition: opacity 0.3s ease-out;
        gap: var(--spacing-md);
      }

      .team-card:hover .team-overlay {
        opacity: 1;
      }

      .team-bio {
        color: var(--color-text-light);
        text-align: center;
        font-size: var(--font-size-sm);
        line-height: 1.5;
      }

      .team-socials {
        display: flex;
        gap: var(--spacing-md);
        justify-content: center;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(235, 197, 38, 0.1);
        border: 1px solid var(--color-primary-light);
        border-radius: 50%;
        color: var(--color-primary-light);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .social-link:hover {
        background: var(--color-primary-light);
        color: var(--color-bg-dark);
        transform: translateY(-2px);
      }

      .social-link svg {
        width: 20px;
        height: 20px;
      }

      .team-info {
        text-align: center;
      }

      .team-info h3 {
        margin-bottom: var(--spacing-xs);
      }

      .team-role {
        color: var(--color-primary-light);
        font-size: var(--font-size-sm);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      @media (max-width: 1200px) {
        .grid-4 {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 1024px) {
        .grid-4 {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .grid-4 {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      bio: 'Visionario tecnológico con 15+ años liderando innovación en empresas Fortune 500.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%23ebc526;stop-opacity:1" /><stop offset="100%25" style="stop-color:%237171ae;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad1)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 2,
      name: 'Ana García',
      role: 'CTO',
      bio: 'Experta en arquitectura de sistemas y liderazgo técnico con especialización en cloud.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%238a8b8a;stop-opacity:1" /><stop offset="100%25" style="stop-color:%239f9455;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad2)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 3,
      name: 'Roberto Díaz',
      role: 'Head of Product',
      bio: 'Estratega de productos innovador con experiencia en startups y empresas de tech.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%23131c38;stop-opacity:1" /><stop offset="100%25" style="stop-color:%237171ae;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad3)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 4,
      name: 'María López',
      role: 'Lead Developer',
      bio: 'Ingeniera full-stack con pasión por código limpio e innovación tecnológica.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%23dcc75d;stop-opacity:1" /><stop offset="100%25" style="stop-color:%238a8b8a;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad4)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 5,
      name: 'David Sánchez',
      role: 'AI Specialist',
      bio: 'Especialista en machine learning e inteligencia artificial aplicada a negocio.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%23574f1e;stop-opacity:1" /><stop offset="100%25" style="stop-color:%239f9455;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad5)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 6,
      name: 'Laura Fernández',
      role: 'UX/UI Designer',
      bio: 'Diseñadora creativa enfocada en experiencias digitales intuitivas y hermosas.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%237171ae;stop-opacity:1" /><stop offset="100%25" style="stop-color:%23ebc526;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad6)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 7,
      name: 'Marco Rossi',
      role: 'DevOps Engineer',
      bio: 'Experto en infraestructura, automatización y deployment continuo en la nube.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%238a8b8a;stop-opacity:1" /><stop offset="100%25" style="stop-color:%23131c38;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad7)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
    {
      id: 8,
      name: 'Sofía Martínez',
      role: 'Business Analyst',
      bio: 'Analista estratégica que conecta soluciones tecnológicas con objetivos empresariales.',
      image:
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%25" style="stop-color:%239f9455;stop-opacity:1" /><stop offset="100%25" style="stop-color:%23dcc75d;stop-opacity:1" /></linearGradient></defs><rect width="400" height="400" fill="url(%23grad8)"/><circle cx="200" cy="140" r="60" fill="rgba(255,255,255,0.3)"/><rect x="100" y="220" width="200" height="160" rx="30" fill="rgba(255,255,255,0.2)"/></svg>',
      socials: [
        {
          icon: this.getLinkedInIcon(),
          url: 'https://linkedin.com',
          label: 'LinkedIn',
        },
        {
          icon: this.getTwitterIcon(),
          url: 'https://twitter.com',
          label: 'Twitter',
        },
        {
          icon: this.getGitHubIcon(),
          url: 'https://github.com',
          label: 'GitHub',
        },
      ],
    },
  ];

  private getLinkedInIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.43-.103.25-.129.599-.129.948v5.427h-3.553s.047-8.789 0-9.701h3.553v1.374c.42-.653 1.173-1.583 2.851-1.583 2.084 0 3.644 1.362 3.644 4.292l-.001 5.618zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.956.77-1.715 1.958-1.715 1.187 0 1.914.759 1.938 1.715 0 .954-.751 1.715-1.981 1.715zm1.946 11.597H3.392v-9.701h3.891v9.701zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
      </svg>
    `;
  }

  private getTwitterIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    `;
  }

  private getGitHubIcon(): string {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `;
  }
}
