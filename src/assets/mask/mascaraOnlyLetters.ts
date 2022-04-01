export default function mascaraOnlyLetters(nome: HTMLInputElement["value"]) {
    nome = nome.replace(/\d/g, "");
  
    return nome;
  }