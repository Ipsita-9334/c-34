class Ball{
    constructor(x,y,r){
        var options={
            density: 1,
            frictionAir: 0.005,
        }
       this.body = Bodies.circle(x,y,80, options);
       this.radius = 80;

       World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;    

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        
        pop();
    }
}