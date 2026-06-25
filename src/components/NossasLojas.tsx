import { motion } from "motion/react";
import { MapPin, Phone, ExternalLink, Navigation, Clock } from "lucide-react";
import { LOJAS } from "../siteData";

export default function NossasLojas() {
  return (
    <section id="lojas-section" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/25 text-suncell-orange font-mono text-xs font-bold uppercase tracking-wider rounded-full mb-4"
          >
            <MapPin size={12} />
            <span>Duas Unidades em Curitiba</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight"
          >
            Conheça as Nossas Lojas
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-sans text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            Ambas localizadas estrategicamente dentro das unidades do{" "}
            <span className="font-bold text-suncell-orange">Mercado Goes</span>,
            oferecendo total facilidade, estacionamento gratuito, segurança e conforto para você e seu celular.
          </motion.p>
        </div>

        {/* Grade de Lojas (2 Cards Lado a Lado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {LOJAS.map((loja, idx) => (
            <motion.div
              key={loja.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#F5F5F7] border border-gray-100 rounded-3xl overflow-hidden flex flex-col group hover:border-suncell-orange/45 hover:shadow-lg transition-all duration-300"
            >
              
              {/* Foto da Loja com Badge de Destaque */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src={loja.foto}
                  alt={`Fachada da Loja SUNCELL Unidade ${loja.nome}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                
                {/* Badge da Loja */}
                <div className="absolute top-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-suncell-orange/30 text-xs font-display font-bold text-suncell-orange uppercase tracking-wider">
                  Unidade {loja.id === "guaira" ? "Guaíra" : "Alto Boqueirão"}
                </div>

                {/* Horário */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md">
                  <Clock size={12} className="text-suncell-orange" />
                  <span>Seg a Sex: 9h às 18h | Sáb: 9h às 13h</span>
                </div>
              </div>

              {/* Informações da Loja */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="font-display font-extrabold text-2xl text-[#0D0D0D] group-hover:text-suncell-orange transition-colors duration-200">
                  {loja.nome}
                </h3>
                
                <div className="mt-4 space-y-3 flex-1">
                  {/* Endereço */}
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-suncell-orange shrink-0 mt-1" />
                    <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                      {loja.endereco}
                    </p>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-suncell-orange shrink-0" />
                    <p className="font-sans text-sm sm:text-base text-gray-700 font-semibold">
                      {loja.telefone}
                    </p>
                  </div>
                </div>

                {/* Botões de Ação Grandes (Foco em Idosos, Toques Grandes) */}
                <div className="mt-8 space-y-3">
                  {/* WhatsApp Botão Principal */}
                  <a
                    id={`loja-whats-btn-${loja.id}`}
                    href={loja.linkWhats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light hover:from-suncell-orange-light hover:to-suncell-orange text-white text-center font-sans font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all cursor-pointer focus:outline-none"
                  >
                    <Phone size={22} className="shrink-0" />
                    <span>Falar no WhatsApp da Loja</span>
                  </a>

                  {/* Ver no mapa Botão Secundário */}
                  <a
                    id={`loja-maps-btn-${loja.id}`}
                    href={loja.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 hover:text-[#0D0D0D] border border-gray-200 text-center font-sans font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer focus:outline-none shadow-sm"
                  >
                    <Navigation size={18} className="text-suncell-orange shrink-0" />
                    <span>Ver no Mapa do Google</span>
                    <ExternalLink size={14} className="opacity-60 shrink-0" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
