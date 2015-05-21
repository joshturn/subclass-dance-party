/*
top
left
size?
color
shape

steps:
oscillate size
spin
change color

positioning:
trig stuff

 */

var CrazySquare = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("square");

  this.rotation = 0;
  //this.timeBetweenSteps = timeBetweenSteps/4;

};

var randomHex = function() {
  var letters = '01234567890ABCDEF'.split("");
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

CrazySquare.prototype = Object.create(Dancer.prototype);
CrazySquare.prototype.constructor = CrazySquare;

CrazySquare.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.rotation += 0.05;
  if (this.rotation >= 1) this.rotation = 0;
  this.$node.css('transform', 'rotate(' + this.rotation + 'turn)');
  this.$node.css('border-color', randomHex());
  //this.$node ()
};
