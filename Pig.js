class Pig{
    constructor(x,y){
        var sphere = {
            restitution: 1.0,
            friction : 1.0,
            density : 1.0
        }
     this.body = Bodies.rectangle(x,y,50,50,sphere);
     this.qwerty = 50;
     this.awsd = 50;
     World.add(world,this.body);
    }
    Display() {
        push();
        translate(this.body.position.x,this.body.position.y);  
        rotate(this.body.angle);  
        rectMode(CENTER);
        fill ("green");
        rect(0,0,this.qwerty,this.awsd);
        pop ();
    }
} 