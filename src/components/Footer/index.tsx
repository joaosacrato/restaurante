import "./_style.scss";
import { Fragment } from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";

function Footer() {
  return (
    <div className="div-footer">
      <hr className="hr" />
      <footer className="footer">
        <div className="div-enderecos">
          <span className="span">Di Napoli</span>
          <span className="span">Av. Padre Nelson Antonio Romão, 416</span>
          <span className="span">Centro, Matão - SP</span>
          <span className="span">Telefone: (16) 3382-7996 </span>
          <span className="span">Telefone: (16) 3382-6861</span>
        </div>
        <div className="div-enderecos">
          <a href="/" className="icon">
            <SiInstagram />
          </a>
          <a href="/" className='icon'>
            <SiFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
