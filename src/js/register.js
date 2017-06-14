require(['config'],function(){
	// 只要common定义成符合标准的模块，就可以在回调函数中使用模块
	require(['jquery','common','validate','localization'],function(){
		var Register = {
			dom:{},
			init:function(){
				this.register();
				this.randunNum();
				this.bindEvend();
			},	
			bindEvend:function(){
		            $('form').validate({
		                // 验证规则
		                rules:{
		                    username:{
		                        required:true,
		                        rangelength:[4,20]
		                    },
		                    passowrd:{
		                        required:true,
		                        rangelength:[6,16]
		                    },
		                    email:{
		                        email:true
		                    },
		                    Num:{
		                        number:true
		                    },
		                    person:{
		                        required:true,
		                        rangelength:[4,20]
		                    }
		                },

		                // 自定义提示
		                messages:{
		                    username:{
		                        required:'用户名不能为空'
		                    },
		                     passowrd:{
		                        required:'密码不能为空'
		                    },
		                    email:{
		                       required:'邮箱格式不正确'
		                    }
		                    
		                }
		            })
		        },
			randunNum:function(){
					// 1）获取页面元素
					var num = document.getElementById('num');
					var btn = document.getElementById('checkcode');

					// 2）绑定点击事件
					btn.onclick = randomNumber;

					randomNumber();

					function randomNumber(){
						var randomNum = parseInt(Math.random()*10000);

						randomNum = String(randomNum);

						while(randomNum.length<4){//98=>0098
							randomNum = '0' + randomNum;
						}

						// 4）把随机数写入#num
						num.value = randomNum; 
					}
					
				},
				register:function(){
				$('#btn').click(function(){
					if($('.agreement_box>input').is(':checked')){
						$.post('../html/register.php',{ 
						email: $('#email').val(),
						password: $('#password').val(),
						username: $('#username').val(),
					}, function(data){
							if(data&&data.code==0){
								console.log(1232)
								delCookie('username');
								delCookie('password');
								setCookie('username',$('#username').val(),1000000000);
								setCookie('password',$('#password').val(),1000000000);
								alert('注册成功');
								location.href='http://localhost/h5_1701/feihu/src/html/rgtcpt.html';	
								//window.location.href='http://localhost/h5_1701/feihu/src/index.html'
								
							} else {
								alert('注册失败');	
							}
						},'json')
					}else if(!$('.agreement_box>input').is(':checked')){
						alert('请仔细阅读《拍鞋服务协议》')
					}
					
					return false;			
				})
			},
		}
		$(function(){ 
			Register.init();
			if(getCookie('username')!='' && getCookie('username')!=null){
				$('.username').html(getCookie('username'));
				$('.login1').hide();
				$('.login2').show();
			}else{
				$('.login1').show();
				$('.login2').hide();
			} 
		});
		 $(function(){
	      $('#delcookie').on('click',function(){
	          delCookie('username');
	                delCookie('password');
	                $('.login1').show();
	          $('.login2').hide(); 
	      })
	    });
		$(function(){
			$('#delcookie').on('click',function(){
				 	delCookie('username');
		            delCookie('password');
			})
		});

	});
})








