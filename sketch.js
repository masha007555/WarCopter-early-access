var back,back2,backImg;
var BADSImg;
var BANSImg;
var Bbomb,VHbullet,Hbullet,bullet1_Img,bullet2_Img,bullet3_Img;
var homeBG_Img;
var play,playImg;
var shop,shopImg,shopBG_Img;
var sun,sunImg
var gameState = "home";
var bulletsR = 20;
var tBullets = 20;
var stage_B1,stage_B2;
var shop_B;
var BM,buy,click,shoot;
var s1,s2,s3,s4,s5,s6,s7,s8;
var coins = 0
var current = 1;
var health = 100;
var vhealth = 100;
var life = 5;
var fail,failImg;
var completed,completedImg;
var divider;
var story,storyImg;
var heart,heartImg;

var hBar;
var hBar1;
var hBar1Width;
var vhBar;
var vhBar1;
var vhBar1Width;

var stage1WP = 200;
var stage2WP = 200;
var stage3WP = 300;
var stage4WP = 200;
var stage5WP = 300;
var stage6WP = 300;
var stage7WP = 400;
var stage8WP = 750;

var helicopter,helicopterAnimation;
var vHelicopter,vHelicopterAnimation;
var FH,FHImg;
var FVH,FVHImg;
var BS,BSImg;

function preload() {
  shopBG_Img = loadImage("images/shopBG.jpeg");
  backImg = loadImage("images/back.png");
  BADSImg = loadImage("images/BADS.jpeg");
  BANSImg = loadImage("images/BANS.jpeg");
  bullet1_Img = loadImage("images/bullet_1.png");
  bullet2_Img = loadImage("images/bullet_2.png");
  homeBG_Img = loadImage("images/homeBG.jpeg");
  playImg = loadImage("images/play.png");
  shopImg = loadImage("images/shop.png");
  sunImg = loadImage("images/sun.png");
  BSImg = loadImage("images/BS.png");
  failImg = loadImage("images/fail.png");
  completedImg = loadImage("images/completed.png");
  bullet3_Img = loadImage("images/bullet_3.png");
  storyImg = loadImage("images/story.png");
  heartImg = loadImage("images/heart.png");
  helicopterAnimation = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  vHelicopterAnimation = loadAnimation("images/vh1.png","images/vh2.png","images/vh3.png","images/vh4.png");

  BM = loadSound("audio/BM.mp4");
  buy = loadSound("audio/buy.mp4");
  click = loadSound("audio/click.mpeg");
  shoot = loadSound("audio/shoot.mpeg");
}

function setup() {
  createCanvas(1500,700);
  
  // BM.loop();
  // BM.setVolume(0.3);

  play = createSprite(1400,300,10,10);
  play.addImage(playImg);
  play.scale = 0.25;

  // shop = createSprite(1400,75,10,10);
  // shop.addImage(shopImg);
  // shop.scale = 0.06;


  stage_B1 = createSprite(width/2,height/2,1300,600);
  stage_B1.shapeColor = "orange";
  stage_B2 = createSprite(width/2,380,1090,500);
  stage_B2.shapeColor = "lightblue";

  shop_B = createSprite(width/2,height/2,1300,600);
  shop_B.shapeColor = "lightgreen";


  s1 = createSprite(350,250,200,150);
  s1.shapeColor = "yellow";

  s2 = createSprite(600,250,200,150);
  s2.shapeColor = "brown";

  s3 = createSprite(850,250,200,150);
  s3.shapeColor = "brown";

  s4 = createSprite(1100,250,200,150);
  s4.shapeColor = "brown";

  s5 = createSprite(350,500,200,150);
  s5.shapeColor = "brown";

  s6 = createSprite(600,500,200,150);
  s6.shapeColor = "brown";

  s7 = createSprite(850,500,200,150);
  s7.shapeColor = "brown";

  s8 = createSprite(1100,500,200,150);
  s8.shapeColor = "red";


  helicopter = createSprite(1200,height/2-100);
  helicopter.addAnimation("hFlying",helicopterAnimation);

  vHelicopter = createSprite(200,height/2-100);
  vHelicopter.addAnimation("vhFlying",vHelicopterAnimation);
  vHelicopter.scale = 0.6;


  FH = createSprite(1200,height/2-150);
  FH.addAnimation("FHFlying",helicopterAnimation);

  FVH = createSprite(200,height/2-50);
  FVH.addAnimation("FVHFlying",vHelicopterAnimation);
  FVH.scale = 0.6;

  BS = createSprite(200,height/2-100);
  BS.addImage(BSImg);
  BS.scale = 0.2;

  hBar = createSprite(1200,650,100,20);
  hBar.shapeColor = "blue";
  vhBar = createSprite(250,650,100,20);
  vhBar.shapeColor = "blue";


  fail = createSprite(width/2,height/2,100,100);
  fail.addImage(failImg);
  fail.scale = 0.3;
  completed = createSprite(width/2,height/2,100,100);
  completed.addImage(completedImg);
  completed.scale = 0.3;


  divider = createSprite(width/2,height/2,10,height);
  divider.visible = false;

  story = createSprite(1400,75,75,10,10);
  story.addImage(storyImg);
  story.scale = 0.75

  heart = createSprite(100,75,75,10,10);
  heart.addImage(heartImg);
  heart.scale = 0.45;

  back = createSprite(160,110,10,10);
  back.addImage(backImg);
  back.scale = 0.2;

  back2 = createSprite(50,650,10,10);
  back2.addImage(backImg);
  back2.scale = 0.2;
  
  Vbullet = new Group();
  HHbullet = new Group();
  Bbullets = new Group();

}

function draw() {
  background(homeBG_Img);

  hBar1Width = health;
  hBar1 = createSprite(1200,650,hBar1Width,20);
  hBar1.shapeColor = "red";
  hBar1.lifetime = 1;
  vhBar1Width = vhealth;
  vhBar1 = createSprite(250,650,vhBar1Width,20);
  vhBar1.shapeColor = "red";
  vhBar1.lifetime = 1;

  drawSprites();
  edges = createEdgeSprites();

  if (gameState ==="home"){
    home();
  }
  if (gameState === "stages"){
    stages();
  }
  if (gameState === "story"){
    Story();
  }

  if (gameState === "stage1"){
    stage1();
  }
  if (gameState === "stage2"){
    stage2();
  }
  if (gameState === "stage3"){
    stage3();
  }
  if (gameState === "stage4"){
    stage4();
  }
  if (gameState === "stage5"){
    stage5();
  }
  if (gameState === "stage6"){
    stage6();
  }
  if (gameState === "stage7"){
    stage7();
  }
  if (gameState === "stage8"){
    stage8();
  }

  helicopter.collide(edges);
  helicopter.collide(divider);
  vHelicopter.collide(edges);
  stroke("grey");
  textSize(10);
  text("X: "+ mouseX + " Y: "+mouseY,mouseX,mouseY);
}

function home() {
  drawSprites();

  story.visible = true;
  play.visible = true;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = true;
  FVH.visible = true;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = true;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",550,100);

  textSize(30);
  strokeWeight(3);
  text("EARLY ACCESS",625,150);

  textSize(50);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  text(life,85,87.5);

  push();  
  FH.velocityX = -3;
  FVH.velocityX = 3;

  if(FH.x < -100){
    FH.x = width+100;
  }

  if(FVH.x > width+100){
    FVH.x = -100;
  }
  pop();

  push();
  if (mouseX > 1275 && mouseX < 1500 && mouseY > 20 && mouseY < 120){
    story.scale = 0.80;
  }else{
    story.scale = 0.75;
  }

  if (mouseX > 1320 && mouseX < 1475 && mouseY > 220 && mouseY < 375){
    play.scale = 0.29;
  }else{
    play.scale = 0.25;
  }
  pop();

  if (mousePressedOver(play)){
    click.play();
    gameState = "stages";
  }

  if (mousePressedOver(story)){
    click.play();
    gameState = "story";
  }
}

function Shop(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = true;
  stage_B2.visible = false;
  shop_B.visible = true;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("SHOP",600,130);

  textSize(40);
  strokeWeight(3);
  text("Coins "+coins,1100,120);
  pop();

  //top line
  strokeWeight(5);
  line(100,160,1400,160);

  //mid line
  push();
  strokeWeight(10);
  line(width/2,165,width/2,645);
  pop();



  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function Story(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STORY",600,120);
  textSize(50);
  strokeWeight(4);
  text("The villain named Lupin has steal all the",230,200);
  text("money of the city, so now there is an entry",230,270);
  text("of our Guardian in a helicopter, fighting",230,340);
  text("with the army of Lupin to bring the money",230,410);
  text("back to the city.",230,480);

  push();
  if (mouseX > 110 && mouseX < 200 && mouseY > 65 && mouseY < 150){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  pop();

  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function stages(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = true;
  s2.visible = true;
  s3.visible = true;
  s4.visible = true;
  s5.visible = true;
  s6.visible = true;
  s7.visible = true;
  s8.visible = true;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STAGES",600,120);
  text("1",325,275);
  text("2",575,275);
  text("3",825,275);
  text("4",1075,275);
  text("5",325,525);
  text("6",575,525);
  text("7",825,525);
  text("8",1075,525);


  if (mousePressedOver(s1) && current === 1 || mousePressedOver(s1) && current === 2 || 
  mousePressedOver(s1) && current === 3 || mousePressedOver(s1) && current ===4 || 
  mousePressedOver(s1) && current === 5 || mousePressedOver(s1) && current === 6 || 
  mousePressedOver(s1) && current === 7 || mousePressedOver(s1) && current === 8){
    click.play();
    gameState = "stage1";
  }
  if (mousePressedOver(s2) && current === 2 || mousePressedOver(s2) && current === 3 || 
  mousePressedOver(s2) && current ===4 || mousePressedOver(s2) && current === 5 || 
  mousePressedOver(s2) && current === 6 || mousePressedOver(s2) && current === 7 || 
  mousePressedOver(s2) && current === 8){
    click.play();
    gameState = "stage2";
  }
  if (mousePressedOver(s3) && current === 3 || mousePressedOver(s3) && current ===4 || 
  mousePressedOver(s3) && current === 5 || mousePressedOver(s3) && current === 6 || 
  mousePressedOver(s3) && current === 7 || mousePressedOver(s3) && current === 8){
    click.play();
    gameState = "stage3";
  }
  if (mousePressedOver(s4) && current === 4 || mousePressedOver(s4) && current === 5 || 
  mousePressedOver(s4) && current === 6 || mousePressedOver(s4) && current === 7 || 
  mousePressedOver(s4) && current === 8){
    click.play();
    gameState = "stage4";
  }
  if (mousePressedOver(s5) && current === 5 || mousePressedOver(s5) && current === 6 || 
  mousePressedOver(s5) && current === 7 || mousePressedOver(s5) && current === 8){
    click.play();
    gameState = "stage5";
  }
  if (mousePressedOver(s6) && current === 6 || mousePressedOver(s6) && current === 7 || 
  mousePressedOver(s6) && current === 8){
    click.play();
    gameState = "stage6";
  }
  if (mousePressedOver(s7) && current === 7 || mousePressedOver(s7) && current === 8){
    click.play();
    gameState = "stage7";
  }
  if (mousePressedOver(s8) && current === 8){
    click.play();
    gameState = "stage8";
  }

  push();
  if (mouseX > 100 && mouseX < 215 && mouseY > 55 && mouseY < 160){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }

  if (mouseX > 250 && mouseX < 450 && mouseY > 175 && mouseY < 325){
    s1.width = 220;
    s1.height = 170;
  }else{
    s1.width = 200;
    s1.height = 150;
  }
  if (mouseX > 500 && mouseX < 700 && mouseY > 175 && mouseY < 325){
    s2.width = 220;
    s2.height = 170;
  }else{
    s2.width = 200;
    s2.height = 150;
  }
  if (mouseX > 750 && mouseX < 950 && mouseY > 175 && mouseY < 325){
    s3.width = 220;
    s3.height = 170;
  }else{
    s3.width = 200;
    s3.height = 150;
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 175 && mouseY < 325){
    s4.width = 220;
    s4.height = 170;
  }else{
    s4.width = 200;
    s4.height = 150;
  }
  if (mouseX > 250 && mouseX < 450 && mouseY > 420 && mouseY < 570){
    s5.width = 220;
    s5.height = 170;
  }else{
    s5.width = 200;
    s5.height = 150;
  }
  if (mouseX > 500 && mouseX < 700 && mouseY > 420 && mouseY < 570){
    s6.width = 220;
    s6.height = 170;
  }else{
    s6.width = 200;
    s6.height = 150;
  }
  if (mouseX > 750 && mouseX < 950 && mouseY > 420 && mouseY < 570){
    s7.width = 220;
    s7.height = 170;
  }else{
    s7.width = 200;
    s7.height = 150;
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 420 && mouseY < 570){
    s8.width = 220;
    s8.height = 170;
  }else{
    s8.width = 200;
    s8.height = 150;
  }

  pop();

 if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function stage1(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE-1", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage1WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = true;
  vHelicopter.visible = true;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();  
  VHshoot1();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health <= 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  } 
  else if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 2;
    coins +=200;
    },5000);
  }

  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();
  
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }

}

function stage2(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-2", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage2WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();  
  VHshoot2();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  else if (health <= 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 3;
    coins +=200;
    },5000);
  }

  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage3(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-3", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage3WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot3();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 4;
    coins +=300;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage4(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE- 4", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage4WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot4();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 5;
    coins +=200;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage5(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-5", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage5WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot5();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 6;
    coins +=300;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage6(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE- 6", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage6WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();

  VHshoot6();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 7;
    coins +=300;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage7(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE-7", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage7WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();

  VHshoot7();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    current = 8;
    coins +=400;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function stage8(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-8 (BOSS LEVEL)", width/2-200,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage8WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = false;
  BS.visible = true;
  heart.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  BS.velocityX = 0;

  BSshoot();

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32)){
    Hshoot();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(BS)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }
  if (health === 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 2000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    },5000);
  }

  if (vhealth === 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
    coins +=750;
    },5000);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 20;
    health = 100;
    vhealth = 100;
  }
}

function BSshoot(){
  if(frameCount % 60 === 0){
    Bbullet= createSprite(200,random(150,600), 10, 10);
    Bbullet.velocityX = 25;
    Bbullet.addImage(bullet1_Img);
    Bbullet.scale=0.08;
    Bbullet.lifetime = 1000;
    BS.y = Bbullet.y;
    shoot.play();

    Bbullets.add(Bbullet);
  }

  if (Bbullets.isTouching(helicopter)){
    Bbullet.destroy();
    health -= 50;
  }
}

function Hshoot(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -25;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  // shoot.play();
  HHbullet.add(Hbullet);
}

function VHshoot1() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 10;
  }
}
function VHshoot2() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 15;
  }
}
function VHshoot3() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 20;
  }
}
function VHshoot4() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 25;
  }
}
function VHshoot5() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 30;
  }
}
function VHshoot6() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 35;
  }
}
function VHshoot7() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    // shoot.play();

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 40;
  }
}