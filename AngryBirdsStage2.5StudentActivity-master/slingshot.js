class slingshot{
    constructor(bodyA, bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
length:10,
stiffness:0.04,
}
this.body=Constraint.create(options)
World.add(world, this.body)

    }
    display(){
push();
var pointA=this.body.bodyA.position
var pointB=this.body.bodyB.position
strokeWeight(5);
line(pointA.x, pointA.y, pointB.x, pointB.y);
pop();

    }
}