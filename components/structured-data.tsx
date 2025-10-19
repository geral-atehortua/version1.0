export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SiteMaestrog",
    url: "https://sitemaestrog.com",
    logo: "https://sitemaestrog.com/logo.png",
    description:
      "Agencia digital en Bogotá especializada en desarrollo web, e-commerce, marketing digital y apps móviles",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-305-274-6966",
      contactType: "customer service",
      email: "contacto@sitemaestrog.com",
      availableLanguage: ["Spanish"],
    },
    sameAs: [
      "https://www.instagram.com/sitemaestrog",
      "https://www.facebook.com/sitemaestrog",
      "https://twitter.com/sitemaestrog",
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SiteMaestrog",
    image: "https://sitemaestrog.com/og-image.jpg",
    "@id": "https://sitemaestrog.com",
    url: "https://sitemaestrog.com",
    telephone: "+57-305-274-6966",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.711,
      longitude: -74.0721,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Agency Services",
    provider: {
      "@type": "Organization",
      name: "SiteMaestrog",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Digitales",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo Web",
            description: "Páginas web profesionales, rápidas y optimizadas para SEO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tienda Virtual E-commerce",
            description: "Tiendas online completas con catálogo, pagos seguros y gestión de inventario",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Digital",
            description: "Estrategias de marketing digital, gestión de redes sociales y publicidad online",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplicaciones Móviles",
            description: "Desarrollo de apps móviles para iOS y Android",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SiteMaestrog",
    url: "https://sitemaestrog.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sitemaestrog.com/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}
