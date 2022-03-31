import react, { useState } from "react";
import "./_style.scss";
import Card from "./Card";
import MenuCardapio from "./MenuCardapio";
import MenuMacarrao from "./Macarrao";
import data from "../../data/cardapio.json";
import { Link } from "react-router-dom";

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

    return str;
  };

  //parametro da url

  let paramUrl = submitItems(items) + submitItems(macarroes);
  paramUrl = paramUrl.replaceAll(",", "+");
  paramUrl = "?" + paramUrl.substring(1);


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
      <Link className="button-cardapio" to={`/cardapio/endereco/${paramUrl}`}>
        Próximo
      </Link>
    </form>
  );
}

export default Cardapio;
