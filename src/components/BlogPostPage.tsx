import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ShieldCheck, MapPin, Share2, MessageCircle, Phone } from "lucide-react";
import { findBlogBySlug, BLOG_POSTS } from "../blogData";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = findBlogBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <EnhancedSEO
        pageData={{
          type: "servico",
          slug: `blog/${post.slug}`,
          nome: post.titulo,
          lojaMaisProxima: "guaira",
          h1: post.titulo,
          title: `${post.titulo} | Blog SUNCELL Curitiba`,
          description: post.resumo,
          intro: post.resumo,
          faq: post.faqs
        }}
        canonicalPath={`/blog/${post.slug}`}
      />

      <main className="pt-28 pb-20 bg-[#F5F5F7] text-[#0D0D0D] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Voltar ao Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-suncell-orange transition-colors font-sans font-bold text-sm mb-8 py-1"
          >
            <ArrowLeft size={16} />
            <span>Voltar para o Blog</span>
          </Link>

          {/* Cabeçalho do Artigo */}
          <article className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/5 overflow-hidden">
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 mb-4">
              <span className="px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-bold uppercase rounded-md">
                {post.categoria}
              </span>
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

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0D0D0D] tracking-tight leading-snug">
              {post.titulo}
            </h1>

            {/* Autor EEAT Card */}
            <div className="mt-6 flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-suncell-orange/20 text-suncell-orange flex items-center justify-center font-bold text-sm">
                <User size={18} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-gray-900 block">{post.autor}</span>
                <span className="text-[11px] text-gray-500 font-sans">Especialista Técnico SUNCELL Curitiba</span>
              </div>
            </div>

            {/* Imagem de Capa */}
            <div className="mt-8 rounded-2xl overflow-hidden max-h-96 bg-gray-100 border border-gray-200">
              <img
                src={post.imagem}
                alt={post.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo HTML do Artigo */}
            <div
              className="mt-8 font-sans text-gray-700 text-base leading-relaxed space-y-6 article-body border-b border-gray-100 pb-10"
              dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
            />

            {/* Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-gray-400 font-bold uppercase mr-1">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 font-mono text-xs rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            {/* FAQ do Artigo */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                  Perguntas Frequentes Sobre Este Tema
                </h3>
                <FAQAccordion items={post.faqs} />
              </div>
            )}

            {/* Card de CTA Direto WhatsApp */}
            <div className="mt-12 bg-suncell-orange/10 border border-suncell-orange/30 rounded-2xl p-6 sm:p-8 text-center">
              <ShieldCheck size={36} className="mx-auto text-suncell-orange mb-3" />
              <h3 className="font-display font-extrabold text-xl text-gray-900">
                Ficou com dúvidas sobre o conserto do seu celular?
              </h3>
              <p className="text-sm text-gray-600 font-sans mt-2 max-w-xl mx-auto">
                Fale diretamente com os nossos técnicos certificados da SUNCELL em Curitiba e receba um orçamento prévio sem compromisso!
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/5541999176640?text=Olá!%20Li%20o%20artigo%20sobre%20${encodeURIComponent(post.titulo)}%20e%20gostaria%20de%20ajuda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-suncell-orange text-white font-sans font-bold text-sm rounded-xl hover:bg-suncell-orange/90 transition-all inline-flex items-center gap-2 shadow-lg shadow-suncell-orange/30"
                >
                  <MessageCircle size={16} />
                  <span>Falar no WhatsApp Unidade Guaíra</span>
                </a>
                <a
                  href={`https://wa.me/5541997501961?text=Olá!%20Li%20o%20artigo%20sobre%20${encodeURIComponent(post.titulo)}%20e%20gostaria%20de%20ajuda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#1C1C1E] text-white font-sans font-bold text-sm rounded-xl hover:bg-black transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>Falar no WhatsApp Alto Boqueirão</span>
                </a>
              </div>
            </div>

          </article>

          {/* Mais Artigos Recomendados */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-8">
                Outros Artigos Recomendados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="bg-white border border-gray-200/80 rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-suncell-orange uppercase">
                        {rel.categoria}
                      </span>
                      <h4 className="font-display font-bold text-sm text-gray-900 group-hover:text-suncell-orange transition-colors mt-2 line-clamp-2">
                        {rel.titulo}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans mt-2 line-clamp-2">
                        {rel.resumo}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-suncell-orange font-sans flex items-center gap-1">
                      <span>Ler mais</span>
                      <ArrowLeft size={12} className="rotate-180" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
