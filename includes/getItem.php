<?php
if($_GET){
$q = intval($_GET['q']);
include'class.db.php';
$db = new DBClass();     
$result = $db->selectSingleFromDb('plyr_uname','players','plyr_id',$q);  
$pname =  $result['plyr_uname'];
echo $pname;
}
?>

