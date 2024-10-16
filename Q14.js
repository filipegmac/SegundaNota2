function ehPalindromo(str) {
    const strLower = str.toLowerCase();
    if (strLower === strLower.split("").reverse().join("")) {
        console.log("Palindromo")
    } else {
        console.log("Não é Palindromo")
    }
}

ehPalindromo("Hello")
ehPalindromo("Ama")