class Hex {

    constructor(x,y,width,height) {

        var options={
            'restitution':0.8,
            'friction':0.5,
            'density':1.2,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon (1).png");
        World.add(world,this.body);

    }

    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();

    }
}
