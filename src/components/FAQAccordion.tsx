import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? "bg-white border-suncell-orange/40 shadow-md shadow-black/5"
                : "bg-gray-50 border-gray-100 hover:border-gray-200"
            }`}
          >
            {/* Cabeçalho do Item (Botão com toque de min 48px) */}
            <button
              id={`faq-btn-${idx}`}
              onClick={() => toggleItem(idx)}
              className="w-full p-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-suncell-orange/40 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3.5">
                <HelpCircle size={22} className={`shrink-0 mt-0.5 ${isOpen ? "text-suncell-orange" : "text-gray-400"}`} />
                <span className="font-display font-bold text-base sm:text-lg text-[#0D0D0D] leading-snug">
                  {item.q}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 border border-gray-200 group-hover:bg-gray-200"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            {/* Conteúdo do Accordion */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 font-sans">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
