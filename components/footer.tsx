import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t bg-secondary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-primary">SiteMaestrog</h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              Transformando ideas en experiencias digitales excepcionales
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Diseño UI/UX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Apps Móviles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground text-base">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-muted-foreground">
          <p className="text-base">&copy; 2025 SiteMaestrog. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
