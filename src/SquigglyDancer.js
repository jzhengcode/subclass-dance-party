//declar a variable to create our Class constructor for Squiggly Dancer
var SquigglyDancer = function(verPos, horiPos, timeInBetweenSteps) {
  //call the Dancer superclass in the context of this
  MakeDancer.call(this, verPos, horiPos, timeInBetweenSteps);
  //change the node element to a img element instead of Dancer's spag
  this.$node = $('<img class="squigglyDancer" src="images/Mr.Swiggles.png" />');
    // and make a reference to the image file location
}

SquigglyDancer.prototype = Object.create(MakeDancer.prototype);
SquigglyDancer.prototype.constructor = SquigglyDancer;

SquigglyDancer.prototype.step = function(){
  this.$node.toggle();
  MakeDancer.prototype.step.call(this);
}
SquigglyDancer.prototype.lineUp = function() {
  //if verPos is greater than 500
  if (this.verPos >= 500) {
    this.verPos = 900;
  } else {
    this.verPos = 100;
  }
}