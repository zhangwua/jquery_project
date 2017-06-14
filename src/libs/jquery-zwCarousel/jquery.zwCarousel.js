 /*
	轮播图插件
	$不一定就是jQuery
 */
;(function($){
	// $.prototype = $.fn
	$.fn.lxCarousel = function(options){
		// 默认值
		var defaults = {
			height:480,
			index:0,
			lastIndex:0,
			autoPlay:true,
			duration:2000,
			type:'vertial'//vertial,horizontal,fade,show
		}

		// 覆盖默认值
		var opt = $.extend({},defaults,options);

		// 这里的this指向实例：$('.carousel')

		// 遍历jquery对象
		// 解决多个jquery对象使用插件的问题
		this.each(function(){

			// 这里的this指向DOM节点
			
			// 给this添加插件样式
			$(this).addClass('lxCarousel');


			// 生成图片结构
			var $ul = $('<ul/>');
			$ul.html($.map(opt.imgs,function(item,idx){
				return `<li><img src="${item}"></li>`;
			}).join(''));

			$(this).append($ul);

			// 生成页码 
			var $page = $('<div/>').addClass('page');
			$page.html($.map(opt.imgs,function(item,idx){
				if(idx==0){
					return `<span class="active">${idx+1}</span>`;
				}else{
					return `<span>${idx+1}</span>`;
				}
			}).join(''));
			$(this).append($page);
			//生成左右按钮
			var $btnPrev=$('<a/>').addClass('prev');
			$btnPrev.html('&lt;');
			$(this).append($btnPrev);

			var $btnNext=$('<a/>').addClass('next');
			$btnNext.html('&gt;');
			$(this).append($btnNext);
			// 默认索引值
			// 默认显示第一张图
			var index = 0;console.log($ul);
			//$ul.children().eq(1).css({'opacity',1});
			
			$list=$ul.find('li');
			$list[0].style.opacity=1;
			// 改变ul的宽度
			var timer=setInterval(autoplay,2000);

			//鼠标移入清除定时器
			$(this).on('mouseenter',function(){
				clearInterval(timer);
				$('.prev')[0].style.display='block';
				$('.next')[0].style.display='block';
			})

			//移出添加定时器
			$(this).on('mouseleave',function(){
				timer=setInterval(autoplay,2000);
				$('.prev')[0].style.display='none';
				$('.next')[0].style.display='none';
			})
				//左右按钮切换图片
			$btnPrev.on('click',function(){
				index--;
				showPic();
			})
			$btnNext.on('click',function(){
				index++;
				showPic();
			})

			//点击页码 切换图片
			$page.on('click','span',function(e){
				var target=e.target;
				index=target.innerText-1;
				showPic();
			})
			function autoplay(){
				index++;
				showPic();
			}
			function showPic(){ 

				if(index > opt.imgs.length-1){
					index = 0;
				}else if(index < 0){
					index = opt.imgs.length-1;
				}
				

				// 轮播动画
				$ul.children().eq(index).animate({opacity:1});
				$ul.children().eq(index).siblings().animate({opacity:0});


				// 给页码添加高亮
				$page.children().eq(index).addClass('active').siblings().removeClass('active');
			}
			$(this).stop(false,true);
		});

		// 为了链式调用
		return this;
	}

	// $.fn.extend({
	// 	lxCarousel:function(){},

	// })
	
})(jQuery);