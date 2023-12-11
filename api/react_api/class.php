<?php
include 'connection.php';
$classes = [];

$sql = "SELECT * FROM class";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$classes[]= $row;
}
	echo json_encode($classes);