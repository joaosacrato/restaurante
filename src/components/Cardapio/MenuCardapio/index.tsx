import "./_style.scss";
import react from "react";
import dado from "../../../data/cardapio.json";
import { click } from "@testing-library/user-event/dist/click";
interface Props {
  toggleInputMacarrao: boolean;
  setToggleInputMacarrao: react.Dispatch<react.SetStateAction<boolean>>;
  dataKeys: string[];
  setItemSelecionado: react.Dispatch<react.SetStateAction<string>>;
}

function MenuCardapio({
  toggleInputMacarrao,
  setToggleInputMacarrao,
  dataKeys,
  setItemSelecionado,
}: Props) {
  return (
    <nav className="nav nav-cardapio">
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleInputMacarrao(!toggleInputMacarrao);
        }}
        data-item="macarrao"
        className="menu-item-macarrao menu-item button-selecao"
        type="button"
      >
        Macarrão
      </button>

      {dataKeys.map((e) => {
        let item = e.replace("_", " ");
        return (
          <button
            key={e}
            type="button"
            data-item={e}
            className="menu-item button-selecao"
            onClick={(clickEvent) => {
              clickEvent.preventDefault();
              const botao = clickEvent.target as HTMLButtonElement;

              setItemSelecionado(botao.dataset.item as string);
            }}
          >
            {item[0].toUpperCase() + item.substring(1)}
          </button>
        );
      })}
    </nav>
  );
}

export default MenuCardapio;
