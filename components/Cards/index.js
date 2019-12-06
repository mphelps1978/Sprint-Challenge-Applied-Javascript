// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint = document.querySelector('.cards-container');

function createArticleCard(data) {
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    authorImg = document.createElement('div'),
    authorImage = document.createElement('img'),
    authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  authorImg.classList.add('author');
  authorImage.classList.add('img-container');

  headline.textContent = data.headline;
  authorImage.src = data.authorPhoto;
  authorName.textContent = `By ${data.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(authorImg);
  authorImg.appendChild(authorImage);
  author.appendChild(authorName);

  entryPoint.appendChild(card);

  return card;
}

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // const articleTopics = Object.entries(response.data.articles);
    //console.log('articleTopics:', articleTopics);
    for (let [key, value] of Object.entries(response.data.articles)) {
      //console.log(`${value}`);

      value.forEach(items => {
        createArticleCard(items);
      });
    }

    // articleTopics.forEach(value => {
    //   const article = Object.values(value);
    //console.log(article);
  })

  .catch(error => {
    console.log('Something went wrong.', error);
  });
