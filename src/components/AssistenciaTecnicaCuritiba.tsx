import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  ChevronRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Wrench, 
  ThumbsUp, 
  Heart, 
  ArrowLeft, 
  HelpCircle 
} from "lucide-react";
import { 
  getBairrosPages, 
  getCidadesPages, 
  getAparelhosPages, 
  getServicosPages, 
  rotaDe, 
  LOJAS 
} from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function AssistenciaTecnicaCuritiba() {
  const bairros = getBairrosPages();
  const cidades = getCidadesPages();
  const aparelhos = getAparelhosPages();
  const servicos = getServicosPages();

  // 10 perguntas robustas para o FAQ do especialista em SEO local
  const faqCuritiba = [
    {
      q: "Qual o valor para fazer o orçamento do celular na SUNCELL?",
      a: "O diagnóstico e o orçamento na SUNCELL são 100% gratuitos e sem compromisso em nossas duas unidades. Você traz o seu celular, nossa equipe de técnicos certificados avalia o problema na hora utilizando equipamentos de teste de precisão, e passamos o valor exato. Você só paga se autorizar e o conserto for realizado com sucesso."
    },
    {
      q: "Quanto tempo demora para trocar a tela ou a bateria do celular?",
      a: "Serviços de reparos rápidos, como troca de tela frontal e substituição de bateria viciada ou estufada, são executados de forma expressa em nosso laboratório físico. O tempo médio de atendimento é de 1 hora para a grande maioria dos modelos da Apple, Samsung, Motorola e Xiaomi. Você pode aguardar na loja com total conforto enquanto tomamos um café."
    },
    {
      q: "Qual é o período de garantia oferecido para os consertos?",
      a: "Oferecemos garantia legal de 90 dias (3 meses) em todos os serviços realizados e peças substituídas pela SUNCELL. Nossa garantia cobre qualquer falha de fabricação ou de funcionamento pós-reparo, proporcionando total segurança para os moradores de Curitiba. A garantia é válida mediante a apresentação da ordem de serviço física ou digital em qualquer uma de nossas unidades."
    },
    {
      q: "Quais marcas de celulares vocês consertam?",
      a: "Somos especialistas em assistência técnica multimarcas de alta precisão. Atendemos com peças premium e originais toda a linha de iPhones da Apple (do iPhone 11 ao 15 Pro Max), toda a linha Samsung Galaxy (inclusive telas Super AMOLED e reparos avançados da linha S e Note), smartphones Xiaomi (linhas Redmi e Poco), toda a família Motorola (Moto G, Moto E e Edge) e aparelhos da LG."
    },
    {
      q: "Quais as formas de pagamento que a SUNCELL aceita?",
      a: "Para sua total comodidade, aceitamos pagamentos em dinheiro, PIX com confirmação imediata, cartões de débito e parcelamento facilitado em até 12x nos principais cartões de crédito. Oferecemos taxas super atrativas e descontos exclusivos para pagamentos à vista via PIX."
    },
    {
      q: "Preciso agendar um horário para levar meu celular?",
      a: "Não é necessário nenhum agendamento prévio! Você pode comparecer diretamente em qualquer uma de nossas duas lojas situadas dentro do Mercado Goes (unidade Guaíra ou Alto Boqueirão). Temos amplo estacionamento coberto totalmente gratuito e segurança privada monitorada no local para que você faça sua visita com total tranquilidade."
    },
    {
      q: "Se o meu celular caiu na água, ele tem conserto na SUNCELL?",
      a: "Sim, realizamos o processo de desoxidação química profissional. Caso o seu aparelho tenha entrado em contato com água de piscina, mar ou chuva, o ideal é desligar o celular imediatamente, não tentar carregá-lo de forma alguma e levá-lo o mais rápido possível a uma de nossas lojas. Nosso laboratório conta com banhos de ultrassom e produtos específicos que removem os resíduos minerais e previnem curtos-circuitos."
    },
    {
      q: "Vocês realizam reparo avançado de placa de celular?",
      a: "Sim, somos referência absoluta em microssoldagem de placas em Curitiba! Diferente de muitas assistências que apenas trocam módulos inteiros ou condenam o aparelho, nosso laboratório central é equipado com microscópios trinoculares, estações de retrabalho BGA e insumos importados para consertar problemas de integridade física da placa-mãe, como curto no setor de carga (Tristar/Hydra), falhas de Wi-Fi, falta de sinal de rede ou aparelhos que não ligam após quedas severas."
    },
    {
      q: "As peças utilizadas nas trocas de tela e bateria são originais?",
      a: "Trabalhamos com total transparência com o cliente. Oferecemos duas opções de altíssimo desempenho: telas e baterias originais de fábrica (para os modelos em que há disponibilidade pelas marcas) e também componentes importados de linha premium com especificações técnicas rigorosamente idênticas às originais de fábrica. Ambas as opções passam por testes rigorosos de calibração antes de serem instaladas."
    },
    {
      q: "Onde ficam localizadas as lojas físicas da SUNCELL em Curitiba?",
      a: "Nossas duas lojas físicas estão localizadas de forma segura e estratégica dentro das dependências do Mercado Goes. A Unidade Guaíra fica na Rua Maria Moscardi Fanini, 261, no bairro Guaíra, Curitiba. A Unidade Alto Boqueirão fica na Rua Pastor Antônio Polito, 1805, no Alto Boqueirão, Curitiba. Ambas as unidades possuem excelente infraestrutura comercial, estacionamento gratuito e praça de alimentação."
    }
  ];

  // Objeto PageData completo para passar para o EnhancedSEO
  const pageDataSEO = {
    type: "loja" as const,
    slug: "conserto-de-celular-curitiba",
    nome: "Curitiba",
    lojaMaisProxima: "guaira" as const,
    h1: "Conserto de Celular em Curitiba",
    title: "Conserto de Celular em Curitiba | SUNCELL",
    description: "Conserto de celular em Curitiba com diagnóstico gratuito e garantia de 90 dias. Troca de tela, bateria, conector de carga e reparo de placa em 2 lojas físicas.",
    intro: "Seja muito bem-vindo à SUNCELL, a sua assistência técnica e centro especializado em conserto de celular em Curitiba, Paraná! Atendemos com excelência técnica e máxima agilidade todas as regiões da capital paranaense através de nossas duas modernas lojas físicas no Mercado Goes (Guaíra e Alto Boqueirão).",
    faq: faqCuritiba
  };

  return (
    <>
      {/* SEO Dinâmico e Unificado com schemas LocalBusiness, FAQPage e Breadcrumb */}
      <EnhancedSEO pageData={pageDataSEO} canonicalPath="/conserto-de-celular-curitiba" />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Voltar para Home */}
          <Link
            id="back-to-home"
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-2 px-1 focus:outline-none"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Página Inicial</span>
          </Link>

          {/* HERO SECTION DA PÁGINA PILAR */}
          <div className="bg-gradient-to-br from-suncell-black to-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-12 lg:p-16 mb-12 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-suncell-orange/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-suncell-orange/5 rounded-full blur-2xl -z-10" />

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-suncell-orange/20 border border-suncell-orange/30 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md mb-6 tracking-wider">
                <MapPin size={12} className="animate-bounce" />
                <span>Página Pilar Principal • Conserto Express Curitiba</span>
              </span>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Conserto de Celular em Curitiba
              </h1>

              <p className="mt-6 font-sans text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Seja muito bem-vindo à SUNCELL, a sua referência absoluta para <strong className="text-white">conserto de celular em Curitiba</strong>! Atendemos com excelência técnica, peças de qualidade comprovada e orçamento 100% gratuito todas as regiões da capital através de nossas duas lojas físicas no Mercado Goes (Guaíra e Alto Boqueirão).
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/60 rounded-lg border border-zinc-700/50">
                  <ShieldCheck size={14} className="text-suncell-orange" />
                  <span>Garantia de 90 Dias</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/60 rounded-lg border border-zinc-700/50">
                  <CheckCircle size={14} className="text-suncell-orange" />
                  <span>Diagnóstico 100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/60 rounded-lg border border-zinc-700/50">
                  <Clock size={14} className="text-suncell-orange" />
                  <span>Trocas de Tela e Bateria em 1 Hora</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("5541999176640", "Página Pilar Curitiba - Orçamento", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-2xl flex items-center gap-2 hover:shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:scale-102 transition-all cursor-pointer focus:outline-none"
                >
                  <Phone size={18} />
                  <span>Falar com Técnico no WhatsApp</span>
                </a>
                <button
                  onClick={() => openStoreDetailsModal("ambas")}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-2xl flex items-center gap-2 transition-all cursor-pointer focus:outline-none"
                >
                  <span>Ver Endereço das Lojas</span>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION: ACESSO RÁPIDO POR INTENÇÃO DE BUSCA E SERVIÇOS/REGIÕES DESTAQUE */}
          <section className="mb-12 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 mb-2">
              Pesquisas Frequentes e Atendimentos Diretos
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Acesse diretamente os canais especializados por tipo de conserto, marca ou localização em Curitiba:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <Link to="/conserto-de-tela-de-celular-curitiba" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Troca de Tela</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Curitiba Express</span>
              </Link>
              <Link to="/conserto-celular-samsung-curitiba" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Samsung Galaxy</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Especializada</span>
              </Link>
              <Link to="/conserto-de-celular-curitiba-centro" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Centro de Curitiba</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Como Chegar</span>
              </Link>
              <Link to="/conserto-de-celular-perto-de-mim" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Perto de Mim</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Lojas Físicas</span>
              </Link>
              <Link to="/conserto-de-celular-santa-felicidade" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Santa Felicidade</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Região Atendida</span>
              </Link>
              <Link to="/conserto-de-celular-sitio-cercado" className="p-3 bg-gray-50 hover:bg-suncell-orange hover:text-white rounded-xl border border-gray-200 text-center transition-all group">
                <span className="block text-xs font-bold text-gray-900 group-hover:text-white">Sítio Cercado</span>
                <span className="text-[10px] text-gray-500 group-hover:text-white/80">Alto Boqueirão</span>
              </Link>
            </div>
          </section>

          {/* SECTION: POR QUE ESCOLHER A SUNCELL (MÍNIMO DE PALAVRAS E QUALIDADE) */}
          <section className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-suncell-black mb-6 tracking-tight flex items-center gap-2">
              <span className="p-2 bg-suncell-orange/10 rounded-xl text-suncell-orange">
                <ThumbsUp size={24} />
              </span>
              <span>Por que escolher a SUNCELL como sua Assistência Técnica em Curitiba?</span>
            </h2>

            <p className="font-sans text-base text-gray-600 leading-relaxed mb-8">
              Encontrar profissionais que inspirem segurança e executem um conserto de celular com precisão pode ser um verdadeiro desafio. Na SUNCELL, construímos uma infraestrutura pensada especificamente no consumidor curitibano. Nós acreditamos que a assistência de celular deve ser pautada na transparência, na velocidade extrema de atendimento e na conveniência absoluta. Nosso compromisso é fazer com que você recupere o controle de seu cotidiano digital o mais rápido possível, sem dor de cabeça e com a certeza de um investimento justo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-suncell-black flex items-center gap-2">
                  <CheckCircle size={18} className="text-suncell-orange shrink-0" />
                  <span>Diagnóstico 100% Gratuito e Transparente</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed pl-7">
                  Na SUNCELL, você nunca é pego de surpresa. Realizamos todos os testes elétricos, de corrente e de integridade física das peças sem cobrar absolutamente nada de taxa de diagnóstico. Explicamos detalhadamente as falhas técnicas encontradas de forma clara, oferecendo alternativas que se adequam ao seu orçamento antes de qualquer intervenção física no aparelho.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-suncell-black flex items-center gap-2">
                  <ShieldCheck size={18} className="text-suncell-orange shrink-0" />
                  <span>Garantia de 90 Dias de Verdade</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed pl-7">
                  Todos os nossos consertos expressos de celulares contam com uma cobertura completa de garantia legal de 3 meses. Caso ocorra qualquer anomalia no componente substituído ou no funcionamento geral da peça, nossa equipe efetua a troca imediata e a calibração com total prioridade em nossas unidades, respaldando o seu direito como consumidor com notas de serviço claras.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-suncell-black flex items-center gap-2">
                  <Wrench size={18} className="text-suncell-orange shrink-0" />
                  <span>Insumos e Peças Selecionadas</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed pl-7">
                  Utilizamos telas, baterias, conectores e câmeras de altíssima fidelidade. Na SUNCELL, o cliente escolhe entre componentes originais de fábrica ou peças premium importadas de primeira linha, as quais possuem brilho, contraste e taxa de resposta ao toque idênticos aos da fabricante. Nossas baterias são homologadas e restauram 100% da vida útil e capacidade de carga original.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-suncell-black flex items-center gap-2">
                  <Clock size={18} className="text-suncell-orange shrink-0" />
                  <span>Velocidade Expressa em Menos de 2 Horas</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed pl-7">
                  Sabemos que o celular é indispensável para o seu trabalho, comunicação e transações. Por esse motivo, estruturamos nossos estoques de peças para atender de forma expressa no mesmo dia. Serviços frequentes como troca de vidro quebrado ou troca de bateria viciada costumam demorar entre 1h e 1h30 em nosso balcão. Você deixa o aparelho, faz suas compras no Mercado Goes e retira o celular pronto!
                </p>
              </div>
            </div>
          </section>

          {/* SECTION: SERVIÇOS COM LINKS INTERNOS */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-suncell-black tracking-tight">
                  Serviços Especializados de Manutenção de Celular
                </h2>
                <p className="font-sans text-sm sm:text-base text-gray-500 mt-2 max-w-2xl">
                  Oferecemos suporte técnico profissional para resolver desde falhas simples do cotidiano até reparos complexos em placas-mãe de smartphones.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicos.map((s) => (
                <div key={s.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-suncell-black flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-suncell-orange" />
                      <span>{s.nome}</span>
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                      {s.intro.split(".")[0]}. Executamos este reparo com maquinários de ponta para calibração, selagem e blindagem interna.
                    </p>
                  </div>
                  <Link
                    id={`link-servico-${s.slug}`}
                    to={rotaDe(s)}
                    className="inline-flex items-center gap-1.5 text-suncell-orange font-sans font-bold text-xs hover:text-suncell-orange-light mt-auto group focus:outline-none"
                  >
                    <span>Ver detalhes do serviço</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              ))}

              {/* Serviços Adicionais Solicitados na Descrição */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-suncell-black flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-suncell-orange" />
                    <span>Reparo de Câmeras</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    Sua câmera está desfocada, com manchas pretas, travando ou não abre? Trocamos módulos de câmeras frontais e traseiras com foco a laser, mantendo a estabilização óptica original do seu iPhone ou Android.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink("5541999176640", "Serviço de Câmeras", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-suncell-orange font-sans font-bold text-xs hover:text-suncell-orange-light mt-auto group focus:outline-none"
                >
                  <span>Orçamento de câmera no WhatsApp</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-suncell-black flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-suncell-orange" />
                    <span>Desoxidação de Celular Molhado</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    Seu celular caiu na piscina ou molhou na chuva? Realizamos a limpeza química detalhada utilizando banhos de ultrassom e álcool isopropílico de alta pureza para interromper a oxidação dos componentes integrados.
                  </p>
                </div>
                <a
                  href={getWhatsAppLink("5541999176640", "Serviço de Desoxidação", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-suncell-orange font-sans font-bold text-xs hover:text-suncell-orange-light mt-auto group focus:outline-none"
                >
                  <span>Orçamento de desoxidação no WhatsApp</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </section>

          {/* SECTION: MARCAS ATENDIDAS */}
          <section className="mb-16 bg-[#0D0D0D] border border-zinc-800 rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 tracking-tight">
              Marcas de Smartphones que Consertamos Diariamente
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 mb-8 max-w-2xl">
              Nossos técnicos são treinados de forma avançada nas principais plataformas de hardware e sistemas operacionais móveis, garantindo intervenções precisas e seguras.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {aparelhos.map((a) => (
                <div key={a.slug} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-suncell-orange transition-all group">
                  <div>
                    <span className="text-xs font-mono text-suncell-orange font-bold uppercase tracking-wider block mb-2">{a.marca}</span>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-suncell-orange transition-colors mb-3">
                      {a.nome}
                    </h3>
                    <p className="font-sans text-xs text-zinc-500 leading-relaxed mb-6">
                      Conserto especialista de {a.nome} com foco na saúde da placa, vedação e calibração fina das telas e baterias originais.
                    </p>
                  </div>
                  <Link
                    id={`link-aparelho-${a.slug}`}
                    to={rotaDe(a)}
                    className="inline-flex items-center gap-1 text-xs text-suncell-orange font-bold font-sans mt-auto focus:outline-none hover:text-white"
                  >
                    <span>Ver Modelos</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: UNIDADES FÍSICAS (GUAÍRA E ALTO BOQUEIRÃO) */}
          <section className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-suncell-black mb-4 tracking-tight">
              Nossas 2 Unidades Físicas em Curitiba
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 mb-8 max-w-3xl">
              Traga o seu smartphone diretamente para uma de nossas duas lojas situadas estrategicamente dentro do Mercado Goes. Ambas as unidades são totalmente preparadas, contam com laboratórios equipados e ampla área de espera segura.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {LOJAS.map((loja) => (
                <div key={loja.id} className="border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-60 w-full bg-zinc-900">
                    <img 
                      src={loja.foto} 
                      alt={`Loja Física ${loja.nome} - Assistência Técnica Celular Curitiba`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md">
                      <Clock size={12} className="text-suncell-orange" />
                      <span>Seg a Sex: 10h às 13h e 14h às 20h | Sáb: 10h às 13h</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-extrabold text-xl text-suncell-black flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-suncell-orange animate-pulse" />
                      <span>{loja.nome}</span>
                    </h3>
                    
                    <p className="font-sans text-sm text-gray-500 mb-6 flex items-start gap-2 leading-relaxed">
                      <MapPin size={16} className="text-suncell-orange shrink-0 mt-0.5" />
                      <span>{loja.endereco}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-50">
                      <a
                        href={loja.linkWhats}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white text-center font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-suncell-orange/10 transition-all cursor-pointer focus:outline-none"
                      >
                        <Phone size={15} />
                        <span>Falar com Unidade</span>
                      </a>
                      <a
                        href={loja.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-sans font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer focus:outline-none"
                      >
                        <MapPin size={14} className="text-suncell-orange" />
                        <span>Ver no GPS</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: BAIRROS ATENDIDOS EM CURITIBA (INTERNAL LINKING JUICE) */}
          <section className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-suncell-black mb-4 tracking-tight">
              Bairros de Curitiba com Atendimento Integrado
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 mb-8 max-w-3xl">
              Nossa assistência de celular oferece cobertura expressa para moradores de todos os bairros oficiais de Curitiba. Você pode encontrar as distâncias exatas, unidades mais próximas e tempo de deslocamento clicando no seu bairro correspondente abaixo:
            </p>

            {/* Grid dos 75 Bairros */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {bairros.map((b) => (
                <Link
                  id={`link-bairro-${b.slug}`}
                  key={b.slug}
                  to={rotaDe(b)}
                  className="px-3.5 py-2.5 rounded-xl bg-gray-50 hover:bg-suncell-orange/10 hover:text-suncell-orange border border-gray-100 text-[#0D0D0D] font-sans font-medium text-xs truncate transition-all text-center focus:outline-none focus:ring-1 focus:ring-suncell-orange"
                >
                  {b.nome}
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION: CIDADES DA REGIÃO METROPOLITANA ATENDIDAS */}
          <section className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-suncell-black mb-4 tracking-tight">
              Cidades da Região Metropolitana com Atendimento
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-500 mb-8 max-w-3xl">
              Também fornecemos atendimento completo de diagnóstico grátis e conserto veloz para clientes e empresas das principais cidades da Região Metropolitana de Curitiba:
            </p>

            {/* Grid de Cidades */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cidades.map((c) => (
                <Link
                  id={`link-cidade-${c.slug}`}
                  key={c.slug}
                  to={rotaDe(c)}
                  className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-100 hover:text-suncell-orange hover:bg-zinc-800 font-sans font-medium text-xs truncate transition-all text-center focus:outline-none focus:ring-1 focus:ring-suncell-orange"
                >
                  {c.nome}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ SECTION COM SANFONA ACCORDION PREMIUM */}
          <section className="mb-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md tracking-wider">
                <HelpCircle size={12} />
                <span>FAQ Assistência em Curitiba</span>
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-suncell-black mt-3 tracking-tight">
                Dúvidas Frequentes sobre Consertos em Curitiba
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
                Confira as principais dúvidas e respostas estruturadas de nossa assistência técnica para esclarecer todas as suas perguntas antes de realizar o conserto.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm">
              <FAQAccordion items={faqCuritiba} />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
