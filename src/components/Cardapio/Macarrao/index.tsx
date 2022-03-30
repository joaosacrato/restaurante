import { Fragment, useEffect, useState } from "react";
import Contador from "../../Contador";
import InputMacarrao from "./InputMacarrao";
import "./_style.scss";

interface Props {
  items: {};
  setItems: React.Dispatch<React.SetStateAction<{}>>;
  macarroes: {};
  setMacarroes: React.Dispatch<React.SetStateAction<{}>>;
}

function MenuMacarrao({ macarroes, setMacarroes, items, setItems }: Props) {
  const [contador, setContador] = useState(0);

  let inputs = [];
  for (let i = contador; i > 0; i--) {
    inputs.push(
      <InputMacarrao
        setMacarroes={setMacarroes}
        macarroes={macarroes}
        contador={i}
        key={i}
      />
    );
  }

  return (
    <div className="container_form">
      <h2 className="titulo_form">Quantos pratos de macarrão deseja?</h2>
      <Contador
        items={items}
        setItems={setItems}
        nome="qtd_macarrao"
        contador={contador}
        setContador={setContador}
      />
      <Fragment>{inputs}</Fragment>
    </div>
  );
}

export default MenuMacarrao;
