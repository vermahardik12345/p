class paper{
    constructor(x,y){
       var options={
           'isStatic':false,
           'restitution':0.3,
            'density':1.2,
            'friction':0.5,
        
       }
       this.body=Bodies.circle(x,y,15,options);
       this.radius=15;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius); 
        pop();
    }

};