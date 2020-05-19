//declar a variable to create our Class constructor for Squiggly Dancer
var HoomanDancer = function(verPos, horiPos, timeInBetweenSteps) {
  //call the Dancer superclass in the context of this
  MakeDancer.call(this, verPos, horiPos, timeInBetweenSteps);
  //change the node element to a img element instead of Dancer's spag
  this.$node = $('<img class="HoomanDancer" src="/images/Hooman.png" />');
    // and make a reference to the image file location
  this.setPosition(verPos,horiPos);
}

HoomanDancer.prototype = Object.create(MakeDancer.prototype);
HoomanDancer.prototype.constructor = SquigglyDancer;

HoomanDancer.prototype.step = function(){
  // this.$node.fadeOut();
  // this.$node.fadeIn();
  this.$node.slideToggle();
  MakeDancer.prototype.step.call(this);
}
HoomanDancer.prototype.lineUp = function() {
  //if verPos is greater than 500
  if (this.verPos >= 500) {
    this.verPos = 900;
  } else {
    this.verPos = 100;
  }
}