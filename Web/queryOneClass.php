<?php
$q = intval($_GET['q']);
$con = mysqli_connect('hackohio2017.cligzm8ucbhx.us-east-1.rds.amazonaws.com:3306','dbmaster','welcometomydb','hackohio2017');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM CLASS WHERE ID = $q";
$result = mysqli_query($con,$sql);

while ($row = mysqli_fetch_array($result)){
	echo "<div>" . $row['Number'] . "</div>";
	echo "<div>" . $row['Name'] . "</div>";
	echo "<div>" . $row['DepartmentID'] . "</div>";
	echo "<div>" . $row['ReqID'] . "</div>";
	echo "<div>" . $row['Hours'] . "</div>";
}

mysqli_close($con);
?>