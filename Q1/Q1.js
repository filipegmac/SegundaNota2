let num1 = parseInt(prompt("First number: "))
let num2 = parseInt(prompt("Second number: "))
let sum = num1 + num2
alert("Sum: " + sum)

if (num1 > num2){
    alert(num1 + " Is bigger than " + num2)
}
else if (num1 === num2) {
    alert("Both numbers are equal")
} else {
    alert(num2 + " Is bigger than " + num1)
}

if (sum % 2 === 0){
    alert("The sum is even")
} else {
    alert("The sum is odd")
}