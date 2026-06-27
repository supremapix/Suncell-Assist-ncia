import * as fs from "fs";
import * as path from "path";
import { 
  getTodasPaginas, 
  LOJAS, 
  rotaDe 
} from "./src/siteData";

const DIST_DIR = path.join(process.cwd(), "dist");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");
const APP_URL = "https://suncellassistencia.com.br"; // URL absoluta de produção

interface ExtraPage {
  routePath: string;
  title: string;
  description: string;
  h1: string;
  nome: string;
  faq?: { q: string; a: string }[];
}

const paginasExtras: ExtraPage[] = [
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
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Canal de Compra de iPhones Usados -->
  <url>
    <loc>${APP_URL}/compramos-iphone</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

  // Adicionar cada página programática
  paginas.forEach((p) => {
    const route = rotaDe(p);
    const priority = p.type === "servico" || p.type === "aparelho" ? "0.9" : "0.8";
    sitemapXml += `  <url>
    <loc>${APP_URL}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
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

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robotsTxt, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robotsTxt, "utf-8");
  console.log("✅ robots.txt gerado e gravado com sucesso em public/ e dist/.");
}

runPrerender().catch((err) => {
  console.error("❌ Erro durante o pre-rendering e geração de arquivos de SEO:", err);
  process.exit(1);
});
