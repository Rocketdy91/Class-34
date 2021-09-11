class Rope {
constructor(bodyA,pointB){
var options = {
bodyA:bodyA,pointB:pointB,length:250,stiffness:0.4
}
this.Rope = Constraint.create(options)
this.PointB = pointB
World.add(world,this.Rope)
}
display(){
var pointA = this.Rope.bodyA.position
var pointB = this.PointB
push ()
stroke("blue")
strokeWeight(5)
line (pointA.x,pointA.y,pointB.x,pointB.y)
pop ()
}
}
