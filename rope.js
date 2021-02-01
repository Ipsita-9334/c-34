class Rope{ 
    constructor(body1, coordinate){
        var options={
            bodyA: body1,
            pointB: coordinate,
            stiffness: 0.04,
            lenght: 10
        }
        //creating slingshot body 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
        if(this.sling.bodyA){       
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null;

    }
}   