//declar a variable to create our Class constructor for Squiggly Dancer
var SquigglyDancer = function(verPos, horiPos, timeInBetweenSteps) {
  //call the Dancer superclass in the context of this
  MakeDancer.call(this, verPos, horiPos, timeInBetweenSteps);
  //change the node element to a img element instead of Dancer's spag
  this.$node = $('<img class="squigglyDancer" src="images/Mr.Swiggles.png" />');
    // and make a reference to the image file location
  this.setPosition(verPos,horiPos);
}

SquigglyDancer.prototype = Object.create(MakeDancer.prototype);
SquigglyDancer.prototype.constructor = SquigglyDancer;

SquigglyDancer.prototype.step = function(){
  // this.$node.fadeOut();
  // this.$node.fadeIn();
  this.$node.slideToggle();
  MakeDancer.prototype.step.call(this);
}