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
        description: "Prenez place dans notre restaurant pour déguster de délicieuses Flammekueches et autres spécialités alsaciennes.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.774834837901!2d-0.5638900235514509!3d44.86687847107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55294b9110484d%3A0xea0fc62fefae3859!2sFlam&#39;s%20BORDEAUX!5e0!3m2!1sen!2sfr!4v1696328452997!5m2!1sen!2sfr",
        feedback: ["Solène l'abeille : \"12,90€ pour des flammekueches à volonté : un rapport qualité-prix imbattable, surtout qu'elles sont 
        finement délicieuses !! On en a pris 5 tournées à 2 et on s'est vraiment régalées. Bons et réconfortant.\",

        "MarieTime : \"J'étais à coté de la personne peau du ventre bien tendu, je suis d'accord avec lui.\"",
        "LouisLabrocante : \"Super rencontre avec Mr terrieur et Mme Time, Je recommande.\""],
    },
    {
        name: "McDonald's",
        picture: "img/restaurants/mcdo.jpg",
        type: "Sur le pouce",
        filter:"Sur le pouce",
        note: "★★★ 3.4",
        price: "$",
        filterType: "Sur le pouce",
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot regent.jpg",
        type: "Français",
        filter: "Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat salad.jpg",
        type: "Salade",
        filter: "Sur le pouce",
        note: "★★★★ 4.2",
        price: "$",
        filterType: "Sur le pouce",
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        filter:"Sur le pouce",
        note: "★★★ 3.8",
        price: "$",
        filterType: "Sur le pouce",
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au bureau.jpg",
        type: "Bistrot",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
    },
    {
        name: "Papadum",
        picture: "img/restaurants/papadum.jpg",
        type: "Indien",
        filter: "Exotique",
        note: "★★★★ 4.7",
        price: "$",
        filterType: "Exotique",
    },
    {
        name: "Bistrot Spinoza",
        picture: "img/restaurants/spinoza.png",
        type: "Bistrot",
        filter:"Français",
        note: "★★★★ 4.7",
        price: "$$",
        filterType: "Français",
    },
    {
        name: "Su and Shi",
        picture: "img/restaurants/sushi.jpg",
        type: "Japonais",
        filter:"Exotique",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Exotique",
    },
    {
        name: "La dame",
        picture: "img/restaurants/la dame.png",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.2",
        price: "$",
        filterType: "Ouvert tard",
    },
    {
        name: "Joya",
        picture: "img/restaurants/joya.jpg",
        type: "Nocturne",
        filter:"Ouvert tard",
        note: "★★★ 3.5",
        price: "$$",
        filterType: "Ouvert tard",
    },
    {
        name: "La côte et l'Arète",
        picture: "img/restaurants/cote arete.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.5",
        price: "$$",
        filterType: "Français",
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la terasse.jpg",
        type: "Français",
        filter:"Ouvert tard",
        note: "★★★★ 4.3",
        price: "$$",
        filterType: "Ouvert tard",
    },
    {
        name: "Tripletta",
        picture: "img/restaurants/tripletta.jpg",
        type: "Italien",
        filter:"Européen",
        note: "★★★★ 4.4",
        price: "$$",
        filterType: "Européen",
    },
    {
        name: "Le Jardin Pêcheur",
        picture: "img/restaurants/le jardin pecheur.jpg",
        type: "Brasserie",
        filter:"Français",
        note: "★★★★ 4.1",
        price: "$$",
        filterType: "Français",
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe maritime.jpg",
        type: "Français",
        filter:"Français",
        note: "★★★★ 4.0",
        price: "$$",
        filterType: "Français",
    }
];

function createRestaurants (title, imageUrl, type, reward, price, filterType) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant-card");
    restaurant.setAttribute("data-filter", filterType);
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
    createRestaurants(restaurant.name, restaurant.picture, restaurant.type, restaurant.note, restaurant.price, restaurant.filterType);
}

// Récupérez les éléments de filtres et de restaurants
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
