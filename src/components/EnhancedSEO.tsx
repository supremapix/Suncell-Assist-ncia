import { Helmet } from "react-helmet-async";
import { LOJAS, PageData, rotaDe } from "../siteData";

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  pageData?: PageData;
}

export default function EnhancedSEO({
  title,
  description,
  canonicalPath = "",
  noIndex = false,
  pageData
}: EnhancedSEOProps) {
  // Configurações globais de SEO
  const siteName = "SUNCELL Assistência Técnica";
  const defaultTitle = "SUNCELL | Assistência Técnica de Celular em Curitiba";
  const defaultDesc = "Conserto de celular em Curitiba (Guaíra e Alto Boqueirão). Troca de tela, bateria e reparo de placa para iPhone, Samsung, Xiaomi e Motorola.";
  const appUrl = (import.meta as any).env?.VITE_APP_URL || "https://suncellassistencia.com.br";
  
  const finalTitle = title || pageData?.title || defaultTitle;
  const finalDesc = description || pageData?.description || defaultDesc;
  const canonicalUrl = `${appUrl}${canonicalPath}`;

  // Configuração de robots
  const robotsValue = noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  // Gerar schemas JSON-LD estruturados
  const schemas: object[] = [];

  // 1. Schema LocalBusiness para as 2 Lojas SUNCELL
  LOJAS.forEach((loja) => {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "MobilePhoneRepair",
      "@id": `${appUrl}/#loja-${loja.id}`,
      "name": `SUNCELL Assistência Técnica - Unidade ${loja.id === "guaira" ? "Guaíra" : "Alto Boqueirão"}`,
      "image": loja.foto,
      "priceRange": "$$",
      "telephone": "+5541999176640", // Centralizada ou por loja
      "url": appUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": loja.id === "guaira" 
          ? "Rua Maria Moscardi Fanini, 261, Dentro do Mercado Goes" 
          : "R. Pastor Antônio Polito, 1805, Dentro do Mercado Goes",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": loja.id === "guaira" ? "80220-450" : "81770-260",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": loja.id === "guaira" ? -25.4746 : -25.5235,
        "longitude": loja.id === "guaira" ? -49.2783 : -49.2312
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/suncell.brasil/",
        loja.maps
      ]
    });
  });

  // 2. Se for uma página de SEO programático (Bairro, Cidade, Aparelho, Serviço)
  if (pageData) {
    // BreadcrumbList Schema
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": appUrl
      }
    ];

    if (pageData.type === "bairro") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": `Bairro ${pageData.nome}`,
        "item": `${appUrl}${rotaDe(pageData)}`
      });
    } else if (pageData.type === "cidade") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": `Cidade ${pageData.nome}`,
        "item": `${appUrl}${rotaDe(pageData)}`
      });
    } else if (pageData.type === "aparelho") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageData.nome,
        "item": `${appUrl}${rotaDe(pageData)}`
      });
    } else if (pageData.type === "servico") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageData.nome,
        "item": `${appUrl}${rotaDe(pageData)}`
      });
    }

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    });

    // Service Schema especializado
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Conserto de Celulares e Smartphones",
      "provider": {
        "@type": "LocalBusiness",
        "name": siteName,
        "image": LOJAS[0].foto
      },
      "areaServed": pageData.type === "bairro" || pageData.type === "cidade" 
        ? {
            "@type": "AdministrativeArea",
            "name": pageData.nome
          }
        : {
            "@type": "AdministrativeArea",
            "name": "Curitiba"
          },
      "name": pageData.h1,
      "description": pageData.description
    });

    // FAQPage Schema se houver faq cadastrado
    if (pageData.faq && pageData.faq.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pageData.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      });
    }
  }

  return (
    <Helmet>
      {/* Meta tags básicas */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsValue} />

      {/* Tags de Geolocalização e SEO Regional */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={LOJAS[0].foto} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={LOJAS[0].foto} />

      {/* JSON-LD Schemas de forma unificada */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
