<?php
$q = intval($_GET[q]);
$con = mysqli_connect('hackohio2017.cligzm8ucbhx.us-east-1.rds.amazonaws.com:3306','dbmaster','welcometomydb','hackohio2017');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM CLASS WHERE DepartmentID = $q";
$result = mysqli_query($con,$sql);
$resultData[] = array();

while($row = $result->fetch_assoc())
{
    $rows[] = $row;
}

echo '<form action="">
<select name="dep" onchange="showUser(this.value);">';
foreach($rows as $value)
{
    echo '<option value='.$value['ID'].'>'.$value['Number'].'</option>';
}
echo '</select>
<br><br>
<div id="sick"></div>
</form>';
mysqli_close($con);
?>