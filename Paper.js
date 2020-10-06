class Paper{
  /*constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1
      }
      this.x=x
      this.y=y
      this.r=r
      this.body=Bodies.rectangle(200,200,50,50,options)
  }
  display(){
    var pos=this.body.position

    push ()
translate(pos.x,pos.y)
rectMode(CENTER)
rect(0,0,50,50)

    pop ()
}
    */
   constructor(x,y,w,h){
    var options={
isStatic:false,
restitution:0.3,
          friction:0.5,
          density:1
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.circle(x,y,w,options)
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push ()
translate(pos.x,pos.y)
ellipseMode(CENTER)
ellipse(0,0,50,50)

    pop ()
}
}