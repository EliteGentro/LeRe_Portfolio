import { Sidebar, type NavItem } from "./components/Sidebar";
import { Cover } from "./components/Cover";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { Problem } from "./components/Problem";
import { Value } from "./components/Value";
import { Requirements } from "./components/Requirements";
import { Development } from "./components/Development";
import { Conclusions } from "./components/Conclusions";
import { EmptySection } from "./components/EmptySection";

const nav: NavItem[] = [
  { id: "portada", number: "01", label: "Portada" },
  { id: "resumen", number: "02", label: "Resumen ejecutivo" },
  { id: "problema", number: "03", label: "Problema y objetivos" },
  { id: "valor", number: "04", label: "Valor agregado" },
  { id: "requerimientos", number: "05", label: "Análisis de requerimientos" },
  { id: "desarrollo", number: "06", label: "Desarrollo e implementación" },
  { id: "pruebas", number: "07", label: "Pruebas de usabilidad" },
  { id: "conclusiones", number: "08", label: "Conclusiones y lecciones" },
  { id: "anexos", number: "09", label: "Anexos" },
];

function App() {
  return (
    <div className="min-h-screen">
      <Sidebar items={nav} />

      <main className="lg:ml-72 pt-14 lg:pt-0">
        <Cover />
        <ExecutiveSummary />
        <Problem />
        <Value />
        <Requirements />
        <Development />

        <EmptySection
          id="pruebas"
          number="07"
          eyebrow="Pruebas de usabilidad"
          title="Sección reservada."
          hint="Los hallazgos y resultados de las sesiones de prueba se documentarán aquí una vez consolidados."
        />
        <Conclusions />
        <EmptySection
          id="anexos"
          number="09"
          eyebrow="Anexos"
          title="Sección reservada."
          hint="Material complementario, evidencias y referencias adicionales serán incluidos en esta sección."
        />

        <Footer />
      </main>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="lg:ml-0 border-t border-bg-1 bg-white"
      style={{ borderTop: "3px solid var(--color-banorte-red)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <div
            className="text-[18px] text-dark-gray"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            LeRe · Equipo Cocoly
          </div>
          <p className="text-[13px] text-content-2 mt-1">
            Asistente de planeación de proyectos con IA · Reto Banorte · Mayo 2026
          </p>
        </div>
        <div
          className="sm:text-right text-[11px] uppercase tracking-[0.18em] text-content-3"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
        >
          Portfolio generado para presentación interna
        </div>
      </div>
    </footer>
  );
}

export default App;
