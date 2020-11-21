
//create an empty array called balls

let balls = [];
let direction = ["right", "left", "up" ,"down"]
let place = ["right", "left", "up" ,"down"]

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }

  fill("white")
  ellipse(400,200,100)
}

function keyPressed(){
  // todo:
  //every time you push a key, make a new ball from the ball class and add it to the balls array
  if(keyCode == 68){
    let bright = new Ball(400,200,0, 50, direction[0]);
    balls.push(bright);
    print(balls);
  }
  if(keyCode == 65){
    let bleft = new Ball(400,200,0,50,direction[1]);
    balls.push(bleft)
    print(balls);
  }
  if(keyCode == 87){
    let bup = new Ball(400,200,0,50,direction[2]);
    balls.push(bup)
    print(balls);
  }
  if(keyCode == 83){
    let bdown = new Ball(400,200,0,50,direction[3]);
    balls.push(bdown)
    print(balls);
  }

}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color,size, direction){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color;
        this.size = size;
        this.direction = direction

	}


	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y, this.size, this.size);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
    if(this.direction == "right"){
      this.x = this.x+20
      this.y = this.y + 0
    }
    if(this.direction == "left"){
      this.x = this.x -20
      this.y = this.y + 0
    }
    if(this.direction == "up"){
      this.y = this.y - 20
      this.x = this.x + 0
    }
    if(this.direction == "down"){
      this.y = this.y + 20
      this.x = this.x + 0
    }
    this.color = color(0, random(0,255), random(0,255))
    this.size = random(10,30)


	}



}
