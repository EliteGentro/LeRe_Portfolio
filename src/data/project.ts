export interface TechItem {
  name: string;
  version?: string;
  purpose: string;
}

export interface TechGroup {
  title: string;
  description: string;
  items: TechItem[];
}

export const techStack: TechGroup[] = [
  {
    title: "Backend",
    description: "Servicio orquestador, agentes IA y persistencia.",
    items: [
      { name: "Python", version: "3.12", purpose: "Lenguaje principal del backend" },
      { name: "FastAPI", version: "Latest", purpose: "Framework REST con soporte async y SSE" },
      { name: "LangGraph", version: "Latest", purpose: "Orquestación de grafos multi-agente" },
      { name: "SQLAlchemy", version: "2.x", purpose: "ORM para acceso a base de datos" },
      { name: "Alembic", version: "Latest", purpose: "Migraciones de esquema de base de datos" },
      { name: "PostgreSQL (Neon)", version: "17", purpose: "Base de datos serverless principal" },
      { name: "bcrypt + PyJWT", version: "Latest", purpose: "Hashing de contraseñas y JWT" },
      { name: "slowapi", version: "Latest", purpose: "Rate limiting por IP" },
      { name: "Docker", version: "Latest", purpose: "Contenerización del servicio" },
      { name: "GCP", purpose: "Plataforma de despliegue en la nube" },
    ],
  },
  {
    title: "Frontend",
    description: "Experiencia conversacional, edición y diagramas interactivos.",
    items: [
      { name: "React + TypeScript", version: "19", purpose: "Framework de UI principal" },
      { name: "Vite", version: "7", purpose: "Build tool y servidor de desarrollo" },
      { name: "Zustand", version: "5", purpose: "Gestión de estado global" },
      { name: "@xyflow/react", version: "12", purpose: "Canvas interactivo para diagramas" },
      { name: "TailwindCSS", version: "4", purpose: "Estilos con tokens Banorte" },
      { name: "react-markdown", version: "10", purpose: "Renderizado de contenido IA" },
      { name: "Lucide React", version: "Latest", purpose: "Iconografía del sistema" },
      { name: "nginx", version: "Latest", purpose: "Servidor de producción SPA" },
    ],
  },
  {
    title: "Inteligencia Artificial",
    description: "Capa multi-modelo con streaming en tiempo real.",
    items: [
      { name: "OpenRouter", purpose: "Capa de abstracción multi-modelo" },
      { name: "GENERAL_SLOW_MODEL", purpose: "Modelo de razonamiento configurable" },
      { name: "GENERAL_FAST_MODEL", purpose: "Modelo rápido para tareas puntuales" },
      { name: "Server-Sent Events", purpose: "Streaming progresivo al cliente" },
    ],
  },
];

export interface ModuleInfo {
  title: string;
  description: string;
}

export const modules: ModuleInfo[] = [
  {
    title: "Autenticación y Seguridad",
    description:
      "Registro e inicio de sesión con credenciales @banorte.com, JWT con expiración configurable, RBAC granular y rate limiting por IP en el endpoint de login.",
  },
  {
    title: "Proyectos",
    description:
      "Núcleo de la plataforma: crear, listar, visualizar y editar proyectos, con estado de workflow propio, idioma configurable (es-MX / en) y propietario/equipo asociado.",
  },
  {
    title: "Orquestación y Agentes IA",
    description:
      "Grafo LangGraph en dos fases: evaluación del prompt y ejecución paralela de cuatro subagentes (tech_stack, requirements, work_items, design).",
  },
  {
    title: "Stack Tecnológico",
    description:
      "Agente v2 con descubrimiento de categorías, selección desde catálogo aprobado, validación LLM de ediciones y regeneración dirigida por el usuario.",
  },
  {
    title: "Requerimientos (SRS)",
    description:
      "Generación de documento SRS estructurado con IDs únicos auto-asignados, edición granular y regeneración parcial mediante lenguaje natural.",
  },
  {
    title: "Hitos del Proyecto",
    description:
      "Milestones (HIT-XX) con fase, entregables, tareas, criterios de aceptación, riesgos y estimación de esfuerzo. Editables y proponibles por el usuario.",
  },
  {
    title: "Diagramas",
    description:
      "Diagramas Mermaid (actividad, arquitectura, clases) parseados a React Flow y persistidos en tablas relacionales para edición sin pérdida de datos.",
  },
  {
    title: "Chat Contextual",
    description:
      "Interfaz conversacional integrada a cada proyecto. Historial persistido con timestamps para reconstruir el razonamiento detrás de cada decisión.",
  },
  {
    title: "Exportación",
    description:
      "Generación de PDF (LaTeX) y DOCX (python-docx) con únicamente contenido del proyecto, sin exposición de internals.",
  },
  {
    title: "Catálogo de Prompts",
    description:
      "CRUD de assets de prompts (system, skill, tool) con revisiones versionadas y bindings de agentes. Ensamblado dinámico en tiempo de ejecución.",
  },
  {
    title: "Equipos y RBAC",
    description:
      "Gestión de equipos con roles personalizados y permisos granulares consultados antes de cada operación sensible (edición, regeneración, exportación).",
  },
  {
    title: "Contexto de IA",
    description:
      "Servicio context_manager que consolida y compacta el contexto por subagente, preservando únicamente la información relevante por rol.",
  },
];

export interface ValueProp {
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
  {
    title: "Tiempo de arranque medido en minutos",
    description:
      "De una descripción en lenguaje natural a documentación estructurada completa, sin redacción manual.",
  },
  {
    title: "Gobernanza tecnológica integrada",
    description:
      "Catálogo aprobado Banorte como restricción dura del agente; cualquier propuesta fuera de catálogo es rechazada con alternativas válidas.",
  },
  {
    title: "Generación progresiva visible",
    description:
      "Streaming en tiempo real (SSE) que transforma la espera en un proceso comprensible y comprobable.",
  },
  {
    title: "Orquestación multi-agente real",
    description:
      "Fan-out paralelo sobre LangGraph; cuatro subagentes especializados trabajan simultáneamente sobre el mismo proyecto.",
  },
  {
    title: "Edición granular y regeneración",
    description:
      "Cualquier sección puede ajustarse o regenerarse mediante lenguaje natural, conservando IDs y trazabilidad.",
  },
  {
    title: "Seguridad de producción",
    description:
      "JWT, RBAC, rate limiting, validación de dominio institucional y manejo seguro de secretos vía variables de entorno.",
  },
];

export interface ConclusionItem {
  title: string;
  description: string;
}

export interface ConclusionBlock {
  title: string;
  items: ConclusionItem[];
}

export const conclusions: ConclusionBlock[] = [
  {
    title: "Logros del proyecto",
    items: [
      {
        title: "Cumplimiento del alcance",
        description:
          "Se alcanzaron con éxito los objetivos planeados originalmente para el proyecto.",
      },
      {
        title: "Arquitectura multiagente funcional",
        description:
          "Se diseñó e implementó eficazmente un sistema multiagentes, estructurado a través de un agente orquestador y subagentes especializados para los módulos de tech stack, requerimientos, hitos y diseño.",
      },
      {
        title: "Desarrollo temprano",
        description:
          "El núcleo de esta arquitectura se consolidó de manera óptima durante las primeras semanas de trabajo.",
      },
      {
        title: "Calidad del producto final",
        description:
          "Gracias al refinamiento continuo, se entregó un producto visual y funcionalmente superior a las expectativas iniciales.",
      },
    ],
  },
  {
    title: "Dificultades enfrentadas",
    items: [
      {
        title: "Complejidad en la especialización de módulos",
        description:
          "El principal reto radicó en el desarrollo individual de cada módulo. Al estar distribuidos entre los miembros del equipo, coordinar el esfuerzo y asegurar que el nivel de detalle y optimización fuera homogéneo en todo el sistema requirió una alta exigencia técnica y de gestión.",
      },
      {
        title: "Resistencia al conformismo",
        description:
          "Existió la tentación inicial de mantener ciertas funciones en su estado técnico básico. Sin embargo, superar esa zona de confort para buscar la mejora constante fue un desafío que demandó tiempo y esfuerzo extra de cada integrante.",
      },
    ],
  },
  {
    title: "Aprendizajes del proceso",
    items: [
      {
        title: "Dominio de nuevas tecnologías",
        description:
          "El proyecto sirvió como una plataforma de aprendizaje práctico, permitiendo al equipo dominar el diseño y la implementación de sistemas basados en agentes.",
      },
      {
        title: "Cultura de mejora continua",
        description:
          "Se demostró que el detalle, la revisión constante y el compromiso con la calidad no solo refinan la estética visual, sino que potencian directamente la robustez funcional del software.",
      },
      {
        title: "Sinergia y responsabilidad individual",
        description:
          "El proceso evidenció que el éxito de un sistema integrado depende directamente de la dedicación y el estándar de calidad que cada miembro imprima en su módulo asignado.",
      },
    ],
  },
];
