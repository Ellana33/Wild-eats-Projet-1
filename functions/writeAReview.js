
// Déclaration de la variable "formReview" et assignation à l'ID "write-review".
const formReview = document.querySelector("#write-review");

// Déclaration des variables necessaire.
let userReview = document.querySelector("#userReview");
let contentReview = document.querySelector("#contentReview");
let starReview = document.querySelector(".star-select");
const submitReview = document.querySelector("#btnReview");

// Déclaration des variables erreurs et validé.
const errorPop = document.querySelector("#errorMsg");
const approuvPop = document.querySelector("#approuvMsg");

// Ajout de la variable "inputs" qui est un tableau contenant "userReview" et "contentReview"  ansi que les étoiles.
let inputs = [userReview, contentReview, starReview];

// Verification du contenu des champs et affichage d'erreur en cas d'erreurs.
submitReview.addEventListener("click",  function writeAReviewContent(send) {
  send.preventDefault();

  if (userReview.value === "") {
    errorPop.innerHTML = "Votre Prénom/Nom n'est pas correctement tapé.";
    errorPop.classList.add("show");
  } else if (contentReview.value === "") {
    errorPop.innerHTML = "Votre avis rédigé n'est pas valide.";
    errorPop.classList.add("show");
  } else {

    let myReview = {
      userReview: userReview.value,
      contentReview: contentReview.value,
      starReview: starReview.value
    }
    localStorage.setItem("userReview", myReview);
    console.log(myReview);
    approuvPop.classList.add("show");
    approuvPop.innerHTML = "Le commentaire est ajouté avec succès.";
    errorPop.classList.remove("show");

    // Block d'instructions pour push le commentaire.

    const feedbackBlock = document.querySelector(".feedback-content");
    userReview = document.createElement("span");
    contentReview = document.createElement("p");

    userReview.classList.add("yellow-stars");
    contentReview.classList.add("feedback");

    userReview.innerHTML = inputs[2].value + " " + inputs[0].value + " :";
    contentReview.innerHTML = inputs[1].value;

    feedbackBlock.appendChild(userReview);
    feedbackBlock.appendChild(contentReview);

    inputs[0].value = "";
    inputs[1].value = "";
  }
});

export function test() {
  console.log("Test.");
}