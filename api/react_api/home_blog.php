<?php
include 'connection.php';
$blogs = [];

$sql = "SELECT * FROM blog limit 3";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$blogs[]= $row;
}
	echo json_encode($blogs);