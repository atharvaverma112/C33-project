const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bgImg
var snowImg
var snow
var engine,world;
var snowParticle= []; 

function preload(){
  bgImg = loadImage("snow3.jpg")
 
}



function setup() {
  createCanvas(800,400);
 engine= Engine.create();
 world = engine.world;
}

function draw() {
  background(bgImg);  
  Engine.update(engine)
  if (frameCount%20===0){
  snowParticle.push(new Snow(random(100,700),-50,10));
  } 
  for (var i=0;i<snowParticle.length;i++){
       snowParticle[i].display()
  }



  drawSprites();
 
  
 



}