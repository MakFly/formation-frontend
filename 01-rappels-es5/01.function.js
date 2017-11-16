/* console.log("01 - Fonctions"); */

var nb1 = 10
var nb2 = 20



/* Function */
function additionner(nb1, nb2) {
    var resultat = nb1 + nb2
    return resultat
}

function multiplication(nbx, nby) {
    var resultat = nbx * nby
    return resultat
}

function soustraction(nbx, nby) {
    var resultat = nbx - nby
    return resultat
}

var somme = additionner
var resultat2 = somme(nb1, nb2)

var afficherOperation = function(nomOperation, operation, nb1, nb2) {
    return nomOperation + "[nb1 == " + nb1 + ", nb2 == " + nb2 + "] == " + operation(nb1, nb2)
}


/* Affichage */
console.log('resultat1 == ' + additionner(nb1, nb2))
console.log('resultat2 == ' + resultat2)
console.log('resultat1 == ' + multiplication(nb1, nb2))
console.log(afficherOperation('Somme ', somme, 20, 40))
console.log(afficherOperation('Multiplication ', multiplication, 10, 20))
console.log(afficherOperation('Soustraction ', soustraction, 15, 5))