class Maze {

  constructor(x,y,height,angle){
      this.x=x
      this.y=y
      this.height=height
      this.width=20
      this.body = Bodies.rectangle(x,y,20,height,{isStatic:true})
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body)
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("grey")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop(); 

  }
}