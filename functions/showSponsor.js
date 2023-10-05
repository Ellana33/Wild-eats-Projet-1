

// Déclarations et assignations des variables pour le #sponsor.
const html = document.querySelector("html");
const sponsorBlock = document.querySelector("#sponsor-block");
const btnSponsor = document.querySelector("#sponsor");
const displayLoading = document.querySelector("#loading");
const closeLoading = document.querySelector(".block-text");
// displayLoading.style.display = "none";


// Ajout d'un Event lors du survole du noeud.
btnSponsor.addEventListener(("mouseover"), ()=> {
    btnSponsor.classList.add("animate");
    
    // Ajout d'un timer pour déclancher la modification du texte (0.6sec / 600milisec).
    setTimeout(() => {
        btnSponsor.innerHTML = "Une petite soif ?";
        console.log("Hover.");
    }, 600);
    
    // Retrait de l'Event et des class css attribuées.
    btnSponsor.addEventListener(("mouseleave"), ()=> {
        btnSponsor.classList.remove("animate");
        btnSponsor.innerHTML = ">";
    });
});

// Fonction qui affiche la fenêtre de partenariat.
btnSponsor.addEventListener(("click"), ()=> {
    
    displayLoading.classList.add("default");
    
    setTimeout(() => {
        // sponsorBlock.style.display = "block";
        displayLoading.classList.add("show");
        html.classList.add("actived");
    }, 1000);

    // Suppression de l'affichage de la fenêtre.
    closeLoading.addEventListener(("click"), ()=> {
        
        displayLoading.classList.remove("show");
        
        setTimeout(() => {
            displayLoading.classList.remove("default");
            html.classList.remove("actived");
        }, 2500);

        console.log("Remove.");

    });

});
