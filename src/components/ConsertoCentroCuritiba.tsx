import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  HelpCircle, 
  MapPin, 
  Navigation,
  Bus,
  Car
} from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function ConsertoCentroCuritiba() {
  const whatsappMsg = encodeURIComponent("Olá! Sou do Centro de Curitiba e preciso de um orçamento para consertar meu celular.");
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=5541999176640&text=${whatsappMsg}`;

  const faqCentro = [
    {
      q: "A SUNCELL possui loja física no bairro Centro em Curitiba?",
      a: "A SUNCELL não possui loja física dentro do bairro Centro. Nossas duas unidades físicas próprias estão estrategicamente localizadas no bairro Guaíra (Rua Maria Moscardi Fanini, 261, no Mercado Goes) e no Alto Boqueirão (Rua Pastor Antônio Polito, 1805, no Mercado Goes). Moradores e trabalhadores do Centro têm acesso rápido e fácil a ambas as lojas em poucos minutos pela Av. Marechal Floriano Peixoto ou Av. Kennedy."
    },
    {
      q: "Qual a unidade SUNCELL mais rápida para quem vem do Centro?",
      a: "A Unidade Guaíra é a opção mais próxima do Centro de Curitiba, a aproximadamente 8 a 10 minutos de carro ou Uber seguindo direto pela Av. Marechal Floriano Peixoto ou pela Rua Desembargador Westphalen. Ela fica dentro do Mercado Goes com estacionamento gratuito."
    },
    {
      q: "O orçamento de celular para quem mora no Centro é gratuito?",
      a: "Com certeza! O orçamento e diagnóstico do seu smartphone são 100% gratuitos e sem compromisso em nossas duas lojas."
    },
    {
      q: "Vocês trocam tela e bateria no mesmo dia para clientes do Centro?",
      a: "Sim! A maioria das trocas de tela e substituição de bateria fica pronta no mesmo dia, em média em 1 hora. Você pode deixar seu celular na Unidade Guaíra, fazer compras no Mercado Goes e retornar para buscar o aparelho pronto."
    }
  ];

  const pageSEO = {
    type: "bairro" as const,
    slug: "centro",
    nome: "Centro, Curitiba",
    lojaMaisProxima: "guaira" as const,
    h1: "Conserto de Celular para Clientes do Centro de Curitiba",
    title: "Conserto de Celular para o Centro de Curitiba | SUNCELL",
    description: "Assistência técnica de celular para moradores e trabalhadores do Centro de Curitiba. Atendimento expresso nas unidades Guaíra e Alto Boqueirão com orçamento grátis!",
    intro: "Morador ou trabalhador do Centro de Curitiba? A SUNCELL oferece atendimento rápido e especializado para conserto de celular, troca de tela, bateria e placa. Atendimento expresso na unidade mais próxima (Guaíra, no Mercado Goes, a poucos minutos do Centro) com estacionamento gratuito.",
    faq: faqCentro
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-de-celular-curitiba-centro" />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-suncell-orange transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/conserto-de-celular-curitiba" className="hover:text-suncell-orange transition-colors">Conserto de Celular Curitiba</Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-gray-800">Centro de Curitiba</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-orange-100 text-suncell-orange font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Atendimento Rápido para o Centro de Curitiba
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto de Celular para Clientes do Centro de Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A <strong className="text-gray-900 font-semibold">SUNCELL</strong> atende moradores, estudantes e trabalhadores do <strong className="text-gray-900 font-semibold">Centro de Curitiba</strong> com máxima rapidez, transparência e preço justo.
              </p>
              
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
                <p className="text-sm text-amber-900 font-medium flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-suncell-orange shrink-0 mt-0.5" />
                  <span>
                    <strong>Informação de Transparência:</strong> Para melhor te servir com estacionamento coberto totalmente gratuito e segurança privada, nossa unidade mais próxima do Centro fica na <strong>Rua Maria Moscardi Fanini, 261 (Guaíra)</strong>, dentro do Mercado Goes — a apenas 8 a 10 minutos do Centro pela Av. Marechal Floriano Peixoto!
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all text-sm sm:text-base gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
                <a 
                  href="https://share.google/fByJ4oHwD6vL8iC9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm sm:text-base gap-2"
                >
                  <Navigation className="w-5 h-5 text-suncell-orange" />
                  Como Chegar (Loja Guaíra)
                </a>
              </div>
            </div>
          </div>

          {/* Rotas e Acesso a partir do Centro */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Navigation className="w-6 h-6 text-suncell-orange" />
              Como chegar do Centro de Curitiba até a SUNCELL Guaíra
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <Car className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">De Carro ou Uber (8-10 min)</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Saindo do Centro (Praça Rui Barbosa ou Praça Tiradentes), siga pela <strong>Av. Marechal Floriano Peixoto</strong> ou pela <strong>Rua Desembargador Westphalen</strong> em direção ao bairro Guaíra. Vire na Rua Maria Moscardi Fanini, 261. Estacione gratuitamente no pátio do Mercado Goes.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                    <Bus className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">De Transporte Público (Ligeirinho / Ônibus)</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Diversas linhas de ônibus conectam a Praça Rui Barbosa ao eixo Marechal Floriano / Wenceslau Braz no Guaíra. Desembarque próximo ao Mercado Goes para um acesso direto e seguro.
                </p>
              </div>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Serviços de Conserto de Celular para Atendimento ao Centro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Tela Expresso</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Substituição rápida de tela trincada para iPhone, Samsung Galaxy, Xiaomi e Motorola com garantia de 90 dias.
                </p>
                <Link to="/conserto-de-tela-de-celular-curitiba" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Troca de Tela &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Bateria na Hora</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Bateria descarregando rápido? Trocamos por uma nova certificada enquanto você aguarda com todo conforto.
                </p>
                <Link to="/servico/troca-de-bateria" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Troca de Bateria &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Reparo de Placa & Conector</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Aparelho que não liga, molhou ou não carrega. Laboratório com microscópio de microssoldagem.
                </p>
                <Link to="/servico/troca-de-conector-de-carga" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Conector de Carga &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Cards de Unidades Reais */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Lojas Físicas SUNCELL em Curitiba
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOJAS.map((loja) => (
                <div key={loja.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        SUNCELL Unidade {loja.nome}
                      </h3>
                      {loja.id === "guaira" && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-100 text-suncell-orange rounded-full uppercase">
                          Mais próxima do Centro
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-suncell-orange shrink-0" />
                      {loja.endereco}
                    </p>
                    <p className="text-xs text-gray-500 mb-4 bg-white p-2.5 rounded-lg border border-gray-200">
                      📍 {loja.pontoReferencia}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={getWhatsAppLink(loja.whatsapp, "Conserto Centro", typeof window !== "undefined" ? window.location.href : "")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs rounded-lg text-center transition-colors"
                    >
                      WhatsApp {loja.nome.replace("SUNCELL ", "")}
                    </a>
                    <button
                      onClick={() => openStoreDetailsModal(loja.id)}
                      className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-xs rounded-lg transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-12">
            <FAQAccordion faqItems={faqCentro} title="Perguntas Frequentes sobre Atendimento para o Centro de Curitiba" />
          </section>

          {/* Nav Links */}
          <section className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <h3 className="font-bold text-gray-900 mb-4">Veja também:</h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
              <Link to="/conserto-de-celular-curitiba" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Conserto de Celular Curitiba
              </Link>
              <Link to="/conserto-de-tela-de-celular-curitiba" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Troca de Tela Curitiba
              </Link>
              <Link to="/conserto-celular-samsung-curitiba" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Conserto Samsung Curitiba
              </Link>
              <Link to="/conserto-de-celular-perto-de-mim" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Assistência Perto de Mim
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
