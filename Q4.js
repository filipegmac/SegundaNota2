function fatorial(n){
    let multiplicador = 1

    for (let i = 1; i <= n; i++) {
        multiplicador *= i
    }
    return console.log(multiplicador)
}

fatorial(5)