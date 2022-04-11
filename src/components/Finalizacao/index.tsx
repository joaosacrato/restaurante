import { Fragment } from "react";
import { IoMdCheckmark } from "react-icons/io";

function Finalizacao() {
  const data = new Date();
  return (
    <div className="container-finalizacao">
      <IoMdCheckmark className="svg-finalizacao" />
      <span className="p-finalizacao">
        Pedido recebido no dia{" "}
        {data.getDate().toString().padStart(2, "0") +
          "/" +
          (data.getMonth() + 1).toString().padStart(2, "0")}
      </span>
      <span className="p-finalizacao">
        {"às " +
          data.getHours().toString().padStart(2, "0") +
          " : " +
          data.getMinutes().toString().padStart(2, "0")}
      </span>
    </div>
  );
}

export default Finalizacao;
