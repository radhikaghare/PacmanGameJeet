var obstacle0,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13;
var obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26;
var obstacle27,obstacle28,obstacle29,pacman,ghost1,ghost2,obstacle30,obstacle31,obstacle32,obstacle33,obstacle34,obstacle35,obstacle36,obstacle37;
var obstacle38,obstacle39;
function setup() {
  createCanvas(800,400);
  //top line
  obstacle0 = createSprite(400,50,700,2);
  obstacle1 = createSprite(400,60,680,2);
  //left line
  obstacle2 = createSprite(50,200,2,300);
  obstacle3 = createSprite(60,200,2,280);
  //right line
  obstacle4 = createSprite(750,200,2,300);
  obstacle5 = createSprite(740,200,2,280);
  //bottom line
  obstacle6 = createSprite(400,350,700,2);
  obstacle7 = createSprite(400,340,680,2);
  //start of pacman
  obstacle8 = createSprite(85,200,50,2);
  obstacle9 = createSprite(85,220,50,2);
  obstacle10 = createSprite(110,150,2.70);
  obstacle11 = createSprite(110,270,2,100);
  obstacle12 = createSprite(130,210,2,180);
  //top right start 
  obstacle13 = createSprite(150,100,80,2);
  obstacle14 = createSprite(150,120,40,2);
  obstacle15 = createSprite(190,130,2,60);
  obstacle16 = createSprite(170,163,2,85);
  obstacle17 = createSprite(190,195,2,20);
  obstacle18 = createSprite(180,205,20,2);
  obstacle19 = createSprite(215,160,50,2);
  obstacle20 = createSprite(215,185,50,2);
  obstacle21 = createSprite(240,205,2,40);
  obstacle22 = createSprite(240,150,2,20);
  obstacle24 = createSprite(260,190,2,100);
  obstacle25 = createSprite(210,225,60,2);
  obstacle26 = createSprite(150,225,10,2);
  obstacle27 = createSprite(220,240,80,2);
  obstacle28 = createSprite(150,240,10,2);
  obstacle29 = createSprite(145,232.5,2,14);
  obstacle30 = createSprite(168,225,28,2)



  obstacle60 = createSprite(232,300,207,2);
  obstacle61 = createSprite(410,300,110,2);
  obstacle62 = createSprite(548,300,127,2);
  obstacle63 = createSprite(360,320,500,2);
  

  //verticals
  obstacle64 = createSprite(610,310,2,20)
  obstacle65 = createSprite(356,250,2,100)
  obstacle66 = createSprite(336,250,2,100)
  obstacle67 = createSprite(465,250,2,100)
  obstacle68 = createSprite(485,250,2,100)

  /*pacman = createSprite(70,260,10,10);
  ghost1 = createSprite(350,100,10,10);
  ghost2 = createSprite(405,310,10,10);*/
  obstacleGroup = new Group();
  obstacleGroup.add(obstacle0);
  obstacleGroup.add(obstacle1);
  obstacleGroup.add(obstacle2);
  obstacleGroup.add(obstacle3);
  obstacleGroup.add(obstacle4);
  obstacleGroup.add(obstacle5);
  obstacleGroup.add(obstacle6);
  obstacleGroup.add(obstacle7);
  obstacleGroup.add(obstacle8);
  obstacleGroup.add(obstacle9);
  obstacleGroup.add(obstacle10);
  obstacleGroup.add(obstacle11);
  obstacleGroup.add(obstacle12);
  obstacleGroup.add(obstacle13);
  obstacleGroup.add(obstacle14);
  obstacleGroup.add(obstacle15);
  obstacleGroup.add(obstacle16);
  obstacleGroup.add(obstacle17);
  obstacleGroup.add(obstacle18);
  obstacleGroup.add(obstacle19);
  obstacleGroup.add(obstacle20);
  obstacleGroup.add(obstacle21);
}
function draw() {
  background(0);
  /*if (keyIsDown(UP_ARROW)){
    pacman.velocity.y = -2;
    pacman.velocity.x = 0;
  }  
  if(keyIsDown(DOWN_ARROW)){
    pacman.velocity.y = 2;
    pacman.velocity.x = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    pacman.velocity.x = -2;
    pacman.velocity.y = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    pacman.velocity.x = 2;
    pacman.velocity.y = 0;
  }
  pacman.bounceOff(obstacleGroup);
  ghost1.bounceOff(obstacleGroup);
  ghost2.bounceOff(obstacleGroup);
  if(ghost2.x > 650 && ghost2.y > 300){
    ghost2.velocity.y = -2;
    ghost2.velocity.x = 0;
  }*/
  text("X " + World.mouseX + "Y " + World.mouseY, World.mouseX,World.mouseY);
 /* ghost1.velocity.x = 2;
  ghost2.velocity.x = 2;
  if(ghost2.x > 650 && ghost2.y > 300){
    ghost2.velocity.y = -2;
    ghost2.velocity.x = 0;
  }
   //if(ghost2.x < 650 && ghost2.y < 95){
    //ghost2.velocity.x = 2;
    //ghost2.velocity.y = 0;
  //}
  if(ghost2.isTouching(pacman)|| ghost1.isTouching(pacman)){
    textSize(40);
    fill("red")
    text("GAME OVER",325,200);
    ghost1.velocity.x = 0;
    ghost1.velocity.y = 0;
    ghost2.velocity.x = 0;
    ghost2.velocity.y = 0;
    pacman.velocity.x = 0;
    pacman.velocity.y = 0;
  }*/
  drawSprites();
}