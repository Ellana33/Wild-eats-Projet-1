
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
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Bistrot régent",
        picture: "img/restaurants/bistrot regent.jpg",
        type: "Français",
        note: "★★★★ 4.1",
        price: "$$",
        description: "",
        map: "<iframe src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8911.689302679866!2d-0.574214647141527!3d44.875591263096524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529691f32330f%3A0x567e9ec74962da1e!2sBistro%20R%C3%A9gent%20Bordeaux%20Lac!5e0!3m2!1sfr!2sfr!4v1695999824304!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>",
        feedback: "Panet : Excellent petit bistrot, à la bonne franquette. Le personnel est très aimable et attentionné.Tout les plats sont simples et bons.Des desserts de qualité." +'\n'+'\
        Logane Fossaert : Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.' +'\n'+'\
        MRgnn : Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale' 
     
    },
    {
        name: "Eat Salad",
        picture: "img/restaurants/eat salad.jpg",
        type: "Salade",
        note: "★★★★ 4.2",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Le foodtruck bio",
        picture: "img/restaurants/foodtruck.jpg",
        type: "Restauration rapide",
        note: "★★★ 3.8",
        price: "$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Le bureau",
        picture: "img/restaurants/au bureau.jpg",
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
        picture: "img/restaurants/la dame.png",
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
        picture: "img/restaurants/cote arete.jpg",
        type: "Français",
        note: "★★★★ 4.5",
        price: "$$",
        description: "",
        map: "",
        feedback: "Hassena : Boris nous a accueilli malgré" +'\n'+'\
        Logane Fossaert : Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.' +'\n'+'\
        MRgnn : Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale'
    },
    {
        name: "La terrasse",
        picture: "img/restaurants/la terasse.jpg",
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
        picture: "img/restaurants/le jardin pecheur.jpg",
        type: "Brasserie",
        note: "★★★★ 4.1",
        price: "$$",
        description: "",
        map: "",
        feedback: "",
    },
    {
        name: "Café Maritime",
        picture: "img/restaurants/cafe maritime.jpg",
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
        <img src="img/restaurants/IT.jpg" alt="Restaurant italien." class="restaurant-card-img" >
        <h3 class="title-restaurant">${listOfRestaurants[index].name}</h3>
        <p class="type-food">Italien</p>
        <span class="star">★★★★ 4.1</span>
        <span class="price">$$</span>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, voluptas? Explicabo, modi perferendis deserunt nisi distinctio fugit velit, quisquam dolore natus porro, corporis officia sequi laborum itaque id perspiciatis eius!</p>
        <div class="feedbacks">
            <div class="feedback-cards">
                <p>★★★  - Alexandre.</p>
            </div>
        </div>
        <div class="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22621.891298839797!2d-0.6003542256835738!3d44.86766060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552985c9603b43%3A0x8950156090451f57!2sIT%20-%20Italian%20Trattoria%20-%20Bassins%20%C3%A0%20Flot%20N%C2%B02%2C%2040%20quai%20Virginie%20H%C3%A9riot%2C%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1695915822268!5m2!1sfr!2sfr" width="250" height="112" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    containerPage.appendChild(page2);
    
}

// Boucle for let.
// for (let index = 0; index < listOfRestaurants.length; index++) {
//     createPage (index);
// }

createPage(2);