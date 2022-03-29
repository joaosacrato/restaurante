import * as React from "react";
import "./_style.scss";
import Card from "./Card";
import MenuCardapio from "./MenuCardapio";
function Cardapio() {
  return (
    <section className="section-cardapio">
      <MenuCardapio />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button className="button-cardapio">Próximo</button>
      
    </section>
  );
}

export default Cardapio;
