class Ground{
    constructor(x,y,width,height){
        var fall = {
            isStatic : true
          }
     this.body = Bodies.rectangle(x,y,width,height,fall);
     this.qwerty = width;
     this.awsd = height;
     World.add(world,this.body);
    }
    Display() {
        rectMode(CENTER); 
        rect(this.body.position.x,this.body.position.y,this.qwerty,this.awsd);
    }
}