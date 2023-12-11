<?php 
include "../connection.php";
$data = [];
$id = $_GET["id"];
$sql = "Delete from classes where id = $id";
$result = $db->query($sql);
if($result){
    $response = ["status"=>1];
}else{
    $response = ["status"=>0];
}
echo json_encode($response);