"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">SiteMaestrog</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-base font-medium hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-base font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#proyectos" className="text-base font-medium hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="text-base font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="default" className="px-5 py-2 text-base" asChild>
              <a href="#contacto">Comenzar Proyecto</a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="pt-2">
                <Button size="default" className="w-full text-base" asChild>
                  <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                    Comenzar Proyecto
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
