<?php
if($_GET){
$q = intval($_GET['q']);
include'class.db.php';
$db = new DBClass();  
$selectors = 'plyr_uname';
$table = 'players';
$values = "'".$q."'";
$result = $db->insertIntoDb($selectors,$table,$values);  
echo 'Record inserted!';  
}
?>

