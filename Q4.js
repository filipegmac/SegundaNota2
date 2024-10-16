function factorial(n){
    let multiplier = 1

    for (let i = 1; i <= n; i++) {
        multiplier *= i
    }
    return console.log(multiplier)
}

factorial(5)