
var animation1,animation2;

function preload(){
animation1.addAnimation("./images/WalkingFrame/walking_1.png", "./images/WalkingFrame/walking_2.png", "./images/WalkingFrame/walking_3.png"
, "./images/WalkingFrame/walking_4.png", "./images/WalkingFrame/walking_5.png", "./images/WalkingFrame/walking_6.png",
 "./images/WalkingFrame/walking_7.png", "./images/WalkingFrame/walking_8.png")
}
function setup(){
     canvas = createCanvas(300,500);
drop=new Drop();
    
}

function draw(){
    drop.display();
}   

