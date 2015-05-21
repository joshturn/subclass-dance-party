var Pacman = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);



  this.$node.addClass("pacman");

  // this.color = "yellow";


};

Pacman.prototype = Object.create(Dancer.prototype);
Pacman.prototype.constructor = Pacman;

Pacman.prototype.step = function() {
  Dancer.prototype.step.call(this);


  this.left += 20;

  this.setPosition();

  if (this.left > $(window).width()) {
    this.left = 0;
  }

  // if (this.top > $(window).width()) {
  //   this.top = 0;
  // }


  // this.$node.css("border-color", this.color);

  // if (this.color === "yellow") this.color = "blue";
  // if (this.color === "blue") this.color = "yellow";

}
