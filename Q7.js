function Array(arr) {
    this.arr = arr;

    this.ordenar = function() {
        this.arr.sort();
    };

    this.print = function() {
        console.log(this.arr.toString());
    };
}

let frutas = new Array(["Abacate", "Melancia", "Banana", "Goiaba"]);
frutas.ordenar();
frutas.print();
