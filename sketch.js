const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


function preload() {
    // create getBackgroundImg( ) here
    getTime();
    defaultBg=loadImage("sunrise1.png")
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
    async function getTime(){
        var responseJSON= await response.json();
var datetime=responseJSON.datetime;
         response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON=await response.json
        console.log(responseJSON)
      
        var hour=datetime.slice(11,13)
        if(hour>=04&&hour<=08){
            bg="sunrise1.png"
        }
        else if(hour>=06&&hour<=08){
        bg="sunrise2.png"}
        else if(hour>=23&&hour==0){
            bg="sunrise10.png"
        }
        else if(hour==0&&hour<=03){
            bg="sunset11.png"
        }
        else{
            bg="sunset12.png"
        }
    
    }
    
}
