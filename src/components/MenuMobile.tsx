import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { X, Home, MapPin, ShieldAlert, Smartphone, Phone, HelpCircle, Instagram } from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";

interface MenuMobileProps {
  onClose: () => void;
}

export default function MenuMobile({ onClose }: MenuMobileProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
      {/* Backdrop com blur sutil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-suncell-black/90 backdrop-blur-md"
      />

      {/* Painel do Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute inset-y-0 right-0 w-full max-w-md bg-suncell-black border-l border-suncell-medium-gray flex flex-col shadow-2xl"
      >
        {/* Cabeçalho do Menu */}
        <div className="p-6 flex items-center justify-between border-b border-suncell-medium-gray/60">
          <div className="flex flex-col">
            <span className="font-display font-black text-lg tracking-tight text-white">
              MENU SUNCELL
            </span>
            <span className="text-xs font-sans text-suncell-text-muted">
              Selecione o que deseja ver
            </span>
          </div>

          {/* Botão de Fechar Gigante para Idosos (Min 48x48px) */}
          <button
            id="close-mobile-menu"
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-suncell-dark-gray text-white rounded-xl border border-suncell-medium-gray hover:bg-suncell-orange hover:text-white transition-colors focus:outline-none"
            aria-label="Fechar Menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links de Navegação com Letra Grande (Min 18px) e Área de Toque Generosa */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-3">
          <Link
            id="mobile-nav-home"
            to="/"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-suncell-dark-gray/50 hover:bg-suncell-dark-gray text-white font-sans font-bold text-lg border border-suncell-medium-gray/30 transition-all active:scale-[0.98] cursor-pointer focus:outline-none"
          >
            <Home size={24} className="text-suncell-orange shrink-0" />
            <span>Página Inicial</span>
          </Link>

          <a
            id="mobile-nav-lojas"
            href="/#lojas-section"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-suncell-dark-gray/50 hover:bg-suncell-dark-gray text-white font-sans font-bold text-lg border border-suncell-medium-gray/30 transition-all active:scale-[0.98] cursor-pointer focus:outline-none"
          >
            <MapPin size={24} className="text-suncell-orange shrink-0" />
            <span>Nossas Lojas</span>
          </a>

          <a
            id="mobile-nav-servicos"
            href="/#servicos-section"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-suncell-dark-gray/50 hover:bg-suncell-dark-gray text-white font-sans font-bold text-lg border border-suncell-medium-gray/30 transition-all active:scale-[0.98] cursor-pointer focus:outline-none"
          >
            <ShieldAlert size={24} className="text-suncell-orange shrink-0" />
            <span>Nossos Serviços</span>
          </a>

          <a
            id="mobile-nav-aparelhos"
            href="/#aparelhos-section"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-suncell-dark-gray/50 hover:bg-suncell-dark-gray text-white font-sans font-bold text-lg border border-suncell-medium-gray/30 transition-all active:scale-[0.98] cursor-pointer focus:outline-none"
          >
            <Smartphone size={24} className="text-suncell-orange shrink-0" />
            <span>Marcas de Celular</span>
          </a>

          <a
            id="mobile-nav-cobertura"
            href="/#cobertura-section"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-suncell-dark-gray/50 hover:bg-suncell-dark-gray text-white font-sans font-bold text-lg border border-suncell-medium-gray/30 transition-all active:scale-[0.98] cursor-pointer focus:outline-none"
          >
            <HelpCircle size={24} className="text-suncell-orange shrink-0" />
            <span>Bairros & Cidades</span>
          </a>
        </div>

        {/* Rodapé do Menu com Botões Grandes de Contato Direto das 2 Lojas */}
        <div className="p-6 bg-suncell-dark-gray border-t border-suncell-medium-gray space-y-4">
          <p className="text-sm font-sans font-semibold text-slate-300 text-center uppercase tracking-wider">
            WhatsApp para Orçamentos Rápidos:
          </p>

          {/* Botão Loja Guaíra */}
          <a
            id="mobile-whats-guaira"
            href={getWhatsAppLink("5541999176640", "Menu Mobile - Unidade Guaíra", typeof window !== "undefined" ? window.location.href : "")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white text-center font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-[0_4px_12px_rgba(255,107,0,0.2)] active:scale-[0.98] transition-all cursor-pointer focus:outline-none"
          >
            <Phone size={16} className="shrink-0" />
            <span>WhatsApp Guaíra</span>
          </a>

          {/* Botão Loja Alto Boqueirão */}
          <a
            id="mobile-whats-boqueirao"
            href={getWhatsAppLink("5541997501961", "Menu Mobile - Unidade Alto Boqueirão", typeof window !== "undefined" ? window.location.href : "")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white text-center font-sans font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-[0_4px_12px_rgba(255,107,0,0.2)] active:scale-[0.98] transition-all cursor-pointer focus:outline-none"
          >
            <Phone size={16} className="shrink-0" />
            <span>WhatsApp Boqueirão</span>
          </a>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs text-suncell-text-muted">
            <span>SUNCELL Assistência Técnica © 2026</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
