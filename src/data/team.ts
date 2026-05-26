export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

/**
 * Team roster. Update with real names when available — placeholders kept
 * professional per the brief (no fabricated identities beyond the team name).
 */
export const team: TeamMember[] = [
  { name: "Integrante 1", role: "Product & Strategy", initials: "I1" },
  { name: "Integrante 2", role: "Backend & AI", initials: "I2" },
  { name: "Integrante 3", role: "Frontend & UX", initials: "I3" },
  { name: "Integrante 4", role: "Data & Cloud", initials: "I4" },
  { name: "Integrante 5", role: "QA & DevOps", initials: "I5" },
];

export interface CoverImage {
  title: string;
  caption: string;
  icon:
    | "chat"
    | "plan"
    | "agents"
    | "requirements"
    | "milestones"
    | "stack"
    | "diagrams"
    | "export";
}

export const coverImages: CoverImage[] = [
  {
    title: "Conversación inicial",
    caption:
      "El usuario describe el proyecto en lenguaje natural y el orquestador evalúa su completitud.",
    icon: "chat",
  },
  {
    title: "Plan de implementación",
    caption:
      "La idea validada se convierte en una ruta de ejecución con fases, dependencias y entregables priorizados.",
    icon: "plan",
  },
  {
    title: "Generación en paralelo",
    caption:
      "Cuatro subagentes especializados producen contexto, requerimientos, stack e hitos simultáneamente.",
    icon: "agents",
  },
  {
    title: "Requerimientos SRS",
    caption:
      "Requerimientos funcionales y no funcionales quedan estructurados con identificadores trazables y criterios claros.",
    icon: "requirements",
  },
  {
    title: "Hitos del proyecto",
    caption:
      "Milestones con entregables, tareas, criterios de aceptación, riesgos y esfuerzo estimado para guiar la ejecución.",
    icon: "milestones",
  },
  {
    title: "Stack institucional",
    caption:
      "Tarjetas editoriales con medidor de confianza, restringidas al catálogo aprobado Banorte.",
    icon: "stack",
  },
  {
    title: "Diagramas interactivos",
    caption:
      "Arquitectura, clases y actividad renderizados en React Flow, editables nodo a nodo.",
    icon: "diagrams",
  },
  {
    title: "Exportación lista",
    caption:
      "Documentación final disponible en PDF y DOCX, alineada a los lineamientos del banco.",
    icon: "export",
  },
];
