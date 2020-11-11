class Box{
    constructor(x,y,width,height){
        var sphere = {
            restitution: 1.0
        }
     this.body = Bodies.rectangle(x,y,width,height,sphere);
     this.qwerty = width;
     this.awsd = height;
     World.add(world,this.body);
    }
    Display() {
        push();
        translate(this.body.position.x,this.body.position.y);  
        rotate(this.body.angle);  
        rectMode(CENTER); 
        rect(0,0,this.qwerty,this.awsd);
        pop ();
    }
}