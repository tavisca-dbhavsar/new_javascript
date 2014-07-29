/*window_x=window.innerwidth;
window_y=window.innerheight;*/

var x=20;
//var y = 250;
var y=window.innerHeight/2;
var dx = 5;
var dy = 3;

function draw()
{   

var ball = document.getElementById("circleId");

ball.style.position = "relative";
ball.style.top = y;
ball.style.left = x;
//if( x<0 || x>450)
if( x<0 || x>window.innerWidth-50)
dx=-dx;
/*if( y<0 || y>450)*/
if( y<0 || y>window.innerHeight-50)
dy=-dy;
x=x+dx;
y=y+dy;

}
setInterval(draw,10); 
