


var Globalball;
var dx = 5;
var dy = 5;
window.onload=function(){

var btnNew = document.getElementById("btnAdd");
btnNew.addEventListener('click',buttonClick);
}

var buttonClick = function() {
Globalball = new Ball(0,window.innerHeight/2,5,5);
setInterval(Globalball.move,10);
}

var Ball = function(x,y,dx,dy){
var ball = document.createElement("div");
ball.style.display= "block";
ball.style.width= "30px";
ball.style.height= "30px";
ball.style.backgroundColor= "blue";
ball.style.borderRadius= "15px";
ball.style.position = "relative";
ball.style.top = y + 'px';
ball.style.left = x + 'px';
document.body.appendChild(ball);
this.x = x;
this.y = y;
//setInterval(function(){obj.animate();},10);
//setInterval(obj.animate(),10);

this.move = function(){
	//to remove px from 
var prev_xPos = parseInt(ball.style.left.substring(0,ball.style.left.length-2));
var prev_yPos = parseInt(ball.style.top.substring(0,ball.style.top.length-2));
if( prev_xPos<0 || prev_xPos>(window.innerWidth-50))
dx=-dx;
if( prev_yPos<0 || prev_yPos>(window.innerHeight-50))
dy=-dy;
var xpos = prev_xPos + dx;
var yPos = prev_yPos + dy;
ball.style.top=yPos;
ball.style.left=xpos;
}
}


















