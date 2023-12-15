<?php
$conn = mysqli_connect("localhost", "root", "", "base");
$req = "SELECT * FROM bli";
$res = mysqli_query($conn,$req);
?>
<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
</head>
<body>
<table border="1">
<tr>
<th>nom_prenom</th>
<th>Sexe</th>
<th>Cin</th>
<th>date_naissance</th>
<th>situation_actuelle</th>
<th>avoir_projet</th>
<th>description_projet</th>
<th>microcredit_demandé</th>
<th>montant_souhaité</th>
<th>adresse_projet</th>
<th>délégation</th>
<th>adresse_domicile</th>
<th>téléphone</th>  
<th>adresse_email</th>
</tr>
<?php while($row = mysqli_fetch_assoc($res)) { ?>
<tr>  
<td><?php echo $row['nom_prenom'] ?></td>
<td><?php echo $row['sexe'] ?></td>
<td><?php echo $row['cin'] ?></td>
<td><?php echo $row['date_naissance'] ?></td>
<td><?php echo $row['situation_actuelle'] ?></td>
<td><?php echo $row['avoir_projet'] ?></td>
<td><?php echo $row['description_projet'] ?></td>
<td><?php echo $row['microcredit_demande'] ?></td>
<td><?php echo $row['montant_souhaite'] ?></td>
<td><?php echo $row['adresse_projet'] ?></td>
<td><?php echo $row['delegation'] ?></td>
<td><?php echo $row['adresse_domicile'] ?></td>
<td><?php echo $row['telephone'] ?></td>
<td><?php echo $row['adresse_email'] ?></td>   
</tr>
<?php
}    
$conn->close();
?>
</table>
</body>
</html>