import React, { Fragment } from "react";
import "./_style.scss";

interface Props {
  contador: number;
  setMacarroes: React.Dispatch<React.SetStateAction<{}>>;
  macarroes: {};
}

function InputMacarrao({ contador, setMacarroes, macarroes }: Props) {
  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    let obj = { ...macarroes, [event.target.name]: event.target.value };
    setMacarroes(obj);
  };

  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let objMacarrao = macarroes;

    //pega o valor de data-ingrediente no caso ingrediente_1

    const chave = String(event.currentTarget.getAttribute("data-ingrediente"));

    // caso não haja a key ingrediente_1 adiciona no obj
    {
      (objMacarrao as any)[chave]
        ? (objMacarrao = objMacarrao)
        : (objMacarrao = { ...objMacarrao, [chave]: [] });
    }

    // array de ingredientes

    let ingredientes = [...(objMacarrao as any)[chave]];

    if (event.target.checked) {
      ingredientes.push(event.target.id);
    } else {
      let indice = ingredientes.indexOf(event.target.id);
      ingredientes.splice(indice, 1);
    }

    objMacarrao = { ...objMacarrao, [chave]: ingredientes };

    setMacarroes(objMacarrao);
  };

  return (
    <div className="append-animacao container-macarrao">
      <h2 className="container-macarrao-titulo">Escolha a massa:</h2>

      <div className="container-macarrao-grid">
        <label className="container-macarrao-input-label" htmlFor="spaguetti">
          <input
            required
            className="container-macarrao-input-radio"
            type="radio"
            id="spaguetti"
            name={`massa_${contador}`}
            value="spaguetti"
            onChange={(e) => onChangeRadio(e)}
          />
          spaguetti
        </label>
        <label className="container-macarrao-input-label" htmlFor="fettuccine">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="fettuccine"
            name={`massa_${contador}`}
            value="fettuccine"
            onChange={(e) => onChangeRadio(e)}
          />
          fettuccine
        </label>
        <label className="container-macarrao-input-label" htmlFor="fusilli">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="fusilli"
            name={`massa_${contador}`}
            value="fusilli"
            onChange={(e) => onChangeRadio(e)}
          />
          fusilli
        </label>
        <label className="container-macarrao-input-label" htmlFor="penne">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="penne"
            name={`massa_${contador}`}
            value="penne"
            onChange={(e) => onChangeRadio(e)}
          />
          penne
        </label>
        <label
          className="container-macarrao-input-label"
          htmlFor="penne_tricolor"
        >
          <input
            required
            type="radio"
            id="penne_tricolor"
            name={`massa_${contador}`}
            value="penne_tricolor"
            onChange={(e) => onChangeRadio(e)}
          />
          penne tricolor
        </label>
        <label className="container-macarrao-input-label" htmlFor="farfalle">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="farfalle"
            name={`massa_${contador}`}
            value="farfalle"
            onChange={(e) => onChangeRadio(e)}
          />
          farfalle
        </label>
        <label className="container-macarrao-input-label" htmlFor="capelette">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="capelette"
            name={`massa_${contador}`}
            value="capelette"
            onChange={(e) => onChangeRadio(e)}
          />
          capelette
        </label>
        <label className="container-macarrao-input-label" htmlFor="nhoque">
          <input
            required
            type="radio"
            className="container-macarrao-input-radio"
            id="nhoque"
            name={`massa_${contador}`}
            value="nhoque"
            onChange={(e) => onChangeRadio(e)}
          />
          nhoque
        </label>
      </div>
      <hr />

      <h2 className="container-macarrao-titulo">Escolha o molho:</h2>

      <div className="container-macarrao-grid">
        <label className="container-macarrao-input-label" htmlFor="branco">
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="branco"
            value="branco"
            onChange={(e) => onChangeRadio(e)}
          />
          branco
        </label>
        <label
          className="container-macarrao-input-label"
          htmlFor="branco_com_espinafre"
        >
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="branco_com_espinafre"
            value="branco_com_espinafre"
            onChange={(e) => onChangeRadio(e)}
          />
          branco com espinafre
        </label>
        <label className="container-macarrao-input-label" htmlFor="bolonhesa">
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="bolonhesa"
            value="bolonhesa"
            onChange={(e) => onChangeRadio(e)}
          />
          bolonhesa
        </label>
        <label className="container-macarrao-input-label" htmlFor="rose">
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="rose"
            value="rose"
            onChange={(e) => onChangeRadio(e)}
          />
          rose
        </label>
        <label className="container-macarrao-input-label" htmlFor="ao_sugo">
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="ao_sugo"
            value="ao_sugo"
            onChange={(e) => onChangeRadio(e)}
          />
          ao sugo
        </label>
        <label
          className="container-macarrao-input-label"
          htmlFor="quatro_queijos"
        >
          <input
            required
            className="container-macarrao-input-radio"
            name={`molho_${contador}`}
            type="radio"
            id="quatro_queijos"
            value="quatro_queijos"
            onChange={(e) => onChangeRadio(e)}
          />
          quatro queijos
        </label>
      </div>

      <hr />

      <h2 className="container-macarrao-titulo">Escolha os ingredientes</h2>

      <div className="container-macarrao-grid">
        <label
          className="container-macarrao-input-label"
          htmlFor="frutos_do_mar"
        >
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="frutos_do_mar"
            name="frutos_do_mar"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          frutos do mar
        </label>
        <label className="container-macarrao-input-label" htmlFor="azeite">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="azeite"
            name="azeite"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          azeite
        </label>

        <label className="container-macarrao-input-label" htmlFor="margarina">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="margarina"
            name="margarina"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          margarina
        </label>

        <label className="container-macarrao-input-label" htmlFor="aliche">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="aliche"
            name="aliche"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          aliche
        </label>

        <label className="container-macarrao-input-label" htmlFor="bacon">
          <input
            type="checkbox"
            id="bacon"
            name="bacon"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          bacon
        </label>

        <label className="container-macarrao-input-label" htmlFor="calabresa">
          <input
            type="checkbox"
            id="calabresa"
            name="calabresa"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          calabresa
        </label>

        <label className="container-macarrao-input-label" htmlFor="cebola">
          <input
            type="checkbox"
            id="cebola"
            name="cebola"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          cebola
        </label>

        <label className="container-macarrao-input-label" htmlFor="alho">
          <input
            type="checkbox"
            id="alho"
            name="alho"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          alho
        </label>

        <label className="container-macarrao-input-label" htmlFor="presunto">
          <input
            type="checkbox"
            id="presunto"
            name="presunto"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          presunto
        </label>

        <label className="container-macarrao-input-label" htmlFor="frango">
          <input
            type="checkbox"
            id="frango"
            name="frango"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          frango
        </label>

        <label className="container-macarrao-input-label" htmlFor="brocoli">
          <input
            type="checkbox"
            id="brocoli"
            name="brocoli"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          brocoli
        </label>

        <label className="container-macarrao-input-label" htmlFor="tomate">
          <input
            type="checkbox"
            id="tomate"
            name="tomate"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          tomate
        </label>

        <label className="container-macarrao-input-label" htmlFor="milho">
          <input
            type="checkbox"
            id="milho"
            name="milho"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
            className="container-macarrao-input-checkbox"
          />
          milho
        </label>

        <label className="container-macarrao-input-label" htmlFor="ervilha">
          <input
            type="checkbox"
            id="ervilha"
            name="ervilha"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          ervilha
        </label>

        <label
          className="container-macarrao-input-label"
          htmlFor="azeitona_preta"
        >
          <input
            type="checkbox"
            id="azeitona_preta"
            name="azeitona_preta"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          azeitona preta
        </label>

        <label
          className="container-macarrao-input-label"
          htmlFor="azeitona_verde"
        >
          <input
            type="checkbox"
            id="azeitona_verde"
            name="azeitona_verde"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          azeitona verde
        </label>

        <label className="container-macarrao-input-label" htmlFor="champgnon">
          <input
            type="checkbox"
            id="champgnon"
            name="champgnon"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          champgnon
        </label>

        <label className="container-macarrao-input-label" htmlFor="muçarela">
          <input
            type="checkbox"
            id="muçarela"
            name="muçarela"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          muçarela
        </label>

        <label className="container-macarrao-input-label" htmlFor="provolone">
          <input
            type="checkbox"
            id="provolone"
            name="provolone"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          provolone
        </label>

        <label className="container-macarrao-input-label" htmlFor="palmito">
          <input
            type="checkbox"
            id="palmito"
            name="palmito"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          palmito
        </label>

        <label className="container-macarrao-input-label" htmlFor="cenoura">
          <input
            type="checkbox"
            id="cenoura"
            name="cenoura"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          cenoura
        </label>

        <label className="container-macarrao-input-label" htmlFor="salsinha">
          <input
            type="checkbox"
            id="salsinha"
            name="salsinha"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          salsinha
        </label>

        <label className="container-macarrao-input-label" htmlFor="cebolinha">
          <input
            type="checkbox"
            id="cebolinha"
            name="cebolinha"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          cebolinha
        </label>

        <label className="container-macarrao-input-label" htmlFor="manjericao">
          <input
            type="checkbox"
            id="manjericao"
            name="manjericao"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          manjericão
        </label>

        <label className="container-macarrao-input-label" htmlFor="alcaparra">
          <input
            type="checkbox"
            id="alcaparra"
            name="alcaparra"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          alcaparra
        </label>

        <label className="container-macarrao-input-label" htmlFor="alho_poro">
          <input
            type="checkbox"
            id="alho_poro"
            name="alho_poro"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          alho poró
        </label>

        <label className="container-macarrao-input-label" htmlFor="pimenta">
          <input
            type="checkbox"
            id="pimenta"
            name="pimenta"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          pimenta
        </label>

        <label className="container-macarrao-input-label" htmlFor="oregano">
          <input
            type="checkbox"
            id="oregano"
            name="oregano"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          orégano
        </label>

        <label className="container-macarrao-input-label" htmlFor="passas">
          <input
            type="checkbox"
            id="passas"
            name="passas"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          passas
        </label>

        <label className="container-macarrao-input-label" htmlFor="parmessao">
          <input
            type="checkbox"
            id="parmessao"
            name="parmessao"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          parmessão
        </label>

        <label className="container-macarrao-input-label" htmlFor="tomate_seco">
          <input
            type="checkbox"
            id="tomate_seco"
            name="tomate_seco"
            className="container-macarrao-input-checkbox"
            data-ingrediente={`ingrediente_${contador}`}
            onChange={(e) => onChangeCheckBox(e)}
          />
          tomate seco
        </label>
      </div>
    </div>
  );
}

export default InputMacarrao;
