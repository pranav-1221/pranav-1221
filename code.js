var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal = createSprite(400,200,20,50);
    goal.shapeColor="green";

var  ball = createSprite(20,200,20,20);
 ball.shapeColor="blue";
var player1 = createSprite(160,160,20,20);
    player1.shapeColor="red";

var player2 = createSprite(160,190,20,20);
    player2.shapeColor="red";
    
var player3 = createSprite(160,220,20,20);
    player3.shapeColor="red";
    
var player4 = createSprite(190,170,20,20);
    player4.shapeColor="red";
    
var player5 = createSprite(190,205,20,20);
    player5.shapeColor="red";
    
var player6 = createSprite(220,186,20,20);
    player6.shapeColor="red";
 var score=0;    
function draw() {
  background("white");
 textSize(24);
    fill("black");
    text("click space ",10,20);
      if (keyDown("space")) {
   player1.velocityX=2;
    player1.velocityY=-3;
    
    player2.velocityX=-2;
    player2.velocityY=3;
    
    player3.velocityX=2;
    player3.velocityY=-3;
    
    player4.velocityX=-2;
    player4.velocityY=3;
    
    player5.velocityX=2;
    player5.velocityY=-3;
    
    player6.velocityX=-2;
    player6.velocityY=3;
   }
 ballMovement();
 
  
  
       if (ball.isTouching(player1)) {
  ball.x=18;
  ball.y=200;
  score = score+1;
 }
  if (ball.isTouching(player2)) {
  ball.x=18;
  ball.y=200;
  score = score+1;
 }
 if (ball.isTouching(player3)) {
  ball.x=18;
  ball.y=200;
  score = score+1;
 }
  if (ball.isTouching(player4)) {
  ball.x=18;
  ball.y=200;
  score = score+1;
 }
  if (ball.isTouching(player5)) {
  ball.x=18;
  ball.y=200;
  score = score+1;
 }
  if (ball.isTouching(player6)) {
  ball.x=18;
  ball.y=200;
score = score+1;
 
 }
 
 if (ball.isTouching(goal)) {
 player1.velocityX=0; 
 player1.velocityY=0;
 
 player2.velocityX=0; 
 player2.velocityY=0;
 
 player3.velocityX=0; 
 player3.velocityY=0;
 
 player4.velocityX=0; 
 player4.velocityY=0;
 
 player5.velocityX=0; 
 player5.velocityY=0;
 
 player6.velocityX=0; 
 player6.velocityY=0;
  textSize(24);
  fill("black");
  text("YOU WIN press enter to restart ",10,200); 
 }
 textSize(24);
 fill("blue");
 text("score:"+score,250,45);
 
if (keyDown("enter")) {
  ball.x=18;
  ball.y=200;
   player1.velocityX=2;
    player1.velocityY=-3;
    
    player2.velocityX=-2;
    player2.velocityY=3;
    
    player3.velocityX=2;
    player3.velocityY=-3;
    
    player4.velocityX=-2;
    player4.velocityY=3;
    
    player5.velocityX=2;
    player5.velocityY=-3;
    
    player6.velocityX=-2;
    player6.velocityY=3;
    score=0;
}

 if (score==5) {
   textSize(24);
   fill("black");
   text("GAME OVER press enter to restart",15,200);
  
   score=5;
   player1.velocityX=0; 
 player1.velocityY=0;
 
 player2.velocityX=0; 
 player2.velocityY=0;
 
 player3.velocityX=0; 
 player3.velocityY=0;
 
 player4.velocityX=0; 
 player4.velocityY=0;
 
 player5.velocityX=0; 
 player5.velocityY=0;
 
 player6.velocityX=0; 
 player6.velocityY=0;
 
  if (keyDown("up")) {
    ball.y= ball.y+0;
 }
if (keyDown("down")) {
    ball.y= ball.y+0;
  }
 if (keyDown("left")) {
      ball.x=ball.x+0;
    }
  if (keyDown("right")) {
         ball.x=ball.x+0;
   ball.velocityX=0;
   ball.velocityY=0;
   score=5;
         
       }
 }
 
  createEdgeSprites();
   
   ball.bounceOff(edges);
   player1.bounceOff(edges);
   player2.bounceOff(edges);
   player3.bounceOff(edges);
   player4.bounceOff(edges);
   player5.bounceOff(edges);
   player6.bounceOff(edges);
  
 player1.bounce(player2);
 player1.bounce(player3);
 player1.bounce(player4);
 player1.bounce(player5);
 player1.bounce(player6);
 
 player2.bounce(player1);
 player2.bounce(player3);
 player2.bounce(player4);
 player2.bounce(player5);
 player2.bounce(player6);

 player3.bounce(player1);
 player3.bounce(player2);
 player3.bounce(player4);
 player3.bounce(player5);
 player3.bounce(player6);
 
 player4.bounce(player1);
 player4.bounce(player2);
 player4.bounce(player3);
 player4.bounce(player5);
 player4.bounce(player6);
 
 player5.bounce(player1);
 player5.bounce(player2);
 player5.bounce(player3);
 player5.bounce(player4);
 player5.bounce(player6);
 
 player6.bounce(player1);
 player6.bounce(player2);
 player6.bounce(player3);
 player6.bounce(player4);
 player6.bounce(player5);
  drawSprites();
}
function ballMovement() {
  if (keyDown("up")) {
    ball.y= ball.y-2;
 }
if (keyDown("down")) {
    ball.y= ball.y+2;
  }
 if (keyDown("left")) {
      ball.x=ball.x-2;
    }
  if (keyDown("right")) {
         ball.x=ball.x+2;
       }
}      
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
