var MakeBlinkyDancer = function(verPos, horiPos, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  MakeDancer.call(this, verPos, horiPos, timeBetweenSteps);
  this.$node = $('<img class ="blinkyDancer" src="images/KissStar.png" />')
  //"images/Mr.Swiggles.png" />'

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
  // this.setPosition(verPos, horiPos);
  this.setPosition(verPos,horiPos);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  this.$node.toggle()
  MakeDancer.prototype.step.call(this);
//   this.$node.toggle();
};