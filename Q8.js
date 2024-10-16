const array = [1, 3, 5, 6, 9, 12];
let multiplesOfThree = array.filter(multiples => (multiples % 3) === 0)
console.log("Multiples of three: ", multiplesOfThree);
console.log("Total multiples of three: ", multiplesOfThree.length);