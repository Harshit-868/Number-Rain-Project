class Drop {
    constructor() {
        var options = {}
        this.body = Bodies.rectangle(-10, -5, 7.5, 7.5, options);
        this.width = 7.5;
        this.height = 7.5;
        World.add(world, this.body);
    }
    
    display() {
        var num = Math.floor(Math.random() * 10);
        var xPos = Math.floor((Math.random() * 790) + 5);
        var yPos = this.body.position.y;
        fill("white");
        text(num, xPos, yPos);
    }    
}