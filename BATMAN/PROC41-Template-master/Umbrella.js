class umbrella
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.radius = 80;
        this.boy=loadImage("walking_1.png");
    
        
        var options = 
        {
            isStatic:true
        }
        
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);

    }

    display()
    {
        var pos = this.body.position;
       // translate(pos.x,pos.y);
       // rotate(this.body.angle);
        imageMode(CENTER);
        image(this.boy,pos.x,pos.y,220,250);
    }
}