import { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  seo: {
    title: "Sebastian Urrego Argaez | Full Stack Developer | Data & AI Enthusiast",
    description:
      "Portafolio profesional de Sebastian Urrego Argaez, enfocado en desarrollo full stack, analitica de datos, inteligencia artificial y construccion de soluciones tecnologicas con impacto real.",
  },
  profile: {
    name: "Sebastian Urrego Argaez",
    role: "Full Stack Developer | Data & AI Enthusiast",
    location: "Medellin, Colombia",
    availability: "Disponible para practicas, roles junior y proyectos con foco en impacto",
    intro:
      "Ingeniero en formacion con enfoque en desarrollo full stack, analitica de datos e inteligencia artificial.",
    summary:
      "Desarrollo soluciones web, dashboards, integraciones y automatizaciones que conectan software, datos y operacion. Mi perfil combina construccion frontend y backend con analisis de informacion, gestion tecnologica y una fuerte curiosidad por el potencial aplicado de la inteligencia artificial.",
    initials: "SU",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mi", href: "/sobre-mi" },
    { label: "Tecnologias", href: "/tecnologias" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Capacidades", href: "/capacidades" },
    { label: "Trayectoria", href: "/trayectoria" },
    { label: "Contacto", href: "/contacto" },
  ],
  hero: {
    eyebrow: "Full stack, datos e IA aplicados a problemas reales",
    title: "Construyo soluciones digitales que unen",
    emphasis: "desarrollo, analitica y automatizacion con criterio tecnico.",
    description:
      "Soy Sebastian Urrego Argaez, estudiante de Ingenieria Informatica en ultimos semestres. Me enfoco en construir productos y herramientas que aporten claridad operativa, mejoren procesos y conviertan informacion en decisiones utiles.",
    actions: [
      { label: "Ver proyectos", href: "/proyectos" },
      { label: "Contactar", href: "/contacto" },
      { label: "GitHub", href: "https://github.com/completar-usuario" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/completar-perfil" },
    ],
    badges: [
      { label: "React + Next.js" },
      { label: "Node.js + NestJS + FastAPI" },
      { label: "Dashboards, ML y automatizacion" },
      { label: "Integracion de APIs y datos" },
    ],
    stats: [
      { value: "Full Stack", label: "Frontend, backend y bases de datos" },
      { value: "Data + AI", label: "Analitica, machine learning y exploracion aplicada" },
      { value: "Ejecucion", label: "Soluciones utiles para contextos reales" },
    ],
    quickFacts: [
      { label: "Ubicacion", value: "Medellin, Colombia" },
      { label: "Formacion", value: "Ingenieria Informatica - ultimos semestres" },
      { label: "Idioma", value: "Espanol nativo | Ingles intermedio" },
      { label: "Contacto", value: "surrego@correo.iue.edu.co" },
    ],
  },
  home: {
    eyebrow: "Explorar el portafolio",
    title: "Una estructura mas clara para recorrer perfil, stack y proyectos sin perder profundidad.",
    description:
      "La experiencia ahora parte desde Inicio y distribuye el contenido en vistas independientes para que cada bloque tenga mejor protagonismo y espacio de crecimiento.",
    cards: [
      {
        eyebrow: "Perfil",
        title: "Sobre mi",
        description:
          "Resumen profesional, propuesta de valor, enfoque de trabajo, formacion actual e idiomas.",
        href: "/sobre-mi",
      },
      {
        eyebrow: "Stack",
        title: "Tecnologias",
        description:
          "Herramientas organizadas por frontend, backend, bases de datos, data & AI y entorno tecnico.",
        href: "/tecnologias",
      },
      {
        eyebrow: "Casos",
        title: "Proyectos",
        description:
          "Aplicaciones, dashboards, automatizacion, machine learning y vision artificial con mas protagonismo.",
        href: "/proyectos",
      },
      {
        eyebrow: "Fortalezas",
        title: "Capacidades",
        description:
          "Lectura estrategica de mis fortalezas en desarrollo, analitica, IA aplicada y resolucion de problemas.",
        href: "/capacidades",
      },
      {
        eyebrow: "Evolucion",
        title: "Trayectoria",
        description:
          "Formacion, experiencia aplicada y recorrido tecnico presentado con una narrativa mas clara.",
        href: "/trayectoria",
      },
      {
        eyebrow: "Conexion",
        title: "Contacto",
        description:
          "Canales directos para hablar de oportunidades, practicas, colaboraciones o proyectos.",
        href: "/contacto",
      },
    ],
  },
  about: {
    eyebrow: "Sobre mi",
    title: "Perfil tecnico con mentalidad de producto, datos y mejora continua.",
    description:
      "Mi interes esta en desarrollar soluciones completas: desde una interfaz clara hasta la logica del sistema, la integracion de servicios y el analisis de la informacion que genera valor. Me motiva construir software util, bien estructurado y preparado para evolucionar.",
    highlights: [
      "Experiencia en desarrollo web, integracion de APIs y construccion de dashboards.",
      "Interes aplicado en inteligencia artificial, machine learning y vision por computador.",
      "Capacidad para apoyar procesos de automatizacion, gestion tecnologica y analisis operativo.",
      "Enfoque en soluciones escalables, mantenibles y alineadas con necesidades reales.",
    ],
    facts: [
      { label: "Perfil", value: "Full Stack Developer | Data & AI Enthusiast" },
      { label: "Correo", value: "surrego@correo.iue.edu.co" },
      { label: "Educacion", value: "Estudiante de Ingenieria Informatica en ultimos semestres" },
      { label: "Idiomas", value: "Espanol nativo e Ingles intermedio" },
    ],
  },
  technologies: {
    eyebrow: "Tecnologias",
    title: "Stack orientado a construir productos web, servicios y soluciones basadas en datos.",
    description:
      "Trabajo con un stack que combina interfaces modernas, backend robusto, bases de datos, analitica y herramientas de despliegue y automatizacion.",
    groups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      },
      {
        title: "Backend y APIs",
        items: ["Node.js", "NestJS", "Python", "FastAPI"],
      },
      {
        title: "Bases de datos",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        title: "Data & AI",
        items: ["Pandas", "NumPy", "Scikit-learn"],
      },
      {
        title: "DevOps y herramientas",
        items: ["Docker", "Jenkins", "Git", "GitHub", "Linux/Bash"],
      },
    ],
  },
  trustStrip: [
    "Desarrollo web full stack",
    "Integracion de APIs",
    "Dashboards interactivos",
    "Automatizacion de procesos",
    "Analisis de informacion",
    "Exploracion en inteligencia artificial",
  ],
  capabilities: [
    {
      title: "Desarrollo full stack con foco en producto",
      description:
        "Construyo aplicaciones completas conectando experiencia de usuario, logica de negocio, autenticacion, persistencia de datos e integracion de servicios.",
      points: [
        "Interfaces modernas con React, Next.js, TypeScript y Tailwind CSS",
        "Servicios y APIs con Node.js, NestJS y FastAPI",
        "Modelado de datos y persistencia con PostgreSQL, MySQL y MongoDB",
      ],
    },
    {
      title: "Analitica de datos e inteligencia artificial aplicada",
      description:
        "Exploro como los datos y los modelos pueden complementar productos y procesos, desde dashboards hasta prototipos de machine learning y vision artificial.",
      points: [
        "Analisis y preparacion de datos con Pandas y NumPy",
        "Modelos de machine learning con Scikit-learn",
        "Lectura de resultados para apoyar decisiones y seguimiento",
      ],
    },
    {
      title: "Automatizacion, gestion tecnologica y eficiencia operativa",
      description:
        "Tambien aporto desde la optimizacion de procesos, la organizacion de informacion y la construccion de herramientas que reducen friccion operativa.",
      points: [
        "Automatizacion de tareas repetitivas y flujos de apoyo",
        "Estructuracion y depuracion de informacion para mejor trazabilidad",
        "Apoyo a procesos tecnologicos con mirada practica y ordenada",
      ],
    },
  ],
  projects: [
    {
      title: "Sistema full stack de gestion de solicitudes",
      category: "Aplicacion web administrativa",
      status: "Arquitectura funcional",
      role: "Desarrollo full stack | diseno de flujo | autenticacion",
      summary:
        "Plataforma pensada para centralizar solicitudes, ordenar flujos de trabajo y mejorar el seguimiento operativo con una base tecnica mantenible.",
      challenge:
        "El reto era transformar un proceso disperso en una experiencia clara para registrar, consultar y administrar solicitudes sin perder trazabilidad.",
      solution:
        "Estructure una solucion full stack con autenticacion, roles, panel administrativo e interfaz preparada para evolucionar por modulos.",
      impact:
        "El proyecto demuestra capacidad para construir un producto funcional de punta a punta, con foco en utilidad, orden del proceso y escalabilidad.",
      metrics: [
        { label: "Tipo", value: "Full Stack" },
        { label: "Acceso", value: "JWT + Roles" },
        { label: "Base", value: "Escalable" },
      ],
      highlights: [
        "Modelo de autenticacion y control por roles pensado para separar vistas y permisos.",
        "Estructura modular para seguir creciendo nuevas funcionalidades administrativas.",
        "Experiencia orientada a reducir desorden operativo y mejorar trazabilidad.",
      ],
      stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "JWT"],
      links: [],
    },
    {
      title: "Plataforma de activos tecnologicos con enfoque en IA",
      category: "Gestion tecnologica + datos",
      status: "En evolucion",
      role: "Analisis funcional | estructuracion de datos | vision de producto",
      summary:
        "Proyecto orientado a mejorar la administracion de activos tecnologicos, centralizar informacion y abrir espacio a analitica y automatizacion inteligente.",
      challenge:
        "La gestion de inventarios y estados de activos suele depender de registros dispersos, poca trazabilidad y procesos manuales lentos.",
      solution:
        "La plataforma organiza el ciclo de vida de los activos, estructura la informacion clave y deja lista una base para validaciones, alertas y capas de inteligencia aplicada.",
      impact:
        "Este caso refleja interes por resolver problemas reales de operacion y gestion tecnologica con software, datos y criterio de crecimiento.",
      metrics: [
        { label: "Enfoque", value: "Gestion + IA" },
        { label: "Valor", value: "Trazabilidad" },
        { label: "Estado", value: "En evolucion" },
      ],
      highlights: [
        "Base preparada para centralizar inventario, estados y seguimiento del ciclo de vida.",
        "Pensado para habilitar alertas, reglas y automatizaciones futuras.",
        "Proyecto con lectura clara de operacion, orden de informacion y crecimiento tecnico.",
      ],
      stack: ["Python", "FastAPI", "Dashboards", "Base de datos", "Automatizacion"],
      links: [],
    },
    {
      title: "Modelos de machine learning para prediccion y clasificacion",
      category: "Data Science / ML",
      status: "Exploracion aplicada",
      role: "Preparacion de datos | entrenamiento | evaluacion de modelos",
      summary:
        "Conjunto de experimentos y modelos orientados a prediccion y clasificacion sobre datos estructurados, con enfasis en preparacion, entrenamiento y evaluacion.",
      challenge:
        "El objetivo era entender como construir pipelines confiables que pasaran de datos crudos a resultados interpretables y comparables.",
      solution:
        "Trabaje en limpieza de datos, ingenieria de variables, entrenamiento de modelos y analisis de metricas para comparar desempeno.",
      impact:
        "Estos proyectos fortalecen el perfil analitico y muestran capacidad para conectar desarrollo tecnico con interpretacion de resultados.",
      metrics: [
        { label: "Dominio", value: "Prediccion" },
        { label: "Tecnica", value: "ML" },
        { label: "Base", value: "Datos estructurados" },
      ],
      highlights: [
        "Proceso de limpieza, seleccion de variables y comparacion de enfoques.",
        "Uso de metricas para interpretar rendimiento y tomar decisiones de modelado.",
        "Aprendizaje transferible a dashboards, analitica y casos de IA aplicada.",
      ],
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      links: [],
    },
    {
      title: "Dashboard interactivo para analisis de informacion",
      category: "Visualizacion / reporting",
      status: "Listo para iterar",
      role: "Diseno de dashboard | estructuracion visual | comunicacion de datos",
      summary:
        "Dashboard orientado a explorar indicadores, comparar resultados y presentar hallazgos de forma clara para facilitar lectura y seguimiento.",
      challenge:
        "Los analisis tecnicos suelen perder impacto cuando la informacion no esta presentada de forma comprensible para el usuario final.",
      solution:
        "Construyi una experiencia visual con metricas, comparativas y graficas para hacer mas accesible la lectura de resultados y apoyar conversaciones basadas en datos.",
      impact:
        "El proyecto demuestra sensibilidad por la comunicacion visual de la informacion y por el valor de los dashboards en la toma de decisiones.",
      metrics: [
        { label: "Lectura", value: "Clara" },
        { label: "Interaccion", value: "Alta" },
        { label: "Uso", value: "Seguimiento" },
      ],
      highlights: [
        "Jerarquia pensada para que metricas y comparativas se entiendan rapido.",
        "Traduccion de resultados tecnicos a una lectura visual mas util para seguimiento.",
        "Base ideal para agregar nuevas vistas, filtros y segmentos de analisis.",
      ],
      stack: ["Python", "Pandas", "Dashboarding", "Visualizacion de datos"],
      links: [],
    },
    {
      title: "Proyecto de vision artificial para clasificacion de imagenes",
      category: "Computer Vision / IA",
      status: "Investigacion aplicada",
      role: "Preparacion de dataset | entrenamiento | validacion",
      summary:
        "Trabajo enfocado en clasificacion de imagenes para explorar tecnicas de vision artificial y su aplicacion en problemas concretos.",
      challenge:
        "El reto consistia en preparar los datos, entrenar un enfoque de clasificacion y evaluar el comportamiento del modelo frente a patrones visuales.",
      solution:
        "Desarrolle el flujo de preparacion del dataset, entrenamiento, validacion y lectura del desempeno para entender limites y oportunidades del modelo.",
      impact:
        "Este proyecto amplia el portafolio hacia IA aplicada y evidencia interes por aprender y construir soluciones en computer vision.",
      metrics: [
        { label: "Area", value: "Vision AI" },
        { label: "Tarea", value: "Clasificacion" },
        { label: "Perfil", value: "IA aplicada" },
      ],
      highlights: [
        "Trabajo sobre pipeline de datos visuales y evaluacion de comportamiento del modelo.",
        "Fortalece el perfil en computer vision desde una aproximacion practica.",
        "Deja una base interesante para seguir creciendo hacia casos reales de clasificacion.",
      ],
      stack: ["Python", "Computer Vision", "Machine Learning", "Procesamiento de imagenes"],
      links: [],
    },
  ],
  process: [
    {
      eyebrow: "01",
      title: "Entender el problema, los datos y el contexto",
      description:
        "Antes de construir, reviso que se necesita resolver, quienes usan la solucion y como circula la informacion dentro del proceso.",
    },
    {
      eyebrow: "02",
      title: "Definir una solucion clara, util y escalable",
      description:
        "Organizo arquitectura, stack, flujo y prioridades para que el producto responda bien hoy y siga siendo mantenible despues.",
    },
    {
      eyebrow: "03",
      title: "Construir, integrar y mejorar",
      description:
        "Desarrollo interfaces, servicios y automatizaciones con foco en claridad, funcionamiento real y aprendizaje continuo.",
    },
  ],
  timeline: [
    {
      title: "Ingenieria Informatica en etapa final",
      subtitle: "Formacion con base en software, datos e inteligencia artificial",
      description:
        "Actualmente curso los ultimos semestres de Ingenieria Informatica, fortaleciendo bases en desarrollo de software, bases de datos, analitica e inteligencia artificial aplicada.",
    },
    {
      title: "Experiencia en desarrollo, integraciones y soporte a procesos",
      subtitle: "Web, APIs, dashboards, automatizacion y gestion tecnologica",
      description:
        "He trabajado en proyectos y experiencias donde el desarrollo web se conecta con integracion de APIs, organizacion de informacion, seguimiento de indicadores y mejora de procesos tecnologicos.",
    },
    {
      title: "Portafolio orientado a construir soluciones completas",
      subtitle: "Full stack, ML, visualizacion y computer vision",
      description:
        "Mi recorrido reciente refleja una combinacion de construccion de aplicaciones, exploracion de modelos y herramientas para presentar informacion con claridad y valor practico.",
    },
  ],
  contact: {
    title: "Hablemos sobre oportunidades donde el desarrollo, los datos y la IA puedan crear valor.",
    description:
      "Estoy interesado en oportunidades donde pueda aportar desde el desarrollo full stack, la analitica y la construccion de soluciones tecnologicas utiles. Si quieres conocer mas sobre mi perfil o revisar posibles colaboraciones, aqui estan mis canales principales.",
    links: [
      { label: "surrego@correo.iue.edu.co", href: "mailto:surrego@correo.iue.edu.co" },
      { label: "Telefono", href: "tel:+57" },
      { label: "GitHub", href: "https://github.com/completar-usuario" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/completar-perfil" },
    ],
  },
};
