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
  Car
} from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function ConsertoSantaFelicidade() {
  const whatsappMsg = encodeURIComponent("Olá! Sou do bairro Santa Felicidade e preciso de um orçamento para meu celular.");
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=5541999176640&text=${whatsappMsg}`;

  const faqSantaFelicidade = [
    {
      q: "A SUNCELL atende moradores do bairro Santa Felicidade em Curitiba?",
      a: "Sim! Atendemos diariamente muitos moradores do bairro Santa Felicidade, Cascatinha, São Braz, Butiatuvinha e Santo Inácio. Para garantir comodidade com estacionamento gratuito e segurança privada, nossas duas lojas físicas ficam no Mercado Goes (unidades Guaíra e Alto Boqueirão)."
    },
    {
      q: "Qual a melhor unidade SUNCELL para quem vem de Santa Felicidade?",
      a: "A Unidade Guaíra é a mais conveniente para quem mora em Santa Felicidade, com trajeto fácil via Av. Manoel Ribas, Contorno Norte ou Av. Cândido Hartmann até a Rua Maria Moscardi Fanini, 261."
    },
    {
      q: "O orçamento do celular é 100% gratuito?",
      a: "Sim! Não cobramos nada para diagnosticar seu celular. Testamos bateria, conector de carga, tela e placa sem nenhum compromisso."
    },
    {
      q: "Quanto tempo demora o conserto para quem vem de Santa Felicidade?",
      a: "A maioria das trocas de tela e de bateria é finalizada em menos de 1 hora. Você pode deixar o celular conosco, fazer suas compras no Mercado Goes e buscar o aparelho pronto e testado."
    }
  ];

  const pageSEO = {
    type: "bairro" as const,
    slug: "santa-felicidade",
    nome: "Santa Felicidade, Curitiba",
    lojaMaisProxima: "guaira" as const,
    h1: "Conserto de Celular para Santa Felicidade, Curitiba",
    title: "Conserto de Celular para Santa Felicidade Curitiba | SUNCELL",
    description: "Assistência técnica de celular para moradores de Santa Felicidade, Curitiba. Troca de tela, bateria e reparo de placa com diagnóstico grátis e garantia de 90 dias.",
    intro: "Procurando conserto de celular e assistência técnica para o bairro Santa Felicidade em Curitiba? A SUNCELL oferece atendimento especializado, peças de alta qualidade e garantia de 90 dias com orçamento 100% gratuito.",
    faq: faqSantaFelicidade
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-de-celular-santa-felicidade" />

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
              <li className="font-semibold text-gray-800">Santa Felicidade</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-orange-100 text-suncell-orange font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Atendimento Especializado para Santa Felicidade
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto de Celular para Santa Felicidade, Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oferecemos soluções completas de manutenção em celulares para moradores do gastronômico bairro <strong className="text-gray-900 font-semibold">Santa Felicidade</strong> e regiões vizinhas (Cascatinha, São Braz, Butiatuvinha e Santo Inácio).
              </p>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
                <p className="text-sm text-amber-900 font-medium flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-suncell-orange shrink-0 mt-0.5" />
                  <span>
                    <strong>Informação de Transparência:</strong> Para disponibilizar aos nossos clientes estacionamento coberto inteiramente gratuito e vigilância privada, nossas lojas físicas estão instaladas no Mercado Goes. A unidade mais recomendada para Santa Felicidade é a <strong>SUNCELL Guaíra (Rua Maria Moscardi Fanini, 261)</strong>.
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
                  Orçamento Grátis via WhatsApp
                </a>
                <Link 
                  to="/conserto-de-tela-de-celular-curitiba" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm sm:text-base gap-2"
                >
                  <Wrench className="w-5 h-5 text-suncell-orange" />
                  Troca de Tela Expresso
                </Link>
              </div>
            </div>
          </div>

          {/* Serviços Principais */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Serviços de Conserto de Celular Oferecidos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Tela</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Telas originais e premium de alta resolução para Apple iPhone, Samsung Galaxy, Xiaomi e Motorola com garantia de 90 dias.
                </p>
                <Link to="/conserto-de-tela-de-celular-curitiba" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Troca de Tela &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Bateria</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Substituição imediata para celulares que descarregam rápido ou desligam sozinhos. Baterias com teste de retenção.
                </p>
                <Link to="/servico/troca-de-bateria" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Bateria &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Reparo de Placa & Carga</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Aparelho que não liga, molhou ou não aceita o cabo de carga. Microssoldagem técnica de precisão em laboratório.
                </p>
                <Link to="/servico/troca-de-conector-de-carga" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Conector de Carga &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Cards de Lojas Físicas */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Lojas Físicas SUNCELL para Atendimento a Santa Felicidade
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
                      href={getWhatsAppLink(loja.whatsapp, "Conserto Santa Felicidade", typeof window !== "undefined" ? window.location.href : "")}
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
            <FAQAccordion faqItems={faqSantaFelicidade} title="Perguntas Frequentes sobre Atendimento para Santa Felicidade" />
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
