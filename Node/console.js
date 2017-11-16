var service = require('./service.js');



var tabSPEAKERS = service.listerTousLesPresentateurs()


var tabSession = service.listerToutesLesSessions()


var idSession = ""
var tabSessionDef = service.trouverUneSession(idSession)


var tabPresentateur = service.listerTopPresentateurs()


/* ------------------------------------------------------------------- */

var menu = {
    "1": {
        libelle: "1.Liste de tous les présentateurs",
        execute: function() {
            var service = require('./service.js')
            tabSPEAKERS.forEach(function(sp) {
                console.log(sp.firstname)
            })
        }
    },

    "2": {
        libelle: "2.Top présentateurs",
        execute: function() {
            var service = require('./service.js')
            tabPresentateur.forEach(function(sp) {
                console.log(sp.firstname)
            })
        }
    },

    "3": {
        libelle: "3.Liste des sessions",
        execute: function() {
            var service = require('./service.js')
            tabSession.forEach(function(sp) {
                console.log(sp.title)
            })
        }
    },

    "4": {
        libelle: "4.Détail d'une session",
        execute: function() {
            var service = require('./service.js')
            rl.question('Choississez un ID ? ', (idSession) => {
                console.log(service.trouverUneSession(idSession).title + " - " + service.trouverUneSession(idSession).desc + " - " + service.trouverUneSession(idSession).speakers);

            });
        }
    },
    '99': {
        libelle: 'Quitter',
        execute: function() {
            rl.close()
        }
    }
}

function displayMenu() {
    console.log('***** Application Conférence *******');
    for (var option in menu) {
        console.log(option, menu[option].libelle);

    }
}



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function boucle() {
    rl.question(displayMenu(), (option) => {
        // TODO: Log the answer in a database

        if (option in menu) {
            menu[option].execute();
            if (option != "99") {
                boucle();
            }
        } else {
            console.log("entrer un choix correct");
            boucle();
        }
    });
}
boucle();