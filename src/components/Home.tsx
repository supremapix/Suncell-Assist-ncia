import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Smartphone, ShieldCheck, MapPin, Search, ArrowRight, HelpCircle, Phone, Sparkles, Star, Award } from "lucide-react";
import { 
  LOJAS, 
  getBairrosPages, 
  getCidadesPages, 
  getAparelhosPages, 
  getServicosPages, 
  FAQ_BASE, 
  rotaDe, 
  PageData 
} from "../siteData";
import NossasLojas from "./NossasLojas";
import InstagramFeed from "./InstagramFeed";
import FAQAccordion from "./FAQAccordion";
import EnhancedSEO from "./EnhancedSEO";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const bairros = getBairrosPages();
  const cidades = getCidadesPages();
  const aparelhos = getAparelhosPages();
  const servicos = getServicosPages();

  // Filtrar bairros e cidades para a caixa de busca rápida
  const filteredBairros = searchTerm.trim() === "" 
    ? [] 
    : bairros.filter(b => b.nome.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5);

  const filteredCidades = searchTerm.trim() === ""
    ? []
    : cidades.filter(c => c.nome.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 3);

  // Agrupar bairros por região para a seção de Cobertura Completa
  const bairrosPorRegiao = bairros.reduce((acc, curr) => {
    const reg = curr.regiao || "Outros";
    if (!acc[reg]) acc[reg] = [];
    acc[reg].push(curr);
    return acc;
  }, {} as Record<string, PageData[]>);

  // Diferenciais da Assistência
  const diferenciais = [
    {
      icon: <Award size={24} className="text-suncell-orange" />,
      titulo: "Orçamento 100% Gratuito",
      desc: "Você não paga nada pela avaliação técnica do aparelho. Orçamento passado na hora e sem compromisso."
    },
    {
      icon: <ShieldCheck size={24} className="text-suncell-orange" />,
      titulo: "Garantia Real de 90 Dias",
      desc: "Todos os nossos serviços contam com garantia legal de 3 meses. Segurança e peças de alta qualidade."
    },
    {
      icon: <Sparkles size={24} className="text-suncell-orange" />,
      titulo: "Serviço Expresso",
      desc: "Trocas de tela e bateria resolvidas no mesmo dia, geralmente em menos de 2 horas. Diagnóstico na hora."
    }
  ];

  return (
    <>
      {/* SEO otimizado para a Home Page */}
      <EnhancedSEO canonicalPath="" />

      {/* 1. HERO SECTION (Design minimalista estilo Xiaomi, tipografia Display marcante, respiro e espaço) */}
      <section className="relative pt-36 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-gradient-to-b from-white via-white to-suncell-light-gray text-suncell-black">
        {/* Glow de fundo sutil */}
        <div className="absolute top-20 right-10 w-[45rem] h-[45rem] bg-suncell-orange/5 rounded-full blur-[140px] -z-10" />
        <div className="absolute -bottom-10 -left-10 w-[30rem] h-[30rem] bg-suncell-orange/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Bloco de Texto Principal */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-suncell-orange/10 border border-suncell-orange/20 text-suncell-orange font-mono text-xs font-bold uppercase rounded-full"
              >
                <Sparkles size={13} className="animate-spin-slow" />
                <span>Conserto Expresso no Mesmo Dia</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0D0D0D] tracking-tight leading-none"
              >
                Assistência Técnica de Celular em <span className="text-transparent bg-clip-text bg-gradient-to-r from-suncell-orange to-suncell-orange-light">Curitiba</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Conserto especializado de iPhone, Xiaomi, Samsung e Motorola. Diagnóstico 100% gratuito, peças premium, garantia e duas lojas para te atender.
              </motion.p>

              {/* Caixa de Busca de Bairro / Cidade - Excelente para SEO e navegação rápida */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative max-w-md"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Search size={20} />
                  </div>
                  <input
                    id="hero-bairro-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Digite seu bairro em Curitiba... (ex: Água Verde)"
                    className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-gray-200 text-[#0D0D0D] placeholder-gray-400 font-sans text-base focus:outline-none focus:ring-2 focus:ring-suncell-orange/30 focus:border-suncell-orange shadow-md transition-all"
                  />
                  {searchTerm.trim() !== "" && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-[#0D0D0D]"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                {/* Resultados Rápidos da Busca */}
                {(filteredBairros.length > 0 || filteredCidades.length > 0) && (
                  <div className="absolute top-full left-0 right-0 z-40 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 max-h-80 overflow-y-auto">
                    <p className="text-[10px] font-mono text-gray-400 uppercase px-3 py-1.5 border-b border-gray-100">
                      Resultados de Atendimento Encontrados:
                    </p>
                    
                    {/* Bairros filtrados */}
                    {filteredBairros.map(b => (
                      <Link
                        id={`search-res-bairro-${b.slug}`}
                        key={b.slug}
                        to={rotaDe(b)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-suncell-orange/10 hover:text-suncell-orange text-gray-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-suncell-orange" />
                          <span className="font-sans font-bold text-sm sm:text-base">{b.nome}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          Curitiba
                        </span>
                      </Link>
                    ))}

                    {/* Cidades filtradas */}
                    {filteredCidades.map(c => (
                      <Link
                        id={`search-res-cidade-${c.slug}`}
                        key={c.slug}
                        to={rotaDe(c)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-suncell-orange/10 hover:text-suncell-orange text-gray-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-suncell-orange" />
                          <span className="font-sans font-bold text-sm sm:text-base">{c.nome}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-orange-50 text-suncell-orange px-2 py-0.5 rounded">
                          Metropolitana
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* CTAs Principais */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <a
                  id="hero-whats-btn"
                  href={LOJAS[0].linkWhats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4.5 rounded-2xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[0_8px_25px_rgba(255,107,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Phone size={22} className="shrink-0" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <a
                  id="hero-lojas-btn"
                  href="#lojas-section"
                  className="px-8 py-4.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 hover:text-[#0D0D0D] border border-gray-200 font-sans font-bold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Conhecer Nossas Lojas</span>
                  <ArrowRight size={18} />
                </a>
              </motion.div>

            </div>

            {/* Imagem do Mockup do Celular Premium em Bancada de Reparo */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white p-6 flex flex-col justify-between shadow-xl shadow-black/5"
              >
                {/* Detalhes de Alta Fidelidade visual */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Smartphone size={20} className="text-suncell-orange" />
                    <span className="font-display font-bold text-sm text-[#0D0D0D]">SUNCELL Curitiba</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-suncell-orange/15 px-2.5 py-0.5 rounded-full border border-suncell-orange/20 text-[10px] font-mono text-suncell-orange font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-suncell-orange animate-pulse" />
                    <span>LOJAS ABERTAS</span>
                  </div>
                </div>

                {/* Card do Google Reviews embutido visualmente */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs font-sans text-gray-700 ml-1 font-bold">5.0 (Google Reviews)</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 italic">
                    "Fui muito bem atendido no Mercado Goes Guaíra. Trocaram a tela do meu Xiaomi Redmi Note 12 em menos de uma hora! Ficou perfeito!"
                  </p>
                  <p className="font-sans text-[11px] text-gray-400 font-bold">
                    — Roberto S., Cliente de Curitiba
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Endereço Unidade 1 */}
                  <div className="flex gap-2.5 text-xs text-gray-600">
                    <MapPin size={16} className="text-suncell-orange shrink-0" />
                    <span><strong>Unidade Guaíra:</strong> Dentro do Mercado Goes - Rua Maria Moscardi Fanini, 261</span>
                  </div>
                  {/* Endereço Unidade 2 */}
                  <div className="flex gap-2.5 text-xs text-gray-600">
                    <MapPin size={16} className="text-suncell-orange shrink-0" />
                    <span><strong>Unidade Alto Boqueirão:</strong> Dentro do Mercado Goes - R. Pastor Antônio Polito, 1805</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. DIFERENCIAIS DA SUNCELL */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((dif, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-4 p-6 rounded-2xl bg-[#F5F5F7] border border-gray-100/80 hover:bg-gray-100/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-suncell-orange/10 flex items-center justify-center border border-suncell-orange/20 shrink-0">
                  {dif.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0D0D0D]">{dif.titulo}</h3>
                  <p className="font-sans text-sm text-gray-600 mt-1.5 leading-relaxed">{dif.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOSSAS LOJAS (2 Cards Side-by-Side) */}
      <NossasLojas />

      {/* 4. NOSSOS SERVIÇOS PRINCIPAIS */}
      <section id="servicos-section" className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight">
              Nossos Serviços Especializados
            </h2>
            <p className="mt-4 font-sans text-gray-600 text-base sm:text-lg">
              Oferecemos consertos de hardware e software com maquinários de última geração. Veja nossos principais reparos transversais:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((serv, idx) => (
              <motion.div
                key={serv.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 hover:border-suncell-orange/40 hover:shadow-lg transition-all flex flex-col justify-between group shadow-xl shadow-black/5"
              >
                <div>
                  <div className="w-10 h-10 bg-suncell-orange/15 rounded-lg flex items-center justify-center border border-suncell-orange/20 text-suncell-orange font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0D0D0D] group-hover:text-suncell-orange transition-colors">
                    {serv.nome}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
                    {serv.description.replace(". Faça seu orçamento!", "").replace(" com a Suncell", "")}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    id={`serv-card-link-${serv.slug}`}
                    to={rotaDe(serv)}
                    className="font-sans font-bold text-xs text-suncell-orange hover:text-suncell-orange-light flex items-center gap-1 focus:outline-none"
                  >
                    <span>Ver detalhes do serviço</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. APARELHOS E MARCAS ATENDIDAS */}
      <section id="aparelhos-section" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight">
              Marcas e Aparelhos que Consertamos
            </h2>
            <p className="mt-4 font-sans text-gray-600 text-base sm:text-lg">
              Temos técnicos qualificados para cada fabricante, garantindo o correto tratamento e as peças adequadas para seu celular:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {aparelhos.map((ap, idx) => (
              <motion.div
                key={ap.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#F5F5F7] border border-gray-100/80 rounded-2xl p-6 flex flex-col justify-between hover:border-suncell-orange/30 group hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono text-suncell-orange font-bold uppercase tracking-wider">
                    {ap.marca}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-[#0D0D0D] mt-1 group-hover:text-suncell-orange transition-colors">
                    {ap.nome}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 mt-3 leading-relaxed">
                    Troca de tela, bateria, conector e reparo de placa-mãe.
                  </p>
                </div>

                <Link
                  id={`ap-card-link-${ap.slug}`}
                  to={rotaDe(ap)}
                  className="mt-6 pt-4 border-t border-gray-200 font-sans font-bold text-xs text-suncell-orange flex items-center justify-between group-hover:text-suncell-orange-light focus:outline-none"
                >
                  <span>Orçamento especializado</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INSTAGRAM FEED */}
      <InstagramFeed />

      {/* 7. COBERTURA DE ATENDIMENTO COMPLETA (Bairros e Cidades - Programmatic SEO crawling hub) */}
      <section id="cobertura-section" className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight">
              Áreas de Atendimento em Curitiba e Região
            </h2>
            <p className="mt-4 font-sans text-gray-600 text-base sm:text-lg">
              Selecione seu bairro ou cidade metropolitana para ver informações personalizadas de assistência, diferenciais de atendimento local e a loja SUNCELL mais próxima de você:
            </p>
          </div>

          {/* Cidades Metropolitanas */}
          <div className="mb-14">
            <h3 className="font-display font-extrabold text-xl text-[#0D0D0D] mb-6 border-l-4 border-suncell-orange pl-3.5 flex items-center gap-2">
              <span>Cidades da Região Metropolitana</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {cidades.map((cid) => (
                <Link
                  id={`cidade-badge-${cid.slug}`}
                  key={cid.slug}
                  to={rotaDe(cid)}
                  className="p-3.5 rounded-xl bg-white hover:bg-suncell-orange/5 border border-gray-100 hover:border-suncell-orange/30 text-center font-sans font-bold text-sm text-gray-700 hover:text-suncell-orange transition-all hover:scale-[1.02] hover:shadow-sm focus:outline-none"
                >
                  {cid.nome}
                </Link>
              ))}
            </div>
          </div>

          {/* Bairros Oficiais de Curitiba por Região */}
          <div>
            <h3 className="font-display font-extrabold text-xl text-[#0D0D0D] mb-8 border-l-4 border-suncell-orange pl-3.5">
              Bairros de Curitiba (Atendimento Rápido)
            </h3>
            
            <div className="space-y-10">
              {Object.keys(bairrosPorRegiao).map((regiao) => (
                <div key={regiao} className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
                  <h4 className="font-display font-bold text-base text-suncell-orange uppercase tracking-wider mb-4">
                    Região {regiao}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {bairrosPorRegiao[regiao].map((b) => (
                      <Link
                        id={`bairro-badge-${b.slug}`}
                        key={b.slug}
                        to={rotaDe(b)}
                        className="p-2.5 rounded-lg bg-[#F5F5F7] hover:bg-suncell-orange/5 border border-gray-100 hover:border-suncell-orange/20 text-gray-700 hover:text-suncell-orange font-sans text-xs sm:text-sm font-semibold transition-all hover:translate-x-0.5 focus:outline-none block truncate"
                        title={`Assistência técnica celular no ${b.nome}`}
                      >
                        {b.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ SEÇÃO ACORDEÃO (BASE GERAL) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl text-[#0D0D0D] tracking-tight">
              Dúvidas Frequentes sobre a SUNCELL
            </h2>
            <p className="mt-4 font-sans text-gray-500 text-sm sm:text-base">
              Tem alguma pergunta sobre o conserto, as formas de pagamento ou a garantia? Confira abaixo:
            </p>
          </div>

          <FAQAccordion items={FAQ_BASE} />

        </div>
      </section>
    </>
  );
}
