require(['config'],function(){
  // 只要common定义成符合标准的模块，就可以在回调函数中使用模块
  require(['jquery','common'],function(){
    $(function(){
        $('#btn').click(function(){
          $.post('../html/login.php',{
              username: $('#username').val(),
              password: $('#password').val(),
            }, function(data){
               var $obj = eval('(' + data + ')');
              if($obj.state){
                alert($obj.message)
                delCookie('username');
                delCookie('password');
                setCookie('username',$('#username').val(),100000000000);
                setCookie('password',$('#password').val(),100000000000);
                  window.location.href='http://localhost/h5_1701/feihu/src/index.html'
              } else {
                alert($obj.message);  
              }
            })
            return false;         
          })
        });
      $(function(){ 
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

  