export interface HubPageData {
  slug: string;
  titulo: string;
  h1: string;
  subtitulo: string;
  categoria: string;
  icone: string;
  descricaoSeo: string;
  conteudoPrincipal: string;
  servicosRelacionados: string[];
  aparelhosRelacionados: string[];
  faqs: { q: string; a: string }[];
}

export const HUBS_DATA: HubPageData[] = [
  {
    slug: "celulares",
    titulo: "Hub de Assistência Técnica de Celulares em Curitiba | SUNCELL",
    h1: "Central de Serviços e Conserto de Celulares em Curitiba",
    subtitulo: "Guia completo de manutenção, peças, troca de telas, baterias e reparo de placa para smartphones.",
    categoria: "Smartphones",
    icone: "Smartphone",
    descricaoSeo: "A maior autoridade técnica em conserto de celulares em Curitiba e Região Metropolitana. Diagnóstico grátis em menos de 1h.",
    conteudoPrincipal: "A SUNCELL Assistência Técnica oferece infraestrutura completa com laboratório de microsoldagem, bancadas antiestáticas ESD e estoque local de peças originais e premium para todas as marcas de celular em Curitiba. Se o seu celular trincou a tela, não carrega, está esquentando ou caiu na água, nossa equipe resolve no mesmo dia nas lojas Guaíra e Alto Boqueirão.",
    servicosRelacionados: ["troca-de-tela-curitiba", "troca-de-bateria-curitiba", "troca-de-conector-de-carga", "recuperacao-de-celular-molhado"],
    aparelhosRelacionados: ["iphone", "samsung-galaxy", "xiaomi-redmi-poco", "motorola", "realme"],
    faqs: [
      { q: "Quais marcas de celulares são atendidas?", a: "Atendemos Apple iPhone, Samsung Galaxy, Xiaomi, Redmi, Poco, Motorola, Realme, ASUS e LG." },
      { q: "Qual o prazo médio de reparo de celular?", a: "Serviços como troca de tela e bateria demoram entre 40 minutos e 1h30 nas nossas lojas físicas." }
    ]
  },
  {
    slug: "iphone",
    titulo: "Hub Especializado Apple iPhone Curitiba | SUNCELL",
    h1: "Central Técnica Especializada em Apple iPhone Curitiba",
    subtitulo: "Troca de telas, baterias com 100% de saúde, vidro traseiro a laser, Face ID e placa lógica.",
    categoria: "Apple",
    icone: "Apple",
    descricaoSeo: "Especialistas em reparo de iPhone em Curitiba. Troca de tela, bateria, tampa traseira laser e Face ID com garantia total.",
    conteudoPrincipal: "Seu iPhone precisa de cuidados técnicos especializados. Na SUNCELL, realizamos diagnósticos avançados com osciloscópio e fontes de bancada para identificar curtos em malha secundária e principal. Efetuamos troca de vidro a laser mantendo o alinhamento de fábrica e restauração de Face ID.",
    servicosRelacionados: ["assistencia-tecnica-iphone-curitiba", "face-id", "troca-tampa-traseira", "configuracao-iphone"],
    aparelhosRelacionados: ["iphone", "conserto-ipad", "conserto-apple-watch", "conserto-macbook"],
    faqs: [
      { q: "A bateria do iPhone volta a mostrar 100% de saúde no iOS?", a: "Sim, realizamos o procedimento correto de transferência da fita BMS com programadora para não exibir aviso de peça desconhecida." },
      { q: "É possível trocar apenas o vidro traseiro do iPhone?", a: "Sim! Utilizamos máquina de laser de fibra óptica para queimar a cola original sem danificar os componentes internos do iPhone." }
    ]
  },
  {
    slug: "samsung",
    titulo: "Hub Especializado Samsung Galaxy Curitiba | SUNCELL",
    h1: "Central de Conserto Samsung Galaxy em Curitiba",
    subtitulo: "Displays Super AMOLED originais, baterias homologadas e reparo de placa linha S, A e Z Fold/Flip.",
    categoria: "Samsung",
    icone: "Smartphone",
    descricaoSeo: "Especialistas em conserto de Samsung Galaxy em Curitiba. Telas Super AMOLED, baterias e placas com garantia.",
    conteudoPrincipal: "A linha Samsung Galaxy exige telas originais de alta fidelidade de cor e brilho para manter a taxa de atualização de 120Hz e a leitora de digital sob a tela funcionando com perfeição. Dispomos de peças originais de fábrica para todas as linhas.",
    servicosRelacionados: ["assistencia-tecnica-samsung-curitiba", "troca-de-display", "troca-de-conector-de-carga"],
    aparelhosRelacionados: ["samsung-galaxy"],
    faqs: [
      { q: "A leitora de digital sob a tela continua funcionando após a troca de tela?", a: "Sim, ao utilizar telas originais ou premium homologadas, a biometria sob o display permanece 100% funcional." }
    ]
  },
  {
    slug: "xiaomi",
    titulo: "Hub Especializado Xiaomi, Redmi e Poco Curitiba | SUNCELL",
    h1: "Central de Assistência Técnica Xiaomi em Curitiba",
    subtitulo: "Reparo de bootloop, troca de tela, bateria e botão power para toda linha Xiaomi.",
    categoria: "Xiaomi",
    icone: "Smartphone",
    descricaoSeo: "Assistência de confiança para Xiaomi, Redmi e Poco em Curitiba. Peças a pronta entrega e orçamento grátis.",
    conteudoPrincipal: "Xiaomi é uma das marcas mais populares em Curitiba. Na SUNCELL temos peças em estoque para Poco X3, Poco X4, Poco X5, Redmi Note 10, Note 11, Note 12 e Note 13. Resolvemos problemas recorrentes de botão power com sensor de biometria e falhas no gerenciador de carga PMIC.",
    servicosRelacionados: ["assistencia-tecnica-xiaomi-curitiba", "atualizacao-de-software", "troca-de-bateria-curitiba"],
    aparelhosRelacionados: ["xiaomi-redmi-poco"],
    faqs: [
      { q: "Meu Xiaomi fica reiniciando na logo Mi/POCO, tem conserto?", a: "Sim, isso costuma ser defeito de firmware/software ou falha física no botão power. Diagnosticamos na hora gratuitamente." }
    ]
  },
  {
    slug: "notebook",
    titulo: "Hub de Assistência Técnica de Notebooks em Curitiba | SUNCELL",
    h1: "Central de Conserto e Manutenção de Notebooks em Curitiba",
    subtitulo: "Upgrade de SSD NVMe, limpeza técnica, troca de teclado, tela e reparo de placa-mãe.",
    categoria: "Notebooks",
    icone: "Laptop",
    descricaoSeo: "Assistência de notebooks em Curitiba para Dell, Lenovo, Acer, HP, ASUS e Vaio. Aumente a velocidade do seu notebook.",
    conteudoPrincipal: "Seu notebook está lento, esquentando demais, travando ou não liga? Na SUNCELL fazemos otimizações completas. Um simples upgrade de SSD NVMe e aumento de memória RAM transforma um notebook lento em uma máquina ultrarrápida.",
    servicosRelacionados: ["assistencia-tecnica-notebook-curitiba", "limpeza-interna", "formatacao", "backup"],
    aparelhosRelacionados: ["dell", "lenovo", "hp", "acer", "vaio", "asus"],
    faqs: [
      { q: "Quanto tempo demora para colocar SSD no notebook?", a: "O upgrade com formatação do sistema e cópia dos seus arquivos fica pronto no mesmo dia em poucas horas." }
    ]
  },
  {
    slug: "computadores",
    titulo: "Hub de Conserto de Computadores e PCs Gamers em Curitiba | SUNCELL",
    h1: "Central Técnica de Computadores e Desktops Gamers Curitiba",
    subtitulo: "Montagem, diagnóstico de hardware, fontes, placas de vídeo e otimização de sistemas.",
    categoria: "Desktops",
    icone: "Monitor",
    descricaoSeo: "Conserto de computadores de mesa e PCs Gamers em Curitiba. Diagnóstico preciso de placa de vídeo, fonte e memória.",
    conteudoPrincipal: "Prestamos assistência completa para desktops corporativos e computadores gamers em Curitiba. Testamos fontes de alimentação, placas-mãe, módulos de memória RAM com MemTest86 e placas de vídeo com FurMark.",
    servicosRelacionados: ["assistencia-tecnica-computador-curitiba", "limpeza-interna", "formatacao"],
    aparelhosRelacionados: ["alienware", "avell", "dell"],
    faqs: [
      { q: "Vocês fazem montagem e gerenciamento de cabos de PC Gamer?", a: "Sim, montamos do zero ou reorganizamos o cabeamento e fluxo de ar do seu gabinete." }
    ]
  },
  {
    slug: "apple",
    titulo: "Hub Ecossistema Apple Curitiba - iPhone, iPad, Mac, Watch | SUNCELL",
    h1: "Central de Assistência Técnica Especializada Apple em Curitiba",
    subtitulo: "Soluções completas para iPhone, iPad, Apple Watch e MacBooks com laboratório especializado.",
    categoria: "Apple",
    icone: "Apple",
    descricaoSeo: "Assistência Técnica Apple em Curitiba. Reparo especializado de iPhone, iPad, MacBook e Apple Watch.",
    conteudoPrincipal: "O ecossistema Apple exige ferramentas específicas para remoção de telas sem danificar cabos flexíveis delicados. Na SUNCELL oferecemos atendimento unificado para todos os seus dispositivos Apple.",
    servicosRelacionados: ["assistencia-tecnica-iphone-curitiba", "conserto-ipad", "conserto-apple-watch", "conserto-macbook"],
    aparelhosRelacionados: ["iphone"],
    faqs: [
      { q: "Qual o benefício de consertar na SUNCELL comparado à autorizada?", a: "Oferecemos prazos muito mais rápidos (no mesmo dia em vez de semanas) e valores até 60% menores sem perder qualidade de peças e serviço." }
    ]
  },
  {
    slug: "android",
    titulo: "Hub Especializado Sistema e Hardware Android Curitiba | SUNCELL",
    h1: "Central de Conserto e Manutenção Android em Curitiba",
    subtitulo: "Configuração, remoção de vírus, desbloqueio de contas, reparo de carga e telas.",
    categoria: "Android",
    icone: "Smartphone",
    descricaoSeo: "Assistência completa para dispositivos Android em Curitiba. Reparos de hardware e software.",
    conteudoPrincipal: "Seja Samsung, Motorola, Xiaomi ou Realme, o sistema Android oferece infinitas possibilidades que por vezes requerem suporte profissional para corrigir travamentos e lentidões.",
    servicosRelacionados: ["configuracao-android", "atualizacao-de-software", "troca-de-conector-de-carga"],
    aparelhosRelacionados: ["samsung-galaxy", "xiaomi-redmi-poco", "motorola", "realme"],
    faqs: [
      { q: "Vocês fazem backup de dados antes de formatar o Android?", a: "Sim, salvamos todas as suas fotos, documentos e conversas de WhatsApp com total segurança." }
    ]
  },
  {
    slug: "recuperacao",
    titulo: "Hub de Recuperação de Celulares Molhados e Dados | SUNCELL",
    h1: "Central de Emergência e Desoxidação de Celulares e Dados em Curitiba",
    subtitulo: "Recuperação de celulares que caíram na água, placas queimadas e fotos perdidas.",
    categoria: "Emergência",
    icone: "Droplets",
    descricaoSeo: "Celular caiu na água ou parou de ligar? Desoxidação e recuperação de dados urgente em Curitiba.",
    conteudoPrincipal: "Se o seu celular molhou, NÃO tente ligar nem colocar no carregador. Traga imediatamente para a SUNCELL Guaíra ou Alto Boqueirão para o processo imediato de banho ultrassônico.",
    servicosRelacionados: ["recuperacao-de-celular-molhado", "desoxidacao", "recuperacao-de-dados", "reparo-de-placa"],
    aparelhosRelacionados: ["iphone", "samsung-galaxy", "xiaomi-redmi-poco", "motorola"],
    faqs: [
      { q: "Colocar celular molhado no arroz realmente funciona?", a: "Não! O arroz não remove a umidade interna e permite que a oxidação destrua as trilhas da placa. O correto é a desoxidação química profissional." }
    ]
  },
  {
    slug: "troca-de-tela",
    titulo: "Hub de Troca de Tela de Celular em Curitiba | SUNCELL",
    h1: "Especialistas em Troca de Tela e Vidro de Celular em Curitiba",
    subtitulo: "Telas OLED, Super AMOLED, Incell e troca de vidro laminado mantendo o display original.",
    categoria: "Telas",
    icone: "Monitor",
    descricaoSeo: "Troca de tela de celular trincada em Curitiba. Serviço expresso no mesmo dia com garantia de 6 meses.",
    conteudoPrincipal: "A tela trincou ou ficou com linhas coloridas? Na SUNCELL oferecemos duas opções vantajosas: se o toque e a imagem funcionam, trocamos apenas o vidro com economia; se o display pifou, trocamos o módulo completo.",
    servicosRelacionados: ["troca-de-tela-curitiba", "troca-de-vidro", "troca-de-display"],
    aparelhosRelacionados: ["iphone", "samsung-galaxy", "xiaomi-redmi-poco", "motorola"],
    faqs: [
      { q: "Quanto tempo demora para trocar a tela do celular?", a: "Em média entre 40 minutos e 1 hora na nossa bancada física." }
    ]
  },
  {
    slug: "bateria",
    titulo: "Hub de Baterias de Celular e Notebook em Curitiba | SUNCELL",
    h1: "Central de Substituição de Baterias em Curitiba",
    subtitulo: "Baterias homologadas com maior autonomia e segurança contra sobrecarga.",
    categoria: "Baterias",
    icone: "Zap",
    descricaoSeo: "Troca de bateria de celular e notebook em Curitiba. Baterias novas com garantia e saúde 100%.",
    conteudoPrincipal: "Baterias possuem ciclo de vida útil. Após 2 anos de uso, a capacidade cai drasticamente. Trocamos a bateria do seu smartphone ou laptop por um componente novo, com selo de teste de voltagem.",
    servicosRelacionados: ["troca-de-bateria-curitiba", "limpeza-interna"],
    aparelhosRelacionados: ["iphone", "samsung-galaxy", "xiaomi-redmi-poco", "motorola", "dell", "lenovo"],
    faqs: [
      { q: "Como saber se a bateria precisa ser trocada?", a: "Se descarrega em poucas horas, esquenta excessivamente durante o carregamento ou empurra a tela para fora (estufamento)." }
    ]
  },
  {
    slug: "empresas",
    titulo: "Hub de Manutenção Técnica Corporativa e Frotas de Celulares | SUNCELL",
    h1: "Assistência Técnica de Celulares e Notebooks para Empresas em Curitiba",
    subtitulo: "Contratos de manutenção, faturamento via boleto, suporte prioritário e frotas corporativas.",
    categoria: "B2B / Empresas",
    icone: "Briefcase",
    descricaoSeo: "Assistência técnica de celulares e notebooks para empresas em Curitiba. Nota fiscal, faturamento e agilidade.",
    conteudoPrincipal: "Atendemos empresas, frotas corporativas, escritórios de advocacia, construtoras e e-commerce de Curitiba com suporte técnico ágil para celulares e notebooks corporativos.",
    servicosRelacionados: ["assistencia-tecnica-notebook-curitiba", "assistencia-tecnica-celular-curitiba", "formatacao", "backup"],
    aparelhosRelacionados: ["iphone", "samsung-galaxy", "dell", "lenovo"],
    faqs: [
      { q: "A SUNCELL emite Nota Fiscal Eletrônica (NF-e) para empresas?", a: "Sim, emitimos NF-e detalhada para todos os serviços prestados com faturamento corporativo." }
    ]
  }
];

export function findHubBySlug(slug: string): HubPageData | undefined {
  return HUBS_DATA.find((h) => h.slug === slug);
}
