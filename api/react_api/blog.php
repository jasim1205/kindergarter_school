<?php
include 'connection.php';
$blogs = [];

$sql = "SELECT * FROM blog";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$blogs[]= $row;
}
	echo json_encode($blogs);