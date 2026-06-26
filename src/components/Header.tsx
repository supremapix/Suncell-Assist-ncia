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
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
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
            className="flex items-center justify-center group cursor-pointer focus:outline-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto z-20"
            aria-label="SUNCELL Home"
          >
            <div className="relative flex items-center justify-center">
              {/* Efeito de fundo laranja premium para sensação de profundidade e brilho neon */}
              <div className="absolute w-24 h-10 sm:w-28 sm:h-12 bg-suncell-orange/25 rounded-full blur-xl opacity-75 group-hover:bg-suncell-orange/40 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
              
              <motion.img
                src="https://img.suncellassistencia.com.br/logo-suncell-assistencia-de-celulares.webp"
                alt="SUNCELL Assistência de Celulares"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]"
                whileHover={{ 
                  scale: 1.07,
                  rotateY: 12,
                  rotateX: -10,
                  filter: "drop-shadow(0px 0px 18px rgba(255,107,0,0.85))"
                }}
                whileTap={{ 
                  scale: 0.94,
                  rotateZ: -2.5,
                  filter: "drop-shadow(0px 0px 10px rgba(255,107,0,0.95))"
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

            <a
              id="nav-cobertura"
              href="/#cobertura-section"
              className="font-sans font-medium text-sm text-slate-200 transition-colors hover:text-suncell-orange focus:outline-none"
            >
              Bairros & Cidades
            </a>
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

          {/* HAMBURGER BUTTON (MOBILE) - ESPECIFICAMENTE GRANDE PARA IDOSOS */}
          <button
            id="mobile-menu-hamburger"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-12 h-12 flex items-center justify-center bg-suncell-dark-gray hover:bg-suncell-medium-gray text-white rounded-xl border border-suncell-medium-gray focus:outline-none transition-colors"
            aria-label="Abrir Menu Principal"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={28} />
          </button>

        </div>
      </header>

      {/* DRAWER MENU MOBILE PARA IDOSOS (ANIMADO COM FRAMER-MOTION) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MenuMobile onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
