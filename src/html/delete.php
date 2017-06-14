<?php
header('Content-type: text/html;charset=utf-8');

$name  = $_REQUEST['name'];
$conn = new mysqli('localhost', 'root', '225038', 'feihu');
$conn->query('set names utf8');
$sql = "delete from cart where name='$name'";

if ($conn->query($sql) === true) {
    $data = array(
        'code' => 0,
        'msg'  => '删除成功'
    );
} else {
    $data = array(
        'code' => 1,
        'msg'  => '删除失败'
    );
}

echo json_encode($data);
$conn->close()
?>