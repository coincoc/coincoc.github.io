//让背景动起来
var jsBg1=document.getElementById("bg1");
var jsBg2=document.getElementById("bg2");
var mainScreen = document.getElementById("mainScreen")
var timerBg = setInterval(function(){
    jsBg1.style.top=jsBg1.offsetTop+1+"px";
    jsBg2.style.top=jsBg2.offsetTop+1+"px";
    if(jsBg1.offsetTop>768){
        jsBg1.style.top="-768px";
    }
    if(jsBg2.offsetTop>768){
        jsBg2.style.top="-768px";
    }

},10)


//飞机拖拽
var airplane=document.getElementById("airplane");
airplane.addEventListener("mousedown",function(e){
    var evt= e || window.event;
    var basex=evt.pageX;
    var basey=evt.pageY;

    var movex=0;
    var movey=0;
    mainScreen.addEventListener("mousemove",function(e){
        var evt= e || window.event;
        movex=evt.pageX-basex;
        basex=evt.pageX;
        movey=evt.pageY-basey;
        basey=evt.pageY;
        airplane.style.left=airplane.offsetLeft+movex+"px";
        airplane.style.top=airplane.offsetTop+movey+"px";
    },false)
},false)


//发射子弹
var timerBullet = setInterval(function(){
    //创建子弹
    var bullet=document.createElement("div");
    bullet.className="bullet";
    mainScreen.appendChild(bullet);
    bullet.style.left=airplane.offsetLeft+53+"px";
    bullet.style.top=airplane.offsetTop-2+"px";
    //让子弹飞
    var timerBulletFly=setInterval(function(){
        bullet.style.top=bullet.offsetTop-10+"px";
        if(bullet.offsetTop<-20){
            clearInterval(timerBulletFly);
            mainScreen.removeChild(bullet)
        }
    },30)
    bullet.timer=timerBulletFly;
},1000)


//敌人
var timertank = setInterval(function(){

    var tank=document.createElement("div");
    tank.className="tank";
    mainScreen.appendChild(tank);
    tank.style.left=Math.random()*472+"px";
    tank.style.top=0;
//敌人下落
    var timerTankFly=setInterval(function(){
        tank.style.top=tank.offsetTop+10+"px";
        if(tank.offsetTop>768){
            clearInterval(timerTankFly);
            mainScreen.removeChild(tank)
        }
    },50)
    tank.timer=timerTankFly;
},1000)


//子弹敌人碰撞
var timerAll=setInterval(function(){
    var allTanks=document.getElementsByClassName("tank");
    var allBullets=document.getElementsByClassName("bullet");
    for(var i=0;i<allBullets.length;i++){
        for(var j=0;j<allTanks.length;j++){
            var b=allBullets[i];
            var t=allTanks[j];
            if(checkCollidediv(b,t)){
                clearInterval(b.timer);
                clearInterval(t.timer);
                mainScreen.removeChild(b);
                mainScreen.removeChild(t);
                break;
            }
    }
}
},30)

//飞机敌人碰撞
var timerAll1=setInterval(function(){
    var allTanks=document.getElementsByClassName("tank");
    var airplane=document.getElementById("airplane");
    for(var i=0;i<allTanks.length;i++){
        t=allTanks[i];
        if(checkCollidediv(airplane,t)){
            clearInterval(t.timer);
            mainScreen.removeChild(t);
            if(window.confirm("游戏结束！！")){
                window.location.reload();
            }else{
                window.location.href="http://www.baidu.com";
            }
            
        }
    }
},30)


function checkCollidediv(obj1,obj2){
    var left1=parseInt(window.getComputedStyle(obj1).left);
    var top1=parseInt(window.getComputedStyle(obj1).top);
    var width1=parseInt(window.getComputedStyle(obj1).width);
    var height1=parseInt(window.getComputedStyle(obj1).height);

    var left2=parseInt(window.getComputedStyle(obj2).left);
    var top2=parseInt(window.getComputedStyle(obj2).top);
    var width2=parseInt(window.getComputedStyle(obj2).width);
    var height2=parseInt(window.getComputedStyle(obj2).height);

    var x=Math.abs((left1+width1/2)-(left2+width2/2));
    var y=Math.abs((top1+height1/2)-(top2+height2/2));
    var w=(width1+width2)/2+1;
    var h=(height1+height2)/2+1;
    if(x<w && y<h){
        return true;
    }else{
        return false;
    }
}

