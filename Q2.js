function add(number){
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return console.log(sum);
}

add(5)