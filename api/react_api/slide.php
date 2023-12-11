<?php
include 'connection.php';
$slides = [];

$sql = "SELECT * FROM slide";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$slides[]= $row;
}
	echo json_encode($slides);