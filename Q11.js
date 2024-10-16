function array(arr) {
    let square = arr.map(function(number) {
        return number ** 2;
    })
    let filterSquare = square.filter(maioresQue10 => (maioresQue10 > 10))
    console.log("Array:", arr,"\nArray ao quadrado", square, "\nMaiores que 10: ", filterSquare)
}

array([1, 2, 3, 4, 5]);