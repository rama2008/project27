class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      var  options = {
            bodyA : body1,
            bodyB : body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
    
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
    }

    fly (){
        this.rope.bodyA=null;
    }

    display(){
        if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}