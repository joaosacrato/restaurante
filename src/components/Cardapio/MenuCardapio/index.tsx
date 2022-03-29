import "./_style.scss";
import react from "react";
import { Link } from "react-router-dom";

interface Props {
  toggleInputMacarrao: boolean;
  setToggleInputMacarrao: react.Dispatch<react.SetStateAction<boolean>>;
}

function MenuCardapio({ toggleInputMacarrao, setToggleInputMacarrao }: Props) {
  return (
    <nav className="nav nav-cardapio">
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleInputMacarrao(!toggleInputMacarrao);
        }}
        className="menu-item-macarrao menu-item button-selecao"
        type="button"
      >
        Macarrão
      </button>
      <button type="button" className="menu-item button-selecao">
        Pizza Salgada
      </button>
      <button type="button" className="menu-item button-selecao">
        Lorem, ipsum.
      </button>
      <button type="button" className="menu-item button-selecao">
        Pizza Doce
      </button>
      <button type="button" className="menu-item button-selecao">
        Toblerone
      </button>
      <button type="button" className="menu-item button-selecao">
        Bebidas
      </button>
    </nav>
  );
}

export default MenuCardapio;
