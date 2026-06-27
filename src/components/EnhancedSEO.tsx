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
          "opens": "10:00",
          "closes": "13:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "14:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
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
    } else if (pageData.type === "loja") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": `Loja ${pageData.nome}`,
        "item": `${appUrl}${rotaDe(pageData)}`
      });
    }

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    });

    // Service Schema especializado com Offers, Shipping e Returns para satisfazer o Search Console
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
      "description": pageData.description,
      "offers": {
        "@type": "Offer",
        "url": canonicalUrl,
        "priceCurrency": "BRL",
        "price": "149.90",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "LocalBusiness",
          "name": "SUNCELL Assistência Técnica",
          "image": LOJAS[0].foto
        },
        "identifierExists": false,
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0.00",
            "currency": "BRL"
          },
          "shippingDestination": [
            {
              "@type": "DefinedRegion",
              "addressCountry": "BR",
              "addressRegion": ["PR"]
            }
          ],
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "BR",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
          "merchantReturnDays": 90,
          "returnMethod": "https://schema.org/ReturnInStore",
          "returnFees": "https://schema.org/FreeReturn",
          "refundType": "https://schema.org/ExchangeRefund"
        }
      }
    });

    // Product Schema correspondente para habilitar Rich Snippets de Preço e Estrelas no Google Search
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": pageData.h1,
      "image": LOJAS[0].foto,
      "description": pageData.description,
      "brand": {
        "@type": "Brand",
        "name": "SUNCELL"
      },
      "offers": {
        "@type": "Offer",
        "url": canonicalUrl,
        "priceCurrency": "BRL",
        "price": "149.90",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "LocalBusiness",
          "name": "SUNCELL Assistência Técnica",
          "image": LOJAS[0].foto
        },
        "identifierExists": false,
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0.00",
            "currency": "BRL"
          },
          "shippingDestination": [
            {
              "@type": "DefinedRegion",
              "addressCountry": "BR",
              "addressRegion": ["PR"]
            }
          ],
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "DAY"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "BR",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
          "merchantReturnDays": 90,
          "returnMethod": "https://schema.org/ReturnInStore",
          "returnFees": "https://schema.org/FreeReturn",
          "refundType": "https://schema.org/ExchangeRefund"
        }
      }
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
      {/* 1. RESOURCE HINTS (PRECONNECT / DNS-PREFETCH) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />

      {/* 2. FONT OPTIMIZATION */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" 
      />

      {/* 3. CRITICAL CSS */}
      <style>{`
        /* Critical CSS para carregamento instantâneo e estabilidade visual */
        body {
          background-color: #F5F5F7;
          color: #0D0D0D;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .bg-suncell-black {
          background-color: #0D0D0D !important;
        }
        .text-suncell-orange {
          color: #FF6B00 !important;
        }
        .bg-suncell-orange {
          background-color: #FF6B00 !important;
        }
      `}</style>

      {/* 4. SERVICE WORKER REGISTRATION */}
      <script type="text/javascript">{`
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
              .then(reg => console.log('[SUNCELL] Service Worker registrado:', reg.scope))
              .catch(err => console.log('[SUNCELL] Erro ao registrar Service Worker:', err));
          });
        }
      `}</script>

      {/* 5. META TAGS AVANÇADAS PARA MÁXIMA VISIBILIDADE NO GOOGLE */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsValue} />
      <meta name="google" content="notranslate" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

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
      <meta property="og:image" content="https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content="https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp" />

      {/* JSON-LD Schemas de forma unificada */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
