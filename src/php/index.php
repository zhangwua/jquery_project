<?php 
	session_start();
	// echo $_SESSION['name'];
	if(isset($_SESSION['login_email'])){
		// echo $_SESSION['login_email'];
	}else {
		//跳转页面
		header("Location: login.html");
		exit;
	}
?> 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>main</title>

	<link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../libs/jquery-confirm/jquery-confirm.css">

	<script type="text/javascript" src="../libs/jquery/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="../libs/jquery-confirm/jquery-confirm.js"></script>
	<style type="text/css" media="screen">
		.dkHeader{width: 100%; height: 48px; padding-left: 28px; line-height: 48px;}
		.dkContainer{position: fixed; top: 48px; left: 0; right: 0; bottom: 48px; border:solid 1px #C8C7CC;}
		.dkContainer>.dkNav{position: absolute; top: 0; left: 0; width: 198px;bottom: 0; border-right: solid 1px #C8C7CC;}
		.dkContainer>.dkBody{position: absolute; top: 0; left: 198px; right: 0;bottom: 0; }
		.bs-example{width: 55%; margin: 30px auto;}
	</style>
</head>
<body>
	<div class="dkHeader">
		<?php echo $_SESSION['login_email']; ?>
		<!-- <input type="button" name="" value="退出" class="btn btn-info"> -->
	</div>
	<div class="dkContainer">
		<div class="dkNav">
			<ul class="list-group">
				<li class="list-group-item"><a href="javascript:">修改用户信息</a></li>
				<li class="list-group-item"><a href="javascript:">修改密码</a></li>
				<li class="list-group-item"><a href="logout.php">退出</a></li>
			</ul>
		</div>
		<div class="dkBody">
			
			<div class="bs-example">
			    <form class="form-horizontal" role="form">
			      <div class="form-group">
			        <label for="inputPassword3" class="col-sm-2 control-label">Old Password</label>
			        <div class="col-sm-10">
			          <input type="password" class="form-control" id="oldpassword" name="oldpassword" placeholder="Password">
			        </div>
			      </div>    
			      <div class="form-group">
			        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
			        <div class="col-sm-10">
			          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
			        </div>
			      </div>    
				  <div class="form-group">
			        <label for="inputEmail3" class="col-sm-2 control-label">Phone</label>
			        <div class="col-sm-10">
			          <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone">
			        </div>
			      </div>         
			      <div class="form-group">
			        <div class="col-sm-offset-2 col-sm-10">
			          <button type="button" id="submit" class="btn btn-default">Confirm</button>
			        </div>
			      </div>
			    </form>
		  	</div>			

		</div>
	</div>
	<div class="dkFoot"></div>

	<script type="text/javascript">
		$(function(){
			$('#submit').click(function(){
				$.post('modify.php',{
					oldpassword: $('#oldpassword').val(),
					password: $('#password').val(),
					phone: $('#phone').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){
						$.alert('修改成功！');
					} else {
						$.alert($obj.message);
					}
				})				
			})
		})
	</script>	
</body>
</html>