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
import NotFound from "./components/NotFound";

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
              
              {/* Página 404 Customizada */}
              <Route path="/404" element={<NotFound />} />
              
              {/* Catch-all para redirecionar rotas inválidas ao 404 premium */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          {/* Footer Elder-Friendly com SupremaCredit */}
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
