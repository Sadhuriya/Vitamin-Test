class Vitamin {

    constructor(x,y,vit){
        this.x=x
        this.y=y
        this.image=vit
        this.radius=150
        vit=loadImage("Images/Almonds.png")
        this.body = Bodies.circle(x,y,this.radius,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER)
      image(this.image,0,0,this.radius,this.radius);
      pop(); 
  
    }

    touch(){
      World.remove(world,this.body)
    }
  }