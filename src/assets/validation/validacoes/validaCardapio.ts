export default function validaCardapio(obj: {
  [key: string]: string | number | undefined;
}) {
  let msgErro = "";
  const keys = Object.keys(obj);
  const nrMacarrao = (obj["qtd_macarrao"] as number) || 0;

  if ("" in obj) {
    msgErro = "Você precisa selecionar ao menos um item";
    return [false, msgErro];
  }

  // cria os array de keys necessarias

  let arrayMassa: Array<string> = [],
    arrayMolho: Array<string> = [],
    arrayIngrediente: Array<string> = [];

  for (let i = nrMacarrao; i > 0; i--) {
    let a = `massa_${i}`;
    let b = `molho_${i}`;
    let c = `ingrediente_${i}`;
    arrayMassa.push(a);
    arrayMolho.push(b);
    arrayIngrediente.push(c);
  }

  function paraCada(array: Array<string>) {
    let boleano = true;
    array.forEach((key) => {
      if (keys.some((x) => x === key) === false) {
        boleano = false;
      }
    });
    return boleano;
  }

  function verificaIngredientes(array: Array<string>) {
    let boleano = true;
    array.forEach((key) => {
      if (obj[key] === "") {
        boleano = false;
      }
    });
    return boleano;
  }

  if (
    paraCada(arrayMolho) &&
    paraCada(arrayMassa) &&
    paraCada(arrayIngrediente) &&
    verificaIngredientes(arrayIngrediente)
  ) {
    return [true, msgErro];
  } else {
    msgErro =
      "Você precisa selecionar ao menos uma massa um molho e um ingrediente para seu macarrão";
    return [false, msgErro];
  }
}
