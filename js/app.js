console.log('Salut les yunas !')

const fruits = ["orange", "pomme", "poire"];

fruits.push("fraise")

console.log("longueur du tableau de fruits =", fruits.length)
console.log(fruits)

const personne = {
    prenom: "olivier"
}

console.log(personne.prenom)


for (let fruit of fruits) {
    console.log(fruit)
}

fruits.forEach(element => {
    console.log(element)
});

// ici la callback n'est pas très explicite
fruits.forEach( function(element) {
  console.log("la callback anonyme affiche le fruit:  " + element)  
})

// *************************************************************
// *********** PROGRAMMATION fonctionnelle ********************* 
function afficheFruit(fruit, index) {
    console.log('Oh le fruit est : ' + fruit + " qui a l index " + index)
}

// On fait des fonctions pour avoir l appel le plus simple possible
// on appel la fonction de callback dans le foreach 
// => chaque élément va executer la fonction de callback
// ICI c est beaucoup plus clair dans la lecture
fruits.forEach(afficheFruit)

// *********** FIN PROGRAMMATION fonctionnelle ********************* 
// *****************************************************************

// depuis ES6
// utilisation des backtips
const lePrenom = "Olivier";
console.log(`Bonjour ${lePrenom}`);