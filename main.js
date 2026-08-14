//Покраска всех карточек
const productCards = document.querySelectorAll('.product-card');
const ChangeColorAllButton = document.querySelector('#ChangeColorAll');
const GreenColorHash = '#00FF00';
const BlueColorHash = '#0000FF';
const RedColorHash = '#FF0000';
const BlackColorHash = '#000000'

ChangeColorAllButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = GreenColorHash)
});

//Покраска первой карточки
const FirstProductCard = document.querySelector('.product-card');
const ChangeColorFirstButton = document.querySelector('#ChangeColorFirst');

ChangeColorFirstButton.addEventListener('click', () => {
    FirstProductCard.style.backgroundColor = BlueColorHash
});

const OpenGoogleButton = document.querySelector('#open-google');
OpenGoogleButton.addEventListener('click', OpenGoogle)

function OpenGoogle() 
{
    const answer = confirm("Вы хотите открыть Google?")

    if(answer === true){
        window.open('https://www.google.com');
    } else {
        return;
    }
}

// Вывод консоль лог
const OutputLogButton = document.querySelector('#output-console-log');

OutputLogButton.addEventListener('click',() => outputConsoleLog('Дз 4'));

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

const Colorchanger = document.querySelector('.color');
Colorchanger.addEventListener('click', () =>
{
    Colorchanger.classList.toggle('color-one');
});
