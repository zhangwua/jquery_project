require(['config'],function(){
	// 只要common定义成符合标准的模块，就可以在回调函数中使用模块
	require(['jquery','common'],function(){
		var cart = {
			dom:{},
			init:function(){
				this.bindEvent();
			},
			bindEvent:function(){
				var username = getCookie('username')
				// 获取购物车信息
				$.get('../html/car1.php',{username:username},function(data){
					if(data && data.code == 0) {
						  
						var data = data.data;
						var tbody=$('table>tbody');
							let html = data.map(data=>{
								var name=data.name
								var tprice=data.num*data.price;
								return `
									<tr>
										<td><input type='checkbox' class="checkbox"></td>
										<td class="tab_pic"><img src="${data.url}" alt="" style="width: 100px;height: 100px;"></td>
										<td class="tab_name"><h3>${data.name}</h3></td>
										<td class="num"><i class='subtract'>-</i><input type='text' value='${data.num}'><i class='add'>+</i></td>
										<td class="price">${data.price}</td>
										<td class="subtotal">￥${tprice}</td>
										<td><a class='delcart' href='#'>删除</a></td>
									</tr>
								`
							}).join('');
							tbody.html(html);
						$('.allselect').click(function(){
							if($(this).is(':checked')){
								$('input[type=checkbox]').attr('checked',true);
							}else{
								$('input[type=checkbox]').attr('checked',false);
							}
							cart.pricetotal(); 
						})
						$('.num>i').click(function(){
							if($(this).attr('class')=='subtract'){
								$(this).next().val($(this).next().val()-1) 
								if($(this).next().val()<0){
									$(this).next().val(0);
								} 

							} 
							if($(this).attr('class')=='add'){
								$(this).prev().val(parseInt($(this).prev().val())+1)
							}
							$(this).parent().find('.subtotal').html($(this).parent().find('.price')*parseInt($(this).parent().find('input').val()))
							cart.pricetotal();
						})
						$('input[type=checkbox]').click(function(){
							cart.pricetotal(); 
						})
						// 删除一条 
						$('.delcart').click(function(){
							var name = $(this).parent().parent().find('.tab_name>h3').html();
							console.log(name)
							$.get('../html/delete.php',{name:name},function(data){
								if(data&&data.code==0){
									
									//$(this).parent().parent().html()='';
									cart.init();
									cart.pricetotal();

								}else{
									alert(data.msg)
								}
							},'json')
							
							return false;

						})
						// 删除选中商品
						$('.delselect').click(function(){
							$('.checkbox').each(function(){
								if($(this).is(':checked')){
									var name = $(this).parent().parent().find('.tab_name>h3').html();
									$.get('../html/delete.php',{name:name},function(data){
										if(data&&data.code==0){
											cart.init();
											cart.pricetotal();
										}else{
											alert(data.msg)
										}
									},'json')
								}
							})
							return false;
							
						})
						// 删除全部
						$('.delall').click(function(){
							$('.checkbox').each(function(){
							var name = $(this).parent().parent().find('.tab_name>h3').html();

								$.get('../html/delete.php',{name:name},function(data){
									if(data&&data.code==0){
										cart.init();
										cart.pricetotal();
									}else{
										alert(data.msg)
									}
								},'json')
							})
							location.reload()
						})
					}
					cart.pricetotal();
				},'json')
				return false;
			},
			//计算总价
			pricetotal:function(){
				$('.clearing>span>i').html('0')
				var pricetotal = 0;		
					var num=0; 
				$('.tab_name').each(function(index){
					num = num + parseInt($(this).parent().find('.num>input').val());
					pricetotal+=parseInt($(this).parent().find('.num>input').val())*$(this).parent().find('.price').html();
					delCookie('num');
					setCookie('num',num,1000000000);
					console.log(num)
					return num,pricetotal;
				})
				$('.clearing>span>i').html(num); 
				$('.clearing>span>ins').html('￥'+pricetotal);

				
			}
		}
		$(function(){ 
			cart.init();
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
			cart.init();
		});
	});
})








		