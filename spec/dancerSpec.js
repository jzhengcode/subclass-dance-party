describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('HoomanDancer', function() {

  var hoomanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hoomanDancer = new HoomanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hoomanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it slide', function() {
    sinon.spy(hoomanDancer.$node, 'slideToggle');
    hoomanDancer.step();
    expect(hoomanDancer.$node.slideToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hoomanDancer, 'step');
      expect(hoomanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hoomanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hoomanDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('SlimeDancer', function() {

  var slimeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slimeDancer = new SlimeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slimeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its fade in and out', function() {
    sinon.spy(slimeDancer.$node, 'fadeOut');
    sinon.spy(slimeDancer.$node, 'fadeIn')
    slimeDancer.step();
    expect(slimeDancer.$node.fadeOut.called).to.be.true;
    expect(slimeDancer.$node.fadeIn.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slimeDancer, 'step');
      expect(slimeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slimeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slimeDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('Squiggly Dancer', function() {

  var squigglyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squigglyDancer = new SquigglyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squigglyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it slideToggle', function() {
    sinon.spy(squigglyDancer.$node, 'slideToggle');
    squigglyDancer.step();
    expect(squigglyDancer.$node.slideToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squigglyDancer, 'step');
      expect(squigglyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squigglyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squigglyDancer.step.callCount).to.be.equal(2);
    });
  });
});