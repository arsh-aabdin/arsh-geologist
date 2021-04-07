class Rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1,
            density:4
        }
        this.body=Bodies.circle(710,470,40,options);
        this.radius=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("white");
        fill("red");
        ellipse(0,0,40);
        pop();
    }
}