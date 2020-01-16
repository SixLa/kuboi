// Partie qui récupère l'api

const url = "https://randomuser.me/api/?results=10&inc=gender,name,nat,email,dob,registered";

async function recupereruser() {
    let response = await fetch(url);
    let data = await response.json();

    // Créer une boucle

    var gender = document.getElementsByClassName("sexe");

    function remplirsexe() {
        for (var i = 0; i < gender.length; i++) {
            if (i < 11) {
                gender[i].innerHTML = data.results[i].gender;
            }
            if (i > 10) {
                gender[i].innerHTML = data[i - 9].gender;
            }
        }
    }

    var prenom = document.getElementsByClassName("prenom");

    function remplirprenom() {
        for (var i = 0; i < prenom.length; i++) {
            if (i < 11) {
                prenom[i].innerHTML = data.results[i].name.first;
            }
            if (i > 10) {
                prenom[i].innerHTML = data[i - 9].name.first;
            }
        }
    }

    var nat = document.getElementsByClassName("nat");

    function remplirnat() {
        for (var i = 0; i < nat.length; i++) {
            if (i < 11) {
                nat[i].innerHTML = data.results[i].nat;
            }
            if (i > 10) {
                nat[i].innerHTML = data[i - 9].nat;
            }
        }
    }

    var email = document.getElementsByClassName("email");

    function rempliremail() {
        for (var i = 0; i < nat.length; i++) {
            if (i < 11) {
                email[i].innerHTML = data.results[i].email;
            }
            if (i > 10) {
                email[i].innerHTML = data[i - 9].email;
            }
        }
    }

    var age = document.getElementsByClassName("age");

    function remplirage() {
        for (var i = 0; i < nat.length; i++) {
            if (i < 11) {
                age[i].innerHTML = data.results[i].dob.age;
            }
            if (i > 10) {
                age[i].innerHTML = data[i - 9].dob.age;
            }
        }
    }

    var dateinscription = document.getElementsByClassName("dateinscription");

    function remplirdateinscription() {
        for (var i = 0; i < dateinscription.length; i++) {
            if (i < 11) {
                dateinscription[i].innerHTML = data.results[i].registered.date;
            }
            if (i > 10) {
                dateinscription[i].innerHTML = data[i - 9].registered.date;
            }
        }
    }

    remplirsexe();
    remplirprenom();
    remplirnat();
    rempliremail();
    remplirage();
    remplirdateinscription();
}

recupereruser();