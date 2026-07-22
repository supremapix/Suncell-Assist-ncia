import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle, 
  ShieldCheck, 
  Smartphone, 
  MapPin, 
  Phone, 
  Lock, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Zap, 
  Cpu, 
  BatteryCharging, 
  Camera, 
  Monitor, 
  HardDrive, 
  Wifi 
} from "lucide-react";
import { redmiA7Pro } from "../products/productsData";
import { getWhatsAppLink } from "./SuncellInteractionWidgets";
import FAQAccordion from "./FAQAccordion";
import NossasLojas from "./NossasLojas";

export default function ProductPage() {
  const product = redmiA7Pro;
  const [selectedImg, setSelectedImg] = useState(product.imagemPrincipal);
  const [showParcelas, setShowParcelas] = useState(false);

  // FAQ items específicos da página do produto
  const faqItems = [
    {
      q: "O Xiaomi Redmi A7 Pro é novo e lacrado?",
      a: "Sim, todos os celulares vendidos pela Shopcell / SUNCELL são novos, originais, homologados pela Anatel e acompanham garantia de 6 meses fornecida pela nossa loja física em Curitiba."
    },
    {
      q: "Quais as formas de pagamento aceitas?",
      a: "Oferecemos o valor especial à vista de R$ 849,99 via Pix ou dinheiro. Também parcelamos em até 12x de R$ 81,98 no cartão de crédito diretamente em nossas lojas físicas."
    },
    {
      q: "O produto vem com carregador e capinha na caixa?",
      a: "Sim! A embalagem oficial inclui o aparelho, adaptador de energia, cabo USB-C, capinha protetora e manual de instruções."
    },
    {
      q: "Posso retirar pessoalmente em Curitiba?",
      a: "Com certeza! Você pode comprar diretamente em uma de nossas duas unidades físicas dentro do Mercado Goes (Guaíra ou Alto Boqueirão), com estacionamento gratuito e segurança privada."
    }
  ];

  // Schema JSON-LD do Produto
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.nome,
    "image": product.imagemPrincipal,
    "description": product.seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "Xiaomi"
    },
    "sku": product.codigo,
    "mpn": product.codigo,
    "offers": {
      "@type": "Offer",
      "price": product.precoVista,
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Shopcell"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 528
    }
  };

  const whatsappMessage = `Olá! Tenho interesse no ${product.nome} (Código: ${product.codigo}) por ${product.precoVistaFormatado} à vista na Shopcell Curitiba!`;

  return (
    <>
      <Helmet>
        <title>{product.seoTitle}</title>
        <meta name="description" content={product.seoDescription} />
        <link rel="canonical" href={product.canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.seoTitle} />
        <meta property="og:description" content={product.seoDescription} />
        <meta property="og:url" content={product.canonicalUrl} />
        <meta property="og:site_name" content="Shopcell Curitiba" />
        <meta property="og:image" content={product.imagemPrincipal} />
        <meta property="product:price:amount" content={product.precoVista.toString()} />
        <meta property="product:price:currency" content="BRL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.seoTitle} />
        <meta name="twitter:description" content={product.seoDescription} />
        <meta name="twitter:image" content={product.imagemPrincipal} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="bg-[#F8F9FA] text-[#0D0D0D] min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-suncell-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Smartphones</span>
            <span>/</span>
            <span className="text-gray-400">Xiaomi</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{product.nome}</span>
          </nav>

          {/* MAIN PRODUCT HEADER GRID */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* GALERIA DE IMAGENS (Left Column - 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Main Image Stage */}
              <div className="relative w-full aspect-square max-w-md bg-gray-50 rounded-2xl border border-gray-100 p-6 flex items-center justify-center overflow-hidden group">
                <img
                  src={selectedImg}
                  alt="Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-emerald-500 text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <CheckCircle size={12} />
                  <span>{product.disponibilidade}</span>
                </div>
              </div>

              {/* Thumbnails list */}
              <div className="flex items-center gap-3 mt-4 overflow-x-auto w-full pb-2">
                {product.imagensGaleria.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-16 h-16 rounded-xl border-2 p-1 bg-gray-50 flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                      selectedImg === img ? "border-suncell-orange shadow-sm scale-105" : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="Celular Xiaomi Redmi A7 Pro 128GB em Curitiba - Shopcell" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT BUY INFO (Right Column - 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Brand & SKU Bar */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-2">
                  <span className="bg-suncell-orange/10 text-suncell-orange px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                    Marca: {product.marca}
                  </span>
                  <span>Código: #{product.codigo}</span>
                </div>

                {/* Title */}
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0D0D0D] tracking-tight leading-tight mt-2">
                  {product.nome}
                </h1>

                {/* Rating & Cor */}
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star size={14} className="fill-amber-500" />
                    <span>4.9</span>
                    <span className="text-gray-400 font-normal">(528 avaliações na loja)</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>Cor: <strong className="text-gray-900">{product.cor}</strong></span>
                </div>

                {/* PREÇO CAIXA DE DESTAQUE */}
                <div className="mt-6 p-6 rounded-2xl bg-[#0D0D0D] text-white space-y-3 relative overflow-hidden border border-suncell-orange/30 shadow-xl">
                  <div className="absolute top-0 right-0 bg-suncell-orange text-white text-[10px] font-mono font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Oferta Especial Curitiba
                  </div>

                  <p className="font-sans text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Preço promocional à vista (Pix / Dinheiro):
                  </p>
                  
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-suncell-orange">
                      {product.precoVistaFormatado}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>Ou parcelado: <strong>{product.precoParceladoInfo}</strong></span>
                    <button
                      onClick={() => setShowParcelas(!showParcelas)}
                      className="text-suncell-orange hover:underline font-bold flex items-center gap-1 focus:outline-none"
                    >
                      <span>{showParcelas ? "Ocultar tabela" : "Ver parcelamento"}</span>
                      {showParcelas ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* TABELA DE PARCELAMENTO EXPANSÍVEL */}
                  {showParcelas && (
                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-gray-300 bg-white/5 p-3 rounded-xl">
                      {product.parcelamento.map((p) => (
                        <div key={p.x} className="flex justify-between p-1 rounded bg-black/30">
                          <span className="text-gray-400">{p.x}x</span>
                          <span className="font-bold text-white">{p.valor}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SELOS DE GARANTIA & SEGURANÇA */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 text-xs font-medium text-gray-700">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Lock size={16} className="text-suncell-orange shrink-0" />
                    <span>Loja segura com SSL</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span>6 meses de garantia pela loja</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Zap size={16} className="text-suncell-orange shrink-0" />
                    <span>Em até 12x pela loja física</span>
                  </div>
                </div>

              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <a
                  href={getWhatsAppLink("5541999176640", whatsappMessage, typeof window !== "undefined" ? window.location.href : "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-suncell-orange to-suncell-orange-light hover:from-suncell-orange-light hover:to-suncell-orange text-white font-sans font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-suncell-orange/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Phone size={18} />
                  <span>Comprar pelo WhatsApp (Guaíra)</span>
                </a>

                <a
                  href={getWhatsAppLink("5541997501961", whatsappMessage, typeof window !== "undefined" ? window.location.href : "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Phone size={16} />
                  <span>Comprar pelo WhatsApp (Alto Boqueirão)</span>
                </a>
              </div>

            </div>
          </div>

          {/* BULLETS DE DESTAQUE */}
          <section className="mt-10 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0D0D0D] mb-6 flex items-center gap-2 border-l-4 border-suncell-orange pl-3">
              <span>Destaques do Celular Xiaomi Redmi A7 Pro</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle size={18} className="text-suncell-orange shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-gray-800 leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </section>

          {/* DESCRIÇÃO LONGA COM BLOCOS ALTERNADOS (TEXTO + IMAGEM) */}
          <section className="mt-10 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm space-y-12">
            
            <div className="max-w-3xl">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0D0D0D] tracking-tight">
                Descrição Completa do Produto
              </h2>
              <p className="mt-4 font-sans text-base text-gray-700 leading-relaxed">
                {product.introDesc}
              </p>
            </div>

            {/* 7 BLOCOS ALTERNADOS */}
            <div className="space-y-12 pt-6 border-t border-gray-100">
              {product.blocos.map((bloco, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Imagem do bloco */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={bloco.imagem}
                          alt={bloco.alt}
                          className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Texto do bloco */}
                    <div className={`lg:col-span-7 space-y-3 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="text-xs font-mono font-bold text-suncell-orange uppercase tracking-wider bg-suncell-orange/10 px-2.5 py-1 rounded-md">
                        Destaque 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#0D0D0D]">
                        {bloco.titulo}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                        {bloco.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>

          {/* TABELA DE ESPECIFICAÇÕES TÉCNICAS */}
          <section className="mt-10 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
            <h2 className="font-display font-extrabold text-2xl text-[#0D0D0D] mb-6 border-l-4 border-suncell-orange pl-3">
              Especificações Técnicas
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  {Object.entries(product.especificacoes).map(([key, value], idx) => (
                    <tr 
                      key={key} 
                      className={idx % 2 === 0 ? "bg-gray-50/80" : "bg-white"}
                    >
                      <td className="py-3.5 px-4 font-bold text-gray-900 border-b border-gray-100 w-1/3 sm:w-1/4">
                        {key}
                      </td>
                      <td className="py-3.5 px-4 text-gray-700 border-b border-gray-100">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SEÇÃO DE AVALIAÇÕES DO GOOGLE */}
          <section className="mt-10 bg-[#0D0D0D] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-suncell-orange/20">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400" />
                ))}
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Avaliado com 4.9 estrelas no Google em Curitiba
              </h2>
              <p className="font-sans text-sm text-gray-300">
                Mais de 528 clientes satisfeitos compraram seus celulares e acessórios com a Shopcell / SUNCELL nas nossas duas unidades físicas no Mercado Goes.
              </p>
            </div>
          </section>

          {/* SEÇÃO NOSSAS LOJAS FÍSICAS */}
          <div className="mt-10">
            <NossasLojas />
          </div>

          {/* FAQ SEÇÃO ACORDEÃO */}
          <section className="mt-10 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-display font-extrabold text-2xl text-[#0D0D0D]">
                Perguntas Frequentes sobre a Compra
              </h2>
            </div>
            <FAQAccordion items={faqItems} />
          </section>

        </div>
      </div>
    </>
  );
}
