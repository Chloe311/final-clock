//can do multiple behaviors
function Vehicle(x,y){
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}

//mouse position and flee
Vehicle.prototype.behaviors = function(){
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(5);
  
  this.applyForce(arrive);
  this.applyForce(flee);
}

//add forces to the accelaration
Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);
}


Vehicle.prototype.update = function(){
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);// clear the acceleration
}

Vehicle.prototype.show = function(){
  stroke(255);
  strokeWeight(5);
  point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target){
  var desired = p5.Vector.sub(target,this.pos);
  var d = desired.mag();//distance
  var speed = this.maxspeed;
  if(d < 100){
    speed = map(d,0,100,0,this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired,this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.seek = function(target){
  //distant to the vector
  var desired = p5.Vector.sub(target,this.pos);
  desired.setMag(this.maxspeed);
  var steer = p5.Vector.sub(desired,this.vel);
  steer.limit(this.maxforce);
  return steer;
}

//moving to the opposite direction
Vehicle.prototype.flee = function(target){
  //distant to the vector
  var desired = p5.Vector.sub(target,this.pos);
  var d = desired.mag();
  if(d < 50)
  {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxforce);
    return steer;
  }else{
    return createVector(0,0);
  }
}
