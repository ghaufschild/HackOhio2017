<?php
$q = intval($_GET['q']);

$con = mysqli_connect('hackohio2017.cligzm8ucbhx.us-east-1.rds.amazonaws.com:3306','dbmaster','welcometomydb','hackohio2017');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM CLASS WHERE DepartmentID = 27";
$result = mysqli_query($con,$sql);
$resultData[] = array();

while($row = $result->fetch_assoc())
{
    $rows[] = $row;
}
echo '<table>';
foreach($rows as $value)
{
    echo '<tr>
             <td>'.$value['ID'].'</td>
             <td>'.$value['Number'].'</td>
           </tr>';
    echo "";
}           
echo '</table>';
mysqli_close($con);
?>