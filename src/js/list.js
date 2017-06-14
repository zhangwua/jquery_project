
	var list={
		init:function(){
		 this.load();
		 this.listen();
		 this.addcart();
		 this.readcart();
		},

		load:function(){
			var self=this

				$('.spinner').css('display','block');

				setTimeout(function(){self.ajax()},parseInt(Math.random()*2000+1000))

		},
		ajax:function(){
			var self=this
			$.post('../html/list.php',{},function(data){
				$('.spinner').css('display','none');
				data=JSON.parse(data)
				if(data.code==0){
					self.createdom(data.data,$('.goods'),true)
				}
				self.flag=true;
			})
		},

		readcart:function(){
			var self=this;
			var username=getCookie('username');
			$.post('../html/car1.php',{username:username},function(data){
					
							if(data&&data.code==0){
								self.createdom(data.data,$('.cart-list>ul'),false)
							}
							
					}) 
 
		}, 
		addcart:function(){
			var self=this;
			$('.goods').on('click',function(e){
					if(e.target.tagName.toLowerCase()==='button'){	
						 var username=getCookie('username');
						 var btn=$(e.target)	
						 console.log(username,btn.parent().find('.list-name').text())				
				 		$.post('../html/car.php',{
				 			
							username:username,
							name:btn.parent().find('.list-name').text(),
							price:btn.parent().find('.list-price').text(),
							url:btn.parent().find('.list-url>img').attr('src'),
							num:1
						},function(res){
							var resoult=JSON.parse(res)
							//alert(resoult.msg)
							self.readcart();

						})
					}

			})
		},
		listen:function(){
			this.flag=true;
			var self=this
			$(window).scroll(function(){
				var scrollTop = window.scrollY;//document.body.scrollTop/document.documentElement.scrollTop
			//判断接近底部时
			if(scrollTop >= $('.goods')[0].offsetHeight - window.innerHeight - 100&&self.flag){
				self.flag=false;
				self.load();
			}

			})
		},
		createdom:function(data,ele,flag){
			var arr=[];
				data.forEach(function(attrs,idx){
								arr.push('<li>')
								for(attr in attrs){
									arr.push('<div class="list-'+attr+'">');
									if(attr=='url'){
										arr.push('<img src="'+attrs[attr]+'"></div>')
									}else{
										var yy='';
										
										
										arr.push('<p>'+yy+attrs[attr]+'</p></div>')
									}
								}
								if(flag){
									arr.push('<button>加入购物车</button>')
								}
								arr.push('</li>')
							})			
			ele.append(arr.join(''));
		
		},

	}
$(function(){ 
	list.init();
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
	})
});
$(function(){
	if(getCookie('username')!='' && getCookie('username')!=null){
		$('.username').html(getCookie('username'));
	}
	list.init();
});
window.onload=function(){
	// 1）给按钮绑定点击事件
	var $goodsList = $('.goods');
	var $carList = $('.cart-list ul');

	$goodsList.on('click','button',function(){
        var $currentLi = $(this).closest('li');
        console.log(666)
        // 当前商品图片
        var $img = $currentLi.find('.list-url').children('img');
        console.log($img)

        // 把复制的图片写入页面，并设置样式
        var $cloneImg = $img.clone();
        $cloneImg.css({
            position:'absolute',
            left:$img.offset().left,
            top:$img.offset().top,
            width:$img.outerWidth(),
            height:$img.outerHeight()
        }).appendTo('body');


        // 2>复制当前商品所有信息(用于往购物车添加)
        // 删除无用的“添加到购物车”按钮
        // 添加删除按钮
        var $cloneLi = $currentLi.clone();
        $cloneLi.find('button').remove();
        $('<span/>').addClass('btn-close').html('&times;').appendTo($cloneLi);

        // 图片飞入动画效果
        // 动画完成后，把复制li写入购物车列表
        $cloneImg.animate({
            left:$carList.offset().left,
            top:$carList.offset().top + $carList.outerHeight(),
            width:10,
            height:10
        },function(){
           $cloneLi.appendTo($carList);

           // 删除动画图片
           $cloneImg.remove();
        });

	});


	// 删除购物车商品
	$carList.on('click','.btn-close',function(){
	var $currentLi = $(this).closest('li');
	$currentLi.remove();
	})
}
