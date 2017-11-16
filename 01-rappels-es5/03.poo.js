function constructeurPersonne(nom, prenom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function() {
        return this.nom + " " + this.prenom + " " + this.pseudo
    }

    this.getInitiales = function() {
        return this.nom.charAt(0) + " " + this.prenom.charAt(0)
    }
}


function afficherPersonne(objet) {
    console.log(objet.nom + " " + objet.prenom + " " + objet.pseudo + " " + objet.getNomComplet())
        /* console.log(objet.getNomComplet()) */
}


var objetJule = new constructeurPersonne("LEMAIRE", 'Jules', "jule44")
var objetPaul = new constructeurPersonne("LEMAIRE", 'Paul', "paul44")

/* console.log(objetJule.nom + " " + objetJule.prenom + " " + objetJule.pseudo + " " + objetJule.getNomComplet())
console.log(objetPaul.nom + " " + objetPaul.prenom + " " + objetPaul.pseudo + " " + objetPaul.getNomComplet()) */

afficherPersonne(objetJule)
afficherPersonne(objetPaul)

/* Methode Prototype */
constructeurPersonne.prototype.age = "30 ans"
console.log(objetJule.age)

/* Initiale */
console.log(objetJule.getInitiales())

/* Objet sans constructeur */
var robert = {
    nom: "LEMAIRE",
    prenom: "robert",
    pseudo: "robert77",
    getNomComplet: function() { return this.nom + " " + this.prenom + " " + this.pseudo }
}

afficherPersonne(robert)

/* Utilisation de la fonction call */
function Client(numeroClient, nom, prenom, pseudo) {
    constructeurPersonne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient
    this.getInfos = function() {
        return this.numeroClient + " " + this.nom + " " + this.prenom
    }
}

var steve = new Client("A01", "LUCAS", "Steve", "steve44")

afficherPersonne(steve)

console.log("Numéro client : " + steve.numeroClient)
console.log("Resultat execution : " + steve.getInfos())