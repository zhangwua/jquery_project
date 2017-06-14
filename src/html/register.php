<?php
header('Content-type: text/html;charset=utf-8');

$username = $_REQUEST['username'];
$pass = $_REQUEST['password'];
$email = $_REQUEST['email'];


// 创建连接
$conn = new mysqli('localhost', 'root', '225038', 'feihu');

$conn->query('set names utf8');

$sql = "insert into register (username, password, email) values('$username', '$pass', '$email')";     // sql语句

if ($conn->query($sql) === true) {
    $data = array(
        'code' => 0,
        'msg'  => '注册成功'
    );
} else {
    $data = array(
        'code' => 1,
        'msg'  => '注册失败'
    );
}

echo json_encode($data);

$conn->close();