

const obj = {
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // this. => appel une valeur à l'intérieur de l'objet
    direBonjour: function() {
        console.log("Bonjour je suis " + this.pseudo);
    }
    // direBonjour() {
    //     console.log("Bonjour je suis " + this.pseudo);
    // }
}

// Ajouter
obj.age = 24
obj["admin"] = true

// Modifier
obj.pseudo = "FS"

// Supprimer
delete obj.ville

// Chercker si propriété existe
// console.log("pseudo" in obj);
// => True
// console.log("ville in obj");
// => False

// Parcourir un objet
for (const key in obj) {
    // console.log(key + " : " + obj[key]);
    // liste les keys avec leur valeur
}

// console.log(obj.direBonjour());

// Obtenir les clés dans un tableau
const keys = Object.keys(obj)

// Obtenir les valeurs
const values = Object.values(obj)

// Obtenir keys + valeurs dans des tableaux
const nestedArray = Object.entries(obj)

const obj2 = {
    taille: "1m80",
    poids: "75kg"
}

// Fusionner objets
const fusion = Object.assign({}, obj, obj2)

// Empecher les modifications
const newObj = Object.freeze(obj)
newObj.pseudo = "Test";
// Empecher ajout de propriétés
const newObj1 = Object.seal(obj2)
newObj1.adress = "42 avenue du code"


  // -------------------- //
 // Contruire des Objets //
// -------------------- //

// Fonction constructor

function User(pseudo, ville) {
    // this => objet qui a été instansié
    this.pseudo = pseudo;
    this.ville = ville;

    // function in a object is a method
    this.getCity = function() {
        console.log(this.pseudo + " habite à " + this.ville);
    }
}

    const user1 = new User("From Scratch", "Bordeaux");
    const user2 =  new User("Yoan", "Montpellier");

    // console.log(user2.getCity());


// Factory functions //
function User3(pseudo, ville) {
    return {
        pseudo,
        ville
    }
}
const user4 = User3("FS", "Nice")


 // Class //
class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo,
        this.ville = ville
    }
    // METHOD
    sayMyname = function() {
        console.log("Bonjour je suis " + this.pseudo);
    }
}
const user5 = new Utilisateur("Samia", "Lyon")

Utilisateur.prototype.sayCity = function() {
    console.log("J'habite à " + this.ville);
}

// console.log(user5.sayCity());

Object.assign(Utilisateur.prototype, {
    method1() {
        // Ma méthode
    },
    method2() {
        // Ma méthode
    }
})

// console.log(user5);

  // ---------- //
 // l'héritage //
// ---------- //

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

const rintintin = new Dog("Rintintin", 9)
console.log(rintintin);