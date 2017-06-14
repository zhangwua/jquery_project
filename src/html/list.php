<?php
header('Content-type: text/html;charset=utf-8');


// 创建连接
$conn = new mysqli('localhost', 'root', '225038', 'feihu');

$sql = "select * from list";     // sql语句     查询l_admin表中的a_nickname字段

$conn->query('set names utf8');

$result = $conn->query($sql);

if ($result->num_rows > 0) {


    $temp=array(); 
    while($row=$result->fetch_assoc()){
        $temp[]=$row;
    }
    $data = array(
        'code' => 0,
        'data' => $temp
        
    );
} else {
    $data = array(
        'code' => 1,
        'msg'  => '数据为空或数据查询失败'
    );
}

echo json_encode($data);

$conn->close();