class Iron {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            density: 20,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        fill("lightgreen");
        rotate(angle);
        rectMode(CENTER);
        //displays
        rect(0, 0, this.width, this.height);
        pop();
    }
}