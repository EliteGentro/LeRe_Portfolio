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
