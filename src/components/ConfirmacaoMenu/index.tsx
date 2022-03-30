import { useParams, useSearchParams } from "react-router-dom";

function ConfirmacaoMenu() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.entries()); // retorna um iterator

  console.log([...searchParams])

  return <div>order</div>;
}

export default ConfirmacaoMenu;
