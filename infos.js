
const listOfRestaurants = [
    {
        name: "Italian Trattoria",
        picture: "img/restaurants/IT.jpg",
        type: "Italien",
        note: "★★★★ 4.1",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Flam's",
        picture: "img/restaurants/flams.jpg",
        type: "Flammekuche",
        note: "★★★★ 4.7",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "McDonald's",
        picture: "img/restaurants/mcdo.jpg",
        type: "Sur le pouce",
        note: "★★★ 3.4",
        price: "$",
        description: "Chaîne classique de restauration rapide établie de longue date connue pour ses burgers et ses frites.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.619432866565!2d-0.5675503237582161!3d44.870041771070454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55285fa11b5623%3A0x804453834483b6bd!2sMcDonald&#39;s%20Port%20Autonome!5e0!3m2!1sfr!2sfr!4v1695993503644!5m2!1sfr!2sfr",
        feedback: "Marion Nouvite : \"Accueil très chaleureux, lieu très propre, nouvelle vaisselle écologique, ballond animaliers offerts aux enfants ainsi que des sachets de bonbons! Du jamais vu!\""
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot-regent.jpg",
        type: "Français",
        note: "★★★★ 4.1",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat-salad.jpg",
        type: "Salade",
        note: "★★★★ 4.2",
        price: "$",
        description: "Créez la salade de vos envies chez Eat Salad! Nous composons sous vos yeux votre salade sur-mesure, servie froide ou chaude, avec nos ingrédients frais et nos sauces faites maison. Eat Salad satisfait aussi toutes vos envies sucrées grâce à nos jus maison et desserts. Sur place, à emporter ou en livraison, votre repas est servi rapidement et avec le sourire chez Eat Salad.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4110264353674!2d-0.5597578414046314!3d44.863897760445205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288c3ebd5fd3%3A0xca0fc2319444168e!2sEat%20Salad!5e0!3m2!1sfr!2sfr!4v1695993849704!5m2!1sfr!2sfr",
        feedback:
        "Véronique Frémond-Kahlouche : Très agréable restaurant où l'accueil est particulièrement chalereux ! On y mange de très bonnes choses de grande qualité et fraîcheur ! J'adore y aller ! Je recommande chaudement." +
        "Christian Delégume : Une équipe jeune, sympathique et accueillante. Le concept est simple et redoutablement efficace. Pour ne rien gâcher c'est hyper bon. Si vous hésitez, vous avez tort. Allez-y et régalez vous. C'est aussi simple que cela",
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        note: "★★★ 3.8",
        price: "$",
        description: "Le foodtruck bio propose des crêpes et des galettes préparées avec des ingrédients biologiques de qualité. C'est une option de restauration rapide saine et respectueuse de l'environnement.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.5997177715944!2d-0.5625698230891266!3d44.87044307107046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ec2456ab0b%3A0x69bdfff0571c7115!2sLe%20foodtruck%20bio!5e0!3m2!1sfr!2sfr!4v1695994245877!5m2!1sfr!2sfr",
        feedback: "Noa de Cajou : \"Très bon moment de détente après la visite de la base sous-marine. \
        Crêpe délicieuse et bière de la région bordelaise.\"",
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au-bureau.jpg",
        type: "Bistrot",
        note: "★★★★ 4.3",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Papadum",
        picture: "img/restaurants/papadum.jpg",
        type: "Indien",
        note: "★★★★ 4.7",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Bistrot Spinoza",
        picture: "img/restaurants/spinoza.png",
        type: "Bistrot",
        note: "★★★★ 4.7",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Su and Shi",
        picture: "img/restaurants/sushi.jpg",
        type: "Japonais",
        note: "★★★★ 4.1",
        price: "$$",
        description: "Votre restaurant SuAndShi Bordeaux vous accueille tous les jours de la semaine. Nos produits sont sélectionnés avec soins pour vous offrir la meilleure expérience gustative possible (Saumon Label Ecosse et tant d'autres). Nos makis, sushis, chirachis, sashimis, california rolls, poke bowls ou encore Ice Rolls sont préparés chaque jour et à déguster sur place ou en livraison.",
        map: "",
        feedback: "ThorPain : Très bon palts et carte avec du choix. Pas mal de végétarien. Serveur sympatique et aux petits soins.", 
        // "AlainTerrieur : Découvert après une sortie au bassin des lumières, ce petit restaurant est superbe avec une décoration moderne et épuré."
        // "CarryBou : Exellente expérience comme à chaque fois que l'on commande chez vous <3."
    },
    {
        name: "La dame",
        picture: "img/restaurants/la-dame.png",
        type: "Nocturne",
        note: "★★★ 3.2",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Joya",
        picture: "img/restaurants/joya.jpg",
        type: "Nocturne",
        note: "★★★ 3.5",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "La côte et l'Arète",
        picture: "img/restaurants/cote-arete.jpg",
        type: "Français",
        note: "★★★★ 4.5",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la-terasse.jpg",
        type: "Français",
        note: "★★★★ 4.3",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Tripletta",
        picture: "img/restaurants/tripletta.jpg",
        type: "Italien",
        note: "★★★★ 4.4",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Le Jardin Pêcheur",
        picture: "img/restaurants/le-jardin-pecheur.jpg",
        type: "Brasserie",
        note: "★★★★ 4.1",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe-maritime.jpg",
        type: "Français",
        note: "★★★★ 4.0",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    }
];

const createPage = (index) => {

    // Création et ajout du titre dans la balise h3 .title-restaurant
    const containerPage = document.querySelector(".test");
    const page2 = document.createElement("div");
    page2.innerHTML = `
        <img src=${listOfRestaurants[index].picture} alt="Restaurant italien." class="restaurant-card-img" >
        <h3 class="title-restaurant">${listOfRestaurants[index].name}</h3>
        <p class="type-food">${listOfRestaurants[index].type}</p>
        <span class="star">${listOfRestaurants[index].note}</span>
        <span class="price">${listOfRestaurants[index].price}</span>
        <p class="description">${listOfRestaurants[index].description}</p>
        <div class="feedbacks">
            <h3>Avis</h3>
            <div class="feedback-cards">
                <p class="feedback">${listOfRestaurants[index].feedback}<br></p>
            </div>
        </div>
        <div class="location">
        <iframe src="${listOfRestaurants[index].map}" width="250" height="112" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    containerPage.appendChild(page2);
}

// Boucle for let.
// for (let index = 0; index < listOfRestaurants.length; index++) {
//     createPage (index);
// }

createPage(4);