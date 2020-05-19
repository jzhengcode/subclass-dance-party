// Creates and returns a new dancer object that can step
var MakeDancer = function(verPos, horiPos, timeBetweenSteps) {

  Object.create(MakeDancer.prototype);

  this.vertLoc = verPos;
  this.horiLoc = horiPos;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  debugger;
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(verPos, horiPos);

  // return dancer;
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(verPos, horiPos)
{
  var styleSettings = {
    top: verPos,
    left: horiPos,
  };

  this.$node.css(styleSettings);
};