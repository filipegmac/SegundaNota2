function numeroPrimo(number) {
    let start = 2;
    while (start <= Math.sqrt(number)) if (number % start++ < 1) return "Não é primo";
    return "É primo";
}
console.log(numeroPrimo(7));