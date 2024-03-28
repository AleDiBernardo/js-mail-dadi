const userMail = prompt("Inserisci l'email");
console.log(userMail);

const canAccessList = [
  "example@gmail.com",
  "admin@gmail.com",
  "aledb@gmail.com",
];

let canUserAccess = false;

for (let i = 0; i < canAccessList.length; i++) {
  if (userMail === canAccessList[i]) {
    canUserAccess = true;
  }
}

//conoscenze pregresse di Java (non muore nessuno tranquilli è proprio Java che intendevo)
canUserAccess === true ? alert("Benvenuto") : alert("Non puoi accedere");

