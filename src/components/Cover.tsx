import { team, coverImages } from "../data/team";
import { useReveal } from "../hooks/useReveal";

export function Cover() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="portada"
      className="relative scroll-mt-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, var(--color-bg-3) 60%, var(--color-bg-1) 100%)",
      }}
    >
      {/* Decorative grid backdrop */}
      <div
        className="absolute inset-0 grid-bg opacity-60 pointer-events-none"
        aria-hidden
      />
      {/* Soft red glow */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(235,0,41,0.18) 0%, rgba(235,0,41,0) 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,164,0,0.16) 0%, rgba(255,164,0,0) 70%)",
          filter: "blur(10px)",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28`}
      >
        {/* Top meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="pill pill-red">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-banorte-red)" }}
            />
            Equipo Cocoly
          </span>
          <span className="pill">Reto Banorte · Mayo 2026</span>
          <span className="pill pill-positive">Producción</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p
              className="text-[12px] uppercase tracking-[0.22em] text-content-2 mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Portfolio de Proyecto
            </p>
            <h1
              className="font-heading font-bold text-dark-gray leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(56px, 10vw, 132px)",
              }}
            >
              LeRe
            </h1>
            <div className="red-strip w-32 mt-6 mb-8" />
            <p className="text-[18px] sm:text-[20px] leading-[1.55] text-banorte-gray max-w-2xl">
              Asistente de planeación de proyectos de software impulsado por
              inteligencia artificial. De una idea en lenguaje natural a
              documentación estructurada, alineada al ecosistema Banorte, en
              minutos.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="card p-6">
              <div className="eyebrow mb-3">Equipo · Cocoly</div>
              <ul className="grid gap-3">
                {team.map((m, i) => (
                  <li
                    key={m.name}
                    className="flex items-center gap-3 opacity-0"
                    style={{
                      animation: `fadeUp 0.6s cubic-bezier(0.2,0,0,1) both`,
                      animationDelay: `${200 + i * 90}ms`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full text-white text-[12px] font-semibold shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-banorte-red), var(--color-alert))",
                        fontFamily: "var(--font-heading)",
                      }}
                      aria-hidden
                    >
                      {m.initials}
                    </div>
                    <div className="min-w-0">
                      <div
                        className="text-[14px] text-dark-gray truncate"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                      >
                        {m.name}
                      </div>
                      <div className="text-[12px] text-content-2 truncate">
                        {m.role}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                className="mt-5 pt-4 border-t border-bg-1 text-[11px] text-content-2 uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Placeholder · sustituir con nombres reales
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href="#resumen"
            className="btn-primary focusable"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("resumen")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explorar el proyecto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#requerimientos"
            className="btn-ghost focusable"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("requerimientos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver requerimientos
          </a>
        </div>

        {/* Snapshot stat strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "41", l: "Requerimientos funcionales" },
            { k: "12", l: "No funcionales" },
            { k: "29", l: "Historias de usuario" },
            { k: "12", l: "Módulos del sistema" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="card p-5 opacity-0"
              style={{
                animation: `fadeUp 0.6s cubic-bezier(0.2,0,0,1) both`,
                animationDelay: `${400 + i * 90}ms`,
              }}
            >
              <div
                className="text-[28px] leading-none text-dark-gray"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
              >
                {s.k}
              </div>
              <div className="mt-2 text-[12px] text-content-2 uppercase tracking-[0.14em]"
                   style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Cover image cards */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
            <div>
              <div className="eyebrow mb-2">Vista general</div>
              <h3
                className="text-[22px] text-dark-gray"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Cinco momentos clave de la experiencia
              </h3>
            </div>
            <span
              className="text-[11px] text-content-3 uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Placeholders · capturas pendientes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverImages.map((img, i) => (
              <article
                key={img.title}
                className="card card-hover overflow-hidden group"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg,
                      hsl(${img.hue}, 80%, 96%) 0%,
                      hsl(${(img.hue + 18) % 360}, 70%, 90%) 100%)`,
                  }}
                >
                  {/* Mock UI frame */}
                  <div className="absolute inset-0 p-4">
                    <div className="h-full w-full bg-white/85 backdrop-blur-sm rounded-md border border-white/60 shadow-sm flex flex-col">
                      <div className="flex items-center gap-1.5 px-3 h-7 border-b border-bg-1">
                        <span className="w-2 h-2 rounded-full bg-banorte-red" />
                        <span className="w-2 h-2 rounded-full bg-warning" />
                        <span className="w-2 h-2 rounded-full bg-positive" />
                        <span
                          className="ml-2 text-[10px] text-content-3"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          lere.banorte / preview
                        </span>
                      </div>
                      <div className="flex-1 p-4 flex flex-col gap-2">
                        <div className="h-2 w-1/3 rounded bg-bg-2" />
                        <div className="h-2 w-2/3 rounded bg-bg-2" />
                        <div className="h-2 w-1/2 rounded bg-bg-2" />
                        <div className="mt-auto grid grid-cols-3 gap-2">
                          <div className="h-10 rounded bg-bg-2" />
                          <div className="h-10 rounded bg-bg-2" />
                          <div
                            className="h-10 rounded"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(235,0,41,0.18), rgba(255,164,0,0.18))",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-md bg-white/80 text-content-2"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, "0")} · Placeholder
                  </span>
                </div>
                <div className="p-5">
                  <h4
                    className="text-[15px] text-dark-gray mb-1.5"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {img.title}
                  </h4>
                  <p className="text-[13px] text-banorte-gray leading-[1.55]">
                    {img.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
