const form = document.getElementById('form')
const ad = document.getElementById('ad');
const email = document.getElementById('email');
const adres = document.getElementById('adres');
const ulke = document.getElementById('ulke');
const genderRadios = document.getElementsByName('flexRadioDefault');
const textarea = document.getElementById('textarea');

form.addEventListener('click', (e) => {
    e.preventDefault();

    ValidateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.cassList.remove('succsess');  
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const ValidateInputs = () => {
    const adValue = ad.value.trim();
    const emailValue = email.value.trim();
    const adresValue = adres.value.trim();
   
    const ulkeValue = ulke.value;
    const textareaValue = textarea.value;
 
    // Cinsiyet kontrolü
    let genderSelected = false;
    genderRadios.forEach(radio => {
        if (radio.checked) {
            genderSelected = true;
        }
    });

 
    

    if (adValue === '') {
        setError(ad, 'ad alanı boş geçilmez');
    } else {
        setSuccess(ad);
    }

    if (emailValue === '') {
        setError(email, 'email alanı bos gecilmez');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'e mail adresi geçersiz');
    } else {
        setSuccess(email);
    }

    if (adresValue === '') {
        setError(adres, 'adres alanı boş geçilmez');
    } else {
        setSuccess(adres);
    }

    // Ülke kontrolü
    if (ulkeValue === 'ülkenizi seçin') {
        setError(ulke, 'Lütfen ülkenizi seçiniz');
    } else {
        setSuccess(ulke);
    }

    // Mesaj kontrolü
    if (textareaValue === '') {
        setError(textarea, 'Mesaj alanı boş bırakılamaz');
    } else {
        setSuccess(textarea);
    }

    if (!genderSelected) {
        setError(genderRadios[0], 'Cinsiyet seçiniz');
    } else {
        setSuccess(genderRadios[0]);
    }

    
};
