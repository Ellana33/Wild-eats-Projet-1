// Déclaration de la variable "formReview" et assignation à l'ID "write-review".
const formReview = document.querySelector("#write-review");

let arrayRestaurant = [];

// Déclaration des variables necessaire.
let userReview = document.querySelector("#userReview");
let contentReview = document.querySelector("#contentReview");
let starReview = document.querySelector(".star-select");
const submitReview = document.querySelector("#btnReview");

// Déclaration des variables erreurs et validé.
const errorPop = document.querySelector("#errorMsg");
const approuvPop = document.querySelector("#approuvMsg");

// ID Restaurants.
const urlParamsTest = new URL(window.location.href);
// const restaurantId = urlParamsTest.searchParams.get("id");

// Ajout de la variable "inputs" qui est un tableau contenant "userReview" et "contentReview"  ansi que les étoiles.
let inputs = [userReview, contentReview, starReview];

// Verification du contenu des champs et affichage d'erreur en cas d'erreurs.
submitReview.addEventListener("click", function writeAReviewContent(send) {
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

    userReview.innerHTML =
      showStars(inputs[2].value) + " " + inputs[0].value + " :";
    contentReview.innerHTML = inputs[1].value;

    feedbackBlock.appendChild(userReview);
    feedbackBlock.appendChild(contentReview);
    restaurantsFeedbacks
      .find((feedback) => feedback.restaurantId === +restaurantId)
      .feedback.push({
        userName: inputs[0].value,
        userComment: inputs[1].value,
        userStar: +inputs[2].value,
      });
    localStorage.setItem("userReview", JSON.stringify(restaurantsFeedbacks));
    showAverageStars(restaurantId);

    inputs[0].value = "";
    inputs[1].value = "";
  }
});
