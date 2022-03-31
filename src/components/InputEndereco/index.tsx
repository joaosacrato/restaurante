import { Fragment, useState } from "react";
import "./_style.scss";
import { Link } from "react-router-dom";
import mascaraCpf from "../../assets/mask/mascaraCpf";
import mascaraCep from "../../assets/mask/mascaraCep";
import mascaraTelefone from "../../assets/mask/mascaraTelefone";
import validaCpf from "../../assets/validation/validaCpf";

function InputEndereco() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nr, setNr] = useState("");


  validaCpf('449.633.588-32')
  return (
    <form className="form-endereco form-endereco">
      <div className="div-endereco">
        <label htmlFor="nome" className="label-endereco-texto">
          Nome
        </label>
        <input
          required
          placeholder="Fulano da Silva"
          name="nome"
          type="text"
          className="input-endereco-texto"
          value={nome}
          maxLength={50}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="telefone" className="label-endereco-texto">
          Telefone
        </label>
        <input
          required
          maxLength={14}
          minLength={13}
          placeholder="(16)12345-6789"
          type="text"
          name="telefone"
          className="input-endereco-texto"
          value={telefone}
          onChange={(e) => {
            setTelefone(mascaraTelefone(e.target.value));
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="cpf" className="label-endereco-texto">
          CPF
        </label>
        <input
          required
          maxLength={14}
          minLength={14}
          placeholder="123.456.789-00"
          type="text"
          className="input-endereco-texto"
          name="cpf"
          value={cpf}
          onChange={(e) => {
            setCpf(mascaraCpf(e.target.value));
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="cep" className="label-endereco-texto">
          CEP
        </label>
        <input
          required
          minLength={9}
          maxLength={9}
          placeholder="12345-678"
          type="text"
          name="cep"
          className="input-endereco-texto"
          value={cep}
          onChange={(e) => {
            setCep(mascaraCep(e.target.value));
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="endereco" className="label-endereco-texto">
          Endereco
        </label>
        <input
          required
          maxLength={50}
          placeholder="Rua Agnaldo Navarro Dinheiro no Bolso"
          type="text"
          name="endereco"
          className="input-endereco-texto"
          value={endereco}
          onChange={(e) => {
            setEndereco(e.target.value);
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="numero" className="label-endereco-texto">
          Número
        </label>
        <input
          required
          maxLength={10}
          placeholder="1234"
          type="text"
          name="numero"
          className="input-endereco-texto"
          value={nr}
          onChange={(e) => {
            setNr(e.target.value);
          }}
        />
      </div>

      <div className="div-endereco">
        <label htmlFor="bairro" className="label-endereco-texto">
          Bairro
        </label>
        <input
          required
          maxLength={30}
          placeholder="Jd. Paraíso"
          type="text"
          name="bairro"
          className="input-endereco-texto"
          value={bairro}
          onChange={(e) => {
            setBairro(e.target.value);
          }}
        />
      </div>

      <Link to="" className="button-endereco">
        Prosseguir
      </Link>
    </form>
  );
}

export default InputEndereco;
