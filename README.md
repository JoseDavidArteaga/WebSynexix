# 🚀 Synexix - Landing Page

Landing page profesional para la startup tecnológica **Synexix**, construida con **Angular 17+** y diseñada con un enfoque tech-moderno.

## Características

- **Diseño Responsivo**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Animaciones de Entrada**: Utiliza Intersection Observer para animar elementos al scroll
- **Componentes Standalone**: Arquitectura moderna de Angular sin módulos
- **Paleta de Colores Personalizada**: Variables CSS personalizadas para tema cohesivo
- **Performance Optimizado**: Lazy loading de imágenes y animaciones eficientes
- **Accesibilidad**: Constructo con estándares WCAG en mente

## Estructura del Proyecto

```
src/
├── app.component.ts          # Componente raíz
├── styles.css                # Estilos globales y variables CSS
├── components/
│   ├── navbar/
│   │   └── navbar.component.ts
│   ├── hero/
│   │   └── hero.component.ts
│   ├── services/
│   │   └── services.component.ts
│   ├── team/
│   │   └── team.component.ts
│   └── footer/
│       └── footer.component.ts
└── main.ts                   # Entry point
```

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Primario Light | `#ebc526` | Botones, acentos, highlights |
| Primario Muted | `#dcc75d` | Variaciones del primario |
| Background Dark | `#131c38` | Fondo principal |
| Charcoal | `#232319` | Footer, backgrounds secundarios |
| Gray | `#8a8b8a` | Texto secundario |
| Lavender | `#7171ae` | Acentos secundarios, líneas |
| Secondary Dark | `#574f1e` | Acentos adicionales |
| Secondary Light | `#9f9455` | Variaciones secundarias |

## Instalación y Setup

### Requisitos
- Node.js 18+
- Angular CLI 17+

### Pasos de Instalación

```bash
# 1. Crear nuevo proyecto Angular (si no lo has hecho)
ng new synexix-landing --skip-git

# 2. Copiar los archivos a tu proyecto
# Copia todos los archivos .ts y .css en la carpeta src/

# 3. Instalar dependencias
npm install

# 4. Servir la aplicación
ng serve

# Abre tu navegador en http://localhost:4200/
```

## Secciones Incluidas

### 1. **Navbar**
- Logo de Synexix con gradiente
- Navegación responsive con hamburger menu
- Botón CTA "Contactar"
- Efecto scroll-aware con backdrop blur

### 2. **Hero Section**
- Título impactante con highlight de gradiente
- Call-to-action dual (Botones primario y secundario)
- Estadísticas de la empresa
- Elemento visual SVG animado (circuito neural)
- Fondos decorativos flotantes

### 3. **Services/Features**
- Grid de 6 servicios principales
- Iconos SVG custom para cada servicio
- Tarjetas interactivas con hover effects
- Lista de características por servicio

### 4. **Team**
- Grid de 8 miembros del equipo
- Imágenes con overlay en hover
- Cargo y bio de cada miembro
- Links a redes sociales (LinkedIn, Twitter, GitHub)
- Totalmente responsive

### 5. **Footer**
- Información de la empresa
- Enlaces a servicios y compañía
- Datos de contacto
- Redes sociales
- Links legales y copyright

## 🎬 Animaciones

Las animaciones se implementan usando **Intersection Observer** para un rendimiento óptimo:

- **Fade In Up**: Entrada desde abajo con fade
- **Fade In Down**: Entrada desde arriba con fade
- **Fade In Left**: Entrada desde la izquierda
- **Fade In Right**: Entrada desde la derecha
- **Stagger Effect**: Retrasos en cascada para grupos de elementos
- **Float Animation**: Movimiento flotante en fondos decorativos
- **Glow Effect**: Efecto de brillo en elementos especiales

### Uso de Animaciones en Componentes

```html
<!-- Para activar animaciones, añade el atributo data-animate -->
<div data-animate="fade-in-up">Contenido</div>

<!-- Con retraso en cascada -->
<div data-animate="fade-in-up" style="animation-delay: 100ms">Item 1</div>
<div data-animate="fade-in-up" style="animation-delay: 200ms">Item 2</div>
```

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `styles.css` y modifica las variables CSS en la sección `:root`:

```css
:root {
  --color-primary-light: #tu-color;
  --color-primary-muted: #tu-color;
  /* ... más variables */
}
```

### Cambiar Contenido

Cada componente es totalmente editable:

1. **Navbar**: Modifica los enlaces en `navbar.component.ts`
2. **Hero**: Cambia el título, descripción y SVG en `hero.component.ts`
3. **Services**: Edita el array `services` en `services.component.ts`
4. **Team**: Modifica el array `teamMembers` en `team.component.ts`
5. **Footer**: Actualiza información en `footer.component.ts`

## 📱 Responsive Design

El diseño se adapta automáticamente a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Menos de 768px

## Performance

- Componentes Standalone (sin módulos innecesarios)
- Lazy loading de imágenes
- Animaciones GPU-accelerated
- CSS modular y reutilizable
- Minimal JavaScript footprint

## 🔧 Configuración en `angular.json`

Asegúrate de incluir `styles.css` en tu configuración:

```json
"styles": [
  "src/styles.css"
]
```

## Build para Production

```bash
# Generar build optimizado
ng build --configuration production

# Los archivos estarán en dist/
```

## Mejoras Futuras

- [ ] Integración con formulario de contacto
- [ ] Sistema de blog integrado
- [ ] Multi-idioma (i18n)
- [ ] Modo oscuro/claro
- [ ] Integración con CMS
- [ ] Carrito de e-commerce (si aplica)

## Licencia

Este proyecto es código libre para uso personal y comercial.

## Notas Técnicas

- **Angular Version**: 17+
- **TypeScript**: Latest
- **CSS**: Custom Properties (Variables CSS)
- **No External UI Framework**: Todo construido con CSS puro
- **Responsive**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant

## Tips

1. Para cambiar imágenes del team, reemplaza las URLs en el array `teamMembers` de `team.component.ts`
2. Los iconos SVG se generan dinámicamente, puedes personalizarlos en los métodos `getXIcon()`
3. Usa el atributo `data-animate` en cualquier elemento que quieras animar
4. Las transiciones están definidas en variables CSS para consistencia

## Contacto

Para más información o soporte, contacta a: **hello@synexix.com**

---

Hecho con ❤️ para Synexix Technologies
