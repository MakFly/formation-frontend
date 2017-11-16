var tab = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

/* Boucle tableau */
tab.forEach(tab => console.log(tab))
    /* Indique si une ville ou + a au moins la lettre a dans son mot */
var lettreVille = tab.every(v => v.includes('a'))
console.log("Lettre A dans toute les villes == " + lettreVille)

/* Indique s'il y a un tiret dans le tableau */
var lettreVille = tab.some(v => v.includes('-'))
console.log("auMoinsUneVilleAvecUnTiret == " + lettreVille)

/* Filtre les villes pour savoir sans espace et tiret */
var lettreVille = tab.filter(v => !v.includes(' ') && !v.includes('-'))
console.log("villesSansTiretSansEspace == " + [lettreVille])

var lettreVille = tab.filter(t => t.slice(-1) == 's').map(t => t.toUpperCase())
console.log("villesMajusculeSeTerminantParS == " + [lettreVille])