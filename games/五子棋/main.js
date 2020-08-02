var can=document.getElementById("can");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btnres="";
var con=can.getContext('2d');
var me=true;
var over=false;
var chessbox=[];

/*规则*/

//声明一个三维数组
var wins=[];
for(var i=0;i<15;i++){
	wins[i]=[];
	for(var j=0;j<15;j++){
		wins[i][j]=[];
	}
}
//赢法统计数组
var mywin=[];
var comwin=[];

//赢法数组
var count=0;
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count]=true;
		}
		count++;
	}
}
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[j+k][i][count]=true;
		}
		count++;
	} 
}
for(var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count]=true;
		}
		count++;
	} 
}
for(var i=0;i<11;i++){
	for(var j=14;j>3;j--){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count]=true;
		}
		count++;
	} 
}
// console.log(count);
//赢法统计数组
for(var i=0;i<count;i++){
	mywin[i]=0;
	comwin[i]=0;
}

for(var i=0;i<15;i++){
	chessbox[i]=[];
	for(var j=0;j<15;j++){
		chessbox[i][j]=0;
	}
}
var onload=function(){
	chess_();
	people();
	
}
var chess_=function(){
for(var i=0;i<15;i++){
	con.moveTo(15+i*30,15);
	con.lineTo(15+i*30,435);
	con.moveTo(15,15+i*30);
	con.lineTo(435,15+i*30);
	con.stroke();
}
}
var drawchess=function(i,j,me){
	con.beginPath();
	con.arc(i*30+15,j*30+15,13,0,2*Math.PI);
	if(me){
		con.fillStyle="black";
	}else{
		con.fillStyle="white";
	}
	con.fill();
	con.stroke();
	con.closePath();
}
btn1.onclick=function(){
	can.style.display="block";
	btnres="people";
}
btn2.onclick=function(){
	can.style.display="block";
	btnres="nopeople";
}
var people=can.onclick=function(e){
	//人人
	if(btnres=="people"){
	if(over){
		return;
	}
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(chessbox[i][j]==0){
		drawchess(i,j,me);
	if(me){
		chessbox[i][j]=1;
	}else{
		chessbox[i][j]=2;
	}
		me=!me;
		for(var k=0;k<count;k++){
			if(wins[i][j][k]){
				//黑
				if(chessbox[i][j]==1){
				mywin[k]++;
				comwin[k]=6;
				if(mywin[k]==5){
					alert("black win!");
					over=true;
					}}
				//白
				if(chessbox[i][j]==2){
				comwin[k]++;
				mywin[k]=6;
				if(comwin[k]==5){
					alert("white win!");
					over=true;
					}}	
					
					
			}
		}
		
		} }	


		//人机
		if(btnres=="nopeople"){
		if(over){
			return;
		}
		if(!me){
			return;
		}
		var x=e.offsetX;
		var y=e.offsetY;
		var i=Math.floor(x/30);
		var j=Math.floor(y/30);
		if(chessbox[i][j]==0){
			drawchess(i,j,me);
			chessbox[i][j]=1;
			for(var k=0;k<count;k++){
				if(wins[i][j][k]){
					mywin[k]++;
					comwin[k]=6;
					if(mywin[k]==5){
						alert("black win!");
						over=true;
						}						
				}
			}
			if(!over){
				me=!me;
				comai();
			}
			} }		
			//
			
			
}
/////
var comai=function(){
	var max=0;
	var u=0,v=0;
	var mys=[];
	var coms=[];
	for(var i=0;i<15;i++){
		mys[i]=[];
		coms[i]=[];
		for(var j=0;j<15;j++){
			mys[i][j]=0;
			coms[i][j]=0;
		}
	}
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			if(chessbox[i][j]==0){
				for(var k=0;k<count;k++){
					if(wins[i][j][k]){
						//wo
						if(mywin[k]==1){
							mys[i][j]+=200;
						}else if(mywin[k]==2){
							mys[i][j]+=400;
						}
						else if(mywin[k]==3){
							mys[i][j]+=2000;
						}
						else if(mywin[k]==4){
							mys[i][j]+=10000;
						}
						
						//com
						if(comwin[k]==1){
							coms[i][j]+=220;
						}else if(comwin[k]==2){
							coms[i][j]+=420;
						}
						else if(comwin[k]==3){
							coms[i][j]+=2100;
						}
						else if(comwin[k]==4){
							coms[i][j]+=2000;
						}
						///
					}
				}//k
				//my
				if(mys[i][j]>max){
					max=mys[i][j];
					u=i;
					v=j;
				}else if(mys[i][j]==max){
					if(coms[i][j]>coms[u][v]){
						u=i;
						v=j;
					}
				}
				//com
				if(coms[i][j]>max){
					max=coms[i][j];
					u=i;
					v=j;
				}else if(coms[i][j]==max){
					if(mys[i][j]>mys[u][v]){
						u=i;
						v=j;
					}
				}
				///
				
			}
		}
	}//
	drawchess(u,v,false);
	chessbox[u][v]=2;
	for(var k=0;k<count;k++){
		if(wins[u][v][k]){
			comwin[k]++;
			mywin[k]=6;
			if(comwin[k]==5){
				alert("com win!");
				over=true;
				}				
		}	
	}
	if(!over){
			me=!me;
		}
	//
}



