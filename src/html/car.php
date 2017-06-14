<?php
header('Content-type: text/html;charset=utf-8');

$name = $_REQUEST['name'];
$price = $_REQUEST['price'];
$num = $_REQUEST['num'];
$url = $_REQUEST['url'];
$username = $_REQUEST['username'];
// 创建连接
$conn = new mysqli('localhost', 'root', '225038', 'feihu');
$conn->query('set names utf8');
$sql = "insert into cart (name,price,num,url,username) values('$name', '$price', '$num',  '$url','$username' )";     // sql语句

	if($name!=''){

		if ($conn->query($sql) === true) {
		    $data = array(
		        'code' => 0, 
		        'msg'  => '加入成功'
		    );
		} else {
		    $data = array(
		        'code' => 1,
		        'msg'  => '加入失败'
		    );
		}
	}else{
		 $data = array(
		        'code' => 2,
		        'msg'  => '加入购物车失败'
		    );
	}



echo json_encode($data);

$conn->close();