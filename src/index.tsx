import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cardapio from "./pages/Cardapio";
import CardapioMacarrao from "./pages/CardapioMacarrão";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />}></Route>
          <Route path="/cardapioMacarrao" element={<CardapioMacarrao />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
