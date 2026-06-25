import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Smartphone, MapPin, Award } from "lucide-react";
import { LOJAS } from "../siteData";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            id="logo-link"
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="SUNCELL Home"
          >
            <div className="relative w-10 h-10 bg-gradient-to-tr from-suncell-orange to-suncell-orange-light rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-transform duration-300 group-hover:scale-105">
              <Smartphone size={22} className="text-white animate-[pulse_3s_infinite]" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                SUNCELL
                <span className="text-suncell-orange text-xs bg-suncell-orange/15 px-1.5 py-0.5 rounded border border-suncell-orange/20 font-mono">
                  PRO
                </span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-suncell-text-muted uppercase">
                Assistência Técnica
              </span>
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
              href={LOJAS[0].linkWhats}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus:outline-none shadow-md"
            >
              <Phone size={16} className="shrink-0" />
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
