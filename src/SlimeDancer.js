//declar a variable to create our Class constructor for Squiggly Dancer
var SlimeDancer = function(verPos, horiPos, timeInBetweenSteps) {
  //call the Dancer superclass in the context of this
  MakeDancer.call(this, verPos, horiPos, timeInBetweenSteps);
  //change the node element to a img element instead of Dancer's spag
  this.$node = $('<img class="slimeDancer" src="images/Slime.png" />');
    // and make a reference to the image file location
  this.setPosition(verPos,horiPos);
}

SlimeDancer.prototype = Object.create(MakeDancer.prototype);
SlimeDancer.prototype.constructor = SlimeDancer;

SlimeDancer.prototype.step = function(){
  this.$node.fadeOut();
  this.$node.fadeIn();
  MakeDancer.prototype.step.call(this);
}