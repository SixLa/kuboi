var tableau = [];

function afficherListe() {
    var i;
    var vide = "";
    for (i = 0; i < tableau.length; i++) {
        vide += "<li>" + tableau[i] + "</li>";
    }
    document.getElementById('listedesprenoms').innerHTML = vide;
}

afficherListe();

//Ajouter un nom

var addEle = document.getElementById("ajouter");

function ajouterElement() {
    var prenomsup = document.getElementById("texte").value;
    tableau.push(prenomsup);
    afficherListe()
}
addEle.onclick = ajouterElement;


//Supprimer un nom

var supprNom = document.getElementById("supprimer");

function supprimerElement() {
    tableau.pop();
    afficherListe()
}

supprNom.onclick = supprimerElement;

// Tests API

async function getUserAsync(name) {
    let response = await fetch("https://randomuser.me/api/?results=50&inc=gender,name,nat,email,dob,registered");
    let data = await response.json()
    return data;
    console.log(data);
}

getUserAsync('yourUsernameHere')
    .then(data => console.log(data));

// Tests partie 2
const app = document.getElementById('listedesgens');