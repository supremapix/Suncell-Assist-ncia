export interface Product {
  id: string;
  nome: string;
  slug: string;
  codigo: string;
  categoria: string;
  cor: string;
  marca: string;
  disponibilidade: string;
  precoVista: number;
  precoVistaFormatado: string;
  precoParceladoInfo: string;
  parcelamento: { x: number; valor: string }[];
  selos: string[];
  bullets: string[];
  introDesc: string;
  blocos: { titulo: string; desc: string; imagem: string; alt: string }[];
  especificacoes: Record<string, string>;
  imagemPrincipal: string;
  imagensGaleria: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
}

export const redmiA7Pro: Product = {
  id: "redmi-a7-pro",
  nome: "Celular Xiaomi Redmi A7 Pro 128GB 4GB RAM",
  slug: "/celular-xiaomi-redmi-a7-pro-dual-sim-128gb-4gb-ram",
  codigo: "1591576",
  categoria: "Xiaomi",
  cor: "Preto",
  marca: "Xiaomi",
  disponibilidade: "Em estoque",
  precoVista: 849.99,
  precoVistaFormatado: "R$ 849,99",
  precoParceladoInfo: "até 12x de R$ 81,98 na loja física",
  parcelamento: [
    { x: 1, valor: "R$ 883,14" },
    { x: 2, valor: "R$ 452,86" },
    { x: 3, valor: "R$ 304,45" },
    { x: 4, valor: "R$ 230,25" },
    { x: 5, valor: "R$ 185,74" },
    { x: 6, valor: "R$ 156,07" },
    { x: 7, valor: "R$ 134,89" },
    { x: 8, valor: "R$ 119,00" },
    { x: 9, valor: "R$ 106,65" },
    { x: 10, valor: "R$ 96,78" },
    { x: 11, valor: "R$ 88,70" },
    { x: 12, valor: "R$ 81,98" }
  ],
  selos: [
    "Loja segura com SSL",
    "6 meses de garantia pela loja",
    "Em até 12x pela loja física"
  ],
  bullets: [
    "Tela IPS LCD de 6,9\" HD+ com taxa de atualização de 120 Hz",
    "Processador Unisoc T7250 Octa-Core para desempenho eficiente no dia a dia",
    "128 GB de armazenamento interno com suporte a cartão Micro SD",
    "4 GB de RAM com expansão de mais 4 GB de memória virtual",
    "Bateria de 6.000 mAh com excelente autonomia",
    "Carregamento de até 15 W via USB-C",
    "Câmera principal dupla de 13 MP com lente auxiliar",
    "Câmera frontal de 8 MP para selfies e videochamadas",
    "Android 15 com interface Xiaomi HyperOS",
    "Leitor de impressão digital na lateral",
    "Dual SIM (Nano SIM) com conectividade 4G",
    "Entrada para fones P2 (3,5 mm)",
    "Wi-Fi e Bluetooth",
    "GPS, GLONASS, BeiDou e Galileo"
  ],
  introDesc: "O Xiaomi Redmi A7 Pro foi desenvolvido para oferecer excelente autonomia, desempenho eficiente e uma experiência completa para o dia a dia. Rodando Android 15 com interface HyperOS, proporciona navegação fluida em aplicativos, redes sociais e entretenimento. A tela IPS LCD de 6,9 polegadas com resolução HD+ e 120 Hz garante imagens mais suaves e visualização confortável.",
  blocos: [
    {
      titulo: "Desempenho eficiente para o dia a dia",
      desc: "Processador Unisoc T7250 Octa-Core, estável para redes sociais, navegação, estudos, vídeos e apps do cotidiano, com Android 15 + HyperOS.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-1.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Bateria que dura muito mais",
      desc: "6.000 mAh, autonomia para chamadas, vídeos, redes sociais e jogos leves o dia todo.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-2.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Carregamento rápido de 15 W",
      desc: "Recarga via porta USB-C com até 15 W.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-3.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Câmera dupla de 13 MP",
      desc: "Sensor principal de 13 MP com lente auxiliar; frontal de 8 MP para selfies e videochamadas; gravação em Full HD 30 fps.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-4.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Tela IPS LCD de 6,9\" com 120 Hz",
      desc: "HD+, boa reprodução de cores, amplos ângulos de visão e navegação fluida.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-5.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Mais espaço para seus arquivos",
      desc: "128 GB internos + expansão via cartão Micro SD.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-6.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    },
    {
      titulo: "Conectividade completa",
      desc: "Wi-Fi, Bluetooth, USB-C, P2 3,5 mm, Dual SIM, GPS/GLONASS/BeiDou/Galileo.",
      imagem: "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-7.webp",
      alt: "Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
    }
  ],
  especificacoes: {
    "Marca": "Xiaomi",
    "Cor": "Preto",
    "Tela": "6,9\" HD+ IPS LCD, 120 Hz",
    "RAM": "4 GB + 4 GB de memória virtual",
    "Rede de dados primária": "4G",
    "Processador": "Unisoc T7250 (12 nm) Octa Core (2x 1.8 GHz + 6x 1.6 GHz)",
    "Câmera traseira / frontal": "13 MP + lente auxiliar / 8 MP",
    "Chip": "Dual SIM",
    "Memória interna": "128 GB",
    "Memória externa": "Suporta cartão Micro SD",
    "SIM card": "Nano",
    "Conectividade wireless": "Wi-Fi; Bluetooth",
    "Bateria": "6000 mAh",
    "Sistema operacional": "Android 15 + HyperOS",
    "Sensores": "Impressão digital lateral; Proximidade; Acelerômetro; Bússola eletrônica",
    "Comunicação": "USB-C; Mini Jack 3,5 mm",
    "Peso bruto": "411 g",
    "Localização": "GPS; GLONASS; BeiDou; Galileo",
    "Dimensões da embalagem": "9,3 x 6,2 x 19,1 cm",
    "Inclui": "Adaptador de energia, cabo USB, capinha e manual",
    "Resolução de vídeo": "Full HD 30 fps"
  },
  imagemPrincipal: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram.jpg",
  imagensGaleria: [
    "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram.jpg",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-1.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-2.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-3.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-4.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-5.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-6.webp",
    "https://xiaomishopcell.com.br/images/celular-xiaomi-redmi-a7-pro-dual-sim-de-128gb4gb-ram-7.webp"
  ],
  seoTitle: "Xiaomi Redmi A7 Pro 128GB 4GB RAM em Curitiba | Shopcell",
  seoDescription: "Redmi A7 Pro 128GB 4GB RAM por R$ 849,99 à vista ou 12x de R$ 81,98. Tela 6,9\" 120 Hz, bateria 6.000 mAh, Android 15. Loja física no Centro de Curitiba, garantia de 6 meses.",
  canonicalUrl: "https://www.celularescuritibashopcell.com.br/celular-xiaomi-redmi-a7-pro-dual-sim-128gb-4gb-ram"
};

export const todosProdutos: Product[] = [redmiA7Pro];
