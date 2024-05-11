
    new Vue({
        el: '#app',
        data: {
            ad: '',
            email: '',
            adres: '',
            ulke: '',
            mesaj: ''
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
                return this.mesaj.trim() !== '';
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
            mesajError() {
                return this.mesajIsValid ? '' : 'Mesaj boş bırakılamaz';
            }
        },
        methods: {
            submitForm() {
                if (this.adIsValid && this.emailIsValid && this.adresIsValid && this.ulkeIsValid && this.mesajIsValid) {
                    alert('Form başarıyla gönderildi!');
                    // Burada formu sunucuya gönderebilirsiniz
                } else {
                    alert('Lütfen formdaki hataları düzeltin!');
                }
            }
        }
    });

