import validaCpf from "./validacoes/validaCpf";
import { tiposErro } from "./errorMessages/tiposErro";
import { mensagensDeErro } from "./errorMessages/msgsErro";

export default function validaTodosCampos(input: HTMLInputElement) {
  const tipoDeInput = input.dataset.tipo as string;
  const validadores: { [key: string]: any } = {
    //um objeto
    cpf: (input: HTMLInputElement) => validaCpfHTML(input),
  };

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.classList.add("input-endereco-texto-concluido");
    input.classList.remove("input-endereco-texto-naoValido")
    input.nextElementSibling!.innerHTML = "";
  } else {
    input.classList.add("input-endereco-texto-naoValido");
    input.classList.remove("input-endereco-texto-concluido")
     input.nextElementSibling!.innerHTML = adicionaMsgErro(
      tipoDeInput,
      input
    );
  }
}

function adicionaMsgErro(tipoDeInput: string, input: any) {
  //tipoDeInput é o string do data-tipo e o input é o input do html

  let msgDeErro = "";

  tiposErro.forEach((erro) => {
    if (input.validity[erro]) {
      msgDeErro = mensagensDeErro[tipoDeInput][erro];
    }
  });

  return msgDeErro;
}

function validaCpfHTML(input: HTMLInputElement) {
  const cpf = input.value;

  let mesg = "";

  if (!validaCpf(cpf)) {
    mesg = "O CPF digitado é invalido";
  }

  input.setCustomValidity(mesg);
}
