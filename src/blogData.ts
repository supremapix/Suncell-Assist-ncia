export interface BlogPost {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  tempoLeitura: string;
  autor: string;
  imagem: string;
  conteudoHtml: string;
  tags: string[];
  faqs: { q: string; a: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quanto-custa-trocar-tela-de-celular-curitiba",
    titulo: "Quanto Custa Trocar a Tela de Celular em Curitiba? Guia Atualizado 2025/2026",
    resumo: "Descubra os valores médios para troca de tela de iPhone, Samsung, Xiaomi e Motorola nas assistências técnicas de Curitiba. Saiba a diferença entre tela original, OLED e paralela.",
    categoria: "Preços e Orçamentos",
    data: "2026-02-15",
    tempoLeitura: "6 min de leitura",
    autor: "Equipe Técnica SUNCELL",
    imagem: "https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp",
    tags: ["Troca de Tela", "Preço Conserto", "Curitiba", "iPhone", "Samsung"],
    conteudoHtml: `
      <h2>Tabela de Preços Médios para Troca de Tela em Curitiba</h2>
      <p>Uma das dúvidas mais comuns de quem trinca ou quebra o celular em Curitiba é: <strong>quanto custa trocar a tela do meu aparelho?</strong> O valor varia conforme a marca, modelo e tipo de tecnologia do display (LCD, Incell, OLED, AMOLED de 120Hz).</p>
      
      <p>Na SUNCELL Assistência Técnica (unidades Guaíra e Alto Boqueirão), oferecemos diagnóstico 100% gratuito na hora para testar se apenas o vidro trincou ou se o display foi danificado.</p>

      <h3>Estimativa de Valores por Marca (Mão de obra + Peça + Garantia)</h3>
      <ul>
        <li><strong>iPhone Linha 8 ao 11:</strong> R$ 180 a R$ 380</li>
        <li><strong>iPhone Linha 12, 13 e 14:</strong> R$ 380 a R$ 850</li>
        <li><strong>iPhone Linha 15 e 16 / Pro Max:</strong> Sob consulta no WhatsApp</li>
        <li><strong>Samsung Linha Galaxy A (A10 a A54):</strong> R$ 160 a R$ 390</li>
        <li><strong>Samsung Linha Galaxy S (S20, S21, S22, S23, S24 AMOLED):</strong> R$ 450 a R$ 1.100</li>
        <li><strong>Xiaomi Redmi e Poco (Poco X3, X5, Redmi Note 11/12/13):</strong> R$ 180 a R$ 420</li>
        <li><strong>Motorola Moto G (G20, G30, G52, G84):</strong> R$ 160 a R$ 350</li>
      </ul>

      <h2>Vidro Trincado vs Display Quebrado: Como Economizar até 50%?</h2>
      <p>Se a sua tela trincou o vidro por fora, mas a imagem está límpida (sem manchas pretas ou linhas coloridas) e o toque responde perfeitamente em toda a extensão da tela, <strong>você não precisa trocar a tela inteira!</strong> É possível realizar o procedimento de <em>Troca de Vidro Laminado</em>.</p>
      <p>Com esse processo técnico, nós removemos apenas o vidro quebrado em máquina de vácuo e colamos um novo vidro laminado com cola OCA. Isso mantém o seu display original de fábrica e custa até metade do preço de uma tela inteira nova!</p>

      <h2>Onde trocar a tela com garantia em Curitiba?</h2>
      <p>Visite a SUNCELL no Mercado Goes do Guaíra ou no Mercado Goes do Alto Boqueirão. Ambas as lojas possuem estacionamento gratuito e segurança privada para sua comodidade. A troca é feita no mesmo dia em menos de 1 hora!</p>
    `,
    faqs: [
      { q: "O orçamento é gratuito?", a: "Sim, na SUNCELL o orçamento é 100% gratuito e sem compromisso." },
      { q: "A troca de tela demora quanto tempo?", a: "Para a maioria dos modelos, a substituição fica pronta em cerca de 45 minutos." }
    ]
  },
  {
    slug: "celular-caiu-na-agua-o-que-fazer-urgente",
    titulo: "Celular Caiu na Água: O Que Fazer Urgente para Salvar o Aparelho?",
    resumo: "Passo a passo emergencial do que fazer (e o que NUNCA fazer) quando o smartphone cai no vaso, piscina, mar ou toma chuva em Curitiba.",
    categoria: "Guia de Emergência",
    data: "2026-02-10",
    tempoLeitura: "5 min de leitura",
    autor: "Eng. de Hardware SUNCELL",
    imagem: "https://img.suncellassistencia.com.br/loja-suncell.webp",
    tags: ["Celular Molhado", "Desoxidação", "Emergência", "Placa Mãe"],
    conteudoHtml: `
      <h2>Ações Imediatas ao Deixar o Celular Molhar</h2>
      <ol>
        <li><strong>Desligue o aparelho IMEDIATAMENTE:</strong> Não tente mexer na tela nem testar botões. A energia da bateria em contato com a água causa curto-circuito na placa-mãe.</li>
        <li><strong>NÃO conecte o carregador:</strong> Ligar na tomada com umidade interna queima chips essenciais como o CI de carga e o processador.</li>
        <li><strong>Remova a capinha e a gaveta do chip:</strong> Deixe as entradas de ar livres. Seque apenas a parte externa com uma toalha macia.</li>
        <li><strong>Evite o truque do arroz:</strong> O arroz gera poeira de amido que entra nos conectores e não consegue remover a água acumulada sob as blindagens metálicas da placa.</li>
      </ol>

      <h2>Por que a Desoxidação Química é Fundamental?</h2>
      <p>A água mineral ou salgada contém sais que corroem os minúsculos componentes de cobre e ouro da placa de circuitos em poucas horas. Apenas um banho ultrassônico em câmara química com álcool isopropílico 99,8% e solventes especiais consegue remover totalmente os resíduos minerais antes que a corrosão seja irreversível.</p>

      <p>Se o seu celular molhou em Curitiba, traga urgentemente para a SUNCELL no Guaíra ou Alto Boqueirão. Nossa equipe realiza a desoxidação preventiva imediata para salvar o seu smartphone e todas as suas fotos!</p>
    `,
    faqs: [
      { q: "Arroz tira a água de dentro do celular?", a: "Não. O arroz absorve apenas umidade superficial e deixa resíduos de amido que pioram os curtos." },
      { q: "Qual a taxa de sucesso da desoxidação?", a: "Se trazido rapidamente (em até 24h), a taxa de recuperação supera 85%." }
    ]
  },
  {
    slug: "vale-a-pena-consertar-iphone-antigo",
    titulo: "Vale a Pena Consertar um iPhone Antigo (iPhone 8, 11, 12, 13) em 2026?",
    resumo: "Análise custo-benefício completa sobre quando vale a pena trocar a tela ou bateria de um iPhone em vez de comprar um modelo novo.",
    categoria: "Análise e Dicas",
    data: "2026-02-05",
    tempoLeitura: "7 min de leitura",
    autor: "Especialista Apple SUNCELL",
    imagem: "https://img.suncellassistencia.com.br/loja-suncell-alto-boqueirao-assistencia-tecnica-celulares-curitiba-bairro-altoboqueirao-pt.webp",
    tags: ["iPhone", "Vale a Pena", "Troca Bateria", "Custo Benefício"],
    conteudoHtml: `
      <h2>Comparativo de Custos: Consertar vs Comprar Novo</h2>
      <p>Com os preços elevados dos lançamentos da Apple no Brasil, reparar o seu iPhone atual continua sendo uma das decisões financeiras mais inteligentes em 2026.</p>

      <h3>Quando VALE A PENA consertar seu iPhone:</h3>
      <ul>
        <li><strong>Bateria Viciada:</strong> Se o seu iPhone 11, 12 ou 13 está com a bateria abaixo de 80% de saúde, trocá-la por uma nova restaura a velocidade do aparelho e faz a carga durar o dia todo. O custo é menos de 10% do valor de um aparelho novo!</li>
        <li><strong>Tela Trincada:</strong> Uma tela nova devolve o aspecto de zero km ao seu iPhone por uma fração do preço de troca de aparelho.</li>
        <li><strong>Traseira Quebrada:</strong> Com a nossa máquina a laser para troca de vidro traseiro, seu iPhone fica com acabamento de fábrica sem necessidade de desmontagem pesada.</li>
      </ul>

      <h2>Qual a garantia oferecida pela SUNCELL?</h2>
      <p>Na SUNCELL Assistência Técnica fornecemos garantia de 90 dias em todos os componentes e nota fiscal. Faça seu orçamento gratuito conosco via WhatsApp!</p>
    `,
    faqs: [
      { q: "Consertar a tela perde a função True Tone?", a: "Não, gravamos o código serial da tela original na nova tela usando programadora própria." }
    ]
  },
  {
    slug: "notebook-lento-vale-a-pena-colocar-ssd-nvme",
    titulo: "Notebook Lento em Curitiba? Vale a Pena Colocar SSD NVMe e Aumentar RAM?",
    resumo: "Aprenda como ressuscitar seu notebook Dell, Lenovo, Acer ou HP com um upgrade de SSD. Aumento de velocidade de até 10x sem gastar muito.",
    categoria: "Informática e Notebooks",
    data: "2026-01-28",
    tempoLeitura: "5 min de leitura",
    autor: "Especialista em Hardware SUNCELL",
    imagem: "https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp",
    tags: ["Notebook", "SSD NVMe", "Upgrade", "Memória RAM", "Curitiba"],
    conteudoHtml: `
      <h2>Por que o HD Mecânico deixa seu Notebook Lento?</h2>
      <p>Os HDs tradicionais possuem agulhas e discos magnéticos que leem dados a cerca de 80 MB/s a 100 MB/s. Os sistemas modernos como o Windows 11 realizam milhares de leituras simultâneas, fazendo o HD trabalhar em 100% de uso na gerenciador de tarefas.</p>

      <h2>O Milagre do SSD NVMe</h2>
      <p>Um SSD M.2 NVMe atinge velocidades de leitura entre 2.500 MB/s e 7.000 MB/s (até 70 vezes mais rápido que um HD comum!). Ao instalar um SSD no seu notebook em Curitiba:</p>
      <ul>
        <li>O Windows liga em menos de 10 segundos.</li>
        <li>Programas e navegadores abrem instantaneamente ao clicar.</li>
        <li>Adeus travamentos na digitação ou vídeos travados.</li>
      </ul>

      <h2>Traga seu Notebook na SUNCELL Guaíra ou Alto Boqueirão</h2>
      <p>Realizamos a instalação do SSD, clone ou formatação limpa do Windows com backup de todos os seus arquivos pessoais no mesmo dia!</p>
    `,
    faqs: [
      { q: "Eu perco meus arquivos ao colocar SSD?", a: "Não! Nós realizamos o backup completo ou a clonagem do seu HD antigo para o SSD." }
    ]
  },
  {
    slug: "diferenca-entre-tela-oled-amoled-lcd-incell",
    titulo: "Diferença Entre Tela OLED, AMOLED, Incell e LCD: Qual Escolher no Conserto?",
    resumo: "Entenda as tecnologias de display para smartphones. Saiba qual tipo de tela oferece o melhor equilíbrio entre brilho, consumo de bateria e preço.",
    categoria: "Guia Tecnológico",
    data: "2026-01-20",
    tempoLeitura: "6 min de leitura",
    autor: "Especialista em Displays SUNCELL",
    imagem: "https://img.suncellassistencia.com.br/loja-suncell.webp",
    tags: ["Telas", "OLED", "AMOLED", "Incell", "LCD", "Curitiba"],
    conteudoHtml: `
      <h2>Guia Completo de Tecnologias de Tela para Celulares</h2>
      <p>Na hora de trocar a tela do seu celular em Curitiba, é comum ouvir termos como OLED, AMOLED, Incell e Primeira Linha. Entenda as características de cada uma:</p>

      <h3>1. Tela AMOLED / Super AMOLED (Padrão Samsung e iPhones modernos)</h3>
      <p>Cada pixel emite sua própria luz. Oferece pretos perfeitos (contraste infinito), cores extremamente vibrantes, menor consumo de bateria e suporte a leitor de digital sob a tela.</p>

      <h3>2. Tela OLED Premium</h3>
      <p>Excelente fidelidade de cores e brilho intenso sob luz solar. Utilizada em modelos topo de linha com ótimo ângulo de visão.</p>

      <h3>3. Tela Incell / LCD de Primeira Linha</h3>
      <p>Opção mais econômica com excelente sensibilidade ao toque e brilho agradável. Ideal para quem deseja economizar no conserto sem perder funcionalidade.</p>

      <h2>Transparência e Honestidade na SUNCELL</h2>
      <p>Na SUNCELL mostramos e explicamos detalhadamente as opções disponíveis para o seu modelo antes do conserto. Você escolhe a tela que cabe perfeitamente no seu bolso!</p>
    `,
    faqs: [
      { q: "Qual a melhor tela para celular Xiaomi e Motorola?", a: "Para modelos com tela AMOLED de fábrica, recomendamos a troca por AMOLED ou OLED para preservar o brilho e a bateria." }
    ]
  }
];

export function findBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((b) => b.slug === slug);
}
