import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { VisionMissionComponent } from './vision-mission.component';
import { PoliciesValuesComponent } from './policies-values.component';
import { ObjectivesComponent } from './objectives.component';
import { TeamComponent } from './team.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    VisionMissionComponent,
    PoliciesValuesComponent,
    ObjectivesComponent,
    TeamComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-vision-mission></app-vision-mission>
      <app-policies-values></app-policies-values>
      <app-objectives></app-objectives>
      <app-team></app-team>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Synexix';

  ngOnInit(): void {
    this.initializeScrollAnimations();
  }

  /**
   * Inicializa animaciones de entrada cuando los elementos son visibles
   */
  private initializeScrollAnimations(): void {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;

          // Aplicar clase de animación basada en atributo
          const animationType =
            element.getAttribute('data-animation') || 'fade-in-up';
          element.classList.add(animationType);

          // Dejar de observar después de animar
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observar todos los elementos con atributo data-animate
    document.addEventListener('DOMContentLoaded', () => {
      const elementsToAnimate = document.querySelectorAll('[data-animate]');
      elementsToAnimate.forEach((element) => observer.observe(element));
    });

    // Para elementos que ya existen
    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach((element) => observer.observe(element));
  }
}
