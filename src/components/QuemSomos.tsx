import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Heart, Award, MapPin, Phone } from "lucide-react";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import { LOJAS } from "../siteData";
import { openStoreDetailsModal } from "./StoreModal";

export default function QuemSomos() {
  const pageSEO = {
    title: "Quem Somos - Conheça a SUNCELL Assistência Técnica Curitiba",
    description: "Conheça a história e os valores da SUNCELL Assistência Técnica em Curitiba. Duas lojas físicas no Guaíra e Alto Boqueirão prontas para o seu conserto rápida.",
  };

  return (
    <>
      <EnhancedSEO title={pageSEO.title} description={pageSEO.description} canonicalPath="/quem-somos" />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Voltar com toque grande */}
          <Link
            id="back-to-home-from-about"
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-2 px-1 focus:outline-none"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Página Inicial</span>
          </Link>

          {/* Banner de apresentação */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-suncell-orange/5 rounded-full blur-3xl -z-10" />
            
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md mb-4">
              <Award size={12} />
              <span>Nossa História & Valores</span>
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight leading-tight">
              Sua assistência técnica definitiva em Curitiba
            </h1>

            <p className="mt-6 font-sans text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              A SUNCELL é referência em manutenção e consertos de smartphones de todas as marcas com honestidade, agilidade e garantia real. Unimos a praticidade de estarmos localizados dentro do Mercado Goes (unidades Guaíra e Alto Boqueirão) com o mais alto nível técnico de laboratórios próprios de última geração.
            </p>
          </div>

          {/* Imagem das duas lojas em Curitiba */}
          <div 
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-12 relative group cursor-pointer"
            onClick={() => openStoreDetailsModal("ambas")}
          >
            <img
              src="https://img.suncellassistencia.com.br/assistencia-tecnica-curitiba-cwb-parana-brasil.webp"
              alt="Lojas SUNCELL Assistência Técnica Celular em Curitiba Guaíra e Alto Boqueirão - Clique para ver detalhes"
              className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-sans text-sm text-white font-extrabold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-suncell-orange animate-pulse" />
                <span>Unidades SUNCELL Guaíra e Alto Boqueirão - Curitiba, PR</span>
              </p>
              <span className="text-[9px] bg-suncell-orange/30 text-white border border-suncell-orange/45 px-2.5 py-1 rounded-md font-black tracking-wider uppercase select-none">CLIQUE PARA DETALHES</span>
            </div>
          </div>

          {/* Conteúdo Institucional */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 mb-12">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mb-4">
                Transparência e Rapidez
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed text-sm sm:text-base">
                Sabemos o quanto o celular é indispensável no seu dia a dia, seja para o trabalho, estudos ou contato com a família. Por isso, na SUNCELL, nosso modelo de atendimento é focado na agilidade: a maior parte dos consertos comuns, como substituição de telas e troca de baterias, são realizados de forma expressa em menos de 1 hora.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
                Além disso, todos os diagnósticos na SUNCELL são 100% gratuitos e sem compromisso. Nossos técnicos testam as correntes elétricas, barramentos de carga e tensões de bateria antes de apresentar a solução ideal para você, evitando trocas desnecessárias de peças e garantindo o melhor custo-benefício.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="flex gap-3">
                <ShieldCheck size={24} className="text-suncell-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-bold text-base text-[#0D0D0D]">Garantia Real de 90 Dias</h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    Todos os nossos serviços acompanham termo de garantia de 3 meses para sua total segurança e tranquilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Heart size={24} className="text-suncell-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-bold text-base text-[#0D0D0D]">Atendimento Especial 60+</h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    Nossa equipe é pacientemente capacitada para explicar cada detalhe do reparo com clareza para idosos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sessão com as 2 lojas */}
          <div className="space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-[#0D0D0D] text-center mb-2">
              Nossas Unidades Físicas
            </h2>
            <p className="font-sans text-sm text-gray-500 text-center max-w-md mx-auto mb-8">
              Venha nos fazer uma visita dentro do Mercado Goes, com amplo estacionamento grátis e total segurança privada para você!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LOJAS.map((loja) => (
                <div key={loja.id} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-suncell-orange" />
                      {loja.nome}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                      {loja.endereco}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                    <a
                      id={`about-whats-btn-${loja.id}`}
                      href={getWhatsAppLink(loja.whatsapp, `Quem Somos - Unidade ${loja.nome}`, typeof window !== "undefined" ? window.location.href : "")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-xs flex items-center justify-center gap-1.5 hover:shadow-md transition-all cursor-pointer"
                    >
                      <Phone size={14} />
                      <span>Falar no WhatsApp</span>
                    </a>

                    <a
                      id={`about-maps-btn-${loja.id}`}
                      href={loja.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#F5F5F7] hover:bg-gray-100 border border-gray-200 text-gray-700 text-center font-sans font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      <MapPin size={12} className="text-suncell-orange" />
                      <span>Ver no GPS Maps</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
