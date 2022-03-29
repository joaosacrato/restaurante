import { useState } from "react";
import Contador from "../../Contador";
import "./_style.scss";

function Card() {
  const [contador, setContador] = useState(0);
  const ingredientes = [
    "Abacate",
    "Molho de Tomate",
    "Abobora",
    "Melão",
    "Presunto",
    "Palmito",
    "Ovo",
    "Ervilha",
    "Cebola",
    "Muçarela",
    "Molho de tomate",
    "Orégano",
    "Azeitona",
  ];
  return (
    <div className="card">
      <h2 className="card-titulo">Pizza de Calabreza</h2>
      <div className="card-div">
        <div className="card-div-ingredientes">
          <span className="card-span">Ingredientes:</span>
          {ingredientes.map((ingrediente) => (
            <span className="card-span-ingredientes">{ingrediente}</span>
          ))}
        </div>
        <Contador contador={contador} setContador={setContador} />
      </div>
    </div>
  );
}

export default Card;
