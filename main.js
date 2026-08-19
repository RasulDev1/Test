//Покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const changecolorallbutton = document.querySelector('#change-color-all');
const greencolorhash = '#00FF00';
const bluecolorhash = '#0000FF';
const redcolorhash = '#FF0000';
const blackcolorhash = '#000000';

changecolorallbutton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greencolorhash);
const blackcolorhash = '#000000'

changecolorallbutton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = greencolorhash)
});

//Покраска первой карточки
const firstproductcard = document.querySelector('.product-card');
const changecolorfirstbutton = document.querySelector('#change-color-first');

changecolorfirstbutton.addEventListener('click', () => {
  firstproductcard.style.backgroundColor = bluecolorhash;
    firstproductcard.style.backgroundColor = bluecolorhash
});

const opengooglebutton = document.querySelector('#open-google');
opengooglebutton.addEventListener('click', opengoogle)

function opengoogle() {
  const answer = confirm("Вы хотите открыть Google?")
  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    return;
  }
function opengoogle()
{
    const answer = confirm("Вы хотите открыть Google?")

    if(answer === true){
        window.open('https://www.google.com');
    } else {
        return;
    }
}

// Вывод консоль лог
const outputlogbutton = document.querySelector('#output-console-log');

outputlogbutton.addEventListener('click', () => outputConsoleLog('Дз 4'));
outputlogbutton.addEventListener('click',() => outputConsoleLog('Дз 4'));

function outputConsoleLog(message) {
  alert("10")
  console.log(message);
}

// Выведение текста в лог при наведении мыши

const titles = document.querySelector(".title");
titles.addEventListener('mouseover', function() {
  console.log('Выберите свой продукт');
});

// переключение цветов кнопки

const colorchanger = document.querySelector('.color');
colorchanger.addEventListener('click', () => {
  colorchanger.classList.toggle('color-one');
colorchanger.addEventListener('click', () =>
{
    colorchanger.classList.toggle('color-one');
});
