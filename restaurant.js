const restaurants = document.querySelector(".grid");

const listOfRestaurants = [
    {
        name: "Flam's",
        picture: "img/restaurants/flams.jpg",
        type: "Flammekuche",
        note: "4.7",
        price: "$",
    },
    {
        name: "McDonald's",
        picture: "img/restaurants/mcdo.jpg",
        type: "Sur le pouce",
        note: "3.4",
        price: "$",
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot regent.jpg",
        type: "Français",
        note: "4.1",
        price: "$$",
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat salad.jpg",
        type: "Salade",
        note: "4.2",
        price: "$",
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        note: "3.8",
        price: "$",
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au bureau.jpg",
        type: "Bistrot",
        note: "4.3",
        price: "$$",
    },
    {
        name: "Papadum",
        picture: "img/restaurants/papadum.jpg",
        type: "Indien",
        note: "4.7",
        price: "$",
    },
    {
        name: "Bistrot Spinoza",
        picture: "img/restaurants/spinoza.png",
        type: "Bistrot",
        note: "4.7",
        price: "$$",
    },
    {
        name: "Su and Shi",
        picture: "img/restaurants/sushi.jpg",
        type: "Japonais",
        note: "4.1",
        price: "$$",
    },
    {
        name: "La dame",
        picture: "img/restaurants/la dame.png",
        type: "Nocturne",
        note: "3.2",
        price: "$",
    },
    {
        name: "Joya",
        picture: "img/restaurants/joya.jpg",
        type: "Nocturne",
        note: "3.5",
        price: "$$",
    },
    {
        name: "La côte et l'Arète",
        picture: "img/restaurants/cote arete.jpg",
        type: "Français",
        note: "4.5",
        price: "$$",
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la terasse.jpg",
        type: "Français",
        note: "4.3",
        price: "$$",
    },
    {
        name: "Tripletta",
        picture: "img/restaurants/tripletta.jpg",
        type: "Italien",
        note: "4.4",
        price: "$$",
    },
    {
        name: "Le Jardin Pêcheur",
        picture: "img/restaurants/le jardin pecheur.jpg",
        type: "Brasserie",
        note: "4.1",
        price: "$$",
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe maritime.jpg",
        type: "Français",
        note: "4.0",
        price: "$$",
    }
];

function createRestaurants (title, imageUrl, type, reward, price) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant-card");
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
    restaurantReward.textContent = "★ " + reward;
    restaurantInfo.appendChild(restaurantReward);

    const restaurantPrice = document.createElement("span");
    restaurantPrice.classList.add("price");
    restaurantPrice.textContent = price;
    restaurantInfo.appendChild(restaurantPrice);

}

for (let index = 0; index < listOfRestaurants.length; index++) {
    const restaurant = listOfRestaurants[index];
    createRestaurants(restaurant.name, restaurant.picture, restaurant.type, restaurant.note, restaurant.price);
}