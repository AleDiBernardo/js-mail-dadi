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

//conoscenze pregresse da Java (non muore nessuno tranquilli è proprio Java che intendevo)
canUserAccess === true ? console.log("Benvenuto") : console.log("Non puoi accedere");

