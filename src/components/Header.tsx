import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Smartphone, MapPin, Award } from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import MenuMobile from "./MenuMobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efeito de shrink e sombra ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* COMPRAMOS IPHONE BANNER / ANNOUNCEMENT BAR */}
        <div className="bg-gradient-to-r from-[#FF4C00] via-suncell-orange to-[#FF4C00] text-white font-sans text-[11px] sm:text-xs font-black py-2 px-4 flex items-center justify-center gap-1.5 sm:gap-3 shadow-md select-none text-center relative z-10 border-b border-white/10">
          <span className="inline-flex items-center gap-1 bg-white text-[#FF4C00] px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] tracking-wider uppercase font-black shrink-0 shadow-sm animate-pulse">
            🔥 COMPRA DE IPHONE
          </span>
          <span className="text-slate-100 font-bold truncate">
            Compramos seu iPhone usado ou seminovo abaixo do valor de mercado! Pix no ato.
          </span>
          <Link 
            to="/compramos-iphone" 
            className="underline hover:text-slate-200 transition-colors font-black shrink-0 whitespace-nowrap ml-1 text-white flex items-center gap-0.5 group"
          >
            <span>Avaliar Agora</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 font-bold">➔</span>
          </Link>
        </div>

        <header
          id="main-header"
          className={`w-full transition-all duration-300 border-b ${
            scrolled
              ? "bg-suncell-black/95 backdrop-blur-md py-3 shadow-lg border-white/10"
              : "bg-suncell-black py-5 border-white/5"
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          
          {/* LOGO */}
          <Link
            id="logo-link"
            to="/"
            className="flex items-center justify-start group cursor-pointer focus:outline-none z-20"
            aria-label="SUNCELL Home"
          >
            <div className="relative flex items-center justify-center">
              <motion.img
                src="https://img.suncellassistencia.com.br/suncell-slider-loja-parana.webp"
                alt="SUNCELL Assistência de Celulares"
                className="h-11 sm:h-12 md:h-11 w-auto object-contain relative z-10"
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ 
                  scale: 0.95
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 14 
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              id="nav-home"
              to="/"
              className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange focus:outline-none ${
                location.pathname === "/" ? "text-suncell-orange" : "text-slate-200"
              }`}
            >
              Início
            </Link>

            <Link
              id="nav-quem-somos"
              to="/quem-somos"
              className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange focus:outline-none ${
                location.pathname === "/quem-somos" ? "text-suncell-orange" : "text-slate-200"
              }`}
            >
              Quem Somos
            </Link>
            
            <a
              id="nav-lojas"
              href="/#lojas-section"
              className="font-sans font-medium text-sm text-slate-200 transition-colors hover:text-suncell-orange focus:outline-none"
            >
              Nossas Lojas
            </a>

            <a
              id="nav-servicos"
              href="/#servicos-section"
              className="font-sans font-medium text-sm text-slate-200 transition-colors hover:text-suncell-orange focus:outline-none"
            >
              Serviços
            </a>

            <a
              id="nav-aparelhos"
              href="/#aparelhos-section"
              className="font-sans font-medium text-sm text-slate-200 transition-colors hover:text-suncell-orange focus:outline-none"
            >
              Aparelhos
            </a>

            <Link
              id="nav-compramos-iphone"
              to="/compramos-iphone"
              className={`font-sans font-extrabold text-sm transition-all hover:text-suncell-orange focus:outline-none flex items-center gap-1 ${
                location.pathname === "/compramos-iphone" ? "text-suncell-orange" : "text-amber-400 hover:scale-105"
              }`}
            >
              <span>Vender iPhone</span>
              <span className="text-[9px] bg-suncell-orange/20 text-suncell-orange px-1 py-0.5 rounded font-black animate-pulse">NOVO</span>
            </Link>

            <Link
              id="nav-cobertura"
              to="/bairros-e-cidades"
              className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange focus:outline-none ${
                location.pathname === "/bairros-e-cidades" ? "text-suncell-orange" : "text-slate-200"
              }`}
            >
              Bairros & Cidades
            </Link>
          </nav>

          {/* CTA WHATSAPP (DESKTOP) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-whats-btn"
              href={getWhatsAppLink("5541999176640", "Menu Superior - Orçamento Grátis", typeof window !== "undefined" ? window.location.href : "")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-xs sm:text-sm px-4.5 py-2 rounded-xl flex items-center gap-1.5 hover:shadow-md active:scale-[0.99] transition-all cursor-pointer focus:outline-none"
            >
              <Phone size={14} className="shrink-0" />
              <span>Orçamento Grátis</span>
            </a>
          </div>

          {/* HAMBURGER BUTTON (MOBILE) - COM ALERTA E ATENÇÃO PREMIUM */}
          <div className="relative md:hidden z-20">
            {/* Anéis de pulso de radar neon para atrair o olhar */}
            <span className="absolute inset-0 rounded-xl bg-suncell-orange/20 animate-ping pointer-events-none scale-110" />
            <span className="absolute -inset-0.5 rounded-xl border-2 border-suncell-orange/30 animate-pulse pointer-events-none" />
            
            <motion.button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              className="relative w-12 h-12 flex items-center justify-center bg-suncell-dark-gray hover:bg-suncell-medium-gray text-white rounded-xl border border-suncell-orange/40 shadow-[0_0_15px_rgba(255,107,0,0.25)] focus:outline-none transition-colors cursor-pointer group"
              aria-label="Abrir Menu Principal"
              aria-expanded={mobileMenuOpen}
              animate={{
                scale: [1, 1.07, 1, 1.07, 1],
                rotate: [0, -4, 4, -4, 4, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={28} className="text-suncell-orange group-hover:text-white transition-colors duration-200" />
              
              {/* Ponto indicador de atenção piscante/saltitante no canto superior */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suncell-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-suncell-orange"></span>
              </span>
            </motion.button>
          </div>

        </div>
      </header>
      </div>

      {/* DRAWER MENU MOBILE PARA IDOSOS (ANIMADO COM FRAMER-MOTION) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MenuMobile onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
