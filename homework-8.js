// 8 задание, объекты и массивы

// 3 пункт
const mypersonaldetails = {
  name: "Аббас",
  secondname: "Лорсанов",
  age: 25,
  city: "Ачхой-Мартан",
  region: "Чеченская Республика",
  job: "Логист",
  hobbie: "Calisthenics"
}
console.log(mypersonaldetails);
// 4 пункт
const carparametres = {
  make: "Chevrolet",
  model: "Cruze",
  year: 2019,
  color: "Satin Steel Metallic", 
  transmission: "6-speed Automatic",
  owner: mypersonaldetails
}
console.log(carparametres);

// 5 пункт
function maxspeedchecker (maxspeed) {
  if (!("maxspeed" in carparametres)){
    carparametres.maxspeed = 230;
  }
  else {
    return;
  }
}
maxspeedchecker(carparametres);
console.log(carparametres.maxspeed);  

// 6 пункт
function getcarproperty (object, key) {
  console.log(object[key]);
}
getcarproperty(carparametres, "model");

// 7 пункт
const products = ["Молоко", "Хлеб", "Чай", "Кофе", "Сникерс"]
console.log(products);

// 8 пункт
const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    coverColor: "Green",
    genre: "Fantasy"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    coverColor: "Blue",
    genre: "Classic Fiction"
  },
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    year: 1934,
    coverColor: "Red",
    genre: "Mystery"
  }
]
books.push({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  coverColor: "Brown",
  genre: "Classic Drama"
})
console.log(books);

// пункт 9
const harrypotterbooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "Red",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "Purple",
    genre: "Fantasy"
  }
]
console.log(harrypotterbooks);

const allbooks =[...books, ...harrypotterbooks]
console.log(allbooks);

//пункт 10

function checkrarity (book) {
  return book.map(item => item.year > 1950? item.isRare = true: item.isRare = false)
}

checkrarity(allbooks);

console.log(allbooks);

