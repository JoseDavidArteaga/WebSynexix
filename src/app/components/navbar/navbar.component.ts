import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container navbar-container">
        <!-- Logo -->
        <div class="navbar-logo">
          <span class="logo-text">Synexix</span>
        </div>

        <!-- Menu Toggle (Mobile) -->
        <button
          class="menu-toggle"
          [class.active]="menuOpen"
          (click)="toggleMenu()"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Links -->
        <ul class="nav-links" [class.active]="menuOpen">
          <li><a href="#hero" (click)="closeMenu()">Inicio</a></li>
          <li><a href="#vision-mission" (click)="closeMenu()">Visión y Misión</a></li>
          <li><a href="#policies-values" (click)="closeMenu()">Políticas y Valores</a></li>
          <li><a href="#objectives" (click)="closeMenu()">Objetivos</a></li>
          <li><a href="#contact" (click)="closeMenu()">Contacto</a></li>
        </ul>

        <!-- CTA Button -->
        <button class="btn btn-primary navbar-cta" (click)="scrollToContact()">
          Contactar
        </button>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(19, 28, 56, 0.9);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(235, 197, 38, 0.1);
        z-index: 1000;
        transition: all var(--transition-base);
      }

      .navbar.scrolled {
        background: rgba(19, 28, 56, 0.95);
        border-bottom-color: rgba(235, 197, 38, 0.2);
        box-shadow: var(--shadow-md);
      }

      .navbar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-sm) 0;
        min-height: 70px;
      }

      .navbar-logo {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
      }

      .logo-text {
        font-size: var(--font-size-2xl);
        font-weight: 800;
        background: linear-gradient(
          135deg,
          var(--color-primary-light),
          var(--color-primary-muted)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.02em;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: var(--spacing-xl);
        align-items: center;
      }

      .nav-links a {
        font-weight: 500;
        position: relative;
        color: var(--color-text-light);
      }

      .nav-links a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          var(--color-primary-light),
          var(--color-primary-muted)
        );
        transition: width var(--transition-base);
      }

      .nav-links a:hover::after {
        width: 100%;
      }

      .navbar-cta {
        white-space: nowrap;
      }

      .menu-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        gap: 5px;
        padding: var(--spacing-xs);
      }

      .menu-toggle span {
        width: 25px;
        height: 3px;
        background: var(--color-primary-light);
        border-radius: 2px;
        transition: all var(--transition-base);
      }

      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
      }

      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }

      @media (max-width: 768px) {
        .menu-toggle {
          display: flex;
        }

        .nav-links {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(19, 28, 56, 0.98);
          flex-direction: column;
          gap: var(--spacing-lg);
          padding: var(--spacing-xl);
          border-bottom: 1px solid rgba(235, 197, 38, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        .nav-links.active {
          max-height: 400px;
        }

        .navbar-cta {
          display: none;
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  private handleScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollToContact(): void {
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }
}
