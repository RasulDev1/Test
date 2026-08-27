import { product_cards } from "./product-cards.js";

function getCardsCount() {
  let count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
  if (!isNaN(count) && count >= 1 && count <= 5) {
      return count;
  } else {
      alert("Вы ввели неверное число");
      return 0;
  }
}

function cardRengering(cardsArray) {
  const productcardTemplate = document.getElementById('product-card-template');
  const productcardlist = document.getElementById('product-card-list');
  
  productcardlist.innerHTML = '';

  cardsArray.forEach(productcard => {
    const productcardClone = productcardTemplate.content.cloneNode(true);
    const img = productcardClone.querySelector('.product-card__image');
    img.src = productcard.image;
    img.alt = productcard.name;
    
    productcardClone.querySelector('.product-card__clue').textContent = productcard.clue;
    productcardClone.querySelector('.product-card__name').textContent = productcard.name;
    productcardClone.querySelector('.product-card__description').textContent = productcard.description;
    productcardClone.querySelector('.product-card__cost').textContent = productcard.cost;
    
    const ingredientItems = productcardClone.querySelectorAll('.product-card__ingridients li');
    ingredientItems.forEach((li, index) => {
      if (productcard.ingridients && productcard.ingridients[index]) {
        li.textContent = productcard.ingridients[index];
      }
    });
    productcardlist.appendChild(productcardClone);
  });
}

const countToDisplay = getCardsCount();
if (countToDisplay > 0) {
  const slicedCards = product_cards.slice(0, countToDisplay); 
  cardRengering(slicedCards);
}

  //4

const productcardsArray = product_cards.reduce((acc, productcard) => {
  const productcardobj = { [productcard.name]: productcard.description };
  acc.push(productcardobj);
  return acc;
}, []);

console.log(productcardsArray);