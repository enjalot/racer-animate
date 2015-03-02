// TODO: use only pieces of d3 needed (d3.interpolate)
var d3 = require('d3');

module.exports = function(racer) {
  racer.Model.prototype.animate = Animate;
}


function Animate(output, input, options) {
  if(!options) {
    options = {}
  }
  if(!options.ease) options.ease = "linear";
  if(!options.duration && options.durations !== 0) options.duration = 1000;
  if(!options.delay) options.delay = 0;

  this.on("change", "*", function(path, newValue, oldValue) {
    // TODO loop for duration
    // ease and interpolate
    model.set(output, newValue)
  });
}

/*
racer plugin
use only the d3 pieces that are absolutely necessary

decorate racer.Model
racer.use (require 'racer-animate')

# implementation
model.on "change", "foo", ->
  requestAnimFrame
    ...
    model.set 'animated_foo'
*/