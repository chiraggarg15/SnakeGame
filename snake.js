

//snake game
//game loop- init,draw,update
function init(){
// console.log("init");
canvas = document.getElementById('mycanvas');
pen= canvas.getContext('2d');
W= canvas.width;
H= canvas.height;

// food  is an object
food = getRandomFood();


snake={
    init_len:5,
    color:"aqua",
    cells:[],
    direction:"right",
//createsnake is the method which insert something into the cell
createSnake:function(){
    for(var i=this.init_len-1;i>=0;i--){
         this.cells.push({x:i,y:0});
         //till now we have only give yhe index number to the cell

    }
},
drawsnake:function(){
    for(var i=0;i<this.cells.length;i++){
        pen.fillStyle = this.color;
        pen.strokestyle="white";
        pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
        pen.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
    }
},
updateSnake:function(){
    //current coodinate of head cell
    var headX = this.cells[0].x;
    var headY = this.cells[0].y;
    //inserting a cell ahead of  head of snake
    // nextHeadX=headX+1;
     this.cells.pop();
    //for using unshift we have to give the coodinate of the new cell as an argument
    // this.cells.unshift({x:nextHeadX,y:headY});

    if(this.direction=="right"){
        nextX=headX+1;
        nextY=headY;
    }
        else if(this.direction=="lefti"){
            nextX=headX-1;
            nextY = headY;

        }
        else if(this.direction=="down"){
            nextX=headX;
            nextY = headY+1;
        }
        else{
            nextX=headX;
            nextY = headY-1;
        }
        //insert the new cell at head/front
        this.cells.unshift({x:nextX,y:nextY});
    
}
};
snake.createSnake();
//add event listner to our game
// listen to the keyword event

function KeyPressed(e){
console.log("you pressed a key");
console.log(e);
if (e.key=="ArrowRight"){
    snake.direction ="right";
}
else if(e.key=="ArrowDown"){
    snake.direction="down";
}
else if(e.key=="ArrowLeft"){
    snake.direction="down";
}
else{
    snake.direction="up";
}
}
document.addEventListener('keydown',KeyPressed);
}
function draw(){
// console.log("draw"); 
//every time new update draw it first claer the old drawing
pen.clearRect(0,0,W,H);
snake.drawsnake();       
pen.fillRect(food.x*10,food.y*10,10,10);
pen.fillStyle="orchids";

// pen.fillRect(box.x,box.y, box.w ,box.h);
// pen.fillStyle="green";

}
   
function update(){
    snake.updateSnake();


}
function gameLoop(){
    // console.log("gameloop");

    draw();
    update();

}



function getRandomFood(){
    var foodX=(Math.round()*(W-10)/10);
    var foodY=Math.round(Math.random()*(H-10)/10);

    foodcolors=["red","green","aqua","coral","orchid"];
    var i =Math.round(Math.round()*foodcolors.length);

var food = {
    x:foodX,
    y:foodY,
    color:foodcolors[i],
}; 
return food; 
}
//setinterval is the function which is use to call a function repeatedly
//game loop will repeatedly call the draw and update function
init();
setInterval(gameLoop,100);