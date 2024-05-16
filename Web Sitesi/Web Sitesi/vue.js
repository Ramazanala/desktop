// vue.js

new Vue({
    el: '#app',
    data: {
        ad: '',
        email: '',
        adres: '',
        ulke: '',
        textarea: ''
        
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
            return this.ulke !== '';
        },
        mesajIsValid() {
            return this.textarea !== '';
        },
        adError() {
            return this.adIsValid ? '' : 'Ad soyad boş geçilemez';
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
            return this.textareaIsValid ? '' : 'Mesaj boş bırakılamaz';
        },
    },
    methods: {
        submitForm() {
            if (this.adIsValid && this.emailIsValid && this.adresIsValid && this.ulkeIsValid && this.textareaIsValid ) {
                alert('Form başarıyla gönderildi!');
                // Burada formu sunucuya gönderebilirsiniz
            } else {
                alert('Lütfen formdaki hataları düzeltin!');
            }
        }
    }
});
