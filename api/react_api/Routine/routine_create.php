<?php
include "../connection.php";

// $data = json_decode(file_get_contents("php://input"));

// if($data){
//     if($data->id){
//         $sql="update routine set "; // start query
//     }else{
//         $sql="insert into routine set "; // start query
//     }
//      foreach($data as $k=>$v){
//         $v = $db->real_escape_string($v);
//         $sql.= "$k='$v',"; // get data and set query
//     }
//     $sql=rtrim($sql,","); // remove last , from query
//     if($data->id){
//         $sql.=" where id= '".$data->id."' "; // start query
//     }
// 	$result=$db->query($sql);

//     if($result){
//         echo json_encode(array("message"=>"Successful register."));
//     }else{
//         echo json_encode(array("message"=>"Login failed."));
//     }
// }


$data = json_decode(file_get_contents("php://input"));

if($data){
    $class = $data->class_id;
 	$week = $data->week_id;
 	$subject = $data->subject_id;
 	$teacher = $data->teacher_id;
 	$period = $data->period_id;
    $rdata = array();
    $sql = "INSERT into routine set class_id='$class',week_id='$week',subject_id='$subject',teacher_id='$teacher',period_id='$period'";
    $result = $db->query($sql);
    if($result){
        echo json_encode(array("message" => "Successfuly register"));
    }else{
        echo json_encode(array("message"=> "Failed"));
    }
}
