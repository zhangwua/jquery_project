
// 工具类
var Util = {
    _timer: null,
    showTip: function(str) {
        var dom = $('<div class="f-tips"></div>').text(str),
            old = $('.f-tips');
        if (old.length) {
            old.replaceWith(dom); // replaceWith() 方法用指定的 HTML 内容或元素替换被选元素。
        } else {
            $(document.body).append(dom);
        }
        clearTimeout(this._timer);
        this._time = setTimeout(function() {
            dom.css("opacity", "0").remove();
        }, 2000);
    },

    getQuery: function(name, url) {
        var u = url || location.search,
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r = u.substr(u.indexOf("\?") + 1).match(reg);
        return r != null ? r[2] : "";
    }
}
//判断是否符合手机格式
function isMobile(tel) {
    return /^1\d{10}$/.test(tel);
}
//通过cookie名称获取cookie信息
function getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
        val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
}
//存储cookie
//name 名称/账号   value 要存储信息/密码   expires 有效期（单位为毫秒）
//其他参数可忽略   不需要写
function setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date(),
        expires = arguments[2] || null,
        path = arguments[3] || "/",
        domain = arguments[4] || null,
        secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}
//删除cookie  只需传入参数  name即可
function delCookie(name, path, domain, secure) {
    var value = getCookie(name);
    if (value != null) {
        var exp = new Date();
        exp.setMinutes(exp.getMinutes() - 1000);
        path = path || "/";
        document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }
}
//倒计时
function countdown(endtime){
        var time = new Date();
        var b = time.getTime();
        var c = endtime-b;
        var d=parseInt(c/1000);
        var minutes1 = parseInt(d/60)%60;
        var seconds1 = d%60;
        var hours1 = parseInt(d/3600)%24;
        var day1 = parseInt(d/3600/24);
        if(day1<10){
            day1 = '0'+day1
        }
         if(hours1<10){
            hours1 = '0'+hours1
        }
         if(minutes1<10){
            minutes1 = '0'+minutes1
        }
         if(seconds1<10){
            seconds1 = '0'+seconds1
        }
        return day1+'天'+hours1+':'+minutes1+':'+seconds1
}