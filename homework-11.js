const emailForm = document.querySelector(".secondblock");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const registrationForm = document.getElementById("registrationForm");

openBtn.addEventListener('click', function() {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

let user = null;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const currentForm = event.target;
  const password = currentForm.elements["userPassword"].value;
  const passwordConfirm = currentForm.elements["userPasswordConfirm"].value;

if (!currentForm.checkValidity()) {
  alert("Неправильно введены данные");
  return;
}

if (password !== passwordConfirm) {
    alert("Пароли не совпадают!");
    return;
  }

const name = currentForm.elements["userName"].value;
const surname = currentForm.elements["userSurname"].value;
const birthDate = currentForm.elements["userData"].value;

if (name.match(/\d/) || surname.match(/\d/)) {
  alert("В имени и фамилии не должно быть цифр!");
  return;
}

if (birthDate) {
  const yearOfBirth = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();

  if (yearOfBirth > currentYear || yearOfBirth < (currentYear - 120)) {
    alert("Пожалуйста, укажите корректную дату рождения!");
    return;
  }
}


const modalformData = new FormData(currentForm);
const modaldata = Object.fromEntries(modalformData.entries());
delete modaldata.userPasswordConfirm;
modaldata.createdOn = new Date();
user = modaldata;
console.log("Зарегестрирован пользователь:", user);

modal.classList.remove("active");
alert("Вы успешно зарегистрированы!");

});