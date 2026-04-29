import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
};
