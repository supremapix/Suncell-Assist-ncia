import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Search, Smartphone, ShieldCheck, Compass, HelpCircle } from "lucide-react";
import { getBairrosPages, getCidadesPages, rotaDe } from "../siteData";
import EnhancedSEO from "./EnhancedSEO";

export default function Cobertura() {
  const [searchQuery, setSearchQuery] = useState("");

  const bairros = getBairrosPages();
  const cidades = getCidadesPages();

  const pageSEO = {
    title: "Bairros & Cidades Atendidas em Curitiba e RMC | SUNCELL Assistência",
    description: "Confira todos os 75 bairros de Curitiba e cidades vizinhas atendidas pela SUNCELL Assistência Técnica Celular. Encontre sua região e conserte seu smartphone hoje!",
  };

  // Filtrar bairros e cidades com base na busca
  const filteredBairros = bairros.filter(
    (b) => b.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  );

  const filteredCidades = cidades.filter(
    (c) => c.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .includes(searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  );

  // Agrupar bairros por Região (para ficar organizado e bonito)
  const bairrosPorRegiao: Record<string, typeof bairros> = {};
  filteredBairros.forEach((b) => {
    const regiao = b.regiao || "Outros";
    if (!bairrosPorRegiao[regiao]) {
      bairrosPorRegiao[regiao] = [];
    }
    bairrosPorRegiao[regiao].push(b);
  });

  return (
    <>
      <EnhancedSEO title={pageSEO.title} description={pageSEO.description} canonicalPath="/bairros-e-cidades" />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Link para voltar */}
          <Link
            id="back-to-home-from-coverage"
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-2 px-1 focus:outline-none"
          >
            <ArrowLeft size={16} />
            <span>Voltar para Página Inicial</span>
          </Link>

          {/* Banner Principal */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-suncell-orange/5 rounded-full blur-3xl -z-10" />
            
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md mb-4">
              <Compass size={12} />
              <span>Presença Regional Completa</span>
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight leading-tight">
              Bairros & Cidades Atendidas pela SUNCELL
            </h1>

            <p className="mt-4 font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
              Oferecemos consertos de celulares de alta precisão com laboratório próprio e equipe treinada para atender com rapidez moradores de Curitiba e toda a Região Metropolitana. Clique no seu bairro ou cidade para acessar informações exclusivas de atendimento local, dúvidas frequentes e a unidade física recomendada.
            </p>

            {/* Caixa de Busca com toque fácil para idosos */}
            <div className="mt-8 max-w-xl relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input
                id="coverage-search-input"
                type="text"
                placeholder="Busque por bairro ou cidade de Curitiba (ex: Parolin, Fazendinha...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 hover:bg-gray-100/70 border-2 border-gray-100 hover:border-gray-200 focus:border-suncell-orange focus:bg-white text-gray-800 font-sans font-semibold text-base shadow-inner focus:outline-none transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-xs font-bold text-gray-400 hover:text-suncell-orange transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Cidades da Região Metropolitana */}
          {filteredCidades.length > 0 && (
            <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0D0D0D] mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-suncell-orange rounded-full" />
                Cidades da Região Metropolitana
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredCidades.map((c) => (
                  <Link
                    id={`coverage-city-link-${c.slug}`}
                    key={c.slug}
                    to={rotaDe(c)}
                    className="p-3.5 bg-[#F8F9FA] hover:bg-suncell-orange/5 border border-gray-100 hover:border-suncell-orange/20 rounded-xl transition-all text-center flex flex-col justify-center items-center gap-1 group shadow-sm hover:shadow active:scale-[0.98]"
                  >
                    <span className="font-sans font-bold text-sm text-[#0D0D0D] group-hover:text-suncell-orange transition-colors">
                      {c.nome}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      Região Metropolitana
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bairros de Curitiba agrupados por região */}
          {Object.keys(bairrosPorRegiao).length > 0 ? (
            <div className="space-y-8">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0D0D0D] flex items-center gap-2">
                <span className="w-2.5 h-6 bg-suncell-orange rounded-full" />
                Bairros de Curitiba
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.keys(bairrosPorRegiao).map((regiao) => (
                  <div key={regiao} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0D0D0D] pb-3 border-b border-gray-100 mb-6 flex items-center justify-between">
                      <span>Região {regiao}</span>
                      <span className="text-xs font-mono text-gray-400 font-semibold uppercase">
                        {bairrosPorRegiao[regiao].length} {bairrosPorRegiao[regiao].length === 1 ? "Bairro" : "Bairros"}
                      </span>
                    </h3>

                    <div className="grid grid-cols-2 gap-3 flex-grow">
                      {bairrosPorRegiao[regiao].map((b) => (
                        <Link
                          id={`coverage-bairro-link-${b.slug}`}
                          key={b.slug}
                          to={rotaDe(b)}
                          className="px-4 py-3 bg-[#F8F9FA] hover:bg-suncell-orange/5 border border-gray-100 hover:border-suncell-orange/20 rounded-xl transition-all text-left flex items-center justify-between group shadow-2xs hover:shadow-xs active:scale-[0.98]"
                        >
                          <span className="font-sans font-bold text-xs sm:text-sm text-[#0D0D0D] group-hover:text-suncell-orange truncate pr-1">
                            {b.nome}
                          </span>
                          <span className="text-[10px] text-suncell-orange shrink-0">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            searchQuery && (
              <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                <HelpCircle size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-1">Nenhum resultado encontrado</h3>
                <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto">
                  Não encontramos nenhum bairro ou cidade com o nome "{searchQuery}". Experimente outra palavra-chave!
                </p>
              </div>
            )
          )}

          {/* Diferenciais SUNCELL de Atendimento */}
          <div className="bg-gradient-to-r from-suncell-black to-suncell-dark-gray text-white rounded-3xl p-6 sm:p-10 lg:p-12 mt-12 border border-suncell-orange/20 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-suncell-orange/10 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-suncell-orange font-bold tracking-wider">Atendimento Especial</span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1 mb-4 leading-snug">
                    Por que escolher a SUNCELL?
                  </h3>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Oferecemos um serviço humanizado e transparente em locais de fácil acesso, para que seu celular seja reparado com a melhor tecnologia do mercado paranaense.
                </p>
              </div>

              <div className="p-6 bg-suncell-dark-gray/50 rounded-2xl border border-suncell-medium-gray/30">
                <ShieldCheck size={32} className="text-suncell-orange mb-4" />
                <h4 className="font-sans font-bold text-base text-white">Garantia em Cada Conserto</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Todos os reparos de telas, conectores, baterias e soldas de placa na SUNCELL acompanham certificado de garantia válido por 3 meses (90 dias).
                </p>
              </div>

              <div className="p-6 bg-suncell-dark-gray/50 rounded-2xl border border-suncell-medium-gray/30">
                <Smartphone size={32} className="text-suncell-orange mb-4" />
                <h4 className="font-sans font-bold text-base text-white">Consertos na Hora (Expresso)</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  A maioria das manutenções é feita no mesmo dia em menos de 1 hora! Faça suas compras com total conforto enquanto reparamos seu aparelho.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
