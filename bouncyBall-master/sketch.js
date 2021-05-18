var string = "Aaryan"
console.log (string)
var number = 34
console.log (number)
var boolean = true
console.log (boolean)
var object
console.log (object)
object = null
console.log (object)
var array1 = [1,2,3,4,5]
console.log (array1)
var array2 = ["Pallan",4936,true,null]
console.log (array2)
var array3 = [[1,2],[2,3],[3,4]]
console.log (array3)
console.log (array3[0])
console.log(array3[0][0])
array1.push("aaryan")
console.log(array1)
array1.pop()
console.log(array1)







const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var Box1,Box2,Box3,Box4,Box5
var ground
var bird
var pig1, pig2
var log1,log2,log3,log4
var platform

var backgroundImg
var slingshot 

function preload(){
    backgroundImg = loadImage("sprites/bg.png")
}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    
    platform = new Ground(150,305,300,175)
    Box1 = new Box(700,320,70,70)
    Box2 = new Box(920,320,70,70)
    Box3 = new Box(700,240,70,70)
    Box4 = new Box(920,240,70,70)
    Box5 = new Box(810,160,70,70)
    ground = new Ground(600,height,1200,20)
    bird = new Bird(200,50)
    pig1 = new Piggy(810,350)
    pig2 = new Piggy(810,220)
    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);
   
   slingshot = new SlingShot(bird.body,{x:200,y:50})

   
}
function draw(){
    background(backgroundImg)
    Engine.update(engine)
    Box1.display()
    Box2.display()
    ground.display()
    bird.display()
    Box3.display()
    Box4.display()
    Box5.display()
    pig1.display()
    pig2.display()
   log1.display()
   log2.display()
   log3.display()
   log4.display()
   platform.display()
   slingshot.display()
  
   getTime()



}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){

slingshot.attach(bird.body)

    }
}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    console.log(responseJSON.datetime)
    
}