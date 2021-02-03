var canvas;
var music;
var sf1, sf2, sf3, sf4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

     
     createEdgeSprites();

    //create 4 different surfaces
    sf1 = createSprite(100, 600, 175, 80);
    sf1.shapeColor = "red";

    sf2 = createSprite(285, 600, 175, 80);
    sf2.shapeColor = "blue";

    sf3 = createSprite(470, 600, 175, 80);
    sf3.shapeColor = "green";

    sf4 = createSprite(655, 600, 175, 80);
    sf4.shapeColor = "yellow";


    //create box sprite and give velocity

    box = createSprite(random(20, 750));
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 5;
    box.scale = 0.4;
    

}
function draw(){
    
    background("black");
    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    if(sf1.isTouching(box) && box.bounceOff(sf1)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    
    if(sf2.isTouching(box) && box.bounceOff(sf2)){
        box.shapeColor = "blue";
        music.play();
    }

    if(sf3.isTouching(box) && box.bounceOff(sf3)){
        box.shapeColor = "green";
        music.play();
    }

    if(sf4.isTouching(box)){
        box.shapeColor = "yellow";
        music.play();
        
    }


drawSprites();

    
}
