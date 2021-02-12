class Hammer {
    constructor(x,y) {
        var options = {
            density:2,
            friction:1.0,
            restituition:0.5
        }
        this.body = Bodies.rectangle(x,y,100,40,options);
        this.width = 100;
        this.height = 40;
        World.add(world, this.body);
    }

    display() {
        var position = this.body.position;
        position.x = mouseX;
        position.y = mouseY;

        push();
        //what?
        //what does this do again
        translate(position.x,position.y);
        fill("blue");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}