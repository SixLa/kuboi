// Partie qui récupère l'api
const url = "https://randomuser.me/api/?results=5&inc=gender,name,nat,email,dob,registered";

async function getUserAsync() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0].gender);
    console.log(data.results[0].name.first);
    console.log(data.results[0].nat);
    console.log(data.results[0].email);
    console.log(data.results[0].dob.age);
    console.log(data.results[0].registered.date);
}

getUserAsync();

// Créer une boucle