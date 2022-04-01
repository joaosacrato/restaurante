export const mensagensDeErro: {[key: string]: any} = {
    nome: {
        valueMissing: "O campo não pode estar vazio",
        tooShort: "O nome deve conter no mínimo 3 letras"
    },
    telefone: {
        valueMissing: "O campo não pode estar vazio",
        patternMismatch: "O telefone deve obedecer ao padrão (12)3456-7891 ou (12)34567-8912"
    },
    cpf: {
        valueMissing: "O campo não pode estar vazio",
        tooShort: "O CPF deve conter no mínimo 11 dígitos",
        tooLong: "O CPF deve conter no máximo 11 dígitos",
        customError: "O CPF digitado é inválido",
    },
    cep: {
        valueMissing:"O campo não pode estar vazio",
        tooShort:"O CEP deve conter no mínimo 8 dígitos",
        tooLong:"O CEP deve conter no máximo 8 dígitos",
        customError:"O CEP dígitado é inválido"
    },
    endereco: {
        valueMissing: "O campo não pode estar vazio"
    },
    numero: {
        valueMissing: "O campo não pode estar vazio"
    },
    bairro: {
        valueMissing: "O campo não pode estar vazio"
    }
}