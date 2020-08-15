class Rope{
    constructor(body1, body2,offSetX,offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offSetX, y:this.offSetY},
            
        }
       
        // this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    // attach(body){
    //     this.sling.body1 = body;
    // }
    
    // fly(){
    //     this.sling.body1 = null;
    // }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        // strokeWeight(7);
        stroke("red");

        

        var Anchor1X = posA.x;
        var Anchor1Y = posA.y;
        var Anchor2X = posB.x+this.offSetX;
        var Anchor2Y = posB.y+this.offSetY;
        
     line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
    
}