/**
 * Created by Administrator on 2016/6/4.
 */

//title处理
var titleTime, oldTitle = document.title;
document.addEventListener('visibilitychange',function (){
    if(document.hidden){
        document.title = '(●—●)咦，去哪儿啊？)';
    }else{
        document.title = '(/≧▽≦/)欢迎回来！' + oldTitle;
        titleTime = setTimeout(function (){
            document.title = oldTitle;
        },2000);
    }
});