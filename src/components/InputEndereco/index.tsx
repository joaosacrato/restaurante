import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mascaraCpf from "../../assets/mask/mascaraCpf";
import mascaraCep from "../../assets/mask/mascaraCep";
import mascaraTelefone from "../../assets/mask/mascaraTelefone";
import validaTodosCampos from "../../assets/validation/validacoes/validaCamposEndereco";
import mascaraOnlyLetters from "../../assets/mask/mascaraOnlyLetters";
import { objToUrl } from "../../assets/functions/objToUrl";

function InputEndereco() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nr, setNr] = useState("");
  const [complemento, setComplemento] = useState("");
  const [obj, setObj] = useState<{ [key: string]: string }>({});

  const paramsAnteriores = useLocation().search;

  let urlNova = objToUrl(obj);

  urlNova = paramsAnteriores + urlNova;

  function verificaValidacao() {
    const dom: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("[data-tipo]");
    let validacao = true;

    dom.forEach((input) => {
      if (input.validity.valid == false) {
        validacao = false;
      }
    });

    return validacao;
  }

  useEffect(() => {
    let objAux = {
      nome: encodeURI(nome),
      telefone: encodeURI(telefone),
      cpf: encodeURI(cpf),
      cep: encodeURI(cep),
      bairro: encodeURI(bairro),
      endereco: encodeURI(endereco),
      nr: encodeURI(nr),
      complemento: complemento ? encodeURI(complemento) : encodeURI("-"),
    };
    setObj(objAux);
  }, [nome, telefone, cpf, cep, bairro, endereco, nr, complemento]);

  async function ViaCep(input: HTMLInputElement) {
    const cep = input.value.replace(/\D/, "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    let msg = "";

    await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          msg = "O CEP digitado ?? invalido";
          input.setCustomValidity(msg);
          return;
        }

        setBairro(data.bairro);
        setEndereco(data.logradouro);
        input.setCustomValidity(msg);

        return;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form className="form-endereco form-endereco">
      <div className="div-endereco">
        <label htmlFor="nome" className="label-endereco-texto">
          Nome
        </label>
        <input
          data-tipo="nome"
          required
          placeholder="Fulano da Silva"
          name="nome"
          type="text"
          className="input-endereco-texto"
          value={nome}
          maxLength={50}
          minLength={3}
          onChange={(e) => {
            setNome(mascaraOnlyLetters(e.target.value));
          }}
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="telefone" className="label-endereco-texto">
          Telefone
        </label>
        <input
          data-tipo="telefone"
          required
          pattern="\(\d{2}\)\d{4,5}-\d{4}"
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
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="cpf" className="label-endereco-texto">
          CPF
        </label>
        <input
          data-tipo="cpf"
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
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="cep" className="label-endereco-texto">
          CEP
        </label>
        <input
          data-tipo="cep"
          required
          minLength={9}
          maxLength={9}
          placeholder="12345-678"
          type="text"
          name="cep"
          className="input-endereco-texto"
          value={cep}
          onBlur={async (e) => {
            if (
              !e.target.validity.tooShort &&
              !e.target.validity.valueMissing
            ) {
              await ViaCep(e.target);
            }
            validaTodosCampos(e.target);
          }}
          onChange={(e) => {
            setCep(mascaraCep(e.target.value));
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="endereco" className="label-endereco-texto">
          Endereco
        </label>
        <input
          data-tipo="endereco"
          required
          maxLength={50}
          minLength={3}
          placeholder="Av. Brasil"
          type="text"
          name="endereco"
          className="input-endereco-texto"
          value={endereco}
          onChange={(e) => {
            setEndereco(e.target.value);
          }}
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="numero" className="label-endereco-texto">
          N??mero
        </label>
        <input
          data-tipo="numero"
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
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="complemento" className="label-endereco-texto">
          Complemento
        </label>
        <input
          data-tipo="complemento"
          maxLength={25}
          placeholder="Aptm. 42"
          type="text"
          name="complemento"
          className="input-endereco-texto"
          value={complemento}
          onChange={(e) => {
            setComplemento(e.target.value);
          }}
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-endereco">
        <label htmlFor="bairro" className="label-endereco-texto">
          Bairro
        </label>
        <input
          data-tipo="bairro"
          required
          maxLength={30}
          minLength={3}
          placeholder="Jd. Para??so"
          type="text"
          name="bairro"
          className="input-endereco-texto"
          value={bairro}
          onChange={(e) => {
            setBairro(e.target.value);
          }}
          onBlur={(e) => {
            validaTodosCampos(e.target);
          }}
        />
        <span className="span-endereco-erro"></span>
      </div>

      <div className="div-botoes">
        <Link to={"/restaurante/cardapio"} className="button-endereco">
          Voltar
        </Link>

        <Link
          to={verificaValidacao() ? `order/${urlNova}` : `${paramsAnteriores}`}
          className="button-endereco"
          onClick={(e) => {
            if (!verificaValidacao()) {
              (
                e.target as HTMLAnchorElement
              ).parentElement!.nextSibling!.textContent =
                "Algum campo est?? vazio";
            }
          }}
        >
          Prosseguir
        </Link>
      </div>
      <span className="p-endereco-erro-button" />
    </form>
  );
}

export default InputEndereco;
