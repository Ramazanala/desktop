
<?php

$email = $_POST['email'];
$password = $_POST['password'];



// email ve sifremiz
$correct_email = "g231210088@sakarya.edu.tr";
$correct_password = "g231210088";

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<p>Geçersiz e-posta formatı!</p>";
    exit();
}

if (empty($password)) {
    echo "<p>Şifre alanı boş bırakılamaz!</p>";
    exit();
}

// Girilen e-posta ve şifre doğruysa yönlendirme yap
if ($email == $correct_email && $password == $correct_password) {
    // Doğru ise hoşgeldin sayfasına yönlendir
    echo "<h1>HOŞGELDİNİZ G231210088</h1>";
    header("Refresh: 7; URL=giris.html");
    exit();
     // Yönlendirme yapıldıktan sonra kodun devam etmemesi için çıkış yapılır
} else {
    // Eğer e-posta veya şifre yanlışsa, kullanıcıyı login sayfasına geri yönlendir
    echo "<h1>E mail veya şifre hatalı giriş sayfasına yönlendiriliyorsunuz</h1>";
    header("Refresh: 7; URL=giris.html");
}
?>
