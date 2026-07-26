import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Tag, Calendar, Clock, ArrowRight, BookOpen, ShieldCheck, MapPin } from "lucide-react";
import { BLOG_POSTS } from "../blogData";
import EnhancedSEO from "./EnhancedSEO";

export default function BlogHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", "Preços e Orçamentos", "Guia de Emergência", "Análise e Dicas", "Informática e Notebooks", "Guia Tecnológico"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.resumo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todas" || post.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <EnhancedSEO
        pageData={{
          type: "servico",
          slug: "blog",
          nome: "Blog e Guias de Manutenção de Celulares Curitiba",
          lojaMaisProxima: "guaira",
          h1: "Blog & Central de Guias de Assistência Técnica em Curitiba",
          title: "Blog SUNCELL | Dicas, Preços e Guias de Conserto de Celular em Curitiba",
          description: "Artigos, tutoriais, estimativas de preços e guias de emergência para conserto de iPhone, Samsung, Xiaomi, Motorola e Notebooks em Curitiba.",
          intro: "Aprenda com quem é autoridade técnica em Curitiba. Dicas práticas, soluções para celulares molhados, preços atualizados e tutoriais de manutenção.",
          faq: []
        }}
        canonicalPath="/blog"
      />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header do Blog */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-md mb-4">
              <BookOpen size={14} />
              <span>Conhecimento & Autoridade Técnica</span>
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] tracking-tight">
              Central de Dicas & Guias TÉCNICOS em Curitiba
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              Tire dúvidas sobre valores de conserto, dicas de conservação de bateria, soluções para telas trincadas e truques para salvar celulares molhados.
            </p>
          </div>

          {/* Barra de Pesquisa e Filtros */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 mb-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Campo de Busca */}
              <div className="md:col-span-5 relative">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artigos por palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-sans focus:outline-none focus:border-suncell-orange focus:ring-1 focus:ring-suncell-orange transition-all"
                />
              </div>

              {/* Categorias */}
              <div className="md:col-span-7 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono font-bold text-gray-400 mr-2 uppercase flex items-center gap-1">
                  <Tag size={12} />
                  <span>Filtrar:</span>
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all ${
                      selectedCategory === cat
                        ? "bg-suncell-orange text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Grid de Artigos */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={post.imagem}
                      alt={post.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                      {post.categoria}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.data}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.tempoLeitura}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-lg text-gray-900 group-hover:text-suncell-orange transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blog/${post.slug}`}>
                          {post.titulo}
                        </Link>
                      </h2>

                      <p className="mt-3 text-sm text-gray-600 font-sans line-clamp-3 leading-relaxed">
                        {post.resumo}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-400">
                        Por {post.autor}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold font-sans text-suncell-orange hover:gap-2 transition-all"
                      >
                        <span>Ler artigo</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
              <Search size={32} className="mx-auto text-gray-300 mb-3" />
              <h3 className="font-bold text-gray-800 text-lg">Nenhum artigo encontrado</h3>
              <p className="text-sm text-gray-500 mt-1">Tente pesquisar com outros termos ou selecione a categoria "Todas".</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("Todas"); }}
                className="mt-4 px-4 py-2 bg-suncell-orange text-white text-xs font-bold rounded-lg hover:bg-suncell-orange/90 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          )}

          {/* Banner de CTA de Assistência Técnica */}
          <div className="mt-16 bg-gradient-to-br from-[#1C1C1E] to-[#0D0D0D] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold rounded-md mb-4 border border-suncell-orange/30">
                  <ShieldCheck size={14} />
                  <span>SUNCELL Assistência Técnica Curitiba</span>
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                  Seu celular ou notebook precisa de conserto urgente?
                </h2>
                <p className="mt-3 text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                  Traga seu aparelho em uma de nossas duas lojas físicas no Mercado Goes (Guaíra e Alto Boqueirão). Diagnóstico 100% gratuito e sem compromisso na hora!
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-gray-300">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-suncell-orange" /> Guaíra: R. Maria Moscardi Fanini, 261</span>
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-suncell-orange" /> Alto Boqueirão: R. Pastor Antônio Polito, 1805</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="https://wa.me/5541999176640?text=Olá!%20Li%20um%20artigo%20no%20blog%20e%20gostaria%20de%20um%20orçamento%20para%20meu%20celular."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-suncell-orange text-white font-sans font-bold rounded-xl hover:bg-suncell-orange/90 transition-all text-center text-sm shadow-lg shadow-suncell-orange/30"
                >
                  Solicitar Orçamento Grátis via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
