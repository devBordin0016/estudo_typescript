function multiplicar(primeiroNumero: number, segundoNumero: number): number {
    return primeiroNumero * segundoNumero;
}

function dizOi(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const saudacao = dizOi("Fernando");

console.log(resultadoMultiplicacao);
console.log(saudacao);
