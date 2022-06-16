canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
Color = "red";
ctx.beginPath();
ctx.strokeStyle = Color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
mouse_x = e.clientX
mouse_y = e.clientY
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    Color = document.getElementById("color").value;
    console.log(Color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsettop;

    console.log("X = " + mouse_x + " ,Y =  "  + mouse_y);
    circle(mouse_x , mouse_y);
}