import react from "react";
import { useState } from "react";
import Contador from "../../Contador";

interface Props {
  items: {};
  setItems: react.Dispatch<react.SetStateAction<{}>>;
  pizza: {
    id: number;
    nome: string;
    preco: number;
    ingredientes: string[];
  };
}

function Card({ pizza, items, setItems }: Props) {
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
          <span className="card-span">Preço: </span>
          <span className="card-span">{pizza.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
        </div>
        <Contador
          nome={pizza.id.toString()}
          contador={contador}
          setContador={setContador}
          items={items}
          setItems={setItems}

        />
      </div>
    </div>
  );
}

export default Card;
