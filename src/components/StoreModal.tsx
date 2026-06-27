import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Phone, Clock, CheckCircle2, Navigation, Compass, ExternalLink, ShieldCheck } from "lucide-react";
import { LOJAS, Loja } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";

// Custom event trigger to open the store details modal from any component
export function openStoreDetailsModal(storeId: "guaira" | "boqueirao" | "ambas") {
  const event = new CustomEvent("suncell-open-store-modal", { detail: { storeId } });
  window.dispatchEvent(event);
}

export default function StoreModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"guaira" | "boqueirao">("guaira");

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ storeId: "guaira" | "boqueirao" | "ambas" }>;
      const storeId = customEvent.detail?.storeId || "ambas";
      
      if (storeId === "ambas") {
        setActiveTab("guaira");
      } else {
        setActiveTab(storeId);
      }
      setIsOpen(true);
    };

    window.addEventListener("suncell-open-store-modal", handleOpenModal);
    return () => {
      window.removeEventListener("suncell-open-store-modal", handleOpenModal);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const activeStore = LOJAS.find((loja) => loja.id === activeTab) || LOJAS[0];

  // Services offered in our physical units
  const services = [
    { title: "Troca de Tela na Hora", desc: "Telas premium com alta sensibilidade e brilho 100% calibrado, prontas em até 1 hora." },
    { title: "Substituição de Bateria", desc: "Baterias homologadas com excelente autonomia e saúde 100%, eliminando desligamentos repentinos." },
    { title: "Reparo de Placa Mãe", desc: "Laboratório próprio com micro-soldagem avançada para recuperar placas condenadas." },
    { title: "Conector de Carga", desc: "Troca rápida de portas USB-C, Lightning e Micro-USB com garantia de contato estável." },
    { title: "Desoxidação Técnica", desc: "Banho químico com tecnologia ultra-sônica para reaver celulares que caíram na água." },
    { title: "Câmeras e Botões", desc: "Reposição de lentes trincadas, sensores de foco e botões físicos rígidos ou inoperantes." },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] sm:max-h-[85vh] z-10"
          >
            
            {/* Header com Seletor de Abas */}
            <div className="bg-[#0D0D0D] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-suncell-orange/15 border border-suncell-orange/20 rounded-xl text-suncell-orange">
                  <Compass size={20} />
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                    Detalhes da Unidade Física
                  </h3>
                  <p className="font-sans text-xs text-zinc-400">
                    Clique nas abas para ver como chegar e serviços de cada loja
                  </p>
                </div>
              </div>

              {/* Botão Fechar no topo */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Fechar janela"
              >
                <X size={20} />
              </button>
            </div>

            {/* Alternador de Lojas / Tabs */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex gap-2">
              <button
                onClick={() => setActiveTab("guaira")}
                className={`flex-1 py-3 px-4 rounded-xl font-sans font-extrabold text-sm text-center transition-all duration-200 focus:outline-none cursor-pointer ${
                  activeTab === "guaira"
                    ? "bg-suncell-orange text-white shadow-md shadow-suncell-orange/15"
                    : "bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-[#0D0D0D]"
                }`}
              >
                Unidade Guaíra
              </button>
              <button
                onClick={() => setActiveTab("boqueirao")}
                className={`flex-1 py-3 px-4 rounded-xl font-sans font-extrabold text-sm text-center transition-all duration-200 focus:outline-none cursor-pointer ${
                  activeTab === "boqueirao"
                    ? "bg-suncell-orange text-white shadow-md shadow-suncell-orange/15"
                    : "bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-[#0D0D0D]"
                }`}
              >
                Unidade Alto Boqueirão
              </button>
            </div>

            {/* Conteúdo Rolável do Modal */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
              
              {/* Seção 1: Como Chegar & Detalhes Físicos */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Imagem Real da Loja */}
                <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 aspect-video md:aspect-square">
                  <img
                    src={activeStore.foto}
                    alt={`Fachada da Loja SUNCELL Unidade ${activeStore.nome}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-sans font-bold text-white backdrop-blur-sm shadow-sm select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-suncell-orange animate-pulse" />
                    <span>Estacionamento Grátis</span>
                  </div>
                </div>

                {/* Dados da Loja e GPS */}
                <div className="md:col-span-7 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-suncell-orange uppercase tracking-wider bg-suncell-orange/5 px-2.5 py-1 rounded-md border border-suncell-orange/15">
                      <MapPin size={12} />
                      <span>Localização Estratégica</span>
                    </span>
                    
                    <h4 className="font-display font-extrabold text-2xl text-[#0D0D0D] mt-2">
                      {activeStore.nome}
                    </h4>

                    <p className="font-sans text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                      Estamos localizados de forma segura e prática <span className="font-bold text-suncell-orange">dentro do Mercado Goes</span>. Aproveite toda a segurança privada do mercado e faça suas compras enquanto realizamos o reparo expresso do seu aparelho!
                    </p>

                    {/* Endereço Completo */}
                    <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                      <MapPin size={18} className="text-suncell-orange shrink-0 mt-0.5" />
                      <p className="font-sans text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                        {activeStore.endereco}
                      </p>
                    </div>

                    {/* Horários */}
                    <div className="mt-3 flex items-center gap-2.5 text-xs sm:text-sm text-gray-600 font-semibold px-1">
                      <Clock size={16} className="text-suncell-orange shrink-0" />
                      <span>Segunda a Sexta: 9h às 18h | Sábado: 9h às 13h</span>
                    </div>
                  </div>

                  {/* Botões Grandes para Traçar Rota no GPS */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <a
                      id={`modal-gps-maps-${activeStore.id}`}
                      href={activeStore.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-4 rounded-xl bg-[#F5F5F7] hover:bg-gray-100 border border-gray-200 text-[#0D0D0D] font-sans font-bold text-sm flex items-center justify-center gap-2 hover:shadow-sm transition-all duration-200 cursor-pointer focus:outline-none"
                    >
                      <Navigation size={16} className="text-suncell-orange shrink-0" />
                      <span>Como Chegar (Google Maps)</span>
                      <ExternalLink size={12} className="opacity-50 shrink-0" />
                    </a>

                    <a
                      id={`modal-gps-waze-${activeStore.id}`}
                      href={`https://waze.com/ul?ll=${activeStore.id === "guaira" ? "-25.4745,-49.2783" : "-25.5342,-49.2319"}&navigate=yes`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-100 text-sky-700 font-sans font-bold text-sm flex items-center justify-center gap-2 hover:shadow-sm transition-all duration-200 cursor-pointer focus:outline-none"
                    >
                      <Compass size={16} className="text-sky-500 shrink-0" />
                      <span>Abrir no GPS Waze</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Seção 2: Serviços Prestados nesta Loja */}
              <div className="pt-6 border-t border-gray-100">
                <div className="mb-5">
                  <h4 className="font-display font-extrabold text-lg text-[#0D0D0D] flex items-center gap-2">
                    <ShieldCheck size={20} className="text-suncell-orange" />
                    Serviços Realizados Nesta Unidade
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1">
                    Ambos os laboratórios possuem ferramentas de diagnóstico de última geração e técnicos experientes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50/55 hover:bg-gray-50 border border-gray-100/80 hover:border-gray-200 rounded-2xl transition-all duration-200"
                    >
                      <h5 className="font-sans font-extrabold text-sm text-[#0D0D0D] flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-suncell-orange shrink-0" />
                        {service.title}
                      </h5>
                      <p className="font-sans text-xs text-gray-500 mt-1.5 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seção 3: Atendimento e Suporte Direto */}
              <div className="p-6 bg-gradient-to-r from-suncell-black to-suncell-dark-gray text-white rounded-2xl border border-suncell-orange/20 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-suncell-orange/10 rounded-full blur-2xl -z-10" />
                
                <div>
                  <h4 className="font-display font-extrabold text-lg text-white">
                    Deseja um Orçamento Grátis?
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-lg">
                    Fale agora com a nossa equipe do {activeStore.nome} no WhatsApp! Respondemos em menos de 5 minutos com o preço estimado do conserto.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    id={`modal-action-whats-${activeStore.id}`}
                    href={getWhatsAppLink(activeStore.whatsapp, `Modal Detalhes - Unidade ${activeStore.nome}`, typeof window !== "undefined" ? window.location.href : "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white text-center font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer focus:outline-none"
                  >
                    <Phone size={14} />
                    <span>WhatsApp {activeStore.id === "guaira" ? "Guaíra" : "Boqueirão"}</span>
                  </a>

                  <a
                    id={`modal-action-phone-${activeStore.id}`}
                    href={`tel:${activeStore.telefone.replace(/[^0-9]/g, "")}`}
                    className="py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-slate-200 text-center font-sans font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none"
                  >
                    <Phone size={14} className="text-suncell-orange" />
                    <span>Ligar para Loja</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Footer do Modal */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span>Garantia Real de 90 Dias em todos os serviços</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 font-sans font-bold rounded-xl transition-all cursor-pointer focus:outline-none"
              >
                Fechar Janela
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
