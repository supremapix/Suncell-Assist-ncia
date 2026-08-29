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

export default function ConsertoSitioCercado() {
  const whatsappMsg = encodeURIComponent("Olá! Sou do Sítio Cercado e preciso de um orçamento para meu celular na unidade Alto Boqueirão.");
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=5541997501961&text=${whatsappMsg}`;

  const faqSitioCercado = [
    {
      q: "Onde fica a loja da SUNCELL mais próxima do Sítio Cercado?",
      a: "Nossa loja parceira de referência para o Sítio Cercado é a SUNCELL Alto Boqueirão, localizada na Rua Pastor Antônio Polito, 1805, dentro do Mercado Goes. Ela fica a apenas 3 a 5 minutos de carro ou ônibus do Sítio Cercado, subindo pela Rua Izaac Ferreira da Cruz ou Rua Eduardo Pinto da Rocha."
    },
    {
      q: "A unidade possui estacionamento gratuito para moradores do Sítio Cercado?",
      a: "Sim! Por estar instalada dentro do Mercado Goes, a loja conta com amplo estacionamento coberto e gratuito, além de praça de alimentação e segurança privada."
    },
    {
      q: "O orçamento do celular é gratuito na loja do Alto Boqueirão?",
      a: "Com certeza! Testamos o seu celular na hora sem nenhum custo ou taxa de avaliação. Você só autoriza o reparo se concordar com o orçamento."
    },
    {
      q: "Quanto tempo demora para trocar a tela ou bateria vindo do Sítio Cercado?",
      a: "A maioria das trocas de tela e bateria fica pronta em cerca de 45 minutos a 1 hora. Você pode aproveitar para fazer compras no supermercado e retirar o celular novo em folha."
    }
  ];

  const pageSEO = {
    type: "bairro" as const,
    slug: "sitio-cercado",
    nome: "Sítio Cercado, Curitiba",
    lojaMaisProxima: "boqueirao" as const,
    h1: "Conserto de Celular para Sítio Cercado, Curitiba",
    title: "Conserto de Celular para Sítio Cercado Curitiba | SUNCELL",
    description: "Conserto de celular para moradores do Sítio Cercado, Curitiba. Atendimento expresso na unidade vizinha do Alto Boqueirão no Mercado Goes. Diagnóstico grátis!",
    intro: "Morador do Sítio Cercado em Curitiba? A SUNCELL atende toda a região da Izaac Ferreira da Cruz e arredores em nossa unidade parceira no Alto Boqueirão (no Mercado Goes, a apenas 5 minutos). Diagnóstico gratuito, garantia e troca de tela na hora!",
    faq: faqSitioCercado
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-de-celular-sitio-cercado" />

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
              <li className="font-semibold text-gray-800">Sítio Cercado</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Atendimento Vizinho Vizinho ao Sítio Cercado (5 Minutos)
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto de Celular para Sítio Cercado, Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Precisando consertar o celular no <strong className="text-gray-900 font-semibold">Sítio Cercado</strong>? A SUNCELL atende moradores da região da Rua Izaac Ferreira da Cruz, Tijucas do Sul e Bairro Novo na nossa loja vizinha no <strong className="text-gray-900 font-semibold">Alto Boqueirão (Mercado Goes)</strong>.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl mb-8">
                <p className="text-sm text-blue-900 font-medium flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Loja Vizinha Mais Próxima:</strong> A unidade <strong>SUNCELL Alto Boqueirão (Rua Pastor Antônio Polito, 1805)</strong> fica a menos de 5 minutos do Sítio Cercado, colada na divisa do bairro, com amplo estacionamento coberto grátis e segurança no Mercado Goes!
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
                  WhatsApp Unidade Alto Boqueirão
                </a>
                <a 
                  href="https://share.google/ZzOtA47yW8m6T9fBr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm sm:text-base gap-2"
                >
                  <Navigation className="w-5 h-5 text-blue-600" />
                  Como Chegar em 5 Min
                </a>
              </div>
            </div>
          </div>

          {/* Serviços Principais */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Serviços Rápidos de Conserto de Celular
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Tela Expresso</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Telas de alta definição para Samsung Galaxy, iPhone, Xiaomi e Motorola com garantia legal de 90 dias.
                </p>
                <Link to="/conserto-de-tela-de-celular-curitiba" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Troca de Tela &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Bateria na Hora</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Troca rápida para celulares descarregando rapidamente ou esquentando. Baterias com selo de qualidade.
                </p>
                <Link to="/servico/troca-de-bateria" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Bateria &rarr;
                </Link>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Conector de Carga & Placa</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Conserto para entrada de carga quebrada, mau contato ou celulares que não ligam.
                </p>
                <Link to="/servico/troca-de-conector-de-carga" className="text-xs font-semibold text-suncell-orange hover:underline">
                  Ver detalhes de Conector de Carga &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* Card da Loja Física Alto Boqueirão */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sua Loja Física SUNCELL ao Lado do Sítio Cercado
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-2xl border-2 border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">SUNCELL Alto Boqueirão</h3>
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
                  5 min do Sítio Cercado
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                Rua Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR
              </p>
              <p className="text-xs text-gray-500 mb-6 bg-white p-3 rounded-xl border border-gray-200">
                📍 <strong>Ponto de Referência:</strong> Dentro do Mercado Goes - Estacionamento Gratuito e Seguro
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={getWhatsAppLink("5541997501961", "Conserto Sítio Cercado", typeof window !== "undefined" ? window.location.href : "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  Chamar no WhatsApp (41) 99750-1961
                </a>
                <button
                  onClick={() => openStoreDetailsModal("boqueirao")}
                  className="px-5 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-sm rounded-xl transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-12">
            <FAQAccordion faqItems={faqSitioCercado} title="Perguntas Frequentes sobre Atendimento para o Sítio Cercado" />
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
