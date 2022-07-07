var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouse = "empty";
var lastX , lastY;
var color="black";
var widthLine = 6;

canvas.addEventListener("mousedown", mousedown);

function mousedown(e){
    
    color = document.getElementById("color").value;
    widthLine = document.getElementById("width_of_length").value;
    mouse = "mousedown";
}

canvas.addEventListener("mouseup", mouseup);

function mouseup(e){
    mouse = "mouseup";
    
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e){
    mouse = "mouseleave";
    
}

canvas.addEventListener("mousemove", mousemove);

function mousemove(e){
    
    var currentx = e.clientX - canvas.offsetLeft;
    var currenty = e.clientY - canvas.offsetTop;
    if(mouse == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
   ctx.arc(currentx, currenty, 20,0,360);
    ctx.stroke();
    }

    lastX = currentx;
    lastY = currenty;
    
}

function cleararea(){
    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
}