import react, {  useState } from "react";
import Card from "./Card";
import MenuCardapio from "./MenuCardapio";
import MenuMacarrao from "./Macarrao";
import data from "../../data/cardapio.json";
import { Link } from "react-router-dom";
import urlToObj from "../../assets/functions/urlToObj";
import validaCardapio from "../../assets/validation/validacoes/validaCardapio";
import { objToUrl } from "../../assets/functions/objToUrl";

function Cardapio() {
  const [macarroes, setMacarroes] = useState({});
  const [items, setItems] = useState({});
  const [toggleInputMacarrao, setToggleInputMacarrao] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState("pizzas_salgadas");

  //parametro da url

  let paramUrl = objToUrl(items) + objToUrl(macarroes);
  paramUrl = paramUrl.replaceAll(",", "+");
  paramUrl = "?" + paramUrl.substring(1);
  paramUrl = encodeURI(paramUrl);

  let verificacaoCardapio = validaCardapio(urlToObj(paramUrl));

  return (
    <form className="form-cardapio">
      <MenuCardapio
        toggleInputMacarrao={toggleInputMacarrao}
        setToggleInputMacarrao={setToggleInputMacarrao}
        dataKeys={Object.keys(data)}
        setItemSelecionado={setItemSelecionado}
        itemSelecionado={itemSelecionado}
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
        to={verificacaoCardapio[0] ? `/cardapio/endereco/${paramUrl}` : ``}
        onClick={(e) => {
          verificacaoCardapio[0] === false
            ? ((e.target as HTMLButtonElement).nextSibling!.textContent =
                verificacaoCardapio[1] as string)
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
