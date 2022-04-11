import { Link } from "react-router-dom";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { objToUrl } from "../../assets/functions/objToUrl";
import urlToObj from "../../assets/functions/urlToObj";
import data from "../../data/cardapio.json";
import CardMacarraoConfirmacao from "./CardMacarraoConfirmacao";
import CardMenuConfirmacao from "./CardMenuConfirmacao";

function ConfirmacaoMenu() {
  type dado = {
    [key: string]: {
      [key: string]: number | string | string[];
    }[];
  };

  function encontraPizzas() {
    let arrayRetorno: {}[] = [];

    keys.forEach((key) => {
      (data as dado)[key].forEach((item) => {
        Object.keys(objPedidos).forEach((itemPedido) => {
          if (item.id == itemPedido) {
            arrayRetorno.push({ ...item, qtdPedida: objPedidos[itemPedido] });
          }
        });
      });
    });

    return arrayRetorno;
  }
  const url = useLocation().search;
  const keys = Object.keys(data);
  let objPedidos: { [key: string]: string } = urlToObj(decodeURI(url));
  const objDados = {
    nome: objPedidos.nome,
    telefone: objPedidos.telefone,
    cpf: objPedidos.cpf,
    cep: objPedidos.cep,
    endereco: objPedidos.endereco,
    bairro: objPedidos.bairro,
    nr: objPedidos.nr,
  };

  // apaga os dados do cliente do obj de pedidos
  for (let i in objDados) {
    if (i in objPedidos) {
      delete objPedidos[i];
    }
  }

  let urlVoltar = objToUrl(objPedidos);
  urlVoltar = "?" + urlVoltar.substring(1);

  const arrayDePizzas = encontraPizzas();

  let arrayObjsMacarrao = [];

  for (let i = parseInt(objPedidos.qtd_macarrao); i > 0; i--) {
    let obj = {
      massa: objPedidos[`massa_${i}`],
      molho: objPedidos[`molho_${i}`],
      ingrediente: objPedidos[`ingrediente_${i}`],
      preco: 25,
    };

    arrayObjsMacarrao.push(obj);
  }

  function qtdAPagar() {
    let valor = 0;

    if (objPedidos.qtd_macarrao) {
      valor = 25 * parseInt(objPedidos.qtd_macarrao);
    }

    arrayDePizzas.forEach((pizza: { [key: string]: number | string }) => {
      valor =
        valor +
        parseFloat(pizza!.qtdPedida as string) * (pizza!.preco as number);
    });

    return valor;
  }
  return (
    <section className="container-confirmacao">
      <section className="section-confirmacao">
        <h2 className="h2-confirmacao">Dados</h2>
        <p className="p-confirmacao">
          <strong>Nome:</strong> {objDados.nome}
        </p>
        <p className="p-confirmacao">
          {" "}
          <strong>Telefone:</strong> {objDados.telefone}
        </p>
        <p className="p-confirmacao">
          {" "}
          <strong>CPF:</strong> {objDados.cpf}
        </p>
        <p className="p-confirmacao">
          {" "}
          <strong>CEP:</strong> {objDados.cep}
        </p>
        <p className="p-confirmacao">
          {" "}
          <strong>Endereço:</strong> {objDados.endereco}
        </p>
        <p className="p-confirmacao">
          <strong> Bairro:</strong> {objDados.bairro}
        </p>
        <p className="p-confirmacao">
          {" "}
          <strong>Número:</strong> {objDados.nr}
        </p>
      </section>
      <hr />
      <section>
        <h2 className="h2-confirmacao">Pedidos</h2>

        {arrayDePizzas.map(
          (pizza: { [key: string]: string | number | string[] }) => (
            <CardMenuConfirmacao
              nome={pizza!.nome as string}
              preco={pizza!.preco as number}
              ingredientes={pizza!.ingredientes as string[]}
              quantidade={pizza!.qtdPedida as string}
            />
          )
        )}

        <div className="div-qtdmacarrao">
          {objPedidos.qtd_macarrao ? (
            <>
              <p className="h3-confirmacao">
                <strong>Quantidade de pratos de macarrão:</strong>{" "}
                {objPedidos.qtd_macarrao}
              </p>
              <p className="h3-confirmacao">
                <strong>Preço Unitário: </strong>{" "}
                {arrayObjsMacarrao[0].preco.toLocaleString("pt-br", {
                  currency: "BRL",
                  style: "currency",
                })}
              </p>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="div-confirmacao-macarrao">
          {arrayObjsMacarrao.map((mac) => (
            <CardMacarraoConfirmacao
              massa={mac.massa}
              molho={mac.molho}
              ingredientes={mac.ingrediente}
            />
          ))}
        </div>

        <p className="h2-confirmacao">
          Valor a pagar:{" "}
          {qtdAPagar().toLocaleString("pt-br", {
            style: "currency",
            currency: "brl",
          })}{" "}
        </p>
      </section>
      <div className="div-botoes">
        <Link
          to={`/restaurante/cardapio/endereco/${urlVoltar}`}
          className="button-endereco"
        >
          Voltar
        </Link>

        <Link
          to={"/restaurante/cardapio/endereco/order/end"}
          className="button-endereco"
        >
          Finalizar
        </Link>
      </div>
    </section>
  );
}

export default ConfirmacaoMenu;
