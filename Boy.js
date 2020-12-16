class Boy{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Boy_Standing.png")
        this.animation = loadAnimation("Images/Boy_Running.png","Images/Boy_Standing.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        animation(this.animation, 0, 0);
        pop();
      }

      moveRight(){
        this.body.position.x+=5;
      }

      moveLeft(){
        this.body.position.x-=5;
      }
      moveUp(){
        this.body.position.y-=5;
      }
      moveDown(){
        this.body.position.y+=5;
      }
}