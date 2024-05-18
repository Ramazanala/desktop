new Vue({
    el: '#app',
    data: {
        ad: '',
        email: '',
        adres: '',
        ulke: '',
        textarea: '',
        cinsiyet: ''
    },
    computed: {
        adIsValid() {
            return this.ad.trim() !== '';
        },
        emailIsValid() {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(this.email.trim());
        },
        adresIsValid() {
            return this.adres.trim() !== '';
        },
        ulkeIsValid() {
            return this.ulke !== '' && this.ulke !== 'ülkenizi seçin';
        },
        mesajIsValid() {
            return this.textarea.trim() !== '';
        },
        cinsiyetIsValid() {
            return this.cinsiyet !== '';
        },
        adError() {
            return this.adIsValid ? '' : 'Ad Soyad boş bırakılamaz';
        },
        emailError() {
            return this.emailIsValid ? '' : 'Geçersiz e-posta adresi';
        },
        adresError() {
            return this.adresIsValid ? '' : 'Adres boş geçilemez';
        },
        ulkeError() {
            return this.ulkeIsValid ? '' : 'Lütfen ülkenizi seçin';
        },
        textareaError() {
            return this.mesajIsValid ? '' : 'Mesaj boş bırakılamaz';
        },
        cinsiyetError() {
            return this.cinsiyetIsValid ? '' : 'Lütfen cinsiyet seçiniz';
        },
    },
    methods: {
        submitForm() {
            if (this.adIsValid && this.emailIsValid && this.adresIsValid && this.ulkeIsValid && this.mesajIsValid && this.cinsiyetIsValid) {
                // Formun gönderilmesi için vanilla JS kontrolü
                document.getElementById("contactForm").submit();
            } else {
                alert('Lütfen formdaki hataları düzeltin!');
            }
        },
        resetForm() {
            this.ad = '';
            this.email = '';
            this.adres = '';
            this.ulke = '';
            this.textarea = '';
            this.cinsiyet = '';
        }
    }
});
