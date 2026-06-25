import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, MapPin, Smartphone, ShieldCheck, Mail, ArrowUpRight, HelpCircle } from "lucide-react";
import { LOJAS, getBairrosPages, getCidadesPages, getAparelhosPages, getServicosPages, rotaDe } from "../siteData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import { SupremaCredit } from "./SupremaCredit";

export default function Footer() {
  const bairrosDestacados = getBairrosPages().filter(b => 
    ["guaia", "alto-boqueirao", "batel", "portao", "centro", "agua-verde", "cic", "sitio-cercado"].includes(b.slug)
  );

  const cidadesDestacadas = getCidadesPages().slice(0, 5);
  const aparelhos = getAparelhosPages();
  const servicos = getServicosPages();

  return (
    <footer id="main-footer" className="bg-suncell-black border-t border-suncell-medium-gray text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção Superior do Footer com Contatos de Destaque (Idoso Friendly - Ícones Grandes) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16 border-b border-suncell-medium-gray/50">
          
          {/* Apresentação da Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-suncell-orange to-suncell-orange-light rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone size={22} className="text-white" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                SUNCELL
              </span>
            </div>
            
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-sm">
              Sua assistência técnica definitiva em Curitiba. Especialistas em consertos rápidos de celulares de todas as marcas com honestidade e transparência.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-suncell-text-muted">
              <ShieldCheck size={16} className="text-suncell-orange" />
              <span>Garantia de 90 dias em todos os serviços</span>
            </div>
          </div>

          {/* Botões de Ligação e WhatsApp Grandes (Foco em Idosos - Toque Fácil) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Contato Loja Guaíra */}
            <div className="bg-suncell-dark-gray border border-suncell-medium-gray p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <p className="font-display font-bold text-lg text-white mb-1 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-suncell-orange animate-ping" />
                  Unidade Guaíra
                </p>
                <p className="font-sans text-sm text-slate-300 mb-4">
                  Dentro do Mercado Goes Guaíra
                </p>
              </div>
              
              <a
                id="footer-call-guaira"
                href={getWhatsAppLink("5541999176640", "Rodapé - Unidade Guaíra", typeof window !== "undefined" ? window.location.href : "")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm flex items-center justify-center gap-2 hover:shadow-md transition-all cursor-pointer"
              >
                <Phone size={16} />
                <span>WhatsApp Guaíra</span>
              </a>
            </div>

            {/* Contato Loja Alto Boqueirão */}
            <div className="bg-suncell-dark-gray border border-suncell-medium-gray p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <p className="font-display font-bold text-lg text-white mb-1 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-suncell-orange animate-ping" />
                  Unidade Alto Boqueirão
                </p>
                <p className="font-sans text-sm text-slate-300 mb-4">
                  Dentro do Mercado Goes Alto Boqueirão
                </p>
              </div>

              <a
                id="footer-call-boqueirao"
                href={getWhatsAppLink("5541997501961", "Rodapé - Unidade Alto Boqueirão", typeof window !== "undefined" ? window.location.href : "")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light text-white font-sans font-bold text-sm flex items-center justify-center gap-2 hover:shadow-md transition-all cursor-pointer"
              >
                <Phone size={16} />
                <span>WhatsApp Boqueirão</span>
              </a>
            </div>

          </div>

        </div>

        {/* Links Principais do Footer (Letras Maiores, Mínimo 16px para melhor legibilidade) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 text-slate-300">
          
          {/* Coluna 1: Lojas e Institucional */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-white text-lg border-l-2 border-suncell-orange pl-3">
              SUNCELL Lojas
            </h4>
            <ul className="space-y-3 font-sans text-base">
              <li>
                <a href="/#lojas-section" className="hover:text-suncell-orange transition-colors flex items-center gap-1.5 focus:outline-none">
                  Unidade Guaíra <ArrowUpRight size={14} className="opacity-40" />
                </a>
              </li>
              <li>
                <a href="/#lojas-section" className="hover:text-suncell-orange transition-colors flex items-center gap-1.5 focus:outline-none">
                  Unidade Boqueirão <ArrowUpRight size={14} className="opacity-40" />
                </a>
              </li>
              <li>
                <a href={LOJAS[0].maps} target="_blank" rel="noopener noreferrer" className="hover:text-suncell-orange transition-colors flex items-center gap-1 focus:outline-none">
                  Como Chegar no Guaíra
                </a>
              </li>
              <li>
                <a href={LOJAS[1].maps} target="_blank" rel="noopener noreferrer" className="hover:text-suncell-orange transition-colors flex items-center gap-1 focus:outline-none">
                  Como Chegar no Boqueirão
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Serviços Principais */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-white text-lg border-l-2 border-suncell-orange pl-3">
              Serviços
            </h4>
            <ul className="space-y-3 font-sans text-base">
              {servicos.map((s) => (
                <li key={s.slug}>
                  <Link id={`footer-servico-${s.slug}`} to={rotaDe(s)} className="hover:text-suncell-orange transition-colors focus:outline-none block">
                    {s.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Aparelhos e Marcas */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-white text-lg border-l-2 border-suncell-orange pl-3">
              Marcas Atendidas
            </h4>
            <ul className="space-y-3 font-sans text-base">
              {aparelhos.map((a) => (
                <li key={a.slug}>
                  <Link id={`footer-aparelho-${a.slug}`} to={rotaDe(a)} className="hover:text-suncell-orange transition-colors focus:outline-none block">
                    {a.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Bairros e Cidades de Cobertura */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-white text-lg border-l-2 border-suncell-orange pl-3">
              Áreas de Atendimento
            </h4>
            <ul className="space-y-3 font-sans text-base">
              {bairrosDestacados.slice(0, 4).map((b) => (
                <li key={b.slug}>
                  <Link id={`footer-bairro-${b.slug}`} to={rotaDe(b)} className="hover:text-suncell-orange transition-colors focus:outline-none block">
                    Celular no {b.nome}
                  </Link>
                </li>
              ))}
              {cidadesDestacadas.slice(0, 2).map((c) => (
                <li key={c.slug}>
                  <Link id={`footer-cidade-${c.slug}`} to={rotaDe(c)} className="hover:text-suncell-orange transition-colors focus:outline-none block">
                    Celular em {c.nome}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/#cobertura-section" className="text-suncell-orange hover:text-suncell-orange-light font-bold flex items-center gap-1 focus:outline-none">
                  Ver Todas as Áreas <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divisão dos Direitos Autorais e Crédito Obrigatório da Suprema */}
        <div className="pt-8 border-t border-suncell-medium-gray/30 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-suncell-text-muted">
          <div className="text-center md:text-left space-y-1">
            <p className="font-sans">
              © 2026 SUNCELL Assistência Técnica Celular Curitiba. Todos os direitos reservados.
            </p>
            <p className="font-sans text-xs">
              Os preços e prazos fornecidos no site são estimativas e dependem de avaliação física técnica prévia.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/suncell.brasil/" target="_blank" rel="noopener noreferrer" className="hover:text-suncell-orange transition-colors focus:outline-none">
              Instagram
            </a>
            <span className="opacity-20">|</span>
            <a href="/#lojas-section" className="hover:text-suncell-orange transition-colors focus:outline-none">
              Mapa do Site
            </a>
          </div>
        </div>

        {/* CRÉDITO OBRIGATÓRIO SUPREMA SITES EXPRESS */}
        <SupremaCredit />

      </div>
    </footer>
  );
}
