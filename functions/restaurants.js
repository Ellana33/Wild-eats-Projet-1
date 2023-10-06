const listOfRestaurants = [
  {
    id: 1,
    name: "Italian Trattoria",
    picture: "img/restaurants/IT.jpg",
    type: "Italien",
    note: 4.1,
    price: "$",
    description:
      "Une trattoria ancrée dans la tradition est généralement dépourvue de menu imprimé, avec un service décontracté, du vin vendu à la carafe plutôt qu'à la bouteille, des prix bas et un menu d'offres modestes mais abondantes qui suivent des recettes régionales et locales plutôt que de la haute cuisine.",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45249.98516144877!2d-0.5863512414017767!3d44.85976888757434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552985c9603b43%3A0x8950156090451f57!2sIT%20-%20Italian%20Trattoria%20-%20Bassins%20%C3%A0%20Flot%20N%C2%B02%2C%2040%20quai%20Virginie%20H%C3%A9riot%2C%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696327610281!5m2!1sen!2sfr",
  },
  {
    id: 2,
    name: "Flam's",
    picture: "img/restaurants/flams.jpg",
    type: "Flammekuche",
    filter: "Européen",
    note: 4.7,
    price: "$",
    filterType: "Européen",
    description:
      "Prenez place dans notre restaurant pour déguster de délicieuses Flammekueches et autres spécialités alsaciennes. Notre Flam’s est situé quai Virginie Hériot, à proximité du cinéma UGC Ciné Cité, à Bassins à Flot Bordeaux.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.774834837901!2d-0.5638900235514509!3d44.86687847107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55294b9110484d%3A0xea0fc62fefae3859!2sFlam&#39;s%20BORDEAUX!5e0!3m2!1sen!2sfr!4v1696328452997!5m2!1sen!2sfr",
  },
  {
    id: 3,
    name: "McDonald's",
    picture: "img/restaurants/mcdo.jpg",
    type: "Sur le pouce",
    filter: "Sur le pouce",
    note: 3.4,
    price: "$",
    filterType: "Sur le pouce",
    description:
      "McDonald's, en intégralité McDonald's Corporation, chaîne de restauration rapide américaine qui est l'une des plus grandes au monde, connue pour ses hamburgers, ses frites et surtout ses Big Mac. C'est l'une des marques les plus performantes de l'histoire du marketing. Le siège social de l'entreprise est à Chicago.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.619432866565!2d-0.5675503237582161!3d44.870041771070454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55285fa11b5623%3A0x804453834483b6bd!2sMcDonald&#39;s%20Port%20Autonome!5e0!3m2!1sfr!2sfr!4v1695993503644!5m2!1sfr!2sfr",
  },
  {
    id: 4,
    name: "Bistrot régent",
    picture: "img/restaurants/bistrot-regent.jpg",
    type: "Français",
    filter: "Français",
    note: 4.1,
    price: "$$",
    filterType: "Français",
    description:
      "Le concept de bistro lancé par Marc Vanhove perpétue cet esprit qui met à l'honneur des plats authentiques, propices à des repas entre amis. Selon Jean-Luc Petitrenaud, critique gastronomique réputé, la cuisine de bistro est “une cuisine de couisse, comme vouée au temps elle est spontanée, vivante",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11309.958886101018!2d-0.5599329378093392!3d44.87268198861629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288c668dd797%3A0xd8cab5c3211b4978!2sLe%20Bistro%20R%C3%A9gent!5e0!3m2!1sfr!2sfr!4v1696501967623!5m2!1sfr!2sfr",
    feedback: [
      "Panet Depoisson :",
      "Excellent petit bistrot, à la bonne franquette. Le personnel est très aimable et attentionné.Tout les plats sont simples et bons.Des desserts de qualité.",
      "Jean Peuxplus :",
      "Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.",
      "Nassime Depin :",
      "Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale",
    ],
  },
  {
    id: 5,
    name: "Eat Salad",
    picture: "img/restaurants/eat-salad.jpg",
    type: "Salade",
    filter: "Sur le pouce",
    note: 4.2,
    price: "$",
    filterType: "Sur le pouce",
    description:
      "Créez la salade de vos envies chez Eat Salad! Nous composons sous vos yeux votre salade sur-mesure, servie froide ou chaude, avec nos ingrédients frais et nos sauces faites maison. Eat Salad satisfait aussi toutes vos envies sucrées grâce à nos jus maison et desserts. Sur place, à emporter ou en livraison, votre repas est servi rapidement et avec le sourire chez Eat Salad.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4110264353674!2d-0.5597578414046314!3d44.863897760445205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288c3ebd5fd3%3A0xca0fc2319444168e!2sEat%20Salad!5e0!3m2!1sfr!2sfr!4v1695993849704!5m2!1sfr!2sfr",
  },
  {
    id: 6,
    name: "Le foodtruck bio",
    picture: "img/restaurants/foodtruck.jpg",
    type: "Restauration rapide",
    filter: "Sur le pouce",
    note: 3.8,
    price: "$",
    filterType: "Sur le pouce",
    description:
      "Le foodtruck bio propose des crêpes et des galettes préparées avec des ingrédients biologiques de qualité. C'est une option de restauration rapide saine et respectueuse de l'environnement.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.5997177715944!2d-0.5625698230891266!3d44.87044307107046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ec2456ab0b%3A0x69bdfff0571c7115!2sLe%20foodtruck%20bio!5e0!3m2!1sfr!2sfr!4v1695994245877!5m2!1sfr!2sfr",
  },
  {
    id: 7,
    name: "Le bureau",
    picture: "img/restaurants/au-bureau.jpg",
    type: "Bistrot",
    filter: "Ouvert tard",
    note: 4.3,
    price: "$$",
    filterType: "Ouvert tard",
    description:
      "Rendez-vous dans nos pubs authentiques et unique ... Veritable lieu de vie au décors Anglo-saxons. Au bureau rythme votre journée du matin jusqu'au soir : Repas entre amis, apéros, sport, musique, danse ... Vous allez aimer passer du temps au Bureau.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180999.38014211395!2d-0.7099575724938272!3d44.85994718614654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529fdfc590523%3A0xc7bcff4311836b92!2sAu%20Bureau%20Bordeaux%20Bacalan!5e0!3m2!1sen!2sfr!4v1696341520651!5m2!1sen!2sfr",
  },
  {
    id: 8,
    name: "Papadum",
    picture: "img/restaurants/papadum.jpg",
    type: "Indien",
    filter: "Exotique",
    note: 4.7,
    price: "$",
    filterType: "Exotique",
    description:
      "L'Inde est un pays riche de diversité tant au niveau de sa population, de ses paysages que de sa cuisine. Chez Papadum, nous souhaitons vous faire voyager dans ce pays avec notre cuisine d'inspiration indienne. Nos recettes ont été élaborées afin de se marier au mieux aux produits localement disponible. Chez nous, vous trouverez aussi bien des plats en sauce traditionnels, des grillades marinées, toute sorte de riz, de naans ainsi que des 'naan-burger' pour les plus curieux d'entre vous. Alors, asseyez-vous et profitez de cette expérience de la street food indienne à 2 pas de chez vous. Afin de satisfaire notre clientèle, tous nos plats sont halal et nous proposons bien entendu des plats végétariens.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22625.11599445518!2d-0.6298349353996984!3d44.859454818814505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529ce312979b3%3A0xcd498169a87cd78e!2sPapadum%20Indian%20Food!5e0!3m2!1sen!2sfr!4v1696341566165!5m2!1sen!2sfr",
  },
  {
    id: 9,
    name: "Bistrot Spinoza",
    picture: "img/restaurants/spinoza.png",
    type: "Bistrot",
    filter: "Français",
    note: 4.7,
    price: "$$",
    filterType: "Français",
    description:
      "BISTROT CHIC à la cuisine traditionnelle et inventive,axée sur 'le bon et bien-manger', dans un esprit qualitatif et raisonné. Notre démarche se base sur des valeurs qui ont du sens, en travaillant des produits dénichés chez des fournisseurs et producteurs locaux, Français, labellisés ou Bio. Les viticulteurs seront également a l'honneur, une large sélection de vin composé de coup de coeur, d'incontournable et de domaines confidentiels. UNE DEMARCHE ECO GLOBALE Parce que les valeurs d'un restaurant ne peuvent se résumer qu'à la qualité des produits, celles du Bistrot Spinoza se reflète également à travers toute son activité : des matières premières jusqu'au tri des déchets, en passant par des équipements en majorité fabriqués en France.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.8525336943735!2d-0.563612608758037!3d44.8652967986152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552987b3a4b889%3A0xe0b6219777fe72af!2sBISTROT%20SPINOZA!5e0!3m2!1sen!2sfr!4v1696341613677!5m2!1sen!2sfr",
  },
  {
    id: 10,
    name: "Su and Shi",
    picture: "img/restaurants/sushi.jpg",
    type: "Japonais",
    filter: "Exotique",
    note: 4.1,
    price: "$$",
    filterType: "Exotique",
    description:
      "Votre restaurant SuAndShi Bordeaux vous accueille tous les jours de la semaine. Nos produits sont sélectionnés avec soins pour vous offrir la meilleure expérience gustative possible (Saumon Label Ecosse et tant d'autres). Nos makis, sushis, chirachis, sashimis, california rolls, poke bowls ou encore Ice Rolls sont préparés chaque jour et à déguster sur place ou en livraison.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9041832384396!2d-0.5607889233158913!3d44.86424537326768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288fd41e8377%3A0xaaa739008bb5c88!2sSuAndShi%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341673783!5m2!1sen!2sfr",
  },
  {
    id: 11,
    name: "La dame",
    picture: "img/restaurants/la-dame.png",
    type: "Nocturne",
    filter: "Ouvert tard",
    note: 3.2,
    price: "$",
    filterType: "Ouvert tard",
    description:
      "Restaurant / Discothèque branchée sur un bateau proposant des plats internationaux et des cocktails, avec des DJ Bordelais.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.941746021337!2d-0.5605893087584819!3d44.863480698735145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288dc4b71ccb%3A0x820075d6645fe650!2sLA%20DAME%20Food%26Club!5e0!3m2!1sen!2sfr!4v1696341709812!5m2!1sen!2sfr",
  },
  {
    id: 12,
    name: "Joya",
    picture: "img/restaurants/joya.jpg",
    type: "Nocturne",
    filter: "Ouvert tard",
    note: 3.5,
    price: "$$",
    filterType: "Ouvert tard",
    description:
      "Bienvenue au 'Joya' - Votre Destination Complète pour une Expérience Inoubliable ! 97 Quai Lawton Cuisine Exquise : De midi à minuit, découvrez notre menu varié, des plats végétariens aux délices carnés. Nos chefs talentueux préparent des plats avec des ingrédients frais pour satisfaire toutes les papilles. Profitez d'une vue sur la rivière en savourant des plats authentiques. Soirées Vibrantes : À partir de 22h, le 'Joya' devient le lieu incontournable pour faire la fête. Dansez au rythme de nos DJs talentueux, participez à des soirées à thème et créez des souvenirs inoubliables dans une atmosphère sécuritaire et amusante. Sécurité Avant Tout : Nous prenons la sécurité de nos clients très au sérieux.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.439048738226!2d-0.6159332104828618!3d44.83882880680118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552983897d85a5%3A0xc9a237149114cb11!2sJoya%20Bar%20Restaurant!5e0!3m2!1sen!2sfr!4v1696341751139!5m2!1sen!2sfr",
  },
  {
    id: 13,
    name: "La côte et l'Arète",
    picture: "img/restaurants/cote-arete.jpg",
    type: "Français",
    filter: "Français",
    note: 4.5,
    price: "$$",
    filterType: "Français",
    description:
      "Ce restaurant lumineux est spécialisé dans la viande maturée et le poissons. Il dispose d'une belle terrasse avec vue sur le bassin et le base sous marine. Cuisine 100% fait maison avec des produits frais.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.355055767264!2d-0.6159332374415232!3d44.83893572020651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529f9c0f062e5%3A0xd91be9c303c78e2c!2sLa%20C%C3%B4te%20et%20l&#39;Ar%C3%AAte%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341788892!5m2!1sen!2sfr",
    feedback: [
      "Hassena Teur :",
      "Boris nous a accueilli malgré notre retard conséquent",
      "Logane Iversaire:",
      "Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.",
      "Megane Eutron:",
      "Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale",
    ],
  },
  {
    id: 14,
    name: "La terrasse",
    picture: "img/restaurants/la-terasse.jpg",
    type: "Français",
    filter: "Ouvert tard",
    note: "★★★★ 4.3",
    price: "$$",
    filterType: "Ouvert tard",
    description:
      "Envie d'un repas succulent français ou espagnol  ? Vous êtes à la bonne adresse. Au « La Terrasse By Pop Art », nous vous servons des recettes succulentes dans une ambiance chaleureuse. nn Nous proposons également des spécialités halal au menu afin de vous garantir une diversité de goûts. Nous voulons vous aider à faire attention à votre santé et vous sensibiliser à l'importance d'une alimentation saine et gourmande.nn Notre magnifique espace extérieur est particulièrement accueillant par temps ensoleillé.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45266.2710628164!2d-0.6159332644001336!3d44.83904263338562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288a64012f5d%3A0x9edfab67797417e9!2sLa%20Terrasse!5e0!3m2!1sen!2sfr!4v1696341832400!5m2!1sen!2sfr",
  },
  {
    id: 15,
    name: "Tripletta",
    picture: "img/restaurants/tripletta.jpg",
    type: "Italien",
    filter: "Européen",
    note: "★★★★ 4.4",
    price: "$$",
    filterType: "Européen",
    description:
      "Tripletta c'est la vie d'un quartier avec supplément d'âme, c'est ce four qui jamais ne s'éteint, cette pizza Napolitaine au feu de bois rouge ou blanche toujours parfaitement cuite, ces ingrédients d'exception nés et produits en Italie. Ouverte à Belleville par les deux compères de Triplettes en 2016, la première adresse de Tripletta se décline désormais à Paris, Bordeaux, Versailles, Toulouse et Marseille, au travers de huit pizzerias napolitaines. Mais, plus encore qu'une bande de copains, Tripletta est une famiglia qui insuffle sa bonhommie et son amour du produit, dans ses restaurants, comme dans ses recettes. Que vous les preniez en livraison, à emporter ou sur place, les pizzas artisanales de Tripletta sauront combler vos papilles. Pizza végétarienne ou non, il y en a pour tous les goûts dans ces restaurants italiens Avanti amici.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.777164079108!2d-0.5776765061683115!3d44.85973735364169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5529931eaebc2f%3A0x2fd493fea28fbe3f!2sTripletta%20Chartrons!5e0!3m2!1sen!2sfr!4v1696341884179!5m2!1sen!2sfr",
  },
  {
    id: 16,
    name: "Le Jardin Pêcheur",
    picture: "img/restaurants/le-jardin-pecheur.jpg",
    type: "Brasserie",
    filter: "Français",
    note: "★★★★ 4.1",
    price: "$$",
    filterType: "Français",
    description:
      "BAR-BRASSERIE solidaire, nous employons 80% de salariés handicapés. Nous proposons une cuisine maison et de saison : formule du jour le midi en semaine, ardoise et carte variée de viandes, poissons et salades. Terrasses & Rooftop",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.049735528196!2d-0.5568487233160415!3d44.861282273463345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55297cd773cbe9%3A0x42bfb3160d459467!2sLe%20Jardin%20P%C3%AAcheur!5e0!3m2!1sen!2sfr!4v1696341936589!5m2!1sen!2sfr",
  },
  {
    id: 17,
    name: "Café Maritime",
    picture: "img/restaurants/cafe-maritime.jpg",
    type: "Français",
    filter: "Français",
    note: "★★★★ 4.0",
    price: "$$",
    filterType: "Français",
    description:
      "Toute l'équipe du Café Maritime de Bordeaux vous attend quai Armand Lalande, 33000 Bordeaux. Situé au cœur des Bassins à flots, notre chef Christophe MARIE-THEREZE vous propose une cuisine française, créative et authentique évoluant au gré des saisons. Doté de différents espaces, c'est également l'occasion de se détendre l'après-midi en sirotant nos cocktails réalisés par notre barman. Nous vous donnons également rendez-vous chaque dimanche pour notre brunch à volonté. Restaurant de grande capacité au style loft chic, nous pouvons réaliser vos divers évènements que ce soit en salle privative, en mezzanine, au rez-de-chaussée ou en terrasse. N'hésitez pas à nous contacter, notre équipe sera ravie de vous établir un devis personnalisé.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9459079208086!2d-0.558257423315945!3d44.863395973323705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55288e18eeb965%3A0x928003ce2518a8e4!2sCaf%C3%A9%20Maritime%20-%20Bordeaux!5e0!3m2!1sen!2sfr!4v1696341973038!5m2!1sen!2sfr",
  },
];

const createPage = (index) => {
  // Création et ajout du titre dans la balise h3 .title-restaurant
  const containerPage = document.querySelector("#body-scripted");
  const restaurantPage = document.createElement("div");
  const selectedRestaurant = listOfRestaurants.find(
    (restaurant) => restaurantId === index
  );

  if (selectedRestaurant) {
    restaurantPage.innerHTML = `
            <div class="block-img">
                <img src=${listOfRestaurants[index].picture} alt="Restaurant italien." class="restaurant-card-img" >
            </div>
            <div class="text-restaurant">
                <h3 class="title-restaurant">${listOfRestaurants[index].name}</h3>
                <p class="type-food">${listOfRestaurants[index].type}</p>
            <div class="note-price">
                <span class="star star-container"></span>
                <span class="price">${listOfRestaurants[index].price}</span>
            </div>
                <p class="description">${listOfRestaurants[index].description}</p>
                <div class="location">
                <iframe src="${listOfRestaurants[index].map}" width="250" height="112" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="feedbacks">
                <h3>Avis</h3>
                <div class="feedback-cards">
                <div class="feedback-content"></div>
                </div>
                <form id="write-review">
                    <input id="userReview" class="textContent" placeholder="Prénom, Nom *" type="text">
                    <textarea id="contentReview" class="textContent" placeholder="Rédigez votre commentaire ... *" rows="5"></textarea>
                    <div class="star-block">
                        <!--<p class="text-star-select">Combien d'étoile souhaitez-vous ajouter ?</p>-->
                        <select class="star-select">
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>
                    </div>
                    <p id="errorMsg"></p>
                    <p id="approuvMsg"></p>
                    <input id="btnReview" type="submit" value="Valider">
                </form>
            </div>
        `;
  }
  containerPage.appendChild(restaurantPage);
};

const addReviews = (restaurantId) => {
  const reviewsContainer = document.querySelector(".feedback-content");

  restaurantReviews.feedback.forEach((feedback) => {
    reviewsContainer.innerHTML += `
      <span class="yellow-stars">${showStars(feedback.userStar)} ${
      feedback.userName
    } :</span>
      <p class="feedback">${feedback.userComment}</p>
    `;
  });
};

// Récupérez l'élément où vous afficherez les détails du restaurant
const restaurantDetailsContainer = document.querySelector("#body-scripted");

// Récupérez l'ID du paramètre de requête dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get("id");
const restaurantReviews = restaurantsFeedbacks.find(
  (feedbacks) => feedbacks.restaurantId === +restaurantId
);

// Utilisez la fonction createPage pour afficher les détails du restaurant en fonction de l'ID
if (restaurantId) {
  createPage(restaurantId);
  addReviews(+restaurantId);
  showAverageStars(+restaurantId);
}
