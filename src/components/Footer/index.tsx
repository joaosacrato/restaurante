import {BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <div className="div-footer">
      <hr className="hr" />
      <footer className="footer">
        <div className="div-enderecos">
          <span className="span">Sua Pizza</span>
          <span className="span">Av. Lorem ipsum dolor sit, 416</span>
          <span className="span">Centro, Matão - SP</span>
          <span className="span">Telefone: (16) 4564-1533 </span>
          <span className="span">Telefone: (16) 2123-1323</span>
        </div>
        <div className="div-enderecos">
          <a href="" className="icon">
            <BsLinkedin/>
          </a>
          <a href="/" className='icon'>
            <BsGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
