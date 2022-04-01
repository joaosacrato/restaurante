export default function mascaraOnlyNumbers(numero: string) {
    numero = numero.replace('/\D/g', "")
    return numero
}