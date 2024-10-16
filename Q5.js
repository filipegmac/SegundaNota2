const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(pares => (pares % 2) === 0);
const double = evenNumbers.map(function(number){
    return number * 2;
});
console.log("Even numbers:", evenNumbers);
console.log("Doubled even numbers:", double);