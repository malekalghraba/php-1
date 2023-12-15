<meta charset="utf-8">
<?php
$link = mysqli_connect("localhost", "root", "", "base");
$np = $_POST["nip"];
$se = $_POST["sexe"];
$ci = $_POST["ci"];
$da = $_POST["date"];
$sa = $_POST["vous"];
$pr = $_POST["projet"];
$ds = $_POST["des"];
$mi = $_POST["genre"];
$mo = $_POST["mon"];
$ad = $_POST["adres"];
$de = $_POST["deleg"];
$add = $_POST["adr"];
$te = $_POST["tf"];
$adm = $_POST["mal"];
$req="select * from bli";
$res = mysqli_query($link,$req);
$req1 = "insert into bli values ('$np','$se','$ci','$da','$sa','$pr','$ds','$mi','$mo','$ad','$de','$add','$te','$adm')";
$res1=mysqli_query($link,$req1);
if ($req1 = 1)
{echo "vote demande est envoyé avec succés";}
else
{echo"votre demande est invalide";}
mysqli_close($link);
?>