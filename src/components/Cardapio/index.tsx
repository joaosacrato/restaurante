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
  const [macarroes, setMacarroes] = useState({});
  const [items, setItems] = useState({});
  const [toggleInputMacarrao, setToggleInputMacarrao] = useState(false);

  const submitItems = (obj: any) => {
    let str = "";

    for (const prop in obj) {
      str = str + "&" + prop + "=" + obj[prop];
    }

    console.log(str);
  };

  submitItems(items);

  return (
    <form className="form-cardapio">
      <MenuCardapio
        toggleInputMacarrao={toggleInputMacarrao}
        setToggleInputMacarrao={setToggleInputMacarrao}
      />
      {toggleInputMacarrao && (
        <MenuMacarrao
          items={items}
          setItems={setItems}
          macarroes={macarroes}
          setMacarroes={setMacarroes}
        />
      )}

      {pizzasSalgadas.map((pizza) => (
        <Card items={items} setItems={setItems} pizza={pizza} key={pizza.id} />
      ))}

      {pizzasDoces.map((pizza) => (
        <Card items={items} setItems={setItems} pizza={pizza} key={pizza.id} />
      ))}

      {calzones.map((calzone) => (
        <Card
          items={items}
          setItems={setItems}
          pizza={calzone}
          key={calzone.id}
        />
      ))}
      <button type="submit" className="button-cardapio">
        Próximo
      </button>
    </form>
  );
}

export default Cardapio;
