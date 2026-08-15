function weather(city, temperature,) // Функция для определения темпераутуры в городе
{
    console.log(`В городе ${city} сейчас ${temperature} градусов`);
}
weather('Ачхой-Мартан', 30)

let speed = 299792458; // Скорость света в м/с

if(speed > 299792458)
{
    console.log('Сверхсветовая скорость');
}
else if(speed == 299792458)
{
    console.log('Световая скорость');
}
else{
       console.log('Субсветовая скорость');
    }

let price = 2500;
let name = "Футбольный мяч";
function product(budget) 
{
    if(budget >= price)
    {
        console.log(`${name} приобретён. Спасибо за покупку!`);
    }
    else
    {
        console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
    }
}

product(3000)

function myfunction(a, b) // Функция для сложения двух чисел
{
    return 0;
}

let strength = 10;
let agility = 5;
let intelligence = 8;

