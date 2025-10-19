"use client"

import { Clock, Headphones, MessageSquare, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Support247() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-base font-medium">
            <Clock className="h-5 w-5 animate-spin-slow" />
            Siempre Disponibles
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Soporte <span className="text-primary">24/7</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Nuestro equipo está disponible en todo momento para resolver tus dudas y asegurar que tu proyecto funcione
            perfectamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Disponibilidad Total</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Atención inmediata las 24 horas del día, los 7 días de la semana
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Equipo Experto</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Profesionales capacitados listos para ayudarte en cualquier momento
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Respuesta Rápida</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tiempo de respuesta promedio menor a 15 minutos
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Monitoreo Continuo</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vigilancia constante para prevenir y resolver problemas
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
