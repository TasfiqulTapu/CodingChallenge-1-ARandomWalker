let x, y;

function setup() {

  createCanvas(400, 400);

  background(50);

  x = width / 2;

  y = height / 2;

}

function draw() {

//drawing the initial starting point

  stroke(255);

  strokeWeight(2);

  point(x, y);

//choosing a random direction 

//

  var dir = floor(random(4));

//this method is really inefficient

//  if (dir == 0) {

//    x += 1;

//  } else if (dir == 1) {

//    x -= 1;

//  } else if (dir == 2) {

//    y += 1;

//  } else if (dir == 3) {

//    y -= 1;

//  }

  

//using case statement

  switch(dir){

      case 0:
      x+=1;

      break;

      case 1:
      x-=1;

      break;

      case 2:
      y+=1;

      break;

      case 3:
      y-=1

      break;

      

      }

  console.log(frameRate());

}
