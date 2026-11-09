import { localSchemas } from "../localSeo";
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
  const appUrl = (import.meta as any).env?.VITE_APP_URL || "https://www.suncellassistencia.com.br";
  
  const finalTitle = title || pageData?.title || defaultTitle;
  const finalDesc = description || pageData?.description || defaultDesc;
  const canonicalUrl = `${appUrl}${canonicalPath}`;

  // Configuração de robots
  const robotsValue = noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const schemas = localSchemas(pageData);

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
