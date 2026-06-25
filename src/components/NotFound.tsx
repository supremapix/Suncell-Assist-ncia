import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Smartphone, Phone, Home, ArrowLeft, ShieldAlert, MapPin, Navigation } from "lucide-react";
import { LOJAS } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";
import FAQAccordion from "./FAQAccordion";

export default function NotFound() {
  const faqResumido = [
    { q: "Qual o horário de funcionamento das lojas?", a: "Ambas as nossas lojas funcionam de Segunda a Sexta das 9h às 18h, e aos Sábados das 9h às 13h. Traga seu aparelho para um orçamento gratuito!" },
    { q: "Onde ficam localizadas as lojas da SUNCELL?", a: "Ficamos localizados dentro das unidades do Mercado Goes. Unidade Guaíra: Rua Maria Moscardi Fanini, 261. Unidade Alto Boqueirão: R. Pastor Antônio Polito, 1805. Ambas têm estacionamento amplo e seguro gratuito." }
  ];

  return (
    <>
      {/* Injeta noindex para evitar que páginas de erro apareçam nos buscadores */}
      <EnhancedSEO title="Página Não Encontrada | SUNCELL Assistência" noIndex={true} />

      <main className="pt-32 pb-24 min-h-screen bg-[#F5F5F7] flex items-center justify-center text-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Logo animada com Alerta */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
              className="w-24 h-24 bg-suncell-orange/10 border border-suncell-orange/20 rounded-3xl flex items-center justify-center text-suncell-orange"
            >
              <ShieldAlert size={56} />
            </motion.div>
            <div className="absolute inset-0 bg-suncell-orange/5 rounded-3xl blur-xl -z-10 animate-pulse" />
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0D0D0D] tracking-tight">
            Ops! Página Não Encontrada
          </h1>
          
          <p className="mt-4 font-sans text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            O endereço digitado pode estar incorreto, ter sido removido ou estar temporariamente indisponível. Mas não se preocupe, estamos prontos para te ajudar!
          </p>

          {/* Botões rápidos de navegação */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              id="notfound-home-btn"
              to="/"
              className="px-5 py-2.5 bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white text-center font-sans font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 hover:shadow-md transition-all cursor-pointer active:scale-[0.99]"
            >
              <Home size={14} />
              <span>Voltar para Home</span>
            </Link>

            <a
              id="notfound-services-btn"
              href="/#servicos-section"
              className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-center font-sans font-bold text-xs sm:text-sm border border-gray-200 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-[0.99]"
            >
              <span>Ver Serviços</span>
            </a>
          </div>

          {/* Seção de Contatos Grandes de Destaque (Idoso-friendly) */}
          <div className="mt-16 text-left">
            <h2 className="font-display font-extrabold text-2xl text-[#0D0D0D] mb-6 text-center">
              Fale Conosco Diretamente por WhatsApp
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card Loja 1 */}
              <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between shadow-md shadow-black/2">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-1">SUNCELL Unidade Guaíra</h3>
                  <p className="font-sans text-xs text-gray-500 mb-4 flex items-start gap-1">
                    <MapPin size={12} className="text-suncell-orange mt-0.5" />
                    <span>Rua Maria Moscardi Fanini, 261 (No Mercado Goes)</span>
                  </p>
                </div>
                
                <a
                  id="notfound-whats-guaira"
                  href={getWhatsAppLink("5541999176640", "Pág 404 - Unidade Guaíra", typeof window !== "undefined" ? window.location.href : "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_4px_12px_rgba(255,107,0,0.15)] transition-all cursor-pointer active:scale-[0.99]"
                >
                  <Phone size={14} />
                  <span>WhatsApp Guaíra</span>
                </a>
              </div>

              {/* Card Loja 2 */}
              <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between shadow-md shadow-black/2">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-1">SUNCELL Unidade Alto Boqueirão</h3>
                  <p className="font-sans text-xs text-gray-500 mb-4 flex items-start gap-1">
                    <MapPin size={12} className="text-suncell-orange mt-0.5" />
                    <span>R. Pastor Antônio Polito, 1805 (No Mercado Goes)</span>
                  </p>
                </div>

                <a
                  id="notfound-whats-boqueirao"
                  href={getWhatsAppLink("5541997501961", "Pág 404 - Unidade Alto Boqueirão", typeof window !== "undefined" ? window.location.href : "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_4px_12px_rgba(255,107,0,0.15)] transition-all cursor-pointer active:scale-[0.99]"
                >
                  <Phone size={14} />
                  <span>WhatsApp Boqueirão</span>
                </a>
              </div>

            </div>
          </div>

          {/* Mini FAQ Resumido */}
          <div className="mt-16 text-left max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-xl text-[#0D0D0D] mb-4 text-center">
              Dúvidas Rápidas sobre a SUNCELL
            </h2>
            <FAQAccordion items={faqResumido} />
          </div>

        </div>
      </main>
    </>
  );
}
