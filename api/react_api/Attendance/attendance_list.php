<?php
include "../connection.php";


$data = [];
$sql = "SELECT attendance.*, classes.name as cname,student.name as sname FROM `attendance` 
        JOIN classes ON classes.id = attendance.class_id
        JOIN student ON student.id = attendance.student_id
        ORDER BY student.id ASC";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(array("status" => 1, "data" => $data));
} else {
    echo json_encode(array("status" => 0, "data" => ""));
}

$conn->close();
?>



