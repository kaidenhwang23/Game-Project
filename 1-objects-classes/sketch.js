//create a variable called b to hold one ball
let b1;
let b2;

function setup() {
  createCanvas(800, 400);

  // construct the ball using the 'new' keyword
  b1 = new Ball(400, 200, 150, 150)
  b2 = new Ball(0, 200, 245, 50)
}


function draw() {
  background(220); {
    //draw the ball called b (go look in the Ball class for the drawBall function)
    //move the ball called b (go look in the Ball class for the moveBall function)
    b1.drawBall()
    b1.moveBall()
    b2.drawBall()
    b2.moveBall()
  }
}


//ball class from which to create new balls with similar properties.
class Ball {
  constructor(x, y, color, size) {
    this.x = x
    this.y = y
    this.color = color
    this.size = size
  }

  drawBall() {
    stroke(255)
    strokeWeight(5)
    fill(this.color)
    ellipse(this.x, this.y, this.size)
  }

  moveBall() {
    if (frameCount % 50 == 0) {
      if (this.x < 800) {
        this.x += 50
        this.size += 25
        this.color -= 20
      } else {
        this.x = -50
        this.size = 50
        this.color = 255
      }

    }
  }

  // here is where you'll put the instructions for making balls

}
