import { Fragment } from "react";
import "./_style.scss";


interface Props {
  contador: number
}


function InputMacarrao({contador}: Props) {
  return (
    <div className="append-animacao container-macarrao">
      <h2 className="container-macarrao-titulo">Escolha a massa:</h2>

      <div className="container-macarrao-grid">
        <label className="container-macarrao-input-label" htmlFor="spaguetti">
          <input
            className="container-macarrao-input-radio"
            type="radio"
            id="spaguetti"
            name={`massa_${contador}`}
            value="spaguetti"
          />
          spaguetti
        </label>
        <label className="container-macarrao-input-label" htmlFor="fettuccine">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="fettuccine"
            name={`massa_${contador}`}
            value="fettuccine"
          />
          fettuccine
        </label>
        <label className="container-macarrao-input-label" htmlFor="fusilli">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="fusilli"
            name={`massa_${contador}`}
            value="fusilli"
          />
          fusilli
        </label>
        <label className="container-macarrao-input-label" htmlFor="penne">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="penne"
            name={`massa_${contador}`}
            value="penne"
          />
          penne
        </label>
        <label
          className="container-macarrao-input-label"
          htmlFor="penne_tricolor"
        >
          <input
            type="radio"
            id="penne_tricolor"
            name={`massa_${contador}`}
            value="penne_tricolor"
          />
          penne tricolor
        </label>
        <label className="container-macarrao-input-label" htmlFor="farfalle">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="farfalle"
            name={`massa_${contador}`}
            value="farfalle"
          />
          farfalle
        </label>
        <label className="container-macarrao-input-label" htmlFor="capelette">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="capelette"
            name={`massa_${contador}`}
            value="capelette"
          />
          capelette
        </label>
        <label className="container-macarrao-input-label" htmlFor="nhoque">
          <input
            type="radio"
            className="container-macarrao-input-radio"
            id="nhoque"
            name={`massa_${contador}`}
            value="nhoque"
          />
          nhoque
        </label>
      </div>
      <hr />

      <h2 className="container-macarrao-titulo">Escolha o molho:</h2>

      <div className="container-macarrao-grid">


      <label className="container-macarrao-input-label" htmlFor="branco">
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="branco"
          value="branco"
          />
        branco
      </label>
      <label
        className="container-macarrao-input-label"
        htmlFor="branco_com_espinafre"
        >
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="branco_com_espinafre"
          value="branco_com_espinafre"
          />
        branco com espinafre
      </label>
      <label className="container-macarrao-input-label" htmlFor="bolonhesa">
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="bolonhesa"
          value="bolonhesa"
          />
        bolonhesa
      </label>
      <label className="container-macarrao-input-label" htmlFor="rose">
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="rose"
          value="rose"
          />
        rose
      </label>
      <label className="container-macarrao-input-label" htmlFor="ao_sugo">
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="ao_sugo"
          value="ao_sugo"
          />
        ao sugo
      </label>
      <label
        className="container-macarrao-input-label"
        htmlFor="quatro_queijos"
        >
        <input
          className="container-macarrao-input-radio"
          name={`molho_${contador}`}
          type="radio"
          id="quatro_queijos"
          value="quatro_queijos"
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
            />
          frutos do mar
        </label>
        <label className="container-macarrao-input-label" htmlFor="azeite">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="azeite"
            name="azeite"
          />
          azeite
        </label>

        <label className="container-macarrao-input-label" htmlFor="margarina">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="margarina"
            name="margarina"
          />
          margarina
        </label>

        <label className="container-macarrao-input-label" htmlFor="aliche">
          <input
            className="container-macarrao-input-checkbox"
            type="checkbox"
            id="aliche"
            name="aliche"
          />
          aliche
        </label>

        <label className="container-macarrao-input-label" htmlFor="bacon">
          <input
            type="checkbox"
            id="bacon"
            name="bacon"
            className="container-macarrao-input-checkbox"
          />
          bacon
        </label>

        <label className="container-macarrao-input-label" htmlFor="calabresa">
          <input
            type="checkbox"
            id="calabresa"
            name="calabresa"
            className="container-macarrao-input-checkbox"
          />
          calabresa
        </label>

        <label className="container-macarrao-input-label" htmlFor="cebola">
          <input
            type="checkbox"
            id="cebola"
            name="cebola"
            className="container-macarrao-input-checkbox"
          />
          cebola
        </label>

        <label className="container-macarrao-input-label" htmlFor="alho">
          <input
            type="checkbox"
            id="alho"
            name="alho"
            className="container-macarrao-input-checkbox"
          />
          alho
        </label>

        <label className="container-macarrao-input-label" htmlFor="presunto">
          <input
            type="checkbox"
            id="presunto"
            name="presunto"
            className="container-macarrao-input-checkbox"
          />
          presunto
        </label>

        <label className="container-macarrao-input-label" htmlFor="frango">
          <input
            type="checkbox"
            id="frango"
            name="frango"
            className="container-macarrao-input-checkbox"
          />
          frango
        </label>

        <label className="container-macarrao-input-label" htmlFor="brocoli">
          <input
            type="checkbox"
            id="brocoli"
            name="brocoli"
            className="container-macarrao-input-checkbox"
          />
          brocoli
        </label>

        <label className="container-macarrao-input-label" htmlFor="tomate">
          <input
            type="checkbox"
            id="tomate"
            name="tomate"
            className="container-macarrao-input-checkbox"
          />
          tomate
        </label>

        <label className="container-macarrao-input-label" htmlFor="milho">
          <input
            type="checkbox"
            id="milho"
            name="milho"
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
          />
          azeitona verde
        </label>

        <label className="container-macarrao-input-label" htmlFor="champgnon">
          <input
            type="checkbox"
            id="champgnon"
            name="champgnon"
            className="container-macarrao-input-checkbox"
          />
          champgnon
        </label>

        <label className="container-macarrao-input-label" htmlFor="muçarela">
          <input
            type="checkbox"
            id="muçarela"
            name="muçarela"
            className="container-macarrao-input-checkbox"
          />
          muçarela
        </label>

        <label className="container-macarrao-input-label" htmlFor="provolone">
          <input
            type="checkbox"
            id="provolone"
            name="provolone"
            className="container-macarrao-input-checkbox"
          />
          provolone
        </label>

        <label className="container-macarrao-input-label" htmlFor="palmito">
          <input
            type="checkbox"
            id="palmito"
            name="palmito"
            className="container-macarrao-input-checkbox"
          />
          palmito
        </label>

        <label className="container-macarrao-input-label" htmlFor="cenoura">
          <input
            type="checkbox"
            id="cenoura"
            name="cenoura"
            className="container-macarrao-input-checkbox"
          />
          cenoura
        </label>

        <label className="container-macarrao-input-label" htmlFor="salsinha">
          <input
            type="checkbox"
            id="salsinha"
            name="salsinha"
            className="container-macarrao-input-checkbox"
          />
          salsinha
        </label>

        <label className="container-macarrao-input-label" htmlFor="cebolinha">
          <input
            type="checkbox"
            id="cebolinha"
            name="cebolinha"
            className="container-macarrao-input-checkbox"
          />
          cebolinha
        </label>

        <label className="container-macarrao-input-label" htmlFor="manjericao">
          <input
            type="checkbox"
            id="manjericao"
            name="manjericao"
            className="container-macarrao-input-checkbox"
          />
          manjericão
        </label>

        <label className="container-macarrao-input-label" htmlFor="alcaparra">
          <input
            type="checkbox"
            id="alcaparra"
            name="alcaparra"
            className="container-macarrao-input-checkbox"
          />
          alcaparra
        </label>

        <label className="container-macarrao-input-label" htmlFor="alho_poro">
          <input
            type="checkbox"
            id="alho_poro"
            name="alho_poro"
            className="container-macarrao-input-checkbox"
          />
          alho poró
        </label>

        <label className="container-macarrao-input-label" htmlFor="pimenta">
          <input
            type="checkbox"
            id="pimenta"
            name="pimenta"
            className="container-macarrao-input-checkbox"
          />
          pimenta
        </label>

        <label className="container-macarrao-input-label" htmlFor="oregano">
          <input
            type="checkbox"
            id="oregano"
            name="oregano"
            className="container-macarrao-input-checkbox"
          />
          orégano
        </label>

        <label className="container-macarrao-input-label" htmlFor="passas">
          <input
            type="checkbox"
            id="passas"
            name="passas"
            className="container-macarrao-input-checkbox"
          />
          passas
        </label>

        <label className="container-macarrao-input-label" htmlFor="parmessao">
          <input
            type="checkbox"
            id="parmessao"
            name="parmessao"
            className="container-macarrao-input-checkbox"
          />
          parmessão
        </label>

        <label className="container-macarrao-input-label" htmlFor="tomate_seco">
          <input
            type="checkbox"
            id="tomate_seco"
            name="tomate_seco"
            className="container-macarrao-input-checkbox"
          />
          tomate seco
        </label>
      </div>
    </div>
  );
}

export default InputMacarrao;
