var mycanvas=document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");
var bird=new Image();
var birdTimer=null;
var birdX=50;
var birdY=200;
bird.onload=function(){
	if(birdTimer==null){
		birdTimer=setInterval(function(){
			if(birdY<464){
				birdY++;
			}
			ctx.clearRect(0,0,288,512);
			drawColumn();
			ctx.drawImage(bird,birdX,birdY);
		},10)
	}
}

mycanvas.onmousedown=function(){
	birdY-=40;
	bird.src="./img/bird0_0.png";
}
mycanvas.onmouseup=function(){
	bird.src="./img/bird0_2.png";
}

//柱子
var columnArr=[];
var columnTimer=null;
function createColumn(){
	columnTimer=setInterval(function(){
		var column={};
		column.x=450;
		column.y=-Math.round(Math.random()*136+92);
		column.columnA=new Image();
		column.columnB=new Image();
		column.columnA.src="./img/pipe_down.png";
		column.columnB.src="./img/pipe_up.png";
		column.id=new Date().getTime();
		columnArr.push(column);
	},2000)
	
}
createColumn();
var same=null;
var count=0;
function drawColumn(){
	for(var i=0; i<columnArr.length;i++){
		columnArr[i].x--;
		ctx.drawImage(columnArr[i].columnA,columnArr[i].x,columnArr[i].y);
		ctx.drawImage(columnArr[i].columnB,columnArr[i].x,columnArr[i].y+420);
		if(birdX+48>=columnArr[i].x&&birdX-52<=columnArr[i].x){
			//得分
			if(columnArr[i].id!=same){
				count++;
				same=columnArr[i].id;
				document.getElementById("count").innerHTML=count;
			}
			//碰撞
			if(birdY<columnArr[i].y+315||birdY+48>columnArr[i].y+425){
				clearInterval(columnTimer);
				clearInterval(birdTimer);
				var die=document.getElementById("die");
				die.children[1].innerHTML=`<p>最终得分：${count}</p>`;
				if(count>0&&count<10){
					die.children[0].src="./img/medals_3.png";
					die.style.display="block";
				}
				if(count>10&&count<20){
					die.children[0].src="./img/medals_2.png";
					die.style.display="block";
				}
				if(count>20&&count<30){
					die.children[0].src="./img/medals_1.png";
					die.style.display="block";
				}
				if(count>30){
					die.children[0].src="./img/medals_0.png";
					die.style.display="block";
				}
				setTimeout(function(){
					die.innerHTML="3秒后游戏重新开始!";
					location.reload();
				},3000)
				
			}
		}
	}
}