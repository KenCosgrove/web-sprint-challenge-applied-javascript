// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user
// clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from "axios";
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    const bootstrap = response.data.articles.bootstrap;
    const javascript = response.data.articles.javascript;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const tech = response.data.articles.technology;
    bootstrap.forEach((item) => {
      cardMaker(item);
    });
    javascript.forEach((item) => {
      cardMaker(item);
    });
    jquery.forEach((item) => {
      cardMaker(item);
    });
    node.forEach((item) => {
      cardMaker(item);
    });
    tech.forEach((item) => {
      cardMaker(item);
    });
  })
  .catch((err) => {
    console.log("error");
  });
function cardMaker(article) {
  // instantiating the elements
  const cardsContainer = document.querySelector(".cards-container");
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  // setting class names, attributes and text
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");
  headline.textContent = article.headline;
  image.src = article.authorPhoto;
  name.textContent = `By ${article.authorName}`;
  // creating the hierarchy
  cardsContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(name);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  // adding some interactivity
  card.addEventListener("click", () => {
    console.log(headline.textContent);
  });
  // return!
  return card;
}
