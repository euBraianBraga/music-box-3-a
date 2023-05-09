import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adicionar from "./pages/Adicionar";
import Musicas from "./pages/Musicas";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
