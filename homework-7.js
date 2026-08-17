function weather(city, temperature) {
  // Функция для определения темпераутуры в городе
  console.log(`В городе ${city} сейчас ${temperature} градусов`);
}
weather("Ачхой-Мартан", 30);

function checkspeed(speed) {
  if (checkspeed > 299792458) {
    console.log("Сверхсветовая скорость");
  } else if (checkspeed == 299792458) {
    console.log("Световая скорость");
  } else {
    console.log("Субсветовая скорость");
  }
}

checkspeed(299792458);

let price = 2500;
let name = "Футбольный мяч";
function product(budget) {
  if (budget >= price) {
    console.log(`${name} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
  }
}

product(3000);

function myfunction(a, b) {
  return 0;
}

let strength = 10;
let agility = 5;
let intelligence = 8;