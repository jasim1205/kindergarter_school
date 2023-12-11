<?php
// include '../connection.php';
// $data = json_decode(file_get_contents("php://input"));

// if($data){
// 	$name = $data->name;
// 	$batch = $data->batch_id;
// 	$b_date = $data->b_date;
// 	$father = $data->father_name;
// 	$mother = $data->mother_name;
// 	$class = $data->class_id;
// 	$section = $data->section_id;
// 	$address = $data->address;
// 	$image ="";
// 	if($data->image){
// 		$dir="../img/user/";
// 		list($type, $imgdata) = explode(';', $data->image);
// 		list(, $imgdata)      = explode(',', $imgdata);
// 		/* to get image type like jpg, png */
// 		$fileType = explode("image/", $type);
// 		$image_type = $fileType[1];
		
// 		$imgdata = base64_decode($imgdata);
// 		$image_name = $dir.uniqid().rand(111,999) .".". $image_type;
// 		file_put_contents($image_name, $imgdata);
// 		$image =$image_name;
// 	}

// 	$rdata=array();
// 	$sql = "insert into `student` set name='$name', batch_id='$batch', b_date='$b_date', father_name='$father', mother_name='$mother', class_id='$class', section_id='$section', address='$address',image='$image'";
// 	$result=$db->query($sql);
// 	if($result)
// 		echo json_encode(array("message" => "Successful register."));
// 	else
// 		echo json_encode(array("message" => "Login failed."));
	
// }


include '../connection.php';
$data = json_decode(file_get_contents("php://input"));

if($data){
    if($data->id){
        $sql="update student set "; // start query
    }else{
        $sql="insert into student set "; // start query
    }
    
    foreach($data as $k=>$v){
        if($k=="image" && $v !=""){
            $dir="../img/user/";
            $dir2="img/user/";
            list($type, $imgdata) = explode(';', $data->image);
            list(, $imgdata)      = explode(',', $imgdata);
            /* to get image type like jpg, png */
            $fileType = explode("image/", $type);
            $image_type = $fileType[1];
            
            $imgdata = base64_decode($imgdata);
            $image_name = uniqid().rand(111,999) .".". $image_type;
            file_put_contents($dir.$image_name, $imgdata);
            $img=$dir2.$image_name;
            $sql.= "image='$img',"; // get data and set query
        }else{
            $sql.= "$k='$v',"; // get data and set query
        }
    }
    $sql=rtrim($sql,","); // remove last , from query
    if($data->id){
        $sql.=" where id= '".$data->id."' "; // start query
    }
	$result=$db->query($sql);
	if($result)
        echo json_encode(array("status" => 1));
    else
		echo json_encode(array("status" => 0));
	
}