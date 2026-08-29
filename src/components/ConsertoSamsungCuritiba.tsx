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
  Zap,
  BatteryCharging,
  Cpu
} from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function ConsertoSamsungCuritiba() {
  const whatsappMsg = encodeURIComponent("Olá! Preciso de um orçamento para conserto do meu celular Samsung Galaxy em Curitiba.");
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=5541999176640&text=${whatsappMsg}`;

  const faqSamsung = [
    {
      q: "A SUNCELL é assistência técnica especializada em celulares Samsung Galaxy?",
      a: "Sim! Somos uma assistência técnica especializada de alta precisão para toda a linha de smartphones Samsung Galaxy em Curitiba. Trabalhamos com técnicos qualificados, ferramental avançado de bancada e peças de altíssima performance com garantia de 90 dias."
    },
    {
      q: "Vocês trocam a tela Super AMOLED do Samsung Galaxy em Curitiba?",
      a: "Sim! Realizamos a substituição de telas Super AMOLED e Dynamic AMOLED para aparelhos da linha Galaxy S (S20, S21, S22, S23, S24), Galaxy A, M e Z. Oferecemos opções de telas originais com preservação de brilho, taxa de atualização de 120Hz e sensor de digital na tela."
    },
    {
      q: "O meu Samsung Galaxy não liga ou não carrega, qual pode ser o problema?",
      a: "Pode ser uma falha no conector de carga tipo C, bateria degradada ou curto-circuito na placa-mãe. Na SUNCELL, o diagnóstico é 100% gratuito e feito na hora em nossas lojas do Guaíra e Alto Boqueirão."
    },
    {
      q: "Quanto tempo leva o conserto de um celular Samsung?",
      a: "A maioria das manutenções preventivas e corretivas, como troca de tela frontal, bateria e conector de carga, fica pronta no mesmo dia, em média em 1 hora de atendimento."
    },
    {
      q: "Qual a garantia do conserto para aparelhos Samsung?",
      a: "Oferecemos garantia total de 90 dias (3 meses) para todas as peças substituídas e serviços executados na SUNCELL."
    }
  ];

  const pageSEO = {
    type: "aparelho" as const,
    slug: "samsung-galaxy",
    nome: "Samsung Galaxy",
    lojaMaisProxima: "boqueirao" as const,
    h1: "Conserto de Celular Samsung em Curitiba",
    title: "Conserto de Celular Samsung em Curitiba | SUNCELL",
    description: "Conserto de celular Samsung Galaxy em Curitiba. Troca de tela AMOLED, bateria, conector de carga e reparo de placa. Diagnóstico grátis e garantia!",
    intro: "Procurando conserto e assistência para celular Samsung em Curitiba? A SUNCELL é especializada no conserto e manutenção de toda a linha Samsung Galaxy (Linhas S, A, M e Z). Diagnóstico gratuito, agilidade e garantia de 90 dias em nossas 2 lojas físicas no Mercado Goes.",
    faq: faqSamsung
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-celular-samsung-curitiba" />

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
              <li className="font-semibold text-gray-800">Samsung Galaxy</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Especialista Samsung Galaxy em Curitiba
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto de Celular Samsung em Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Seu <strong className="text-gray-900 font-semibold">Samsung Galaxy</strong> quebrou a tela, parou de carregar, está descarregando rápido ou não liga? A SUNCELL é <span className="font-semibold text-gray-900">assistência técnica especializada em celulares Samsung Galaxy em Curitiba</span>, com peças de altíssima qualidade, orçamento 100% gratuito e atendimento expresso no mesmo dia.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all text-sm sm:text-base gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Orçamento Grátis Samsung via WhatsApp
                </a>
                <Link 
                  to="/conserto-de-tela-de-celular-curitiba" 
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm sm:text-base gap-2"
                >
                  <Wrench className="w-5 h-5 text-suncell-orange" />
                  Troca de Tela Samsung
                </Link>
              </div>
            </div>
          </div>

          {/* Seção de Serviços Especializados Samsung */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Principais Serviços para Celulares Samsung
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Tela Samsung</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Substituição de tela trincada, preta ou com manchas para Galaxy S20, S21, S22, S23, S24, linha A e M. Telas Super AMOLED com cores vivas e touch fluido.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Garantia 90 dias • Instalação na hora</span>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Troca de Bateria Samsung</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Bateria descarregando rapidamente ou desligando com 20%? Trocamos a bateria do seu Samsung por uma nova com selo de segurança e retenção máxima de carga.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Troca rápida em 40 minutos</span>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-orange-100 text-suncell-orange rounded-lg flex items-center justify-center font-bold mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Conector de Carga USB-C</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Aparelho não reconhece o cabo ou apresenta aviso de umidade/mau contato? Trocamos o conector de carga tipo C com solda de precisão.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Carregamento rápido restaurado</span>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Reparo de Placa Galaxy</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Aparelho Galaxy não liga após queda ou aquecimento? Laboratório próprio em Curitiba equipado para microssoldagem de placa e recuperação de circuitos.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Diagnóstico gratuito de placa</span>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Desoxidação (Molhado)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Samsung caiu na água da piscina, mar ou chuva? Banho ultrassônico químico para remoção de ferrugem e salvamento do smartphone e seus dados.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Atendimento de emergência</span>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Tampa Traseira e Câmeras</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Substituição da tampa de vidro traseira e lentes de câmera trincadas do Samsung Galaxy. Mantém a estética e a vedação original.
                </p>
                <span className="text-xs font-semibold text-suncell-orange">Acabamento impecável</span>
              </div>
            </div>
          </section>

          {/* Modelos Atendidos */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modelos Samsung Galaxy Atendidos em Curitiba
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Atendemos todas as gerações da Samsung. Traga seu aparelho para avaliação sem custo:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block text-base mb-1">Linha Galaxy S</span>
                <span className="text-xs text-gray-500">S24, S23, S22, S21, S20, S10, FE, Ultra</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block text-base mb-1">Linha Galaxy A</span>
                <span className="text-xs text-gray-500">A55, A54, A34, A15, A14, A53, A32, A22</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block text-base mb-1">Linha Galaxy M</span>
                <span className="text-xs text-gray-500">M54, M53, M34, M23, M14, M62</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-bold text-gray-900 block text-base mb-1">Galaxy Z / Note</span>
                <span className="text-xs text-gray-500">Z Fold 5/4/3, Z Flip 5/4/3, Note 20/10</span>
              </div>
            </div>
          </section>

          {/* Lojas Físicas */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Onde Consertar Celular Samsung em Curitiba?
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
                      href={getWhatsAppLink(loja.whatsapp, "Conserto Samsung", typeof window !== "undefined" ? window.location.href : "")}
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
            <FAQAccordion faqItems={faqSamsung} title="Perguntas Frequentes sobre Conserto de Celular Samsung em Curitiba" />
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
              <Link to="/conserto-de-celular-curitiba-centro" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                Atendimento Centro de Curitiba
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
