//create an empty array called balls


//create a variable to hold your avatar

let mySound2;
let mySound3;
let mySound4;
let mySound5;
let birds = [];



function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound2 = loadSound('birdnoise.wav')
  mySound3 = loadSound('leafnoise.wav')
  mySound4 = loadSound('windchimes.wav')
  mySound5 = loadSound('windy.wav')
}

function setup() {
  createCanvas(500, 400);
  //make one avatar called me


}

function draw(){
	background(220);
  for(i = 0; i< birds.length; i++){
    bird.drawBird()
  }

}


function keyPressed(){
  if (keyCode == 49){
    mySound2.play()
    bird = new Birb(random(0,width), random(30,60))
    birds.push(bird)


  }
}

class Birb {
  constructor(x, y){
    this.x = x
    this.y = y
  }
  drawBird(){
    fill("yellow")
    stroke("black")
    rect(this.x,this.y,100,100,5)

    fill("orange")
    triangle(this.x+100, this.y+25, this.x+130, this.y+40, this.x+100, this.y+55)

    fill("black")
    ellipse(this.x+70, this.y+20, 20)
    }



  }
