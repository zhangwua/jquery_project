<?php
	include "DBHelper.php";
	$username = $_POST["username"];
	$password = $_POST["password"];
	$sql = "select * from register where `username` ='$username' and `password` ='$password'";
	$result = query($sql);
	//当前 email 不存在，执行插入操作 
	if(count($result) < 1){
		echo "{state: false, message: '登录失败！！！'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";
		session_start();
		$_SESSION["login_email"] = $result[0]->email;		
	} 
?>
 