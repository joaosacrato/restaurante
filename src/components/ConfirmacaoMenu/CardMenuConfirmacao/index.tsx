import { Fragment } from "react";

interface Props {
  nome: string;
  ingredientes: string[];
  preco: number;
  quantidade: string;
}

function CardMenuConfirmacao({ nome, ingredientes, preco, quantidade }: Props) {
  return (
    <Fragment>
      <p className="h3-confirmacao">
        <strong>{nome}</strong>
      </p>
      <p className="p-confirmacao">
        <strong>Preço unitário:</strong>{" "}
        {preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <div className="div-ingredientes">
        <span className="p-confirmacao">
          <strong>Ingredientes: </strong>
        </span>
        {ingredientes.map((ingrediente, key) => (
          <span key={key} className="p-confirmacao">
            {ingrediente}{" "}
          </span>
        ))}
      </div>
      <p className="p-confirmacao">
        <strong>Quantidade: </strong>
        {quantidade}
      </p>
    </Fragment>
  );
}

export default CardMenuConfirmacao;
