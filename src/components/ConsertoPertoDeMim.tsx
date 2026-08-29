import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Smartphone, 
  Wrench,
  Navigation,
  Car
} from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";
import { openStoreDetailsModal } from "./StoreModal";

export default function ConsertoPertoDeMim() {
  const faqPertoDeMim = [
    {
      q: "Como saber qual loja SUNCELL fica mais perto de mim em Curitiba?",
      a: "Temos duas unidades estrategicamente situadas na zona sul e centro-sul de Curitiba. Se você está no Guaíra, Portão, Água Verde, Batel, Rebouças, Parolin, Lindóia ou Centro, a Unidade Guaíra (Rua Maria Moscardi Fanini, 261) é a mais próxima. Se você está no Alto Boqueirão, Sítio Cercado, Boqueirão, Xaxim, Pinheirinho, Umbará ou São José dos Pinhais, a Unidade Alto Boqueirão (Rua Pastor Antônio Polito, 1805) é a mais conveniente."
    },
    {
      q: "As duas lojas possuem estacionamento gratuito?",
      a: "Sim! Ambas as nossas unidades estão instaladas dentro do Mercado Goes, com estacionamento amplo, coberto e gratuito, além de segurança monitorada no local."
    },
    {
      q: "É preciso agendar horário antes de ir à loja?",
      a: "Não é necessário agendamento prévio. Você pode ir diretamente a qualquer uma de nossas unidades dentro do horário de atendimento (Segunda a Sexta das 10h às 13h e 14h às 20h | Sábado das 10h às 13h) e realizar o orçamento gratuito do seu celular na hora."
    },
    {
      q: "Vocês fazem o conserto do celular enquanto eu aguardo?",
      a: "Sim! Serviços frequentes como troca de tela e troca de bateria são executados de forma expressa, ficando prontos no mesmo dia em média em 1 hora."
    }
  ];

  const pageSEO = {
    type: "loja" as const,
    slug: "conserto-de-celular-perto-de-mim",
    nome: "Curitiba",
    lojaMaisProxima: "guaira" as const,
    h1: "Conserto de Celular Perto de Mim em Curitiba",
    title: "Conserto de Celular Perto de Mim em Curitiba | SUNCELL",
    description: "Encontre a assistência técnica de celular SUNCELL mais próxima de você em Curitiba. Duas unidades físicas completas no Mercado Goes (Guaíra e Alto Boqueirão).",
    intro: "Procurando uma assistência técnica de celular perto de você em Curitiba? A SUNCELL possui duas unidades físicas modernas e estruturadas dentro do Mercado Goes nos bairros Guaíra e Alto Boqueirão. Diagnóstico gratuito, estacionamento grátis e conserto no mesmo dia!",
    faq: faqPertoDeMim
  };

  return (
    <>
      <EnhancedSEO pageData={pageSEO} canonicalPath="/conserto-de-celular-perto-de-mim" />

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
              <li className="font-semibold text-gray-800">Assistência Perto de Mim</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Localização e Lojas Físicas Reais
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                Conserto de Celular Perto de Mim em Curitiba
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Procurando por <strong className="text-gray-900 font-semibold">"assistência técnica de celular perto de mim"</strong> ou <strong className="text-gray-900 font-semibold">"conserto de celular perto de mim"</strong> em Curitiba? A <strong className="text-gray-900 font-semibold">SUNCELL</strong> possui 2 unidades físicas próprias no Mercado Goes (Guaíra e Alto Boqueirão) prontas para te atender com agilidade e orçamento 100% gratuito.
              </p>

              <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-suncell-orange shrink-0" />
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Lojas Reais com Estacionamento Grátis:</strong> Ambas as nossas unidades ficam dentro do Mercado Goes com infraestrutura completa, facilidade de estacionar e segurança.
                </p>
              </div>
            </div>
          </div>

          {/* CARDS DESTACADOS DAS 2 UNIDADES FÍSICAS REAIS */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Escolha a Unidade SUNCELL Mais Próxima de Você
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* UNIDADE GUAÍRA */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-orange-500/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-suncell-orange text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Unidade Matriz Guaíra
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 text-suncell-orange rounded-2xl flex items-center justify-center font-bold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">SUNCELL Guaíra</h3>
                      <p className="text-xs text-suncell-orange font-semibold">Mercado Goes Guaíra</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm text-gray-700">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-suncell-orange shrink-0 mt-1" />
                      <span><strong>Endereço:</strong> Rua Maria Moscardi Fanini, 261 - Guaíra, Curitiba - PR, CEP 80220-450</span>
                    </p>
                    <p className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
                      📍 <strong>Ponto de Referência:</strong> Dentro do Mercado Goes - Estacionamento Gratuito e Seguro
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                      <span><strong>Horário:</strong> Seg a Sex: 10h–13h e 14h–20h | Sáb: 10h–13h</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600 shrink-0" />
                      <span><strong>WhatsApp:</strong> (41) 99917-6640</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mb-6 bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                    <strong>Bairros Próximos Atendidos:</strong> Guaíra, Portão, Água Verde, Lindóia, Fanny, Parolin, Rebouças, Batel, Centro Cívico, Mercês e Centro.
                  </p>
                </div>

                <div className="space-y-2">
                  <a 
                    href="https://api.whatsapp.com/send?phone=5541999176640&text=Ol%C3%A1!%20Estou%20buscando%20assist%C3%AAncia%20perto%20de%20mim%20na%20unidade%20Gua%C3%ADra."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    Chamar Unidade Guaíra no WhatsApp
                  </a>
                  <a 
                    href="https://share.google/fByJ4oHwD6vL8iC9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-suncell-orange" />
                    Abrir no Google Maps (Navegar)
                  </a>
                </div>
              </div>

              {/* UNIDADE ALTO BOQUEIRÃO */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-blue-500/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Unidade Alto Boqueirão
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">SUNCELL Alto Boqueirão</h3>
                      <p className="text-xs text-blue-600 font-semibold">Mercado Goes Alto Boqueirão</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm text-gray-700">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span><strong>Endereço:</strong> R. Pastor Antônio Polito, 1805 - Alto Boqueirão, Curitiba - PR, CEP 81770-260</span>
                    </p>
                    <p className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs">
                      📍 <strong>Ponto de Referência:</strong> Dentro do Mercado Goes - Estacionamento Gratuito e Seguro
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                      <span><strong>Horário:</strong> Seg a Sex: 10h–13h e 14h–20h | Sáb: 10h–13h</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600 shrink-0" />
                      <span><strong>WhatsApp:</strong> (41) 99750-1961</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mb-6 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                    <strong>Bairros Próximos Atendidos:</strong> Alto Boqueirão, Sítio Cercado, Boqueirão, Xaxim, Hauer, Ganchinho, Umbará, Pinheirinho e São José dos Pinhais.
                  </p>
                </div>

                <div className="space-y-2">
                  <a 
                    href="https://api.whatsapp.com/send?phone=5541997501961&text=Ol%C3%A1!%20Estou%20buscando%20assist%C3%AAncia%20perto%20de%20mim%20na%20unidade%20Alto%20Boqueir%C3%A3o."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    Chamar Unidade Alto Boqueirão no WhatsApp
                  </a>
                  <a 
                    href="https://share.google/ZzOtA47yW8m6T9fBr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    Abrir no Google Maps (Navegar)
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-12">
            <FAQAccordion faqItems={faqPertoDeMim} title="Dúvidas sobre Assistência Técnica Perto de Você em Curitiba" />
          </section>

          {/* Links Internos */}
          <section className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
            <h3 className="font-bold text-gray-900 mb-4">Veja também por serviço e região:</h3>
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
              <Link to="/bairros-e-cidades" className="px-3 py-1.5 bg-gray-100 hover:bg-suncell-orange hover:text-white rounded-lg transition-colors">
                75 Bairros e 15 Cidades
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
