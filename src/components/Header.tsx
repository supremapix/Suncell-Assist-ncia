import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ChevronDown, Smartphone, Store, Wrench, Info, MapPin, Sparkles } from "lucide-react";
import MenuMobile from "./MenuMobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  // Fechar menu mobile e dropdowns ao trocar de rota
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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
              : "bg-suncell-black py-4 border-white/5"
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          
          {/* LOGO */}
          <Link
            id="logo-link"
            to="/"
            className="flex items-center justify-start group cursor-pointer focus:outline-none z-20 shrink-0"
            aria-label="SUNCELL Home"
          >
            <div className="relative flex items-center justify-center">
              <motion.img
                src="https://img.suncellassistencia.com.br/suncell-slider-loja-parana.webp"
                alt="SUNCELL Assistência de Celulares"
                className="h-10 sm:h-11 md:h-11 w-auto object-contain relative z-10"
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              id="nav-home"
              to="/"
              className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange focus:outline-none ${
                location.pathname === "/" ? "text-suncell-orange font-bold" : "text-slate-200"
              }`}
            >
              Início
            </Link>

            <Link
              id="nav-assistencia-tecnica-curitiba"
              to="/assistencia-tecnica-curitiba"
              className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange focus:outline-none ${
                location.pathname === "/assistencia-tecnica-curitiba" ? "text-suncell-orange font-bold" : "text-slate-200"
              }`}
            >
              Assistência Técnica
            </Link>

            {/* DROPDOWN SMARTPHONES */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("smartphones")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  location.pathname.includes("/celular-xiaomi") || activeDropdown === "smartphones"
                    ? "text-suncell-orange font-bold"
                    : "text-slate-200"
                }`}
              >
                <span>Smartphones</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "smartphones" ? "rotate-180 text-suncell-orange" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "smartphones" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <Link
                      id="nav-redmi-a7-pro"
                      to="/celular-xiaomi-redmi-a7-pro-dual-sim-128gb-4gb-ram"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-suncell-orange/10 flex items-center justify-center shrink-0 text-suncell-orange group-hover:bg-suncell-orange group-hover:text-white transition-colors">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-xs">Xiaomi Redmi A7 Pro</div>
                        <div className="text-[10px] text-gray-400">128GB / 4GB RAM</div>
                      </div>
                    </Link>

                    <Link
                      id="nav-poco-m7-nfc"
                      to="/celular-xiaomi-poco-m7-nfc-dual-sim-256gb-8gb-ram"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-suncell-orange/10 flex items-center justify-center shrink-0 text-suncell-orange group-hover:bg-suncell-orange group-hover:text-white transition-colors">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-xs">Xiaomi POCO M7 NFC</div>
                        <div className="text-[10px] text-gray-400">256GB / 8GB RAM</div>
                      </div>
                    </Link>

                    <div className="border-t border-zinc-800/80 my-1"></div>

                    <a
                      id="nav-aparelhos"
                      href="/#aparelhos-section"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-300 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-suncell-orange transition-colors">
                        <Sparkles size={16} />
                      </div>
                      <div className="font-semibold text-xs">Ver Catálogo de Aparelhos</div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              id="nav-compramos-iphone"
              to="/compramos-iphone"
              className={`font-sans font-extrabold text-sm transition-all hover:text-suncell-orange focus:outline-none flex items-center gap-1.5 ${
                location.pathname === "/compramos-iphone" ? "text-suncell-orange" : "text-amber-400 hover:scale-105"
              }`}
            >
              <span>Vender iPhone</span>
              <span className="text-[9px] bg-suncell-orange/20 text-suncell-orange px-1.5 py-0.5 rounded font-black animate-pulse">NOVO</span>
            </Link>

            {/* DROPDOWN EMPRESA & LOJAS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("empresa")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`font-sans font-medium text-sm transition-colors hover:text-suncell-orange flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  location.pathname === "/quem-somos" || location.pathname === "/bairros-e-cidades" || activeDropdown === "empresa"
                    ? "text-suncell-orange font-bold"
                    : "text-slate-200"
                }`}
              >
                <span>Empresa & Lojas</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "empresa" ? "rotate-180 text-suncell-orange" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "empresa" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-60 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <Link
                      id="nav-quem-somos"
                      to="/quem-somos"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-suncell-orange transition-colors">
                        <Info size={16} />
                      </div>
                      <div className="font-semibold text-xs">Quem Somos</div>
                    </Link>

                    <a
                      id="nav-lojas"
                      href="/#lojas-section"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-suncell-orange transition-colors">
                        <Store size={16} />
                      </div>
                      <div className="font-semibold text-xs">Nossas Lojas Físicas</div>
                    </a>

                    <a
                      id="nav-servicos"
                      href="/#servicos-section"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-suncell-orange transition-colors">
                        <Wrench size={16} />
                      </div>
                      <div className="font-semibold text-xs">Serviços Especializados</div>
                    </a>

                    <Link
                      id="nav-cobertura"
                      to="/bairros-e-cidades"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/80 text-slate-200 hover:text-suncell-orange transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-suncell-orange transition-colors">
                        <MapPin size={16} />
                      </div>
                      <div className="font-semibold text-xs">Bairros & Cidades Atendidos</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <div className="relative lg:hidden z-20">
            <span className="absolute inset-0 rounded-xl bg-suncell-orange/20 animate-ping pointer-events-none scale-110" />
            <span className="absolute -inset-0.5 rounded-xl border-2 border-suncell-orange/30 animate-pulse pointer-events-none" />
            
            <motion.button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              className="relative w-11 h-11 flex items-center justify-center bg-suncell-dark-gray hover:bg-suncell-medium-gray text-white rounded-xl border border-suncell-orange/40 shadow-[0_0_15px_rgba(255,107,0,0.25)] focus:outline-none transition-colors cursor-pointer group"
              aria-label="Abrir Menu Principal"
              aria-expanded={mobileMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={26} className="text-suncell-orange group-hover:text-white transition-colors duration-200" />
              
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
