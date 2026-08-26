import { product_cards } from "./product-cards.js";

let count = prompt("Сколько карточек отобразить?");
count = Number(count);

if (!isNaN(count) && count >= 0 && count <= 5) {
    product_cards.length = count; 
} else {
    alert("Вы ввели неверное число");
    product_cards.length = 0;
}

const productcardTemplate = document.getElementById('product-card-template');
const productcardlist = document.getElementById('product-card-list');

product_cards.forEach(productcard => {
  const productcardClone = productcardTemplate.content.cloneNode(true);
  const img = productcardClone.querySelector('.product-card__image');
  img.src = productcard.image;
  img.alt = productcard.name;
  productcardClone.querySelector('.product-card__clue').textContent = productcard.clue
  productcardClone.querySelector('.product-card__name').textContent = productcard.name
  productcardClone.querySelector('.product-card__description').textContent = productcard.description
  productcardClone.querySelector('.product-card__cost').textContent = productcard.cost
  const ingredientItems = productcardClone.querySelectorAll('.product-card__ingridients li');
  ingredientItems.forEach((li, index) => {
    if (productcard.ingridients && productcard.ingridients[index]) {
      li.textContent = productcard.ingridients[index];
    }
  });
  productcardlist.appendChild(productcardClone)
  console.log(productcardlist)
})

// 4

const productcardsArray = product_cards.reduce ((acc,productcard) => {
  const productcardobj = {[productcard.name]: productcard.description}
  acc.push(productcardobj);
  return acc;

}, []);

console.log(productcardsArray)