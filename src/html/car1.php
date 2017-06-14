<?php
header('Content-type: text/html;charset=utf-8');

$username  = $_REQUEST['username'];  // 通过get请求传递过来的用户
// 创建连接
$conn = new mysqli('localhost', 'root', '225038', 'feihu');

$sql = "select * from cart where username='$username'";     // sql语句     

$conn->query('set names utf8');

$result = $conn->query($sql);


if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $data1[] = $row; 
    }
    $data = array(
        'code' => 0,
        'msg'  => '有购物车记录',
        'data' => $data1
    );
} else { 
    $data = array(
        'code' => 1,
        'msg'  => '没有购物车记录'
    );
}

echo json_encode($data);

$conn->close();