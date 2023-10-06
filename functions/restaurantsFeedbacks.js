let restaurantsFeedbacks;

if (!localStorage.getItem("userReview")) {
  restaurantsFeedbacks = [
    {
      restaurantId: 0,
      feedback: [
        {
          userName: "Nina Tmosphère",
          userComment:
            "Un des meilleurs restaurant italien à Bordeaux. Habitant à 45 min de votre restaurant, nous sommes à chaque fois impatient de venir y déguster vos plats ...",
          userStar: 5,
        },
        {
          userName: "Fabrice Denice",
          userComment:
            "Bonne cuisine italienne, même si nos plats avaient certains bémols(les pâtes a la truffe manque de goût de truffe et les pâtes aux anchois trop salées.) Les désserts ont rattrapés le repas car très bons (tiramisu sans alcool). Le restaurat propose des portions XL pour les plus gourmand ! ...",
          userStar: 4,
        },
        {
          userName: "Carine Ossérosse",
          userComment:
            "En sortant de la visite des bassins des lumières, à 14h, superbe déjeuner tardif (aucun soucis pour l'arrivée tardive) Accueil sympatique, choix d'une pizza vegetale, de pasta amalfi et de pasta modena : les trois sont succulent et copieux. ...",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 1,
      feedback: [
        {
          userName: "Solène Deverre",
          userComment:
            "12,90€ pour des flammekueches à volonté : un rapport qualité-prix imbattable, surtout qu'elles sont finement délicieuses !! On en a pris 5 tournées à 2 et on s'est vraiment régalées. Bons et réconfortant.",
          userStar: 5,
        },
        {
          userName: "Logan Istan",
          userComment:
            "Excellent rapport qualité prix. Nous avons opté pour la formule à volonté à partager au prix de 17€90 inculant également un dessert au choix. Les serveuses s'adaptent à vos demandes. En effet, nous voulions goûter un maximum de saveurs, ...",
          userStar: 5,
        },
        {
          userName: "Julien Plusun",
          userComment:
            "Un restaurant sympatique dans une lieu calme! La formule à volonté permet de tester plusieurs flamenkuches ce qui est intéressant. Celles que j'ai pu tester, salées comme sucrées, étaient très bonnes ! ...",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 2,
      feedback: [
        {
          userName: "Marion Nouvite",
          userComment:
            "Accueil très chaleureux, lieu très propre, nouvelle vaisselle écologique, ballond animaliers offerts aux enfants ainsi que des sachets de bonbons! Du jamais vu!",
          userStar: 3,
        },
        {
          userName: "Julien Ternette",
          userComment:
            "L'équipière du McDo, Isabelle, à ete absolument gentille et agréable lorsque je suis venu déjeuner ce midi. Service impeccable, prise de commande à la caisse pour me faire gagner du temps, rapide, et puis tout simplementfort aimable !",
          userStar: 5,
        },
        {
          userName: "Malika Siette",
          userComment:
            "Merci à Isabelle pour cet après-midi d'anniversaire. Mon fils ainsi que ses copains ont un super moment pour ses 5 ans. Le seul hic dommage ont voit que le temps c'est de l'argent...",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 3,
      feedback: [
        {
          userName: "Nina Tmosphère",
          userComment:
            "Excellent petit bistrot, à la bonne franquette. Le personnel est très aimable et attentionné.Tout les plats sont simples et bons.Des desserts de qualité.",
          userStar: 4,
        },
        {
          userName: "Jean Peuxplus",
          userComment:
            "Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.",
          userStar: 4,
        },
        {
          userName: "Nassime Depin",
          userComment:
            "Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 4,
      feedback: [
        {
          userName: "Nina Tmosphère",
          userComment:
            "Très agréable restaurant où l'accueil est particulièrement chalereux ! On y mange de très bonnes choses de grande qualité et fraîcheur ! J'adore y aller ! Je recommande chaudement.",
          userStar: 5,
        },
        {
          userName: "Christian Delégume",
          userComment:
            "Une équipe jeune, sympathique et accueillante. Le concept est simple et redoutablement efficace. Pour ne rien gâcher c'est hyper bon. Si vous hésitez, vous avez tort. Allez-y et régalez vous. C'est aussi simple que cela.",
          userStar: 5,
        },
        {
          userName: "Aurore Movie",
          userComment:
            "Très bien! La serveuse était agréable et patiente, et la nourriture fraîche et savoureuse!",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 5,
      feedback: [
        {
          userName: "Noa de Cajou",
          userComment:
            "Très bon moment de détente après la visite de la base sous-marine. Crêpe délicieuse et bière de la région bordelaise.",
          userStar: 5,
        },
        {
          userName: "Silvano Ptique",
          userComment:
            "Bonne adresse pour déguster des crêpes et des galettes avec du fromage ou des douceurs. Agréable moment de détente et de restauration après la visite de la lumière du bassin.",
          userStar: 4,
        },
        {
          userName: "Jean Saigne",
          userComment:
            "Joli kiosque avec des produits bio, un moment de détente en mangeant une crêpe ou des galettes bio avant ou après le musée. Des gens jeunes et gentils.",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 6,
      feedback: [
        {
          userName: "Kevin Othèque",
          userComment:
            "Un très belle endroit avec un personnel sourriant et efficace, j'ai pue prendre le Spicy burger qui était exellent.",
          userStar: 5,
        },
        {
          userName: "Aymeric Oray",
          userComment:
            "Depuis le temps qu'on voulait y venir, c'est fait et pas de regrets et belle découverte. Accueil au top, service des nombreux serveurs, souriant et aggréable.",
          userStar: 5,
        },
        {
          userName: "Hervé Stibule",
          userComment: "Cadre sympa et service attentionné.",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 7,
      feedback: [
        {
          userName: "Benjamin Sanspouce",
          userComment:
            "De passage lors de notre périple a Bordeaux nous avons par hasard croisé cette établissement.",
          userStar: 4,
        },
        {
          userName: "Daren Roi",
          userComment:
            "Nous avons manger copieusement : portion généreuse, aliments frais mais nous regretter le manque de saveur. Le goût est vraiment trop occidentalisé donc quand on aime les épices indiennes on est déçu.",
          userStar: 3,
        },
        {
          userName: "Mélina Ture",
          userComment:
            "Une expérience incroyable, le services était top, le personnel très professionnel mais intime avec ses clients et que dire sur la nouriture ... UN VRAI DÉLICE !",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 8,
      feedback: [
        {
          userName: "Franck Ofolie",
          userComment:
            "Une excellente découverte. Un acceuil professionnel et souriant. Une équipe dynamique, agréable et complice. Le tartare de boeuf était parfait ...",
          userStar: 5,
        },
        {
          userName: "Emma Voiture",
          userComment:
            "Serveurs au top, acceuillants, souriants, serviables, rien à redire ! Très bonne salade César. Dommage pour les profiteroles qui ne sont plus à la carte, nous avions eu la chance de les goûter la fois dernière.",
          userStar: 4,
        },
        {
          userName: "Thomas Moto",
          userComment:
            "Belle et grande salle bien décorée avec une grande terrasse au bord du Bassin à Flots. Le cadre est top! L'acceuil est chaleureux direct en passant la porte. L'équipe est très serviable et polis.",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 9,
      feedback: [
        {
          userName: "Thor Pille",
          userComment:
            "Très bon palts et carte avec du choix. Pas mal de végétarien. Serveur sympatique et aux petits soins.",
          userStar: 5,
        },
        {
          userName: "Alex Terrieur",
          userComment:
            "Découvert après une sortie au bassin des lumières, ce petit restaurant est superbe avec une décoration moderne et épuré.",
          userStar: 4,
        },
        {
          userName: "Carry Bou",
          userComment:
            "Exellente expérience comme à chaque fois que l'on commande chez vous <3.",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 10,
      feedback: [
        {
          userName: "Élodie Manche",
          userComment: "Grosse decéption, beaucoup de monde et 17€ à l'entrée.",
          userStar: 2,
        },
        {
          userName: "Vincent Time",
          userComment:
            "J'avais pas envie parce que je suis une tête de mûle mais Julien nous à tellement accuillis !!!!! Nous étions 30 mais il souviendrons des L5 et nous nous nous souviendrons de lui et du repas. Nous nous sommmes régalé, le repas délicieux, le vin parfait et Julien extra-ordinaire !!!!! Allez-y vite, Merci Julien !",
          userStar: 5,
        },
        {
          userName: "Marie Golade",
          userComment:
            "Je n'ai pas profiter de la nouriture au vue de l'heur. Mais pour la partie club / Boite de nuit je dois dire que j'ai beaucoup aimé l'ambiance, Le cadre, la vue etc ...",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 11,
      feedback: [
        {
          userName: "Siryl DeRay",
          userComment:
            "Ambiance et vue sympa mais carte restaurant ne correspond pas à celle du web ni a l'entrée du restaurant. Bref dommage.",
          userStar: 3,
        },
        {
          userName: "Mathieu Sard",
          userComment: "Très bon repas, ambiance festive après 23h",
          userStar: 4,
        },
        {
          userName: "Quentin Hommevient",
          userComment:
            "Portier misérable. Très désagréable et impolie. Impossible de distinguer si il s'agit d'un client ou un membre du personnel, surtout quand ce dernier discute avec une femme au lieu d'acceuillir ses clients.",
          userStar: 1,
        },
      ],
    },
    {
      restaurantId: 12,
      feedback: [
        {
          userName: "Hassena Teur",
          userComment: "Boris nous a accueilli malgré notre retard conséquent",
          userStar: 4,
        },
        {
          userName: "Logane Iversaire",
          userComment:
            "Venus en famille nous avons partagé un moment autour d un repas a cette adresse, belle découverte pour cette chaine que nous connaissions déjà.",
          userStar: 4,
        },
        {
          userName: "Megane Eutron",
          userComment:
            "Son emplacement a lui seul vous met dans le bain. avec une vue sur la garonne très agréable en période estivale",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 13,
      feedback: [
        {
          userName: "Alain Terrieur",
          userComment:
            "Super resto, bien mangé, partis la peau du ventre bien tendus.",
          userStar: 5,
        },
        {
          userName: "Marie Time",
          userComment:
            "J'étais à coté de la personne peau du ventre bien tendu, je suis d'accord avec lui.",
          userStar: 5,
        },
        {
          userName: "Louis Labrocante",
          userComment:
            "Super rencontre avec Mr terrieur et Mme Time, Je recommande.",
          userStar: 4,
        },
      ],
    },
    {
      restaurantId: 14,
      feedback: [
        {
          userName: "Sandrine Osor",
          userComment:
            "Très bonne pizza, service rapide. Dommage qu'il n'y ait pas plus de plats en dehors des pizza.",
          userStar: 4,
        },
        {
          userName: "Maiwenn Dit",
          userComment:
            "Pizza excellente, très copieuse. Bon service avec une équipe à l'écoute avec de bon conseils et agréable.",
          userStar: 5,
        },
        {
          userName: "Bernadette Tente",
          userComment:
            "Une super découverte ! Déjà un an sue je viens déguster différentes pizza chez vous. Elles sont généreuses et délicieuses. Et la burrata ... Cet été, le soir j'ai apprécié votre rooftop. Autre atout pour ce restaurant en plus de sa cuisine, une ambiance sympathique et un service efficace. Merci à toute l'équipe. C'est un plaisir pour nous. A bientôt.",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 15,
      feedback: [
        {
          userName: "Quentin Toint",
          userComment:
            "Excellent restaurant, de la réservation au dessert ! Personnel très sympathique, très belle mise en avant des capacités du personnel, l'histoire qui se cache derrière ce restaurant est belle et donne envie de voir ce genre de restaurant plus souvent. Cuisine délicieuse mais un peu cher tout de même. Nous n'avons pas pu profiter de la terrasse à l'étage étant fermée,  nous avons cependant passé un agréable moment ! Je recommande !",
          userStar: 4,
        },
        {
          userName: "Celine Dion",
          userComment:
            "Très bon accueil, en salle tous les serveurs sont extrêmement bienveillants souriants et agréables. Les plats étaient très très bons, bien présentés et copieux. Nous avons passé un bon momment dans ce restaurant. Merci ! (Et merci aussi pour la bougie sur le dessert).",
          userStar: 5,
        },
        {
          userName: "Anne Uel",
          userComment:
            "Nous avons réservé au dernier moment pour 8 personnes et avons été reçu avec bienveillance. La cuisine est délicieuse et le service est impeccable et attentionné. Un grand merci à tout le personnel pour ce très bon moment passé dans votre restaurant !",
          userStar: 5,
        },
      ],
    },
    {
      restaurantId: 16,
      feedback: [
        {
          userName: "Celine Debus",
          userComment:
            "Je recommande vivement, un endroit chaleureux, une superbe déco et de très bons plats. Le brunch est fabuleux.",
          userStar: 5,
        },
        {
          userName: "Fabien Etvous",
          userComment:
            "Nous avons passé un très bon moment au Café Maritime. Nous sommes arrivés en fin de service et nous avons été très bien accueillis. Nous avons très bien mangé. C'est un lieu que nous apprécions !!",
          userStar: 4,
        },
        {
          userName: "Vincent Tire",
          userComment:
            "Très bel endroit pour déjeuner. Le menu avec entrée plat dessert à 22 €. Même pour un menu, les repas sont de qualité. Il ne faut pas hésiter",
          userStar: 4,
        },
      ],
    },
  ];
  localStorage.setItem("userReview", JSON.stringify(restaurantsFeedbacks));
} else {
  restaurantsFeedbacks = JSON.parse(localStorage.getItem("userReview"));
}
