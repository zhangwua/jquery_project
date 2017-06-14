require.config({
   	// baseUrl : "js",//

   	// 配置别名
   	// 使用短文件名
    paths : { 
    	// 这里的路径也是基于baseURl
		"jquery": "../libs/jquery-3.1.1",

		// jquery插件依赖jQuery
		'zwCarousel':'../libs/jquery-zwCarousel/jquery.zwCarousel',
    'validate':'../libs/jquery-validate/jquery.validate',
    'localization':'../libs/jquery-validate/localization/messages_zh'
    },
 
    shim:{
    	// 给gdszoom添加依赖
    	'zwCarousel':['jquery'],
      'validate':['jquery'],
      'localization':['jquery']
    }
});