const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg1 , bg2 , bg3 , bg4 , bg5 , bg6 , bg7 , bg8 , bg9 , bg9 , bg10 , bg11 , bg12 ;

function preload() {
    // create getBackgroundImg( ) here
    bg1 = loadImage("sunrise1.png");
    bg2 = loadImage("sunrise2.png");
    bg3 = loadImage("sunrise3.png");
    bg4 = loadImage("sunrise4.png");
    bg5 = loadImage("sunrise5.png");
    bg6 = loadImage("sunrise6.png");
    bg7 = loadImage("sunset7.png");
    bg8 = loadImage("sunset8.png");
    bg9 = loadImage("sunset9.png");
    bg10 = loadImage("sunset10.png");
    bg11 = loadImage("sunset11.png");
    bg12 = loadImage("sunset12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
