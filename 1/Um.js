let num1 = parseInt(prompt("Primeiro número: "))
let num2 = parseInt(prompt("Segundo número: "))
let soma = num1 + num2
alert("Soma: " + soma)

if (num1 > num2){
    alert(num1 + " É maior que" + num2)
}
else if (num1 === num2) {
    alert("Os dois números são iguais")
} else {
    alert(num2 + " É maior que " + num1)
}

if (soma % 2 === 0){
    alert("A soma é par")
} else {
    alert("A soma é impar")
}