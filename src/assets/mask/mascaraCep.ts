export default function mascaraCep(cep: HTMLInputElement["value"]) {
  // só pode ser digitado numeros
  cep = cep.replace(/\D/g, "");
  cep = cep.replace(/(\d{5})(\d)/, "$1-$2");
  return cep;
}
