function arrayDeFrutas() {
    const frutas = ["Banana", "Maçã", "Melancia"]

    this.novaFruta = function(novafruta){
        frutas.splice(1,1, novafruta)
    }

    this.print = function() {
        console.log(frutas.toString())
    }
}

let array = new arrayDeFrutas()

array.novaFruta("Kiwi")
array.print()