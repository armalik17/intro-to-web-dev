let message = 'VILLE TENNIS';
let textY = 200;
let ySpeed = 2; 
let circleY = [];


function setup() {
  createCanvas(400, 500);
  for (let i = 0; i < 50; i++) {
    circleY[i] = random(height);
  
  myCircle = new Circle(150, 150, 3, 5);
 
  }
}

function draw() {
  background(100,165,70);

  
//Text// 
  textSize(35);  
  text(message , 80, textY);
  
  textY += ySpeed; 
    if (textY > height || textY < 0 ) {
      ySpeed *= -1;
    }

  
// 50 Small Tennis Balls // 
for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 30);

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }
  
// One Large Tennis Ball// 

  fill (200,400,40)
  
  myCircle.x += myCircle.xSpeed;
  if (myCircle.x < 0 || myCircle.x > width) {
    myCircle.xSpeed *= -1;
  }

  myCircle.y += myCircle.ySpeed;
  if (myCircle.y < 0 || myCircle.y > height) {
    myCircle.ySpeed *= -1;
  }
  
  circle(myCircle.x, myCircle.y, 50);
}

let myCircle;

class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

}