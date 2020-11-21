//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

let timer;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(400, 300, 3, 20);

}

function draw(){
	background(220);




  me.drawMe();
  me.moveMe();
  me.die();

  if (frameCount % 20 == 0) {
      let  b = new Ball(random(0,width), 0, 6);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed, lives){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.lives = lives;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
        line(this.x,this.y+15, this.x+25, this.y+15);
        textSize(18)
        noStroke()
        fill("black")
        text("lives: " + this.lives, 0,380)
	}

	moveMe(){
    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }
	}

  die(){
    if(this.lives <= 0){
      fill("black")
      textSize(30)
      rect(0,0,500,400)
      fill("white")
      noStroke()
      text("game over", 250,200)

    }

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0, 200, 255);
      strokeWeight(3);
    	fill("white");
		  ellipse(this.x,this.y,20,20);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ .5;
		this.y = this.y+ this.speed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-10 && this.x <= me.x+10 && this.y >= me.y-10){
      			this.speed = -this.speed;
            fill("black")
            this.x = 1000
            this.y = 1000
            me.lives = me.lives - 1
    		}
  	}





}
