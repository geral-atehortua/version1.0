import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Agencia Digital en Colombia
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Transformamos tus ideas en <span className="text-primary">experiencias digitales</span> excepcionales
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Creamos soluciones web innovadoras que impulsan el crecimiento de tu negocio. Desde sitios web
              corporativos hasta plataformas complejas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg font-medium">Dominio y hosting gratis el primer año</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg font-medium">Configuración rápida y fácil de escalar</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg font-medium">Soporte técnico 24/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="default" className="group hover:scale-105 transition-transform" asChild>
                <a href="#contacto">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="bg-transparent hover:scale-105 transition-transform"
                asChild
              >
                <a href="#proyectos">Ver Proyectos</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte Técnico</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src="/modern-digital-workspace-with-multiple-screens-sho.jpg"
                alt="Agencia digital en Bogotá - Desarrollo web y marketing digital"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
