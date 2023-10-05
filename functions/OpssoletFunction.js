

function displaySponsor() {
    
    const displayLoading = document.createElement("div");
    const closeLoading = document.createElement("img");
    const blockText = document.createElement("div");
    const h3Text = document.createElement("h3");
    const pText = document.createElement("p");
    const dots = document.createElement("div");
    
    // Ajout des classes utilisées en css sur toutes les variables de la fonction.
    displayLoading.classList.add("loading");
    closeLoading.classList.add("close-btn");
    blockText.classList.add(".block-text");
    h3Text.classList.add("title-sponsor");
    pText.classList.add("paragraph-sponsor");
    dots.classList.add("dots");

    // Ajout de l'image dans la variable closeLoading.
    closeLoading.src = "..img/close_button.png";

    // Ajout de texte/valeur aux noeud "h3" & "p" via "innerHTML".
    h3Text.innerHTML = "Wild'Apero";
    pText.innerHTML = "Chargement des artefacts au complet.<br>Veuillez patienter s'il vous plaît.";
    
    // Boucle for let créant tout les spans contenue dans "dots".
    let spans = document.createElement("span");
    for (let index = 1; index <= 15; index++) {
        spans.style.setProperty("--i", index);
        dots.appendChild(spans);
    }
    
    // Imbrication des enfants dans les parents.
    sponsorBlock.appendChild(displayLoading);
    displayLoading.appendChild(blockText);
    blockText.appendChild(closeLoading);
    blockText.appendChild(h3Text);
    blockText.appendChild(pText);
    displayLoading.appendChild(dots);
    dots.appendChild(spans);
    
}