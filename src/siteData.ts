// siteData.ts — Suncell Assistência Técnica (Curitiba)
// Dados centrais para SEO programático (bairros, cidades, aparelhos, serviços)
// Gerado de forma a garantir parágrafos 100% únicos para cada rota.

export interface Loja {
  id: "guaira" | "boqueirao";
  nome: string;
  endereco: string;
  telefone: string;
  whatsapp: string;
  maps: string;
  foto: string;
  linkWhats: string;
}

export interface PageData {
  type: "bairro" | "cidade" | "aparelho" | "servico" | "loja";
  slug: string;
  nome: string;
  regiao?: string;
  marca?: string;
  lojaMaisProxima: "guaira" | "boqueirao";
  h1: string;
  title: string;
  description: string;
  intro: string;
  faq: { q: string; a: string }[];
}

export const LOJAS: Loja[] = [
  {
    id: "guaira",
    nome: "SUNCELL Guaíra",
    endereco: "Dentro do Mercado Goes - Rua Maria Moscardi Fanini, 261 - Guaíra, Curitiba - PR, 80220-450",
    telefone: "(41) 99917-6640",
    whatsapp: "(41) 99917-6640",
    linkWhats: "https://api.whatsapp.com/send?phone=5541999176640",
    maps: "https://share.google/BvgD7geMqSmv4Cc98",
    foto: "https://img.suncellassistencia.com.br/suncell-slider-loja-guaira.webp",
  },
  {
    id: "boqueirao",
    nome: "SUNCELL Alto Boqueirão",
    endereco: "Dentro do Mercado Goes - R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, 81770-260",
    telefone: "(41) 99750-1961",
    whatsapp: "(41) 99750-1961",
    linkWhats: "https://api.whatsapp.com/send?phone=5541997501961&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20google.%20Preciso%20de%20um%20or%C3%A7amento!",
    maps: "https://share.google/ZzOtA47yW8m6T9fBr",
    foto: "https://img.suncellassistencia.com.br/suncell-slider-loja-boqueirao.webp",
  },
];

export const INSTAGRAM_PROFILE = "https://www.instagram.com/suncell.brasil/";
export const INSTAGRAM_EMBED_URL = "https://www.instagram.com/suncell.brasil/embed";

// Lista com os 75 bairros oficiais de Curitiba e suas regiões/lojas correspondentes
export const BAIRROS_RAW = [
  { nome: "Abranches", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Barreirinha e Ópera de Arame" },
  { nome: "Água Verde", regiao: "Sul-Central", loja: "guaira", marcos: "perto da Praça do Japão e Arena da Baixada" },
  { nome: "Ahú", regiao: "Norte", loja: "guaira", marcos: "próximo ao Museu Oscar Niemeyer (MON) e Justiça Federal" },
  { nome: "Alto Boqueirão", regiao: "Sul", loja: "boqueirao", marcos: "onde fica nossa loja no Mercado Goes, próximo ao Zoológico" },
  { nome: "Alto da Glória", regiao: "Central", loja: "guaira", marcos: "perto do Estádio Couto Pereira e Igreja do Perpétuo Socorro" },
  { nome: "Alto da Rua XV", regiao: "Central", loja: "guaira", marcos: "próximo ao Hospital de Clínicas e Praça das Nações" },
  { nome: "Atuba", regiao: "Norte", loja: "guaira", marcos: "na divisa com Colombo, próximo ao Parque Atuba" },
  { nome: "Augusta", regiao: "Oeste", loja: "guaira", marcos: "perto da CIC e divisa com Campo Largo" },
  { nome: "Bacacheri", regiao: "Norte", loja: "guaira", marcos: "região do Aeroporto do Bacacheri e Parque Bacacheri" },
  { nome: "Bairro Alto", regiao: "Norte", loja: "guaira", marcos: "perto do Shopping Jockey Plaza e Linha Verde Norte" },
  { nome: "Barreirinha", regiao: "Norte", loja: "guaira", marcos: "perto do Parque Barreirinha e Terminal Barreirinha" },
  { nome: "Batel", regiao: "Central", loja: "guaira", marcos: "polo gastronômico e comercial, perto do Shopping Pátio Batel" },
  { nome: "Bigorrilho", regiao: "Central-Oeste", loja: "guaira", marcos: "região do Champagnat, próximo ao Parque Barigui" },
  { nome: "Boa Vista", regiao: "Norte", loja: "guaira", marcos: "perto do Bosque de Portugal e Rua da Cidadania do Boa Vista" },
  { nome: "Bom Retiro", regiao: "Central", loja: "guaira", marcos: "perto do Hospital Pilar e Portal Polonês" },
  { nome: "Boqueirão", regiao: "Sul", loja: "boqueirao", marcos: "grande polo comercial perto do Terminal do Boqueirão" },
  { nome: "Butiatuvinha", regiao: "Oeste", loja: "guaira", marcos: "vizinho a Santa Felicidade, famoso pelas vinícolas e restaurantes" },
  { nome: "Cabral", regiao: "Norte", loja: "guaira", marcos: "próximo ao Campus Agrárias da UFPR e Avenida Paraná" },
  { nome: "Cachoeira", regiao: "Norte", loja: "guaira", marcos: "no extremo norte, perto do Parque Cachoeira e divisa com Almirante Tamandaré" },
  { nome: "Cajuru", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Jardim Botânico e Shopping Jardim das Américas" },
  { nome: "Campina do Siqueira", regiao: "Oeste", loja: "guaira", marcos: "perto do Terminal Campina do Siqueira e Parque Barigui" },
  { nome: "Campo Comprido", regiao: "Oeste", loja: "guaira", marcos: "região das universidades como UTFPR e Uniandrade, no Ecoville" },
  { nome: "Campo de Santana", regiao: "Sul", loja: "boqueirao", marcos: "no extremo sul, próximo à BR-116 e divisa com Fazenda Rio Grande" },
  { nome: "Capão Raso", regiao: "Sul", loja: "boqueirao", marcos: "próximo ao Terminal do Capão Raso e Shopping Palladium" },
  { nome: "Capão da Imbuia", regiao: "Leste", loja: "boqueirao", marcos: "lar do Museu de História Natural e bosque do Capão da Imbuia" },
  { nome: "Cascatinha", regiao: "Oeste", loja: "guaira", marcos: "região arborizada e residencial, próxima ao Parque Tingui" },
  { nome: "Caximba", regiao: "Sul", loja: "boqueirao", marcos: "na divisa extrema sul de Curitiba com Araucária" },
  { nome: "Centro", regiao: "Central", loja: "guaira", marcos: "coração comercial de Curitiba, perto da Rua XV de Novembro e Praça Tiradentes" },
  { nome: "Centro Cívico", regiao: "Central", loja: "guaira", marcos: "sede dos poderes do Estado, perto do Palácio Iguaçu e MON" },
  { nome: "Cidade Industrial (CIC)", regiao: "Oeste", loja: "guaira", marcos: "maior distrito industrial e populoso da zona oeste da cidade" },
  { nome: "Cristo Rei", regiao: "Leste", loja: "boqueirao", marcos: "perto do Hospital Cajuru e Jardim Botânico" },
  { nome: "Fanny", regiao: "Sul", loja: "guaira", marcos: "perto da Linha Verde e do Shopping Palladium" },
  { nome: "Fazendinha", regiao: "Sul-Oeste", loja: "guaira", marcos: "próximo ao Terminal Fazendinha e Rua da Cidadania" },
  { nome: "Ganchinho", regiao: "Sul", loja: "boqueirao", marcos: "região sul de Curitiba, próximo ao Contorno Sul" },
  { nome: "Guabirotuba", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Horto Florestal e à famosa passarela estaiada" },
  { nome: "Guaíra", regiao: "Sul-Central", loja: "guaira", marcos: "onde fica nossa matriz no Mercado Goes, um ponto de fácil acesso para Curitiba" },
  { nome: "Hauer", regiao: "Sul", loja: "boqueirao", marcos: "famoso polo de autopeças e comércio, próximo ao Terminal do Hauer" },
  { nome: "Hugo Lange", regiao: "Central", loja: "guaira", marcos: "bairro residencial de alto padrão próximo ao Juvevê e Cabral" },
  { nome: "Jardim Botânico", regiao: "Leste", loja: "boqueirao", marcos: "onde fica a famosa estufa de vidro de Curitiba e Campus da UFPR" },
  { nome: "Jardim Social", regiao: "Norte", loja: "guaira", marcos: "bairro residencial nobre perto do Bosque do Capão e Bacacheri" },
  { nome: "Jardim das Américas", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Shopping Jardim das Américas e Centro Politécnico UFPR" },
  { nome: "Juvevê", regiao: "Central", loja: "guaira", marcos: "polo gastronômico e residencial nobre, perto da Av. João Gualberto" },
  { nome: "Lamenha Pequena", regiao: "Norte", loja: "guaira", marcos: "no extremo norte, na divisa com Almirante Tamandaré" },
  { nome: "Lindóia", regiao: "Sul", loja: "boqueirao", marcos: "vizinho ao Fanny e Hauer, com comércio dinâmico" },
  { nome: "Mercês", regiao: "Central", loja: "guaira", marcos: "perto da Torre Panorâmica (Torre da Telepar) e Praça 29 de Março" },
  { nome: "Mossunguê", regiao: "Oeste", loja: "guaira", marcos: "conhecido como Ecoville, repleto de edifícios modernos e áreas verdes" },
  { nome: "Novo Mundo", regiao: "Sul", loja: "boqueirao", marcos: "perto do Shopping Palladium e do Hospital do Trabalhador" },
  { nome: "Orleans", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Viaduto do Orleans, facilitando o acesso ao Contorno Norte" },
  { nome: "Parolin", regiao: "Central-Sul", loja: "guaira", marcos: "próximo ao Prado Velho, Linha Verde e TRE" },
  { nome: "Pilarzinho", regiao: "Norte", loja: "guaira", marcos: "lar da Pedreira Paulo Leminski e do Parque Tanguá" },
  { nome: "Pinheirinho", regiao: "Sul", loja: "boqueirao", marcos: "importante polo comercial e hub de transporte com o Terminal Pinheirinho" },
  { nome: "Portão", regiao: "Sul", loja: "guaira", marcos: "perto do Shopping Ventura, Palladium e Igreja do Portão" },
  { nome: "Prado Velho", regiao: "Central", loja: "guaira", marcos: "perto da PUCPR, Teatro Paiol e antiga fábrica de chocolate" },
  { nome: "Rebouças", regiao: "Central", loja: "guaira", marcos: "bairro histórico industrial, perto da UTFPR Centro e Shopping Estação" },
  { nome: "Riviera", regiao: "Oeste", loja: "guaira", marcos: "pequeno bairro na zona oeste, com bela natureza preservada na CIC" },
  { nome: "Santa Cândida", regiao: "Norte", loja: "guaira", marcos: "polo norte de Curitiba, perto da Polícia Federal e Terminal Santa Cândida" },
  { nome: "Santa Felicidade", regiao: "Oeste", loja: "guaira", marcos: "famoso bairro gastronômico italiano, perto do Portal de Santa Felicidade" },
  { nome: "Santa Quitéria", regiao: "Oeste", loja: "guaira", marcos: "bairro residencial perto do Seminário e Uniandrade" },
  { nome: "Santo Inácio", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Parque Barigui e Universidade Tuiuti" },
  { nome: "Seminário", regiao: "Central-Oeste", loja: "guaira", marcos: "perto da Av. Getúlio Vargas e do Colégio Bom Jesus" },
  { nome: "Sítio Cercado", regiao: "Sul", loja: "boqueirao", marcos: "bairro populoso com comércio forte ao longo da Rua Izaac Ferreira da Cruz" },
  { nome: "São Braz", regiao: "Oeste", loja: "guaira", marcos: "zona oeste da cidade, residencial e arborizada, perto da Av. Toaldo Túlio" },
  { nome: "São Francisco", regiao: "Central", loja: "guaira", marcos: "centro histórico e boêmio de Curitiba, perto do Largo da Ordem" },
  { nome: "São João", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Parque Tingui e Santa Felicidade" },
  { nome: "São Lourenço", regiao: "Norte", loja: "guaira", marcos: "ao redor do belo Parque São Lourenço e do Centro de Criatividade" },
  { nome: "São Miguel", regiao: "Oeste", loja: "guaira", marcos: "no extremo oeste de Curitiba, próximo ao Rio Passaúna" },
  { nome: "Taboão", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Tanguá e divisa com Almirante Tamandaré" },
  { nome: "Tarumã", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Jockey Club e ao Ginásio do Tarumã" },
  { nome: "Tatuquara", regiao: "Sul", loja: "boqueirao", marcos: "região em franco crescimento na zona sul, próximo ao Contorno Sul" },
  { nome: "Tingui", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Bacacheri e Avenida Erasto Gaertner" },
  { nome: "Uberaba", regiao: "Leste-Sul", loja: "boqueirao", marcos: "bairro extenso perto da Avenida das Torres, caminho para SJP" },
  { nome: "Umbará", regiao: "Sul", loja: "boqueirao", marcos: "famoso pelas chácaras e vinícolas e pela Igreja do Umbará" },
  { nome: "Vila Izabel", regiao: "Central-Sul", loja: "guaira", marcos: "perto da Avenida Getúlio Vargas e divisa com Água Verde" },
  { nome: "Vista Alegre", regiao: "Norte", loja: "guaira", marcos: "perto das Mercês, famoso pelo Parque Vista Alegre e bela vista da cidade" },
  { nome: "Xaxim", regiao: "Sul", loja: "boqueirao", marcos: "bairro comercial forte, conhecido como o bairro dos shoppings e comércio de rua" }
];

// Lista com 15 cidades da Região Metropolitana
export const CIDADES_RAW = [
  { nome: "Curitiba", loja: "guaira", marcos: "capital do Paraná, com atendimento presencial nas nossas duas unidades físicas do Guaíra e Alto Boqueirão" },
  { nome: "São José dos Pinhais", loja: "boqueirao", marcos: "região metropolitana leste, caminho do Aeroporto Internacional Afonso Pena" },
  { nome: "Pinhais", loja: "boqueirao", marcos: "município dinâmico a leste de Curitiba, famoso pelo Autódromo e Expotrade" },
  { nome: "Colombo", loja: "guaira", marcos: "região metropolitana norte, forte polo de turismo rural e produção de uvas" },
  { nome: "Araucária", loja: "boqueirao", marcos: "polo industrial da região sul metropolitana, lar da refinaria REPAR" },
  { nome: "Almirante Tamandaré", loja: "guaira", marcos: "norte metropolitano, conhecida como a cidade das fontes de água mineral" },
  { nome: "Campo Largo", loja: "guaira", marcos: "oeste metropolitano, mundialmente famosa como a Capital Nacional da Louça" },
  { nome: "Campo Magro", loja: "guaira", marcos: "noroeste metropolitano, rica em ecoturismo, trilhas e gastronomia rural" },
  { nome: "Fazenda Rio Grande", loja: "boqueirao", marcos: "sul metropolitano, uma das cidades que mais crescem na região, ao longo da BR-116" },
  { nome: "Quatro Barras", loja: "boqueirao", marcos: "nordeste metropolitano, portal do Caminho do Itupava e Serra do Mar" },
  { nome: "Campina Grande do Sul", loja: "guaira", marcos: "região metropolitana norte-nordeste, próxima à represa do Capivari e Pico Paraná" },
  { nome: "Mandirituba", loja: "boqueirao", marcos: "sul metropolitano, famosa pelo cultivo de camomila e belas chácaras" },
  { nome: "Balsa Nova", loja: "guaira", marcos: "oeste metropolitano, rica em belezas naturais como o Canyon do Guartelá e Recanto dos Papagaios" },
  { nome: "Rio Branco do Sul", loja: "guaira", marcos: "região metropolitana norte, importante produtora de calcário e cimento" },
  { nome: "Itaperuçu", loja: "guaira", marcos: "norte metropolitano, vizinha de Rio Branco do Sul e Almirante Tamandaré" },
  { nome: "Tijucas do Sul", loja: "boqueirao", marcos: "extremo sul metropolitano, procurada por hotéis fazenda e turismo ecológico" }
];

// Lista de aparelhos com os detalhes das marcas e serviços principais
export const APARELHOS_RAW = [
  {
    slug: "iphone",
    nome: "iPhone (Apple)",
    marca: "Apple",
    loja: "guaira",
    servicos: ["Troca de Tela", "Troca de Bateria", "Conector de Carga", "Câmeras e Face ID", "Vidro Traseiro Laser"],
    modeloDestaque: "iPhone 11, 12, 13, 14, 15, 16, Pro Max, Plus"
  },
  {
    slug: "samsung-galaxy",
    nome: "Samsung Galaxy",
    marca: "Samsung",
    loja: "boqueirao",
    servicos: ["Troca de Tela Super AMOLED", "Substituição de Bateria", "Reparo Avançado de Placa", "Conector de Carga tipo C"],
    modeloDestaque: "Linha Galaxy S (S20, S21, S22, S23, S24), Galaxy A, M e Z Fold/Flip"
  },
  {
    slug: "xiaomi-redmi-poco",
    nome: "Xiaomi / Redmi / Poco",
    marca: "Xiaomi",
    loja: "guaira",
    servicos: ["Troca de Display Touch", "Troca de Bateria de Alta Capacidade", "Troca de Conector de Carga", "Reparo do Botão Power/Biometria"],
    modeloDestaque: "Redmi Note 10/11/12/13, Poco X3/X4/X5/X6/M7, Xiaomi 12/13/14"
  },
  {
    slug: "motorola",
    nome: "Motorola (Moto G / Edge)",
    marca: "Motorola",
    loja: "boqueirao",
    servicos: ["Troca de Tela Frontal", "Troca de Bateria Viciada", "Reparo de Entrada de Carga", "Recuperação pós-contato com água"],
    modeloDestaque: "Moto G (G9, G20, G30, G52, G54, G84, G85) e Linha Motorola Edge"
  },
  {
    slug: "realme",
    nome: "Realme",
    marca: "Realme",
    loja: "guaira",
    servicos: ["Troca de Tela", "Troca de Bateria", "Conector Carga USB-C", "Desoxidação de Placa"],
    modeloDestaque: "Realme C, Realme GT e Number Series"
  },
  {
    slug: "asus",
    nome: "Asus Zenfone / ROG Phone",
    marca: "Asus",
    loja: "guaira",
    servicos: ["Troca de Tela", "Troca de Bateria", "Reparo de Conector", "Reparo de Placa Gamer"],
    modeloDestaque: "Zenfone 8, 9, 10 e ROG Phone 5, 6, 7"
  },
  {
    slug: "dell",
    nome: "Dell (Notebooks e PCs)",
    marca: "Dell",
    loja: "guaira",
    servicos: ["Troca de Bateria e Fonte", "Upgrade SSD NVMe", "Troca de Tela LCD/LED", "Limpeza Interna e Pasta Térmica"],
    modeloDestaque: "Dell Inspiron, Vostro, Latitude, G15 e Alienware"
  },
  {
    slug: "lenovo",
    nome: "Lenovo (Notebooks e PCs)",
    marca: "Lenovo",
    loja: "boqueirao",
    servicos: ["Troca de Teclado", "Reparo de Dobradiça", "Upgrade de Memória RAM", "Formatação e Backup"],
    modeloDestaque: "Lenovo Ideapad, ThinkPad, Yoga e Legion"
  },
  {
    slug: "hp",
    nome: "HP (Notebooks e Desktops)",
    marca: "HP",
    loja: "guaira",
    servicos: ["Troca de Bateria", "Formatação com Windows 11", "Troca de HD por SSD", "Reparo de Placa Mãe"],
    modeloDestaque: "HP Pavilion, ProBook, EliteBook e Victus"
  },
  {
    slug: "acer",
    nome: "Acer (Notebooks e Gamer)",
    marca: "Acer",
    loja: "boqueirao",
    servicos: ["Conserto de Placa de Vídeo/Placa Mãe", "Troca de Tela Gamer 144Hz", "Limpeza Preventiva", "Upgrade SSD"],
    modeloDestaque: "Acer Nitro 5, Predator, Aspire 3 e Aspire 5"
  },
  {
    slug: "lg",
    nome: "LG",
    marca: "LG",
    loja: "guaira",
    servicos: ["Reparo de Placa Principal", "Troca de Conector de Carga", "Troca de Tela Quebrada", "Troca de Bateria"],
    modeloDestaque: "LG K41S, K51S, K61, K62, Velvet e Gram"
  },
  {
    slug: "positivo",
    nome: "Positivo",
    marca: "Positivo",
    loja: "boqueirao",
    servicos: ["Troca de Tela", "Troca de Bateria", "Formatacao e Otimização", "Troca de Conector"],
    modeloDestaque: "Positivo Motion, Vision e Twist"
  },
  {
    slug: "multilaser",
    nome: "Multilaser / Ultra",
    marca: "Multilaser",
    loja: "guaira",
    servicos: ["Troca de Tela e Touch", "Troca de Bateria", "Otimizacao de Sistema"],
    modeloDestaque: "Multilaser M7, Ultra e MS Series"
  },
  {
    slug: "vaio",
    nome: "Vaio",
    marca: "Vaio",
    loja: "guaira",
    servicos: ["Troca de Bateria", "Upgrade SSD", "Troca de Teclado", "Reparo de Placa"],
    modeloDestaque: "Vaio FE14, FE15 e SX"
  },
  {
    slug: "avell",
    nome: "Avell High Performance",
    marca: "Avell",
    loja: "boqueirao",
    servicos: ["Manutenção Notebook Gamer", "Troca de Pasta Térmica Prata/Metal Líquido", "Reparo GPU/CPU"],
    modeloDestaque: "Avell A65, B155, Storm e Mob"
  },
  {
    slug: "alienware",
    nome: "Alienware (Dell)",
    marca: "Alienware",
    loja: "guaira",
    servicos: ["Reparo Avançado Gamer", "Limpeza e Desoxidação", "Troca de Tela High-Hz", "Upgrade RAM/NVMe"],
    modeloDestaque: "Alienware m15, m16, x14, x16"
  }
];

// Serviços principais completos e abrangentes
export const SERVICOS_RAW = [
  {
    slug: "assistencia-tecnica-celular-curitiba",
    nome: "Assistência Técnica de Celular Curitiba",
    h1: "Assistência Técnica Especializada de Celular em Curitiba",
    detalhes: "Conserto profissional multimarcas em Curitiba para iPhone, Samsung, Xiaomi, Motorola e Realme. Diagnóstico 100% gratuito e troca de peças em menos de 1 hora.",
    beneficio: "Atendimento expresso com garantia de 6 meses no Mercado Goes."
  },
  {
    slug: "assistencia-tecnica-iphone-curitiba",
    nome: "Assistência Técnica iPhone Curitiba",
    h1: "Assistência Técnica Especializada Apple iPhone em Curitiba",
    detalhes: "Especialistas em conserto de iPhone em Curitiba. Troca de tela original e primeira linha, bateria com saúde 100%, troca de tampa traseira a laser, Face ID e placa.",
    beneficio: "Técnicos certificados Apple com ferramental de alta precisão."
  },
  {
    slug: "assistencia-tecnica-samsung-curitiba",
    nome: "Assistência Técnica Samsung Curitiba",
    h1: "Assistência Técnica Especializada Samsung Galaxy em Curitiba",
    detalhes: "Reparo rápido para smartphones e tablets Samsung Galaxy Linha S, A, Note e Z Fold. Troca de display Super AMOLED original, bateria e entrada de carga.",
    beneficio: "Peças originais homologadas com teste de retenção de carga."
  },
  {
    slug: "assistencia-tecnica-xiaomi-curitiba",
    nome: "Assistência Técnica Xiaomi Curitiba",
    h1: "Assistência Técnica Especializada Xiaomi, Redmi e Poco em Curitiba",
    detalhes: "Assistência especializada em Xiaomi, Redmi e Poco em Curitiba. Troca de tela touch, bateria de alta densidade, botão power e conector de carga.",
    beneficio: "Estoque próprio de peças para pronta entrega no mesmo dia."
  },
  {
    slug: "assistencia-tecnica-motorola-curitiba",
    nome: "Assistência Técnica Motorola Curitiba",
    h1: "Assistência Técnica Especializada Motorola Moto G e Edge em Curitiba",
    detalhes: "Conserto urgente de celulares Motorola Moto G e Moto Edge em Curitiba. Substituição de telas com brilho impecável, baterias e recuperação de sistema.",
    beneficio: "Diagnóstico gratuito e sem taxa de orçamento."
  },
  {
    slug: "assistencia-tecnica-notebook-curitiba",
    nome: "Assistência Técnica Notebook Curitiba",
    h1: "Assistência Técnica Especializada em Notebooks em Curitiba",
    detalhes: "Manutenção e conserto de notebooks Dell, Lenovo, Acer, HP, ASUS e Vaio em Curitiba. Formatação, upgrade de SSD NVMe, limpeza técnica e reparo de placa-mãe.",
    beneficio: "Aumente a velocidade do seu notebook em até 10x com SSD."
  },
  {
    slug: "assistencia-tecnica-computador-curitiba",
    nome: "Assistência Técnica Computador Curitiba",
    h1: "Assistência Técnica de Computadores e Desktops em Curitiba",
    detalhes: "Conserto de computadores de mesa, PCs gamers e workstations em Curitiba. Diagnóstico de fontes, placas de vídeo, memória RAM e formatação com backup.",
    beneficio: "Montagem, organizacao de cabos e teste de estresse de estabilidade."
  },
  {
    slug: "assistencia-tecnica-tablet-curitiba",
    nome: "Assistência Técnica Tablet Curitiba",
    h1: "Assistência Técnica de Tablets e iPads em Curitiba",
    detalhes: "Conserto de iPads e tablets Android (Samsung, Lenovo, Xiaomi). Troca de vidro touch, bateria estufada, conector de carga e restauração de sistema.",
    beneficio: "Conserto de telas grandes com calibração de toque precisa."
  },
  {
    slug: "troca-de-tela-curitiba",
    nome: "Troca de Tela Curitiba",
    h1: "Troca de Tela de Celular e Smartphone em Curitiba",
    detalhes: "Substituição expressa de tela quebrada, trincada ou sem imagem. Telas OLED, AMOLED, LCD e Incell de máxima definição com garantia de 6 meses.",
    beneficio: "Instalação na hora em menos de 45 minutos."
  },
  {
    slug: "troca-de-bateria-curitiba",
    nome: "Troca de Bateria Curitiba",
    h1: "Troca de Bateria de Celular e Smartphone em Curitiba",
    detalhes: "Celular descarregando rápido, estufado ou desligando com 30%? Trocamos a bateria do seu iPhone, Samsung, Xiaomi ou Motorola por uma nova certificada.",
    beneficio: "Saúde 100% restabelecida sem riscos de sobreaquecimento."
  },
  {
    slug: "troca-de-conector-de-carga",
    nome: "Troca de Conector de Carga",
    h1: "Reparo e Troca de Conector de Carga de Celular em Curitiba",
    detalhes: "Mau contato ao carregar, cabo que solta ou entrada queimada? Trocamos o conector USB-C, Lightning ou Micro-USB com solda industrial perfeita.",
    beneficio: "Restabelecimento de carregamento rápido em poucos minutos."
  },
  {
    slug: "troca-de-vidro",
    nome: "Troca de Vidro",
    h1: "Troca de Vidro Frontal de Celular Mantendo Display Original",
    detalhes: "Seu touch e imagem funcionam perfeitamente mas o vidro trincou? Trocamos apenas o vidro externo laminado mantendo a sua tela original de fábrica com economia de até 50%.",
    beneficio: "Conserve o display original e pague mais barato."
  },
  {
    slug: "troca-de-display",
    nome: "Troca de Display",
    h1: "Troca de Display Completo de Celular e Notebook",
    detalhes: "Tela com manchas pretas, linhas coloridas ou completamente apagada? Trocamos o conjunto de display completo com ajuste de brilho e True Tone.",
    beneficio: "Imagem 100% nova e sem imperfeições visuais."
  },
  {
    slug: "recuperacao-de-celular-molhado",
    nome: "Recuperação de Celular Molhado",
    h1: "Desoxidação e Recuperação de Celular que Caiu na Água em Curitiba",
    detalhes: "Aparelho caiu no vaso, piscina ou tomou chuva? Realizamos banho ultrassônico de desoxidação de emergência em placa-mãe para salvar o celular e seus arquivos.",
    beneficio: "Alta taxa de sucesso na recuperação técnica de circuitos."
  },
  {
    slug: "desoxidacao",
    nome: "Desoxidação",
    h1: "Desoxidação Química Profissional de Placa de Celular e Notebook",
    detalhes: "Tratamento em cuba química ultrassônica para remover oxidação, sujeira e corrosão de componentes eletrônicos sensíveis.",
    beneficio: "Evita curtos-circuitos irreversíveis na placa."
  },
  {
    slug: "atualizacao-de-software",
    nome: "Atualização de Software",
    h1: "Atualização e Reinstalação de Software para Android e iOS",
    detalhes: "Celular travando na logo, lento, dando erro de aplicativos ou com loop infinito? Reinstalamos o sistema oficial com limpeza de erros e segurança.",
    beneficio: "Aparelho rodando fluido como novo de fábrica."
  },
  {
    slug: "formatacao",
    nome: "Formatação",
    h1: "Formatação Profissional de Celular, Notebook e PC em Curitiba",
    detalhes: "Formatação completa com remoção de vírus, instalação de drivers atualizados, pacote de programas essenciais e otimização de inicialização.",
    beneficio: "Eliminação total de malwares, vírus e lentidões."
  },
  {
    slug: "backup",
    nome: "Backup de Arquivos",
    h1: "Serviço de Backup Seguro de Dados e Fotos de Celular",
    detalhes: "Cópia de segurança completa de fotos, vídeos, contatos, conversas de WhatsApp e arquivos pessoais para nuvem, pendrive ou computador.",
    beneficio: "Segurança total contra perda acidental de memórias valiosas."
  },
  {
    slug: "recuperacao-de-dados",
    nome: "Recuperação de Dados",
    h1: "Recuperação de Dados de Celulares e Notebooks Danificados",
    detalhes: "Recuperação avançada de arquivos em celulares quebrados, queimados ou com tela destruída. Sigilo profissional e extrator de memória de hardware.",
    beneficio: "Recupere suas fotos e documentos importantes mesmo em aparelhos inoperantes."
  },
  {
    slug: "configuracao-android",
    nome: "Configuração Android",
    h1: "Configuração, Migração e Otimização de Celular Android",
    detalhes: "Transferência de dados do aparelho antigo para o novo, configuração de Conta Google, e-mail, biometria e aplicativos bancários.",
    beneficio: "Seu celular pronto para uso sem complicações."
  },
  {
    slug: "configuracao-iphone",
    nome: "Configuração iPhone",
    h1: "Configuração de Apple ID, iCloud e Transferência de Dados iPhone",
    detalhes: "Migração rápida pelo Quick Start Apple, configuração de backup do iCloud, senhas, chaveiros e contas bancárias com total privacidade.",
    beneficio: "Migração completa em poucos minutos sem perder nenhum dado."
  },
  {
    slug: "limpeza-interna",
    nome: "Limpeza Interna e Troca de Pasta Térmica",
    h1: "Limpeza Interna Preventiva para Celular, Notebook e PC Gamer",
    detalhes: "Remoção de poeira e sujeiras internas, desobstrução de coolers e aplicação de pasta térmica de alta condutividade (prata/massa térmica).",
    beneficio: "Reduz a temperatura em até 20°C e evita desligamentos."
  },
  {
    slug: "troca-alto-falante",
    nome: "Troca de Alto Falante",
    h1: "Troca de Alto Falante Auricular e Viva-Voz de Celular",
    detalhes: "Som baixo, ruidoso, chiando ou mudo durante ligações e músicas? Trocamos o módulo de alto falante por um novo de alta fidelidade sonora.",
    beneficio: "Áudio nítido e potente restabelecido."
  },
  {
    slug: "troca-microfone",
    nome: "Troca de Microfone",
    h1: "Troca de Microfone de Chamada e Áudio de WhatsApp",
    detalhes: "Pessoas não te escutam em ligações ou nos áudios do WhatsApp? Trocamos o microfone SMDs da placa com alinhamento perfeito.",
    beneficio: "Sua voz ouvida com total clareza."
  },
  {
    slug: "troca-camera",
    nome: "Troca de Câmera e Lente Traseira/Frontal",
    h1: "Substituição de Módulo de Câmera e Troca de Vidro de Lente",
    detalhes: "Câmera embaçada, tremendo, foca errado ou vidro da lente quebrou? Trocamos a lente trincada ou o módulo de sensor completo.",
    beneficio: "Fotos e vídeos nitidíssimos em 4K/FHD novamente."
  },
  {
    slug: "troca-tampa-traseira",
    nome: "Troca de Tampa Traseira",
    h1: "Troca de Tampa Traseira de Vidro e Alumínio em Curitiba",
    detalhes: "Traseira do iPhone ou Samsung trincada? Trocamos a tampa de vidro usando tecnologia de remoção de cola a laser sem abrir o aparelho desnecessariamente.",
    beneficio: "Acabamento impecável idêntico ao novo de fábrica."
  },
  {
    slug: "face-id",
    nome: "Reparo de Face ID",
    h1: "Conserto de Face ID Desativado em iPhone em Curitiba",
    detalhes: "Mensagem de 'Face ID Indisponível' ou erro de altura? Realizamos o alinhamento de fita dot projector e sensor infravermelho de precisão.",
    beneficio: "Reconhecimento facial rápido restaurado com segurança."
  },
  {
    slug: "touch-id",
    nome: "Reparo de Touch ID e Botão Home",
    h1: "Reparo de Leitor de Biometria e Touch ID de Celular",
    detalhes: "Biometria parou de ler a digital ou botão home não responde? Substituição e calibração de sensor biométrico.",
    beneficio: "Desbloqueio seguro por digital reativado."
  },
  {
    slug: "conserto-ipad",
    nome: "Conserto de iPad",
    h1: "Assistência Técnica Especializada em Apple iPad em Curitiba",
    detalhes: "Conserto de iPad Air, iPad Pro, iPad Mini e iPad padrão. Troca de vidro touch, display, bateria, conector de carga e reparo de placa.",
    beneficio: "Ferramental exclusivo para abertura e vedação de tablets Apple."
  },
  {
    slug: "conserto-apple-watch",
    nome: "Conserto de Apple Watch",
    h1: "Assistência Técnica de Apple Watch em Curitiba",
    detalhes: "Troca de vidro trincado, display touch, bateria estufada e vedação contra água para Apple Watch Series 3 a Ultra 2.",
    beneficio: "Reparo delicado de smartwatch com precisão milimétrica."
  },
  {
    slug: "conserto-notebook-gamer",
    nome: "Conserto de Notebook Gamer",
    h1: "Assistência Técnica de Notebook Gamer em Curitiba",
    detalhes: "Manutenção de alta performance para Acer Nitro, Dell G15, Lenovo Legion, ASUS ROG, Avell e MSI. Reballing BGA, recondicionamento de placa de vídeo e repaste.",
    beneficio: "Performance máxima de FPS mantida sem thermal throttling."
  },
  {
    slug: "conserto-macbook",
    nome: "Conserto de MacBook",
    h1: "Assistência Técnica Especializada em Apple MacBook em Curitiba",
    detalhes: "Conserto de MacBook Air e MacBook Pro M1, M2, M3 e Intel. Reparo de placa lógica, troca de tela Retina, teclado, trackpad e bateria.",
    beneficio: "Orçamento até 60% mais acessível que a autorizada."
  }
];

// FAQ Geral / Base
export const FAQ_BASE = [
  { q: "O orçamento é gratuito?", a: "Sim! Na SUNCELL, o diagnóstico é 100% gratuito e sem compromisso. Você traz o seu celular em uma de nossas duas lojas (Guaíra ou Alto Boqueirão), nós analisamos as falhas e te passamos o preço exato. Você só paga se autorizar e o serviço for executado com sucesso." },
  { q: "Quanto tempo demora o conserto do celular?", a: "Serviços mais frequentes como Troca de Tela e Troca de Bateria costumam ficar prontos de forma expressa, no mesmo dia, geralmente em menos de 2 horas. Reparos avançados de placa exigem análise mais técnica de microsoldagem e podem levar de 24h a 72h." },
  { q: "Quais são as formas de pagamento aceitas?", a: "Facilitamos o pagamento em dinheiro, PIX ou parcelado nos principais cartões de crédito. Consulte nossas condições de parcelamento sem juros direto na loja." },
  { q: "As peças utilizadas são originais?", a: "Trabalhamos com opções de telas e componentes importados de altíssima qualidade (linha premium/primeira linha com especificações idênticas às originais) e também telas originais de fábrica, a depender do modelo e da preferência do cliente. Explicamos com total transparência cada opção antes do conserto." },
  { q: "Preciso agendar horário para ser atendido?", a: "Não é necessário agendamento! Você pode comparecer diretamente em qualquer uma de nossas lojas dentro do Mercado Goes (Guaíra ou Alto Boqueirão), onde temos amplo estacionamento gratuito e segurança privada para você e seu aparelho." },
  { q: "Como funciona a garantia do conserto?", a: "Todos os nossos serviços de assistência técnica contam com garantia legal de 90 dias cobrindo defeitos de fabricação dos componentes substituídos. Nossa garantia é válida mediante apresentação da ordem de serviço nas nossas lojas." }
];

// GERADOR DE CONTEÚDO DINÂMICO EXCLUSIVO PARA GARANTIR 100% SEO EXCLUSIVO (SEM DUPLICIDADE)
export function getBairrosPages(): PageData[] {
  return BAIRROS_RAW.map((b) => {
    const slug = b.nome.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    const lojaDest = LOJAS.find((l) => l.id === b.loja)!;
    
    // Parágrafos únicos combinando localização, marcos de referência, rotas e proximidade com as lojas SUNCELL
    let intro = `Se você está precisando de assistência técnica de celular no bairro ${b.nome}, conte com o atendimento premium da SUNCELL! Localizado na região ${b.regiao} de Curitiba, o bairro ${b.nome} (${b.marcos}) está na nossa área de cobertura direta. Nossa assistência técnica especializada é de altíssima confiança para moradores locais. Consertamos smartphones de todas as marcas com diagnóstico gratuito, rapidez no atendimento e garantia. O ponto mais próximo e cômodo para você é a nossa unidade ${lojaDest.nome}, localizada no Mercado Goes. Você pode trazer seu celular diretamente ou solicitar orçamento online via WhatsApp de forma super prática.`;

    let title = `Assistência Técnica de Celular no ${b.nome} Curitiba | SUNCELL`;
    let description = `Precisando consertar celular no ${b.nome}, Curitiba? Troca de tela, bateria, placa de iPhone, Samsung, Xiaomi e Motorola na SUNCELL. Orçamento gratuito!`;

    let faq = [
      {
        q: `Vocês consertam celular de moradores do ${b.nome}?`,
        a: `Sim, atendemos com total prioridade toda a comunidade do ${b.nome}! Como nossa unidade fica bem próxima, você pode vir pessoalmente até a SUNCELL ou agendar a entrega do seu smartphone para conserto expresso no mesmo dia.`
      },
      {
        q: `Quanto custa trocar a tela ou bateria de um celular vindo do ${b.nome}?`,
        a: `O valor do conserto depende especificamente da marca e do modelo do seu aparelho. O diagnóstico na SUNCELL é 100% gratuito. Você pode enviar uma mensagem no WhatsApp informando o modelo do celular para receber uma estimativa imediata para o ${b.nome}.`
      },
      {
        q: `Como faço para chegar à SUNCELL a partir do ${b.nome}?`,
        a: `Nossas lojas ficam estrategicamente localizadas dentro das unidades do Mercado Goes no Guaíra e no Alto Boqueirão. Para quem está no ${b.marcos}, o trajeto é rápido e conta com estacionamento gratuito e seguro no local.`
      },
      ...FAQ_BASE.slice(0, 3)
    ];

    // OVERRIDES DE ALTO DESEMPENHO SEO / SEMÂNTICA
    if (b.nome === "Parolin") {
      title = "Assistência Técnica de Celular no Parolin Curitiba | Conserto Expresso | SUNCELL";
      description = "Procurando conserto de celular no Parolin, Curitiba? Troca de tela, bateria e placa de iPhone, Samsung e Xiaomi na SUNCELL (Guaíra - Mercado Goes). Diagnóstico Grátis!";
      intro = `Se você mora ou trabalha no bairro Parolin e precisa de assistência técnica de celular de alta confiança, a SUNCELL é a sua melhor escolha em Curitiba! Situado de forma adjacente ao Prado Velho, Linha Verde e TRE, o Parolin está a apenas 3 minutos da nossa loja matriz SUNCELL Guaíra, localizada com total conforto e segurança dentro do Mercado Goes. Oferecemos diagnósticos 100% gratuitos e reparos expressos no mesmo dia para iPhone, Samsung Galaxy, Xiaomi Redmi, Motorola e muito mais. Conte com a comodidade de estacionar gratuitamente no Mercado Goes enquanto nossa equipe certificada de técnicos especializados restaura o seu smartphone com componentes de primeira linha e garantia de 90 dias.`;
      faq = [
        {
          q: "Como faço para levar meu celular do Parolin para a SUNCELL?",
          a: "Nossa loja fica a poucos minutos do Parolin, dentro do Mercado Goes do Guaíra. Basta acessar a Avenida Wenceslau Braz ou a Linha Verde. Oferecemos amplo estacionamento gratuito com segurança, tornando a sua visita extremamente prática."
        },
        {
          q: "Vocês consertam celulares do Parolin na hora?",
          a: "Sim! Troca de telas, baterias e conectores de carga são efetuados em até 1 hora de forma expressa. Enquanto você aproveita para realizar compras no Mercado Goes, nossos técnicos deixam o seu smartphone novinho em folha."
        },
        {
          q: "Quais são as garantias dadas no reparo de celular para moradores do Parolin?",
          a: "Damos garantia completa de 90 dias em todas as peças aplicadas e na mão de obra. Fornecemos nota fiscal e ordem de serviço detalhada para o seu total conforto e segurança jurídica."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    } else if (b.nome === "Alto Boqueirão") {
      title = "Assistência Técnica de Celular no Alto Boqueirão Curitiba | SUNCELL";
      description = "Conserto de celular no Alto Boqueirão, Curitiba. Troca de tela, bateria e placa de celular na SUNCELL dentro do Mercado Goes. Orçamento grátis e garantia!";
      intro = `Procurando a melhor assistência técnica de celular no Alto Boqueirão em Curitiba? A SUNCELL está estrategicamente localizada de forma física e confortável dentro do Mercado Goes da Rua Pastor Antônio Polito, 1805, bem no coração do Alto Boqueirão (próximo ao Zoológico e divisas com Sítio Cercado e Ganchinho). Atendemos com extrema dedicação e agilidade para serviços de troca de tela trincada, substituição de bateria com saúde comprometida, conectores de carga e reparos eletrônicos de placa-mãe. Aqui você usufrui de diagnóstico totalmente gratuito na hora, facilidade de estacionamento e toda a segurança que você merece para deixar seu celular nas mãos de técnicos especialistas e certificados.`;
      faq = [
        {
          q: "Qual é o diferencial da SUNCELL Alto Boqueirão?",
          a: "Nossa loja física está instalada dentro do Mercado Goes da Rua Pastor Antônio Polito. Isso significa que você tem acesso a estacionamento grátis e seguro, ambiente climatizado e pode deixar seu celular para conserto expresso na hora em que faz suas compras."
        },
        {
          q: "A unidade Alto Boqueirão conserta quais marcas de celular?",
          a: "Consertamos de forma profissional aparelhos Apple (iPhone 11, 12, 13, 14, 15, Pro, Max), Samsung Galaxy, Motorola, Xiaomi (Redmi e Poco) e LG. Temos grande estoque local de peças originais e premium."
        },
        {
          q: "O orçamento é cobrado na loja do Alto Boqueirão?",
          a: "De forma alguma! O diagnóstico é 100% grátis e sem compromisso. Só realizamos o serviço de reparo após a sua total aprovação de valores e prazos."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    } else if (b.nome === "Fazendinha") {
      title = "Assistência Técnica de Celular no Fazendinha Curitiba | SUNCELL";
      description = "Precisando de conserto de celular no Fazendinha, Curitiba? Troca de tela, bateria e placa na SUNCELL (unidade Guaíra - Mercado Goes). Orçamento grátis e entrega rápida!";
      intro = `Moradores do bairro Fazendinha que buscam assistência técnica de celular de referência absoluta em Curitiba encontram na SUNCELL a parceria perfeita! Localizado próximo ao Terminal Fazendinha e à Rua da Cidadania, o bairro conta com fácil conexão direta à nossa loja matriz no Guaíra, situada dentro do Mercado Goes (Rua Maria Moscardi Fanini, 261). Somos líderes especializados em reparos rápidos e precisos para celulares Apple iPhones, Samsung Galaxy, Motorola e Xiaomi. Oferecemos diagnóstico gratuito e sem compromisso, com atendimento físico presencial com estacionamento gratuito e segurança monitorada no local.`;
      faq = [
        {
          q: "Moro no Fazendinha, qual a unidade mais próxima?",
          a: "A nossa unidade do Guaíra, localizada dentro do Mercado Goes (Rua Maria Moscardi Fanini, 261), é super próxima ao Fazendinha. O trajeto é muito rápido de carro, Uber ou ônibus, com estacionamento amplo e totalmente gratuito no local."
        },
        {
          q: "Quanto tempo demora o conserto de um aparelho vindo do Fazendinha?",
          a: "Trocas de tela e bateria demoram em média 1 hora. Serviços mais complexos de placa são avaliados em nosso laboratório central e geralmente resolvidos no mesmo dia ou em até 48 horas."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    }

    return {
      type: "bairro",
      slug,
      nome: b.nome,
      regiao: b.regiao,
      lojaMaisProxima: b.loja as "guaira" | "boqueirao",
      h1: `Assistência Técnica de Celular no ${b.nome}`,
      title,
      description,
      intro,
      faq
    };
  });
}

export function getCidadesPages(): PageData[] {
  return CIDADES_RAW.map((c) => {
    const slug = c.nome.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    const lojaDest = LOJAS.find((l) => l.id === c.loja)!;
    
    let intro = `Procurando assistência técnica de celular em ${c.nome}? A SUNCELL é a solução ideal para você que reside nesta importante cidade da Região Metropolitana de Curitiba (${c.marcos}). Sabemos que encontrar técnicos de confiança e especializados em iPhone, Samsung, Xiaomi e Motorola pode ser um desafio na região. Por isso, oferecemos um serviço profissional de alta qualidade com atendimento direto na nossa loja ${lojaDest.nome}, muito bem localizada dentro do Mercado Goes. Diagnóstico gratuito, agilidade expressa com conserto no mesmo dia e garantia total no reparo.`;

    let title = `Assistência Técnica de Celular em ${c.nome} - PR | SUNCELL`;
    let description = `Conserto de celular em ${c.nome}. Troca de tela, bateria, placa para iPhone, Samsung, Xiaomi e Motorola. Diagnóstico grátis e garantia na SUNCELL.`;

    let faq = [
      {
        q: `Como os moradores de ${c.nome} podem consertar seus celulares na SUNCELL?`,
        a: `Atendemos muitos clientes de ${c.nome} que nos visitam diretamente em nossa loja física, que fica a poucos minutos de distância. Você conta com toda a infraestrutura, estacionamento amplo gratuito e a segurança do Mercado Goes.`
      },
      {
        q: `Qual é o prazo para conserto de celular vindo de ${c.nome}?`,
        a: `A maioria dos serviços, como substituição de telas e baterias, é realizada em menos de 2 horas. Assim, mesmo vindo de ${c.nome}, você pode aguardar o conserto ser finalizado na hora ou receber seu smartphone de volta no mesmo dia.`
      },
      ...FAQ_BASE.slice(0, 3)
    ];

    // OVERRIDES DE ALTO DESEMPENHO SEO / SEMÂNTICA
    if (c.nome === "Curitiba") {
      title = "Assistência Técnica de Celular em Curitiba | Conserto Rápido e Grátis | SUNCELL";
      description = "Melhor assistência técnica de celular em Curitiba. Troca de tela, bateria, placa e conectores com orçamento gratuito e garantia. Atendimento expresso nas duas lojas!";
      intro = `Seja muito bem-vindo à SUNCELL, a sua assistência técnica de celular definitiva em Curitiba, capital do Paraná! Atendemos com maestria e dominância semântica todas as regiões da capital por meio de nossas duas modernas unidades físicas localizadas no Guaíra e no Alto Boqueirão, ambas dentro do tradicional Mercado Goes. Somos reconhecidos nacionalmente e localmente pela nossa transparência absoluta: o diagnóstico do seu smartphone é 100% gratuito e o conserto de tela ou bateria é realizado de forma expressa em menos de 1 hora. Oferecemos tecnologia de ponta em microssoldagem de placa e desoxidação para recuperar aparelhos que outras assistências de Curitiba consideram perdidos.`;
      faq = [
        {
          q: "Quais são os principais diferenciais da SUNCELL em Curitiba?",
          a: "Nossos pilares fundamentais são a velocidade expressa de conserto (em menos de 1 hora), diagnóstico 100% gratuito de verdade e a comodidade de estarmos sediados de forma segura e fácil dentro das lojas do Mercado Goes (Guaíra e Alto Boqueirão) com estacionamento gratuito de alto nível."
        },
        {
          q: "Como posso contatar os técnicos da SUNCELL em Curitiba?",
          a: "Você pode contatar nossos canais oficiais de atendimento rápido via WhatsApp. Respondemos em poucos instantes com orçamentos estimativos rápidos de troca de baterias, telas e outros reparos."
        },
        {
          q: "A SUNCELL cobre todas as marcas de celular em Curitiba?",
          a: "Sim, somos especialistas em conserto de iPhone (Apple), Samsung Galaxy (telas Super AMOLED e linha S), Motorola Moto G e Edge, Xiaomi (Redmi e Poco) e LG. Temos laboratório completo equipado com as ferramentas de microsoldagem de maior precisão do mercado."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    } else if (c.nome === "Araucária") {
      title = "Assistência Técnica de Celular em Araucária | Conserto de Confiança | SUNCELL";
      description = "Procurando conserto de celular em Araucária? A SUNCELL oferece troca de tela, bateria e placa com diagnóstico gratuito, atendimento rápido e garantia de 90 dias. Confira!";
      intro = `Para quem busca assistência técnica de celular em Araucária de altíssimo nível e segurança, a SUNCELL oferece a melhor cobertura e conveniência! Situada na região sul metropolitana, Araucária está a poucos minutos de distância de nossas unidades físicas SUNCELL Alto Boqueirão e Guaíra. Oferecemos um canal direto e super ágil de atendimento físico presencial em nossas lojas. Esqueça orçamentos demorados e preços abusivos: na SUNCELL, a análise do seu iPhone, Samsung, Xiaomi ou Motorola é feita gratuitamente e sem compromisso, aplicando peças de primeira linha com garantia legal de 3 meses para todos os serviços executados.`;
      faq = [
        {
          q: "Qual unidade da SUNCELL fica mais próxima de Araucária?",
          a: "Tanto a unidade do Guaíra quanto a do Alto Boqueirão ficam a poucos minutos de distância de carro ou transporte público a partir de Araucária. Ambas estão localizadas em pontos de fácil acesso dentro do Mercado Goes com estacionamento totalmente gratuito."
        },
        {
          q: "Vocês consertam placa de celular de moradores de Araucária?",
          a: "Sim! Somos um dos poucos laboratórios especializados da região com infraestrutura de microsoldagem para reparos avançados de placas que não ligam, sofreram curto-circuito ou contato com água."
        },
        {
          q: "Quais são as formas de pagamento aceitas para clientes de Araucária?",
          a: "Aceitamos pagamentos via PIX, dinheiro e parcelamos em até 12x em todos os cartões de crédito. Facilitamos ao máximo para que você tenha seu celular restaurado rapidamente."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    }

    return {
      type: "cidade",
      slug,
      nome: c.nome,
      lojaMaisProxima: c.loja as "guaira" | "boqueirao",
      h1: `Assistência Técnica de Celular em ${c.nome}`,
      title,
      description,
      intro,
      faq
    };
  });
}

export function getAparelhosPages(): PageData[] {
  return APARELHOS_RAW.map((a) => {
    const intro = `Se você possui um celular ${a.nome} e está precisando de conserto de confiança em Curitiba, a SUNCELL é a assistência técnica especializada ideal. Atendemos diariamente uma enorme variedade de modelos, com especialização em reparos complexos para a marca ${a.marca}, incluindo ${a.servicos.join(", ")}. Nossos técnicos possuem treinamento específico para lidar com as particularidades de hardware da ${a.marca}, como displays ${a.slug === "samsung-galaxy" ? "AMOLED de alta densidade" : "IPS/OLED de alta sensibilidade"} e sistemas de câmera modernos. Atendemos com extrema dedicação nas nossas duas lojas em Curitiba, garantindo o melhor preço, peças selecionadas e garantia em cada conserto de ${a.nome}.`;

    const title = `Assistência Técnica especializada em ${a.nome} Curitiba | SUNCELL`;
    const description = `Conserto de celular ${a.nome} em Curitiba. Troca de tela, bateria, placa, tampa e conectores. Orçamento grátis no WhatsApp nas lojas Guaíra e Alto Boqueirão.`;

    const faq = [
      {
        q: `Quais modelos de ${a.nome} vocês consertam?`,
        a: `Damos assistência completa para praticamente todos os modelos da marca, como ${a.modeloDestaque}. Temos grande estoque de peças para garantir conserto expresso.`
      },
      {
        q: `Quanto tempo demora a troca de tela ou bateria do ${a.nome}?`,
        a: `Na SUNCELL, realizamos a substituição no mesmo dia! Baterias e telas costumam levar cerca de 1 hora a 1 hora e meia, dependendo do design do aparelho.`
      },
      ...FAQ_BASE.slice(3, 6)
    ];

    return {
      type: "aparelho",
      slug: a.slug,
      nome: a.nome,
      marca: a.marca,
      lojaMaisProxima: a.loja as "guaira" | "boqueirao",
      h1: `Assistência Técnica especializada em ${a.nome}`,
      title,
      description,
      intro,
      faq
    };
  });
}

export function getServicosPages(): PageData[] {
  return SERVICOS_RAW.map((s) => {
    const intro = `Procurando o melhor serviço de ${s.nome} de celular em Curitiba? A SUNCELL oferece tecnologia de ponta e técnicos certificados para efetuar o conserto do seu smartphone de forma ágil e segura. O serviço de ${s.nome} (${s.h1}) é essencial para restaurar o perfeito funcionamento do seu aparelho, seja ele um iPhone, Samsung, Xiaomi, Motorola ou LG. Executamos este reparo com componentes selecionados, fornecendo garantia de funcionamento e total transparência. Visite nossas unidades no Mercado Goes no Guaíra ou no Alto Boqueirão para uma avaliação gratuita na hora!`;

    const title = `${s.nome} de Celular em Curitiba | SUNCELL Assistência`;
    const description = `${s.nome} de celular em Curitiba com diagnóstico gratuito e garantia. Atendemos iPhone, Samsung, Xiaomi, Motorola e LG. Faça seu orçamento!`;

    const faq = [
      {
        q: `Como sei se meu celular precisa de uma ${s.nome}?`,
        a: `${s.detalhes} ${s.beneficio} Venha fazer uma avaliação totalmente gratuita para que possamos testar as correntes e componentes antes de realizar a substituição.`
      },
      {
        q: `Vocês dão garantia no serviço de ${s.nome}?`,
        a: `Sim, oferecemos garantia de 90 dias em toda a nossa mão de obra e nas peças substituídas. Sua satisfação e a segurança de seu smartphone são nosso compromisso.`
      },
      ...FAQ_BASE.slice(0, 3)
    ];

    return {
      type: "servico",
      slug: s.slug,
      nome: s.nome,
      lojaMaisProxima: "guaira", // default
      h1: s.h1,
      title,
      description,
      intro,
      faq
    };
  });
}

export function getLojasPages(): PageData[] {
  return [
    {
      type: "loja",
      slug: "guaira",
      nome: "Guaíra (Mercado Goes)",
      lojaMaisProxima: "guaira",
      h1: "Assistência Técnica de Celular no Guaíra | SUNCELL Curitiba",
      title: "Conserto de Celular no Guaíra Curitiba (Mercado Goes) - SUNCELL PRO",
      description: "Precisando consertar seu celular no Guaíra, Portão ou Lindóia? A SUNCELL oferece troca de tela, bateria e placa com orçamento rápido e garantia no Mercado Goes!",
      intro: "A unidade SUNCELL Guaíra está estrategicamente localizada dentro do Mercado Goes (Rua Maria Moscardi Fanini, 261), oferecendo o mais alto padrão de qualidade em conserto de celulares para as regiões do Guaíra, Portão, Lindóia, Fanny, Parolin e Água Verde. Com estacionamento gratuito e segurança privada do supermercado, você pode fazer suas compras enquanto nossa equipe de técnicos especializados realiza a substituição de telas de alta resolução, baterias certificadas pela Anatel, conectores de carga e reparo avançado de placa-mãe. Dominamos o conserto de aparelhos das marcas Apple (iPhone), Samsung Galaxy, Motorola, Xiaomi (Redmi e Poco) e LG. Venha tomar um café conosco e faça uma avaliação gratuita na hora!",
      faq: [
        {
          q: "Onde fica exatamente a loja SUNCELL no Guaíra?",
          a: "Nossa unidade fica convenientemente dentro do Mercado Goes, na Rua Maria Moscardi Fanini, 261. É uma localização de fácil acesso com amplo estacionamento grátis e segurança para você consertar seu aparelho sem preocupações."
        },
        {
          q: "Vocês consertam celulares na hora na unidade Guaíra?",
          a: "Sim! A maioria dos serviços mais comuns, como troca de tela e troca de bateria, são finalizados em menos de 1 hora. Enquanto você faz suas compras no Mercado Goes, nós consertamos o seu smartphone!"
        },
        {
          q: "Quais bairros são atendidos de forma expressa pela unidade Guaíra?",
          a: "Atendemos diretamente moradores dos bairros Guaíra, Portão, Lindóia, Fanny, Água Verde, Parolin, Prado Velho, Batel, Rebouças e Centro, que podem nos visitar de forma rápida e segura no Mercado Goes."
        },
        {
          q: "O diagnóstico do celular na SUNCELL Guaíra é gratuito?",
          a: "Sim, o orçamento é 100% gratuito e feito sem compromisso! Testamos as correntes, conectores, bateria e placa do seu celular na hora para apresentar a melhor solução."
        },
        {
          q: "Qual a garantia oferecida nos serviços da loja do Guaíra?",
          a: "Damos garantia completa de 90 dias (3 meses) em toda a mão de obra e peças aplicadas, cobrindo qualquer defeito de fabricação ou funcionamento pós-reparo."
        }
      ]
    },
    {
      type: "loja",
      slug: "boqueirao",
      nome: "Alto Boqueirão (Mercado Goes)",
      lojaMaisProxima: "boqueirao",
      h1: "Assistência Técnica de Celular no Alto Boqueirão | SUNCELL Curitiba",
      title: "Conserto de Celular no Alto Boqueirão (Mercado Goes) - SUNCELL PRO",
      description: "Procurando assistência de celular no Alto Boqueirão, Sítio Cercado ou Boqueirão? Troca de tela, bateria e reparo de placa expresso dentro do Mercado Goes!",
      intro: "A unidade SUNCELL Alto Boqueirão está sediada de forma segura e confortável dentro do Mercado Goes (Rua Pastor Antônio Polito, 1805), sendo o ponto de referência definitivo em conserto e manutenção de celulares para moradores do Alto Boqueirão, Sítio Cercado, Boqueirão, Pinheirinho, Xaxim, Ganchinho, Umbará e também para a cidade vizinha de São José dos Pinhais. Usufrua de toda a infraestrutura com estacionamento coberto e vigilância integrada do supermercado para deixar seu celular em mãos altamente qualificadas. Realizamos diagnósticos minuciosos e consertos em tempo recorde para marcas consagradas como Samsung, Motorola, Xiaomi, LG e Apple iPhones. Traga seu aparelho e tenha um atendimento humano e especializado!",
      faq: [
        {
          q: "Como encontrar a SUNCELL no Alto Boqueirão?",
          a: "Nossa assistência técnica de celulares está instalada dentro do Mercado Goes da Rua Pastor Antônio Polito, 1805, no Alto Boqueirão. Você pode estacionar gratuitamente no pátio do supermercado e nos visitar com toda a segurança."
        },
        {
          q: "Vocês fazem reparo de placa-mãe na unidade Alto Boqueirão?",
          a: "Sim! Somos especialistas em microssoldagem e reparo avançado de placas para celulares que não ligam, não carregam ou sofreram contato com água. Dispomos de laboratório próprio de última geração para esses procedimentos."
        },
        {
          q: "A loja do Alto Boqueirão atende moradores do Sítio Cercado e Xaxim?",
          a: "Com certeza! Por estarmos em uma avenida de grande circulação na divisa de bairros, somos a opção mais rápida e cômoda para quem mora no Sítio Cercado, Xaxim, Boqueirão, Pinheirinho e Uberaba."
        },
        {
          q: "Quais são as formas de pagamento aceitas no Alto Boqueirão?",
          a: "Aceitamos cartões de crédito e débito com parcelamento facilitado em até 12x, PIX, dinheiro e link de pagamento. Facilitamos ao máximo para que você possa reaver seu celular funcionando sem estourar o orçamento."
        },
        {
          q: "Vocês realizam o diagnóstico na hora na unidade Alto Boqueirão?",
          a: "Sim! Na nossa unidade do Alto Boqueirão, realizamos o diagnóstico do seu celular na hora e sem custos. Muitas trocas de tela e bateria ficam prontas no mesmo dia em menos de 1 hora."
        }
      ]
    }
  ];
}

// Retorna todas as páginas possíveis de SEO programático
export function getTodasPaginas(): PageData[] {
  return [
    ...getBairrosPages(),
    ...getCidadesPages(),
    ...getAparelhosPages(),
    ...getServicosPages(),
    ...getLojasPages()
  ];
}

// Retorna a página pelo slug e pelo tipo de página
export function findPageBySlug(type: "bairro" | "cidade" | "aparelho" | "servico" | "loja", slug: string): PageData | undefined {
  const pages = getTodasPaginas();
  return pages.find((p) => p.type === type && p.slug === slug);
}

// Retorna o caminho de URL absoluto para cada tipo de página
export function rotaDe(p: PageData): string {
  if (p.slug === "assistencia-tecnica-curitiba") return "/assistencia-tecnica-curitiba";
  switch (p.type) {
    case "bairro":   return `/assistencia-tecnica/${p.slug}`;
    case "cidade":   return `/assistencia-tecnica-cidade/${p.slug}`;
    case "aparelho": return `/assistencia-tecnica-aparelho/${p.slug}`;
    case "servico":  return `/servico/${p.slug}`;
    case "loja":     return `/loja/${p.slug}`;
  }
}
