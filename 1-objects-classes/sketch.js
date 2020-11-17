//create a variable called b to hold one ball
let b1;
let b2;

function setup() {
  createCanvas(800, 400);

  // construct the ball using the 'new' keyword
  b1 = new Ball(400,200,random(0,255), random(0,255), random(0,255))
  b2 = new Ball(400,200,random(0,255))
}


function draw(){
	background(220);
 //draw the ball called b (go look in the Ball class for the drawBall function)
 //move the ball called b (go look in the Ball class for the moveBall function)
b1.drawBall()
b1.moveBall()
b2.drawBall()
b2.moveBall()

if(frameCount % 100 == 0){
  b2.changeColor()
}



}


//ball class from which to create new balls with similar properties.
class Ball {
  constructor(x,y,color){
    this.x = x
    this.y = y
    this.color = color
  }

  drawBall(){
    stroke(255)
    strokeWeight(5)
    fill(this.color)
    ellipse(this.x,this.y,150,150)
  }

  moveBall(){
    this.x = mouseX + random(-100,100)
    this.y = mouseY + random(-10,10)
  }

  // here is where you'll put the instructions for making balls

}
