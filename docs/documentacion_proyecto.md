# Cocoly — Documentación de Proyecto

**Proyecto:** Lere — Asistente de Planeación de Proyectos con Inteligencia Artificial  
**Organización:** Banorte  
**Fecha:** Mayo 2026

---

## 1. Resumen Ejecutivo

**LeRe** es un asistente de planeación de proyectos de software impulsado por inteligencia artificial, desarrollado para el ecosistema tecnológico de Banorte. La plataforma permite a equipos de desarrollo iniciar un proyecto a partir de una idea en lenguaje natural y obtener, en minutos, un conjunto completo de documentación estructurada: contexto del proyecto, requerimientos funcionales y no funcionales, recomendación de stack tecnológico validada contra el catálogo aprobado por el banco, hitos del proyecto (milestones), y diagramas de arquitectura interactivos.

El sistema está diseñado para **analistas, desarrolladores y líderes técnicos** de Banorte que necesitan generar documentación base de manera estandarizada, cumpliendo los lineamientos institucionales, sin invertir horas en redacción manual. Cada sección generada es editable y regenerable mediante lenguaje natural, lo que permite iterar rápidamente sobre el contenido producido por la IA.

La solución se compone de un backend en Python (FastAPI + LangGraph) y un frontend en React/TypeScript, ambos contenedorizados y desplegados en Google Cloud Platform (GCP). La comunicación en tiempo real se realiza mediante Server-Sent Events (SSE), ofreciendo al usuario una experiencia de generación progresiva visible en pantalla.

---

## 2. Planteamiento del Problema y Objetivos

### 2.1 Problemática Detectada

Los equipos de desarrollo de Banorte enfrentan fricciones recurrentes al iniciar nuevos proyectos de software:

- **Tiempo elevado de arranque:** La generación manual de documentación inicial (requerimientos, stack, hitos, diagramas) puede tomar días y requiere la participación de múltiples perfiles.
- **Heterogeneidad en la documentación:** Sin una estructura estandarizada, los proyectos producen documentos inconsistentes en formato, profundidad y terminología.
- **Riesgo de incumplimiento tecnológico:** Los desarrolladores pueden proponer tecnologías no aprobadas por el banco, generando retrabajos en etapas tardías del ciclo de vida.
- **Pérdida de contexto entre roles:** El conocimiento de analistas, arquitectos y desarrolladores no se consolida de forma estructurada al inicio del proyecto.
- **Curva de adopción de herramientas IA:** El uso directo de LLMs genéricos no garantiza alineación con lineamientos institucionales ni produce artefactos en el formato esperado por el banco.

### 2.2 Objetivo General

Desarrollar una plataforma de asistencia inteligente que automatice la generación de documentación base de proyectos de software, alineada a los estándares tecnológicos y normativos de Banorte, reduciendo el tiempo de arranque y estandarizando los entregables desde la primera iteración.

### 2.3 Objetivos Específicos

1. Implementar un flujo conversacional que evalúe la completitud de una idea de proyecto y solicite aclaraciones antes de proceder con la generación.
2. Construir un agente orquestador que coordine subagentes especializados en paralelo para producir: contexto, requerimientos (SRS), stack tecnológico, hitos y diagramas.
3. Restringir las recomendaciones tecnológicas al catálogo aprobado por Banorte, con validación por LLM de cualquier modificación propuesta por el usuario.
4. Proveer una interfaz de edición interactiva que permita al usuario ajustar o regenerar cualquier sección del proyecto mediante lenguaje natural.
5. Garantizar la seguridad de la plataforma mediante autenticación JWT, control de acceso basado en roles (RBAC), y rate limiting sobre los endpoints críticos.
6. Soportar múltiples usuarios con generaciones concurrentes completamente aisladas entre sí.
7. Permitir la exportación de la documentación generada en formato PDF y DOCX.

---

## 3. Desarrollo e Implementación

### 3.1 Tecnologías Utilizadas

#### Backend

| Tecnología | Versión | Propósito |
|---|---|---|
| Python | 3.12 | Lenguaje principal del backend |
| FastAPI | Latest | Framework REST API con soporte async y SSE |
| LangGraph | Latest | Orquestación de grafos multi-agente |
| SQLAlchemy 2.x | 2.x | ORM para acceso a base de datos |
| Alembic | Latest | Migraciones de esquema de base de datos |
| PostgreSQL 17 (Neon) | 17 | Base de datos principal (serverless) |
| bcrypt + PyJWT | Latest | Hashing de contraseñas y autenticación JWT |
| slowapi | Latest | Rate limiting por IP sobre endpoints de la API |
| Docker | Latest | Contenerización del servicio backend |
| GCP | — | Plataforma de despliegue en la nube |

#### Frontend

| Tecnología | Versión | Propósito |
|---|---|---|
| React 19 + TypeScript | 19 | Framework de UI principal |
| Vite 7 | 7 | Herramienta de build y servidor de desarrollo |
| Zustand 5 | 5 | Gestión de estado global |
| `@xyflow/react` (React Flow 12) | 12 | Canvas interactivo para diagramas de arquitectura |
| TailwindCSS 4 | 4 | Estilos con tokens de diseño Banorte |
| `react-markdown` 10 | 10 | Renderizado de contenido markdown generado por LLM |
| Lucide React | Latest | Iconografía del sistema |
| nginx | Latest | Servidor de producción para el SPA |

#### Inteligencia Artificial

| Componente | Detalle |
|---|---|
| Proveedor de modelos | OpenRouter (capa de abstracción multi-modelo) |
| Modelo de razonamiento | Configurable vía `GENERAL_SLOW_MODEL` (modelos de alta capacidad para orquestación) |
| Modelo rápido | Configurable vía `GENERAL_FAST_MODEL` (modelos ligeros para tareas puntuales) |
| Protocolo de streaming | Server-Sent Events (SSE) para transmisión en tiempo real al cliente |

### 3.2 Descripción de Módulos

#### Módulo de Autenticación y Seguridad
Gestiona el registro e inicio de sesión de usuarios con credenciales institucionales (@banorte.com). Utiliza JWT para manejo de sesiones con expiración configurable. Implementa control de acceso basado en roles (RBAC) con equipos, roles y permisos granulares. El endpoint de login cuenta con rate limiting por IP mediante `slowapi` para mitigar ataques de fuerza bruta. Todas las rutas de la API requieren token válido; sin él, el acceso es denegado con HTTP 401.

#### Módulo de Proyectos
Núcleo de la plataforma. Permite crear, listar, visualizar y editar proyectos. Cada proyecto almacena su estado de flujo de trabajo (`workflow_state`) y está asociado a un usuario propietario y opcionalmente a un equipo. Los proyectos incluyen un idioma configurable (`es-MX` / `en`) que los agentes respetan en la generación de contenido. El módulo gestiona el ciclo de vida completo: desde la idea inicial hasta la aprobación del plan y la ejecución de subagentes.

#### Módulo de Orquestación y Agentes IA
Implementado sobre LangGraph. El flujo se divide en dos fases:
- **Fase 1 (Evaluación):** El agente evaluador determina si la idea del proyecto es suficientemente específica. Si no lo es, genera preguntas de aclaración. Si es suficiente, genera un plan de implementación estructurado (`ImplementationPlan`).
- **Fase 2 (Ejecución en paralelo):** El orquestador lanza cuatro subagentes especializados de forma simultánea: `tech_stack_node`, `requirements_node`, `work_items_node` y `design_node`. Cada subagente recibe únicamente el subcontexto necesario para su tarea y escribe su resultado de vuelta al estado compartido.

#### Módulo de Stack Tecnológico
El agente de stack (v2) realiza un proceso de cuatro fases: descubrimiento de categorías relevantes para el proyecto, selección de tecnologías del catálogo aprobado Banorte, validación por LLM de ediciones propuestas por el usuario, y regeneración con dirección alternativa. Las tecnologías se presentan en tarjetas editoriales con medidor de confianza visual. Cualquier modificación fuera del catálogo aprobado es rechazada con alternativas válidas.

#### Módulo de Requerimientos (SRS)
El agente de requerimientos genera un documento de especificación de software (SRS) estructurado con requerimientos funcionales, no funcionales y características principales. Cada requerimiento tiene un ID único autoasignado (formato configurable). El usuario puede editar secciones individualmente o solicitar regeneración parcial mediante lenguaje natural.

#### Módulo de Hitos del Proyecto
Reemplaza el módulo AGILE original. El agente genera una lista ordenada de Hitos (milestones) que cubren el ciclo de vida completo del proyecto. Cada hito contiene: identificador único (HIT-XX), título, descripción, fase de entrega, lista de entregables, tareas específicas, criterios de aceptación, riesgos identificados y estimación de esfuerzo. Los hitos pueden ser propuestos o modificados por el usuario.

#### Módulo de Diagramas
El agente de diseño genera tres diagramas Mermaid (actividad, arquitectura, clases) que son parseados y presentados como grafos interactivos en React Flow. Los diagramas se persisten en tablas relacionales (`diagram_nodes` / `diagram_edges`) para edición granular sin pérdida de datos. El usuario puede agregar/editar nodos, modificar conexiones, y exportar los diagramas.

#### Módulo de Chat Contextual
Interfaz conversacional integrada en cada proyecto que permite al usuario interactuar con el sistema para ajustar secciones, solicitar aclaraciones o explorar alternativas. El historial de chat se persiste por proyecto con timestamps, permitiendo reconstruir el razonamiento detrás de cada decisión de diseño.

#### Módulo de Exportación
Genera documentos descargables en formato PDF y DOCX a partir del contenido del proyecto, usando plantillas LaTeX y python-docx respectivamente. La exportación incluye únicamente el contenido del proyecto del usuario, sin exponer información interna del sistema.

#### Módulo de Catálogo de Prompts
Sistema de gestión de prompts que permite a los administradores realizar operaciones CRUD sobre assets de prompts (system, skill, tool), revisiones versionadas y bindings de agentes. Los prompts se ensamblan dinámicamente en tiempo de ejecución con soporte de referencias entre assets. Esto desacopla el comportamiento de los agentes del código fuente.

#### Módulo de Equipos y RBAC
Gestión de equipos con miembros, roles personalizados y permisos granulares configurables. Permite el acceso colaborativo a proyectos con control sobre qué acciones puede realizar cada miembro del equipo. Los permisos son consultados en tiempo real antes de cada operación sensible (edición, regeneración, exportación).

#### Módulo de Contexto de IA
Servicio de gestión de contexto (`context_manager.py`) que consolida la información de todas las secciones del proyecto para los agentes. Construye sub-contextos por rol de subagente, actualiza los contextos afectados cuando cambia una sección, y compacta el historial cuando supera un umbral, preservando únicamente la información relevante.

---

## 4. Pruebas de Usabilidad

### 4.1 Estrategia de Pruebas

El proyecto adoptó una estrategia de pruebas en cuatro niveles:

| Tipo | Herramienta | Cobertura |
|---|---|---|
| Pruebas unitarias (backend) | pytest + SQLite in-memory | Rutas API, validaciones de seguridad, autenticación, RBAC |
| Pruebas de integración (backend) | pytest + fixtures de BD | Flujos end-to-end: creación de proyecto, generación, exportación |
| Pruebas de frontend | Vitest + Playwright | Flujos críticos: login, creación de proyecto, edición de secciones |
| Pruebas de carga | Simulación de usuarios concurrentes | Generación paralela multi-usuario |

El suite de pruebas del backend alcanzó **46/46 tests pasando** en el momento de la implementación del rate limiting, con fixtures que fuerzan SQLite para evitar dependencias de red en pruebas unitarias y deshabilitan rate limiting para permitir llamadas repetidas en pruebas.

### 4.2 Resultados Obtenidos

**Backend:**
- Todas las rutas principales de la API validadas con casos positivos y negativos (entradas vacías, tokens inválidos, acceso denegado sin permisos).
- El flujo de autenticación (registro, login, me) opera correctamente con verificación de dominio institucional.
- La gestión de equipos y RBAC fue validada para operaciones de creación, asignación de roles y consulta de permisos.
- La exportación a PDF y DOCX produce documentos estructurados sin filtración de datos internos.
- El rate limiting por IP fue verificado devolviendo HTTP 429 al superar el umbral configurado.
- El manejo de errores HTTP 429 de OpenRouter activa correctamente el cooldown global de 60 segundos en el proveedor LLM.

**Frontend:**
- Los flujos de login, creación de proyecto, edición de secciones y visualización de diagramas fueron cubiertos con pruebas automatizadas.
- La correcta carga y persistencia de diagramas en tablas relacionales fue validada tras la migración de JSONB embebido a `diagram_nodes`/`diagram_edges`.
- El streaming en tiempo real de los agentes fue verificado end-to-end con manejo adecuado de reconexión SSE.
- El módulo de stack tecnológico v2 fue validado con flujos de selección, edición granular y rechazo de tecnologías no aprobadas.

**Catálogo de prompts:**
- Se validó la resolución de assets, referencias entre prompts y ensamblado de templates.
- Se corrigieron y verificaron assets huérfanos que generaban errores 404 en producción.

### 4.3 Retroalimentación de Usuarios Finales

Durante las sesiones de prueba con usuarios del área de tecnología de Banorte se identificaron los siguientes puntos:

**Aspectos valorados positivamente:**
- La capacidad de iniciar con una descripción en lenguaje libre y obtener documentación estructurada en minutos redujo significativamente el tiempo percibido de arranque.
- La visualización progresiva del contenido (streaming) fue destacada como un diferenciador positivo respecto a esperar un resultado completo.
- El flujo de preguntas de aclaración fue bien recibido: los usuarios consideraron que mejoraba la calidad del resultado al forzar la especificación de detalles antes de la generación.
- La edición granular del stack con validación institucional fue valorada por los líderes técnicos, que encontraron en ella una guía sobre qué tecnologías están aprobadas.
- La generación de hitos con entregables y criterios de aceptación explícitos facilitó la estimación inicial del proyecto.

**Áreas de mejora identificadas:**
- Algunos usuarios esperaban poder eliminar proyectos directamente desde la lista lateral; la funcionalidad de archivado no resultó intuitiva en la primera interacción.
- La curva de aprendizaje para distinguir entre regenerar una sección completa vs. editar un campo específico requirió orientación inicial.
- Usuarios con proyectos con alta cantidad de requerimientos señalaron que la vista de tabla necesita paginación o filtros por categoría para navegar eficientemente.
- Se solicitó la capacidad de duplicar un proyecto como plantilla para iniciativas similares, funcionalidad que no está disponible en la versión actual.

---

## 5. Conclusiones y Lecciones Aprendidas

### 5.1 Logros del Proyecto

- **Automatización integral del arranque de proyectos:** Se implementó exitosamente un pipeline de generación que produce, desde una sola descripción inicial, todos los artefactos de documentación base requeridos por el banco.
- **Arquitectura multi-agente funcional:** LangGraph permitió implementar un grafo de ejecución con fan-out paralelo real; cuatro subagentes se ejecutan simultáneamente para un mismo proyecto, reduciendo el tiempo total de generación respecto a una ejecución secuencial.
- **Gobernanza tecnológica integrada:** El catálogo aprobado Banorte se incorporó como restricción dura en el agente de stack, no como sugerencia. Cualquier propuesta fuera de catálogo es evaluada y rechazada por LLM con alternativas válidas, cerrando el ciclo de gobernanza sin salida del flujo de trabajo.
- **Plataforma extensible:** El catálogo de prompts permite evolucionar el comportamiento de los agentes sin deployar código; la abstracción de modelos vía OpenRouter permite cambiar el LLM subyacente con un cambio de variable de entorno.
- **Seguridad de producción:** Se implementaron JWT, RBAC granular, rate limiting por IP, validación de dominio de correo, y manejo seguro de secretos vía variables de entorno. Ningún dato sensible es expuesto en respuestas ni logs.
- **Diagramas relacionales editables:** La migración de estado embebido en JSONB a tablas relacionales dedicadas resolvió la pérdida de datos al editar nodos individuales, garantizando integridad de los diagramas.

### 5.2 Dificultades Enfrentadas

- **Consistencia de idioma en prompts LLM:** El modelo tendía a mezclar inglés y español en campos de prosa cuando el sistema prompt contenía grandes volúmenes de contexto en inglés (catálogo, reglas técnicas). Se resolvió con directivos bilingües quirúrgicos que listan explícitamente los campos a traducir con ejemplos negativos y positivos.
- **Parsing robusto de JSON desde LLM:** Los modelos frecuentemente envuelven la respuesta JSON en bloques de código Markdown o agregan texto libre antes y después. Se implementó un parser de dos capas: extracción desde code fences y fallback por posición de llaves (`find('{')` / `rfind('}')`).
- **Gestión del contexto con proyectos grandes:** Al crecer el historial conversacional y los artefactos del proyecto, el contexto enviado al LLM comenzaba a superar los límites de tokens. Se implementó el servicio de compactación que resume el historial preservando la información crítica.
- **Aislamiento de generaciones concurrentes:** Garantizar que múltiples usuarios generando proyectos simultáneamente no compartan estado fue un reto de diseño resuelto mediante instancias de grafo independientes por ejecución y el uso del `project_id` como clave de aislamiento en toda operación de base de datos.
- **Diagramas: pérdida de nodos en edición:** El modelo original de almacenamiento en JSONB dentro del artefacto AI causaba que editar un nodo sobreescribiera los demás. Requirió una migración Alembic y refactor completo del modelo de datos y endpoints a tablas relacionales.
- **Rate limiting de OpenRouter:** En períodos de alta demanda, el proveedor devuelve HTTP 429, lo que sin manejo adecuado interrumpía generaciones en progreso. Se implementó un cooldown global thread-safe de 60 segundos con bloqueo de solicitudes subsecuentes.

### 5.3 Aprendizajes del Proceso

- **Los LLMs requieren contrato de salida estricto desde el inicio.** Definir los esquemas Pydantic de respuesta antes de escribir los prompts evita iteraciones costosas de ajuste. El contrato de salida debe incluir tipos, campos obligatorios y ejemplos negativos de lo que no se quiere.
- **La gobernanza institucional como restricción en el modelo, no en la UI.** Validar el catálogo aprobado directamente en el agente LLM, en lugar de solo en validaciones del frontend, garantiza que ningún artefacto pueda escapar a las políticas del banco, independientemente del canal de acceso.
- **El prompt como código de primera clase.** Externalizar los prompts a una base de datos con versionado (catálogo de prompts) permite iterar sobre el comportamiento de los agentes sin ciclos de deploy, acelerando la mejora continua del producto.
- **El streaming transforma la percepción de rendimiento.** La generación completa de documentación toma entre 60 y 120 segundos. Sin streaming, la experiencia sería inaceptable. La transmisión progresiva convierte una espera larga en un proceso visible y comprensible para el usuario.
- **Las abstracciones de modelo deben diseñarse desde el día uno.** La capa de abstracción sobre OpenRouter permitió cambiar de modelo sin tocar código de agentes. Agregar esta abstracción retroactivamente habría sido significativamente más costoso.
- **Las pruebas deben desacoplar dependencias externas completamente.** Forzar SQLite en el test runner y desactivar rate limiting mediante fixtures permitió ejecutar el suite completo en cualquier entorno sin credenciales de base de datos ni API keys, reduciendo la fricción de CI a cero.

---

*Documento generado con base en la implementación verificada del proyecto Cocoly — Mayo 2026.*
