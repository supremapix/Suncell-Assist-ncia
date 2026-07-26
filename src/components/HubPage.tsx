import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, CheckCircle, MapPin, Smartphone, Laptop, Monitor, Droplets, Zap, Briefcase, Apple, ChevronRight, Phone } from "lucide-react";
import { findHubBySlug } from "../hubData";
import { SERVICOS_RAW, APARELHOS_RAW, LOJAS } from "../siteData";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";

export default function HubPage() {
  const { slug } = useParams<{ slug: string }>();
  const hub = findHubBySlug(slug || "");

  if (!hub) {
    return <Navigate to="/404" replace />;
  }

  // Mapeamento de ícones
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return <Smartphone size={24} className="text-suncell-orange" />;
      case "Laptop": return <Laptop size={24} className="text-suncell-orange" />;
      case "Monitor": return <Monitor size={24} className="text-suncell-orange" />;
      case "Droplets": return <Droplets size={24} className="text-suncell-orange" />;
      case "Zap": return <Zap size={24} className="text-suncell-orange" />;
      case "Briefcase": return <Briefcase size={24} className="text-suncell-orange" />;
      case "Apple": return <Apple size={24} className="text-suncell-orange" />;
      default: return <ShieldCheck size={24} className="text-suncell-orange" />;
    }
  };

  const servicosFiltro = SERVICOS_RAW.filter((s) => hub.servicosRelacionados.includes(s.slug));
  const aparelhosFiltro = APARELHOS_RAW.filter((a) => hub.aparelhosRelacionados.includes(a.slug));

  return (
    <>
      <EnhancedSEO
        pageData={{
          type: "servico",
          slug: `hub/${hub.slug}`,
          nome: hub.titulo,
          lojaMaisProxima: "guaira",
          h1: hub.h1,
          title: hub.titulo,
          description: hub.descricaoSeo,
          intro: hub.subtitulo,
          faq: hub.faqs
        }}
        canonicalPath={`/hub/${hub.slug}`}
      />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-1"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Página Inicial</span>
          </Link>

          {/* Hero Banner do Hub */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-suncell-orange/5 rounded-full blur-3xl -z-10" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-suncell-orange/10 border border-suncell-orange/20 rounded-xl">
                {getIcon(hub.icone)}
              </div>
              <span className="font-mono text-xs font-bold text-suncell-orange uppercase tracking-wider">
                Hub Especializado SUNCELL Curitiba
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight leading-tight">
              {hub.h1}
            </h1>

            <p className="mt-4 font-sans text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl">
              {hub.subtitulo}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <ShieldCheck size={14} className="text-suncell-orange" />
                <span>Diagnóstico 100% Gratuito</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <CheckCircle size={14} className="text-suncell-orange" />
                <span>Garantia de 90 Dias</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <MapPin size={14} className="text-suncell-orange" />
                <span>Lojas Guaíra e Alto Boqueirão</span>
              </div>
            </div>
          </div>

          {/* Conteúdo Explicativo Principal */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Sobre Nossos Serviços de {hub.categoria} em Curitiba
            </h2>
            <p className="font-sans text-base text-gray-700 leading-relaxed mb-6">
              {hub.conteudoPrincipal}
            </p>

            {/* CTAs diretos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {LOJAS.map((loja) => (
                <div key={loja.id} className="p-5 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                      <MapPin size={16} className="text-suncell-orange" />
                      Unidade {loja.nome}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-sans">{loja.endereco}</p>
                    <p className="text-xs text-suncell-orange font-mono font-bold mt-1">{loja.pontoReferencia}</p>
                  </div>
                  <a
                    href={`https://wa.me/${loja.whatsapp}?text=Olá!%20Acessei%20o%20Hub%20de%20${encodeURIComponent(hub.categoria)}%20e%20gostaria%20de%20um%20orçamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2.5 bg-suncell-orange text-white text-xs font-bold font-sans rounded-xl text-center hover:bg-suncell-orange/90 transition-colors shadow-sm"
                  >
                    Falar no WhatsApp {loja.nome}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Serviços Relacionados */}
          {servicosFiltro.length > 0 && (
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Serviços de Manutenção Relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicosFiltro.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/servico/${s.slug}`}
                    className="p-6 bg-white border border-gray-200/80 rounded-2xl hover:border-suncell-orange hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 text-base group-hover:text-suncell-orange transition-colors">
                        {s.nome}
                      </h3>
                      <p className="text-xs text-gray-600 font-sans mt-2 line-clamp-3">
                        {s.detalhes}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-suncell-orange font-mono">
                      <span>Ver detalhes</span>
                      <ChevronRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ do Hub */}
          {hub.faqs.length > 0 && (
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Dúvidas Frequentes sobre {hub.categoria}
              </h2>
              <FAQAccordion faqs={hub.faqs} />
            </div>
          )}

        </div>
      </main>
    </>
  );
}
