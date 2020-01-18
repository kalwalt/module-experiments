;(function () {
  'use strict'
  var Operations = function (){
    this.a = null;
    this.b = null;
  }
  Operations.prototype.addition = function(a, b){
    this.a = a;
    this.b = b;
    return a + b;
  }

  module.exports = Operations;
  })();
