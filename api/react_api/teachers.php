<?php
include 'connection.php';
$teachers = [];
$sql = 'SELECT teachers.*,CONCAT("http://localhost/react_api/",teachers.image) as image FROM `teachers`';
// $sql = "SELECT * FROM teachers";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$teachers[]= $row;
}
	echo json_encode($teachers);