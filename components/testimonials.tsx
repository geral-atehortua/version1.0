import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "El equipo transformó completamente nuestra presencia digital. Nuestras ventas online aumentaron un 150% en los primeros 3 meses.",
    rating: 5,
    image: "/professional-woman-ceo.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing, InnovaShop",
    content:
      "Profesionales excepcionales. Entregaron un e-commerce moderno y funcional que superó todas nuestras expectativas.",
    rating: 5,
    image: "/professional-man-marketing-director.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, CreativeStudio",
    content: "La atención al detalle y el soporte continuo hacen la diferencia. Recomiendo sus servicios sin dudarlo.",
    rating: 5,
    image: "/professional-woman-founder.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Historias de éxito que nos motivan a seguir mejorando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
