import { Link } from "react-router-dom";
import "../../assets/img/logo.jpg";

function Cabecalho() {
  return (
    <nav className="nav">
      <Link to="/restaurante" className="link logo-link">
        <div className="logo"></div>
      </Link>

      <ul className="menu">
        <li className="menu-item menu-item_cabecalho_hover">
          <Link className="link" to="/restaurante/cardapio">
            Faça seu pedido
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Cabecalho;
