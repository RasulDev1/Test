import { commentaries } from "./comments.js";

// 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersfilter = numbers.filter (number => number > 4)
console.log(numbersfilter)

//3
const furniture = [
  "диван",
  "кровать",
  "софа",
  "пуфик",
  "кухня",
  "шкаф",
]
const needmaterial = "диван"
const furniturefind = furniture.includes(needmaterial);
console.log(furniturefind)

//4
numbers.reverse()
furniture.reverse()
console.log(numbers)
console.log(furniture)

//7
const commentfilter = commentaries.filter(essence => essence.email.includes(".com"));
console.log(commentfilter)

//8
const idchecker = commentaries.map((object) => {
  return {
    ...object,
    postId: object.id <= 5 ? 2 : 1,
  }
})
console.log(idchecker);

//9
const cutArray = commentaries.map((object) => ({id: object.id, name: object.name}))
console.log(cutArray);

//10
const invalidding = commentaries.map(object => {
  const bodylength = object.body.length
  return {
    ...object,
    isinvalid: bodylength > 180
  }
})
console.log(invalidding);

//11
const emailselector = commentaries.reduce((email, comment) => [...email, comment.email], [])
console.log(emailselector)

const emailmapselector = commentaries.map(mapmail => mapmail.email);
console.log(emailmapselector)

//12
let string = emailmapselector.toString();
console.log(string)

string = emailmapselector.join("\n");
console.log(emailmapselector);
