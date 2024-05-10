const form = document.getElementById("form");
const ad = document.getElementById("ad");
const email = document.getElementById("email");
const adres = document.getElementById("adres");
const ulke = document.getElementById("ulke");
const raddiobutton = document.getElementById("raddiobutton");
const textarea = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    ValidateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.ClassList.add("success");
    inputControl.ClassList.remove("error");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.ClassList.add("success");
    inputControl.ClassList.remove("error");
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[<>()[\]\\.,;:\s@"]+))|("."))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const ValidateInputs = () => {
    const adValue = ad.value.trim();
    const emailValue = email.value.trim();
    const adresValue = adres.value.trim();
    const raddiobuttonValue = raddiobutton.value.trim();
    const ulkeValue = ulke.value.trim();
    const textareaValue = textarea.value.trim();

    if (adValue === "") {
        setError(ad, "ad alanı boş geçilmez");
    } else {
        setSuccess(ad);
    }

    if (emailValue === "") {
        setError(email, "email alanı bos gecilmez");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "e mail adresi geçersiz");
    } else {
        setSuccess(email);
    }

    if (adresValue === "") {
        setError(adres, "adres alanı boş geçilmez");
    } else {
        setSuccess(adres);
    }

    if (textareaValue === "") {
        setError(textarea, "mesaj alanı boş geçilmez");
    } else {
        setSuccess(textarea);
    }
};
