const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrop = 100;
var drops = [];

function preload()
{
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
    
}

function setup()
{
    createCanvas(450,620);
    engine = Engine.create();
    world = engine.world;

    

    if(frameCount%100 === 0)
    {
        for(i=0;i<100;i++)
        {
            drops.push(new drop(Math.round(random(10,500)),Math.round(random(0,600))));
        }
    }

    boy = new umbrella(225,505);
    
}

function draw()
{
    background("black");
    Engine.update(engine);

    for(i=0;i<100;i++)
    {
        drops[i].showDrop();
        drops[i].update();
    }


    rand = Math.round(random(1,4));

    if(frameCount%80 === 0)
    {
        thunder=createSprite(random(20,480),random(28,48),10,10);
        thunder.scale = 0.35;
        thunder.lifetime = 100;
        switch(rand)
        {
            case 1: thunder.addImage(thunder1)
                    break;
            case 2: thunder.addImage(thunder2)
                    break;
            case 3: thunder.addImage(thunder3)
                    break;
            case 4: thunder.addImage(thunder4)
                    break;   
                    default:break;
        }
    }

   
    boy.display();

    drawSprites();

}   

