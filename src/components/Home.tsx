import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, ShieldCheck, MapPin, ArrowRight, HelpCircle, Phone, Sparkles, Star, Award, ChevronLeft, ChevronRight } from "lucide-react";
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
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import NossasLojas from "./NossasLojas";
import InstagramFeed from "./InstagramFeed";
import FAQAccordion from "./FAQAccordion";
import EnhancedSEO from "./EnhancedSEO";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "principal",
      image: "https://img.suncellassistencia.com.br/suncell-slider.webp",
      badge: "Conserto Rápido no Mesmo Dia",
      h1: "Assistência Técnica de Celular em Curitiba",
      desc: "Conserto especializado de iPhone, Xiaomi, Samsung e Motorola. Diagnóstico 100% gratuito feito por especialistas, peças premium de reposição e duas unidades completas para te atender hoje mesmo.",
      credit: "Suncell Curitiba — Assistência Técnica Premium",
      buttons: [
        {
          type: "phone",
          label: "Ligar Agora",
          href: "tel:+5541996889778"
        },
        {
          type: "scroll",
          label: "Ver Nossas Lojas",
          href: "#lojas-section"
        }
      ]
    },
    {
      id: "guaira",
      image: "https://img.suncellassistencia.com.br/suncell-slider-loja-guaira.webp",
      badge: "Unidade Guaíra - Mercado Goes",
      h1: "SUNCELL Guaíra • Atendimento Expresso",
      desc: "Localizada de forma super conveniente dentro do Mercado Goes. Reparo de tela, bateria, botões e conectores em menos de 2 horas para você não ficar desconectado.",
      details: "Rua Maria Moscardi Fanini, 261 • Segunda a Sábado",
      credit: "Foto Real da Loja Suncell Guaíra — Mercado Goes",
      buttons: [
        {
          type: "whatsapp",
          label: "Falar no WhatsApp",
          phone: "5541999176640"
        },
        {
          type: "maps",
          label: "Ir até a Loja",
          href: "https://share.google/BvgD7geMqSmv4Cc98"
        }
      ]
    },
    {
      id: "boqueirao",
      image: "https://img.suncellassistencia.com.br/suncell-slider-loja-boqueirao.webp",
      badge: "Unidade Alto Boqueirão - Mercado Goes",
      h1: "SUNCELL Alto Boqueirão • Peças de Alta Qualidade",
      desc: "Nossa assistência técnica completa no Alto Boqueirão. Peças premium, maquinário de ponta para reparos complexos e o melhor custo-benefício de Curitiba.",
      details: "Rua Pastor Antônio Polito, 1805 • Segunda a Sábado",
      credit: "Foto Real da Loja Suncell Alto Boqueirão — Mercado Goes",
      buttons: [
        {
          type: "whatsapp",
          label: "Falar no WhatsApp",
          phone: "5541997501961"
        },
        {
          type: "maps",
          label: "Ir até a Loja",
          href: "https://share.google/ZzOtA47yW8m6T9fBr"
        }
      ]
    }
  ];

  // Auto-avanço do slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);
  const bairros = getBairrosPages();
  const cidades = getCidadesPages();
  const aparelhos = getAparelhosPages();
  const servicos = getServicosPages();



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

      {/* 1. HERO SECTION (Cinematic Responsive Full-Width Slider & Ticker) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-suncell-light-gray text-suncell-black">
        {/* Glow de fundo sutil */}
        <div className="absolute top-20 right-10 w-[45rem] h-[45rem] bg-suncell-orange/5 rounded-full blur-[140px] -z-10" />
        <div className="absolute -bottom-10 -left-10 w-[30rem] h-[30rem] bg-suncell-orange/5 rounded-full blur-[100px] -z-10" />

        {/* Cinematic Full-Width Slider (Edge-to-Edge) */}
        <div className="relative w-full overflow-hidden bg-[#0D0D0D] h-[480px] sm:h-[540px] md:h-[600px] lg:h-[660px] flex items-center z-10 shadow-lg">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full flex items-center"
            >
              {/* Imagem do Slide - Celular foca no lado direito (80%), telas wide mostram completa/centralizada */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].h1}
                className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradiente de Escurecimento para Legibilidade Superior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30 md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-transparent z-10" />

              {/* Crédito da Imagem da Loja / Foto Real */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 flex items-center gap-1.5 bg-black/45 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-mono text-gray-300 backdrop-blur-sm shadow-sm select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-suncell-orange animate-pulse" />
                <span>{slides[currentSlide].credit}</span>
              </div>

              {/* Bloco de Informações Sobrepostos */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center p-6 sm:p-10 md:p-16 max-w-2xl text-left text-white space-y-4 sm:space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/20 border border-suncell-orange/30 text-suncell-orange font-mono text-[10px] sm:text-xs font-bold uppercase rounded-full w-fit"
                >
                  <Sparkles size={11} className="animate-pulse" />
                  <span>{slides[currentSlide].badge}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
                >
                  {slides[currentSlide].h1}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="font-sans text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed"
                >
                  {slides[currentSlide].desc}
                </motion.p>

                {slides[currentSlide].details && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-mono text-[10px] sm:text-xs text-suncell-orange/90 flex items-center gap-1.5"
                  >
                    <MapPin size={12} />
                    <span>{slides[currentSlide].details}</span>
                  </motion.p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap items-center gap-3 pt-2 w-full"
                >
                  {slides[currentSlide].buttons.map((btn, idx) => {
                    if (btn.type === "phone") {
                      return (
                        <a
                          id={`slider-btn-phone-${idx}`}
                          key={idx}
                          href={btn.href}
                          className="px-4.5 py-2.5 bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <Phone size={14} className="shrink-0" />
                          <span>{btn.label}</span>
                        </a>
                      );
                    } else if (btn.type === "whatsapp") {
                      return (
                        <a
                          id={`slider-btn-whatsapp-${idx}`}
                          key={idx}
                          href={getWhatsAppLink(btn.phone || "", `Slide Home - Unidade ${slides[currentSlide].id === "guaira" ? "Guaíra" : "Alto Boqueirão"}`, typeof window !== "undefined" ? window.location.href : "")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4.5 py-2.5 bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-[0.99] transition-all cursor-pointer"
                        >
                          <Phone size={14} className="shrink-0" />
                          <span>{btn.label}</span>
                        </a>
                      );
                    } else if (btn.type === "maps") {
                      return (
                        <a
                          id={`slider-btn-maps-${idx}`}
                          key={idx}
                          href={btn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
                        >
                          <MapPin size={14} className="text-suncell-orange shrink-0" />
                          <span>{btn.label}</span>
                        </a>
                      );
                    } else {
                      return (
                        <a
                          id={`slider-btn-scroll-${idx}`}
                          key={idx}
                          href={btn.href}
                          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
                        >
                          <span>{btn.label}</span>
                          <ArrowRight size={14} />
                        </a>
                      );
                    }
                  })}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de Setas Esquerda/Direita */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-xl bg-black/30 hover:bg-black/50 text-white flex items-center justify-center border border-white/10 hover:border-white/20 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex active:scale-[0.95]"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-xl bg-black/30 hover:bg-black/50 text-white flex items-center justify-center border border-white/10 hover:border-white/20 transition-all cursor-pointer backdrop-blur-sm hidden sm:flex active:scale-[0.95]"
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots de Paginação */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? "bg-suncell-orange w-6" 
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Task Letreiro / Infinite Marquee Ticker */}
        <div className="relative z-20 bg-[#0D0D0D] border-y border-suncell-orange/30 text-white py-3 overflow-hidden select-none shadow-md">
          <div className="animate-marquee flex gap-16 items-center">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-16 items-center shrink-0">
                
                <span className="flex items-center gap-2 font-display font-black text-xs text-suncell-orange shrink-0 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-suncell-orange animate-ping shrink-0" />
                  Suncell Avisos:
                </span>

                <span className="flex items-center gap-1.5 font-sans font-black text-xs text-emerald-400 shrink-0 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  DIAGNÓSTICO 100% GRATUITO E REPAROS EXPRESSO EM ATÉ 2 HORAS!
                </span>

                <a 
                  id={`ticker-whats-guaira-${i}`}
                  href="https://api.whatsapp.com/send?phone=5541999176640" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 font-sans font-bold text-xs hover:text-suncell-orange transition-colors shrink-0 text-white"
                >
                  <Phone size={13} className="text-suncell-orange shrink-0" />
                  <span>WhatsApp Guaíra: (41) 99917-6640</span>
                </a>

                <a 
                  id={`ticker-maps-guaira-${i}`}
                  href="https://share.google/BvgD7geMqSmv4Cc98" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 font-sans font-medium text-xs hover:text-suncell-orange transition-colors shrink-0 text-gray-300"
                >
                  <MapPin size={13} className="text-suncell-orange shrink-0" />
                  <span>Unidade Guaíra: Mercado Goes - R. Maria Moscardi Fanini, 261</span>
                </a>

                <a 
                  id={`ticker-whats-boqueirao-${i}`}
                  href="https://api.whatsapp.com/send?phone=5541997501961" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 font-sans font-bold text-xs hover:text-suncell-orange transition-colors shrink-0 text-white"
                >
                  <Phone size={13} className="text-suncell-orange shrink-0" />
                  <span>WhatsApp Alto Boqueirão: (41) 99750-1961</span>
                </a>

                <a 
                  id={`ticker-maps-boqueirao-${i}`}
                  href="https://share.google/ZzOtA47yW8m6T9fBr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 font-sans font-medium text-xs hover:text-suncell-orange transition-colors shrink-0 text-gray-300"
                >
                  <MapPin size={13} className="text-suncell-orange shrink-0" />
                  <span>Unidade Alto Boqueirão: R. Pastor Antônio Polito, 1805</span>
                </a>

              </div>
            ))}
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
