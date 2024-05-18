document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Vanilla JS ile form doğrulaması
    let ad = document.querySelector("input[name=ad]").value.trim();
    let email = document.querySelector("input[name=email]").value.trim();
    let adres = document.querySelector("input[name=adres]").value.trim();
    let ulke = document.querySelector("select[name=ulke]").value;
    let textarea = document.querySelector("textarea[name=textarea]").value.trim();
    let cinsiyet = document.querySelector("input[name=cinsiyet]:checked");

    if (!ad || !email || !adres || !ulke || !textarea || !cinsiyet) {
        alert("Lütfen tüm alanları doldurun");
        event.preventDefault(); // Form gönderimini durdur
    } else {
        // Eğer tüm alanlar doluysa Vue.js submitForm metodunu çağır
        event.preventDefault();
        app.submitForm();
    }
});
