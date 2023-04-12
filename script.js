const form = document.getElementById("form");
console.log(form);
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener(
  "submit",

  (e) => {
    // bloquer le chargement du navigateur lors de la validation du formulaire sur le boutton submit
    e.preventDefault();
    form_verify();
  }
);

// la fonction form_verify ()contient la verification -username: .verifier si le champs est vide .verifier si on ne commence pas par les chiffres .verifier que le champs a aumoins trois caractères

function form_verify() 
  // obtenir tous les champs des imput et supprimer les espaces avant et pres la valeurs saisir par l'utilisateur
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


  // verify username
  if (userValue === "") {
    let message = "username ne peut etre vide";
    setError(username, message);

  // verify email
  if (emailValue === "") {
    let message = "email ne peut etre vide";
    setError(email, message);
  }
}
function setError(element, message) {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");
//   console.log(small);
  // ajout du message d'erreur
  small.innerText = message;
  // ajout de la class error
  formControl.className="form-control error";
}
