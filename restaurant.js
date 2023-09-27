const restaurants = document.querySelector(".grid");

const listOfRestaurants = [
    {
        name: "Flam's",
        picture: "img/filtre.png",
        type: "Flammekuche",
        note: "4.7",
        price: "$"
    },
    {
        name: "McDonald's",
        picture: "https://placekitten.com/200/139",
        type: "Sur le pouce",
        note: "3.4",
        price: "$",
    },
    {
        name: "Bistrot régent",
        picture: "https://placekitten.com/200/90",
        type: "Français",
        note: "4.1",
        price: "$$",
    },
    {
        name: "Eat Salad",
        picture: "https://placekitten.com/200/140",
        type: "Salade",
        note: "4.2",
        price: "$",
    },
    {
        name: "Le foodtruck bio",
        picture: "https://placekitten.com/200/141",
        type: "Restauration rapide",
        note: "3.8",
        price: "$",
    }
];

function createRestaurants (title, imageUrl, type, reward, price) {
    const restaurant = document.createElement("div");
    restaurant.classList.add("restaurant-card");
    restaurants.appendChild(restaurant);

    const restaurantPicture = document.createElement("img");
    restaurantPicture.src = imageUrl;
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