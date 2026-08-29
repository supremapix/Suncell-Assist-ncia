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
  ArrowLeft,
  DollarSign,
  AlertTriangle
} from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function ConsertoTelaCuritiba() {
  const whatsappMsg = encodeURIComponent("Olá! Preciso de um orçamento para trocar a tela do meu celular em Curitiba.");
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=5541999176640&text=${whatsappMsg}`;

  const faqTela = [
    {
      q: "Quanto custa trocar a tela do celular em Curitiba?",
      a: "O valor depende do modelo e da tecnologia da tela (LCD, Incell, OLED ou Super AMOLED). Na SUNCELL, o orçamento é 100% gratuito e você só paga após autorizar o serviço. Solicite uma cotação rápida pelo nosso WhatsApp sem compromisso!"
    },
    {
      q: "Quanto tempo demora o serviço de troca de tela?",
      a: "Em média, a troca da tela é realizada em menos de 1 hora na SUNCELL. Enquanto você aguarda ou faz suas compras no Mercado Goes (unidades Guaíra ou Alto Boqueirão), nosso técnico realiza a instalação e os testes de calibração do touch."
    },
    {
      q: "Posso trocar apenas o vidro mantendo a minha tela original?",
      a: "Sim! Se a sua tela trincou o vidro externo mas a imagem continua perfeita e o toque na tela responde sem manchas ou linhas, realizamos a restauração trocando apenas o vidro laminado. Isso preserva a sua tela original de fábrica e economiza até 50% em comparação ao conjunto completo."
    },
    {
      q: "A tela trocada possui garantia na SUNCELL?",
      a: "Sim! Todas as trocas de tela na SUNCELL acompanham garantia legal de 90 dias (3 meses). A garantia cobre qualquer defeito de fabricação do display ou falha de toque pós-reparo."
    },
    {
      q: "Quais marcas de celulares vocês atendem para troca de tela?",
      a: "Substituímos telas de celulares Samsung Galaxy (todas as linhas S, A, M), Apple iPhone, Xiaomi (Redmi e Poco), Motorola (Moto G, Moto E e Edge), Realme e LG."
    }
  ];

  const pageSEO = {
    type: "servico" as const,
    slug: "conserto-de-tela-de-celular-curitiba",
    nome: "Curitiba",
    lojaMaisProxima: "guaira" as const,
    h1: "Conserto e Troca de Tela de Celular em Curitiba",
    title: "Conserto de Tela de Celular em Curitiba | SUNCELL",
    description: "Troca de tela de celular em Curitiba na hora. Reparo para tela quebrada, sem imagem ou touch travado em Samsung, iPhone, Xiaomi e Motorola. Diagnóstico grátis!",
    intro: "Procurando conserto ou troca de tela de celular em Curitiba? A SUNCELL oferece substituição expressa em menos de 1 hora com telas de alta qualidade, garantia de 90 dias e diagnóstico 100% gratuito em duas lojas físicas no Mercado Goes.",
    faq: faqTela
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-de-tela-de-celular-curitiba" />

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
              <li className="font-semibold text-gray-800">Troca de Tela</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-orange-100 text-suncell-orange font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Atendimento Expresso em Curitiba
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto e Troca de Tela de Celular em Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sua tela quebrou, trincou, ficou preta ou parou de responder ao toque? Na <strong className="text-gray-900 font-semibold">SUNCELL</strong>, realizamos a troca de tela do seu smartphone com peças de altíssima definição, garantia de 90 dias e diagnóstico grátis na hora.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all text-sm sm:text-base gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Consultar preço da tela pelo WhatsApp
                </a>
                <Link 
                  to="/conserto-de-celular-perto-de-mim" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm sm:text-base gap-2"
                >
                  <MapPin className="w-5 h-5 text-suncell-orange" />
                  Ver Unidades em Curitiba
                </Link>
              </div>
            </div>
          </div>

          {/* Seção 1: Tela quebrada ou sem imagem? */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-suncell-orange" />
              Tela quebrada ou sem imagem? Saiba o que fazer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Quando o celular sofre uma queda, o dano pode afetar apenas o vidro externo ou atingir a camada de display e touch. Na SUNCELL, avaliamos o tipo exato de dano para te indicar a solução mais econômica e segura:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-suncell-orange" />
                  Troca apenas do Vidro (Economia)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Recomendada quando o vidro trincou, mas a imagem está 100% visível, sem manchas pretas, linhas coloridas e com o touch funcionando perfeitamente em toda a tela. Mantém o display original de fábrica!
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-gray-700" />
                  Troca do Display Completo
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Necessária quando a tela está totalmente escura, piscando, apresentando linhas horizontais/verticais, manchas pretas vazadas de vazamento de cristal ou quando o toque na tela parou de responder.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 2: Marcas Atendidas para Troca de Tela */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Troca de Tela por Marca de Celular
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  Troca de tela Samsung em Curitiba
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Trabalhamos com telas Super AMOLED, Dynamic AMOLED e telas premium para toda a linha Samsung Galaxy S (S20, S21, S22, S23, S24), Galaxy A (A10, A14, A15, A34, A54, A55), Galaxy M e linha Note.
                </p>
                <Link to="/conserto-celular-samsung-curitiba" className="text-sm font-semibold text-suncell-orange hover:underline inline-flex items-center gap-1">
                  Ver conserto Samsung completo &rarr;
                </Link>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  Troca de tela iPhone em Curitiba
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Substituição de tela para iPhone do 11 ao 16 Pro Max. Opções de telas originais e premium com preservação de True Tone e calibração de sensor de proximidade e Face ID.
                </p>
                <Link to="/assistencia-tecnica-aparelho/iphone" className="text-sm font-semibold text-suncell-orange hover:underline inline-flex items-center gap-1">
                  Ver conserto iPhone completo &rarr;
                </Link>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  Troca de tela Xiaomi em Curitiba
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Troca rápida de tela para smartphones Xiaomi, Redmi e Poco (Redmi Note 10, 11, 12, 13, Poco X3, X5, X6, M7 e linhas Mi). Telas com alta taxa de atualização.
                </p>
                <Link to="/assistencia-tecnica-aparelho/xiaomi-redmi-poco" className="text-sm font-semibold text-suncell-orange hover:underline inline-flex items-center gap-1">
                  Ver conserto Xiaomi completo &rarr;
                </Link>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                  Troca de tela Motorola em Curitiba
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Conserto e troca de tela para Motorola Moto G (G9, G20, G30, G52, G54, G84), Moto E e linha Motorola Edge. Instalação rápida e vedação garantida.
                </p>
                <Link to="/assistencia-tecnica-aparelho/motorola" className="text-sm font-semibold text-suncell-orange hover:underline inline-flex items-center gap-1">
                  Ver conserto Motorola completo &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Dúvidas Frequentes do Cliente */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-10 h-10 bg-orange-100 text-suncell-orange rounded-xl flex items-center justify-center font-bold mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quanto custa trocar a tela do celular?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                O custo varia conforme o modelo do aparelho e a tecnologia do display. Na SUNCELL, você recebe orçamento 100% gratuito sem taxas veladas antes de aprovar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quanto tempo demora o serviço?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A maioria das trocas de tela na SUNCELL é concluída em cerca de 45 minutos a 1 hora. Você pode aguardar na loja ou fazer compras no supermercado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Onde trocar tela de celular em Curitiba?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A SUNCELL conta com duas lojas físicas dentro do Mercado Goes: Unidade Guaíra e Unidade Alto Boqueirão. Ambas possuem estacionamento gratuito e segurança.
              </p>
            </div>
          </section>

          {/* Unidades Físicas */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Lojas Físicas SUNCELL em Curitiba
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOJAS.map((loja) => (
                <div key={loja.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      SUNCELL Unidade {loja.nome}
                    </h3>
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
                      href={getWhatsAppLink(loja.whatsapp, "Troca de Tela", typeof window !== "undefined" ? window.location.href : "")}
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
            <FAQAccordion faqItems={faqTela} title="Perguntas Frequentes sobre Troca de Tela em Curitiba" />
          </section>

          {/* Nav Links */}
          <section className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <h3 className="font-bold text-gray-900 mb-4">Veja também outros serviços e regiões:</h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
              <Link to="/conserto-de-celular-curitiba" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Conserto de Celular Curitiba
              </Link>
              <Link to="/conserto-celular-samsung-curitiba" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Conserto Samsung Curitiba
              </Link>
              <Link to="/conserto-de-celular-curitiba-centro" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Conserto Celular Centro
              </Link>
              <Link to="/conserto-de-celular-perto-de-mim" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Assistência Perto de Mim
              </Link>
              <Link to="/bairros-e-cidades" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Todos os Bairros de Curitiba
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
