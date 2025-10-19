import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, ShoppingCart, Mail, Zap, Globe, Smartphone } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Desarrollo de páginas web profesionales, rápidas y optimizadas para SEO",
    features: ["Diseño responsive", "SEO optimizado", "Carga ultrarrápida"],
  },
  {
    icon: ShoppingCart,
    title: "Tienda Virtual",
    description: "E-commerce completo con todo lo necesario para vender online",
    features: ["Catálogo de productos", "Pagos seguros", "Gestión de inventario"],
  },
  {
    icon: Mail,
    title: "Correos Empresariales",
    description: "Correos personalizados con tu dominio para profesionalizar tu marca",
    features: ["Dominio personalizado", "Almacenamiento ilimitado", "Seguridad avanzada"],
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing para aumentar tu presencia online",
    features: ["Redes sociales", "Google Ads", "Email marketing"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma de alto rendimiento",
    features: ["iOS y Android", "UX optimizada", "Integración API"],
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatiza procesos y aumenta la eficiencia de tu negocio",
    features: ["Workflows automáticos", "Integraciones", "Ahorro de tiempo"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Nuestros Servicios
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Soluciones digitales para tu negocio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Agencia digital especializada en desarrollo web, e-commerce, marketing digital y apps móviles. Ofrecemos
            servicios completos para llevar tu presencia digital al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
