require(['config'],function(){
	// 只要common定义成符合标准的模块，就可以在回调函数中使用模块
	require(['jquery','common'],function(){
		var details = {
			dom:{},
			init:function(){
				this.magnifier();
				this.address();
				this.select();
				this.addcart();
				this.Menu();
			},

			// 放大镜效果
			magnifier:function(){
				$('.simg>ul>li').click(function(){
					var index = $(this).index()+1;
					console.log(index)
					$('.bimg>img').attr('src','../img/bimg'+index+'.jpg');
					$('.mbimg').css('background','#fff url(../img/mbimg'+index+'.jpg) no-repeat');
				})
				var dom=this.dom
				dom.sImg = $('.bimg');
				dom.bImg = $('.mbimg');
				dom.mask = $('#mask');
				dom.sImg.mousemove(function(e){
					dom.bImg.show();
					dom.mask.show();
					console.log(dom.mask.outerHeight());
					var offsetX = -e.pageX+$(this).offset().left;
					var offsetY = -e.pageY+$(this).offset().top;
					var maskW = dom.mask.outerWidth();
					var maskH = dom.mask.outerHeight();
					var sImgW = dom.sImg.outerWidth();
					var sImgH = dom.sImg.outerHeight();
					var i = 800/sImgW;
					if(offsetX>-maskW/2-4){
						offsetX = -maskW/2;
					}else if(offsetX<-sImgW+maskW/2+2){
						offsetX = -sImgW+maskW/2+2;
					}
					if(offsetY<-sImgH+maskH/2+2){
						offsetY = -sImgH+maskH/2+2;
					}else if(offsetY>-maskH/2-4){
						offsetY = -maskH/2;
					}
					var x = i*(offsetX)+dom.bImg.outerWidth()/2+'px';
					var y = i*(offsetY)+dom.bImg.outerHeight()/2+'px';
					dom.bImg.css('backgroundPosition',x+' '+y);
					dom.mask.css({'left':-offsetX-dom.mask.outerWidth()/2,'top':-offsetY-dom.mask.outerHeight()/2});
				});
				dom.sImg.mouseleave(function(e){
					dom.bImg.hide();
					dom.mask.hide();
				})
			},

			//三级菜单
			Menu:function(){
				var $headgory=$('.headgory');
				var $catagory_bd=$('.catagory_bd');
				var $catagory_item=$('.catagory_item');
				$headgory.on('mouseenter',function(){
					$catagory_bd.show();
				}).on('mouseleave',function(){
					$catagory_bd.hide();
				});
				$catagory_item.on('mouseenter',function(){
						// 只有jquery对象才能使用jquery方法
						
						$(this).siblings().show();
					}).on('mouseleave',function(){
						$(this).siblings().hide();
					});

			}, 
			//选择送货地址
			address:function(){
				$('.p3>span').click(function(){
					$(this).find('div').show();
				})
				$('.p3>span>div').mouseleave(function(){
					$(this).hide();
				})
				$('.p3>span>div>ul>li>ul>li').bind('click',function(e){
					var index = $(this).index();
					e=e?e:event;
					e.stopPropagation?e.stopPropagation():(e.cancebubble=true)
					if(index!=0){
						$('.p3>span>div>ul>li>ul>li').css('color','#999')
						$(this).css('color','#a00');
						$('.p3>span').find('div').hide();
						$('.ads').html($(this).html());
						$('.p3>em').html(price[$(this).html()])
					}
				})
			},
			//选择购买数量
			select:function(){
				$('.p5>img').click(function(){
					$('.p5>img').removeClass('colorselect')
					$(this).addClass('colorselect')
				})
				$('.p6>span').click(function(){
					$('.p6>span').removeClass('spanselect')
					$(this).addClass('spanselect')
				})
				$('.p7>i').click(function(){
					var index = $(this).index();
					var num = parseInt($('.p7>input').val())
					if(index==0){
						if(num==0){
							num=1
						}
						num = num-1+''
					}
					if(index==2){
						num = num+1+''
					}
					$('.p7>input').attr('value',num);
				});
				
			}, 
			//加入购物车
			addcart:function(){
				$('.addcart').click(function(){
						var name = $('.proinfo>h1>span').html();
						var price =$('.p2>span>ins').html();
						var num = $('.p7>input').val();
						var url = $('.bimg')[0].children[0].src;
						var username = $('.username').html();
						console.log(name,url)
						$.post('../html/car.php',{name:name,price:price,num:num,url:url,username:username},function(data){
							console.log(data)
						if(data&&data.code==0){
							alert('加入购物车成功!!!');
						}
					},'json')	
					   
				}) 
			}
			
		}
		//运费
		var price = {
			'福建':8,'上海':12,'浙江':8,'江苏':8,'山东':12,'安徽':12,'江西':12,'台湾':30,
			'广东':8,'广西':12,'海南':12,'香港':30,'澳门':30,
			'北京':12,'天津':12,'河北':12,'山西':13,'内蒙古':15,
			'湖南':12,'湖北':12,'河南':12,
			'辽宁':13,'吉林':13,'黑龙江':14,
			'陕西':12,'甘肃':13,'青海':14,'宁夏':14,'新疆':18,
			'四川':12,'重庆':12,'贵州':12,'云南':14,'西藏':18,
		} 
		$(function(){
			details.init();
			if(getCookie('username')!='' && getCookie('username')!=null){
				$('.username').html(getCookie('username'));
				$('.login1').hide();
				$('.login2').show();
			}else{
				$('.login1').show();
				$('.login2').hide();
			};
			if(getCookie('num')!='' && getCookie('num')!=null){
				$('#cart_num').html(getCookie('num')); 
			}
		});
		$(function(){
			$('#delcookie').on('click',function(){
				 	delCookie('username');
		            delCookie('password');
		             delCookie('num');
			})
		});
	});
})

