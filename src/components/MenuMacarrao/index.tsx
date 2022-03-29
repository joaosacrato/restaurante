import { useEffect, useState } from "react";
import Contador from "../Contador";
import InputMacarrao from "./InputMacarrao";

function MenuMacarrao() {
  const [contador, setContador] = useState(0);

  return (
    <form>
      <h2>Quantos macarrões serão?</h2>
      <Contador contador={contador} setContador={setContador} />

      <h2>Escolha a massa:</h2>

      <input type="radio" id="spaguetti" name="massa" value="spaguetti" />
      <label htmlFor="spaguetti">spaguetti</label>
      <input type="radio" id="fettuccine" name="massa" value="fettuccine" />
      <label htmlFor="fettuccine">fettuccine</label>
      <input type="radio" id="fusilli" name="massa" value="fusilli" />
      <label htmlFor="fusilli">fusilli</label>
      <input type="radio" id="penne" name="massa" value="penne" />
      <label htmlFor="penne">penne</label>
      <input
        type="radio"
        id="penne_tricolor"
        name="massa"
        value="penne_tricolor"
      />
      <label htmlFor="penne_tricolor">penne tricolor</label>
      <input type="radio" id="farfalle" name="massa" value="farfalle" />
      <label htmlFor="farfalle">farfalle</label>
      <input type="radio" id="capelette" name="massa" value="capelette" />
      <label htmlFor="capelette">capelette</label>
      <input type="radio" id="nhoque" name="massa" value="nhoque" />
      <label htmlFor="nhoque">nhoque</label>
      <br />

      <h2>Escolha o molho:</h2>

      <input name="molho" type="radio" id="branco" value="branco" />
      <label htmlFor="branco">branco</label>
      <input
        name="molho"
        type="radio"
        id="branco_com_espinafre"
        value="branco_com_espinafre"
      />
      <label htmlFor="branco_com_espinafre">branco com espinafre</label>
      <input name="molho" type="radio" id="bolonhesa" value="bolonhesa" />
      <label htmlFor="bolonhesa">bolonhesa</label>
      <input name="molho" type="radio" id="rose" value="rose" />
      <label htmlFor="rose">rose</label>
      <input name="molho" type="radio" id="ao_sugo" value="ao_sugo" />
      <label htmlFor="ao_sugo">ao sugo</label>
      <input
        name="molho"
        type="radio"
        id="quatro_queijos"
        value="quatro_queijos"
      />
      <label htmlFor="quatro_queijos">quatro queijos</label>

      <h2>Escolha os ingredientes</h2>

      <input type="checkbox" id="frutos_do_mar" name="frutos_do_mar" />
      <label htmlFor="frutos_do_mar">frutos do mar</label>
      <input type="checkbox" id="azeite" name="azeite" />
      <label htmlFor="azeite">azeite</label>

      <input type="checkbox" id="margarina" name="margarina" />
      <label htmlFor="margarina">margarina</label>

      <input type="checkbox" id="aliche" name="aliche" />
      <label htmlFor="aliche">aliche</label>

      <input type="checkbox" id="bacon" name="bacon" />
      <label htmlFor="bacon">bacon</label>

      <input type="checkbox" id="calabresa" name="calabresa" />
      <label htmlFor="calabresa">calabresa</label>

      <input type="checkbox" id="cebola" name="cebola" />
      <label htmlFor="cebola">cebola</label>

      <input type="checkbox" id="alho" name="alho" />
      <label htmlFor="alho">alho</label>

      <input type="checkbox" id="presunto" name="presunto" />
      <label htmlFor="presunto">presunto</label>

      <input type="checkbox" id="frango" name="frango" />
      <label htmlFor="frango">frango</label>

      <input type="checkbox" id="brocoli" name="brocoli" />
      <label htmlFor="brocoli">brocoli</label>

      <input type="checkbox" id="tomate" name="tomate" />
      <label htmlFor="tomate">tomate</label>

      <input type="checkbox" id="milho" name="milho" />
      <label htmlFor="milho">milho</label>

      <input type="checkbox" id="ervilha" name="ervilha" />
      <label htmlFor="ervilha">ervilha</label>

      <input type="checkbox" id="azeitona_preta" name="azeitona_preta" />
      <label htmlFor="azeitona_preta">azeitona preta</label>

      <input type="checkbox" id="azeitona_verde" name="azeitona_verde" />
      <label htmlFor="azeitona_verde">azeitona verde</label>

      <input type="checkbox" id="champgnon" name="champgnon" />
      <label htmlFor="champgnon">champgnon</label>

      <input type="checkbox" id="muçarela" name="muçarela" />
      <label htmlFor="muçarela">muçarela</label>

      <input type="checkbox" id="provolone" name="provolone" />
      <label htmlFor="provolone">provolone</label>

      <input type="checkbox" id="palmito" name="palmito" />
      <label htmlFor="palmito">palmito</label>

      <input type="checkbox" id="cenoura" name="cenoura" />
      <label htmlFor="cenoura">cenoura</label>

      <input type="checkbox" id="salsinha" name="salsinha" />
      <label htmlFor="salsinha">salsinha</label>

      <input type="checkbox" id="cebolinha" name="cebolinha" />
      <label htmlFor="cebolinha">cebolinha</label>

      <input type="checkbox" id="manjericao" name="manjericao" />
      <label htmlFor="manjericao">manjericão</label>

      <input type="checkbox" id="alcaparra" name="alcaparra" />
      <label htmlFor="alcaparra">alcaparra</label>

      <input type="checkbox" id="alho_poro" name="alho_poro" />
      <label htmlFor="alho_poro">alho poró</label>

      <input type="checkbox" id="pimenta" name="pimenta" />
      <label htmlFor="pimenta">pimenta</label>

      <input type="checkbox" id="oregano" name="oregano" />
      <label htmlFor="oregano">orégano</label>

      <input type="checkbox" id="passas" name="passas" />
      <label htmlFor="passas">passas</label>

      <input type="checkbox" id="parmessao" name="parmessao" />
      <label htmlFor="parmessao">parmessão</label>

      <input type="checkbox" id="tomate_seco" name="tomate_seco" />
      <label htmlFor="tomate_seco">tomate seco</label>
    </form>
  );
}

export default MenuMacarrao;
