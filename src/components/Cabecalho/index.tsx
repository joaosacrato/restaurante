import "./_style.scss";
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <nav className="nav">
      <Link to="/" className="link logo-link">
        <img
          className="logo"
          src="https://pizzariadinapoli.com.br/wp-content/uploads/2017/12/logo_dinapoli_site.png"
          alt="logo"
        />
      </Link>

      <ul className="menu">
        <li className="menu-item menu-item_cabecalho_hover">
          <Link className="link" to="/cardapio">
            Faça seu pedido
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Cabecalho;
