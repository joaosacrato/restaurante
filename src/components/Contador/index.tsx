import './_style.scss'


interface Props {
    contador: number,
    setContador: React.Dispatch<React.SetStateAction<number>>,
    nome: string
}

function Contador({contador, setContador, nome}: Props) {
  return (
    <div className="card-contador">
      <button
        onClick={(event) => {
          event.preventDefault();
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}
        className="menu-item card-contador-seletor"
      >
        -
      </button>

      <input name={nome} id={`produto_${nome}`} className="card-contador-number" type={"number"} readOnly value={contador} />

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
