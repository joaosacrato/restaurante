import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cardapio from "./pages/Cardapio";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import ConfirmacaoCardapio from "./pages/ConfirmacaoCardapio";
import Endereco from "./pages/Endereco";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/cardapio">
            <Route index element={<Cardapio />} />
            <Route path="endereco/*" element={<Endereco />} />
            <Route path="endereco/order/*" element={<ConfirmacaoCardapio />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
