export default function validaCpf(cpf: string) {
  // 123.456.789-12

  if (cpf.length != 14) {
    console.log("falso");
    return false;
  }

  cpf = cpf.replaceAll(".", "");
  cpf = cpf.replaceAll("-", "");

  // 12345678912

  const arrayCpf = [...cpf];

  // ['1', '2', ...]

  // o codigo abaixo faz a multiplicacao do primeiro digito por 10 do segundo por 9  ... e do nono por 2

  let soma_mult = 0;
  arrayCpf.map((element, index) => {
    if (Math.abs(index - 10) >= 2) {
      let digito = parseInt(element);
      let multiplicador = Math.abs(index - 10);
      soma_mult += digito * multiplicador;
    }
  });

  //verificacao primeiro digito, o resto de soma_mult*10/11 deve ser igual ao primeiro digito verificador caso o resto for 10 o digito verificador deve ser 0

  const resto_soma_mult1 = (soma_mult * 10) % 11;

  if (resto_soma_mult1 != parseInt(arrayCpf[9]) && resto_soma_mult1 != 10) {
    console.log("falso");
    return false;
  }

  if (resto_soma_mult1 == 10 && parseInt(arrayCpf[9]) != 0) {
    console.log("falso");
    return false;
  }

  //repete esquema acima so que comecando com 11
  soma_mult = 0;

  arrayCpf.map((element, index) => {
    if (Math.abs(index - 11) >= 2) {
      let digito = parseInt(element);
      let multiplicador = Math.abs(index - 11);

      soma_mult += digito * multiplicador;
    }
  });

  const resto_soma_mult2 = (soma_mult * 10) % 11;

  console.log(resto_soma_mult1, resto_soma_mult2);

  if (resto_soma_mult2 != parseInt(arrayCpf[10]) && resto_soma_mult1 != 10) {
    console.log("falso");
    return false;
  }

  if (resto_soma_mult2 == 10 && parseInt(arrayCpf[10]) != 0) {
    console.log("falso");
    return false;
  }

  console.log("verdadeiro");
  return true;
}
