const questions = [
  {
    // Question 0
    question: "Quel genre de cadeau préfères-tu?",
    answers: [
      { text: "Quelque chose de matériel", nextQuestion: 1 },
      { text: "Une activité", nextQuestion: 26 },
      { text: "Pas de cadeau Merci", nextQuestion: 3 }
    ]
  },
  {
    // Question 1
    question: "D'accord, dans quel genre??",
    answers: [
      { text: "Quelque chose que je puisse porter", nextQuestion: 2 },
      { text: "Quelque chose de décoratif", nextQuestion: 18 },
      { text: "Quelque chose d'utile", nextQuestion:  12}
    ]
  },
  {
    // Question 2
    question: "Tu fais confiance aux goûts de Roul?",
    answers: [
      { text: "Oui, il a de très bons goûts", nextQuestion: 3 },
      { text: "Je risque, après tout je peux toujours le donner aux bonnes oeuvres", nextQuestion: 8 },
      { text: "Pas du tout! J'ai changé d'avis", nextQuestion: 0 }
    ]
  },
  
  {
    // Question 3
    question: "Tu as raison de lui faire confiance! Il a très bon goût. Tu préfères...",
    answers: [
      { text: "Un habit tendance", nextQuestion: 4 },
      { text: "Un bijou trop stylé", nextQuestion: 6 },
      { text: "Ni l'un ni l'autre", nextQuestion: 0 },
    ]
  },

  {
    // Question 4
    question: "Parfait! Bon ben là j'ai pas d'idées tout de suite mais je vais réfléchir et te trouver le cadau bientôt. Merci de patienter",
    answers: [
      { text: "Je suis satisfaite! Merci c'était trop cool!", nextQuestion: 5},
      { text: "Non bof je préférerais autre chose", nextQuestion: 0 },
    ]
  },

  {
    // Question 5
    question: "Donne le code 1111 à Roul sinon recommence le quiz. Je te conseille de refaire le quiz car Roul n'a aucune idée de cadeau pour les habits",
    answers: [
      { text: "Recommencer", nextQuestion: 0 },
    ]
  },

  {
    // Question 6
    question: "Cadeau trouvé sur un des marchés de Londres, malheureusement Roul, étant sûr que tu ne lui ferais pas confiance pour le bijou, ne l'a pas acheté. Merci de patienter jusqu'à cet été",
    answers: [
      { text: "Je patiente et garde ce cadeau", nextQuestion: 7 },
      { text: "Je veux un autre cadeau", nextQuestion: 0},

    ]
  },

  {
    // Question 7
    question: "Merci de patienter. Donne le code 1112 à Roul",
   
  },

  {
    // Question 8
    question: "D'accord, sache que Roul a pris note de ta remarque blessante et ton choix se limite maintenant à...",
    answers: [
      { text: "Un habit très moche car il va pas se fouler après ce que tu as dit", nextQuestion: 9 },
      { text: "Un bijou moche du genre ceux qu'on trouve sur les foires", nextQuestion: 11 },
      { text: "Je change d'avis il a beaucoup de goût", nextQuestion: 3 },
      { text: "Je ne change pas d'avis mais préfère changer d'idée de cadeau", nextQuestion: 0 },
    ]
  },

  {
    // Question 9
    question: "Roul n'a pas prévu que tu choisirais ça mais t'inquiète, il va demander un vieil habit moche à Van. Patiente le temps qu'il l'emballe",
    answers: [
      { text: "ça me va, même les habits les plus moches de Van sont trop stylé", nextQuestion: 10 },
      { text: "Quel horreur, je désir un autre cadeau", nextQuestion: 0 },

    ]
  },

  {
    // Question 10
    question: "Trop bien cadeau facile et économique, donne le code 1121 à Roul",
    answers: [
    ]
  },

  {
    // Question 11
    question: "Roul va aller t'acheter un collier en Toc tout pourri à la prochaine foire, tu peux lui donner le code 1122",
    answers: [
      { text: "Pitié! non je veux autre chose", nextQuestion: 0 },
    ]
  },

  {
    // Question 12
    question: "Quelque chose d'utile dans le genre?",
    answers: [
      { text: "Un habit utile", nextQuestion: 13 },
      { text: "Utile mais pas forcément joli", nextQuestion: 16 },
    ]
  },

  {
    // Question 13
    question: "Un habit utile, ça se rapproche des cadeaux du genre écharpe ou pull en laine",
    answers: [
      { text: "Oui ça me va très bien", nextQuestion: 14 },
      { text: "Pas terrible mais j'en ai marre du Quiz", nextQuestion: 15},
      { text: "C'est trop naze comme cadeau", nextQuestion: 0 },
    ]
  },

  {
    // Question 14
    question: "Tant mieux c'est pas trop dûr comme cadeau, tu l'auras dans la semaine. Donne le code 1211 à Roul",
  },

  {
    // Question 15
    question: "D'accord tu auras pas de cadeau alors!",
    answers: [
      { text: "Non, excuse moi! C'est génial ce quiz!", nextQuestion: 0 },
    ]
  },

  {
    // Question 16
    question: "C'est facile tu vas recevoir pleins de trucs moches mais très utile dans les jours à venir",
    answers: [
      { text: "Super! Je me réjouis!", nextQuestion: 17 },
      { text: "J'ai changé d'avis", nextQuestion: 0 },
    ]
  },

  {
    // Question 17
    question: "Donne le code 1222 à Roul",
    
  },

  {
    // Question 18
    question: "Tu fais confiance aux goûts de Roul?",
    answers: [
      { text: "Oui, il a de très bons goûts", nextQuestion: 19 },
      { text: "Pas du tout! J'ai changé d'avis", nextQuestion: 0 }
    ]
  },

  {
    // Question 19
    question: "Merci! Et tu fais bien, Roul a de très bonnes idées. Tu aimerais un cadeau...",
    answers: [
      { text: "Pas personalisé mais très beau et utile", nextQuestion: 20 },
      { text: "Personalisé et utile mais périssable", nextQuestion: 24 },
      { text: "Personalisé, pas périssable mais pas utile", nextQuestion: 22 },
    ]
  },

  {
    // Question 20
    question: "Tu vas donc recevoir un beau cadeau utile et issu d'un magasin antique deuxième main. Malheureusment pour des raisons logistiques, Roul n'a pas pu le ramener de Londres. Il faut attendre cet été",
    answers: [
      { text: "Pas de soucis, je patiente", nextQuestion: 21 },
      { text: "Non je veux un autre cadeau", nextQuestion: 0 },
    ]
  },

  {
    // Question 21
    question: "Donne le code 1311 à Roul.",
  },

  {
    // Question 22
    question: "Tu vas recevoir ce cadeau très spécifique dans le courant de la première semaine de janvier",
    answers: [
      { text: "Trop cool! Je me réjouis", nextQuestion: 23 },
      { text: "J'ai changé d'avis", nextQuestion: 0 },
    ]
  },

  {
    // Question 23
    question: "Donne le code 1322 à Roul",
 
  },

  {
    // Question 24
    question: "Tu vas recevoir ce cadeau très spécifique dans le courant de la première semaine de janvier",
    answers: [
      { text: "Trop cool! Je me réjouis", nextQuestion: 25 },
      { text: "J'ai changé d'avis", nextQuestion: 0 },
    ]
  },

  {
    // Question 25
    question: "Donne le code 1333 à Roul",

  },

  {
    // Question 26
    question: "Très bon choix! Quelle genre d'activité?",
    answers: [
      { text: "Solo! J'en ai marre d'être avec des gens tout le temps!", nextQuestion: 27 },
      { text: "Avec Roul car c'est mon frère préféré", nextQuestion: 31 },
    ]
  },

  {
    // Question 27
    question: "Pas trés sociable, mais bon on te pardonne! Tu aimerais une activité...",
    answers: [
      { text: "tranquille et relaxante", nextQuestion: 28 },
      { text: "Instructive", nextQuestion: 29 },
      { text: "Aventure", nextQuestion: 30 },
    ]
  },

  {
    // Question 28
    question: "Un massage dos et une entrée aux bains de Lavey",
    answers: [
      { text: "Ton cadeau", nextQuestion: 0, link: "https://www.bains-lavey.ch/fr/" },
      { text: "Bof, je retente le quiz", nextQuestion: 0 },
    ]
  },

  {
    // Question 29
    question: "Solo et instructive ton cadeau est donc un cours de chant de 90min à Monthey",
    answers: [
      { text: "J'adore", nextQuestion: 0, link: "https://www.singyourcreativity.com/fr/index.html" },
      { text: "Bof, je retente le quiz", nextQuestion: 0  },
    ]
  },

  {
    // Question 30
    question: "Aventure et solo, Une tyrolienne!",
    answers: [
      { text: "Super!", nextQuestion: 0, link: "https://www.charmeyaventures.ch/"},
      { text: "Une tyrolienne en plein hiver faut être taré", nextQuestion: 0 },
    ]
  },

  {
    // Question 31
    question: "Je suis flatté! On va ensemble faire une activité de quel genre?",
    answers: [
      { text: "tranquille et relaxante", nextQuestion: 32 },
      { text: "Instructive", nextQuestion: 33 },
      { text: "Aventure", nextQuestion: 34 },
    ]
  },

  {
    // Question 32
    question: "On va manger ensemble la fondue au restaurant tournat de Leysin",
    answers: [
      { text: "Miam", nextQuestion: 0, link: "https://www.kuklos.ch/wp-content/uploads/2023/07/kuklos-menu-ete-2023.pdf" },
      { text: "Bof, je retente le quiz", nextQuestion: 0 }
    ]
  },

  {
    // Question 33
    question: "On va se faire une super escape room à Lausanne",
    answers: [
      { text: "Super!", nextQuestion: 0, link: "https://www.kubiqroom.ch/mr-fabulous"},
      { text: "Une tyrolienne en plein hiver faut être taré", nextQuestion: 0 },
    ]
  },

  {
    // Question 34
    question: "Tu as le choix entre journée ski ou journée tobogganing",
    answers: [
      { text: "Ski!", nextQuestion: 0, link: "https://www.portesdusoleil.com/"},
      {text: "tobogganing!", nextQuestion: 0, link: "https://www.alpesvaudoises.ch/fr/stories/tobogganing-park-leysin"},
    ]
  },

];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionContainer.innerText = question.question;
  clearAnswerButtons();
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtonsContainer.appendChild(button);
  });
  currentQuestionIndex = question.questionIndex;
}

function clearAnswerButtons() {
  while (answerButtonsContainer.firstChild) {
    answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.link) {
    window.location.href = answer.link;
  } else {
    currentQuestionIndex = answer.nextQuestion;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      finishQuiz();
    }
  }
}

document.getElementById('start-audio-button').addEventListener('click', function() {
  var audio = document.getElementById('background-audio');
  audio.play();
});


startQuiz();