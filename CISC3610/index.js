function changeCanvasColor(){
    var canvas = document.getElementById("mycanvas");
    var context= canvas.getContext("2d");
    //creates the gradiant background
    const grd = context.createLinearGradient(0, 600, 0, 0);
    grd.addColorStop(0, "#00FFFF");
    grd.addColorStop(1, "white");
    context.fillStyle = grd;
    context.fillRect(0,0,canvas.width,canvas.height);
    //visual for the sand
    context.fillStyle = "#C2B280";
    context.fillRect(0,500,canvas.width,canvas.height);
    //patricks house
    context.arc(150, 500, 100, 0, Math.PI , true); 
    context.fillStyle = "#5C4033";
    context.fill()
    //2 lines for top of paticks house
    context.beginPath();
    context.moveTo(145, 350);
    context.lineTo(145, 410);
    context.moveTo(120, 370);
    context.lineTo(160, 370);
    context.strokeStyle = "yellow";
    context.stroke();
    //arrow for top of patricks house
    context.moveTo(100, 375);
    context.lineTo(130, 385);
    context.lineTo(130, 360);
    context.fillStyle = "yellow";
    context.fill();
    //squidwards house   
    context.fillStyle = "blue";
    context.fillRect(400,250,150,250);
    //eyes
    context.beginPath();
    context.arc(440, 340, 20, 0, Math.PI *2, true); 
    context.arc(510, 340, 20, 0, Math.PI *2, true); 
    context.fillStyle = "#00FFFF";
    context.fill()
    //parts
    context.fillStyle = "#050A30";
    context.fillRect(460,350,30,75);
    context.fillRect(380,330,30,75);
    context.fillRect(540,330,30,75);
    context.fillRect(400,300,150,25);
    //door
    context.beginPath();
    context.arc(475, 455, 30, 0, Math.PI*2,true); 
    context.fillStyle = "#FFA74F";
    context.fill()
    context.fillRect(445,450,60,50);
    //spongebobs house
    /*context.beginPath();
    context.bezierCurveTo(700,350,800,200,900,350);
    context.bezierCurveTo(700,350,800,700,900,350);
    context.fill();*/
    context.beginPath();
    context.arc(800, 400, 100, 0, Math.PI , true); 
    context.fillRect(700,400,200,100);
    context.fill()
    //top of house
    context.beginPath();
    context.arc(750,270,50,Math.PI*.25,Math.PI*1.25);
    context.fillStyle = "green";
    context.fill();

    context.beginPath();
    context.arc(850,270,50,Math.PI*1.75,Math.PI*.75);
    context.fillStyle = "green";
    context.fill();

    context.fillStyle = "green";
    context.beginPath();
    context.ellipse(800, 255, 50, 30, Math.PI * 0.5, 0, Math.PI*2, true);
    context.fill();
    //windows
    context.beginPath();
    context.arc(750, 360, 25, 0, Math.PI *2, true); 
    context.arc(870, 450, 25, 0, Math.PI *2, true); 
    context.fillStyle = "blue";
    context.fill()
    context.beginPath();
    context.arc(750, 360, 20, 0, Math.PI *2, true); 
    context.arc(870, 450, 20, 0, Math.PI *2, true); 
    context.fillStyle = "#00FFFF";
    context.fill()
    //door
    context.beginPath();
    context.arc(800, 455, 30, 0, Math.PI*2,true); 
    context.fill()
    context.fillRect(770,450,60,50);
    //chimney
    context.fillStyle = "blue";
    context.fillRect(880,370,50,15);
    context.fillRect(915,320,15,50);
    //path
    for(let i = 510; i <= canvas.height; i+=50){
        context.fillStyle = "black";
        context.fillRect(445,i,60,20);
    }
    for(let i = 510; i <= canvas.height; i+=50){
        context.fillStyle = "black";
        context.fillRect(125,i,60,20);
    }
    for(let i = 510; i <= canvas.height; i+=50){
        context.fillStyle = "black";
        context.fillRect(770,i,60,20);
    }
    //road
    context.fillStyle = "black";
    context.fillRect(0,700,canvas.width,canvas.height);
    //flower cloud
    context.beginPath();
    context.arc(100,150,50,0,Math.PI*2,false);
    context.moveTo(250,150);
    context.arc(200,150,50,0,Math.PI*2,false);
    context.moveTo(200,100);
    context.arc(150,100,50,0,Math.PI*2,false);
    context.moveTo(175,220);
    context.arc(125,225,50,0,Math.PI*2,false);
    context.moveTo(225,220);
    context.arc(175,225,50,0,Math.PI*2,false);
    context.strokeStyle = "yellow";
    context.stroke();
}
document.addEventListener('DOMContentLoaded',changeCanvasColor);