function somar(numero){
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i
    }
    return console.log(soma);
}

somar(5)