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
  console.log(`📋 Encontradas ${paginas.length} páginas para pre-renderizar.`);

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

  console.log(`✅ Pre-rendering concluído com sucesso! Geradas ${paginas.length} rotas estáticas em dist/.`);

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
