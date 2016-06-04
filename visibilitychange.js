/**
 * Created by Administrator on 2016/6/4.
 */

//title处理
var titleTime, oldTitle = document.title;
document.addEventListener('visibilitychange',function (){
    if(document.hidden){
        document.title = '(●—●)咦，去哪儿啊？)';
        document.getElementById('shortcut').href = 'http://7xon9l.com1.z0.glb.clouddn.com/fail.ico';
    }else{
        document.title = '(/≧▽≦/)欢迎回来！' + oldTitle;
        document.getElementById('shortcut').href = 'http://dengxiaozhen.github.io/favicon.ico';
        titleTime = setTimeout(function (){
            document.title = oldTitle;
        },2000);
    }
});