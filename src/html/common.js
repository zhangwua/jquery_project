// 获取一个100-1000的随机整数数
function randomNum(min,max){
	var res = parseInt(Math.random()*(max-min+1)) + min;

	// 返回随机数
	return res;

	console.log(666);
	console.log(res);
}


// 随机颜色
function randomColor(){
	var r = randomNum(0,255);
	var g = randomNum(0,255);
	var b = randomNum(0,255);

	return 'rgb('+r+','+g+','+b+')';
}

/**
 * [过滤文本节点，得到元素节点]
 */
function getEle(nodes){
	var res = [];
	for(var i=0;i<nodes.length;i++){
		// 通过节点类型去判断
		if(nodes[i].nodeType === 1){
			res.push(nodes[i]);
		}
	}

	return res;
}

// getEle(nodes);//得到元素

//封装一个获取上一个兄弟元素方法
//prevEle()
function prevEle(node){
	// 获取前一个节点（但可能是文本节点）
	var prev = node;

	// 判断是否为第一个元素
	do{
		prev = prev.previousSibling;
	}while(prev && prev.nodeType != 1 && prev != node.parentNode.firstChild);


	return prev;
}


// 封装一个获取下一个兄弟元素的方法
// nextEle()
function nextEle(node){
	var next = node.nextSibling;

	while(nex.nodeType != 1){
		next = next.nextSibling;
	}

	return next;
}

/**
 * [getCss 
 * 获取元素css样式
 * 兼容IE8以下的浏览器
 * ]
 * @return {string} [css样式]
 */
function getCss(ele,attr){
	// 高级浏览器写法
	if(window.getComputedStyle){
		return getComputedStyle(ele)[attr];
	}

	// IE8-
	else if(ele.currentStyle){
		return ele.currentStyle[attr];
	}

	// 如果两者都不支持，直接返回内联样式
	else{
		return ele.style[attr]
	}
}

// getCss(box,'font-size');//=>12px;


/**
 * [给元素添加事件的方法，兼容ie8-]
 * @param {[DOM]} ele    [需要绑定事件的元素]
 * @param {[String]} type   [事件类型]
 * @param {[Function]} handle [事件处理函数]
 * @param {[Boolean]} capture [是否捕获]
 */
function addEvent(ele,type,handle,capture){
	// 标准浏览器
	if(ele.addEventListener){
		ele.addEventListener(type,handle,capture);
	}

	// IE8-
	else if(ele.attachEvent){
		ele.attachEvent('on' + type,handle);
	}

	// 如果以上两种都不支持，则使用传统事件绑定方式
	else{
		ele['on' + type] = handle
	}
}

//addEvent(ele,'click',function(){})


//cookie操作
//写入，读取，删除

/**
 * [设置cookie]
 * @param {[String]} name    [cookie名]
 * @param {[String]} val     [cookie值]
 * @param {[Date]} expires 	 [cookie有效期]
 * @param {[String]} path    [cookie保存路径]
 */
function setCookie(name,val,expires,path){
	var str = name + '=' + val;

	if(expires){
		str +=';expires=' + expires;
	}

	if(path){
		str += ';path=' + path;
	}


	document.cookie = str;
}
// setCookie('left',100);


function getCookie(name){
	// 得到所有的cookie
	var cookies = document.cookie;

	var res = '';

	if(cookies.length){
		cookies = cookies.split('; ');
		cookies.forEach(function(item){
			var arr = item.split('=');
			if(arr[0] === name){
				res = arr[1];
			}
		})
	}

	return res;
}
//var left = getCookie('left');//100


function removeCookie(name){
	var now = new Date();
	now.setDate(now.getDate()-7);

	// setCookie(name,null,now);
	document.cookie = name + '=null;expires=' + now;
}
//removeCookie('left')

/**
 * [动画函数]
 * @param  {[Element]}   ele      [动画元素]
 * @param  {[String]}   attr     [动画css属性名]
 * @param  {[Number]}   target   [动画的目标值]
 * @param  {Function} callback 	 [回调函数：当前动画完成后再调用的函数]
 */
/*function animate(ele,attr,target,callback){

	// 把timer跟DOM节点绑定
	// 用属性区分不同的timer
	var timerName = attr + 'timer';
	clearInterval(ele[timerName]);

	ele[timerName] = setInterval(function(){
		// 获取当前值
		var current = getCss(ele,attr);//10px,5em,8rem,30deg,0.5

		// 提取单位
		var unit = current.match(/[a-z]+$/i);

		// unit为null时，单位为空字符串
		unit = unit ? unit[0] : '';

		// 去掉单位，以便计算
		current = parseFloat(current);

		// 根据当前值和目标值计算速度
		var speed = (current - target)/10;

		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


		// 当到达目标值时，清除定时器
		if(current == target){
			clearInterval(ele[timerName]);

			current = target + speed;

			// 执行回调函数
			if(typeof callback === 'function'){
				callback();
			}
		}


		// 不断改变ele的attr属性
		ele.style[attr] = current - speed + unit;
	},30);
}*/

// 
// animate(box,'left',-810)
// animate(box,'left',-1620)
// animate(box,'opacity',0.5)


// animate(box,{width:500,height:200,left:500})
function animate(ele,options,callback){
	// 记录属性个数
	var timerLen = 0;

	// 遍历options对象
	// 为每个属性设置定时器
	for(var attr in options){
		timerLen++;
		createTimer(attr);
	}

	function createTimer(attr){
		// 把timer跟DOM节点绑定
		// 用属性区分不同的timer
		var timerName = attr + 'timer';
		clearInterval(ele[timerName]);

		// 获取目标值
		var target = options[attr];//0.5

		ele[timerName] = setInterval(function(){
			// 获取当前值
			var current = getCss(ele,attr);//10px,5em,8rem,30deg,1

			// 提取单位
			var unit = current.match(/[a-z]+$/i);

			// unit为null时，单位为空字符串
			unit = unit ? unit[0] : '';

			// 去掉单位，以便计算
			current = parseFloat(current);

			// 根据当前值和目标值计算速度
			var speed = (current - target)/10;

			if(attr === 'opacity'){
				// 透明度速度
				speed = speed>0 ? 0.05 : -0.05;
				// speed = Number(speed.toFixed(2));
			}else{
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			}

			


			// 当到达目标值时，清除定时器
			if(current == target){
				clearInterval(ele[timerName]);

				current = target + speed;

				// 每一个定时器完成timerLen减一
				timerLen--;

				// 执行回调函数
				// 最后一个动画完成时才执行回调函数
				if(typeof callback === 'function' && timerLen === 0){
					callback();
				}
			}


			// 不断改变ele的attr属性
			ele.style[attr] = current - speed + unit;
		},30);
	}
	
}