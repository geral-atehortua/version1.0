import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Analizamos tus necesidades y objetivos para crear una estrategia personalizada",
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseñamos un plan detallado con cronograma y entregables claros",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implementamos la solución con las mejores prácticas y tecnologías",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Desplegamos tu proyecto y te acompañamos en cada paso del camino",
  },
]

export function Process() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Nuestro Proceso</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un enfoque estructurado para garantizar el éxito de tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                {[
                  "Experiencia comprobada en proyectos digitales",
                  "Tecnologías modernas y escalables",
                  "Soporte continuo post-lanzamiento",
                  "Resultados medibles y transparentes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden bg-muted">
              <img
                src="/professional-team-collaborating-on-digital-project.jpg"
                alt="Equipo trabajando en proyecto digital"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
