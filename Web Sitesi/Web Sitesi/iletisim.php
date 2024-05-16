<?php
// Formdan gelen verileri al
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = $_POST["ad"] ?? "";
    $adres = $_POST["adres"] ?? "";
    $cinsiyet = $_POST["flexRadioDefault"] ?? "";
    $email = $_POST["email"] ?? "";
    $ulke = $_POST["ulke"] ?? "";
    $textarea = $_POST["textarea"] ?? "";

    // Alınan verileri ekrana yazdır
    echo "<h2>Gönderilen Form Verileri:</h2>";
    echo "<p>Ad Soyad: $ad</p>";
    echo "<p>Adres: $adres</p>";
    echo "<p>Cinsiyet: $cinsiyet</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Ülke: $ulke</p>";
    echo "<p>Mesaj: $textarea</p>";

    header("Refresh: 3; URL=iletisim.html");
}
