import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://sitemaestrog.com"),
  title: {
    default: "SiteMaestrog - Agencia Digital en Bogotá | Desarrollo Web, E-commerce y Marketing Digital",
    template: "%s | SiteMaestrog",
  },
  description:
    "Agencia digital en Bogotá especializada en desarrollo web, tiendas virtuales, marketing digital, apps móviles y automatización. Dominio y hosting gratis el primer año. Soporte 24/7.",
  keywords: [
    "agencia digital bogotá",
    "desarrollo web colombia",
    "diseño web bogotá",
    "tienda virtual colombia",
    "e-commerce bogotá",
    "marketing digital colombia",
    "páginas web profesionales",
    "apps móviles bogotá",
    "correos empresariales",
    "automatización empresarial",
    "landing page bogotá",
    "gestión redes sociales",
    "SEO colombia",
    "hosting colombia",
    "dominio gratis",
  ],
  authors: [{ name: "SiteMaestrog" }],
  creator: "SiteMaestrog",
  publisher: "SiteMaestrog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://sitemaestrog.com",
    siteName: "SiteMaestrog",
    title: "SiteMaestrog - Agencia Digital en Bogotá",
    description:
      "Transformamos ideas en experiencias digitales. Desarrollo web, e-commerce, marketing digital y más. Dominio y hosting gratis el primer año.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SiteMaestrog - Agencia Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteMaestrog - Agencia Digital en Bogotá",
    description: "Desarrollo web, e-commerce, marketing digital. Dominio y hosting gratis el primer año.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://sitemaestrog.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://sitemaestrog.com" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
