import react, { useEffect, useState } from "react";
import "./_style.scss";
import Card from "./Card";
import MenuCardapio from "./MenuCardapio";
import MenuMacarrao from "./Macarrao";
import data from "../../data/cardapio.json";
import { Link } from "react-router-dom";
import urlToObj from "../../assets/functions/urlToObj";
import validaCardapio from "../../assets/validation/validacoes/validaCardapio";

function Cardapio() {
  const [macarroes, setMacarroes] = useState({});
  const [items, setItems] = useState({});
  const [toggleInputMacarrao, setToggleInputMacarrao] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState("pizzas_salgadas");

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

  let verificacaoCardapio = validaCardapio(urlToObj(paramUrl))
  console.log(verificacaoCardapio)

  return (
    <form className="form-cardapio">
      <MenuCardapio
        toggleInputMacarrao={toggleInputMacarrao}
        setToggleInputMacarrao={setToggleInputMacarrao}
        dataKeys={Object.keys(data)}
        setItemSelecionado={setItemSelecionado}
      />
      {toggleInputMacarrao && (
        <MenuMacarrao
          items={items}
          setItems={setItems}
          macarroes={macarroes}
          setMacarroes={setMacarroes}
        />
      )}

      {
        // @ts-ignore
        data[`${itemSelecionado}`].map((e) => {
          return (
            <Card items={items} setItems={setItems} pizza={e} key={e.id} />
          );
        })
      }

      <Link
        className="button-cardapio"
        to={paramUrl !== "?" ? `/cardapio/endereco/${paramUrl}` : ``}
        onClick={(e) => {
          paramUrl === "?"
            ? ((e.target as HTMLButtonElement).nextSibling!.textContent =
                "Você precisa selecionar ao menos um item")
            : ((e.target as HTMLButtonElement).nextSibling!.textContent = "");
        }}
      >
        Próximo
      </Link>

      <span className="span-cardapio"></span>
    </form>
  );
}

export default Cardapio;
