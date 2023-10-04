
// Déclaration de la variable "formReview" et assignation à l'ID "write-review".
const formReview = document.querySelector("#write-review");

// Déclaration des variables necessaire.
let userReview = document.querySelector("#userReview");
let contentReview = document.querySelector("#contentReview");
const submitReview = document.querySelector("#btnReview");

// Déclaration des variables erreurs et validé.
let error;
const errorPop = document.querySelector("#errorMsg");
const approuvPop = document.querySelector("#approuvMsg");

// Ajout de la variable "inputs" qui est un tableau contenant "userReview" et "contentReview".
let inputs = [userReview, contentReview];


// Verification du contenu des champs et affichage d'erreur en cas d'erreurs.
submitReview.addEventListener("click", (send)=> {
    send.preventDefault();
    
    if (userReview.value === "") {
        errorPop.innerHTML = "Votre Prénom/Nom n'est pas correctement tapé.";
        errorPop.classList.add("show");
        } else if (contentReview.value === "") {
                errorPop.innerHTML = "Votre avis rédigé n'est pas valide.";
                errorPop.classList.add("show");
        } else {
            approuvPop.classList.add("show");
            approuvPop.innerHTML = "Le commentaire est ajouté avec succès.";
            errorPop.classList.remove("show");
            
            // Fonction d'ajout de commentaire.
            // formReview.addEventListener("submit", function() {
            
                const feedbackBlock = document.querySelector(".feedback-content");
                userReview = document.createElement("span");
                contentReview = document.createElement("p");
                
                userReview.classList.add("yellow-stars");
                contentReview.classList.add("feedback");
                
                userReview.innerHTML = "★★★ " + inputs[0].value + " :";
                contentReview.innerHTML = inputs[1].value;
                
                feedbackBlock.appendChild(userReview);
                feedbackBlock.appendChild(contentReview);
                
                inputs[0].value = "";
                inputs[1].value = "";
                
                console.log(inputs[0].value);
                console.log(inputs[1].value);
                
                // });
        }
});
