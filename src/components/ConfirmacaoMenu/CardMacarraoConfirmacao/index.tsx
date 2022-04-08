interface Props {
  massa: string;
  molho: string;
  ingredientes: string;
}

function CardMacarraoConfirmacao({ massa, molho, ingredientes }: Props) {
  return (
    <section>
      <p className="p-confirmacao">
        <strong>Massa:</strong> {massa.replaceAll("_", " ")}
      </p>
      <p className="p-confirmacao">
        <strong>Molho:</strong> {molho.replaceAll("_", " ")}
      </p>
      <p className="p-confirmacao">
        <strong>Ingredientes:</strong>{" "}
        {ingredientes.replaceAll("+", " ").replaceAll("_", " ")}
      </p>
    </section>
  );
}

export default CardMacarraoConfirmacao;
