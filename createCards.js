const restaurants = document.querySelector(".grid");

const listOfRestaurants = [
    {
        name: "Flam's",
        picture: "img/restaurants/flams.jpg",
        type: "Flammekuche",
        filter : "Européen",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Européen",
        description: "",
        map: "",
        feedback: "",
        id: 1,
    },
    {
        name: "McDonald's",
        picture: "img/restaurants/mcdo.jpg",
        type: "Sur le pouce",
        filter:"Sur le pouce",
        note: "★★★ 3.4",
        price: "$",
        filterType: "Sur le pouce",
        description: "Chaîne classique de restauration rapide établie de longue date connue pour ses burgers et ses frites.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.619432866565!2d-0.5675503237582161!3d44.870041771070454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55285fa11b5623%3A0x804453834483b6bd!2sMcDonald&#39;s%20Port%20Autonome!5e0!3m2!1sfr!2sfr!4v1695993503644!5m2!1sfr!2sfr",
        feedback: ["Marion Nouvite : \"Accueil très chaleureux, lieu très propre, nouvelle vaisselle écologique, ballond animaliers offerts aux enfants ainsi que des sachets de bonbons! Du jamais vu!\""],
        id: 2,
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot-regent.jpg",
        type: "Français",
        filter: "Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "",
        feedback: "",
        id: 3,
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat-salad.jpg",
        type: "Salade",
        filter: "Sur le pouce",
        note: "★★★★ 4.2",
        price: "$",
        filterType: "Sur le pouce",
        description: "Créez la salade de vos envies chez Eat Salad! Nous composons sous vos yeux votre salade sur-mesure, servie froide ou chaude, avec nos ingrédients frais et nos sauces faites maison. Eat Salad satisfait aussi toutes vos envies sucrées grâce à nos jus maison et desserts. Sur place, à emporter ou en livraison, votre repas est servi rapidement et avec le sourire chez Eat Salad.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4110264353674!2d-0.5597578414046314!3d44.863897760445205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288c3ebd5fd3%3A0xca0fc2319444168e!2sEat%20Salad!5e0!3m2!1sfr!2sfr!4v1695993849704!5m2!1sfr!2sfr",
        feedback:
        ["Véronique Frémond-Kahlouche : \"Très agréable restaurant où l'accueil est particulièrement chalereux ! On y mange de très bonnes choses de grande qualité et fraîcheur ! J'adore y aller ! Je recommande chaudement.\"",
        "Christian Delégume : \"Une équipe jeune, sympathique et accueillante. Le concept est simple et redoutablement efficace. Pour ne rien gâcher c'est hyper bon. Si vous hésitez, vous avez tort. Allez-y et régalez vous. C'est aussi simple que cela.\""],
        id: 4,
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        filter:"Sur le pouce",
        note: "★★★ 3.8",
        price: "$",
        filterType: "Sur le pouce",
        description: "Le foodtruck bio propose des crêpes et des galettes préparées avec des ingrédients biologiques de qualité. C'est une option de restauration rapide saine et respectueuse de l'environnement.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.5997177715944!2d-0.5625698230891266!3d44.87044307107046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ec2456ab0b%3A0x69bdfff0571c7115!2sLe%20foodtruck%20bio!5e0!3m2!1sfr!2sfr!4v1695994245877!5m2!1sfr!2sfr",
        feedback: ["Noa de Cajou : \"Très bon moment de détente après la visite de la base sous-marine. \
        Crêpe délicieuse et bière de la région bordelaise.\""],
        id: 5,
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au-bureau.jpg",
        type: "Bistrot",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
        description: "",
        map: "",
        feedback: "",
        id: 6,
    },
    {
        name: "Papadum",
        picture: "img/restaurants/papadum.jpg",
        type: "Indien",
        filter: "Exotique",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Exotique",
        description: "",
        map: "",
        feedback: "",
        id: 7,
    },
    {
        name: "Bistrot Spinoza",
        picture: "img/restaurants/spinoza.png",
        type: "Bistrot",
        filter:"Français",
        note: "★★★★ 4.7",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "",
        feedback: "",
        id: 8,
    },
    {
        name: "Su and Shi",
        picture: "img/restaurants/sushi.jpg",
        type: "Japonais",
        filter:"Exotique",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Exotique",
        description: "Votre restaurant SuAndShi Bordeaux vous accueille tous les jours de la semaine. Nos produits sont sélectionnés avec soins pour vous offrir la meilleure expérience gustative possible (Saumon Label Ecosse et tant d'autres). Nos makis, sushis, chirachis, sashimis, california rolls, poke bowls ou encore Ice Rolls sont préparés chaque jour et à déguster sur place ou en livraison.",
        map: "",
        feedback: ["ThorPain : \*Très bon palts et carte avec du choix. Pas mal de végétarien. Serveur sympatique et aux petits soins.\"",
        "AlainTerrieur : \"Découvert après une sortie au bassin des lumières, ce petit restaurant est superbe avec une décoration moderne et épuré.\"",
        "CarryBou : \"Exellente expérience comme à chaque fois que l'on commande chez vous <3.\""],
        id: 9,
    },
    {
        name: "La dame",
        picture: "img/restaurants/la-dame.png",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.2",
        price: "$",
        filterType: "Ouvert tard",
        description: "",
        map: "",
        feedback: "",
        id: 10,
    },
    {
        name: "Joya",
        picture: "img/restaurants/joya.jpg",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.5",
        price: "$$",
        filterType: "Ouvert tard",
        description: "",
        map: "",
        feedback: "",
        id: 11,
    },
    {
        name: "La côte et l'Arète",
        picture: "img/restaurants/cote-arete.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.5",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "",
        feedback: "",
        id: 12,
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la-terasse.jpg",
        type: "Français",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
        description: "",
        map: "",
        feedback: "",
        id: 13,
    },
    {
        name: "Tripletta",
        picture: "img/restaurants/tripletta.jpg",
        type: "Italien",
        filter:"Européen",
        note: "★★★★ 4.4",
        price: "$$",
        filterType: "Européen",
        description: "",
        map: "",
        feedback: "",
        id: 14,
    },
    {
        name: "Le Jardin Pêcheur",
        picture: "img/restaurants/le-jardin-pecheur.jpg",
        type: "Brasserie",
        filter:"Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "",
        feedback: "",
        id: 15,
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe-maritime.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.0",
        price: "$$",
        filterType: "Français",
        description: "",
        map: "",
        feedback: "",
        id: 16,
    }
];

// Récupérez les éléments de filtres et de restaurants
function createRestaurants (title, imageUrl, type, reward, price, filterType, id) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant-card");
    restaurant.setAttribute("data-filter", filterType);
    restaurant.setAttribute("data-id", id);
    restaurants.appendChild(restaurant);

    const restaurantPicture = document.createElement("img");
    restaurantPicture.src = `${imageUrl}`;
    restaurantPicture.classList.add("restaurant-card-img");
    restaurant.appendChild(restaurantPicture);

    const restaurantContent = document.createElement("div");
    restaurantContent.classList.add("restaurant-card-content");
    restaurant.appendChild(restaurantContent);

    const restaurantHeader = document.createElement("div");
    restaurantHeader.classList.add("restaurant-card-header");
    restaurantContent.appendChild(restaurantHeader);

    const restaurantTitle = document.createElement("h3");
    restaurantTitle.textContent = title;
    restaurantHeader.appendChild(restaurantTitle);

    const restaurantType = document.createElement("p");
    restaurantType.textContent = type;
    restaurantHeader.appendChild(restaurantType);

    const restaurantInfo = document.createElement("div");
    restaurantInfo.classList.add("restaurant-card-info");
    restaurantContent.appendChild(restaurantInfo);

    const restaurantReward = document.createElement("span");
    restaurantReward.classList.add("star");
    restaurantReward.textContent = reward;
    restaurantInfo.appendChild(restaurantReward);

    const restaurantPrice = document.createElement("span");
    restaurantPrice.classList.add("price");
    restaurantPrice.textContent = price;
    restaurantInfo.appendChild(restaurantPrice);

}

for (let index = 0; index < listOfRestaurants.length; index++) {
    const restaurant = listOfRestaurants[index];
    createRestaurants(restaurant.name, restaurant.picture, restaurant.type, restaurant.note, restaurant.price, restaurant.filterType, restaurant.id);
}
const filters = document.querySelector('.chips__choice');
const restaurantCards = document.querySelectorAll('.restaurant-card');

filters.addEventListener('click', (event) => {
    if (event.target.classList.contains('chip')) {
        const filter = event.target.textContent.trim();
        updateURL(filter); // Mettez à jour les query parameters de l'URL
    }
});

// Fonction pour mettre à jour les query parameters de l'URL
function updateURL(filter) {
    const urlParams = new URLSearchParams(window.location.search);

    if (filter === 'Tout') {
        urlParams.delete('filter'); // Supprimez le paramètre 'filter' s'il est égal à 'Tout'
    } else {
        urlParams.set('filter', filter); // Définissez le paramètre 'filter' avec la valeur du filtre
    }

    const newURL = window.location.pathname + '?' + urlParams.toString();
    window.history.pushState({ path: newURL }, '', newURL); // Mettez à jour l'URL sans recharger la page
    filterRestaurants(); // Appelez la fonction de filtrage pour mettre à jour l'affichage
}


function filterRestaurants() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter'); // Obtenez la valeur du paramètre 'filter' de l'URL

    restaurantCards.forEach((card) => {
        const cuisineType = card.getAttribute('data-filter');

        if (filter === null || filter === 'Tout' || cuisineType === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Récupérez l'élément de la grille des restaurants
const restaurantGrid = document.getElementById('restaurant');

// Ajoutez un gestionnaire d'événements pour gérer les clics sur les cartes de restaurant
restaurantGrid.addEventListener('click', (event) => {
    const clickedRestaurantCard = event.target.closest('.restaurant-card');

    if (clickedRestaurantCard) {
        // Récupérez l'ID du restaurant à partir de l'attribut data-id de la carte de restaurant
        const restaurantId = clickedRestaurantCard.getAttribute('data-id');

        // Redirigez l'utilisateur vers la page restaurant.html avec l'ID du restaurant
        window.location.href = `restaurants.html?id=${restaurantId}`;
    }
});

