<?php

include '../connection.php';
$data = [];

$sql = 'SELECT student.*, classes.name as cname, section.name as sname, CONCAT("http://localhost/react_api/",student.image) as image FROM `student`
join classes on classes.id=student.class_id
join section on section.id=student.section_id order by student.id DESC';

if(isset($_GET['class_id'])){
  $sql = 'SELECT student.*, classes.name as cname, section.name as sname, CONCAT("http://localhost/react_api/",student.image) as image FROM `student`
join classes on classes.id=student.class_id
join section on section.id=student.section_id where student.class_id='.$_GET['class_id'].' order by student.id DESC';
}
$result=$db->query($sql);
if($result->num_rows > 0){
  while($row = $result->fetch_object()){
    $data[]= $row;
  }
  echo json_encode(array("status" => 1,"data"=>$data));
}else{
  echo json_encode(array("status" => 0,"data"=>""));
}

// include "../connection.php";
// $data = [];
// $sql = "SELECT student.*, classes.name as cname, section.name as sname from `student` join classes on classes.id = student.class_id
// join section on section.id = student.section_id order by student.id ASC";
// $result = $db->query($sql);
// if($result->num_rows > 0){
//     while($row = $result->fetch_object()){
//         $data[]=$row;
//     }
//     echo json_encode(array("status"=>1, "data"=>$data));
// }else{
//     echo json_encode(array("status"=>0, "data"=>""));
// }