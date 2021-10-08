var mouse_event="";
var last_x_postion;
var last_y_postion;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mouseup", Up);
function Up(){
    mouse_event="Up";
}
canvas.addEventListener("mouseleave", Leave);
function Leave(){
    mouse_event="Leave";
}
canvas.addEventListener("mousedown", Down);
function Down(){
    mouse_event="Down";
}
canvas.addEventListener("mousemove", Move);
function Move(){
   current_x_postion=e.clientX - canvas.offsetLeft;
   current_y_postion=e.clientY - canvas.offsetTop;
    
   if(mouse_event=="Down"){
       ctx.beginPath();
       ctx.strokeStyle=Purple;
       ctx.moveTo(last_x_postion, last_y_postion);
       ctx.lineTo(current_x_postion, current_y_postion);
       ctx.stroke();
   }
   last_x_postion=current_x_postion;
   last_y_postion=current_y_postion
}