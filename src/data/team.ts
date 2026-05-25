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
  /** Pseudo-thematic gradient seed (CSS angle in deg) */
  hue: number;
}

export const coverImages: CoverImage[] = [
  {
    title: "Conversación inicial",
    caption:
      "El usuario describe el proyecto en lenguaje natural y el orquestador evalúa su completitud.",
    hue: 0,
  },
  {
    title: "Generación en paralelo",
    caption:
      "Cuatro subagentes especializados producen contexto, requerimientos, stack e hitos simultáneamente.",
    hue: 18,
  },
  {
    title: "Stack institucional",
    caption:
      "Tarjetas editoriales con medidor de confianza, restringidas al catálogo aprobado Banorte.",
    hue: 35,
  },
  {
    title: "Diagramas interactivos",
    caption:
      "Arquitectura, clases y actividad renderizados en React Flow, editables nodo a nodo.",
    hue: 210,
  },
  {
    title: "Exportación lista",
    caption:
      "Documentación final disponible en PDF y DOCX, alineada a los lineamientos del banco.",
    hue: 285,
  },
];
