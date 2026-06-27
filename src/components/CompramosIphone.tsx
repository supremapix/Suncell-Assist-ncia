import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  DollarSign, 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  HelpCircle, 
  Flame, 
  ChevronRight, 
  Layers, 
  Battery, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import EnhancedSEO from "./EnhancedSEO";

// Listas de opções para o formulário interativo de avaliação de iPhone
const MODELOS = [
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X"
];

const CAPACIDADES = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"];

const SAUDE_BATERIA = [
  { label: "Excelente (85% a 100%)", value: "85-100" },
  { label: "Moderada (80% a 84%)", value: "80-84" },
  { label: "Baixa / Manutenção (Abaixo de 80%)", value: "abaixo-80" },
  { label: "Não liga / Bateria Estufada", value: "nao-liga" }
];

const ESTADO_FISICO = [
  { label: "Impecável (Sem nenhum arranhão)", value: "impecavel" },
  { label: "Sinais de Uso (Riscos leves comuns)", value: "sinais-uso" },
  { label: "Tela Trincada (Mas o toque funciona)", value: "tela-trincada" },
  { label: "Traseira Quebrada (Vidro traseiro trincado)", value: "traseira-quebrada" },
  { label: "Com Defeito (Câmera, Face ID ou botões falhando)", value: "com-defeito" },
  { label: "Não Liga / Placa Queimada / Danificado", value: "nao-liga-placa" }
];

const ACESSORIOS = [
  { label: "Caixa Original", id: "caixa" },
  { label: "Cabo de Carga Original", id: "cabo" },
  { label: "Carregador de Parede Original", id: "carregador" },
  { label: "Nota Fiscal de Compra", id: "nota" }
];

export default function CompramosIphone() {
  const [step, setStep] = useState(1);
  
  // States do Formulário
  const [modeloSel, setModeloSel] = useState("");
  const [capacidadeSel, setCapacidadeSel] = useState("");
  const [bateriaSel, setBateriaSel] = useState("");
  const [estadoSel, setEstadoSel] = useState("");
  const [acessoriosSel, setAcessoriosSel] = useState<string[]>([]);

  const handleToggleAcessorio = (id: string) => {
    if (acessoriosSel.includes(id)) {
      setAcessoriosSel(acessoriosSel.filter((item) => item !== id));
    } else {
      setAcessoriosSel([...acessoriosSel, id]);
    }
  };

  const handleReset = () => {
    setModeloSel("");
    setCapacidadeSel("");
    setBateriaSel("");
    setEstadoSel("");
    setAcessoriosSel([]);
    setStep(1);
  };

  // Gerar mensagem formatada para o WhatsApp
  const generateWhatsAppMessage = () => {
    const acessoriosTxt = acessoriosSel.length > 0 
      ? acessoriosSel.map(id => ACESSORIOS.find(a => a.id === id)?.label).join(", ")
      : "Nenhum";

    const text = `Olá SUNCELL! Gostaria de uma avaliação para vender meu iPhone usado:
- Modelo: ${modeloSel}
- Armazenamento: ${capacidadeSel}
- Saúde da Bateria: ${bateriaSel}
- Estado Geral: ${estadoSel}
- Acessórios inclusos: ${acessoriosTxt}

Entendo que vocês compram abaixo do valor de mercado para revenda, e busco a facilidade do pagamento rápido via PIX na hora!`;

    return getWhatsAppLink("5541999176640", "Avaliacao iPhone Usado", text);
  };

  return (
    <>
      <EnhancedSEO 
        title="Compramos seu iPhone Usado em Curitiba | Pagamento Rápido via Pix"
        description="Quer vender seu iPhone usado ou quebrado em Curitiba? A SUNCELL avalia seu celular na hora e paga via PIX ou dinheiro imediatamente. Faça uma simulação rápida!"
        canonicalPath="/compramos-iphone"
      />

      <div className="pt-24 pb-16 bg-[#F5F5F7]">
        {/* Banner Hero Superior */}
        <div className="relative overflow-hidden bg-gradient-to-br from-suncell-black via-suncell-dark-gray to-suncell-black py-16 sm:py-20 text-white border-b border-suncell-orange/20">
          {/* Efeitos de Fundo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,107,0,0.15),transparent_45%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-suncell-orange/5 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            {/* Tag Alta Visibilidade */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-suncell-orange/20 border border-suncell-orange/40 text-suncell-orange text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest mb-6 animate-pulse"
            >
              <Flame size={14} className="shrink-0" />
              <span>Compramos iPhone Usado Abaixo da FIPE/Mercado</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-6 leading-tight"
            >
              Dinheiro na Hora: <span className="text-suncell-orange">Nós Compramos Seu iPhone</span> Usado ou Seminovos!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed"
            >
              Cansou de anúncios falsos, golpes na internet ou pessoas desmarcando? 
              Na <strong>SUNCELL</strong> você vende seu iPhone com segurança máxima dentro do supermercado Goes e sai com o <strong>PIX na hora</strong>!
            </motion.p>
          </div>
        </div>

        {/* Corpo Principal da Página */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Coluna do Formulário Interativo (Esq) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 relative">
              
              {/* Barra de Progresso do Step */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-mono font-bold text-suncell-orange uppercase">
                  Passo {step} de 5
                </span>
                <div className="flex gap-1.5 h-1.5 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="bg-suncell-orange transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* CONTEÚDO DOS PASSOS */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                        Qual é o modelo do seu iPhone?
                      </h2>
                      <p className="text-sm font-sans text-gray-500 mt-1">
                        Selecione o modelo exato que deseja vender.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                      {MODELOS.map((modelo) => (
                        <button
                          key={modelo}
                          onClick={() => {
                            setModeloSel(modelo);
                            setStep(2);
                          }}
                          className={`p-3 rounded-xl border text-center font-sans text-sm font-bold transition-all cursor-pointer ${
                            modeloSel === modelo
                              ? "bg-suncell-orange text-white border-suncell-orange shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {modelo}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                        Qual a capacidade do seu {modeloSel}?
                      </h2>
                      <p className="text-sm font-sans text-gray-500 mt-1">
                        Você pode verificar isso em Ajustes &gt; Geral &gt; Sobre &gt; Capacidade.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CAPACIDADES.map((cap) => (
                        <button
                          key={cap}
                          onClick={() => {
                            setCapacidadeSel(cap);
                            setStep(3);
                          }}
                          className={`p-4 rounded-xl border text-left font-sans text-base font-bold flex items-center justify-between transition-all cursor-pointer ${
                            capacidadeSel === cap
                              ? "bg-suncell-orange text-white border-suncell-orange shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <span>{cap}</span>
                          <ChevronRight size={18} />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setStep(1)}
                      className="mt-4 flex items-center gap-1.5 text-xs font-sans font-extrabold text-gray-500 hover:text-suncell-orange"
                    >
                      <ArrowLeft size={14} /> Voltar para o Passo Anterior
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                        Como está a Saúde da Bateria?
                      </h2>
                      <p className="text-sm font-sans text-gray-500 mt-1">
                        Confira em Ajustes &gt; Bateria &gt; Saúde da Bateria.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {SAUDE_BATERIA.map((bat) => (
                        <button
                          key={bat.value}
                          onClick={() => {
                            setBateriaSel(bat.label);
                            setStep(4);
                          }}
                          className={`w-full p-4 rounded-xl border text-left font-sans text-sm sm:text-base font-bold flex items-center gap-3 transition-all cursor-pointer ${
                            bateriaSel === bat.label
                              ? "bg-suncell-orange text-white border-suncell-orange shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <Battery size={20} className="shrink-0 text-suncell-orange group-hover:text-white" />
                          <span className="flex-1">{bat.label}</span>
                          <ChevronRight size={18} className="shrink-0" />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="mt-4 flex items-center gap-1.5 text-xs font-sans font-extrabold text-gray-500 hover:text-suncell-orange"
                    >
                      <ArrowLeft size={14} /> Voltar para o Passo Anterior
                    </button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                        Qual o estado físico do aparelho?
                      </h2>
                      <p className="text-sm font-sans text-gray-500 mt-1">
                        Seja 100% sincero. Nós compramos mesmo com detalhes, riscos ou quebrado!
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {ESTADO_FISICO.map((est) => (
                        <button
                          key={est.value}
                          onClick={() => {
                            setEstadoSel(est.label);
                            setStep(5);
                          }}
                          className={`w-full p-4 rounded-xl border text-left font-sans text-sm sm:text-base font-bold flex items-center gap-3 transition-all cursor-pointer ${
                            estadoSel === est.label
                              ? "bg-suncell-orange text-white border-suncell-orange shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <Smartphone size={18} className="shrink-0" />
                          <span className="flex-1">{est.label}</span>
                          <ChevronRight size={18} className="shrink-0" />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setStep(3)}
                      className="mt-4 flex items-center gap-1.5 text-xs font-sans font-extrabold text-gray-500 hover:text-suncell-orange"
                    >
                      <ArrowLeft size={14} /> Voltar para o Passo Anterior
                    </button>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                        Você tem os acessórios originais?
                      </h2>
                      <p className="text-sm font-sans text-gray-500 mt-1">
                        Selecione todos os itens adicionais que acompanham o aparelho (opcional).
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ACESSORIOS.map((ace) => {
                        const isSelected = acessoriosSel.includes(ace.id);
                        return (
                          <button
                            key={ace.id}
                            onClick={() => handleToggleAcessorio(ace.id)}
                            className={`p-4 rounded-xl border text-left font-sans text-sm sm:text-base font-bold flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? "bg-suncell-orange/10 border-suncell-orange text-[#0D0D0D]"
                                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            <span>{ace.label}</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? "border-suncell-orange bg-suncell-orange text-white" : "border-gray-300"
                            }`}>
                              {isSelected && <CheckCircle size={12} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Resumo e Botão de Envio de Proposta */}
                    <div className="mt-8 p-5 rounded-2xl bg-suncell-black text-white space-y-4 shadow-lg border border-suncell-orange/20">
                      <div className="flex items-center gap-2">
                        <Sparkles size={18} className="text-suncell-orange" />
                        <h3 className="font-display font-black text-sm uppercase tracking-wider text-suncell-orange">
                          Resumo do seu Aparelho
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-sans text-slate-300">
                        <div>Modelo: <strong className="text-white">{modeloSel}</strong></div>
                        <div>Capacidade: <strong className="text-white">{capacidadeSel}</strong></div>
                        <div>Bateria: <strong className="text-white">{bateriaSel}</strong></div>
                        <div>Físico: <strong className="text-white">{estadoSel}</strong></div>
                      </div>

                      <p className="text-[11px] font-sans text-slate-400 leading-normal border-t border-white/10 pt-3">
                        ⚠️ <strong>Nota:</strong> Como somos uma assistência que revende aparelhos revisados com garantia física para os clientes, nós compramos iPhones abaixo do valor comercial médio de venda direta. Oferecemos em troca comodidade absoluta, segurança armada contra golpes e dinheiro imediato na sua conta no mesmo minuto!
                      </p>

                      <a
                        id="whats-enviar-iphone-usado"
                        href={generateWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light hover:from-suncell-orange-light hover:to-suncell-orange text-white text-center font-sans font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-all duration-300 cursor-pointer focus:outline-none"
                      >
                        <Phone size={16} className="shrink-0" />
                        <span>RECEBER PROPOSTA VIA WHATSAPP</span>
                      </a>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() => setStep(4)}
                        className="flex items-center gap-1.5 text-xs font-sans font-extrabold text-gray-500 hover:text-suncell-orange"
                      >
                        <ArrowLeft size={14} /> Voltar para o Passo Anterior
                      </button>

                      <button
                        onClick={handleReset}
                        className="text-xs font-sans font-extrabold text-red-500 hover:underline"
                      >
                        Reiniciar Simulação
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Coluna de Benefícios & Garantias (Dir) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Caixa Informativa Preço de Mercado */}
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200/60 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertTriangle size={20} className="shrink-0 text-amber-600" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider">
                  Como funciona nosso valor?
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-sans text-amber-900 leading-relaxed">
                Nós compramos iPhones exclusivamente <strong>abaixo do valor médio de mercado</strong> para revendedores. 
                Isso ocorre porque cada aparelho passa por testes rígidos, higienização profunda e oferecemos garantia completa ao novo comprador. 
                É a opção perfeita para quem quer <strong>dinheiro na hora</strong> de forma prática e 100% segura.
              </p>
            </div>

            {/* Lista de Vantagens Suncell */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 space-y-5">
              <h3 className="font-display font-black text-[#0D0D0D] text-base border-b border-gray-100 pb-3">
                Por que vender para a SUNCELL?
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-suncell-orange/10 flex items-center justify-center text-suncell-orange shrink-0">
                    <DollarSign size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-[#0D0D0D]">Pix Imediato na Hora</h4>
                    <p className="text-xs font-sans text-gray-500 mt-0.5">Após a vistoria técnica rápida (10 min), o dinheiro cai instantaneamente na sua conta.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-suncell-orange/10 flex items-center justify-center text-suncell-orange shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-[#0D0D0D]">Segurança Física Absoluta</h4>
                    <p className="text-xs font-sans text-gray-500 mt-0.5">Sem encontros arriscados na rua. Você é atendido dentro do Mercado Goes com segurança privada do supermercado.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-suncell-orange/10 flex items-center justify-center text-suncell-orange shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-[#0D0D0D]">Compramos Mesmo Trincado</h4>
                    <p className="text-xs font-sans text-gray-500 mt-0.5">Aceitamos aparelhos com a tela trincada, vidro traseiro quebrado, saúde da bateria baixa ou defeitos pontuais.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FAQs sobre venda de celular */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
              <HelpCircle size={22} className="text-suncell-orange shrink-0" />
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0D0D0D]">
                Dúvidas Frequentes sobre a Compra de iPhones
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <h4 className="text-base font-sans font-extrabold text-[#0D0D0D]">
                  Quanto tempo demora a avaliação na loja física?
                </h4>
                <p className="text-sm font-sans text-gray-600 leading-relaxed">
                  A nossa equipe de técnicos leva cerca de 10 a 15 minutos para rodar todos os testes de hardware e software do seu iPhone (tela, sensores, câmeras, bateria e rede). Aprovado, o PIX é realizado na mesma hora!
                </p>
              </div>

              <div className="space-y-1.5 border-t border-gray-100 pt-5">
                <h4 className="text-base font-sans font-extrabold text-[#0D0D0D]">
                  Vocês aceitam celulares bloqueados no iCloud ou de origem duvidosa?
                </h4>
                <p className="text-sm font-sans text-gray-600 leading-relaxed">
                  <strong>Não!</strong> Nós exigimos a assinatura de um termo de procedência com cópia do documento de identidade e CPF, e o aparelho deve ser redefinido para as configurações de fábrica na frente de nossa equipe técnica. Não compramos aparelhos bloqueados no iCloud ou que constem no cadastro nacional de aparelhos impedidos (IMEI impedido).
                </p>
              </div>

              <div className="space-y-1.5 border-t border-gray-100 pt-5">
                <h4 className="text-base font-sans font-extrabold text-[#0D0D0D]">
                  Qualquer pessoa de Curitiba pode vender?
                </h4>
                <p className="text-sm font-sans text-gray-600 leading-relaxed">
                  Sim, basta levar seu iPhone até uma de nossas duas unidades em Curitiba (Guaíra ou Alto Boqueirão) acompanhado de um documento oficial com foto. Se for menor de idade, deve estar acompanhado por um responsável legal.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
