const quoteTag = document.querySelector("h1");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");

const data = [

  {quote:"La motivation vous sert de départ. L'habitude vous fait continuer.", author:"" },
  {quote:"Ce n’est pas parce que c’est difficile qu’on n’ose pas le faire, mais parce qu’on n’ose pas le faire que c’est difficile.", author:""},
  {quote:"Beaucoup d’hommes ayant échoué ne savaient pas à quel point ils étaient proches du succès quand ils ont abandonné", author:""},
  {quote:"Le talent ne suffit pas. A part quelques rares exceptions, les meilleurs joueurs sont les plus gros travailleurs.", author:""},
  {quote:"J’attribue mon succès à ceci : je n’ai jamais présenté ou accepté aucune excuse.", author:""},
  {quote:"Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.", author:""},
  {quote:"Faites ce que vous pouvez, là où vous êtes, avec ce que vous avez", author:""},
];
const getQuote = function(){
  // get a random quote
  const randomNumber = Math.floor(Math.random() * data.length);
  const randomQuote = data[randomNumber];
  // and put it in the site
  quoteTag.innerHTML= randomQuote.quote;
  authorTag.innerHTML= randomQuote.author;
}

getQuote()


randomTag.addEventListener("click",function(){
  getQuote();
})