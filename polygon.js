class Polygon{
    constructor(x,y,radius){

        var options={
        density: 1.5
        }

          //polygon
  this.body = Bodies.circle(x,y,radius,options)
 this.image=loadImage("hexagon.png")

  World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
    }
    
 
  
}