import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, Phone, ChevronRight, CheckCircle, Navigation, ShieldCheck, Heart, ArrowLeft, AlertCircle } from "lucide-react";
import { findPageBySlug, LOJAS, getBairrosPages, getCidadesPages, getAparelhosPages, getServicosPages, rotaDe, PageData, getLojasPages } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";

interface ProgrammaticPageProps {
  type: "bairro" | "cidade" | "aparelho" | "servico" | "loja";
}

export default function ProgrammaticPage({ type }: ProgrammaticPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const page = findPageBySlug(type, slug || "");

  // Redireciona para 404 se a página programática não for encontrada
  if (!page) {
    return <Navigate to="/404" replace />;
  }

  // Obter loja prioritária recomendada e secundária
  const lojaProxima = LOJAS.find((l) => l.id === page.lojaMaisProxima) || LOJAS[0];
  const lojaSecundaria = LOJAS.find((l) => l.id !== page.lojaMaisProxima) || LOJAS[1];

  // Obter sugestões laterais (lateral linking para rasteamento de SEO)
  const todasCidades = getCidadesPages();
  const todosBairros = getBairrosPages();
  const todosAparelhos = getAparelhosPages();
  const todosServicos = getServicosPages();
  const todasLojas = getLojasPages();

  let linkSugestoes: PageData[] = [];
  if (type === "bairro") {
    // Pegar outros bairros da mesma região ou próximos
    linkSugestoes = todosBairros
      .filter((b) => b.slug !== page.slug && b.regiao === page.regiao)
      .slice(0, 5);
  } else if (type === "cidade") {
    linkSugestoes = todasCidades.filter((c) => c.slug !== page.slug).slice(0, 5);
  } else if (type === "aparelho") {
    linkSugestoes = todosAparelhos.filter((a) => a.slug !== page.slug);
  } else if (type === "servico") {
    linkSugestoes = todosServicos.filter((s) => s.slug !== page.slug);
  } else if (type === "loja") {
    linkSugestoes = todasLojas.filter((l) => l.slug !== page.slug);
  }

  // Lista de serviços oferecidos na página
  const servicosDestaque = [
    { nome: "Troca de Tela Expresso", desc: "Instalação rápida de telas premium com cores vivas e toque perfeito." },
    { nome: "Troca de Bateria", desc: "Recupere o tempo de carga do seu celular com baterias de alta duração." },
    { nome: "Reparo de Placa Mãe", desc: "Especialistas em microsoldagem para recuperar aparelhos que não ligam." },
    { nome: "Conector de Carga", desc: "Substituição da entrada USB-C ou Lightning com mau contato." },
    { nome: "Recuperação de Celular Molhado", desc: "Desoxidação técnica profissional com alta taxa de sucesso." }
  ];

  return (
    <>
      {/* Helmet SEO Otimizado para este local/aparelho específico */}
      <EnhancedSEO pageData={page} canonicalPath={rotaDe(page)} />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Link para voltar com toque grande */}
          <Link
            id="back-to-home-link"
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-2 px-1 focus:outline-none"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Página Inicial</span>
          </Link>

          {/* Banner Principal da Rota (H1 com keyword focada) */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-suncell-orange/5 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md mb-4">
                  <MapPin size={12} />
                  <span>Atendimento {type === "bairro" || type === "cidade" ? "Local" : "Especializado"}</span>
                </span>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight leading-tight">
                  {page.h1}
                </h1>

                <p className="mt-6 font-sans text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                  {page.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-suncell-orange" />
                    <span>Diagnóstico 100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-suncell-orange" />
                    <span>Serviço com Garantia</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                  <img
                    src="https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp"
                    alt={`Loja Física SUNCELL Assistência Técnica Celular - Unidades em Curitiba`}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-[#0D0D0D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-sans text-xs text-white font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-suncell-orange animate-pulse" />
                      <span>Fotos das Lojas SUNCELL em Curitiba</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal Dividido em Duas Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Coluna Esquerda: Detalhes, Serviços Oferecidos e FAQ */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Seção de Diferenciais do Serviço */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0D0D0D] mb-6">
                  Nossos Serviços em Destaque
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {servicosDestaque.map((serv, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="mt-1">
                        <CheckCircle size={18} className="text-suncell-orange shrink-0" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#0D0D0D]">
                          {serv.nome}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                          {serv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seção FAQ Acordeão Localizado (Altamente recomendado para SEO e idosos) */}
              {page.faq && page.faq.length > 0 && (
                <div>
                  <h2 className="font-display font-extrabold text-2xl text-[#0D0D0D] mb-6 flex items-center gap-2">
                    <span>Dúvidas Frequentes</span>
                  </h2>
                  <FAQAccordion items={page.faq} />
                </div>
              )}

              {/* Lateral Linking: Links recomendados para outras páginas (Essencial para Rastreamento SEO) */}
              {linkSugestoes.length > 0 && (
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="font-display font-bold text-base text-[#0D0D0D] mb-4 uppercase tracking-wider">
                    Outras áreas e atendimentos de interesse:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {linkSugestoes.map((sug) => (
                      <Link
                        id={`sug-link-${sug.slug}`}
                        key={sug.slug}
                        to={rotaDe(sug)}
                        className="px-4 py-2 rounded-lg bg-white hover:bg-suncell-orange/5 border border-gray-100 hover:border-suncell-orange/20 text-gray-700 hover:text-suncell-orange font-sans text-xs sm:text-sm font-semibold transition-all shadow-sm"
                      >
                        {type === "bairro" ? `Celular no ${sug.nome}` : type === "cidade" ? `Celular em ${sug.nome}` : sug.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Coluna Direita: Caixa de Contato/Orçamento Fixa e Detalhes da Loja Proxima */}
            <div className="space-y-8">
              
              {/* Caixa de Ação Prioritária (WhatsApp e Endereço) */}
              <div className="bg-white border-2 border-suncell-orange/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-suncell-orange text-white text-[10px] font-mono uppercase font-bold rounded-bl-xl">
                  Recomendado para Você
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0D0D0D]">
                  Fazer Orçamento Grátis
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Fale diretamente com os nossos técnicos da unidade mais conveniente para você. O diagnóstico é rápido e gratuito!
                </p>

                {/* Loja Mais Próxima */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-suncell-orange font-bold">Unidade Recomendada:</span>
                    <h4 className="font-display font-bold text-lg text-[#0D0D0D] mt-0.5">{lojaProxima.nome}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                    <MapPin size={16} className="text-suncell-orange shrink-0 mt-0.5" />
                    <span>{lojaProxima.endereco}</span>
                  </div>

                  <a
                    id="programmatic-whats-btn-primary"
                    href={getWhatsAppLink(lojaProxima.whatsapp, `Pág SEO - Recomendado ${lojaProxima.nome}`, typeof window !== "undefined" ? window.location.href : "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light hover:from-suncell-orange-light hover:to-suncell-orange text-white text-center font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_4px_12px_rgba(255,107,0,0.15)] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Phone size={16} />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    id="programmatic-maps-btn-primary"
                    href={lojaProxima.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#F5F5F7] hover:bg-gray-100 border border-gray-200 text-gray-700 text-center font-sans font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <Navigation size={12} className="text-suncell-orange" />
                    <span>Ver no Google Maps</span>
                  </a>
                </div>

                {/* Loja Secundária Alternativa */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-[11px] text-gray-400 mb-2">Quer falar com a outra unidade?</p>
                  <a
                    id="programmatic-whats-btn-secondary"
                    href={getWhatsAppLink(lojaSecundaria.whatsapp, `Pág SEO - Alternativo ${lojaSecundaria.nome}`, typeof window !== "undefined" ? window.location.href : "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 bg-[#F5F5F7] hover:bg-gray-100 border border-gray-200 text-gray-600 text-center font-sans font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <Phone size={12} />
                    <span>Unidade {lojaSecundaria.id === "guaira" ? "Guaíra" : "Alto Boqueirão"}</span>
                  </a>
                </div>

              </div>

              {/* Informações de Coleta e Entrega Segura */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-suncell-orange/10 rounded-lg text-suncell-orange">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-[#0D0D0D]">Coleta via Motoboy</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Não pode ir até a loja? Nós providenciamos a coleta e entrega segura do seu celular via motoboy parceiro com total rastreabilidade. Peça detalhes no WhatsApp!
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}
