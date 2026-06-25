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
  type: "bairro" | "cidade" | "aparelho" | "servico";
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
    foto: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGfV1tHO1xGD0Oh3N6FqOe5bmKKrWwLY1tA1yMJQxpVc7fSmUyIxRbCVFLmCyc4zH0pGZ-2yYVaMEEBNlI0Q8XiN-TmkP1T9xQ0PAgWv91mT_GBMNpCjX5_3zBudA5wrvyQTwQ=s680-w680-h510-rw",
  },
  {
    id: "boqueirao",
    nome: "SUNCELL Alto Boqueirão",
    endereco: "Dentro do Mercado Goes - R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, 81770-260",
    telefone: "(41) 99750-1961",
    whatsapp: "(41) 99750-1961",
    linkWhats: "https://api.whatsapp.com/send?phone=5541997501961&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20google.%20Preciso%20de%20um%20or%C3%A7amento!",
    maps: "https://share.google/ZzOtA47yW8m6T9fBr",
    foto: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHfh5TvshlqrQpYobBwMOSSLa9gvkhHGVJnUnVViCohXcfwzPm9izvyLaxK70_zaTgmlIqtSd6EYTPz-UH7C8e7pwlH1zswurFMP13FSxI7b8dzwxUqAiJl_9t0E5jqN_lUgpI=s680-w680-h510-rw",
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
    servicos: ["Troca de Tela", "Troca de Bateria", "Conector de Carga (Lightning/USB-C)", "Câmeras e Face ID", "Vidro Traseiro Laser"],
    modeloDestaque: "iPhone 11, 12, 13, 14, 15, Pro Max"
  },
  {
    slug: "samsung-galaxy",
    nome: "Samsung Galaxy",
    marca: "Samsung",
    loja: "boqueirao",
    servicos: ["Troca de Tela Super AMOLED", "Substituição de Bateria", "Reparo Avançado de Placa", "Conector de Carga tipo C"],
    modeloDestaque: "Linha Galaxy S (S20, S21, S22, S23, S24), Galaxy A e Note"
  },
  {
    slug: "xiaomi-redmi-poco",
    nome: "Xiaomi / Redmi / Poco",
    marca: "Xiaomi",
    loja: "guaira",
    servicos: ["Troca de Display Touch", "Troca de Bateria de Alta Capacidade", "Troca de Conector de Carga", "Reparo do Botão Power/Biometria"],
    modeloDestaque: "Redmi Note, Poco X3/X4/X5/X6, Xiaomi Mi"
  },
  {
    slug: "motorola",
    nome: "Motorola (Moto G / Edge)",
    marca: "Motorola",
    loja: "boqueirao",
    servicos: ["Troca de Tela Frontal", "Troca de Bateria Viciada", "Reparo de Entrada de Carga", "Recuperação pós-contato com água"],
    modeloDestaque: "Moto G (G9, G20, G30, G52, G54, G84) e Linha Motorola Edge"
  },
  {
    slug: "lg",
    nome: "LG",
    marca: "LG",
    loja: "guaira",
    servicos: ["Reparo de Placa Principal", "Troca de Conector de Carga", "Troca de Tela Quebrada", "Troca de Bateria"],
    modeloDestaque: "LG K41S, K51S, K61, K62, Velvet"
  }
];

// Serviços principais transversais
export const SERVICOS_RAW = [
  {
    slug: "troca-de-tela",
    nome: "Troca de Tela",
    h1: "Substituição de Tela de Celular Curitiba",
    detalhes: "Troca rápida de displays quebrados, trincados ou sem toque. Usamos telas de alta qualidade, brilho e fidelidade de cores, com garantia total.",
    beneficio: "Serviço expresso: tela nova no mesmo dia para a maioria dos modelos!"
  },
  {
    slug: "troca-de-bateria",
    nome: "Troca de Bateria",
    h1: "Troca de Bateria de Smartphone Curitiba",
    detalhes: "Bateria descarregando rápido, celular desligando sozinho ou estufado? Substituímos por baterias novas homologadas que restauram 100% da autonomia.",
    beneficio: "Garantia de segurança contra sobrecarga e aquecimento."
  },
  {
    slug: "reparo-de-placa",
    nome: "Reparo de Placa",
    h1: "Reparo de Placa Mãe de Celular em Curitiba",
    detalhes: "Especialistas em microsoldagem! Solucionamos problemas complexos de placa que outras assistências dizem não ter conserto. Aparelhos molhados, sem sinal ou que não ligam.",
    beneficio: "Maquinário de precisão de última geração."
  },
  {
    slug: "conector-de-carga",
    nome: "Reparo de Conector de Carga",
    h1: "Troca de Conector de Carga de Celular Curitiba",
    detalhes: "Mau contato ao carregar, cabo solto ou não reconhece o carregador? Trocamos a entrada de carga (USB-C, Lightning ou Micro-USB) com soldagem perfeita.",
    beneficio: "Carga rápida restabelecida imediatamente."
  },
  {
    slug: "recuperacao-de-dados",
    nome: "Recuperação de Dados",
    h1: "Recuperação de Dados e Arquivos de Celular",
    detalhes: "Celular quebrou por completo ou caiu na água e você precisa das suas fotos, contatos e conversas? Extraímos seus dados de forma segura e profissional.",
    beneficio: "Sigilo absoluto e alta taxa de sucesso na recuperação."
  }
];

// FAQ Geral / Base
export const FAQ_BASE = [
  { q: "O orçamento é gratuito?", a: "Sim! Na SUNCELL, o diagnóstico é 100% gratuito e sem compromisso. Você traz o seu celular em uma de nossas duas lojas (Guaíra ou Alto Boqueirão), nós analisamos as falhas e te passamos o preço exato. Você só paga se autorizar e o serviço for executado com sucesso." },
  { q: "Quanto tempo demora o conserto do celular?", a: "Serviços mais frequentes como Troca de Tela e Troca de Bateria costumam ficar prontos de forma expressa, no mesmo dia, geralmente em menos de 2 horas. Reparos avançados de placa exigem análise mais técnica de microsoldagem e podem levar de 24h a 72h." },
  { q: "Quais são as formas de pagamento aceitas?", a: "Facilitamos o pagamento em dinheiro, PIX ou parcelado nos principais cartões de crédito. Consulte nossas condições de parcelamento sem juros direto na loja." },
  { q: "As peças utilizadas são originais?", a: "Trabalhamos com opções de telas e componentes importados de altíssima qualidade (linha premium/primeira linha com especificações idênticas às originais) e também telas originais de fábrica, a depender do modelo e da preferência do cliente. Explicamos com total transparência cada opção antes do conserto." },
  { q: "Vocês buscam o celular em casa?", a: "Para maior comodidade, atendemos clientes de Curitiba e região metropolitana por meio de agendamento de motoboy parceiro para coleta e entrega segura do aparelho, ou você pode comparecer diretamente nas nossas lojas dentro do Mercado Goes (Guaíra ou Alto Boqueirão) onde há estacionamento gratuito e segurança." },
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
    const intro = `Se você está precisando de assistência técnica de celular no bairro ${b.nome}, conte com o atendimento premium da SUNCELL! Localizado na região ${b.regiao} de Curitiba, o bairro ${b.nome} (${b.marcos}) está na nossa área de cobertura direta. Nossa assistência técnica especializada é de altíssima confiança para moradores locais. Consertamos smartphones de todas as marcas com diagnóstico gratuito, rapidez no atendimento e garantia. O ponto mais próximo e cômodo para você é a nossa unidade ${lojaDest.nome}, localizada no Mercado Goes. Você pode trazer seu celular diretamente ou solicitar orçamento online via WhatsApp de forma super prática.`;

    const title = `Assistência Técnica de Celular no ${b.nome} Curitiba | SUNCELL`;
    const description = `Precisando consertar celular no ${b.nome}, Curitiba? Troca de tela, bateria, placa de iPhone, Samsung, Xiaomi e Motorola na SUNCELL. Orçamento gratuito!`;

    const faq = [
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
    
    const intro = `Procurando assistência técnica de celular em ${c.nome}? A SUNCELL é a solução ideal para você que reside nesta importante cidade da Região Metropolitana de Curitiba (${c.marcos}). Sabemos que encontrar técnicos de confiança e especializados em iPhone, Samsung, Xiaomi e Motorola pode ser um desafio na região. Por isso, oferecemos um serviço profissional de alta qualidade com transporte rápido via motoboy ou atendimento direto na nossa loja ${lojaDest.nome}, muito bem localizada dentro do Mercado Goes. Diagnóstico gratuito, agilidade expressa com entrega no mesmo dia e garantia total no reparo.`;

    const title = `Assistência Técnica de Celular em ${c.nome} - PR | SUNCELL`;
    const description = `Conserto de celular em ${c.nome}. Troca de tela, bateria, placa para iPhone, Samsung, Xiaomi e Motorola. Diagnóstico grátis e garantia na SUNCELL.`;

    const faq = [
      {
        q: `A SUNCELL atende e recolhe aparelhos em ${c.nome}?`,
        a: `Sim! Temos clientes em toda a região de ${c.nome}. Você pode agendar a coleta do seu celular por motoboy de confiança, ou se preferir, pode visitar nossa loja física que fica a poucos minutos de distância, com toda a infraestrutura e segurança do Mercado Goes.`
      },
      {
        q: `Qual é o prazo para conserto de celular vindo de ${c.nome}?`,
        a: `A maioria dos serviços, como substituição de telas e baterias, é realizada em menos de 2 horas. Assim, mesmo vindo de ${c.nome}, você pode aguardar o conserto ser finalizado na hora ou receber seu smartphone de volta no mesmo dia.`
      },
      ...FAQ_BASE.slice(0, 3)
    ];

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

// Retorna todas as páginas possíveis de SEO programático
export function getTodasPaginas(): PageData[] {
  return [
    ...getBairrosPages(),
    ...getCidadesPages(),
    ...getAparelhosPages(),
    ...getServicosPages()
  ];
}

// Retorna a página pelo slug e pelo tipo de página
export function findPageBySlug(type: "bairro" | "cidade" | "aparelho" | "servico", slug: string): PageData | undefined {
  const pages = getTodasPaginas();
  return pages.find((p) => p.type === type && p.slug === slug);
}

// Retorna o caminho de URL absoluto para cada tipo de página
export function rotaDe(p: PageData): string {
  switch (p.type) {
    case "bairro":   return `/assistencia-tecnica/${p.slug}`;
    case "cidade":   return `/assistencia-tecnica-cidade/${p.slug}`;
    case "aparelho": return `/assistencia-tecnica-aparelho/${p.slug}`;
    case "servico":  return `/servico/${p.slug}`;
  }
}
