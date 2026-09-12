class Form {
    constructor(formId) {
        this.formElement = document.getElementById(formId);

    }

    getValues () {
        if(!this.formElement) return{};
        const formData = new FormData(this.formElement);
        return Object.fromEntries(formData.entries());
    }

    isValid () {
    if (!this.formElement) return false;
    if (!this.formElement.checkValidity()) return false;;
    if (this.password() === false) return false;
    if (this.names() === false) return false;
    if (this.data() === false) return false

    return true;
    }

    reset () {
        if (!this.formElement) return;
        this.formElement.reset();
    }
        password () {
        if (!this.formElement) return false;
        const elements = this.formElement.elements;
        if (!elements["userPassword"]) return true;
        const password = elements["userPassword"]?.value || '';
        const passwordConfirm = elements["userPasswordConfirm"]?.value || '';

        if (password.trim().length === 0) {
            alert("Пароль не может быть пустым")
            return false;
        }
        if (password !== passwordConfirm) {
        alert("Пароли не совпадают!");
        return false;
        }
        return true;
    }

    names () {
        const elements = this.formElement.elements;
        const name = elements["userName"]?.value || '';
        const surname = elements["userSurname"]?.value || '';
        if (name.match(/\d/) || surname.match(/\d/)) {
            alert("В имени и фамилии не должно быть цифр!");
        return false;
        }
        return true;
    }

    data () {
        const elements = this.formElement.elements;
        const birthDate = elements["userData"]?.value;
        if (birthDate) {
            const yearOfBirth = new Date(birthDate).getFullYear();
            const currentYear = new Date().getFullYear();

            if (yearOfBirth > currentYear || yearOfBirth < (currentYear - 120)) {
            alert("Пожалуйста, укажите корректную дату рождения!");
            return false;
            }
        }
        return true;
    }

}

export default Form;