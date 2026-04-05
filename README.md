# Portafolio de Sebastian Urrego

![Next.js](https://img.shields.io/badge/Next.js-15-111827?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-1d4ed8?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Custom_UI-0f766e?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animated-0f172a?style=for-the-badge&logo=framer&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Production_Ready-14532d?style=for-the-badge)

Portafolio profesional construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.

Este proyecto presenta a Sebastian Urrego Argaez como **Full Stack Developer | Data & AI Enthusiast** mediante una experiencia premium, oscura y pensada para reclutadores, con foco en:

- solidez tecnica
- claridad de comunicacion
- jerarquia visual fuerte
- vision de producto
- facilidad para crecer por pagina

## Descripcion General

El portafolio fue refactorizado desde una landing larga hacia una experiencia basada en rutas reales con App Router, separando cada vista principal en paginas dedicadas:

- `/` Inicio
- `/sobre-mi`
- `/tecnologias`
- `/proyectos`
- `/capacidades`
- `/trayectoria`
- `/contacto`

El lenguaje visual se mantiene consistente en todo el sitio:

- interfaz oscura y ejecutiva
- acentos cian y arena
- superficies glass con bordes suaves
- glow sutil y profundidad visual
- espaciado y tipografia premium

## Puntos Destacados

- arquitectura con App Router y rutas reales en lugar de una sola landing extensa
- layout compartido para navegacion, atmosfera visual y footer
- contenido centralizado en `src/content/portfolio.ts`
- componentes reutilizables para heroes internos, bloques CTA y secciones
- responsive listo para desktop y mobile
- build de produccion validado

## Capturas

El repositorio ya esta preparado para agregar previews visuales. Capturas recomendadas:

- `public/screenshots/home.png`
- `public/screenshots/projects.png`
- `public/screenshots/technologies.png`
- `public/screenshots/contact.png`

Seccion sugerida para usar despues:

```md
## Capturas

![Inicio](public/screenshots/home.png)
![Proyectos](public/screenshots/projects.png)
![Tecnologias](public/screenshots/technologies.png)
```

## Stack Tecnologico

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- App Router

## Estructura Del Proyecto

```text
.
|-- package.json
|-- next.config.ts
|-- tailwind.config.ts
|-- postcss.config.mjs
|-- src
|   |-- app
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- capacidades
|   |   |   `-- page.tsx
|   |   |-- contacto
|   |   |   `-- page.tsx
|   |   |-- proyectos
|   |   |   `-- page.tsx
|   |   |-- sobre-mi
|   |   |   `-- page.tsx
|   |   |-- tecnologias
|   |   |   `-- page.tsx
|   |   `-- trayectoria
|   |       `-- page.tsx
|   |-- components
|   |   |-- about-section.tsx
|   |   |-- capabilities-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- footer.tsx
|   |   |-- hero-section.tsx
|   |   |-- home-explore-grid.tsx
|   |   |-- navigation.tsx
|   |   |-- page-cta.tsx
|   |   |-- page-hero.tsx
|   |   |-- process-section.tsx
|   |   |-- projects-section.tsx
|   |   |-- site-frame.tsx
|   |   |-- technologies-section.tsx
|   |   |-- timeline-section.tsx
|   |   |-- trust-strip.tsx
|   |   `-- ui
|   |       |-- container.tsx
|   |       |-- reveal.tsx
|   |       `-- section-heading.tsx
|   |-- content
|   |   `-- portfolio.ts
|   |-- lib
|   |   `-- utils.ts
|   `-- types
|       `-- portfolio.ts
`-- README.md
```

## Arquitectura Principal

Piezas compartidas mas importantes:

- `src/components/site-frame.tsx`
  Shell compartida con navegacion, fondo, capas de glow y footer.
- `src/components/navigation.tsx`
  Navbar basada en rutas reales con estado activo.
- `src/components/page-hero.tsx`
  Hero reutilizable para paginas internas.
- `src/components/page-cta.tsx`
  Bloque reutilizable para conectar una vista con la siguiente.
- `src/content/portfolio.ts`
  Fuente central de copy, enlaces, stats, proyectos y datos generales.
- `src/app/globals.css`
  Materiales visuales globales como `glass-panel`, `glass-tile` y texturas.

## Primeros Pasos

Requisitos:

- Node.js 18 o superior

Instalar dependencias:

```bash
npm install
```

Ejecutar en local:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

## Build De Produccion

Generar build:

```bash
npm run build
```

Ejecutar en modo produccion:

```bash
npm start
```

Scripts disponibles:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Guia De Despliegue

### Vercel

Es la opcion recomendada para proyectos con Next.js.

1. Sube el repositorio a GitHub.
2. Importa el repositorio en Vercel.
3. Mantiene la deteccion por defecto de Next.js.
4. Despliega.

Despliegue manual por CLI:

```bash
npx vercel
npx vercel --prod
```

### Notas

- El proyecto usa `distDir: ".next-portfolio"` en `next.config.ts`.
- Ese directorio de salida personalizado no rompe el flujo normal de Vercel.

### GitHub Pages

El proyecto ya queda preparado para desplegarse tambien en GitHub Pages cuando se publica desde este repositorio:

- `Sev419/CV_Sebastian_Urrego_Argaez`

Se configuraron:

- `basePath` y `assetPrefix` automaticos durante builds de GitHub Actions
- exportacion estatica para Pages
- workflow de despliegue en `.github/workflows/deploy-pages.yml`

Importante:

- En local no necesitas hacer nada especial.
- En GitHub Pages los estilos y assets ya se resolveran usando la ruta correcta del repositorio.

## Personalizacion De Contenido

La mayor parte del contenido editable vive en:

- `src/content/portfolio.ts`

Desde ese archivo puedes actualizar:

- nombre y rol profesional
- copy del hero
- enlaces de GitHub y LinkedIn
- proyectos
- capacidades
- timeline
- datos de contacto

## Personalizacion Visual

Puntos principales de control visual:

- `src/app/globals.css`
  Materiales globales, overlays, texturas y estilos de superficie.
- `tailwind.config.ts`
  Colores, sombras, tipografias y tokens de diseno.

## Siguientes Mejoras Recomendadas

### Inicio

- agregar proyectos destacados con preview visual
- incluir prueba social o highlights clave

### Sobre Mi

- profundizar objetivos profesionales
- agregar bloque de principios o estilo de trabajo

### Tecnologias

- mostrar nivel de profundidad o dominio por categoria
- separar stack principal de herramientas complementarias

### Proyectos

- agregar `demoUrl` y `repoUrl`
- convertir cada proyecto en un case study mas completo

### Capacidades

- conectar cada fortaleza con evidencia o resultados

### Trayectoria

- agregar fechas, institucion y hitos especificos

### Contacto

- reemplazar placeholders de telefono, GitHub y LinkedIn
- reforzar el CTA hacia oportunidades laborales o colaboraciones

## Checklist Del Repositorio

- arquitectura por rutas reales implementada
- identidad visual premium conservada
- segunda iteracion visual aplicada
- sistema reutilizable de page hero y CTA agregado
- contenido centralizado para mantenimiento
- responsive preservado
- build de produccion verificado

## Autor

Sebastian Urrego Argaez  
Full Stack Developer | Data & AI Enthusiast

## Pendientes

- URL real de GitHub
- URL real de LinkedIn
- numero de telefono
- capturas reales para la seccion visual del repositorio
