class drop
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.radius = 5;

        var options = 
        {
            friction:0.5,
            restitution:0.1
        }

        this.rain = Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.rain)
    }

    showDrop()
    {
        fill("blue");
       
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        
    }

    update()
    {
        if(this.rain.position.y>height)
        {
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}