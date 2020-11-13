class Log{
    constructor(x,y,height,angle){
        var sphere = {
            restitution: 0.7,
            friction : 1.0,
            density : 1.0
        }
     this.body = Bodies.rectangle(x,y,20,height,sphere);
     this.qwerty = 20;
     this.awsd = height;
     Matter.Body.setAngle(this.body,angle);
     World.add(world,this.body);
    }
    Display() {
        push();
        translate(this.body.position.x,this.body.position.y);  
        rotate(this.body.angle);  
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.qwerty,this.awsd);
        pop ();
    }
} 