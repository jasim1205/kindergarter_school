<?php
include 'connection.php';
$abouts = [];

$sql = "SELECT * FROM about";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$abouts[]= $row;
}
	echo json_encode($abouts);