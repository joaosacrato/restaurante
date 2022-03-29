import react, { useState } from "react";
import "./_style.scss";
import Card from "./Card";
import MenuCardapio from "./MenuCardapio";
import MenuMacarrao from "./Macarrao";
import data from "../../data/cardapio.json";

function Cardapio() {
  const pizzasSalgadas = data.pizzas_salgadas;
  const pizzasDoces = data.pizzas_doces;
  const calzones = data.calzone;

  const [toggleInputMacarrao, setToggleInputMacarrao] = useState(false);
  return (
    <form className="form-cardapio">
      <MenuCardapio
        toggleInputMacarrao={toggleInputMacarrao}
        setToggleInputMacarrao={setToggleInputMacarrao}
      />
      {toggleInputMacarrao && <MenuMacarrao />}

      {pizzasSalgadas.map((pizza) => (
        <Card pizza={pizza} />
      ))}

      {pizzasDoces.map((pizza) => (
        <Card pizza={pizza} />
      ))}

      {calzones.map((calzone) => (
        <Card pizza={calzone} />
      ))}
      <button  type="submit" className="button-cardapio">Próximo</button>
    </form>
  );
}

export default Cardapio;
