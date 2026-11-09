import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import LocalRepairGuide from "./src/components/LocalRepairGuide";
import { localSchemas } from "./src/localSeo";
import * as fs from "fs";
import * as path from "path";
import { 
  getTodasPaginas, 
  LOJAS, 
  rotaDe, findPageBySlug
} from "./src/siteData";
import { HUBS_DATA } from "./src/hubData";
import { BLOG_POSTS } from "./src/blogData";

const DIST_DIR = path.join(process.cwd(), "dist");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");
const APP_URL = "https://www.suncellassistencia.com.br"; // URL absoluta de produção

interface ExtraPage {
  routePath: string;
  title: string;
  description: string;
  h1: string;
  nome: string;
  faq?: { q: string; a: string }[];
}const paginasExtras: ExtraPage[] = [
  {
    routePath: "/",
    title: "SUNCELL | Assistência Técnica de Celular em Curitiba (Guaíra e Alto Boqueirão)",
    description: "Conserto de celular em Curitiba com diagnóstico gratuito e garantia. Troca de tela, bateria e placa de iPhone, Samsung, Xiaomi e Motorola.",
    h1: "Assistência Técnica de Celular em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "O orçamento é gratuito?", a: "Sim! Na SUNCELL, o diagnóstico é 100% gratuito e sem compromisso. Você traz o seu celular em uma de nossas duas lojas (Guaíra ou Alto Boqueirão), nós analisamos as falhas e te passamos o preço exato. Você só paga se autorizar e o serviço for executado com sucesso." },
      { q: "Quanto tempo demora o conserto do celular?", a: "Serviços mais frequentes como Troca de Tela e Troca de Bateria costumam ficar prontos de forma expressa, no mesmo dia, geralmente em menos de 2 horas. Reparos avançados de placa exigem análise mais técnica de microsoldagem." }
    ]
  },
  {
    routePath: "/compramos-iphone",
    title: "Compramos seu iPhone Usado em Curitiba | Pagamento Rápido via Pix",
    description: "Quer vender seu iPhone usado ou quebrado em Curitiba? A SUNCELL avalia seu celular na hora e paga via PIX ou dinheiro imediatamente. Faça uma simulação rápida!",
    h1: "Nós Compramos Seu iPhone Usado ou Seminovos",
    nome: "Curitiba",
    faq: [
      { q: "Quanto tempo demora a avaliação na loja física?", a: "A nossa equipe de técnicos leva cerca de 10 a 15 minutos para rodar todos os testes de hardware e software do seu iPhone. Aprovado, o PIX é realizado na mesma hora!" },
      { q: "Vocês aceitam celulares bloqueados no iCloud ou de origem duvidosa?", a: "Não! Exigimos a assinatura de um termo de procedência com cópia do documento de identidade e CPF, e o aparelho deve ser redefinido para as configurações de fábrica na frente de nossa equipe técnica." },
      { q: "Qualquer pessoa de Curitiba pode vender?", a: "Sim, basta levar seu iPhone até uma de nossas duas unidades em Curitiba (Guaíra ou Alto Boqueirão) acompanhado de um documento oficial com foto." }
    ]
  },
  {
    routePath: "/quem-somos",
    title: "Quem Somos | SUNCELL Assistência Técnica Celular Curitiba",
    description: "Conheça a história e os valores da SUNCELL. Atendimento de excelência em conserto de celular com 2 lojas físicas em Curitiba (Guaíra e Alto Boqueirão).",
    h1: "História e Compromisso da SUNCELL",
    nome: "Curitiba",
    faq: [
      { q: "Qual o diferencial da SUNCELL?", a: "Nossos pilares são a honestidade, diagnóstico gratuito real, garantia total de 90 dias e peças de alta performance." }
    ]
  },
  {
    routePath: "/bairros-e-cidades",
    title: "Áreas de Atendimento de Celular em Curitiba e Região | SUNCELL",
    description: "Consulte todas as regiões, bairros de Curitiba e cidades metropolitanas atendidas pela SUNCELL. Diagnóstico gratuito e conserto rápido na sua localidade.",
    h1: "Cobertura de Atendimento de Celulares",
    nome: "Curitiba",
    faq: [
      { q: "Como saber qual a unidade SUNCELL mais próxima de mim?", a: "Atendemos Guaíra, Alto Boqueirão e mais 75 bairros e 15 cidades com nossas duas unidades físicas bem localizadas dentro do Mercado Goes." }
    ]
  },
  {
    routePath: "/assistencia-tecnica-curitiba",
    title: "Assistência Técnica de Celular em Curitiba | SUNCELL - Diagnóstico Grátis",
    description: "Assistência técnica em Curitiba especializada em celulares. Troca de tela, bateria e placa de iPhone, Samsung, Xiaomi e Motorola. Diagnóstico gratuito e garantia. 2 unidades: Guaíra e Alto Boqueirão.",
    h1: "Assistência Técnica de Celular em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "Qual o valor para fazer o orçamento do celular na SUNCELL?", a: "O diagnóstico e o orçamento na SUNCELL são 100% gratuitos e sem compromisso em nossas duas unidades." }
    ]
  },
  {
    routePath: "/conserto-de-celular-curitiba",
    title: "Conserto de Celular em Curitiba | SUNCELL",
    description: "Conserto de celular em Curitiba com diagnóstico gratuito e garantia de 90 dias. Troca de tela, bateria, conector de carga e reparo de placa em 2 lojas físicas.",
    h1: "Conserto de Celular em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "Qual o valor para fazer o orçamento do celular na SUNCELL?", a: "O diagnóstico e o orçamento na SUNCELL são 100% gratuitos e sem compromisso em nossas duas unidades no Mercado Goes (Guaíra e Alto Boqueirão)." }
    ]
  },
  {
    routePath: "/conserto-de-tela-de-celular-curitiba",
    title: "Troca de Tela de Celular em Curitiba | SUNCELL",
    description: "Troca de tela de celular em Curitiba rápida e garantida. Telas de alta qualidade para iPhone, Samsung, Xiaomi e Motorola com garantia de 90 dias. Orçamento grátis!",
    h1: "Troca de Tela de Celular em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "Quanto tempo demora para trocar a tela do celular?", a: "Em média 1 hora de atendimento expresso em nossas lojas físicas." }
    ]
  },
  {
    routePath: "/conserto-celular-samsung-curitiba",
    title: "Conserto de Celular Samsung em Curitiba | SUNCELL",
    description: "Conserto de celular Samsung Galaxy em Curitiba. Troca de tela AMOLED, bateria, conector de carga e reparo de placa. Diagnóstico grátis e garantia!",
    h1: "Conserto de Celular Samsung em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "Vocês trocam tela Super AMOLED do Samsung Galaxy em Curitiba?", a: "Sim! Troca de tela e baterias para Galaxy S, A, M e Z com garantia de 90 dias." }
    ]
  },
  {
    routePath: "/conserto-de-celular-curitiba-centro",
    title: "Conserto de Celular para o Centro de Curitiba | SUNCELL",
    description: "Assistência técnica de celular para moradores e trabalhadores do Centro de Curitiba. Atendimento expresso nas unidades Guaíra e Alto Boqueirão com orçamento grátis!",
    h1: "Conserto de Celular para Clientes do Centro de Curitiba",
    nome: "Centro, Curitiba",
    faq: [
      { q: "A SUNCELL possui loja física no bairro Centro em Curitiba?", a: "Nossa unidade mais próxima do Centro fica a 8 min no bairro Guaíra (Mercado Goes) com estacionamento gratuito." }
    ]
  },
  {
    routePath: "/conserto-de-celular-perto-de-mim",
    title: "Conserto de Celular Perto de Mim em Curitiba | SUNCELL",
    description: "Encontre a assistência técnica de celular SUNCELL mais próxima de você em Curitiba. Duas unidades físicas completas no Mercado Goes (Guaíra e Alto Boqueirão).",
    h1: "Conserto de Celular Perto de Mim em Curitiba",
    nome: "Curitiba",
    faq: [
      { q: "Onde ficam as lojas da SUNCELL?", a: "Temos 2 lojas no Mercado Goes: Guaíra e Alto Boqueirão." }
    ]
  },
  {
    routePath: "/conserto-de-celular-santa-felicidade",
    title: "Conserto de Celular para Santa Felicidade Curitiba | SUNCELL",
    description: "Assistência técnica de celular para moradores de Santa Felicidade, Curitiba. Troca de tela, bateria e reparo de placa com diagnóstico grátis e garantia de 90 dias.",
    h1: "Conserto de Celular para Santa Felicidade, Curitiba",
    nome: "Santa Felicidade, Curitiba",
    faq: [
      { q: "Atendem moradores de Santa Felicidade?", a: "Sim! Atendemos moradores de Santa Felicidade com facilidade de acesso à nossa loja no Guaíra com estacionamento grátis." }
    ]
  },
  {
    routePath: "/conserto-de-celular-sitio-cercado",
    title: "Conserto de Celular para Sítio Cercado Curitiba | SUNCELL",
    description: "Conserto de celular para moradores do Sítio Cercado, Curitiba. Atendimento expresso na unidade vizinha do Alto Boqueirão no Mercado Goes. Diagnóstico grátis!",
    h1: "Conserto de Celular para Sítio Cercado, Curitiba",
    nome: "Sítio Cercado, Curitiba",
    faq: [
      { q: "Qual a loja mais próxima do Sítio Cercado?", a: "A unidade SUNCELL Alto Boqueirão fica a 5 minutos do Sítio Cercado, no Mercado Goes." }
    ]
  },
  {
    routePath: "/celular-xiaomi-redmi-a7-pro-dual-sim-128gb-4gb-ram",
    title: "Xiaomi Redmi A7 Pro 128GB 4GB RAM em Curitiba | Shopcell",
    description: "Redmi A7 Pro 128GB 4GB RAM por R$ 849,99 à vista ou 12x de R$ 81,98. Tela 6,9\" 120 Hz, bateria 6.000 mAh, Android 15. Loja física no Centro de Curitiba, garantia de 6 meses.",
    h1: "Celular Xiaomi Redmi A7 Pro 128GB 4GB RAM",
    nome: "Curitiba",
    faq: [
      { q: "O Xiaomi Redmi A7 Pro é novo e lacrado?", a: "Sim, todos os celulares vendidos pela Shopcell / SUNCELL são novos, originais, homologados pela Anatel e acompanham garantia de 6 meses fornecida pela nossa loja física em Curitiba." }
    ]
  },
  {
    routePath: "/celular-xiaomi-poco-m7-nfc-dual-sim-256gb-8gb-ram",
    title: "Xiaomi POCO M7 NFC 256GB 8GB RAM em Curitiba | Shopcell",
    description: "POCO M7 NFC 256GB 8GB RAM por R$ 1.199,99 à vista ou 12x de R$ 115,73. Tela 6,88\" 120 Hz, câmera 50 MP, bateria 5160 mAh, HyperOS. Loja física em Curitiba com garantia de 6 meses.",
    h1: "Celular Xiaomi POCO M7 NFC 256GB 8GB RAM",
    nome: "Curitiba",
    faq: [
      { q: "O Xiaomi POCO M7 NFC é novo e lacrado?", a: "Sim, todos os celulares vendidos pela Shopcell / SUNCELL são novos, originais, homologados pela Anatel e acompanham garantia de 6 meses fornecida pela nossa loja física em Curitiba." }
    ]
  }
];

async function runPrerender() {
  console.log("🚀 Iniciando Pre-rendering Estático Pró-SEO...");

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error("❌ Erro: O arquivo dist/index.html não existe. Certifique-se de rodar 'npm run build' primeiro.");
    process.exit(1);
  }

  // Garantir que a pasta public existe
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  // 1. Ler o index.html gerado pelo build do Vite como template
  let template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

  // 2. Obter todas as páginas dinâmicas do array central
  const paginas = getTodasPaginas();
  console.log(`📋 Encontradas ${paginas.length} páginas dinâmicas para pre-renderizar.`);

  // 3. Processar cada página programática
  for (const pagina of paginas) {
    const routePath = rotaDe(pagina);
    const targetDir = path.join(DIST_DIR, ...routePath.split("/").filter(Boolean));
    const targetFile = path.join(targetDir, "index.html");

    // Criar diretório correspondente
    fs.mkdirSync(targetDir, { recursive: true });

    // Injetar metadados exclusivos da página no HTML
    let html = template;

    // Substituir título padrão do template pelo título otimizado
    html = html.replace(
      /<title>(.*?)<\/title>/i,
      `<title>${pagina.title}</title>`
    );

    // Preparar tags a serem injetadas no HEAD
    const canonicalUrl = `${APP_URL}${routePath}`;
    const headInjections = `
    <!-- Metadados de SEO Programático Injetados por Prerender -->
    <meta name="description" content="${pagina.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba" />
    <meta name="geo.position" content="-25.4284;-49.2733" />
    <meta name="ICBM" content="-25.4284, -49.2733" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pagina.title}" />
    <meta property="og:description" content="${pagina.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="SUNCELL Assistência Técnica" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:image" content="${LOJAS[0].foto}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pagina.title}" />
    <meta name="twitter:description" content="${pagina.description}" />
    <meta name="twitter:image" content="${LOJAS[0].foto}" />
    `;

    // Injetar schemas JSON-LD estruturados
    const schemas: object[] = [];

    // LocalBusiness para as 2 lojas
    LOJAS.forEach((loja) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MobilePhoneRepair",
        "@id": `${APP_URL}/#loja-${loja.id}`,
        "name": `SUNCELL Assistência Técnica - Unidade ${loja.id === "guaira" ? "Guaíra" : "Alto Boqueirão"}`,
        "image": loja.foto,
        "priceRange": "$$",
        "telephone": "+5541999176640",
        "url": APP_URL,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": loja.id === "guaira" 
            ? "Rua Maria Moscardi Fanini, 261, Dentro do Mercado Goes" 
            : "R. Pastor Antônio Polito, 1805, Dentro do Mercado Goes",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": loja.id === "guaira" ? "80220-450" : "81770-260",
          "addressCountry": "BR"
        }
      });
    });

    // Service Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Conserto de Celulares",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SUNCELL Assistência Técnica"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": pagina.nome
      },
      "name": pagina.h1,
      "description": pagina.description
    });

    // FAQ Schema
    if (pagina.faq && pagina.faq.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pagina.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      });
    }

    const schemaScripts = schemas.map(schema => `
    <script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("");

    // Injetar antes do fechamento do head </head>
    html = html.replace("</head>", `${headInjections}${schemaScripts}\n</head>`);

    if (pagina.type === "bairro" || pagina.type === "cidade") {
      html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "");
      html = html.replace("</head>", localSchemas(pagina).map(schema => `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`).join("\n") + "</head>");
      html = html.replace('<div id="root"></div>', `<div id="root">${renderToStaticMarkup(React.createElement(LocalRepairGuide, { page: pagina }))}</div>`);
    }

    // Escrever arquivo index.html no subdiretório correspondente
    fs.writeFileSync(targetFile, html, "utf-8");
  }

  // 3b. Processar as páginas estáticas adicionais (Home e /compramos-iphone)
  console.log(`📋 Pre-renderizando ${paginasExtras.length} páginas estáticas estruturais.`);
  for (const extra of paginasExtras) {
    const isHome = extra.routePath === "/";
    const targetDir = isHome ? DIST_DIR : path.join(DIST_DIR, ...extra.routePath.split("/").filter(Boolean));
    const targetFile = path.join(targetDir, "index.html");

    // Criar diretório se não for a Home
    if (!isHome) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let html = template;

    // Substituir título padrão
    html = html.replace(
      /<title>(.*?)<\/title>/i,
      `<title>${extra.title}</title>`
    );

    const canonicalUrl = `${APP_URL}${extra.routePath === "/" ? "" : extra.routePath}`;
    const headInjections = `
    <!-- Metadados de SEO Injetados por Prerender -->
    <meta name="description" content="${extra.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba" />
    <meta name="geo.position" content="-25.4284;-49.2733" />
    <meta name="ICBM" content="-25.4284, -49.2733" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${extra.title}" />
    <meta property="og:description" content="${extra.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="SUNCELL Assistência Técnica" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:image" content="${LOJAS[0].foto}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${extra.title}" />
    <meta name="twitter:description" content="${extra.description}" />
    <meta name="twitter:image" content="${LOJAS[0].foto}" />
    `;

    const schemas: object[] = [];

    LOJAS.forEach((loja) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MobilePhoneRepair",
        "@id": `${APP_URL}/#loja-${loja.id}`,
        "name": `SUNCELL Assistência Técnica - Unidade ${loja.id === "guaira" ? "Guaíra" : "Alto Boqueirão"}`,
        "image": loja.foto,
        "priceRange": "$$",
        "telephone": "+5541999176640",
        "url": APP_URL,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": loja.id === "guaira" 
            ? "Rua Maria Moscardi Fanini, 261, Dentro do Mercado Goes" 
            : "R. Pastor Antônio Polito, 1805, Dentro do Mercado Goes",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": loja.id === "guaira" ? "80220-450" : "81770-260",
          "addressCountry": "BR"
        }
      });
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Conserto de Celulares",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SUNCELL Assistência Técnica"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": extra.nome
      },
      "name": extra.h1,
      "description": extra.description
    });

    if (extra.faq && extra.faq.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": extra.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      });
    }

    const schemaScripts = schemas.map(schema => `
    <script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("");

    html = html.replace("</head>", `${headInjections}${schemaScripts}\n</head>`);

    const localAlias: Record<string, string> = { '/conserto-de-celular-curitiba-centro':'centro', '/conserto-de-celular-santa-felicidade':'santa-felicidade', '/conserto-de-celular-sitio-cercado':'sitio-cercado' };
    if (localAlias[extra.routePath]) {
      const page = findPageBySlug('bairro', localAlias[extra.routePath])!;
      html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`)
        .replace(/<meta name="description" content="[^"]*" \/>/g, `<meta name="description" content="${page.description}" />`)
        .replace(/<link rel="canonical" href="[^"]*" \/>/g, `<link rel="canonical" href="${APP_URL}${rotaDe(page)}" />`)
        .replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "")
        .replace("</head>", localSchemas(page).map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n") + "</head>")
        .replace('<div id="root"></div>', `<div id="root">${renderToStaticMarkup(React.createElement(LocalRepairGuide, { page }))}</div>`);
    }
    fs.writeFileSync(targetFile, html, "utf-8");
  }

  console.log(`✅ Pre-rendering de todas as rotas estáticas (${paginas.length + paginasExtras.length}) finalizado com sucesso!`);

  // ==========================================
  // 4. GERAR SITEMAP.XML (DINAMICAMENTE)
  // ==========================================
  console.log("🚀 Gerando sitemap.xml...");
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- URL Home Principal -->
  <url>
    <loc>${APP_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Página Pilar: Assistência Técnica em Curitiba -->
  <url>
    <loc>${APP_URL}/assistencia-tecnica-curitiba</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Página Pilar Principal: Conserto de Celular Curitiba -->
  <url>
    <loc>${APP_URL}/conserto-de-celular-curitiba</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Troca de Tela de Celular Curitiba -->
  <url>
    <loc>${APP_URL}/conserto-de-tela-de-celular-curitiba</loc>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Conserto Celular Samsung Curitiba -->
  <url>
    <loc>${APP_URL}/conserto-celular-samsung-curitiba</loc>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Conserto Celular Centro Curitiba -->
  <url>
    <loc>${APP_URL}/conserto-de-celular-curitiba-centro</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Conserto Celular Perto de Mim -->
  <url>
    <loc>${APP_URL}/conserto-de-celular-perto-de-mim</loc>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Conserto Celular Santa Felicidade -->
  <url>
    <loc>${APP_URL}/conserto-de-celular-santa-felicidade</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- Conserto Celular Sítio Cercado -->
  <url>
    <loc>${APP_URL}/conserto-de-celular-sitio-cercado</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <!-- Canal de Compra de iPhones Usados -->
  <url>
    <loc>${APP_URL}/compramos-iphone</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Quem Somos -->
  <url>
    <loc>${APP_URL}/quem-somos</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Bairros e Cidades de Cobertura -->
  <url>
    <loc>${APP_URL}/bairros-e-cidades</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Produto: Xiaomi Redmi A7 Pro 128GB 4GB RAM -->
  <url>
    <loc>${APP_URL}/celular-xiaomi-redmi-a7-pro-dual-sim-128gb-4gb-ram</loc>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <!-- Produto: Xiaomi POCO M7 NFC 256GB 8GB RAM -->
  <url>
    <loc>${APP_URL}/celular-xiaomi-poco-m7-nfc-dual-sim-256gb-8gb-ram</loc>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
`;

  // Adicionar cada página programática
  paginas.forEach((p) => {
    const route = rotaDe(p);
    const priority = p.type === "servico" || p.type === "aparelho" ? "0.9" : "0.8";
    sitemapXml += `  <url>
    <loc>${APP_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  // Hubs Temáticos
  HUBS_DATA.forEach((h) => {
    sitemapXml += `  <url>
    <loc>${APP_URL}/hub/${h.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  });

  // Blog Hub e Artigos
  sitemapXml += `  <url>
    <loc>${APP_URL}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>\n`;

  BLOG_POSTS.forEach((b) => {
    sitemapXml += `  <url>
    <loc>${APP_URL}/blog/${b.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
  });

  sitemapXml += `</urlset>`;

  // Escrever o sitemap.xml em public/ e dist/
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf-8");
  console.log("✅ sitemap.xml gerado e gravado com sucesso em public/ e dist/.");

  // ==========================================
  // 5. GERAR ROBOTS.TXT
  // ==========================================
  console.log("🚀 Gerando robots.txt...");
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${APP_URL}/sitemap.xml
`;

  const locals = paginas.filter(p => p.type === 'bairro' || p.type === 'cidade');
  const summary = `# SUNCELL Assistência Técnica\n\nSite: ${APP_URL}\nIdioma: pt-BR\n\nDuas unidades físicas em Curitiba, dentro do Mercado Goes. As páginas de bairros e cidades orientam o deslocamento até essas lojas; não representam filiais adicionais. Valores, horários, peças e prazos devem ser confirmados com a unidade. Diagnóstico gratuito informado pela empresa. Nenhuma garantia de resultado de reparo, recuperação de dados ou posição em buscadores.\n\n${LOJAS.map(l => `## ${l.nome}\n${l.endereco}\nTelefone e WhatsApp: ${l.telefone}\n${l.linkWhats}`).join('\n\n')}\n\n## Diretório local\n${locals.map(p => `- [${p.nome}](${APP_URL}${rotaDe(p)}): ${p.description}`).join('\n')}\n`;
  for (const dir of [PUBLIC_DIR, DIST_DIR]) {
    fs.writeFileSync(path.join(dir, 'llms.txt'), summary);
    fs.writeFileSync(path.join(dir, 'llms-full.txt'), summary + '\n\n' + locals.map(p => `## ${p.h1}\n${APP_URL}${rotaDe(p)}\n${p.intro}\n${p.faq.map(f => `${f.q}\n${f.a}`).join('\n\n')}`).join('\n\n'));
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robotsTxt, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robotsTxt, "utf-8");
  console.log("✅ robots.txt gerado e gravado com sucesso em public/ e dist/.");
}

runPrerender().catch((err) => {
  console.error("❌ Erro durante o pre-rendering e geração de arquivos de SEO:", err);
  process.exit(1);
});
