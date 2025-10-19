import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

const cases = [
  {
    title: "Landing Page Corporativa",
    category: "Sitio Web",
    description: "Sitio web profesional que aumentó la presencia digital y generó confianza en clientes",
    image: "/modern-digital-workspace-with-multiple-screens-sho.jpg",
    metrics: [
      { label: "Visitas", value: "+320%" },
      { label: "Conversión", value: "15.2%" },
    ],
  },
  {
    title: "E-commerce de Moda",
    category: "Tienda Online",
    description: "Plataforma de comercio electrónico que triplicó las ventas online en 6 meses",
    image: "/modern-fashion-ecommerce.png",
    metrics: [
      { label: "Ventas", value: "+340%" },
      { label: "Clientes", value: "2,500+" },
    ],
  },
  {
    title: "Correos Corporativos",
    category: "Email Empresarial",
    description: "Sistema de correo profesional con alta disponibilidad y seguridad avanzada",
    image: "/corporate-email-system.jpg",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Seguridad", value: "A+" },
    ],
  },
  {
    title: "Gestión de Redes Sociales",
    category: "Marketing Digital",
    description: "Estrategia integral de contenido y gestión de redes sociales que aumentó el engagement",
    image: "/social-media-management-dashboard-with-analytics-g.jpg",
    metrics: [
      { label: "Engagement", value: "+450%" },
      { label: "Seguidores", value: "12K+" },
    ],
  },
  {
    title: "Landing Page Profesional",
    category: "Página de Aterrizaje",
    description: "Landing page optimizada para conversión que aumentó consultas en un 280%",
    image: "/law-firm-landing-page.jpg",
    metrics: [
      { label: "Conversión", value: "+280%" },
      { label: "Leads", value: "850+" },
    ],
  },
  {
    title: "Menú de Restaurante",
    category: "Menú Digital",
    description: "Menú interactivo con código QR que mejoró la experiencia del cliente",
    image: "/restaurant-digital-menu.jpg",
    metrics: [
      { label: "Pedidos", value: "+165%" },
      { label: "Tiempo", value: "-40%" },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="proyectos" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Proyectos
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos digitales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={`${caseStudy.title} - ${caseStudy.category} - SiteMaestrog`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-2">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{caseStudy.title}</h3>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed flex-1">{caseStudy.description}</p>
                <div className="flex items-center gap-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full group/btn mt-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="#contacto">
                    Inicia tu proyecto ahora
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
