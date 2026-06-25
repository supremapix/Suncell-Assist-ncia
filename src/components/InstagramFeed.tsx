import { motion } from "motion/react";
import { Instagram, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { INSTAGRAM_PROFILE, INSTAGRAM_EMBED_URL } from "../siteData";

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-[#F5F5F7] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho do Feed */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-suncell-orange/10 border border-suncell-orange/25 text-suncell-orange font-mono text-xs font-bold uppercase tracking-wider rounded-full mb-4"
          >
            <Instagram size={12} />
            <span>@suncell.brasil</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] tracking-tight"
          >
            Siga-nos no Instagram
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 font-sans text-gray-600 text-base"
          >
            Acompanhe nossas dicas de cuidados diários, reparos incríveis na bancada e ofertas exclusivas!
          </motion.p>
        </div>

        {/* Container do Feed com Animação Scroll Triggered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl p-4 sm:p-6"
        >
          {/* Iframe Embed */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-gray-100 h-[480px] md:h-[750px]">
            <iframe
              id="instagram-embed-iframe"
              src={INSTAGRAM_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              scrolling="no"
              allowTransparency
              title="Instagram Feed @suncell.brasil"
              style={{ border: 0 }}
            />

            {/* Fallback Visual e indicador de carregamento atrás do Iframe */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-8 text-center bg-[#F5F5F7]/50">
              <Instagram size={40} className="text-suncell-orange animate-bounce mb-3" />
              <p className="font-sans text-sm text-gray-700">
                Carregando novidades do Instagram...
              </p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Se o feed não exibir imediatamente, você pode clicar no botão abaixo para nos visitar diretamente no Instagram.
              </p>
            </div>
          </div>

          {/* Botão Seguir no Instagram */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-suncell-orange/15 rounded-lg flex items-center justify-center border border-suncell-orange/20">
                <Sparkles size={18} className="text-suncell-orange" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-sm text-[#0D0D0D]">Comunidade SUNCELL</p>
                <p className="font-sans text-xs text-gray-500">Participe e receba novidades exclusivas em primeira mão.</p>
              </div>
            </div>

            <motion.a
              id="instagram-follow-btn"
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-black text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all cursor-pointer focus:outline-none"
            >
              <Instagram size={18} />
              <span>Seguir no Instagram</span>
              <ArrowRight size={14} className="ml-1" />
            </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
