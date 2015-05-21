// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(this.top, this.left);
  this.step();

};

Dancer.prototype.step = function(){
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};


Dancer.prototype.setPosition = function(){
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

/* To Do:
Basic Requirements

Create new Dancers
- Create new source file
- Put new source files into dancefloor.html

Top Bar
- Add a link in the top bar to create a dancer of each new type
- Style topbar
- Add links for alternate backgrounds
- Add links for line-up, fredify, etc

Extra Features
- Implement line-up button
- Make dancers interact with other dancers
- Make dancers react to the mouse (J'query mouse handler)

Extra Credit:
- CSS transitions
- conga line
- audio
- Paired audio + background (themes)
- ???
- Profit



 */



