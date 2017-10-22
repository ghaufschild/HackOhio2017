<?php
$q = intval($_GET['q']);
$con = mysqli_connect('hackohio2017.cligzm8ucbhx.us-east-1.rds.amazonaws.com:3306','dbmaster','welcometomydb','hackohio2017');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM CLASS WHERE DepartmentID = 35";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>ID</th>
<th>Number</th>
<th>Name</th>
<th>ReqID</th>
<th>Hours</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['ID'] . "</td>";
    echo "<td>" . $row['Number'] . "</td>";
    echo "<td>" . $row['Name'] . "</td>";
    echo "<td>" . $row['ReqID'] . "</td>";
    echo "<td>" . $row['Hours'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>