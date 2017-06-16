require(['config'],function(){
	//这里的代码在config文件加载完成后执行
	
	require(['common','jquery','zwCarousel'],function(){ 
		var index = {
			init:function(){
				this.active_img();
				this.move_img();
			}, 
			
			//图片换色
			move_img:function(){
				var $move_img=$('.w1200>.pro_item1>.pro_01>div')
				$move_img.on('mouseenter',function(){
					$(this).css('backgroundPositionY','-67px');
					$(this).find('span')[0].style.color="#fff"
				})
				$move_img.on('mouseleave',function() { 
					$(this).css('backgroundPositionY','-439px');
					$(this).find('span')[0].style.color="#000"
				}) 
			},
			// 图片抖动
			active_img:function(){
				var $active_img = $('.w1200>.pro_item1>.pro_blank>.pro_clearfix');
				$active_img.mouseenter(function(m){
					$(this).animate({left:'-4px'},600); 
				})
				$active_img.mouseleave(function() { 
					$(this).animate({left:'0px'},300);
				}) 
			},
			
		};
		$(function(){ 
			index.init();
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
		            $('.login1').show();
					$('.login2').hide(); 
			})
		});
		//插件编写大轮播图
		$(function(){    
					$('.carousel').lxCarousel({
						imgs:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg'],
						// width:810,
						// height:320,
						autoPlay:false,
						index:6,
					}).css('background-color','#f00');
		});
	})
});



