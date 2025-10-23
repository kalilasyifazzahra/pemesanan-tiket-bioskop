<?php
$conn = mysqli_connect("localhost", "root", "", "pemesanantiket");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

$nama = $_POST['username'];
$email = $_POST['email'];
$film = $_POST['tickets'];
$jumlah = $_POST['quantity'];

$sql = "INSERT INTO pemesanan (nama, email, film, jumlah_tiket)
        VALUES ('$nama', '$email', '$film', '$jumlah')";

$result = mysqli_query($conn, $sql);

if ($result) {
    header("Location: konfirmasi.php");
    exit();
} else {
    echo "Gagal menyimpan data: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
