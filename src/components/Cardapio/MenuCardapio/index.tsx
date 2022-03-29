import "./_style.scss";
import { Link } from "react-router-dom";

function MenuCardapio() {
  return (
    <nav className="nav nav-cardapio">
      <Link to="/cardapioMacarrao" className="link menu-item button-selecao">
        Macarrão
      </Link>
      <button className="menu-item button-selecao">Pizza Salgada</button>
      <button className="menu-item button-selecao">Lorem, ipsum.</button>
      <button className="menu-item button-selecao">Pizza Doce</button>
      <button className="menu-item button-selecao">Toblerone</button>
      <button className="menu-item button-selecao">Bebidas</button>
    </nav>
  );
}

export default MenuCardapio;
