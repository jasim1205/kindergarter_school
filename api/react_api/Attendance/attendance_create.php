<?php
include "../connection.php";

$data = json_decode(file_get_contents("php://input"));

if($data){
    if($data->id){
        $sql="update attendance set "; // start query
    }else{
        $sql="insert into attendance set "; // start query
    }
     foreach($data as $k=>$v){
        $v = $db->real_escape_string($v);
        $sql.= "$k='$v',"; // get data and set query
    }
    $sql=rtrim($sql,","); // remove last , from query
    if($data->id){
        $sql.=" where id= '".$data->id."' "; // start query
    }
	$result=$db->query($sql);

    if($result){
        echo json_encode(array("message"=>"Successful register."));
    }else{
        echo json_encode(array("message"=>"Login failed."));
    }
}
