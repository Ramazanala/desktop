new Vue({
    el: '#app',
    data: {
        email: '',
        password: ''
    },
    computed: {
        emailIsValid() {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(this.email.trim());
        },
        passwordIsValid() {
            return this.password.trim() !== '';
        },
        emailError() {
            return this.emailIsValid ? '' : 'Geçerli bir email adresi giriniz';
        },
        passwordError() {
            return this.passwordIsValid ? '' : 'Şifre boş bırakılamaz';
        }
    },
    methods: {
        submitForm() {
            if (this.emailIsValid && this.passwordIsValid) {
                // Formu gerçekten göndermek
                this.$refs.form.submit();
            } else {
                alert('Lütfen formdaki hataları düzeltin!');
            }
        }
    }
});