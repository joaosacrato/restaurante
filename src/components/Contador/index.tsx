import react, { useEffect } from "react";

interface Props {
  contador: number;
  setContador: react.Dispatch<react.SetStateAction<number>>;
  nome: string;
  items: {};
  setItems: react.Dispatch<react.SetStateAction<{}>>;
}

function Contador({ contador, setContador, nome, items, setItems }: Props) {
  const OnClickMinus = (
    event: react.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    if (contador === 0 && nome in items) {
      let obj: any = { ...items };
      delete obj[nome];
      setItems(obj);
    }

    if (contador > 0) {
      let teste = { ...items, [nome]: contador };
      setItems && setItems(teste);

    }
  }, [contador]);
  return (
    <div className="card-contador">
      <button
        onClick={(event) => {
          OnClickMinus(event);
        }}
        className="menu-item card-contador-seletor"
      >
        -
      </button>

      <input
        name={nome}
        id={`produto_${nome}`}
        className="card-contador-number"
        type={"number"}
        readOnly
        value={contador}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          setContador(contador + 1);
        }}
        className="menu-item card-contador-seletor"
      >
        +
      </button>
    </div>
  );
}

export default Contador;
