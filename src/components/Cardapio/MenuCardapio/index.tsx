import react, { HtmlHTMLAttributes, useEffect } from "react";
interface Props {
  toggleInputMacarrao: boolean;
  setToggleInputMacarrao: react.Dispatch<react.SetStateAction<boolean>>;
  dataKeys: string[];
  setItemSelecionado: react.Dispatch<react.SetStateAction<string>>;
  itemSelecionado: string;
}

function MenuCardapio({
  toggleInputMacarrao,
  setToggleInputMacarrao,
  dataKeys,
  setItemSelecionado,
  itemSelecionado,
}: Props) {
  useEffect(() => {
    const e = document.querySelector('[data-item="macarrao"]');

    if (toggleInputMacarrao === true) {
      e!.classList.add("menu-item-macarrao-ativo");
    } else {
      e!.classList.remove("menu-item-macarrao-ativo");
    }
  }, [toggleInputMacarrao]);

  useEffect(() => {
    const e = document.querySelector(`[data-item=${itemSelecionado}]`);
    e!.classList.add("menu-item-macarrao-ativo");
    return () => {
      e!.classList.remove("menu-item-macarrao-ativo");
    };
  }, [itemSelecionado]);

  return (
    <nav className="nav nav-cardapio">
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleInputMacarrao(!toggleInputMacarrao);
        }}
        data-item="macarrao"
        className="menu-item button-selecao"
        type="button"
      >
        Pedir macarrão
      </button>

      <div className="div-item-flex">
        {dataKeys.map((e) => {
          let item = e.replace("_", " ");
          return (
            <button
              key={e}
              type="button"
              data-item={e}
              className="menu-item button-selecao"
              onClick={(clickEvent) => {
                clickEvent.preventDefault();
                const botao = clickEvent.target as HTMLButtonElement;

                setItemSelecionado(botao.dataset.item as string);
              }}
            >
              {item[0].toUpperCase() + item.substring(1)}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default MenuCardapio;
