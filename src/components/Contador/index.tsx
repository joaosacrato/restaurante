
interface Props {
    contador: number,
    setContador: React.Dispatch<React.SetStateAction<number>>
}

function Contador({contador, setContador}: Props) {
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

      <span className="card-contador-span">{contador}</span>

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
