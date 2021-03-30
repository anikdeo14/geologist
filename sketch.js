const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    //rubber = new Rubber(590,220);
    //stone = new Stone(590,260);
    //iron = new Iron(590,320);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);



    plane.display();
    hammer.display();
    //rubber.display();
    //stone.display();
    //iron.display();

    
 
}