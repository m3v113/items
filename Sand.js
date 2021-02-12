class Sand {
    constructor(x,y,radius) {
        var options = {
            restituition: 1.3,
            density: 1,
            friction: 5
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.radius = radius;
    }

    display() {
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        fill("red");
        //displays
        circle(0, 0, this.radius);
        pop();
    }
}