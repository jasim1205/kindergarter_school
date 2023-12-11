<?php
include "../connection.php";

$data = [];
$sql = "SELECT routine.*, classes.name as cname, week_day.day as wday, subject.name as sname, teachers.name as tname, period.name as pname FROM `routine`
join classes on classes.id=routine.class_id
join week_day on week_day.id= routine.week_id
join subject on subject.id=routine.subject_id
join teachers on teachers.id=routine.teacher_id
join period on period.id=routine.period_id
";
$result = $db->query($sql);
if($result->num_rows>0){
    while($row = $result->fetch_object()){
        $data[] = $row;
    }
        echo json_encode(array("status"=>1,"data"=>$data));
    
}else{
    echo json_encode(array("status"=>0, "data"=>""));
}