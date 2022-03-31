export default function mascaraTelefone(telefone: HTMLInputElement["value"]) {
  telefone = telefone.replace(/\D/g, "");
  telefone = telefone.replace(/(\d{1})/, "($1");
  telefone = telefone.replace(/(\(\d{2})(\d{1})/, "$1)$2");
  telefone = telefone.replace(/(\d{4})(\d{1})/, "$1-$2");
  telefone = telefone.replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3");

  return telefone;
}
