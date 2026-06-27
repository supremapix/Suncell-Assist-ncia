import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Share2, 
  X, 
  Check, 
  Copy, 
  MessageCircle, 
  Phone, 
  User, 
  MapPin, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { LOJAS } from "../siteData";

// Helper to generate precise tracking links for WhatsApp
export function getWhatsAppLink(phone: string, origin: string, currentUrl: string) {
  const cleanPhone = phone.replace(/\D/g, "");
  const message = `Olá! Vim pelo site da SUNCELL Assistência Técnica.\n\n` +
    `• Canal: ${origin}\n` +
    `• Página: ${currentUrl}\n\n` +
    `Gostaria de solicitar um orçamento para o meu celular!`;
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
}

export default function SuncellInteractionWidgets() {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showWhatsMenu, setShowWhatsMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [location]);

  const pageTitle = "SUNCELL | Assistência Técnica de Celular em Curitiba";
  const storeImage = LOJAS[0].foto;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share Links
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${pageTitle} - ${currentUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(storeImage)}&description=${encodeURIComponent(pageTitle)}`
  };

  return (
    <>
      {/* 1. FLOATING SHARE BUTTON - FIXED LEFT */}
      <div className="fixed left-4 bottom-24 md:bottom-1/2 md:translate-y-1/2 z-50">
        <div className="relative">
          <button
            id="floating-share-trigger"
            onClick={() => {
              setShowShareMenu(!showShareMenu);
              setShowWhatsMenu(false);
            }}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-gray-800 hover:text-suncell-orange shadow-lg hover:shadow-xl border border-gray-100 flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
            aria-label="Compartilhar página"
            title="Compartilhar página"
          >
            {showShareMenu ? <X size={20} /> : <Share2 size={20} />}
          </button>

          {/* Share Dropdown/Popout */}
          <AnimatePresence>
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -15 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -15 }}
                className="absolute left-14 bottom-0 md:bottom-auto md:top-0 md:-translate-y-1/4 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 w-60 z-50 space-y-3"
              >
                <div className="border-b border-gray-50 pb-2">
                  <h4 className="font-display font-bold text-xs text-gray-800 uppercase tracking-wider">
                    Compartilhar Página
                  </h4>
                  <p className="font-sans text-[10px] text-gray-400 mt-0.5">
                    Envie para seus amigos ou redes
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {/* WhatsApp */}
                  <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 text-emerald-600 font-sans text-xs font-semibold transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center font-bold">W</span>
                    <span>WhatsApp</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-blue-50 text-blue-700 font-sans text-xs font-semibold transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center font-bold">F</span>
                    <span>Facebook</span>
                  </a>

                  {/* Twitter */}
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 text-slate-800 font-sans text-xs font-semibold transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-bold">X</span>
                    <span>Twitter</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50 text-indigo-700 font-sans text-xs font-semibold transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center font-bold">L</span>
                    <span>LinkedIn</span>
                  </a>

                  {/* Pinterest */}
                  <a
                    href={shareLinks.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-red-50 text-red-600 font-sans text-xs font-semibold transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center font-bold">P</span>
                    <span>Pinterest</span>
                  </a>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 text-gray-700 font-sans text-xs font-bold transition-all border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-gray-400" />}
                    <span>{copied ? "Link Copiado!" : "Copiar Link"}</span>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 2. FLOATING WHATSAPP BUTTON - FIXED RIGHT */}
      <div className="fixed right-4 bottom-6 z-50">
        <div className="relative">
          {/* Main Floating Button */}
          <button
            id="floating-whats-trigger"
            onClick={() => {
              setShowWhatsMenu(!showWhatsMenu);
              setShowShareMenu(false);
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
            aria-label="Falar com a SUNCELL no WhatsApp"
            title="Falar no WhatsApp"
          >
            {showWhatsMenu ? (
              <X size={24} />
            ) : (
              <div className="relative">
                <MessageCircle size={28} className="fill-white/10" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white animate-pulse" />
              </div>
            )}
          </button>

          {/* Premium Selector Popup */}
          <AnimatePresence>
            {showWhatsMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                className="absolute right-0 bottom-16 md:bottom-18 bg-white border border-gray-100 rounded-3xl shadow-2xl p-5 w-[310px] md:w-[330px] z-50 space-y-4"
              >
                <div className="border-b border-gray-50 pb-3 text-left">
                  <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">
                    Atendimento Expresso
                  </span>
                  <h4 className="font-display font-extrabold text-base text-[#0D0D0D] mt-2">
                    Como podemos ajudar?
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Selecione uma de nossas duas lojas físicas em Curitiba ou fale diretamente com a nossa diretoria.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {/* UNIDADE GUAÍRA */}
                  <a
                    href={getWhatsAppLink("5541999176640", "Widget Flutuante - Unidade Guaíra", currentUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-all group text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-emerald-100 text-emerald-500 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h5 className="font-display font-bold text-sm text-gray-800 group-hover:text-emerald-700 transition-colors">
                        Unidade Guaíra
                      </h5>
                      <p className="font-sans text-[11px] text-gray-400 truncate">
                        Dentro do Mercado Goes
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-emerald-500 transition-colors group-hover:translate-x-0.5" />
                  </a>

                  {/* UNIDADE ALTO BOQUEIRÃO */}
                  <a
                    href={getWhatsAppLink("5541997501961", "Widget Flutuante - Unidade Alto Boqueirão", currentUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-all group text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-emerald-100 text-emerald-500 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h5 className="font-display font-bold text-sm text-gray-800 group-hover:text-emerald-700 transition-colors">
                        Alto Boqueirão
                      </h5>
                      <p className="font-sans text-[11px] text-gray-400 truncate">
                        Dentro do Mercado Goes
                      </p>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-emerald-500 transition-colors group-hover:translate-x-0.5" />
                  </a>


                </div>

                <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-[10px] font-sans text-gray-400">
                  <span>⏰ Resposta ultra rápida</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online agora
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Global Background Overlay for dismissals */}
      {(showShareMenu || showWhatsMenu) && (
        <div 
          className="fixed inset-0 bg-transparent z-45" 
          onClick={() => {
            setShowShareMenu(false);
            setShowWhatsMenu(false);
          }}
        />
      )}
    </>
  );
}
