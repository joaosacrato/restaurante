import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cardapio from "./pages/Cardapio";
import Footer from "./components/Footer";
import Cabecalho from "./components/Cabecalho";
import ConfirmacaoCardapio from "./pages/ConfirmacaoCardapio";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />}></Route>
          <Route path="/order/*" element={<ConfirmacaoCardapio />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);