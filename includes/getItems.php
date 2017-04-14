<?php
//if($_GET){
include'class.db.php';
$db = new DBClass();     
$result = $db->selectFromDb('*','players');  
$arr = array();
$bigArr = array();    
while ($row = $result->fetch_assoc()) {
array_push($arr, array($row['plyr_id'],$row['plyr_uname'],$row['plyr_created']));
}
$arr = json_encode($arr);
echo $arr;
//}
?>

