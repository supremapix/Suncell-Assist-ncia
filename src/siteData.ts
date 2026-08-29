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
  pontoReferencia?: string;
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
  vizinhos?: string[];
  principaisVias?: string;
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
    pontoReferencia: "Dentro do Supermercado Goes - Estacionamento Gratuito e Seguro",
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
    pontoReferencia: "Dentro do Supermercado Goes - Estacionamento Gratuito e Seguro",
  },
];

export const INSTAGRAM_PROFILE = "https://www.instagram.com/suncell.brasil/";
export const INSTAGRAM_EMBED_URL = "https://www.instagram.com/suncell.brasil/embed";

// Lista com os 75 bairros oficiais de Curitiba com regiões, loja de referência mais próxima, vizinhos e vias de acesso
export const BAIRROS_RAW = [
  { nome: "Abranches", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Barreirinha e Ópera de Arame", vizinhos: ["Barreirinha", "Taboão", "Pilarzinho", "São Lourenço"], principaisVias: "Av. Mateus Leme e Rodovia dos Minérios" },
  { nome: "Água Verde", regiao: "Sul-Central", loja: "guaira", marcos: "perto da Praça do Japão e Arena da Baixada", vizinhos: ["Batel", "Portão", "Vila Izabel", "Rebouças", "Centro", "Parolin"], principaisVias: "Av. República Argentina, Av. Silva Jardim e Av. Iguaçu" },
  { nome: "Ahú", regiao: "Norte", loja: "guaira", marcos: "próximo ao Museu Oscar Niemeyer (MON) e Justiça Federal", vizinhos: ["Centro Cívico", "Juvevê", "Cabral", "Boa Vista", "São Lourenço"], principaisVias: "Av. Anita Garibaldi e Av. Paraná" },
  { nome: "Alto Boqueirão", regiao: "Sul", loja: "boqueirao", marcos: "onde fica nossa loja física no Mercado Goes, próximo ao Zoológico de Curitiba", vizinhos: ["Boqueirão", "Sítio Cercado", "Xaxim", "Ganchinho", "Umbará"], principaisVias: "Rua Pastor Antônio Polito, Rua Eduardo Pinto da Rocha e Rua Izaac Ferreira da Cruz" },
  { nome: "Alto da Glória", regiao: "Central", loja: "guaira", marcos: "perto do Estádio Couto Pereira e Santuário do Perpétuo Socorro", vizinhos: ["Centro", "Juvevê", "Alto da Rua XV", "Centro Cívico"], principaisVias: "Av. João Gualberto e Rua Ubaldino do Amaral" },
  { nome: "Alto da Rua XV", regiao: "Central", loja: "guaira", marcos: "próximo ao Hospital de Clínicas e Praça das Nações", vizinhos: ["Alto da Glória", "Cristo Rei", "Jardim Social", "Tarumã", "Hugo Lange"], principaisVias: "Rua XV de Novembro e Av. Nossa Senhora da Luz" },
  { nome: "Atuba", regiao: "Norte", loja: "guaira", marcos: "na divisa com Colombo e Pinhais, próximo ao Parque Atuba", vizinhos: ["Santa Cândida", "Bairro Alto", "Tingui", "Bacacheri"], principaisVias: "Linha Verde Norte e BR-116" },
  { nome: "Augusta", regiao: "Oeste", loja: "guaira", marcos: "região do Passaúna, divisa com Campo Largo", vizinhos: ["Cidade Industrial (CIC)", "Riviera", "São Miguel"], principaisVias: "Estrada Velha do Barigui e Rodovia BR-277" },
  { nome: "Bacacheri", regiao: "Norte", loja: "guaira", marcos: "região do Aeroporto do Bacacheri e Parque Bacacheri", vizinhos: ["Boa Vista", "Cabral", "Jardim Social", "Tingui", "Bairro Alto"], principaisVias: "Av. Erasto Gaertner e Linha Verde" },
  { nome: "Bairro Alto", regiao: "Norte", loja: "guaira", marcos: "perto do Shopping Jockey Plaza e Linha Verde Norte", vizinhos: ["Bacacheri", "Atuba", "Tarumã", "Tingui"], principaisVias: "Av. Victor Ferreira do Amaral e Linha Verde" },
  { nome: "Barreirinha", regiao: "Norte", loja: "guaira", marcos: "perto do Parque Barreirinha e Terminal Barreirinha", vizinhos: ["Abranches", "Boa Vista", "Santa Cândida", "São Lourenço"], principaisVias: "Av. Anita Garibaldi e Av. Paraná" },
  { nome: "Batel", regiao: "Central", loja: "guaira", marcos: "polo gastronômico e comercial, perto do Shopping Pátio Batel", vizinhos: ["Centro", "Água Verde", "Bigorrilho", "Seminário", "Campina do Siqueira"], principaisVias: "Av. do Batel, Av. Sete de Setembro e Rua Bispo Dom José" },
  { nome: "Bigorrilho", regiao: "Central-Oeste", loja: "guaira", marcos: "região do Champagnat, próximo ao Parque Barigui", vizinhos: ["Batel", "Mercês", "Campina do Siqueira", "Centro"], principaisVias: "Rua Padre Anchieta e Av. Cândido Hartmann" },
  { nome: "Boa Vista", regiao: "Norte", loja: "guaira", marcos: "perto do Bosque de Portugal e Rua da Cidadania do Boa Vista", vizinhos: ["Ahú", "Cabral", "Bacacheri", "Santa Cândida", "Barreirinha"], principaisVias: "Av. Paraná e Rua Lodovico Geronazzo" },
  { nome: "Bom Retiro", regiao: "Central", loja: "guaira", marcos: "perto do Hospital Pilar e Portal Polonês", vizinhos: ["Centro Cívico", "Mercês", "Pilarzinho", "São Lourenço"], principaisVias: "Rua Nilo Peçanha e Rua Desembargador Hugo Simas" },
  { nome: "Boqueirão", regiao: "Sul", loja: "boqueirao", marcos: "grande polo comercial perto do Terminal do Boqueirão", vizinhos: ["Alto Boqueirão", "Hauer", "Xaxim", "Uberaba"], principaisVias: "Av. Marechal Floriano Peixoto e Rua Coronel Luiz José dos Santos" },
  { nome: "Butiatuvinha", regiao: "Oeste", loja: "guaira", marcos: "vizinho a Santa Felicidade, famoso pelas vinícolas e restaurantes", vizinhos: ["Santa Felicidade", "Cascatinha", "Lamenha Pequena", "São Braz"], principaisVias: "Av. Manoel Ribas e Av. Vereador Toaldo Túlio" },
  { nome: "Cabral", regiao: "Norte", loja: "guaira", marcos: "próximo ao Campus Agrárias da UFPR e Av. Paraná", vizinhos: ["Juvevê", "Ahú", "Boa Vista", "Bacacheri", "Hugo Lange"], principaisVias: "Av. Paraná e Rua Munhoz da Rocha" },
  { nome: "Cachoeira", regiao: "Norte", loja: "guaira", marcos: "no extremo norte, perto do Parque Cachoeira e divisa com Almirante Tamandaré", vizinhos: ["Barreirinha", "Abranches", "Santa Cândida"], principaisVias: "Av. Anita Garibaldi" },
  { nome: "Cajuru", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Jardim Botânico e Shopping Jardim das Américas", vizinhos: ["Capão da Imbuia", "Cristo Rei", "Jardim das Américas", "Uberaba", "Tarumã"], principaisVias: "Av. Prefeito Maurício Fruet e BR-277" },
  { nome: "Campina do Siqueira", regiao: "Oeste", loja: "guaira", marcos: "perto do Terminal Campina do Siqueira e Parque Barigui", vizinhos: ["Bigorrilho", "Batel", "Seminário", "Mossunguê", "Campo Comprido"], principaisVias: "Rua Padre Anchieta e Av. Mário Tourinho" },
  { nome: "Campo Comprido", regiao: "Oeste", loja: "guaira", marcos: "região universitária da UTFPR e Uniandrade, no Ecoville", vizinhos: ["Campina do Siqueira", "Mossunguê", "Santa Quitéria", "Fazendinha", "Cidade Industrial (CIC)"], principaisVias: "Rua Professor Pedro Viriato Parigot de Souza e Rua Eduardo Sprada" },
  { nome: "Campo de Santana", regiao: "Sul", loja: "boqueirao", marcos: "no extremo sul, próximo à BR-116 e divisa com Fazenda Rio Grande", vizinhos: ["Tatuquara", "Caximba", "Ganchinho", "Umbará"], principaisVias: "Rodovia BR-116 e Estrada Delegado Bruno de Almeida" },
  { nome: "Capão Raso", regiao: "Sul", loja: "boqueirao", marcos: "próximo ao Terminal do Capão Raso e Shopping Palladium", vizinhos: ["Novo Mundo", "Pinheirinho", "Fazendinha", "Portão", "Xaxim"], principaisVias: "Av. República Argentina, Av. Winston Churchill e Rua Pedro Gusso" },
  { nome: "Capão da Imbuia", regiao: "Leste", loja: "boqueirao", marcos: "lar do Museu de História Natural e Bosque do Capão da Imbuia", vizinhos: ["Cajuru", "Tarumã", "Bairro Alto", "Jardim das Américas"], principaisVias: "Av. Affonso Penna e Av. Prefeito Maurício Fruet" },
  { nome: "Cascatinha", regiao: "Oeste", loja: "guaira", marcos: "região arborizada e residencial, próxima ao Parque Tingui", vizinhos: ["Santa Felicidade", "São João", "São Lourenço", "Pilarzinho"], principaisVias: "Av. Manoel Ribas e Rua Fredolin Wolf" },
  { nome: "Caximba", regiao: "Sul", loja: "boqueirao", marcos: "na divisa extrema sul de Curitiba com Araucária", vizinhos: ["Campo de Santana", "Tatuquara"], principaisVias: "Estrada Delegado Bruno de Almeida" },
  { nome: "Centro", regiao: "Central", loja: "guaira", marcos: "coração comercial de Curitiba, perto da Rua XV de Novembro e Praça Tiradentes", vizinhos: ["Batel", "Rebouças", "Centro Cívico", "São Francisco", "Alto da Glória", "Cristo Rei"], principaisVias: "Av. Marechal Floriano Peixoto, Rua XV de Novembro e Av. Marechal Deodoro" },
  { nome: "Centro Cívico", regiao: "Central", loja: "guaira", marcos: "sede dos poderes do Estado, perto do Palácio Iguaçu e MON", vizinhos: ["Centro", "Ahú", "Bom Retiro", "Juvevê", "Alto da Glória", "São Francisco"], principaisVias: "Av. Cândido de Abreu e Rua Mateus Leme" },
  { nome: "Cidade Industrial (CIC)", regiao: "Oeste", loja: "guaira", marcos: "maior distrito industrial e populoso de Curitiba", vizinhos: ["Fazendinha", "Campo Comprido", "Novo Mundo", "Capão Raso", "Pinheirinho", "Augusta", "Riviera", "São Miguel"], principaisVias: "Rodovia Contorno Sul, Rua João Bettega e Rua Pedro Gusso" },
  { nome: "Cristo Rei", regiao: "Leste", loja: "boqueirao", marcos: "perto do Hospital Cajuru e Jardim Botânico", vizinhos: ["Centro", "Jardim Botânico", "Cajuru", "Alto da Rua XV", "Rebouças"], principaisVias: "Av. Presidente Affonso Camargo e Av. São José" },
  { nome: "Fanny", regiao: "Sul", loja: "guaira", marcos: "perto da Linha Verde e do Shopping Palladium", vizinhos: ["Guaíra", "Lindóia", "Parolin", "Novo Mundo", "Hauer"], principaisVias: "Linha Verde e Av. Maestro Francisco Antonello" },
  { nome: "Fazendinha", regiao: "Sul-Oeste", loja: "guaira", marcos: "próximo ao Terminal Fazendinha e Rua da Cidadania", vizinhos: ["Portão", "Santa Quitéria", "Campo Comprido", "Cidade Industrial (CIC)", "Capão Raso", "Novo Mundo"], principaisVias: "Rua João Bettega e Rua Carlos Klemtz" },
  { nome: "Ganchinho", regiao: "Sul", loja: "boqueirao", marcos: "região sul de Curitiba, próximo ao Contorno Sul e Umbará", vizinhos: ["Alto Boqueirão", "Sítio Cercado", "Umbará", "Campo de Santana"], principaisVias: "Estrada do Ganchinho e Rua Eduardo Pinto da Rocha" },
  { nome: "Guabirotuba", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Horto Florestal e passarela estaiada", vizinhos: ["Jardim Botânico", "Prado Velho", "Hauer", "Uberaba", "Jardim das Américas"], principaisVias: "Av. Senador Salgado Filho e Av. Comendador Franco (Av. das Torres)" },
  { nome: "Guaíra", regiao: "Sul-Central", loja: "guaira", marcos: "onde fica nossa matriz física no Mercado Goes (Rua Maria Moscardi Fanini, 261)", vizinhos: ["Parolin", "Água Verde", "Portão", "Fanny", "Lindóia", "Prado Velho"], principaisVias: "Av. Presidente Wenceslau Braz, Av. Presidente Kennedy e Linha Verde" },
  { nome: "Hauer", regiao: "Sul", loja: "boqueirao", marcos: "famoso polo comercial e de autopeças, próximo ao Terminal do Hauer", vizinhos: ["Boqueirão", "Xaxim", "Fanny", "Lindóia", "Guabirotuba", "Parolin"], principaisVias: "Av. Marechal Floriano Peixoto e Linha Verde" },
  { nome: "Hugo Lange", regiao: "Central", loja: "guaira", marcos: "bairro residencial de alto padrão próximo ao Juvevê e Cabral", vizinhos: ["Juvevê", "Cabral", "Alto da Rua XV", "Jardim Social", "Bacacheri"], principaisVias: "Rua Augusto Stresser e Rua Padre Germano Mayer" },
  { nome: "Jardim Botânico", regiao: "Leste", loja: "boqueirao", marcos: "onde fica a estufa de vidro do Jardim Botânico e Campus da UFPR", vizinhos: ["Cristo Rei", "Rebouças", "Prado Velho", "Guabirotuba", "Jardim das Américas", "Cajuru"], principaisVias: "Av. Professor Lothário Meissner e Av. Prefeito Omar Sabbag" },
  { nome: "Jardim Social", regiao: "Norte", loja: "guaira", marcos: "bairro residencial nobre perto do Bosque de Portugal e Bacacheri", vizinhos: ["Bacacheri", "Hugo Lange", "Alto da Rua XV", "Tarumã", "Bairro Alto"], principaisVias: "Av. Nossa Senhora da Luz e Av. Washington Luiz" },
  { nome: "Jardim das Américas", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Shopping Jardim das Américas e Centro Politécnico UFPR", vizinhos: ["Guabirotuba", "Uberaba", "Cajuru", "Jardim Botânico"], principaisVias: "Av. Comendador Franco (Av. das Torres) e Rodovia BR-277" },
  { nome: "Juvevê", regiao: "Central", loja: "guaira", marcos: "polo gastronômico e residencial nobre, perto da Av. João Gualberto", vizinhos: ["Centro Cívico", "Alto da Glória", "Cabral", "Ahú", "Hugo Lange"], principaisVias: "Av. João Gualberto e Rua Alberto Bolliger" },
  { nome: "Lamenha Pequena", regiao: "Norte", loja: "guaira", marcos: "no extremo norte, na divisa com Almirante Tamandaré", vizinhos: ["Santa Felicidade", "Butiatuvinha", "Cascatinha", "Pilarzinho"], principaisVias: "Rua Justo Manfron" },
  { nome: "Lindóia", regiao: "Sul", loja: "boqueirao", marcos: "vizinho ao Fanny, Guaíra e Hauer, com comércio dinâmico", vizinhos: ["Guaíra", "Fanny", "Hauer", "Novo Mundo", "Parolin"], principaisVias: "Av. Presidente Wenceslau Braz e Av. Marechal Floriano Peixoto" },
  { nome: "Mercês", regiao: "Central", loja: "guaira", marcos: "perto da Torre Panorâmica (Torre da Telepar) e Praça 29 de Março", vizinhos: ["Centro", "Bigorrilho", "Bom Retiro", "Vista Alegre", "São Francisco"], principaisVias: "Av. Manoel Ribas e Rua Padre Agostinho" },
  { nome: "Mossunguê", regiao: "Oeste", loja: "guaira", marcos: "conhecido como Ecoville, repleto de edifícios modernos e áreas verdes", vizinhos: ["Campina do Siqueira", "Campo Comprido", "Santo Inácio", "Orleans"], principaisVias: "Rua Professor Pedro Viriato Parigot de Souza e Rodovia BR-277" },
  { nome: "Novo Mundo", regiao: "Sul", loja: "boqueirao", marcos: "perto do Shopping Palladium e Hospital do Trabalhador", vizinhos: ["Portão", "Capão Raso", "Fanny", "Lindóia", "Fazendinha", "Cidade Industrial (CIC)"], principaisVias: "Av. República Argentina, Av. Brasília e Rua Pedro Gusso" },
  { nome: "Orleans", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Viaduto do Orleans, acesso ao Contorno Norte e BR-277", vizinhos: ["Mossunguê", "São Braz", "Santo Inácio", "Campo Comprido"], principaisVias: "Rodovia BR-277 e Rua Professor João Falarz" },
  { nome: "Parolin", regiao: "Central-Sul", loja: "guaira", marcos: "próximo ao Prado Velho, Linha Verde e TRE", vizinhos: ["Guaíra", "Prado Velho", "Rebouças", "Água Verde", "Fanny", "Hauer"], principaisVias: "Linha Verde e Rua Brigadeiro Franco" },
  { nome: "Pilarzinho", regiao: "Norte", loja: "guaira", marcos: "lar da Pedreira Paulo Leminski e do Parque Tanguá", vizinhos: ["Bom Retiro", "São Lourenço", "Vista Alegre", "Abranches", "Taboão"], principaisVias: "Rua Desembargador Hugo Simas e Rua Amauri Lange Silveira" },
  { nome: "Pinheirinho", regiao: "Sul", loja: "boqueirao", marcos: "importante polo comercial e hub de transporte com o Terminal Pinheirinho", vizinhos: ["Capão Raso", "Sítio Cercado", "Tatuquara", "Cidade Industrial (CIC)"], principaisVias: "Av. Winston Churchill e Rodovia BR-116 (Linha Verde Sul)" },
  { nome: "Portão", regiao: "Sul", loja: "guaira", marcos: "perto do Shopping Ventura, Palladium e Igreja do Portão", vizinhos: ["Água Verde", "Guaíra", "Novo Mundo", "Santa Quitéria", "Fazendinha", "Vila Izabel"], principaisVias: "Av. República Argentina, Rua João Bettega e Av. Presidente Arthur Bernardes" },
  { nome: "Prado Velho", regiao: "Central", loja: "guaira", marcos: "perto da PUCPR, Teatro Paiol e antiga fábrica de chocolate", vizinhos: ["Rebouças", "Parolin", "Guaíra", "Guabirotuba", "Jardim Botânico"], principaisVias: "Rua Imaculada Conceição e Linha Verde" },
  { nome: "Rebouças", regiao: "Central", loja: "guaira", marcos: "bairro histórico e universitário, perto da UTFPR Centro e Shopping Estação", vizinhos: ["Centro", "Água Verde", "Parolin", "Prado Velho", "Cristo Rei", "Jardim Botânico"], principaisVias: "Av. Marechal Floriano Peixoto, Av. Silva Jardim e Av. Sete de Setembro" },
  { nome: "Riviera", regiao: "Oeste", loja: "guaira", marcos: "bairro na zona oeste de Curitiba, com natureza preservada perto do Passaúna", vizinhos: ["Cidade Industrial (CIC)", "Augusta", "São Miguel"], principaisVias: "Estrada Velha do Barigui" },
  { nome: "Santa Cândida", regiao: "Norte", loja: "guaira", marcos: "polo norte de Curitiba, perto da Polícia Federal e Terminal Santa Cândida", vizinhos: ["Boa Vista", "Tingui", "Atuba", "Barreirinha", "Cachoeira"], principaisVias: "Av. Paraná e Rodovia BR-476" },
  { nome: "Santa Felicidade", regiao: "Oeste", loja: "guaira", marcos: "famoso polo gastronômico italiano, perto do Portal de Santa Felicidade", vizinhos: ["Cascatinha", "São João", "Butiatuvinha", "São Braz", "Santo Inácio"], principaisVias: "Av. Manoel Ribas e Av. Vereador Toaldo Túlio" },
  { nome: "Santa Quitéria", regiao: "Oeste", loja: "guaira", marcos: "bairro residencial perto do Seminário e Uniandrade", vizinhos: ["Seminário", "Portão", "Fazendinha", "Campo Comprido", "Vila Izabel"], principaisVias: "Av. Presidente Arthur Bernardes e Rua Professor Ulisses Vieira" },
  { nome: "Santo Inácio", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Parque Barigui e Universidade Tuiuti", vizinhos: ["Campina do Siqueira", "Mossunguê", "Santa Felicidade", "São Braz", "Cascatinha"], principaisVias: "Rodovia BR-277 e Rua Cândido Hartmann" },
  { nome: "Seminário", regiao: "Central-Oeste", loja: "guaira", marcos: "perto da Av. Getúlio Vargas e do Colégio Bom Jesus", vizinhos: ["Batel", "Vila Izabel", "Santa Quitéria", "Campina do Siqueira", "Água Verde"], principaisVias: "Av. Sete de Setembro e Av. Silva Jardim" },
  { nome: "Sítio Cercado", regiao: "Sul", loja: "boqueirao", marcos: "bairro vibrante e populoso ao longo da Rua Izaac Ferreira da Cruz", vizinhos: ["Alto Boqueirão", "Pinheirinho", "Ganchinho", "Umbará", "Tatuquara", "Xaxim"], principaisVias: "Rua Izaac Ferreira da Cruz e Rua Tijucas do Sul" },
  { nome: "São Braz", regiao: "Oeste", loja: "guaira", marcos: "zona oeste da cidade, residencial e arborizada, perto da Av. Toaldo Túlio", vizinhos: ["Santa Felicidade", "Butiatuvinha", "Santo Inácio", "Orleans"], principaisVias: "Av. Vereador Toaldo Túlio e Rua Antonio Escorsin" },
  { nome: "São Francisco", regiao: "Central", loja: "guaira", marcos: "centro histórico e boêmio de Curitiba, perto do Largo da Ordem", vizinhos: ["Centro", "Centro Cívico", "Bom Retiro", "Mercês"], principaisVias: "Rua Jaime Reis e Rua Kellers" },
  { nome: "São João", regiao: "Oeste", loja: "guaira", marcos: "próximo ao Parque Tingui e Santa Felicidade", vizinhos: ["Santa Felicidade", "Cascatinha", "Pilarzinho", "Vista Alegre"], principaisVias: "Rua Fredolin Wolf" },
  { nome: "São Lourenço", regiao: "Norte", loja: "guaira", marcos: "ao redor do Parque São Lourenço e do Centro de Criatividade", vizinhos: ["Ahú", "Boa Vista", "Bom Retiro", "Pilarzinho", "Abranches", "Barreirinha"], principaisVias: "Rua Mateus Leme e Av. Anita Garibaldi" },
  { nome: "São Miguel", regiao: "Oeste", loja: "guaira", marcos: "no extremo oeste de Curitiba, próximo à Represa do Passaúna", vizinhos: ["Cidade Industrial (CIC)", "Augusta", "Riviera"], principaisVias: "Estrada Velha do Barigui" },
  { nome: "Taboão", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Tanguá e divisa com Almirante Tamandaré", vizinhos: ["Pilarzinho", "Abranches"], principaisVias: "Rua Desembargador Hugo Simas" },
  { nome: "Tarumã", regiao: "Leste", loja: "boqueirao", marcos: "próximo ao Jockey Club e Ginásio do Tarumã", vizinhos: ["Bairro Alto", "Bacacheri", "Jardim Social", "Capão da Imbuia", "Cajuru"], principaisVias: "Av. Victor Ferreira do Amaral e Linha Verde" },
  { nome: "Tatuquara", regiao: "Sul", loja: "boqueirao", marcos: "região dinâmica da zona sul, com fácil acesso ao Contorno Sul", vizinhos: ["Pinheirinho", "Sítio Cercado", "Campo de Santana", "Caximba", "Cidade Industrial (CIC)"], principaisVias: "Rua Presidente João Goulart e Rodovia BR-116" },
  { nome: "Tingui", regiao: "Norte", loja: "guaira", marcos: "próximo ao Parque Bacacheri e Av. Erasto Gaertner", vizinhos: ["Bacacheri", "Santa Cândida", "Bairro Alto", "Atuba"], principaisVias: "Av. Paraná e Linha Verde" },
  { nome: "Uberaba", regiao: "Leste-Sul", loja: "boqueirao", marcos: "bairro extenso ao longo da Avenida das Torres, caminho para SJP", vizinhos: ["Boqueirão", "Guabirotuba", "Jardim das Américas", "Cajuru"], principaisVias: "Av. Comendador Franco (Av. das Torres) e Av. Senador Salgado Filho" },
  { nome: "Umbará", regiao: "Sul", loja: "boqueirao", marcos: "conhecido pelas chácaras e vinícolas e pela histórica Igreja do Umbará", vizinhos: ["Ganchinho", "Sítio Cercado", "Alto Boqueirão", "Campo de Santana"], principaisVias: "Estrada do Ganchinho e Rua Nicola Pellanda" },
  { nome: "Vila Izabel", regiao: "Central-Sul", loja: "guaira", marcos: "perto da Av. Getúlio Vargas e divisa com Água Verde e Portão", vizinhos: ["Água Verde", "Portão", "Seminário", "Santa Quitéria"], principaisVias: "Av. República Argentina e Av. Presidente Arthur Bernardes" },
  { nome: "Vista Alegre", regiao: "Norte", loja: "guaira", marcos: "perto das Mercês, famoso pelo Parque Vista Alegre e bela vista de Curitiba", vizinhos: ["Mercês", "Pilarzinho", "Bom Retiro", "São João", "Cascatinha"], principaisVias: "Rua Arthur Leinig e Rua Desembargador Hugo Simas" },
  { nome: "Xaxim", regiao: "Sul", loja: "boqueirao", marcos: "polo comercial forte com shoppings e lojas de rua", vizinhos: ["Boqueirão", "Alto Boqueirão", "Hauer", "Sítio Cercado", "Fanny", "Lindóia", "Capão Raso"], principaisVias: "Av. Brasília, Rua Francisco Derosso e Linha Verde" }
];

// Lista com 15 cidades da Região Metropolitana com vias de acesso e unidade de referência em Curitiba
export const CIDADES_RAW = [
  { nome: "Curitiba", loja: "guaira", marcos: "capital do Paraná, com 2 unidades físicas próprias no Mercado Goes (Guaíra e Alto Boqueirão)", viaAcesso: "Linha Verde, Av. Wenceslau Braz e Av. Mal. Floriano Peixoto" },
  { nome: "São José dos Pinhais", loja: "boqueirao", marcos: "região metropolitana leste, caminho do Aeroporto Internacional Afonso Pena", viaAcesso: "Av. das Torres (Av. Comendador Franco) e Av. Marechal Floriano Peixoto" },
  { nome: "Pinhais", loja: "boqueirao", marcos: "município dinâmico a leste de Curitiba, polo de eventos e comércio", viaAcesso: "Av. Victor Ferreira do Amaral e Rodovia Deputado João Leopoldo Jacomel" },
  { nome: "Colombo", loja: "guaira", marcos: "região metropolitana norte, forte polo comercial e residencial", viaAcesso: "Linha Verde Norte e Rodovia da Uva / Av. Santos Dumont" },
  { nome: "Araucária", loja: "boqueirao", marcos: "polo industrial da região sul metropolitana, lar da refinaria REPAR", viaAcesso: "Rodovia do Xisto (BR-476) e Contorno Sul" },
  { nome: "Almirante Tamandaré", loja: "guaira", marcos: "norte metropolitano, cidade das fontes de água mineral", viaAcesso: "Rodovia dos Minérios e Av. Anita Garibaldi" },
  { nome: "Campo Largo", loja: "guaira", marcos: "oeste metropolitano, Capital Nacional da Louça", viaAcesso: "Rodovia BR-277" },
  { nome: "Campo Magro", loja: "guaira", marcos: "noroeste metropolitano, polo de ecoturismo e gastronomia rural", viaAcesso: "Estrada do Cerne" },
  { nome: "Fazenda Rio Grande", loja: "boqueirao", marcos: "sul metropolitano, uma das cidades de mais rápido crescimento do Paraná", viaAcesso: "Rodovia BR-116 direto para o Boqueirão / Guaíra" },
  { nome: "Quatro Barras", loja: "boqueirao", marcos: "nordeste metropolitano, portal da Serra do Mar", viaAcesso: "Rodovia BR-116 e Contorno Leste" },
  { nome: "Campina Grande do Sul", loja: "guaira", marcos: "região metropolitana norte-nordeste, polo de saúde e natureza", viaAcesso: "Rodovia BR-116" },
  { nome: "Mandirituba", loja: "boqueirao", marcos: "sul metropolitano, polo de agricultura e chácaras", viaAcesso: "Rodovia BR-116" },
  { nome: "Balsa Nova", loja: "guaira", marcos: "oeste metropolitano, rica em belezas naturais e indústrias", viaAcesso: "Rodovia BR-277" },
  { nome: "Rio Branco do Sul", loja: "guaira", marcos: "região metropolitana norte, polo de mineração e cimento", viaAcesso: "Rodovia dos Minérios" },
  { nome: "Itaperuçu", loja: "guaira", marcos: "norte metropolitano, vizinha a Almirante Tamandaré", viaAcesso: "Rodovia dos Minérios" },
  { nome: "Tijucas do Sul", loja: "boqueirao", marcos: "extremo sul metropolitano, turismo rural e natureza", viaAcesso: "Rodovia BR-376" }
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
    const vizinhosStr = b.vizinhos && b.vizinhos.length > 0 ? b.vizinhos.join(", ") : "bairros vizinhos da região";
    const viasStr = b.principaisVias || "principais vias de acesso";
    const isLojaFisica = b.nome === "Alto Boqueirão" || b.nome === "Guaíra";
    
    // Parágrafos únicos combinando localização, marcos de referência, rotas e proximidade com as lojas SUNCELL
    let intro = isLojaFisica
      ? `Procurando assistência técnica de celular no bairro ${b.nome} em Curitiba? A SUNCELL possui loja física própria instalada confortavelmente dentro do Mercado Goes (${lojaDest.endereco.split(",")[0]}), com estacionamento gratuito e segurança. Atendemos moradores do ${b.nome} e de toda a região ${b.regiao} de Curitiba com conserto expresso no mesmo dia para iPhone, Samsung Galaxy, Xiaomi, Motorola e LG. O diagnóstico é 100% gratuito e o orçamento é passado na hora, sem compromisso.`
      : `Moradores do bairro ${b.nome} que procuram assistência técnica de celulares em Curitiba contam com o atendimento especializado da SUNCELL. Localizado na região ${b.regiao} da capital (${b.marcos}), o ${b.nome} tem conexão rápida com a unidade SUNCELL ${lojaDest.nome}, sediada no Mercado Goes (${lojaDest.endereco.split(",")[0]}), com fácil deslocamento via ${viasStr}. Oferecemos conserto expresso no mesmo dia, diagnóstico gratuito e peças de alta qualidade para iPhone, Samsung, Xiaomi, Motorola e LG. Atendemos também toda a vizinhança local, incluindo ${vizinhosStr}.`;

    let title = `Assistência Técnica de Celular no ${b.nome} Curitiba | SUNCELL`;
    let description = `Procurando assistência técnica de celular no ${b.nome}, Curitiba? Troca de tela, bateria e placa de iPhone, Samsung, Xiaomi e Motorola na SUNCELL. Orçamento grátis!`;

    let faq = [
      {
        q: isLojaFisica 
          ? `Onde fica a loja SUNCELL no ${b.nome}?` 
          : `Como moradores do ${b.nome} realizam o conserto de celular na SUNCELL?`,
        a: isLojaFisica
          ? `Nossa loja no ${b.nome} fica dentro do Mercado Goes (${lojaDest.endereco}). Contamos com amplo estacionamento gratuito, ambiente seguro e atendimento técnico presencial de segunda a sábado.`
          : `Moradores do ${b.nome} contam com fácil acesso à unidade física SUNCELL ${lojaDest.nome}, localizada no Mercado Goes (${lojaDest.endereco}), com trajeto rápido via ${viasStr}. O local conta com estacionamento gratuito e você também pode solicitar uma pré-avaliação gratuita pelo WhatsApp.`
      },
      {
        q: `Quanto tempo demora o conserto de um celular vindo do ${b.nome}?`,
        a: `Serviços frequentes como troca de tela frontal trincada, troca de bateria viciada e reparo de conector de carga são efetuados no mesmo dia, geralmente em menos de 1 a 2 horas. Reparos avançados de placa-mãe (microssoldagem) são avaliados em nosso laboratório especializado.`
      },
      {
        q: `Qual é o valor do orçamento para moradores do ${b.nome}?`,
        a: `Na SUNCELL, a análise técnica e o diagnóstico são 100% gratuitos e sem compromisso. Nossos técnicos desmontam e realizam testes elétricos sem qualquer cobrança. Você só paga se aprovar o orçamento e o serviço for executado com sucesso.`
      },
      {
        q: `Quais marcas de smartphones são atendidas para o ${b.nome}?`,
        a: `Atendemos a linha completa de Apple iPhone (do 7 ao 16 Pro Max), Samsung Galaxy (linhas S, Z Fold/Flip, A, M), Xiaomi (Redmi e Poco), Motorola (Moto G e Edge) e LG. Temos grande estoque de telas, baterias e periféricos para entrega rápida.`
      },
      ...FAQ_BASE.slice(1, 3)
    ];

    // OVERRIDES ESPECÍFICOS DE ALTO DESEMPENHO SEO / SEMÂNTICA
    if (b.nome === "Parolin") {
      title = "Assistência Técnica de Celular no Parolin Curitiba | SUNCELL Guaíra";
      description = "Conserto de celular para moradores do Parolin, Curitiba. Troca de tela, bateria e placa de iPhone, Samsung e Xiaomi na SUNCELL Guaíra (Mercado Goes). Diagnóstico grátis!";
      intro = `Moradores e profissionais que atuam no bairro Parolin e necessitam de assistência técnica de celulares de alta confiança contam com a conveniência da SUNCELL em Curitiba. Vizinho direto ao Prado Velho, Rebouças e Água Verde, o Parolin está a apenas 3 minutos da nossa matriz física SUNCELL Guaíra, localizada com total conforto e segurança dentro do Mercado Goes (Rua Maria Moscardi Fanini, 261). Oferecemos diagnósticos 100% gratuitos e reparos expressos no mesmo dia para iPhone, Samsung Galaxy, Xiaomi Redmi, Poco, Motorola e mais. Conte com a facilidade de estacionar gratuitamente no Mercado Goes enquanto nossos técnicos certificados cuidam do seu aparelho.`;
      faq = [
        {
          q: "Como chegar à SUNCELL a partir do Parolin?",
          a: "A nossa unidade do Guaíra fica a menos de 5 minutos do Parolin, dentro do Mercado Goes da Rua Maria Moscardi Fanini, 261. O acesso é direto pela Av. Presidente Wenceslau Braz ou Linha Verde, com estacionamento amplo e gratuito."
        },
        {
          q: "Vocês realizam troca de tela de celular na hora para o Parolin?",
          a: "Sim! Trocas de telas, baterias e conectores de carga são finalizadas em até 1 a 2 horas de forma expressa. Enquanto você faz suas compras no Mercado Goes, nosso time conclui o reparo."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    } else if (b.nome === "Alto Boqueirão") {
      title = "Assistência Técnica de Celular no Alto Boqueirão Curitiba | SUNCELL";
      description = "Conserto de celular no Alto Boqueirão, Curitiba. Loja física SUNCELL no Mercado Goes da Rua Pastor Antônio Polito, 1805. Troca de tela, bateria e placa. Orçamento grátis!";
      intro = `A SUNCELL possui loja física de assistência técnica de celular no Alto Boqueirão, em Curitiba, instalada confortavelmente dentro do Mercado Goes na Rua Pastor Antônio Polito, 1805 (próximo ao Zoológico e divisas com Sítio Cercado, Boqueirão e Ganchinho). Especializada em reparos de iPhone, Samsung, Xiaomi e Motorola, nossa unidade oferece troca de tela no mesmo dia, substituição de bateria, conectores e microssoldagem de placa. Com estacionamento gratuito e segurança privada no Mercado Goes, você faz o diagnóstico sem custo algum e recebe seu aparelho funcionando com garantia legal de 90 dias.`;
      faq = [
        {
          q: "Onde fica exatamente a loja SUNCELL no Alto Boqueirão?",
          a: "Nossa loja física fica dentro do Supermercado Goes da Rua Pastor Antônio Polito, 1805, no Alto Boqueirão. Você pode estacionar gratuitamente no pátio do mercado com total comodidade e segurança."
        },
        {
          q: "Quais serviços de celular são feitos na hora no Alto Boqueirão?",
          a: "Troca de tela frontal quebrada, troca de bateria estufada ou descarregando rápido e substituição de conector de carga tipo C / Lightning são realizados de forma expressa no mesmo dia."
        },
        ...FAQ_BASE.slice(0, 3)
      ];
    } else if (b.nome === "Guaíra") {
      title = "Assistência Técnica de Celular no Guaíra Curitiba | Loja Matriz SUNCELL";
      description = "Assistência técnica de celular no Guaíra, Curitiba. Loja física SUNCELL no Mercado Goes da Rua Maria Moscardi Fanini, 261. Troca de tela, bateria e placa com garantia!";
      intro = `A unidade matriz da SUNCELL Assistência Técnica de Celulares está localizada no bairro Guaíra, em Curitiba, dentro do tradicional Mercado Goes na Rua Maria Moscardi Fanini, 261. Atendemos moradores do Guaíra, Portão, Água Verde, Parolin, Lindóia e toda Curitiba com infraestrutura técnica completa. Realizamos diagnóstico 100% gratuito, troca de tela expressa, substituição de bateria homologada, conserto de conectores de carga e recuperação de placas com microssoldagem avançada. Aproveite o estacionamento gratuito e a segurança do Mercado Goes.`;
      faq = [
        {
          q: "Como encontrar a SUNCELL Guaíra?",
          a: "Estamos dentro do Mercado Goes da Rua Maria Moscardi Fanini, 261, no bairro Guaíra, com acesso muito rápido pelas avenidas Presidente Kennedy, Wenceslau Braz e Linha Verde."
        },
        {
          q: "O diagnóstico no Guaíra é gratuito?",
          a: "Sim, 100% gratuito e sem compromisso. Nossos técnicos examinam seu celular na hora e informam o orçamento detalhado antes de iniciar qualquer reparo."
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
      faq,
      vizinhos: b.vizinhos,
      principaisVias: b.principaisVias
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
    const viaAcesso = c.viaAcesso || "principais rodovias e avenidas metropolitanas";
    const isCuritiba = c.nome === "Curitiba";
    
    let intro = isCuritiba
      ? `A SUNCELL é referência em assistência técnica de celulares em Curitiba, capital do Paraná. Com duas lojas físicas próprias instaladas no Mercado Goes (unidade Guaíra e unidade Alto Boqueirão), prestamos atendimento especializado para mais de 75 bairros e municípios metropolitanos. Especialistas em Apple iPhone, Samsung Galaxy, Xiaomi, Motorola e LG, realizamos diagnósticos 100% gratuitos, trocas de tela e bateria no mesmo dia com garantia legal de 90 dias.`
      : `Moradores e empresas de ${c.nome} que necessitam de assistência técnica especializada de celular contam com o atendimento da SUNCELL em Curitiba. A SUNCELL atende a população de ${c.nome} (${c.marcos}) através de suas lojas físicas de referência em Curitiba, sendo a unidade SUNCELL ${lojaDest.nome} a mais conveniente, situada no Mercado Goes (${lojaDest.endereco.split(",")[0]}), com acesso direto via ${viaAcesso}. Oferecemos orçamento gratuito, conserto expresso no mesmo dia e garantia de 90 dias em peças e mão de obra.`;

    let title = isCuritiba
      ? `Assistência Técnica de Celulares em Curitiba | SUNCELL`
      : `Assistência Técnica de Celular para ${c.nome} | SUNCELL Curitiba`;
    let description = isCuritiba
      ? `Assistência técnica de celulares em Curitiba com diagnóstico gratuito e conserto no mesmo dia. Lojas no Guaíra e Alto Boqueirão (Mercado Goes). iPhone, Samsung, Xiaomi e Motorola.`
      : `Assistência técnica de celular para moradores de ${c.nome}. Troca de tela, bateria e placa de iPhone, Samsung, Xiaomi e Motorola na SUNCELL Curitiba. Orçamento grátis!`;

    let faq = [
      {
        q: isCuritiba
          ? `Onde ficam as lojas da SUNCELL em Curitiba?`
          : `Como os moradores de ${c.nome} utilizam o atendimento da SUNCELL?`,
        a: isCuritiba
          ? `Temos 2 lojas físicas em Curitiba dentro do Mercado Goes: Unidade Guaíra (Rua Maria Moscardi Fanini, 261) e Unidade Alto Boqueirão (Rua Pastor Antônio Polito, 1805). Ambas contam com estacionamento gratuito e segurança privada.`
          : `A SUNCELL atende moradores de ${c.nome} em suas lojas físicas em Curitiba. A unidade de referência mais próxima é a SUNCELL ${lojaDest.nome}, no Mercado Goes, com trajeto facilitado via ${viaAcesso}. Você também pode solicitar uma estimativa prévia pelo WhatsApp antes de levar o aparelho.`
      },
      {
        q: `Qual é o prazo de conserto para quem vem de ${c.nome}?`,
        a: `A maioria dos consertos frequentes (troca de tela touch/display, substituição de bateria e conector de carga) fica pronta de forma expressa no mesmo dia, geralmente em menos de 2 horas. Dessa forma, você pode aguardar no local ou aproveitar o Mercado Goes enquanto o celular é restaurado.`
      },
      {
        q: `O diagnóstico é cobrado para clientes de ${c.nome}?`,
        a: `Não! O diagnóstico é 100% gratuito e sem compromisso. Nossos técnicos realizam a análise detalhada e informam o valor exato antes de qualquer intervenção.`
      },
      ...FAQ_BASE.slice(0, 3)
    ];

    return {
      type: "cidade",
      slug,
      nome: c.nome,
      lojaMaisProxima: c.loja as "guaira" | "boqueirao",
      h1: isCuritiba ? "Assistência Técnica de Celulares em Curitiba" : `Assistência Técnica de Celular para ${c.nome}`,
      title,
      description,
      intro,
      faq,
      principaisVias: viaAcesso
    };
  });
}

export function getAparelhosPages(): PageData[] {
  return APARELHOS_RAW.map((a) => {
    const lojaDest = LOJAS.find((l) => l.id === a.loja)!;
    const intro = `Se você possui um smartphone ${a.nome} e precisa de assistência técnica especializada em Curitiba, a SUNCELL oferece técnicos qualificados e laboratório equipado para reparos em aparelhos da marca ${a.marca}. Realizamos ${a.servicos.join(", ")} com peças selecionadas de alta performance, diagnóstico 100% gratuito e garantia de 90 dias. Nossas duas unidades físicas em Curitiba (Guaíra e Alto Boqueirão, dentro do Mercado Goes) contam com estrutura completa e estacionamento gratuito para atender seu ${a.nome} com máxima agilidade e segurança.`;

    const title = `Assistência Técnica Especializada em ${a.nome} em Curitiba | SUNCELL`;
    const description = `Conserto de ${a.nome} em Curitiba. Troca de tela, bateria, conector de carga e reparo de placa com orçamento grátis e garantia. Lojas no Guaíra e Alto Boqueirão.`;

    const faq = [
      {
        q: `Quais modelos de ${a.nome} a SUNCELL conserta em Curitiba?`,
        a: `Oferecemos assistência completa para os principais modelos da linha ${a.marca}, incluindo ${a.modeloDestaque}. Mantemos estoque de peças para agilizar os consertos no mesmo dia.`
      },
      {
        q: `Quanto tempo demora a troca de tela ou bateria do ${a.nome}?`,
        a: `Para a maioria dos modelos ${a.nome}, a substituição de tela e bateria é realizada no mesmo dia, geralmente entre 1 e 2 horas. Reparos complexos de microssoldagem em placa são avaliados com prazo informado no diagnóstico.`
      },
      {
        q: `O orçamento para conserto de ${a.nome} é gratuito?`,
        a: `Sim! O diagnóstico e orçamento para qualquer modelo ${a.nome} são 100% gratuitos e sem compromisso em nossas unidades de Curitiba.`
      },
      ...FAQ_BASE.slice(2, 5)
    ];

    return {
      type: "aparelho",
      slug: a.slug,
      nome: a.nome,
      marca: a.marca,
      lojaMaisProxima: a.loja as "guaira" | "boqueirao",
      h1: `Assistência Técnica Especializada em ${a.nome}`,
      title,
      description,
      intro,
      faq
    };
  });
}

export function getServicosPages(): PageData[] {
  return SERVICOS_RAW.map((s) => {
    const intro = `Procurando serviço profissional de ${s.nome} em Curitiba? A SUNCELL realiza ${s.nome} para smartphones iPhone, Samsung Galaxy, Xiaomi, Motorola e LG com alto padrão de qualidade técnica, diagnóstico 100% gratuito e garantia de 90 dias. Nossas lojas físicas no Guaíra e Alto Boqueirão contam com laboratório próprio e equipamentos de precisão para executar o serviço no mesmo dia, proporcionando comodidade, segurança e excelente custo-benefício.`;

    const title = `${s.nome} em Curitiba | SUNCELL Assistência Técnica`;
    const description = `Serviço de ${s.nome} em Curitiba com diagnóstico gratuito, peças de alta qualidade e garantia de 90 dias. Atendimento expresso no Guaíra e Alto Boqueirão.`;

    const faq = [
      {
        q: `Como é realizado o serviço de ${s.nome} na SUNCELL?`,
        a: `${s.detalhes} ${s.beneficio} Nossos técnicos realizam testes prévios para assegurar que todos os recursos do smartphone permaneçam operando perfeitamente.`
      },
      {
        q: `Quanto tempo leva para realizar ${s.nome}?`,
        a: `A maioria dos procedimentos de ${s.nome} é finalizada em até 1 a 2 horas no mesmo dia. Para serviços de microssoldagem em placa, o prazo é informado detalhadamente no orçamento gratuito.`
      },
      {
        q: `A SUNCELL oferece garantia para o serviço de ${s.nome}?`,
        a: `Sim, oferecemos garantia legal de 90 dias em todas as peças aplicadas e na mão de obra especializada, com emissão de ordem de serviço formal.`
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
