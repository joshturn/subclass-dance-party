var CrazySquare = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("square");

  this.rotation = 0;
  //this.timeBetweenSteps = timeBetweenSteps/4;

};
