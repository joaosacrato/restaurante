import { useState } from "react";
import Contador from "../../Contador";
import "./_style.scss";

interface Props {
  pizza: {
    id: number;
    nome: string;
    preco: number;
    ingredientes: string[];
  };
}

function Card({ pizza }: Props) {
  const [contador, setContador] = useState(0);

  return (
    <div className="card">
      <h2 className="card-titulo">{pizza.nome}</h2>
      <div className="card-div">
        <div className="card-div-ingredientes">
          <span className="card-span">Ingredientes:</span>
          {pizza.ingredientes.map((ingrediente) => (
            <span key={ingrediente} className="card-span-ingredientes">
              {ingrediente}
            </span>
          ))}
        </div>
        <div className="card-div-ingredientes">
          <span className="card-span">Preço:</span>
          <span className="card-span">{pizza.preco.toFixed(2)}</span>
        </div>
        <Contador nome={pizza.nome} contador={contador} setContador={setContador} />
      </div>
    </div>
  );
}

export default Card;
