/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProgrammaticPage from "./components/ProgrammaticPage";
import CompramosIphone from "./components/CompramosIphone";
import QuemSomos from "./components/QuemSomos";
import Cobertura from "./components/Cobertura";
import NotFound from "./components/NotFound";
import SuncellInteractionWidgets from "./components/SuncellInteractionWidgets";
import BackToTop from "./components/BackToTop";
import StoreModal from "./components/StoreModal";

// Componente utilitário para garantir scroll-to-top automático em cada mudança de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo suavemente ou imediatamente
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Força o scroll para o topo ao mudar de página */}
        <ScrollToTop />
        
        {/* Layout Geral */}
        <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#0D0D0D] antialiased selection:bg-suncell-orange selection:text-white">
          {/* Header Fixo */}
          <Header />
          
          {/* Rotas Principais */}
          <div className="flex-grow">
            <Routes>
              {/* Home Page Principal */}
              <Route path="/" element={<Home />} />
              
              {/* Programmatic SEO: Bairros de Curitiba */}
              <Route 
                path="/assistencia-tecnica/:slug" 
                element={<ProgrammaticPage type="bairro" />} 
              />
              
              {/* Programmatic SEO: Cidades da Região Metropolitana */}
              <Route 
                path="/assistencia-tecnica-cidade/:slug" 
                element={<ProgrammaticPage type="cidade" />} 
              />
              
              {/* Programmatic SEO: Marcas de Aparelho */}
              <Route 
                path="/assistencia-tecnica-aparelho/:slug" 
                element={<ProgrammaticPage type="aparelho" />} 
              />
              
              {/* Programmatic SEO: Serviços Principais */}
              <Route 
                path="/servico/:slug" 
                element={<ProgrammaticPage type="servico" />} 
              />
              
              {/* Programmatic SEO: Unidades de Lojas Físicas */}
              <Route 
                path="/loja/:slug" 
                element={<ProgrammaticPage type="loja" />} 
              />
              
              {/* Compra de iPhones Usados */}
              <Route 
                path="/compramos-iphone" 
                element={<CompramosIphone />} 
              />

              {/* Quem Somos */}
              <Route 
                path="/quem-somos" 
                element={<QuemSomos />} 
              />

              {/* Bairros & Cidades (Cobertura Geral) */}
              <Route 
                path="/bairros-e-cidades" 
                element={<Cobertura />} 
              />
              
              {/* Página 404 Customizada */}
              <Route path="/404" element={<NotFound />} />
              
              {/* Catch-all para redirecionar rotas inválidas ao 404 premium */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          {/* Footer Elder-Friendly com SupremaCredit */}
          <Footer />

          {/* Floating Share and WhatsApp Widgets */}
          <SuncellInteractionWidgets />

          {/* Back to Top Widget with premium attention-grabbing animations */}
          <BackToTop />
          
          {/* Centralized Store Details Modal */}
          <StoreModal />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
