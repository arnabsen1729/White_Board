var canvas = document.getElementById('board');
var RedPen =document.getElementById('red');
var BluePen =document.getElementById('blue');
var GreenPen =document.getElementById('green');
var BlackPen =document.getElementById('black');
var YellowPen =document.getElementById('yellow');
var Rubber = document.getElementById('rubber');
var Clear = document.getElementById('clear');
var ctx = canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.lineCap = "round";
ctx.lineWidth = 2;
// ctx.moveTo(10,0);
// ctx.lineTo(200,100);
// ctx.stroke();
var lastX=0,lastY=0;
var isMouseDown =false;

canvas.addEventListener('mousedown', (e)=> {
    lastX=e.offsetX;
    lastY=e.offsetY;
    isMouseDown=true;

});

canvas.addEventListener('mousemove', (e)=> {
    if(!isMouseDown)return;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;

});

canvas.addEventListener('mouseup', (e)=> {
    isMouseDown=false;
});


RedPen.addEventListener('click', (e)=> {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;

});
BluePen.addEventListener('click', (e)=> {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;

});
GreenPen.addEventListener('click', (e)=> {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;

});
BlackPen.addEventListener('click', (e)=> {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

});
Rubber.addEventListener('click', (e)=> {
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 20;
    ctx.strokeStyle = "rgba(255,255,255,1)";

});
YellowPen.addEventListener('click', (e)=> {
    ctx.lineWidth = 20;
    ctx.globalCompositeOperation = "destination-over";
    ctx.strokeStyle = "rgba(255,255,0,0.5)";    

});
Clear.addEventListener('click', (e)=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

});






